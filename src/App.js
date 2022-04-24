import { useState } from "react";
import './App.css';
import Constants from "./constants";
import Clock from './components/Clock';

const App = () => {

  const { numbers } = Constants;

  const [hours, setHours] = useState([0, 4]);
  const [mins, setMins] = useState([5, 3]);
  const [secs, setSecs] = useState([1, 2]);
  const [sections, setSections] = useState([hours, mins, secs]);

  return (
    <div className="App">
      <Clock
        sections={sections}
        numbers={numbers}
      />
    </div>
  );
}

export default App;
