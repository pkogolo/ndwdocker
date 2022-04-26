import React from "react";

function GreenCard({ title, paragraph, mainImage, reverse}) {
  return (
    <div className="grid sm:grid-cols-12 grid-cols-1 h-full sm:h-[540px] sm:w-3/4 sm:mt-24 w-full px-4 mt-12">
      {reverse && (
        <div
          className="col-span-5 bg-cover bg-center border-r border-[#47A942] h-[380px] sm:h-full sm:border-r-8 border-none"
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
          className="col-span-5 bg-cover bg-center border-r border-[#47A942] h-[300px] sm:h-full border-r-8"
          style={{ backgroundImage: `url(${mainImage})` }}
        ></div>
      )}
    </div>
  );
}

export default GreenCard;
