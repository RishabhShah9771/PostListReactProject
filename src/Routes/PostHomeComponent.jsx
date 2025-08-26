import { Outlet } from "react-router-dom";
import PostList from "../components/PostComponent/PostList";

function PostHomePageComponent() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default PostHomePageComponent;
