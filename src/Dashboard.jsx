import { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "./utils/utils";

export default function Dashboard() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function checkUser() {
      const user = await fetchData("/api/users/authUser", "GET");

      if (!user.success) {
        window.location.href = "/";
        return;
      }

      setIsAdmin(true);
    }

    checkUser();
  }, []);

  return (
    <>
      {isAdmin ? (
        <div>
          <h1>DASHBOARD</h1>
        </div>
      ) : null}
    </>
  );
}
