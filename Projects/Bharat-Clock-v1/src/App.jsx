import ClockDesc from './Components/ClockDesc';
import './App.css';
import ClockName from './Components/ClockName';
import CurrentTime from './Components/CurrentTime';
function App() {
 

  return (
    <div className="container">
      <center>
        <ClockName />
        <ClockDesc />
        <CurrentTime />
      </center>
    </div>
  );
}

export default App
