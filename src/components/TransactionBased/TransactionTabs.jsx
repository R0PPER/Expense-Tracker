import styles from "./TransactionTabs.module.css";
import { useAppContext } from "../../useAppContext";
import { TAB_OPTIONS } from "../../constants";

function TransactionTabs() {
  const { activeTab, setActiveTab } = useAppContext();
  const tabs = TAB_OPTIONS;

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? styles.active : ""}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TransactionTabs;
