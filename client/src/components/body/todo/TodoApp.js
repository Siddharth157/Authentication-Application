import React from "react";
import TodoHeader from "./TodoHeader";
import TodoForm from "./TodoForm";
import DisplayTodos from "./DisplayTodos";

function TodoApp() {
  return (
    <div>
      <TodoHeader />
      <TodoForm />
      <DisplayTodos />
    </div>
  );
}

export default TodoApp;

//onClick={() => setEditing(prevState => !prevState)}
//display: editing ? "none" : "",
