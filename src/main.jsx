import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./screens/About.jsx";
import Login from "./screens/Login.jsx";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./screens/Signup.jsx";
import Cart from "./screens/Cart.jsx";
import { CartProvider } from "./components/ContextReducer.jsx";
import Home from "./screens/Home.jsx";
import MyOrders from "./screens/MyOrders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "myorders",
    element: <MyOrders />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
