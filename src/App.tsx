/* eslint-disable @typescript-eslint/no-unused-vars */
import './style.css';

interface TaskModel {
  id: number;
  title: string;
  dueDate: Date;
  category: string;
}

import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTask(e.target.value);
  };

  function handleAddTodo(): void {
    if (task.trim() === "") return; // Don't add empty tasks

    setTodos([...todos, task]);
    setTask("");
  }

  const handleRemoveTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1 className='text-3xl py-5'>Task Management App</h1>
      <form className='space-y-5'>
        <h3>Title</h3>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={handleInputChange}
        />
        <h3>Due Date</h3>
        <input type="date" placeholder="dd/mm/yyyy" />

        <h3>Category</h3>
        <select name="cars" id="cars">
          <option value="volvo">Groceries</option>
          <option value="saab">Utilities</option>
          <option value="opel">Entertainment</option>
        </select>

        <button className="block" onClick={handleAddTodo}>
          Submit
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
