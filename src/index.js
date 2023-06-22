import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>
    

=======
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App></App>
    <ToastContainer/>
  </div>
>>>>>>> 7bfdec8 (first commit)
);
