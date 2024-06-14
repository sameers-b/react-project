import React, { useEffect, useState } from "react";

const FetchData: React.FC = (): JSX.Element => {
  const [userData, setUserData]: [
    [],
    React.Dispatch<React.SetStateAction<[]>>
  ] = useState([]);

  const fetchData = async (): Promise<void> => {
    const res: Response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data: [] = await res.json();
    setUserData(data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap gap-8 text-gray-300 justify-center items-center">
      {userData?.map((user) => (
        <div
          className="border border-gray-300 py-1 px-5 text-md rounded-md flex items-center justify-center duration-500 hover:bg-gray-300 hover:text-slate-800"
          key={user?.id}
        >
          {user?.name}
        </div>
      ))}
    </div>
  );
};

export default FetchData;
