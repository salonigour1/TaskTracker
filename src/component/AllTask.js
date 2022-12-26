import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import Card from "./Card";

function AllTask() {
  const { data, setData } = useContext(DataContext);
  console.log(data);

  return (
    <div>
      {data.map((curr, index) => (
        <Card key={index} cardDetail={curr} />
      ))}
    </div>
  );
}

export default AllTask;
