import { useEffect, useState } from "react";
import { fetchData } from "../utils/utils";

export function PostShowcase() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function getPosts() {
      const posts = await fetchData("/api/posts", "GET");

      if (posts.success) {
        console.dir(posts);
        setPosts(posts.posts);
        return;
      }

      alert(posts.message);
    }

    getPosts();
  }, []);

  return (
    <div>
      {posts
        ? posts.map((post, i) => {
            return (
              <div className="card" key={i}>
                <img
                  src={post.thumbnailUrl}
                  style={{ aspectRatio: "16/9", height: "70px" }}
                />
                <h4>{post.title}</h4>
                <div className="btns">
                  <button>Delete</button>
                  <button>Update</button>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
