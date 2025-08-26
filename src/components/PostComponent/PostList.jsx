import Post from "./Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const isPostDetail = useLoaderData();

  return (
    <>
      {isPostDetail.length > 0 && (
        <ul className={classes.posts}>
          {isPostDetail.map((postDetail) => {
            return (
              <Post
                key={Math.random().toString()}
                author={postDetail.author}
                detail={postDetail.detail}
              />
            );
          })}
        </ul>
      )}
      {isPostDetail.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no Posts yet!!!</h2>
          <p>Click on new Post and start adding new posts!!</p>
        </div>
      )}
    </>
  );
};
export default PostList;
