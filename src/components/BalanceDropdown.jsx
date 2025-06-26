import styles from "./BalanceDropdown.module.css";
import { useAppContext } from "../useAppContext";

function BalanceDropdown() {
  const { openAddExpense, openAddIncome } = useAppContext();
  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.balanceCircle}>$1,200</div>

      <div className={styles.dropdown}>
        <ul>
          <li onClick={openAddExpense}>Add Expense</li>
          <li onClick={openAddIncome}>Add Income</li>
          <li>Transaction History</li>
        </ul>
      </div>
    </div>
  );
}

export default BalanceDropdown;
