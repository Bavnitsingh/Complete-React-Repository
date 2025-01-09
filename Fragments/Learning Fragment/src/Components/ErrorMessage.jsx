   import PropTypes from "prop-types";

   const ErrorMessage = ({ items }) => {
     return <> {items.length === 0 ? <h3>I am still Hungry.</h3> : null}</>;
   };

   ErrorMessage.propTypes = {
     items: PropTypes.arrayOf(PropTypes.string).isRequired,
   };

   export default ErrorMessage;