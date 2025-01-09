import AppName from "./Components/AppName";
import AddTODO from "./Components/AddTODO";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemsContextReducer from "./store/todoItems-store";



function App() {
  

  return (
    <TodoItemsContextReducer>
      <div className="todo-container" style={{ textAlign: "center" }}>
        <AppName />
        <AddTODO />
        <WelcomeMessage />
        <TodoItems />
      </div>
    </TodoItemsContextReducer>
  );
}

export default App;
