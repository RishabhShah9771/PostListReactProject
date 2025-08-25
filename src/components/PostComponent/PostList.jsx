import NewPost from "../NewPostComponent/NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Rishabh" body="ReactJS" />
        <Post author="Sukriti" body="Typescript" />
      </ul>
    </>
  );
};
export default PostList;
