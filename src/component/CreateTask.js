import React, { useContext, useState } from "react";
import DataContext, { DataProvider } from "../context/DataContext";
import Button from "./Button";

function CreateTask({ setCreate }) {
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
    const temp = { ...input, id: new Date().getTime() };
    addTask(temp);
    setInput({
      title: "",
      description: "",
    });
    setCreate(false);
    // setData({ ...input, id: new Date().getTime() });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="formHeading">Create Task</div>
      <hr />
      <div className="field">
        <label>Title</label>
        <br />
        <input
          type="text"
          name="title"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="field">
        <label>Description</label>
        <br />
        <textarea
          name="description"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        ></textarea>
      </div>
      <div>
        <button type="submit" className="btn">
          Create Task
        </button>

        <button
          type="button"
          className="btn cancel"
          onClick={() => {
            setCreate(false);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CreateTask;
