import PropTypes from "prop-types";
import styles from "./FoodInput.module.css";
const FoodInput = ({ HandleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodinput}
      onKeyDown={HandleKeyDown}
    />
  );
};
FoodInput.propTypes = {
  HandleKeyDown: PropTypes.func.isRequired,
};
export default FoodInput;
