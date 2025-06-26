import styles from "./TransactionTable.module.css";
import TransactionRow from "./TransactionRow";
import TransactionTabs from "./TransactionTabs";
import { useAppContext } from "../../useAppContext";

function TransactionTable() {
  const { activeTab } = useAppContext();

  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const incomes = JSON.parse(localStorage.getItem("incomes")) || [];

  const allTransactions = [
    ...expenses.map((tx) => ({ ...tx, type: "expense" })),
    ...incomes.map((tx) => ({ ...tx, type: "income" })),
  ];
  const filtered =
    activeTab === "all"
      ? allTransactions
      : allTransactions.filter((tx) => tx.type === activeTab);

  // console.log(filtered);

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
