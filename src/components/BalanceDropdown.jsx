import styles from "./BalanceDropdown.module.css";
import { useAppContext } from "../useAppContext";

function BalanceDropdown() {
  const { openAddExpense, openAddIncome } = useAppContext();

  const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
  const incomes = JSON.parse(localStorage.getItem("incomes") || "[]");

  const balance =
    incomes.reduce((acc, income) => acc + income.amount, 0) -
    expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.balanceCircle}>{balance}€</div>

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
