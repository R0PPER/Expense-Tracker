import React, { useState } from "react";
import styles from "./TransactionBoard.module.css";
import TransactionTable from "./TransactionTable";

function TransactionBoard() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className={styles["transaction-board"]}>
      <TransactionTable activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default TransactionBoard;
