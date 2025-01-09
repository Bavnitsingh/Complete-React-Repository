import Item from "./Item";
import PropTypes from "prop-types";
import { useState } from "react";
function FoodItems({ items }) {
  let [activeItems,setActiveItems] =useState([])
  let onBuyButton = (item,event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  }
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          HandleBuyButtonClicked={(event)=>onBuyButton(item,event)}
        ></Item>
      ))}
    </ul>
  );
}

FoodItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FoodItems;
