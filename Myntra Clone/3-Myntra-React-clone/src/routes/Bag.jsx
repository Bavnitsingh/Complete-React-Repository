import BagSummary from "../Components/BagSummary";
import BagItem from "../Components/BagItem";
import {useSelector} from "react-redux"
const Bag = () => {
 const bagItems = useSelector ((state) => state.bag)
  const items = useSelector((state) => state.items);
  const finalItems = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id) 
    return itemIndex >= 0;
  })
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem key={item.id } item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
   
 
}
export default Bag;