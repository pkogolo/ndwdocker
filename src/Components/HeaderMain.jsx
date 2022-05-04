import React from "react";
import headerCircles from "../images/headerCircles.png";

function HeaderMain({ title, image, pageName }) {
  return (
    <div className="bg-[#0A4D2A] w-full lg:h-screen h-[960px] grid lg:grid-cols-2 grid-cols-1 pt-24 md:grid-cols-1 ">
      <div className="flex items-start flex-col justify-center sm:px-12 px-4 w-full">
        <h3 className="lg:text-2xl md:w-full lg:text-left md:text-center text-xl text-[#65B32E] lg:mb-12 mb-4">
          {pageName}
        </h3>
        <h1 className="lg:text-6xl md:text-4xl md:text-center md:w-full lg:text-left text-3xl leading-loose">{title}</h1>
      </div>
      <div
        style={{ backgroundImage: `url(${headerCircles})` }}
        className="h-full bg-no-repeat lg:bg-cover md:bg-contain bg-center flex items-center justify-center"
      >
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="bg-cover bg-center bg-no-repeat sm:h-[547px] sm:w-[589px] h-[400px] w-[300px] border border-[#65B32E] border-2"
        ></div>
      </div>
    </div>
  );
}

export default HeaderMain;
