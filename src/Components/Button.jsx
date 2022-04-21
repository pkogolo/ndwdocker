import React from "react";
import SVGIcons from "./SVGIcons";
import { Link } from "react-router-dom";

function Button({ text, itemlink }) {
  return (
    <button className="">
      <Link
        to={itemlink}
        className="bg-[#47A942] text-white px-4 py-2 flex items-center  "
      >
        {text}

        <div className="ml-4">
          <SVGIcons type={"ARROW"} />
        </div>
      </Link>
    </button>
  );
}

export default Button;
