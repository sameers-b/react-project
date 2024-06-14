// timer

import React, { useEffect, useState } from "react";

const MAX_SEC = 59;
const Timer: React.FC = () => {
  const [time, setTime]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(MAX_SEC);
  const [stop, setStop]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(true);

  const reStart: React.MouseEventHandler = (): void => {
    setTime(MAX_SEC);
    setStop(true);
  };

  useEffect(() => {
    if (time > 0 && !stop) {
      const intervalId = setTimeout(() => {
        setTime((sec) => sec - 1);
        clearInterval(intervalId);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
    if (time === 0) {
      setTime(MAX_SEC);
      setStop(true);
    }
  }, [time, stop]);

  return (
    <div className="flex gap-8 text-gray-300 justify-center items-center">
      <span className="border border-gray-300 py-1 px-5 text-2xl rounded-md flex items-center justify-center duration-500 ">
        {time}
      </span>
      <button
        className={`border border-gray-300 py-1 px-5 text-2xl rounded-md flex items-center justify-center duration-500 hover:bg-gray-300 hover:text-slate-800
        ${stop && "bg-gray-300 text-slate-800"}
        `}
        onClick={() => setStop(!stop)}
      >
        {stop ? "Start" : "Stop"}
      </button>
      <button
        className="border border-gray-300 py-1 px-5 text-2xl rounded-md flex items-center justify-center duration-500 hover:bg-gray-300 hover:text-slate-800"
        onClick={reStart}
      >
        Restart
      </button>
    </div>
  );
};

export default Timer;
