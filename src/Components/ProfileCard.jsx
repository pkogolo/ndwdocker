import React, { useState, useEffect } from "react";
import SVGIcons from "./SVGIcons";
import ProfilePopup from "./ProfilePopup";

function ProfileCard({ image, position, name, getDataFunction, fullBio }) {
  const [open, setOpen] = useState(true);

  return (
    <div
      className=" hover:-translate-y-6  main-card hover:shadow-md bg-white rounded p-4 
    h-[540px] w-[360px] flex flex-col items-center justify-center"
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="rounded-full hover:shadow-md hover:h-[152px] main-card hover:w-[152px]  h-[150px] w-[150px] bg-cover mb-8"
      ></div>
      <h1 className="text-2xl text-center text-[#65B32E]">{name}</h1>
      <p className="text-center mb-8 p-2">{position}</p>
      <button
        onClick={() => {
          getDataFunction(name, fullBio, position);
        }}
        className="button"
      >
        <div className="bg-[#47A942] text-white px-4 py-2 flex items-center  ">
         View Profile
          <div className="ml-4">
            <SVGIcons type={"ARROW"} />
          </div>
        </div>
      </button>
    </div>
  );
}

export default ProfileCard;
