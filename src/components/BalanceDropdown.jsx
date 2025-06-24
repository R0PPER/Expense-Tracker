import styles from "./BalanceDropdown.module.css";

function BalanceDropdown() {
  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.balanceCircle}>$1,200</div>

      <div className={styles.dropdown}>
        <ul>
          <li>Add Expense</li>
          <li>Add Income</li>
          <li>Transaction History</li>
        </ul>
      </div>
    </div>
  );
}

export default BalanceDropdown;
