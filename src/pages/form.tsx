import React, { useState } from "react";
import Input from "../components/Input";

const Form: React.FC = () => {
  //   const [name, setName]: [
  //     string,
  //     React.Dispatch<React.SetStateAction<string>>
  //   ] = useState<string>("");
  //   const [email, setEmail]: [
  //     string,
  //     React.Dispatch<React.SetStateAction<string>>
  //   ] = useState<string>("");

  const [formInput, setFormInput]: [
    object,
    React.Dispatch<React.SetStateAction<object>>
  ] = useState<object>({
    name: "",
    email: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <div className="flex flex-col gap-3">
      <form className="flex flex-col gap-3 border border-gray-300 rounded-md p-5 text-gray-300 justify-center items-center">
        <Input name="name" value={formInput?.name} setVal={handleChange} />
        <Input name="email" value={formInput?.email} setVal={handleChange} />
      </form>
      <div className="text-gray-300">
        <div>
          <span>Name</span>:- <span>{formInput?.name}</span>
        </div>
        <div>
          <span>Email</span>:- <span>{formInput?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Form;
