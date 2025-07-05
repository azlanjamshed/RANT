import React from "react";
import Post from "../component/Post";

const Home = () => {
  return (
    <>
      {/* <div className=" flex flex-col items-center  justify-center gap-10">
        <button className="border-2 text-5xl p-8 bg-green-300 text-gray-800 rounded-lg hover:bg-gray-800 hover:border-green-300 hover:text-green-300 transition-all duration-300 cursor-pointer tracking-widest">
          Post
        </button>
        <button className="border-2 text-5xl p-8 bg-green-300 text-gray-800 rounded-lg hover:bg-gray-800 hover:border-green-300 hover:text-green-300 transition-all duration-300 cursor-pointer tracking-widest">
          Blog
        </button>
      </div> */}
      <Post />
    </>
  );
};

export default Home;
