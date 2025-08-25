import classes from "./Modal.module.css";
const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}>
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
