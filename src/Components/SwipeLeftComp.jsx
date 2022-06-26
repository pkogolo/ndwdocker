import React from "react";
import Lottie from "react-lottie";
import animationData from "./lotties/swipe-left.json";

function SwipeLeftComp() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    speed: 2,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      {" "}
      <div className="hidden lg:grid flex w-full items-center justify-center ">
        <Lottie options={defaultOptions} height={200} width={200} speed={0.8} />
      </div>
      <div className="grid lg:hidden flex w-full items-center justify-center ">
        <Lottie options={defaultOptions} height={100} width={100} speed={0.8} />
      </div>
    </div>
  );
}

export default SwipeLeftComp;
