import React from "react";

function CSRCards({ image, title, text }) {
  return (
    <div>
      <div className="grid grid-rows-6 sm:h-[741px] h-full px-4">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={"row-span-3 bg-no-repeat bg-cover"}
        ></div>
        <div className={"bg-[#65B32E] row-span-2 py-4"}>
          <div className="px-4">
            <h2 className="text-white text-3xl my-8 ">{title}</h2>
            <p className={"text-white"}>{text}</p>
          </div>
        </div>
        <div className=" bg-[#1E7F3C] h-1/4"></div>
      </div>
    </div>
  );
}

export default CSRCards;
