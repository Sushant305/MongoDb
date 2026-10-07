import { useContext } from "react";
import { toDoListContext } from "../context/ToDoListContext";


export const useToDoListContext = ()=>{
    const context = useContext(toDoListContext)
    
    if (!context) {
        throw Error ("use TO DO LIST Context must be used inside a WorkoutContextProvider");
        
    }

    return context

}