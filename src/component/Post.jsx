import React from "react";
import Posts from "../post.js";
import PostCard from "../component/PostCard.jsx"; 

const Post = () => {
  return (
    <>
      <div className="flex flex-col  justify-center items-center  gap-8 mt-10">
        {Posts.map((post, index) => (
          <PostCard
            key={index}
            id={post.name}
            title={post.title}
            content={post.content}
            location={post.location}
            image={post.image}
          />
        ))}
      </div>
    </>
  );
};

export default Post;
