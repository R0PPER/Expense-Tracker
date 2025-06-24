import Header from "./components/Header.jsx";
import TransactionBoard from "./components/TransactionBased/TransactionBoard.jsx";
import AddExpense from "./components/DropdownBased/AddExpense.jsx";
import AddIncome from "./components/DropdownBased/AddIncome.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="form-container">
        <AddExpense />
        <AddIncome />
      </div>
      <TransactionBoard />
    </>
  );
}

export default App;
