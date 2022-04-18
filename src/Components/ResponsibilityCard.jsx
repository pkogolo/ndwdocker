import React, { useState } from "react";

function ResponsibilityCard({ image, title, text }) {
  const [hovered, setHovered] = useState();


  return (
    <div
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      className="grid grid-rows-6 sm:h-[520px] h-full "
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={!hovered ? "row-span-4" : "row-span-2"}
      ></div>
      <div
        className={
          !hovered ? "bg-white row-span-2 p-4" : " row-span-4 bg-[#65B32E] p-4"
        }
      >
        <h2 className={!hovered?"text-green text-3xl":"text-white text-3xl my-12"}>{title}</h2>
        <p className={hovered ? "text-white grid" : "hidden text-white"}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default ResponsibilityCard;
