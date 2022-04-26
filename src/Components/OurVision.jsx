import React from "react";
import asset1 from "../images/headerImage.jpg";
import asset2 from "../images/asset2.jpg";
import asset3 from "../images/asset3.jpg";
import cutCircle from "../images/side-cut-circle.png";

function OurVision() {
  return (
    <div className="bg-[#0A4D2A] sm:h-screen h-full sm:p-24 p-4">
      <h2 className="text-white text-4xl text-center mt-24 "> Our Vision</h2>

      <div className="sm:grid sm:grid-cols-3 grid-cols-1 sm:gap-12 gap-6 hidden  mt-40 place-items-center">
        <div
          className="h-[328px] w-[328px] bg-cover "
          style={{ backgroundImage: `url(${asset1})` }}
        ></div>
        <div
          className="h-[328px] w-[328px] bg-cover "
          style={{ backgroundImage: `url(${asset2})` }}
        ></div>
        <div
          className="h-[328px] w-[328px] bg-cover "
          style={{ backgroundImage: `url(${asset3})` }}
        ></div>
      </div>

      <div className="flex items-center justify-center sm:mt-24 mt-12">
        <p className="text-white sm:w-1/2 w-full text-[#41D958]">
          To be a world class Energy Company of choice in Africa, effectively
          and prudently producing oil and gas, and delivering value to its
          people and shareholders.
        </p>
      </div>

    
    </div>
  );
}

export default OurVision;
