import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import covid from "../images/covid.svg";
import { UserContext } from "../Context/UserContext";
import Card from "../Components/Card";
import Table from "../Components/Table";

export default function Home() {
  const context = useContext(UserContext);

  // if (!context.user?.uid) {
  //   return <Redirect to="/signin" />;
  // }

  let today = new Date();
  let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  const [totalIndiaCase, setTotalIndiaCase] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalStateWiseCount, setTotalStateWiseCount] = useState([]);
  const [totalStateArrayLength, setTotalStateArrayLength] = useState("");
  let [filteredData] = useState();
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const resp = await axios.get("https://api.covid19india.org/data.json");
    setTotalIndiaCase(resp.data.statewise.slice(0, 1));
    const totalStateWiseCountnew = resp.data.statewise.slice(1);
    setTotalStateWiseCount(totalStateWiseCountnew);
    setTotalStateArrayLength(totalStateWiseCountnew.length);
    setLoading(true);
  };
  console.log(totalIndiaCase);

  const stateSearch = (searchText) => {
    filteredData = totalStateWiseCount.filter((value) => {
      return value.state.toLowerCase().includes(searchText.toLowerCase());
    });
    setTotalStateWiseCount(filteredData);
  };

  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  } else {
    return (
      <div className="App">
        <span>
          <img
            src={covid}
            style={{ height: "10rem", marginTop: "5px" }}
            alt="covid-image"
          />
          <h1>Covid-19 Dashboard</h1>
        </span>
        <h4>As of {date}</h4>
        <Card totalIndiaCase={totalIndiaCase} />
        <Table
          totalStateWiseCount={totalStateWiseCount}
          totalStateArrayLength={totalStateArrayLength}
          loading={loading}
          loadData={loadData}
          stateSearch={stateSearch}
        />
      </div>
    );
  }
}
