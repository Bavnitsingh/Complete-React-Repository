import { Form, redirect } from "react-router-dom";
const CreatePost = () => {
  return (
    <Form method="POST" className="createpost">
      <div className="mb-3 ">
        <label htmlFor="userId" className="htmlForm-label">
          Enter your User ID here :
        </label>
        <br />
        <input
          type="text"
          className="htmlForm-control "
          id="userId"
          name="userId"
          placeholder="Enter your User ID"
        />
      </div>
      <br />
      <div className="mb-3 ">
        <label htmlFor="title" className="htmlForm-label">
          Post Title
        </label>
        <br />
        <input
          type="text"
          className="htmlForm-control "
          id="title"
          name="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <br />
      <div className="mb-3 ">
        <label htmlFor="body" className="htmlForm-label">
          Post Content
        </label>
        <br />
        <textarea
          rows="5"
          cols="100"
          className="htmlForm-control "
          id="body"
          name="body"
          placeholder="Enter your content here..."
        />
      </div>
      <br />
      <div className="mb-3 ">
        <label htmlFor="likes" className="htmlForm-label">
          Number of Likes :
        </label>
        <br />
        <input
          type="text"
          className="htmlForm-control "
          id="likes"
          name="likes"
          placeholder="Enter number of likes"
        />
      </div>
      <br />
      <div className="mb-3 ">
        <label htmlFor="dislikes" className="htmlForm-label">
          Number of Dislikes :
        </label>
        <br />
        <input
          type="text"
          className="htmlForm-control "
          id="dislikes"
          name="dislikes"
          placeholder="Enter number of dislikes"
        />
      </div>
      <br />
      <div className="mb-3 ">
        <label htmlFor="tags" className="htmlForm-label">
          Enter your Hashtags
        </label>
        <br />
        <input
          type="text"
          className="htmlForm-control "
          id="tags"
          name="tags"
          placeholder="Enter hashtags separated by space"
        />
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};
export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
