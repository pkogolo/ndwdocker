import React from "react";
import { Link } from "react-router-dom";

function LowerBanner({ image, linkArray }) {
 
  function generateLinks() {
    const array = linkArray.map((item) => linkPills(item));
    return array;
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1438986710423-1bf13038bc14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)`,
      }}
      className=" w-full bg-[#1E7F3C]  flex items-center justify-center"
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-10 place-items-center lg:p-24 place-items-center p-4">
        <div
          className="lg:w-[420px] xl:w-[520px] xl:w-[520px] md:w-[594px]  lg:h-[420px] md:h-[520px] w-[360px] h-[360px] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="">
          <h1 className="text-white text-2xl mb-8"> Related Pages</h1>

          <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 xl:gap-6 lg:gap-3 gap-3  ">
            {generateLinks()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LowerBanner;

function linkPills(item) {
  return (
    <Link
      to={item.link}
      className="border hover:bg-[#65B32E40] flex items-center justify-center text-center border-white xl:p-4 lg:p-4 p-4 bg-[#ffffff40] rounded-full"
    >
      {item.page}
    </Link>
  );
}
