import React, { useState } from "react";
import CreateTask from "./CreateTask";
import "./style.css";
function Header() {
  const [create, setCreate] = useState(false);
  return (
    <div className="todo">
      <header>
        <div className="heading">My Tasks</div>
        <button
          className="btn"
          onClick={() => {
            setCreate(true);
          }}
        >
          Create Task
        </button>
      </header>
      <div className={`container ${create ? "active" : ""}`}>
        <CreateTask setCreate={setCreate} />
      </div>
    </div>
  );
}

export default Header;
