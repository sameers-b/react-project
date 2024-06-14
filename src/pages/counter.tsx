import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState<number>(0);
  return (
    <div className="flex gap-8 text-gray-300 justify-center items-center">
      <button
        className="border border-gray-300 py-1 px-5 text-2xl rounded-md flex items-center justify-center duration-500 hover:bg-gray-300 hover:text-slate-800"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <span className="font-bold text-4xl">{count}</span>
      <button
        className="border border-gray-300 py-1 px-5 text-2xl rounded-md flex items-center justify-center duration-500 hover:bg-gray-300 hover:text-slate-800"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
