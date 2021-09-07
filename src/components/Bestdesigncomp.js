import React from "react";
import { FaSmile } from "react-icons/fa";

function Bestdesigncomp(props) {
  return (
    <div className = " mt-3">
        <div className = "image"></div>
        <p className = "font-bold pb-4 ">{props.title} </p>
        <p className = "text-sm text-gray-500">{props.description}</p>
    </div>
  );
}

export default Bestdesigncomp;
