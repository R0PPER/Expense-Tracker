import React from "react";
import styles from "./TransactionBoard.module.css";
import TransactionTable from "./TransactionTable";

function TransactionBoard() {
  return (
    <div className={styles["transaction-board"]}>
      <TransactionTable />
    </div>
  );
}

export default TransactionBoard;
