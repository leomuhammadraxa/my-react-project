import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";

import router from './App.jsx'
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
