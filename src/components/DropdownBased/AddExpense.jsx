import { EXPENSE_CATEGORIES } from "../../constants";
import { useAppContext } from "../../useAppContext";
import AddTransactionForm from "./AddTransactionForm";

function AddExpense() {
  const { closeAddExpense } = useAppContext();

  const handleSubmit = (data) => {
    console.log("Expense Submitted:", data);
  };

  return (
    <AddTransactionForm
      type="expense"
      categories={EXPENSE_CATEGORIES}
      showTitleField={true}
      onSubmit={handleSubmit}
      onClose={closeAddExpense}
    />
  );
}

export default AddExpense;
