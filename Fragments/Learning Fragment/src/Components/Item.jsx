 import PropTypes from "prop-types";
import styles from "./Item.module.css"
const Item = ({ foodItem, HandleBuyButtonClicked ,bought}) => {
 

  return (
    <li className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}>
      <span className={`${styles["kg-span"]}`}>{foodItem}</span>
      <button
        className={`${styles.buybtn} btn btn-info`}
        onClick={ HandleBuyButtonClicked}
      >
        Buy
      </button>
    </li>
  );
};

 //PropTypes validation
Item.propTypes = {
  foodItem: PropTypes.string.isRequired,
  HandleBuyButtonClicked: PropTypes.func.isRequired,
};

export default Item;
