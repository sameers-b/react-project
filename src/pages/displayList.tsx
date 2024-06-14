// build a list component to display a list a items.

import React, { useState } from "react";

const DisplayList: React.FC = () => {
  const [items]: [string[], React.Dispatch<React.SetStateAction<string[]>>] =
    useState(["item1", "item2", "item3", "item4"]);
  return (
    <ul className="flex flex-col gap-8 px-10 py-4 rounded-md border border-gray-300 text-gray-300 items-center">
      {items?.map((item, i) => (
        <li key={i} className="list-disc">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DisplayList;
