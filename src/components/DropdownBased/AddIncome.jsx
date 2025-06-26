import AddTransactionForm from "./AddTransactionForm";
import { INCOME_CATEGORIES } from "../../constants";
import { useAppContext } from "../../useAppContext";

function AddIncome() {
  const { closeAddIncome } = useAppContext();

  const handleSubmit = (data) => {
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
