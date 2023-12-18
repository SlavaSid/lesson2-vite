import { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import "./App.css";

const todoArray = [
  { id: 1, title: "React", body: "The library for web and native user interfaces"},
  { id: 2, title: "Angular", body: "The web development framework for building the future"},
  { id: 3, title: "Vue", body: "The Progressive JavaScript Framework"},
];
function App() {
  const [todos, setTodos] = useState(todoArray);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  
  return (
    <div className="app">
      <AddTodo todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default App;
