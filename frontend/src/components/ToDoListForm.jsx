import React, { useState } from "react";
import { useToDoListContext } from "../hooks/useToDoListContext";

const ToDoListForm = () => {
  const {dispatch}= useToDoListContext()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toDoList = { title, description };
    const response = await fetch("/api/ToDoList", {
      method: "POST",
      body: JSON.stringify(toDoList),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    } else {
      dispatch({
        type: "CREATE_TODOLIST",
        payload: json,
      });
      setDescription("");
      setError("");
      setTitle("");
    }
  };

  return (
    <div className="w-full">
      <div className="rounded-2xl bg-white p-6 shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
        <h2 className="mb-6 text-center text-2xl font-bold text-[#111936]">
          Add New Task
        </h2>

        <form action="" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Task Title:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              id="title"
              placeholder="Enter Task Here"
              className="w-full 
              rounded-xl 
              border
               border-gray-200
                bg-gray-50 px-4 py-3
                 text-gray-800
                  outline-none 
                  transition-all 
                  duration-200 
                   focus:border-violet-500
                focus:bg-white
                focus:ring-2
                focus:ring-violet-200"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Task Description:
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              id="description"
              placeholder="Enter Task Here"
              className="w-full 
              rounded-xl 
              border
               border-gray-200
                bg-gray-50 px-4 py-3
                 text-gray-800
                  outline-none 
                  transition-all 
                  duration-200 
                   focus:border-violet-500
                focus:bg-white
                focus:ring-2
                focus:ring-violet-200"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 text-sm font-semibold text-white shadow-md transition-all  duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-[1px] active:scale-95 "
          >
            Add Task
          </button>
        </form>

        {error && (
          <div className="mb-5 mt-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToDoListForm;
