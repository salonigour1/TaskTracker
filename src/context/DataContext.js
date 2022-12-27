import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("todos")) || [];
    setData(getData);
  }, []);

  const addTask = (newInput) => {
    const getData = JSON.parse(localStorage.getItem("todos")) || [];
    setData(getData);
    console.log(data);
    console.log(newInput);
    const newData = [...getData, newInput];
    setData(newData);

    localStorage.setItem("todos", JSON.stringify(newData));
  };
  const deleteTask = (id) => {
    const getData = JSON.parse(localStorage.getItem("todos")) || [];
    console.log(getData);
    const newData = getData.filter((curr) => curr.id !== id);
    console.log(newData);
    setData(newData);
    console.log(newData);
    localStorage.setItem("todos", JSON.stringify(newData));
  };
  const updateTask = (id, newInput) => {
    const getData = JSON.parse(localStorage.getItem("todos")) || [];
    console.log(newInput);
    console.log(getData);
    const newData = getData.map((curr) => (curr.id === id ? newInput : curr));
    console.log(newData);
    localStorage.setItem("todos", JSON.stringify(newData));
  };
  return (
    <DataContext.Provider
      value={{ data, setData, addTask, deleteTask, updateTask }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
