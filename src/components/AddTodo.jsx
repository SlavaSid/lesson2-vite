/* eslint-disable react/prop-types */
import './AddTodo.css'
import { useState } from "react";
import { TodoList } from "./TodoList";

export const AddTodo = ({ todos, addTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoBody, setTodoBody] = useState('');

  const addNewTodo = () => {
    const newTodo = { id: 4, title: todoTitle, body: todoBody };
    addTodo(newTodo);
    setTodoTitle('');
    setTodoBody('');
  };

  const onChangeTitle = (event) => {
    setTodoTitle(event.target.value);
  };

  const onChangeBody = (event) => {
    setTodoBody(event.target.value);
  };

  return (
    <div className="main">
      <TodoList todos={todos} />
      <div>
        <input value={todoTitle} onChange={onChangeTitle} />
        <input value={todoBody} onChange={onChangeBody} />
      </div>
      <div className='btn'>
        <button onClick={addNewTodo}>Add todo</button>
      </div>
    </div>
  );
};


