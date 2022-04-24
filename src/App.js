import { useState } from "react";
import './App.css';
import Constants from "./constants";
import Clock from './components/Clock';

const App = () => {

  const { numbers } = Constants;

  const [hours, setHours] = useState([1, 0])
  const [mins, setMins] = useState([3, 4])
  const [secs, setSecs] = useState([2, 6])
  const [sections, setSections] = useState([hours, mins, secs])

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
