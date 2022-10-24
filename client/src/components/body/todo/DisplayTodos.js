import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Todo from "./Todo";

export const DisplayTodos = () => {
  const [todoData, setTodoData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/todos/display-todos")
      .then((res) => setTodoData(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <article
        style={{ paddingTop: "40px", marginLeft: "180px", width: "70%" }}
      >
        <ul>
          {todoData &&
            todoData.map((list) => <Todo key={todoData._id} todo={list} />)}
        </ul>
      </article>
    </div>
  );
};

export default DisplayTodos;
