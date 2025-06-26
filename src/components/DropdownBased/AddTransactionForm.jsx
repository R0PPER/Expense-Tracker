import styles from "./AddTransactionForm.module.css";

function AddTransactionForm({
  type = "expense", // or 'income'
  categories = [],
  onClose,
  onSubmit,
  showTitleField = false,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const finalData = {
      ...data,
      amount: parseFloat(data.amount),
    };

    onSubmit(finalData);
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
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      {showTitleField && (
        <label>
          Title / Description:
          <input
            type="text"
            name="title"
            placeholder="e.g. Grocery shopping"
            required
          />
        </label>
      )}

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

      <button
        type="submit"
        className={
          type === "expense" ? styles["submit-button"] : styles["green-button"]
        }
      >
        Add {type.charAt(0).toUpperCase() + type.slice(1)}
      </button>

      <button
        type="button"
        onClick={onClose}
        className={styles["close-button"]}
      >
        Close
      </button>
    </form>
  );
}

export default AddTransactionForm;
