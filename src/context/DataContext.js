import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "text",
      description: "twstsy",
    },
  ]);
  const fetchData = () => {};
  const addTask = (newInput) => {
    console.log("object", newInput);
    setData([...data, newInput]);
    console.log(data);
  };
  const deleteTask = (id) => {
    console.log(id);
  };
  const updateTask = (id, newInput) => {};
  return (
    <DataContext.Provider
      value={{ data, setData, addTask, deleteTask, updateTask }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
