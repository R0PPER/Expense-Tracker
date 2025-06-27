import { useAppContext } from "../../useAppContext";
import { useState } from "react";
import Modal from "../Modal";
import styles from "./TransactionRow.module.css";

function TransactionRow({ transaction }) {
  const { deleteTransaction } = useAppContext();
  const [showModal, setShowModal] = useState(false);

  const { category, title, amount, dateTime, id, type } = transaction;

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className={styles["transaction-row"]}
        onClick={() => setShowModal(true)}
      >
        <span>{category}</span>
        <span>{title}</span>
        <span>{amount} €</span>
        <span>{dateTime}</span>
      </div>

      {showModal && (
        <Modal
          onClose={handleModalClose}
          onDelete={() => {
            deleteTransaction(type, id);
            handleModalClose();
          }}
        />
      )}
    </>
  );
}

export default TransactionRow;
