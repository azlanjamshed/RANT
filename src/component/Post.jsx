import React, { use, useContext } from "react";
import Posts from "../post.js";
import PostCard from "../component/PostCard.jsx";
import { postcontext } from "../context/PostContext.jsx";

const Post = () => {
  const { data } = useContext(postcontext);
  return (
    <>
      <div className="flex flex-col  justify-center items-center  gap-8 mt-10">
        {data.map((post, index) => (
          <PostCard
            // key={index}
            // id={post.name}
            // title={post.title}
            // content={post.content}
            // location={post.location}
            // image={post.image}
            key={index}
            id={post.Name}
            title={post.title}
            content={post.Content}
            location={post.Location}
            image={post.image}
          />
        ))}
        {/* {Posts.map((post, index) => (
          <PostCard
            // key={index}
            // id={post.name}
            // title={post.title}
            // content={post.content}
            // location={post.location}
            // image={post.image}
       
          />
        ))} */}
      </div>
    </>
  );
};

export default Post;
