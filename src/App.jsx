import { useEffect, useRef } from "react";
import styles from "./css/App.module.css";
import { fetchData } from "./utils/utils";

function App() {
  const formRef = useRef();

  useEffect(() => {
    async function checkUser() {
      const user = await fetchData("/api/users/authUser", "GET");

      if (user.success) {
        window.location.href = "/dashboard";
        return;
      }
    }

    checkUser();
  }, []);

  async function login(e) {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = new URLSearchParams(formData);

    const loginData = await fetchData(
      "/api/users/login",
      "POST",
      { "Content-Type": "application/x-www-form-urlencoded" },
      data
    );

    if (loginData.success && loginData.user.role === "ADMIN") {
      window.location.href = "/dashboard";
      return;
    }

    alert("Incorrect login");
  }

  return (
    <>
      <h1>Log in</h1>
      <form action="" ref={formRef}>
        <div className={styles.fieldBox}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className={styles.fieldBox}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <input
          type="submit"
          onClick={(e) => {
            login(e);
          }}
        />
      </form>
    </>
  );
}

export default App;
