import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>Logo here</div>
        <div className={styles.balance}>9533$</div>
      </div>
      <div className={styles.border}></div>
    </>
  );
}

export default Header;
