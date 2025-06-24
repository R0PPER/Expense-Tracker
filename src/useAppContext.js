import { useContext } from "react";
import { AppContext } from "./AppContext"; // ✅ named import

export function useAppContext() {
  return useContext(AppContext);
}
