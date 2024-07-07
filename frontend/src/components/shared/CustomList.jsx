import React from "react";

const CustomList = ({ data, actionMethod }) => {
    console.log("Custom list called", data)
  return (
    <ul className="absolute top-8 left-0 bg-white text-sm rounded-lg drop-shadow-md flex flex-col overflow-hidden">
      {data.map((item,index) => (
        <li
        key={index}
          className="py-1 px-4 hover:bg-slate-100 text-nowrap"
          onClick={actionMethod}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CustomList;
