import styles from "./Header.module.css";
import BalanceDropdown from "./BalanceDropdown";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>Logo here</div>
        <BalanceDropdown />
      </div>
      <div className={styles.border}></div>
    </>
  );
}

export default Header;
