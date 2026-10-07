import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="text-center">
      <BrowserRouter>

        <Navbar />

        <div>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>

        
      </BrowserRouter>
    </div>
  );
};

export default App;
