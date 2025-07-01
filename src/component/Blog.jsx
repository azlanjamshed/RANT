import React from "react";
import blog from "../blog.js";
import BlogCard from "./BlogCard.jsx";
const Blog = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 mt-10">
        {blog.map((blogItem, index) => (
          <BlogCard
            key={index}
            id={blogItem.id}
            title={blogItem.title}
            location={blogItem.location}
            username={blogItem.username}
            details={blogItem.details}
          />
        ))}
      </div>
    </>
  );
};

export default Blog;
