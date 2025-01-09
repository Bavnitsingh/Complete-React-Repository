import Display from "./Components/Display";
import styles from "./Components/App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";

function App() {
  return (
    <center>
        <div className={styles.calculator}>
          <Display />
          <ButtonsContainer />
        </div>
    </center>
  );
}

export default App;
