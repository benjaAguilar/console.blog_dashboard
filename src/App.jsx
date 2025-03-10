import styles from "./css/App.module.css";

function App() {
  return (
    <>
      <h1>Log in</h1>
      <form action="">
        <div className={styles.fieldBox}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className={styles.fieldBox}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
