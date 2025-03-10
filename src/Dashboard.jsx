import { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "./utils/utils";
import { PostForm } from "./components/PostForm";
import { PostShowcase } from "./components/PostShowcase";

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
        <div className="contentBox">
          <h1>DASHBOARD</h1>
          <div className="content">
            <div>
              <h2>New Post</h2>
              <PostForm route={"/api/posts"} method={"POST"} />
            </div>
            <div>
              <h2>Manage Posts</h2>
              <PostShowcase />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
