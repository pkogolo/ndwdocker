import React from "react";
import girlBlob from "../images/girl-circle.png";
import boyBlob from "../images/boy-circle.png";
import blobVector from "../images/blob-vector.png";
import SVGIcons from "./SVGIcons";
import { Link } from "react-router-dom";

function CSRSection() {
  return (
    <div className="h-screen w-screen bg-[#0A4D2A] sm:p-24 p-4 relative">
      <div className="flex flex-col items-center justify-center">
        <div
          className="sm:w-[549px] sm:h-[531px] w-[349px] h-[331px] bg-contain bg-no-repeat "
          style={{ backgroundImage: `url(${girlBlob})` }}
        ></div>
        <div className="flex items-center flex-col justify-center">
          <h1 className="sm:w-1/2 w-full text-3xl mt-8 ">
            We are committed to building the Nation, and inspiring a generation
            of young change makers
          </h1>

          <button className="">
            <Link to={"/about/csr"} className="flex items-center text-white text-sm mt-4">
              View our CSR Philosophy <SVGIcons type={"ARROW"}></SVGIcons>
            </Link>
          </button>
        </div>
      </div>

      <div
        className="w-[258px] h-[232px] sm:block hidden bg-contain bg-no-repeat absolute top-10 right-10 "
        style={{ backgroundImage: `url(${boyBlob})` }}
      ></div>
      <div
        className="sm:w-[540px] sm:h-[595px] w-[140px] h-[195px] bg-contain bg-no-repeat absolute bottom-0 left-0 "
        style={{ backgroundImage: `url(${blobVector})` }}
      ></div>
    </div>
  );
}

export default CSRSection;
