import { useState } from "react";
import './App.css';
import Constants from "./constants";
import Clock from './components/Clock';

const App = () => {

  const [standard, setStyle] = useState(true);
  const { numbers } = Constants;
  const getTime = () => {
    const date = new Date;
    const dateSecs = date.getSeconds();
    const dateMins = date.getMinutes();
    let dateHour = date.getHours();
    const updateNum = num => {
      if (num > 10) {
        const string = `${num}`.split('');
        return [parseInt(string[0]), parseInt(string[1])]
      };
      if (num < 10) return [0, num];
    };

    if (standard && dateHour > 12) dateHour = dateHour - 12;

    const hours = updateNum(dateHour);
    const minutes = updateNum(dateMins);
    const seconds = updateNum(dateSecs);

    return [hours, minutes, seconds];
  };

  const [hours, setHours] = useState(getTime()[0]);
  const [mins, setMins] = useState(getTime()[1]);
  const [secs, setSecs] = useState(getTime()[2]);

  return (
    <div className="App">
      <Clock
        sections={[hours, mins, secs]}
        numbers={numbers}
      />
    </div>
  );
}

export default App;
