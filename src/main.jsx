import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import Files from "./files.jsx";
import route from "./routes/routes.jsx";
import CartProvider from "./provider/CartProvider.jsx";
import{ Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={route}></RouterProvider>
      <Toaster />
    </CartProvider>
  </StrictMode>
);
