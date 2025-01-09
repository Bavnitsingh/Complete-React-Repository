import { RiDeleteBin5Line } from "react-icons/ri";

import PropTypes from "prop-types";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsContext";
function TodoItem({ todoname, tododate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => deleteItem(todoname)}
          >
            <RiDeleteBin5Line />
          </button>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todoname: PropTypes.string.isRequired,
  tododate: PropTypes.string.isRequired,
};
export default TodoItem;
