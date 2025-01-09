import { useSelector } from "react-redux";

const DisplayCounter = () => {

 const counter = useSelector(store => store.counter)// useselector is used for subscriptions
  return <p className="lead mb-4">Counter Current Value : {counter}</p>;
}
export default DisplayCounter;