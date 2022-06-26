import React, { useState, useEffect } from "react";
import Button from "./Button";
import SVGIcons from "./SVGIcons";

function SmallCard({ title, paragraph, button }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={
        !open
          ? "lg:w-[320px] xl:w-[380px] md:w-[360px] w-[360px] bg-[#ffffff9a] p-4 main-card hover:bg-[#EEF5F09a] h-[210px] backdrop-blur-3xl backdrop-opacity-20"
          : "lg:w-[320px] xl:w-[380px] md:w-[360px] w-[360px] bg-[#ffffff9a] p-4 main-card hover:bg-[#EEF5F09a] h-full 3-xl backdrop-opacity-20"
      }
    >
      <div className=" p-2 ">
        <h1 className="xl:text-2xl lg:text-xl md:text-xl text-xl border-b border-b-[#1E7F3C] pb-2 text-[#1E7F3C]">
          {title}
        </h1>
        {open && (
          <div>
            <p className="my-4">{paragraph}</p>
          </div>
        )}
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="button mt-8"
        >
          <div className="bg-[#47A942] text-white px-4 py-2 flex items-center  ">
            {!open ? "Read More" : "View Less"}
            <div className="ml-4">
              <SVGIcons type={"ARROW"} />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default SmallCard;
