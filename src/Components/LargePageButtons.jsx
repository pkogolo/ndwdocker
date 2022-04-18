import React from "react";
import SVGIcons from "./SVGIcons";
import { Link } from "react-router-dom";

function LargePageButtons({ text, link, image }) {
  return (
    <div>
      <div className="w-[320px] h-[320px] cursor-pointer rounded-lg  bg-[#1E7F3C] relative">
        <Link to={link}>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-full h-full mix-blend-multiply bg-cover bg-center hover:mix-blend-overlay flex items-center justify-center rounded-lg p-8"
          ></div>
          <div className="flex  items-center absolute top-[50%] left-[10%]">
            <p className="text-white">{text}</p>
            <div className="ml-2">
              <SVGIcons type={"SHARP-ARROW"} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LargePageButtons;
