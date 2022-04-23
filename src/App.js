import { useState } from "react";
import './App.css';
import Clock from './components/Clock';

const App = () => {

  const [hours, setHours] = useState([0, 0])
  const [mins, setMins] = useState([0, 0])
  const [secs, setSecs] = useState([0, 0])

  return (
    <div className="App">
      <Clock
        hours={hours}
        mins={mins}
        secs={secs}
      />
    </div>
  );
}

export default App;
