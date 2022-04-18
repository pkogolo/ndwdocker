import React from "react";
import SVGIcons from "./SVGIcons";

function Button({ text }) {
  return (
    <button className="bg-[#47A942] text-white px-4 py-2 flex items-center  ">
      {text}

      <div className="ml-4">
        <SVGIcons type={"ARROW"} />
      </div>
    </button>
  );
}

export default Button;
