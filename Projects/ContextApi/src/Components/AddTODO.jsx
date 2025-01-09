import { MdOutlineAdd } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsContext";
// import Proptypes from "prop-types";
import { useRef } from "react";
import styles from "./AddTODO.module.css";
function AddTODO() {
const {addNewItem} = useContext(TodoItemsContext)
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
   
  };
  return (
    <div className="container kg-style">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo Here"
            className={styles.input}
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={styles.input}
            ref={dueDateElement}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-btn">
            <MdOutlineAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
// AddTODO.propTypes = {
//   addNewItem: Proptypes.func.isRequired,
// };
export default AddTODO;
