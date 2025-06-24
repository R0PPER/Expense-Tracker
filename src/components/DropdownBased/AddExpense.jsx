import styles from "./AddExpense.module.css";
import { EXPENSE_CATEGORIES } from "../../constants";

function AddExpense() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Category:
        <select name="category" required>
          <option value="" disabled>
            Select a category
          </option>
          {EXPENSE_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label>
        Title / Description:
        <input
          type="text"
          name="title"
          placeholder="e.g. Grocery shopping"
          required
        />
      </label>

      <label>
        Amount:
        <input
          type="number"
          name="amount"
          min="0"
          step="0.01"
          placeholder="e.g. 20.50"
          required
        />
      </label>

      <label>
        Date & Time:
        <input type="datetime-local" name="dateTime" required />
      </label>

      <button type="submit" className={styles.button}>
        Add Expense
      </button>
    </form>
  );
}

export default AddExpense;
