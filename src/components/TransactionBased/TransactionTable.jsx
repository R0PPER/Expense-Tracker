import styles from "./TransactionTable.module.css";
import TransactionRow from "./TransactionRow";
import TransactionTabs from "./TransactionTabs";
import { useAppContext } from "../../useAppContext";

function TransactionTable() {
  const { activeTab } = useAppContext();
  const allTransactions = [
    {
      type: "income",
      category: "Salary",
      title: "June Salary",
      amount: 3000,
      date: "2025-06-01",
    },
    {
      type: "expense",
      category: "Food",
      title: "Groceries",
      amount: 120,
      date: "2025-06-03",
    },
  ];

  const filtered =
    activeTab === "all"
      ? allTransactions
      : allTransactions.filter((tx) => tx.type === activeTab);

  return (
    <div className={styles["transaction-table"]}>
      <TransactionTabs />

      <div className={styles["table-header"]}>
        <span>Category</span>
        <span>Title</span>
        <span>Amount</span>
        <span>Date</span>
      </div>

      {filtered.map((tx, index) => (
        <TransactionRow key={index} transaction={tx} />
      ))}
    </div>
  );
}

export default TransactionTable;
