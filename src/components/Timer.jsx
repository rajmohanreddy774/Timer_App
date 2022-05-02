import { useState, useEffect } from "react";
import "./Timer.css"

function Timer({ start, end }) {
  const [time, setTime] = useState(+start);

  useEffect(() => {
    let id = setInterval(() => {
      setTime((Value) => {
    
        if (Value+1 === +end) {
          clearInterval(id);
        }
        return Value + 1;
      });
    }, 500);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    
    <div className="timers">
      <p className="ptag">
        <h1>Timer App</h1>
        <div>Start At: <span>{start}</span></div> 
        <div> End At:  <span>{end}</span></div>
      </p>
      <h2>Timer: {time}</h2>
    </div>
  );
}

export default Timer;