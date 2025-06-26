import AddTransactionForm from "./AddTransactionForm";
import { INCOME_CATEGORIES } from "../../constants";
import { useAppContext } from "../../useAppContext";

const TYPE = "income";

function AddIncome() {
  const { closeAddIncome, addNewTransaction } = useAppContext();

  const handleSubmit = (data) => {
    addNewTransaction(TYPE, data);
    console.log("Income Submitted:", data);
  };

  return (
    <AddTransactionForm
      type="income"
      categories={INCOME_CATEGORIES}
      showTitleField={false}
      onSubmit={handleSubmit}
      onClose={closeAddIncome}
    />
  );
}

export default AddIncome;
