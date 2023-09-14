import React, {useState} from "react";
import "../styles.css";





function App() {
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());
  function refreshTime(){
    setTime(new Date().toLocaleTimeString());
    return currentTime;
  }
  return (
    <div className="container">
      <h1>{refreshTime().slice(0,7)}</h1>
      <button >Get Time</button>
    </div>
  );
}

export default App;
