import React, { useEffect, useState } from "react";
import ToDoListDetails from "../components/ToDoListDetails";
import ToDoListForm from "../components/ToDoListForm";
import { useToDoListContext } from "../hooks/useToDoListContext";

const HomePage = () => {
  // const [toDoList, setToDoList] = useState(null);
  const { toDoList, dispatch } = useToDoListContext();

  useEffect(() => {
    const fetchToDoList = async () => {
      const response = await fetch("/api/ToDoList");
      const json = await response.json();
      if (response.ok) {
        // setToDoList(json);
        dispatch({ type: "SET_TODOLIST", payload: json });
      }
    };
    fetchToDoList();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-[#f1f1f1] px-6 py-8">
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[4fr_1.5fr]">
        <div className="w-full ">
          <div className="grid grid-cols-4 gap-4">
            {toDoList &&
              toDoList.map((toDo) => (
                <ToDoListDetails key={toDo._id} toDoList={toDo} />
              ))}
          </div>
        </div>

        <div className="sticky top-8 h-fit w-full">
          <ToDoListForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
