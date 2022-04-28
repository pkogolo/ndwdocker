import React from "react";

function LowerBanner({ image, text }) {
  return (
    <div className="h-screen w-full bg-[#1E7F3C] mt-24 flex items-center ">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 place-items-center sm:p-24 p-4">
        <div
          className="sm:w-[594px] border-2 border-[#41D958] sm:h-[520px] w-[360px] h-[360px] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div>
          <h1 className="sm:text-5xl text-3xl">{text}</h1>
        </div>
      </div>
    </div>
  );
}

export default LowerBanner;
