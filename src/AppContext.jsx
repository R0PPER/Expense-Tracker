import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [activeTab, setActiveTab] = useState("all");
  const [isAddExpsenseVisible, setAddExpenseVisible] = useState(false);
  const [isAddIncomeVisible, setAddIncomeVisible] = useState(false);

  const openAddExpense = () => setAddExpenseVisible(true);
  const closeAddExpense = () => setAddExpenseVisible(false);

  const openAddIncome = () => setAddIncomeVisible(true);
  const closeAddIncome = () => setAddIncomeVisible(false);

  const value = {
    activeTab,
    setActiveTab,
    openAddExpense,
    closeAddExpense,
    isAddExpsenseVisible,
    openAddIncome,
    closeAddIncome,
    isAddIncomeVisible,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
