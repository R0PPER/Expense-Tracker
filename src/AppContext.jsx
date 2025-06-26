import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [activeTab, setActiveTab] = useState("all");
  const [isAddExpsenseVisible, setAddExpenseVisible] = useState(false);
  const [isAddIncomeVisible, setAddIncomeVisible] = useState(false);
  const [transaction, setTransaction] = useState({
    expense: null,
    income: null,
  });

  const openAddExpense = () => setAddExpenseVisible(true);
  const closeAddExpense = () => setAddExpenseVisible(false);

  const openAddIncome = () => setAddIncomeVisible(true);
  const closeAddIncome = () => setAddIncomeVisible(false);

  const addNewTransaction = (type, data) => {
    const key = type === "expense" ? "expenses" : "incomes";
    const existing = JSON.parse(localStorage.getItem(key)) || [];
    const updated = [...existing, { ...data, type }];
    localStorage.setItem(key, JSON.stringify(updated));

    setTransaction((prev) => ({
      ...prev,
      [type]: data,
    }));

    console.log(`${type} submitted:`, updated, transaction);
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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
