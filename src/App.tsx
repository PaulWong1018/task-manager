/* eslint-disable @typescript-eslint/no-unused-vars */
import { number } from "zod";
import "./style.css";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]); //todo array storing the todo list
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(""); // For the dropdown menu
  const [taskError, setTaskError] = useState("");
  const [dateError, setDateError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  const handleInputChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setTask(e.target.value);
    setTaskError(""); // Clear task error
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setDateError(""); // Clear date error
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCategoryError(""); // Clear Category error
  };

  const handleAddTodo = () => {
    let isValid = true;

    if (task.trim() === "") {
      setTaskError("Task is required");
      isValid = false;
    }

    if (date === "") {
      setDateError("Date is required");
      isValid = false;
    }

    if (category === "") {
      setCategoryError("Category is required");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const newTask = {
      id: number,
      task: task,
      date: date,
      category: category,
    };

    setTodos([...todos, newTask]);
    setTask("");
    setDate("");
    setCategory("");
  };

  const handleRemoveTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <h1 className="text-3xl py-5 flex justify-center">Task Management App</h1>
      <div className="flex justify-center space-y-5">
        <div className="space-y-5">
          <h3>Title</h3>
          <input className="border-black border-2" type="text" placeholder="Enter a task..." value={task} onChange={handleInputChange} />
          {taskError && <p className="text-red-500">{taskError}</p>}

          <h3>Due Date</h3>
          <input className="border-black border-2" type="date" placeholder="dd/mm/yyyy" value={date} onChange={handleDateChange} />
          {dateError && <p className="text-red-500">{dateError}</p>}

          <h3>Category</h3>
          <select value={category} onChange={handleCategoryChange} className="border-black border-2">
            <option></option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
          {categoryError && <p className="text-red-500">{categoryError}</p>}

          <button className="block border-black border-2 p-2" onClick={handleAddTodo}>
            Add
          </button>
        </div>
      </div>

      <div className="border-b-2 my-5"></div>

      <div className="flex justify-center p-5">
        <table className="border-black border-2">
          {todos.length > 0 && (
            <thead>
              <tr className="border-black border-2">
                <th className="border-black border-2 py-3 px-8">Title</th>
                <th className="border-black border-2 py-3 px-8">Due Date</th>
                <th className="border-black border-2 py-3 px-8">Category</th>
              </tr>
            </thead>
          )}
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td className="border-black border-2 py-3 px-8">{todo.task}</td>
                <td className="border-black border-2 py-3 px-8">{todo.date}</td>
                <td className="border-black border-2 py-3 px-8">{todo.category}</td>
                <td className="border-black border-2">
                  <button className="bg-red-400 rounded-md block border-black border-2 py-3 px-8 m-3" onClick={() => handleRemoveTodo(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
