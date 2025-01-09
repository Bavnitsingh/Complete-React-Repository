import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems,setFoodItems]=useState([])
  
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFood = event.target.value;
      let newItems = [...foodItems, newFood];
      setFoodItems(newItems);
      event.target.value = "";  // Reset the input field after adding a new food item.
      console.log("New food: " + newFood)
   }
   
 };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput HandleKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
    
    </>
  );
}

export default App;
