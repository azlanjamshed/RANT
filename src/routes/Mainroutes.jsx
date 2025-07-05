import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Post from "../component/Post";
import Blog from "../component/Blog";
import BlogDetail from "../component/BlogDetail";
import PostAdd from "../pages/PostAdd";

const Mainroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/add" element={<PostAdd />} />
      </Routes>
    </>
  );
};

export default Mainroutes;
