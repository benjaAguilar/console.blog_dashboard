import { useRef } from "react";
import { fetchData } from "../utils/utils";

export function PostForm({ route, method }) {
  const formRef = useRef();

  async function uploadForm(e) {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const postData = await fetchData(route, method, {}, formData);

    if (postData.success) {
      alert(postData.message);
      window.location.reload();
      return;
    }

    alert(postData.message);
  }

  return (
    <div>
      <form action="" ref={formRef}>
        <div className="fieldBox">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="fieldBox">
          <label htmlFor="categoryNames">Categories</label>
          <input
            type="text"
            name="categoryNames"
            id="categoryNames"
            placeholder="cat1 cat2 cat3..."
          />
        </div>
        <div className="fieldBox">
          <label htmlFor="post">MD File</label>
          <input type="file" name="post" id="post" />
        </div>
        <div className="fieldBox">
          <label htmlFor="thumbnail">Thumbnail</label>
          <input type="file" id="thumbnail" name="thumbnail" />
        </div>
        <div className="fieldBox">
          <label htmlFor="lang">Languaje</label>
          <input type="text" name="lang" id="lang" placeholder="EN / ES" />
        </div>
        <input
          type="submit"
          onClick={(e) => {
            uploadForm(e);
          }}
        />
      </form>
    </div>
  );
}
