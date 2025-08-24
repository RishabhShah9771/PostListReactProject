import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.post}>
      <p className={classes.author}>Rishabh</p>
      <p className={classes.text}>React.js !!</p>
    </div>
  );
};
export default Post;
