import React from "react";

const Post = ({ id, title, content, location, image }) => {
  return (
    <>
      <div className="w-80 h-80 md:w-4/9 md:h-96 rounded-2xl border-[3px] border-gray-300 shadow-[4px_4px_0px_rgba(0,0,0,0.5)]  flex flex-col    bg-white overflow-hidden mb-5">
        <div className=" bg-green-300 p-1 pl-3 flex flex-col gap-1 text-gray-800 font-semibold">
          <h1 className="text-xl md:text-3xl">{id}</h1>
          <p className="text-xs md:text-sm">{location}</p>
        </div>
        {/* <div>
          <img src={image} alt="" />
        </div> */}
        <div className="p-3 flex flex-col gap-2 items-center justify-center ">
          <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
          <hr className="w-[80%]" />
          <p className="text-sm md:text-base text-center text-gray-700">
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Post;
