import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [activeTab, setActiveTab] = useState("all");
  const [isAddExpsenseVisible, setAddExpenseVisible] = useState(false);
  const [isAddIncomeVisible, setAddIncomeVisible] = useState(false);
  const [transactions, setTransactions] = useState(() => {
    const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    const incomes = JSON.parse(localStorage.getItem("incomes") || "[]");
    return [...expenses, ...incomes]; // combined list
  });

  const getCurrentBalance = () => {
    return transactions.reduce((acc, tx) => {
      if (tx.type === "income") return acc + tx.amount;
      else if (tx.type === "expense") return acc - tx.amount;
      return acc;
    }, 0);
  };

  const openAddExpense = () => setAddExpenseVisible(true);
  const closeAddExpense = () => setAddExpenseVisible(false);

  const openAddIncome = () => setAddIncomeVisible(true);
  const closeAddIncome = () => setAddIncomeVisible(false);

  const addNewTransaction = (type, data) => {
    const currentBalance = getCurrentBalance();

    if (type === "expense" && currentBalance - data.amount < 0) {
      alert("Cannot add this expense. Balance would go below zero.");
      return;
    }

    const key = type === "expense" ? "expenses" : "incomes";
    const existing = JSON.parse(localStorage.getItem(key)) || [];

    const newTransaction = {
      ...data,
      type,
      id: Date.now().toString(),
    };

    const updated = [...existing, newTransaction];
    localStorage.setItem(key, JSON.stringify(updated));

    // Now read both expenses and incomes from localStorage and update state
    const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    const incomes = JSON.parse(localStorage.getItem("incomes") || "[]");
    setTransactions([...expenses, ...incomes]);
  };

  const deleteTransaction = (type, id) => {
    const key = type === "expense" ? "expenses" : "incomes";
    const existing = JSON.parse(localStorage.getItem(key)) || [];
    const updated = existing.filter((tx) => tx.id !== id);

    localStorage.setItem(key, JSON.stringify(updated));

    // Refresh transactions state
    const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    const incomes = JSON.parse(localStorage.getItem("incomes") || "[]");
    setTransactions([...expenses, ...incomes]);
  };

  const value = {
    activeTab,
    setActiveTab,
    openAddExpense,
    closeAddExpense,
    isAddExpsenseVisible,
    openAddIncome,
    closeAddIncome,
    isAddIncomeVisible,
    addNewTransaction,
    deleteTransaction,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
