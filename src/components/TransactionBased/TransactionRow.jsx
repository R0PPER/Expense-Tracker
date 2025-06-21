import styles from "./TransactionRow.module.css";

function TransactionRow({ transaction }) {
  const { category, title, amount, date } = transaction;

  return (
    <div className={styles["transaction-row"]}>
      <span>{category}</span>
      <span>{title}</span>
      <span>{amount} €</span>
      <span>{date}</span>
    </div>
  );
}

export default TransactionRow;
