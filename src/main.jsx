import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import PostContext from "./context/PostContext.jsx";

createRoot(document.getElementById("root")).render(
  <PostContext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </PostContext>
);
