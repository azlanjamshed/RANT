import React from "react";
import { Link } from "react-router-dom";
const BlogCard = ({ id, title, location, username, details }) => {
  return (
    <>
      <div className="w-80   md:w-8/9  rounded-2xl border-[3px] border-gray-300 shadow-[4px_4px_0px_rgba(0,0,0,0.5)]  flex flex-col    bg-white overflow-hidden mb-5 ">
        <div className=" bg-green-300 p-1 pl-3 flex flex-col gap-1 text-gray-800 font-semibold">
          <h1 className="text-xl md:text-3xl">{title}</h1>
          <p className="text-xs md:text-sm">
            by {username} from {location}
          </p>
        </div>
        {/* <div>
          <img src={image} alt="" />
        </div> */}
        <div className=" p-5 text-center">
          <p className="text-sm md:text-base text-center text-gray-700">
            {details.length > 100 ? details.substring(0, 100) + "..." : details}
          </p>
          <Link
            to={`/blog/${id}`}
            className="text-blue-600 font-medium mt-2 inline-block hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
