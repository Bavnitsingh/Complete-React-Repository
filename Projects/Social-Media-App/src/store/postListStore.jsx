import {createContext, useReducer } from "react";
import Proptypes from "prop-types";
  
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
   }

  return newPostList;
};







const PostListProvider = ({children}) => {
const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        userId: userId,
        reaction: reactions,
        tags: tags,
      },
    });
  };
  
  
  return <PostList.Provider value={
   {postList,
  addPost,
  deletePost}
  }>
    {children}
  </PostList.Provider>;
}

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Delhi",
    body: "Hii Friends , we are going to spend this vaction in Delhi.Hope we will enjoy alot.Peace out.",
    userId: "user-9",
    reaction: 34,
    tags: ["vacation", "delhi"],
  },
  {
    id: "2",
    title: "Going To Dehradun",
    body: "Hii Friends , we are going to spend this vaction in Dehradun.Hope we will enjoy alot.Peace out.",
    userId: "user-2",
    reaction: 2,
    tags: ["vacation", "dehradun"],
  },
];

PostListProvider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default PostListProvider;