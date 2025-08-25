import classes from "./Post.module.css";

const Post = ({ author, detail }) => {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{detail}</p>
    </div>
  );
};
export default Post;
