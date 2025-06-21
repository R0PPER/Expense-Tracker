import styles from "./TransactionTabs.module.css";

function TransactionTabs({ activeTab, setActiveTab }) {
  const tabs = ["income", "expenses", "all"];

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
