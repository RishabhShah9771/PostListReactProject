import classes from "./NewPost.module.css";
import { useState } from "react";

const NewPost = ({ onCancel, onAddPost }) => {
  const [enteredDetails, setEnteredDetails] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredDetails(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postDetails = {
      detail: enteredDetails,
      author: enteredAuthor,
    };
    onAddPost(postDetails);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="name">User Name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p>
        <label htmlFor="body">Post Detail</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
