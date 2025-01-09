import PropTypes from "prop-types";
function TodoItem({ todoname, tododate }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todoname: PropTypes.string.isRequired,
  tododate: PropTypes.string.isRequired
};
export default TodoItem;
