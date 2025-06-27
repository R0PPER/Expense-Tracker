import styles from "./Modal.module.css";
function Modal({ onClose, onDelete }) {
  return (
    <div className={styles["modal-backdrop"]}>
      <div className={styles.modal}>
        <p>Are you sure you want to delete this transaction?</p>
        <button onClick={onDelete}>Yes</button>
        <button onClick={() => onClose(false)}>No</button>
      </div>
    </div>
  );
}

export default Modal;
