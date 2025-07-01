import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const PostAdd = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
    toast.success("Submitted Successfully!");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-6 md:p-8 border-2 rounded-2xl mx-4 md:mx-auto max-w-xl border-gray-800 shadow-lg bg-green-300 text-gray-800 mt-5"
      >
        {/* Name */}
        <label className="text-sm font-medium">Name</label>
        <input
          {...register("Name")}
          className="border border-gray-600 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
        />

        {/* Location */}
        <label className="text-sm font-medium">Location</label>
        <input
          {...register("Location")}
          className="border border-gray-600 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
        />

        {/* Title */}
        <label className="text-sm font-medium">Title</label>
        <input
          {...register("title")}
          className="border border-gray-600 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
        />

        {/* Content */}
        <label className="text-sm font-medium">Content</label>
        <textarea
          {...register("Content")}
          rows={4}
          className="border border-gray-600 rounded-md p-2 text-sm resize-y focus:outline-none max-h-40 focus:ring-2 focus:ring-gray-800"
        ></textarea>

        {/* Submit */}
        <input
          type="submit"
          value="Submit"
          className="bg-gray-800 text-green-300 font-bold py-2 px-6 rounded-md  transition-colors w-fit mx-auto mt-2 hover:text-gray-800 hover:bg-green-300 hover:border-gray-800 hover:border-2 cursor-pointer"
        />
      </form>
    </>
  );
};

export default PostAdd;
