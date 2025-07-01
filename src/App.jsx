import React from "react";
import Header from "./component/Header";
import Home from "./pages/Home";
import PostAdd from "./pages/PostAdd";
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import Train from "./component/Train";
import Post from "./component/Post";
import Blog from "./component/Blog";
import BlogDetail from "./component/BlogDetail";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
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

export default App;
