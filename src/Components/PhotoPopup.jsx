import React from "react";
import SVGIcons from "./SVGIcons";

function PhotoPopup({ image, closeFunction }) {
  return (
    <div
      style={{ zIndex: "1000" }}
      className="h-screen bg-[#00000092] fixed top-0 left-0 w-screen h-screen w-screen flex items-center justify-center"
    >
      <div className="bg-white rounded shadow-xl lg:h-[500px] lg:w-[500px] md:h-[500px] md:w-[500px] h-[560px] w-[340px] relative p-8">
        <div
          onClick={() => {
            closeFunction();
          }}
          className="absolute top-4 right-4 cursor-pointer"
        >
          {" "}
          <SVGIcons type={"CLOSE"} />
        </div>

        <div
          style={{ backgroundImage: `url(${image})` }}
          className=" bg-cover bg-no-repeat h-full w-full bg-center"
        ></div>
      </div>
    </div>
  );
}

export default PhotoPopup;
