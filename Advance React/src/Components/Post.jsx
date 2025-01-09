import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/postListStore";
import Proptypes from "prop-types";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "25 rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            #{tag}
          </span>
        ))}
        <div className="alert alert-info reaction" role="alert">
          This post has {post.reaction} total reactions 
          ({post.reactions?.likes || 0} likes, {post.reactions?.dislikes || 0} dislikes).
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: Proptypes.shape({
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    body: Proptypes.string.isRequired,
    tags: Proptypes.arrayOf(Proptypes.string).isRequired,
    reaction: Proptypes.number.isRequired,
    reactions: Proptypes.shape({
      likes: Proptypes.number,
      dislikes: Proptypes.number,
    }),
  }).isRequired,
};

export default Post;
