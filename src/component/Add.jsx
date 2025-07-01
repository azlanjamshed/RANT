import React from "react";
import { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="border-2 py-5 px-10 rounded-2xl font-black text-xl text-green-300 bg-gray-800 hover:text-gray-800 hover:bg-green-300 transition-colors duration-300 ease-in-out hidden md:block cursor-pointer tracking-widest"
        onClick={() => navigate("/add")}
      >
        RANT!
      </button>
      <IoIosAdd
        className="md:hidden bg-green-300 text-gray-800 font-bold rounded-full w-10 h-10 fixed bottom-10 right-10 opacity-30 cursor-pointer hover:border-2 hover:border-green-300 hover:bg-gray-800 hover:text-green-300"
        onClick={() => navigate("/add")}
      />
    </div>
  );
};

export default Add;
