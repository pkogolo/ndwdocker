import React from "react";

function GreenCard({ title, paragraph, mainImage, reverse }) {
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 h-full lg:h-[540px] md:h-full lg:w-3/4 md:w-3/4 lg:mt-24 w-full px-4 lg:my-24 md:my-8 my-8">
      {reverse && (
        <div
          className="col-span-5 bg-cover bg-center border-r border-[#47A942] h-[380px] md:h-[380px] lg:h-full sm:h-full sm:border-r-8 border-none"
          style={{ backgroundImage: `url(${mainImage})` }}
        ></div>
      )}
      <div className="bg-[#1E7F3C] col-span-7 sm:p-12 p-4">
        <h1 className="sm:text-4xl text-3xl text-white">{title}</h1>
        {paragraph.split("/n").map((item) => (
          <p className="mt-4 text-white">{item}</p>
        ))}
      </div>
      {!reverse && (
        <div
          className="col-span-5 bg-cover bg-center border-r border-[#47A942] h-[300px]  border-r-8 md:h-[380px] lg:h-full"
          style={{ backgroundImage: `url(${mainImage})` }}
        ></div>
      )}
    </div>
  );
}

export default GreenCard;
