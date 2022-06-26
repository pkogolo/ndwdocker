import React, { useEffect, useState, useRef } from "react";

import Lottie from "react-lottie";
import gsap from "gsap";
import animationData from "./lotties/renewable.json";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function OurVision() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-gradient-to-r from-[#0A4D2A] to-[#094827]  md:h-full h-full lg:p-12 md:p-20 p-4  bg-cover">
      <h2 className="text-white text-2xl text-center  md:mt-6 text-white">
        {" "}
        Our Vision
      </h2>

      <div className="flex items-center justify-center md:mt-12 mt-12 mb-12">
        <p className=" lg:w-1/2 md:w-full text-white w-full text-white text-center md:text-2xl">
          To be a world class Energy Company of choice in Africa, effectively
          and prudently producing oil and gas, and delivering value to its
          people and shareholders.
        </p>
      </div>
      <div className="hidden lg:grid md:hidden">
        <Lottie options={defaultOptions} height={600} width={600} />
      </div>
      <div className="hidden lg:hidden md:grid sm:hidden">
        <Lottie options={defaultOptions} height={400} width={600} />
      </div>
      <div className="grid lg:hidden md:hidden sm:grid">
        <Lottie options={defaultOptions} height={400} width={300} />
      </div>
    </div>
  );
}

export default OurVision;
