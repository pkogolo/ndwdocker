import React from "react";
import swirl from "../images/swirls.png";

function SecondaryHeader({ image, heading, greenHeader }) {
  return (
    <div>
      <div
        className={
          !greenHeader
            ? "w-full grid lg:grid-cols-2 md:grid-cols-1 md:pl-4 bg-white h-[24rem] place-items-center lg:pl-24 md:pl-4 relative overflow-hidden"
            : "w-full grid lg:grid-cols-2 md:grid-cols-1 md:pl-4 bg-[#1E7F3C] h-[24rem]  place-items-center lg:pl-24 md:pl-4 relative overflow-hidden"
        }
      >
        <div>
          <h2
            className={
              !greenHeader ? "lg:text-5xl md:text-4xl text-3xl lg:text-left md:text-center md:leading-loose text-green" : "lg:text-5xl md:text-4xl text-3xl lg:text-left md:text-center md:leading-loose text-white"
            }
          >
            {heading}
          </h2>
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
