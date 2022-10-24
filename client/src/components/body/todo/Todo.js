import React from "react";
import axios from "axios";
import { useState } from "react";


const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);

  const toggleTodo = async (id) => {
    await axios
      .get(`http://localhost:5000/todos/toggle-todos/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setEditing((prevState) => !prevState);
    const id = todo._id
    await axios
      .put(`http://localhost:5000/todos/update-todos/${id}`, { text })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <li
        onClick={() => toggleTodo(todo._id)}
        style={{
          backgroundColor: "#34495e",
          padding: "15px",
          margin: "5px",
          overflowX: "hidden",
          borderRadius: "5px",
          cursor: "pointer",
          textDecoration: todo.done ? "line-through" : "",
        }}
      >
        <span style={{ display: editing ? "none" : "", color: "white" }}>
          {todo.data}
        </span>

        <form
          style={{ display: editing ? "inline" : "none" }}
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              width: "85%",
              fontSize: "16px",
              color: "white",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid #FFFFFF",
            }}
          />
        </form>

        <span style={{ float: "right", marginRight: "20px" }}>
          <i className="fas fa-trash" />
        </span>
        <span
          style={{ float: "right", marginRight: "20px" }}
          onClick={() => setEditing((prevState) => !prevState)}
        >
          <i className="fas fa-pen" />
        </span>
      </li>
    </div>
  );
};

export default Todo;
