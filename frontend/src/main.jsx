import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToDoListContextProvider } from "./context/ToDoListContext.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoListContextProvider>
      <App/>
    </ToDoListContextProvider>
  </StrictMode>,
)
