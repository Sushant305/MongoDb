import React from "react";

const Navbar = () => {
  return (
    <header className="pt-5 pb-4 shadow-2xl">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-wide text-[#111936]">
          My
          <span className="bg-gradient-to-r from-violet-600 to-indigo-400 bg-clip-text text-transparent">
            ToDo
          </span>
          List
        </h1>
      </div>

      <div className="mx-auto mt-2 h-1.5 w-20 rounded-full bg-violet-400"></div>
    </header>
  );
};

export default Navbar;
