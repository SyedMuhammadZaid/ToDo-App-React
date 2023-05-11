import React from "react";
import TextField from "@mui/material/TextField";
import Calender from "../components/calender";

const TodoScreen = () => {
  return (
    <>
      <h1>Task Organizer</h1>
      <div className="container">
        <div className="todo-area">
          <TextField fullWidth label="What To Do..." id="fullWidth" />
          <div className="date-selector">
            <p>Kindly select the date for your task</p>
            <Calender />
          </div>
        </div>
        <div className="todo-history">
          <h3>History</h3>
        </div>
      </div>
    </>
  );
};

export default TodoScreen;
