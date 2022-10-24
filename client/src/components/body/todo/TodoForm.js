import { useState } from "react";
/*import { addNewTodo } from "../../../redux/actions/todo";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";*/
import React from "react";
import axios from "axios";

function TodoForm() {
  const [text, setText] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //dispatch(addNewTodo(text));
    console.log(text);
    await axios
      .post("http://localhost:5000/todos/add-todos", {
        text,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log("here");
        console.log(error);
      });
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <form style={{ paddingTop: "40px" }} onSubmit={handleFormSubmit}>
        <input
          placeholder="Enter your task..."
          onChange={handleChange}
          style={{
            fontSize: "20px",
            color: "#2c3e90",
            width: "80%",
            border: "none",
            outline: "none",
            borderBottom: "1px solid #2c3e90",
            padding: "5px",
            marginLeft: "120px",
          }}
          value={text}
        />
      </form>
    </div>
  );
}

export default TodoForm;
