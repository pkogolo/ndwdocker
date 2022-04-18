import React from "react";

function GreenCard({ title, paragraph, mainImage }) {
  return (
    <div className="grid sm:grid-cols-12 grid-cols-1 sm:h-[406px] h-full sm:w-3/4 sm:mt-24 w-full px-4 mt-12">
      <div className="bg-[#1E7F3C] col-span-7 sm:p-12 p-4">
        <h1 className="sm:text-4xl text-3xl text-white">{title}</h1>
        <p className="mt-4 text-white">{paragraph}</p>
      </div>
      <div
        className="col-span-5 bg-cover bg-center border-r border-[#47A942] h-[300px] sm:h-full border-r-8"
        style={{ backgroundImage: `url(${mainImage})` }}
      ></div>
    </div>
  );
}

export default GreenCard;
