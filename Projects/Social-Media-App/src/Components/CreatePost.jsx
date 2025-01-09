import { useContext, useRef } from "react";
import {PostList} from "../store/postListStore";

const CreatePost = () => {
const userIdElement = useRef()
const postTitleElement = useRef()
const postBodyElement= useRef()
const reactionsElement = useRef()
const tagsElement = useRef();

  const {addPost}= useContext(PostList)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    userIdElement.current.value = "";
    postTitleElement.current.value = "";  
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    addPost(userId, postTitle, postBody, reactions, tags);
   }

  return (
    <form className="createpost" onSubmit={handleSubmit} >
      <div className="mb-3 ">
        <label htmlFor="userId" className="htmlForm-label">
          Enter your User ID here :
        </label>

        <input
          type="text"
          className="htmlForm-control "
          id="userId"
          ref={userIdElement}
          placeholder="enter your User Id"
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
          ref={postTitleElement}
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
          type="textarea"
          className="htmlForm-control "
          id="body"
          ref={postBodyElement}
          placeholder="Enter Your Content here..."
        />
      </div>
      <br />
      <div className="mb-3 ">
        <label htmlFor="reactions" className="htmlForm-label">
          Number of Reactions :
        </label>

        <input
          type="text"
          className="htmlForm-control "
          id="reactions"
          ref={reactionsElement}
          placeholder="How many people reacted "
        />
      </div>
      <br />
      <div className="mb-3 ">
        <label htmlFor="tags" className="htmlForm-label">
          Enter your Hashtags
        </label>

        <input
          type="text"
          className="htmlForm-control "
          id="tags"
          ref={tagsElement}
          placeholder="Please enter  Hashtags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}
export default CreatePost;