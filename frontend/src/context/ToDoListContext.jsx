import { createContext, useReducer } from "react";

export const toDoListContext = createContext();

export const toDoListReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOLIST":
      return {
        toDoList: action.payload,
      };
    case "CREATE_TODOLIST":
      return {
        toDoList: [action.payload, ...state.toDoList],
      };
    case "DELETE_TODOLIST":
      return {
        toDoList: state.toDoList.filter((each) => each._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const ToDoListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toDoListReducer, {
    toDoList: [],
  });
  return (
    <toDoListContext.Provider value={{ ...state, dispatch }}>
      {children}
    </toDoListContext.Provider>
  );
};
