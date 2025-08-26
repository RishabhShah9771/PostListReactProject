import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NewPost from "./components/NewPostComponent/NewPost";
import RootLayout from "./Routes/RootLayoutComponent";
import PostHomePageComponent from "./Routes/PostHomeComponent";
import { loaderDetailHandler } from "./components/PostComponent/PostLoader";
import { SubmitFormActionHandler } from "./components/NewPostComponent/SubmitActionHandler";
import PostDetails from "./components/PostDetailComponent/PostDetails";
import { PostDetailLoaderFn } from "./components/PostDetailComponent/PostDetailLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <PostHomePageComponent />,
        loader: loaderDetailHandler,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: SubmitFormActionHandler,
          },
          {
            path: "/:id",
            element: <PostDetails />,
            loader: PostDetailLoaderFn,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
