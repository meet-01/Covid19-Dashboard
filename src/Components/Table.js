import React, { useState } from "react";
import { Table, Space, Input, Pagination } from "antd";

export default function TableComponent({
  totalStateWiseCount,
  loading,
  loadData,
  stateSearch,
}) {
  const [sortedinfo, setSortedinfo] = useState({});
  const [searchText, setSearchText] = useState("");
  const columns = [
    {
      title: "State/UT",
      dataIndex: "state",
      width: 120,
    },
    {
      title: "Confirmed",
      dataIndex: "confirmed",
      width: 120,
    },
    {
      title: "Active",
      dataIndex: "active",
      width: 120,
    },
    {
      title: "Recovered",
      dataIndex: "recovered",
      width: 120,
    },
    {
      title: "Deaths",
      dataIndex: "deaths",
      width: 120,
    },
    {
      title: "Daily Confirmed",
      dataIndex: "deltaconfirmed",
      width: 120,
    },
    {
      title: "Daily Recovered",
      dataIndex: "deltarecovered",
      width: 120,
    },
    {
      title: "Daily Deaths",
      dataIndex: "deltadeaths",
      width: 120,
    },
  ];

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      loadData();
    }
  };
  const clearAll = () => {
    setSearchText("");
    loadData();
  };

  const refresh = () => {
    window.location.reload();
  };
  return (
    <>
      <Space style={{ marginBottom: 16, marginTop: 10 }}>
        <input
          placeholder="search your state"
          onChange={handleSearch}
          style={{ height: "35px" }}
          allowClear
          value={searchText}
          type="text"
        />
        <button
          onClick={() => stateSearch(searchText)}
          className="btn btn-raised btn-success "
        >
          Search
        </button>
        <button onClick={clearAll} className="btn btn-raised btn-info ">
          Clear
        </button>
        <button onClick={refresh} className="btn btn-raised btn-warning ">
          Refresh
        </button>
      </Space>

      <Table
        columns={columns}
        dataSource={totalStateWiseCount}
        pagination={true}
      />
    </>
  );
}
