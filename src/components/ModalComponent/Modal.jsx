import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

const Modal = ({ children }) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("..");
  };

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}>
        <dialog
          className={classes.modal}
          open
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </dialog>
      </div>
    </>
  );
};
export default Modal;
