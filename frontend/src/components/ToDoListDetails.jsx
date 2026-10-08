import React from "react";
import { useToDoListContext } from "../hooks/useToDoListContext";

const ToDoListDetails = ({ toDoList }) => {
  const { dispatch } = useToDoListContext();

  const handleClick = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/ToDoList/${toDoList._id}`,
      {
        method: "DELETE",
      },
    );

    if (response.ok) {
      dispatch({ type: "DELETE_TODOLIST", payload: toDoList });
    }
  };

  return (
    <div className="relative flex h-[250px] w-full flex-col rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-700 p-4 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
      <div className="flex flex-1 flex-col items-center justify-center text-center text-white">
        <h2 className="text-3xl font-bold"> {toDoList.title}</h2>

        <p className="mt-2 text-sm text-white/90">{toDoList.description}</p>
      </div>

      <button
        onClick={handleClick}
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-white p-3 text-sm font-semibold text-gray-800 transition-all duration-150 ease-in-out hover:translate-y-0.5 hover:shadow-md active:translate-y-[1px] active:scale-95"
      >
        <span className="material-symbols-outlined">delete</span>
        Delete Task
      </button>
    </div>
  );
};

export default ToDoListDetails;
