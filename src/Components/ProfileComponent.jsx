import React, { useState } from "react";
import Button from "./Button";
import SVGIcons from "./SVGIcons";

function ProfileComponent({ image, name, position, text, fullText }) {
  const [showFullProfile, setShowFullProfile] = useState(false);

  function showFullText() {
    setShowFullProfile(!showFullProfile);
  }
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mt-24 lg:px-24 md:px-6 px-4 bg-[]">
      <div className="flex items-start justify-center">
        <div className="p-4 border border-2 border-[#41D958]">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="h-[360px] w-[360px] bg-cover bg-no-repeat bg-center"
          ></div>
        </div>
      </div>
      <div className=" flex justify-center lg:mt-0 md:mt-6">
        <div className="lg:p-6 md:w-11/12 w-full lg:w-full p-4">
          <h3 className="font-bold lg:text-left md:text-center text-left">{name}</h3>
          <p className="my-2 text-green lg:text-left md:text-center text-left">{position}</p>
          {!showFullProfile
            ? text.split("/n").map((item) => <p className="lg:w-5/6 md:w-full w-full mt-4">{item}</p>)
            : fullText
                .split("/n")
                .map((item) => <p className="lg:w-5/6 md:w-full w-full mt-4">{item}</p>)}
          <div className="flex lg:justify-end md:justify-center mt-12">
            <button
              onClick={showFullText}
              className="bg-[#47A942] text-white px-4 py-2 flex items-center  "
            >
              {!showFullProfile ? "Read More" : "View Less"}
              <div className="ml-4">
                <SVGIcons type={"ARROW"} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
