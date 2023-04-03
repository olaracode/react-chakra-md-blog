import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/organisms/Layout";
import Home from "@/views/home/Home";
import Post from "@/views/post/Post";
import Publish from "@/views/post/Publish";
import Auth from "@/views/auth/Auth";
import NotFound from "./NotFound";
import AuthGuard from "@/auth/AuthGuard";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/create/post/private"
            element={
              <AuthGuard>
                <Publish />
              </AuthGuard>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
