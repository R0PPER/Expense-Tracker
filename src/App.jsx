import Header from "./components/Header.jsx";
import TransactionBoard from "./components/TransactionBased/TransactionBoard.jsx";
import AddExpense from "./components/DropdownBased/AddExpense.jsx";
import AddIncome from "./components/DropdownBased/AddIncome.jsx";
import { useAppContext } from "./useAppContext";

function App() {
  const { isAddExpsenseVisible, isAddIncomeVisible } = useAppContext();
  return (
    <>
      <Header />
      <div className="form-container">
        {isAddExpsenseVisible && <AddExpense />}
        {isAddIncomeVisible && <AddIncome />}
      </div>
      <TransactionBoard />
    </>
  );
}

export default App;
