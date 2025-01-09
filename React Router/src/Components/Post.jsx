import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/PostList";
import PropTypes from "prop-types";




const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={()=>deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags?.map((tag, index) => (
  <span key={`${tag}-${index}`} className="badge text-bg-primary hashtag">
    #{tag}
  </span>
)) || null}
        <div className="alert alert-success reaction" role="alert">
          This post has been reacted by{" "}
          {post.reactions?.likes + post.reactions?.dislikes || 0} people.
        </div>
      </div>
    </div>
  );
};

export default Post;


Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    reaction: PropTypes.number,
    reactions: PropTypes.shape({
      likes: PropTypes.number,
      dislikes: PropTypes.number,
    }),
  }).isRequired,
};



