import { Link, Form } from "react-router-dom";
import Modal from "../ModalComponent/Modal";
import classes from "./NewPost.module.css";

const NewPost = () => {
  return (
    <Modal>
      <Form method="POST" className={classes.form}>
        <p>
          <label htmlFor="name">User Name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p>
          <label htmlFor="body">Post Detail</label>
          <textarea id="body" required rows={3} name="detail" />
        </p>
        <p className={classes.actions}>
          <Link to="..">Cancel</Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;
