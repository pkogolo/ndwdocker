import React from "react";
import swirl from "../images/swirls.png";

function SecondaryHeader({ image, heading, greenHeader }) {
  return (
    <div>
      <div
        className={
          !greenHeader
            ? "w-full grid grid-cols-2 bg-white h-[24rem] place-items-center pl-24 relative overflow-hidden"
            : "w-full grid grid-cols-2 bg-[#1E7F3C] h-[24rem] place-items-center pl-24 relative overflow-hidden"
        }
      >
        <div>
          <h2 className={!greenHeader?"text-5xl text-green":"text-5xl text-white"}>{heading}</h2>
        </div>
        <div
          style={{ backgroundImage: `url(${swirl})` }}
          className="w-[870px] absolute top-10 right-0 h-[786px] bg-cover bg-center"
        ></div>
      </div>

      <div
        style={{ backgroundImage: `url(${image})` }}
        className="py-60 bg-cover bg-top "
      ></div>
    </div>
  );
}

export default SecondaryHeader;
