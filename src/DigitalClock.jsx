import { useEffect } from "react";
import { useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const IntervalId = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  function getTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${addZero(hours)} : ${addZero(minutes)} : ${addZero(
      seconds
    )} ${meridian}`;
  }

  function addZero(num) {
    return (num < 10 ? "0" : "") + num;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{getTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
