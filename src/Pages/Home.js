import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import covid from "../images/covid.svg";
import { UserContext } from "../Context/UserContext";
import Card from "../Components/Card";
import Table from "../Components/Table";

export default function Home() {
  const context = useContext(UserContext);

  let today = new Date();
  let date = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  // let date =
  //   today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  const [totalIndiaCase, setTotalIndiaCase] = useState([]);
  const [totalStateWiseCount, setTotalStateWiseCount] = useState([]);
  let [filteredData] = useState();
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const resp = await axios.get("https://api.covid19india.org/data.json");
    setTotalIndiaCase(resp.data.statewise.slice(0, 1));
    const totalStateWiseCountnew = resp.data.statewise.slice(1);
    setTotalStateWiseCount(totalStateWiseCountnew);
  };
  console.log(totalStateWiseCount);

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
            alt="covidi"
          />
          <h1>Covid-19 Dashboard</h1>
        </span>
        <h4>As of {date}</h4>
        <Card totalIndiaCase={totalIndiaCase} />
        <Table
          totalStateWiseCount={totalStateWiseCount}
          loadData={loadData}
          stateSearch={stateSearch}
        />
      </div>
    );
  }
}
