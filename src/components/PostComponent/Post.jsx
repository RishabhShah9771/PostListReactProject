import classes from "./Post.module.css";

const names = ["Rishabh", "Sukriti"];
const Post = () => {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div className={classes.post}>
      <p className={classes.author}>{chosenName}</p>
      <p className={classes.text}>React.js !!</p>
    </div>
  );
};
export default Post;
