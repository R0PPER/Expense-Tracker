import styles from "./AddIncome.module.css";
import { INCOME_CATEGORIES } from "../../constants";

function AddIncome() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const incomeData = {
      ...data,
      amount: parseFloat(data.amount),
    };

    console.log("Submitted Income:", incomeData);
    e.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Category:
        <select name="category" required>
          <option value="" disabled>
            Select a category
          </option>
          {INCOME_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label>
        Amount:
        <input
          type="number"
          name="amount"
          min="0"
          step="0.01"
          placeholder="e.g. 1500.00"
          required
        />
      </label>

      <label>
        Date & Time:
        <input type="datetime-local" name="dateTime" required />
      </label>

      <button className={styles.button} type="submit">
        Add Income
      </button>
    </form>
  );
}

export default AddIncome;
