import React from "react";
import Add from "./Add";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-green-300 flex justify-center items-center md:justify-between md:px-10 h-16 py-10 md:py-20 border-b-4 sticky top-0  border-gray-800">
      <h1 className=" text-6xl md:text-8xl font-libre text-gray-800">
        <NavLink to="/"> Pelar.Com </NavLink>
      </h1>
      <Add />
    </div>
  );
};

export default Header;
