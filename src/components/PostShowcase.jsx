import { useEffect, useState } from "react";
import { fetchData } from "../utils/utils";

export function PostShowcase() {
  const [reRender, setReRender] = useState(0);
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
  }, [reRender]);

  async function deletePost(id) {
    const confirmDelete = prompt("Type delete to confirm").toLocaleLowerCase();

    if (confirmDelete !== "delete") {
      return alert("post not deleted");
    }

    const isDeleted = await fetchData(`/api/posts/${id}`, "DELETE");

    if (!isDeleted.success) {
      alert("Error deleting the post");
      console.error(isDeleted.message);
      return;
    }

    alert("Post deleted!");
    setReRender(reRender + 1);
  }

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
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    Delete
                  </button>
                  <button>Update</button>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
