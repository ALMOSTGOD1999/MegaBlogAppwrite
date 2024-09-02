import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout, Login } from "./components/index.js";
import Home from "../src/pages/Home.jsx";
import AddPost from "./pages/AddPost.jsx";
import Signup from "./pages/Signup.jsx";
import EditPost from "./pages/EditPost.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import Post from "./pages/Post.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout>
            <Login authentication={false} />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout>
            <Signup authentication={false} />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {""}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-posts",
        element: (
          <AuthLayout authentication>
            {""}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {""}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
