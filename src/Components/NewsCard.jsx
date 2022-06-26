import React from "react";

function NewsCard({ image, heading, text, link, date, source }) {
  return (
    <div className="grid grid-cols-1 bg-red-300 place-items-center">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-cover bg-no-repeat bg-center lg:h-[300px]  lg:w-[300px]  xl:h-[460px] xl:w-[460px] md:h-[280px] md:w-[280px] h-[300px]  w-[300px] "
      ></div>
      <div className="bg-[#F7F7FB]  -mt-8 py-6 px-2   lg:w-[300px]  xl:w-[460px]  md:w-[280px]   w-[300px]">
        <div className="flex justify-start">
          <p className="text-sm px-4 py-2 mr-4 rounded-full bg-[#F2F2F7] w-fit mb-4">
            {date}
          </p>
          <p className="text-sm px-4 py-2 rounded-full text-white  bg-[#65B32E]  hover:bg-[#13401A] main-card cursor-pointer w-fit mb-4 flex items-center jusfify-center">
            <a href={link} target="_blank">
              {source}
            </a>
          </p>
        </div>
        <h1 className="w-full main-card  hover:text-[#65B32E]">
          <a href={link} target="_blank">
            {heading}
          </a>
          {/* <p>{text}</p> */}
        </h1>
      </div>
    </div>
  );
}

export default NewsCard;
