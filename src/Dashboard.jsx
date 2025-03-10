import { useState } from "react";
import { useEffect } from "react";

export default function Dashboard() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {}, []);

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
