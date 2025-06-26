import { EXPENSE_CATEGORIES } from "../../constants";
import { useAppContext } from "../../useAppContext";
import AddTransactionForm from "./AddTransactionForm";

const TYPE = "expense";

function AddExpense() {
  const { closeAddExpense, addNewTransaction } = useAppContext();

  const handleSubmit = (data) => {
    addNewTransaction(TYPE, data);
    // console.log("Expense Submitted:", data);
  };

  return (
    <AddTransactionForm
      type={TYPE}
      categories={EXPENSE_CATEGORIES}
      showTitleField={true}
      onSubmit={handleSubmit}
      onClose={closeAddExpense}
    />
  );
}

export default AddExpense;
