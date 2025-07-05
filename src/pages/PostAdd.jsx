import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postcontext } from "../context/PostContext";
const PostAdd = () => {
  const { data, setData } = useContext(postcontext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    setData([...data, formData]);

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

        <input
          {...register("Name")}
          className="border-b-2 border-gray-600 p-4 text-sm focus:outline-none block"
          placeholder="Name"
        />

        {/* Location */}

        <input
          {...register("Location")}
          className="border-b-2 border-gray-600 p-4 text-sm focus:outline-none block"
          placeholder="Location"
        />

        {/* Title */}

        <input
          {...register("title")}
          className="border-b-2 border-gray-600 p-4 text-sm focus:outline-none block"
          placeholder="Title"
        />

        {/* Content */}
        <label className="text-sm font-medium">Content</label>
        <textarea
          {...register("Content")}
          rows={4}
          className="border border-gray-600 rounded-md p-4 text-sm resize-y focus:outline-none max-h-40 focus:ring-2 focus:ring-gray-800"
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
