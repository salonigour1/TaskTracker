import React, { useContext, useState } from "react";
import DataContext, { DataProvider } from "../context/DataContext";
import Button from "./Button";

function CreateTask() {
  const { data, setData, addTask } = useContext(DataContext);

  const [input, setInput] = useState({
    id: 0,
    title: "",
    description: "",
  });
  const handleChange = (name, value) => {
    console.log(name, value);
    setInput({ ...input, [name]: value });
    console.log(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = { ...input, id: new Date().getTime() };
    addTask(temp);
    // setData({ ...input, id: new Date().getTime() });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <textarea
        name="description"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      ></textarea>
      <Button type="submit">Create Task</Button>
    </form>
  );
}

export default CreateTask;
