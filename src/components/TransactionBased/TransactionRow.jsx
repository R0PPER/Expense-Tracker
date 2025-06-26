import styles from "./TransactionRow.module.css";

function TransactionRow({ transaction }) {
  const { category, title, amount, dateTime } = transaction;

  return (
    <div className={styles["transaction-row"]}>
      <span>{category}</span>
      <span>{title}</span>
      <span>{amount} €</span>
      <span>{dateTime}</span>
    </div>
  );
}

export default TransactionRow;
