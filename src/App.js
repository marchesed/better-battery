import './App.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faWifi } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [percentage, setPercentage] = useState(50);
  const [batteryColor, setBatteryColor] = useState(percentage > 20 ? "grey" : "red")

  useEffect(() => {
    setBatteryColor(percentage > 20 ? "grey" : "red")
  }, [percentage])

  return (
    <div className="main-container">
      <div className="status-icons-container">
        <div className="provider">Service Provider</div>
        <div className="notch"></div>
        <div className="pl-10"><FontAwesomeIcon icon={faSignal} size={'sm'} /></div>
        <div className="pl-10"><FontAwesomeIcon icon={faWifi} size={'sm'} /></div>
        <div className="battery-container pl-10">
          <div className="battery-container__fill" style={{"background": `linear-gradient(90deg, ${batteryColor} ${percentage}%, transparent ${percentage}%)`}}>
            <span>{percentage}</span>
          </div>
        </div>
        <div className="battery-dot"></div>
      </div>
      <div className="header">
        Was that so hard, Apple?
      </div>
      <div className="slider-container">
        <label htmlFor='battery-percentage'>Control the battery percentage:</label><br />
        <input id="battery-percentage" type="range" value={percentage} min="1" max="100" onChange={(value) => setPercentage(value.target.value)} />
      </div>
    </div>
  );
}

export default App;
