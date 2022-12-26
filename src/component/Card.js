import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import Button from "./Button";

function Card({ cardDetail }) {
  const { updateTask, deleteTask } = useContext(DataContext);
  const [enableEdit, setEnableEdit] = useState(false);
  const [newInput, setNewInput] = useState(cardDetail);
  console.log(newInput.title);
  // console.log(cardDetail.description);
  // const handleUpdate = () => {};
  const handleUpdate = () => {
    console.log(newInput);
    setEnableEdit(true);
  };
  const submitUpdate = (e) => {
    e.preventDefault();

    updateTask(cardDetail.id, {
      title: newInput.title,
      description: newInput.description,
    });
    // console.log(newInput.id);
  };
  const handleChange = (name, value) => {
    const temp = { ...newInput, [name]: value };
    setNewInput({ ...newInput, [name]: value });
    console.log(temp);
  };
  return (
    <>
      <div>{cardDetail.title}</div>
      <div>{cardDetail.description}</div>
      <button onClick={() => handleUpdate}>edit</button>
      <button onClick={() => deleteTask(cardDetail.id)}>delete</button>
      <div>
        <form>
          <input
            name="title"
            value={newInput.title}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <textarea
            name="description"
            value={newInput.description}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          ></textarea>
          <button type="submit" onClick={submitUpdate}>
            Update Task
          </button>
        </form>
      </div>
    </>
  );
}

export default Card;
