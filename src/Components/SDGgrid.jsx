import React from "react";
import sdg1 from "../images/sdg28.png";
import sdg2 from "../images/sdg29.png";
import sdg3 from "../images/sdg30.png";
import sdg4 from "../images/sdg31.png";
import sdg5 from "../images/sdg32.png";
import sdg6 from "../images/sdg33.png";
import sdg7 from "../images/sdg34.png";
import sdg8 from "../images/sdg35.png";
import sdg9 from "../images/sdg36.png";
import sdg10 from "../images/sdg37.png";

function SDGgrid() {
  const sdgArray = [
    sdg1,
    sdg2,
    sdg3,
    sdg4,
    sdg5,
    sdg6,
    sdg7,
    sdg8,
    sdg9,
    sdg10,
  ];
  return (
    <div className="sm:py-24 p-4 bg-white flex items-center justify-center">
      <div className="grid sm:grid-cols-5 grid-cols-2 sm:gap-6 gap-3 sm:w-3/4 w-full">
        {sdgArray.map((item) => (
          <div
            className="bg-cover sm:py-28 py-24 bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${item})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SDGgrid;
