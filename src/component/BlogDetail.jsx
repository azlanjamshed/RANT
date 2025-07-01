import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogData from "../blog.js"; // ✅ renamed to avoid conflict

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogItem = blogData.find((b) => b.id === parseInt(id));

  if (!blogItem) {
    return <div className="p-6 text-red-600">Blog not found!</div>;
  }

  return (
    <div className="  mx-5 mt-5 border-2 rounded-lg bg-white md:w-[98%] overflow-hidden">
      <div className="bg-green-300 p-2">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-blue-500 mb-4 hover:underline"
        >
          ← Go Back
        </button>
        <h1 className="text-2xl font-bold mb-2 text-gray-800">
          {blogItem.title}
        </h1>
        <p className="text-gray-500 text-sm mb-4">
          Posted by {blogItem.username} from {blogItem.location}
        </p>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-800">{blogItem.details}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
