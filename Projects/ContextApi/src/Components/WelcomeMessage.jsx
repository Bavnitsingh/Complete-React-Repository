import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import {TodoItemsContext} from "../store/todoItemsContext";
const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your Day😊</p>
  );
};

export default WelcomeMessage;
