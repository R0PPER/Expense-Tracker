import { createContext, useState } from "react";

export const AppContext = createContext(); // ✅ named export

export function AppProvider({ children }) {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <AppContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </AppContext.Provider>
  );
}
