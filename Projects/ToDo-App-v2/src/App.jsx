import AppName from "./Components/AppName";
import AddTODO from "./Components/AddTODO";
import "./App.css";
import TodoItems from "./Components/TodoItems";
function App() {
  const todoItems = [
    {
      id: 1,
      name: "Go to Walk",
      dueDate: "12/11/2023",
    },
    {
      id:2,
      name: "Buy milk",
      dueDate: "12/11/2024",
    }
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTODO />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
