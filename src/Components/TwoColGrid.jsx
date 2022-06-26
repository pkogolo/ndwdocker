import React, { useRef, useEffect, useState } from "react";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function TwoColGrid({
  reversed,
  title,
  paragraph,
  buttonText,
  buttonLinks,
  mainImage,
  oml34,
}) {
  return (
    <div className="flex items-center justify-center md:p-6 p-4">
      {!reversed && (
        <div className="grid  lg:grid-cols-12 grid-cols-1 md:grid-cols-1 lg:h-[440px] h-full xl:w-3/4 lg:w-5/6 md:w-full w-full mt-12 overflow-hidden ">
          <div
            id="main-image"
            className={
              oml34
                ? "main-card sm:col-span-5 bg-contain bg-no-repeat hover:scale-105 bg-center border-l h-[400px] md:h-[400px] lg:h-full "
                : "main-card sm:col-span-5 bg-cover hover:scale-105 bg-center border-l h-[400px] md:h-[400px] lg:h-full "
            }
            style={{ backgroundImage: `url(${mainImage})` }}
          ></div>
          <div className=" sm:col-span-7 sm:p-12 p-6 w-full">
            <h1 className="text-4xl text-[#65B32E]">{title}</h1>
            {paragraph.split("/n").map((item) => (
              <p className="mt-4  w-full">{item}</p>
            ))}

            {buttonText && (
              <div className="w-full mt-12">
                <Button text={buttonText} itemlink={buttonLinks} />
              </div>
            )}
          </div>
        </div>
      )}{" "}
      {reversed && (
        <div className="main-card grid lg:grid-cols-12 grid-cols-1 md:grid-cols-1   lg:h-[440px] h-full xl:w-3/4 lg:w-5/6 md:w-full w-full mt-12 overflow-hidden">
          <div
            className="lg:col-span-5 bg-cover lg:hidden md:mb-6 mb-6 bg-center h-[400px] lg:h-full md:h-[400px]"
            style={{ backgroundImage: `url(${mainImage})` }}
          ></div>
          <div className=" sm:col-span-7 xl:pr-24 lg:pl-0 md:pl-12 pl-6 lg:pr-12 xl:pt-12 md:pr-6 w-full">
            <h1 className="text-4xl text-[#65B32E]">{title}</h1>
            {paragraph.split("/n").map((item) => (
              <p className="mt-4 ">{item}</p>
            ))}

            {buttonText && (
              <div className="w-full mt-12">
                <Button text={buttonText} itemlink={buttonLinks} />
              </div>
            )}
          </div>
          <div
            className="sm:col-span-5 main-card bg-cover hidden lg:grid md:hidden bg-center h-[400px] sm:h-full hover:scale-105 "
            style={{ backgroundImage: `url(${mainImage})` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default TwoColGrid;
