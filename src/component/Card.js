import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import Button from "./Button";
import { MdDelete, MdEdit } from "react-icons/md";

function Card({ cardDetail }) {
  const { updateTask, deleteTask } = useContext(DataContext);
  const [enableEdit, setEnableEdit] = useState(false);
  const [newInput, setNewInput] = useState(cardDetail);
  console.log(newInput.title);
  // console.log(cardDetail.description);
  // const handleUpdate = () => {};
  const handleUpdate = () => {
    console.log(newInput);
    setEnableEdit(false);
  };
  const submitUpdate = (e) => {
    updateTask(cardDetail.id, {
      title: newInput.title,
      description: newInput.description,
    });
    // setNewInput({ title: "", description: "" });
    setEnableEdit(false);
    // console.log(newInput.id);
  };
  const handleChange = (name, value) => {
    const temp = { ...newInput, [name]: value };
    setNewInput({ ...newInput, [name]: value });
    console.log(temp);
  };
  return (
    <>
      <div className="card">
        <div className="card__title">{cardDetail.title}</div>
        <div className="card__description">{cardDetail.description}</div>
        <div className="card__btns">
          <MdEdit
            color="blueviolet"
            size="1.4rem"
            onClick={() => {
              setEnableEdit(true);
            }}
          >
            edit
          </MdEdit>
          <MdDelete
            color="blueviolet"
            size="1.4rem"
            onClick={() => deleteTask(cardDetail.id)}
          >
            delete
          </MdDelete>
        </div>
      </div>

      <div className={`container ${enableEdit ? "active" : ""}`}>
        <form>
          <div className="formHeading">Update Task</div>
          <hr />
          <div className="field">
            <label>Title</label>
            <br />
            <input
              name="title"
              value={newInput.title}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <br />
            <textarea
              name="description"
              value={newInput.description}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            ></textarea>
          </div>
          <div>
            <button type="submit" onClick={submitUpdate} className="btn">
              Update Task
            </button>
            <button
              type="button"
              className="btn cancel"
              onClick={() => {
                setEnableEdit(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Card;
