import React, { lazy } from "react";
import AuthGuard from "@/auth/AuthGuard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/views/home/Home";
import Post from "@/views/post/Post";
import Publish from "@/views/post/Publish";
import Auth from "@/views/auth/Auth";
import NotFound from "./NotFound";
import Layout from "@/components/organisms/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "post/:slug",
            element: <Post />,
          },
          {
            path: "auth",
            element: <Auth />,
          },
          {
            element: <AuthGuard />,
            children: [
              {
                path: "create/post/private",
                element: <Publish />,
              },
            ],
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);

const MainRouter = () => {
  return <RouterProvider router={router}>MainRouter</RouterProvider>;
};

export default MainRouter;
