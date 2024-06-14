// implement a basic toggle switch component

import React, { useState } from "react";

const ToggleSwitch: React.FC = () => {
  const [isChecked, setIsChecked]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);
  return (
    <div className="flex gap-8 text-gray-300 justify-center items-center">
      <input
        type="checkbox"
        className="outline-none h-8 w-8 rounded-md"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span>{isChecked ? "ON" : "OFF"}</span>
    </div>
  );
};

export default ToggleSwitch;
