import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import styles from "./TodoItems.module.css"

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.id}
            tododate={item.dueDate}
            todoname={item.name}
          />
        ))}
      </div>
    </>
  );
};

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      todoname: PropTypes.string.isRequired,
      tododate: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default TodoItems;
