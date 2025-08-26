import { Link } from "react-router-dom";
import classes from "./Post.module.css";

const Post = ({ id, author, detail }) => {
  return (
    <div className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{detail}</p>
      </Link>
    </div>
  );
};
export default Post;
