import React from "react";
import headerCircles from "../images/headerCircles.png";

function HeaderMain({ title, image }) {
  return (
    <div className="bg-[#1E7F3C] w-full h-screen grid sm:grid-cols-2 grid-cols-1 pt-24">
      <div className="flex items-center justify-center sm:px-24 px-4 w-full">
        <h1 className="sm:text-6xl text-3xl">{title}</h1>
      </div>
      <div
        style={{ backgroundImage: `url(${headerCircles})` }}
        className="h-full bg-no-repeat bg-cover bg-center flex items-center justify-center"
      >
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="bg-cover bg-center bg-no-repeat sm:h-[547px] sm:w-[589px] h-[400px] w-[300px]"
        ></div>
      </div>
    </div>
  );
}

export default HeaderMain;
