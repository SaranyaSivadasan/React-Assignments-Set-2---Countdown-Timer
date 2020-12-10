import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [currentTime, setCurrentTime] = useState(0);

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      clearInterval(intervalId);
      if (isNaN(event.target.value)) {
        setCurrentTime(0);
        return;
      }
      setCurrentTime(Math.floor(event.target.value));
    }
    return;
  };
  const tick = () => {
    clearInterval(intervalId);
    if (currentTime <= 0) {
      return;
    }
    return setCurrentTime(currentTime - 1);
  };

  const intervalId = setInterval(tick, 1000);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{currentTime}</div>
    </div>
  );
};

export default App;
