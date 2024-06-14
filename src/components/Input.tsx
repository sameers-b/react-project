import React from "react";

interface InputProps {
  name: string;
  value: string;
  setVal: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  setVal,
}: InputProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <label htmlFor="name">{name}</label>
      <input
        type="text"
        name={name}
        id={name}
        className="rounded-md h-8 pl-3 text-slate-700 outline-none"
        placeholder={name}
        value={value}
        onChange={setVal}
      />
    </div>
  );
};

export default Input;
