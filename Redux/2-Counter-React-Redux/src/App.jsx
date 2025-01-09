import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import DisplayCounter from "./Components/DisplayCounter";
import Controls from "./Components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./Components/PrivacyMessage";
function App() {


  const privacy = useSelector(store => store.privacy);
  return (
    <center className="px-4 py-5 my-5 text-center">
     
        <Header />

      { privacy ? <PrivacyMessage/> : <DisplayCounter />}
        <Controls></Controls>
     
    </center>
  );
}

export default App;
