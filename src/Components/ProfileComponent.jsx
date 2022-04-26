import React, { useState } from "react";
import Button from "./Button";
import SVGIcons from "./SVGIcons";

function ProfileComponent({ image, name, position, text, fullText }) {
  const [showFullProfile, setShowFullProfile] = useState(false);

  function showFullText() {
    setShowFullProfile(!showFullProfile);
  }
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 mt-24 sm:px-24 px-4">
      <div className="flex items-start justify-center">
        <div className="p-4 border border-2 border-[#41D958]">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="h-[360px] w-[360px] bg-cover bg-no-repeat bg-center"
          ></div>
        </div>
      </div>
      <div className="sm:p-6 p-4">
        <h3 className="font-bold">{name}</h3>
        <p className="my-2 text-green">{position}</p>
        {!showFullProfile
          ? text.split("/n").map((item) => <p className="sm:w-5/6 w-full mt-4">{item}</p>)
          : fullText
              .split("/n")
              .map((item) => <p className="sm:w-5/6 w-full mt-4">{item}</p>)}

        <div className="flex justify-end mt-12">
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
  );
}

export default ProfileComponent;
