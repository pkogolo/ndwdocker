import React from "react";

function LowerBanner({ image, text }) {
  return (
    <div className="h-screen w-full bg-[#1E7F3C] mt-24 flex items-center ">
      <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-10 place-items-center lg:p-24 p-4">
        <div
          className="lg:w-[594px] md:w-[594px] border-2 border-[#41D958] lg:h-[520px] md:h-[520px] w-[360px] h-[360px] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="md:px-16">
          <h1 className="lg:text-5xl md:text-3xl text-3xl md:text-center lg:text-left">{text}</h1>
        </div>
      </div>
    </div>
  );
}

export default LowerBanner;
