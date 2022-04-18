import React from "react";
import circle1 from "../images/circle1.png";
import circle2 from "../images/circle2.png";
import Button from "./Button";

function MainCard({
  reversed,
  title,
  paragraph,
  buttonText,
  buttonLink,
  mainImage,
  showCircles,
}) {
  return (
    <div className="flex items-center justify-center sm:px-0 px-4">
      {!reversed && (
        <div className="grid sm:grid-cols-12 grid-cols-1 sm:h-[503px]  sm:w-3/4 w-full mt-24">
          <div
            className="sm:col-span-5 bg-cover bg-center border-l h-[400px] sm:h-full border-[#47A942] border-l-8"
            style={{ backgroundImage: `url(${mainImage})` }}
          ></div>
          <div className="bg-white sm:col-span-7 sm:p-12 p-6 w-full">
            <h1 className="text-4xl text-[#65B32E]">{title}</h1>
            {paragraph.split("/n").map((item) => (
              <p className="mt-4 text-[#2B2929] w-full">{item}</p>
            ))}
            {showCircles && (
              <div className="grid grid-cols-3 gap-6 sm:my-24 my-12 w-3/4">
                <div
                  className="sm:w-[98px] sm:h-[98px] w-[58px] h-[58px] bg-cover"
                  style={{ backgroundImage: `url(${circle1})` }}
                ></div>
                <div
                  className="sm:w-[98px] sm:h-[98px] w-[58px] h-[58px] bg-cover"
                  style={{ backgroundImage: `url(${circle1})` }}
                ></div>
                <div
                  className="sm:w-[98px] sm:h-[98px] w-[58px] h-[58px] bg-cover"
                  style={{ backgroundImage: `url(${circle1})` }}
                ></div>
              </div>
            )}
            {buttonText && (
              <div className="w-full mt-12">
                <Button text={buttonText} />
              </div>
            )}
          </div>
        </div>
      )}
      {reversed && (
        <div className="grid sm:grid-cols-12 grid-cols-1 sm:h-[503px] sm:w-3/4 w-full mt-24">
          <div
            className="sm:col-span-5 bg-cover sm:hidden bg-center border-l h-[400px] sm:h-full border-[#47A942] border-l-8"
            style={{ backgroundImage: `url(${mainImage})` }}
          ></div>
          <div className="bg-white sm:col-span-7 sm:p-12 p-6 w-full">
            <h1 className="text-4xl text-[#65B32E]">{title}</h1>
            {paragraph.split("/n").map((item) => (
              <p className="mt-4 text-[#2B2929]">{item}</p>
            ))}
            {showCircles && (
              <div className="grid grid-cols-3 gap-6 sm:my-24 my-12 w-3/4">
                <div
                  className="w-[98px] h-[98px] sm:w-[98px] sm:h-[98px] w-[58px] h-[58px] bg-cover"
                  style={{ backgroundImage: `url(${circle1})` }}
                ></div>
                <div
                  className="w-[98px] h-[98px] sm:w-[98px] sm:h-[98px] w-[58px] h-[58px] bg-cover"
                  style={{ backgroundImage: `url(${circle1})` }}
                ></div>
                <div
                  className="w-[98px] h-[98px] sm:w-[98px] sm:h-[98px] w-[58px] h-[58px] bg-cover"
                  style={{ backgroundImage: `url(${circle1})` }}
                ></div>
              </div>
            )}
            {buttonText && (
              <div className="w-full mt-12">
                <Button text={buttonText} />
              </div>
            )}
          </div>
          <div
            className="sm:col-span-5 bg-cover hidden sm:grid bg-center h-[400px] sm:h-full border-[#47A942] border-r-8"
            style={{ backgroundImage: `url(${mainImage})` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default MainCard;
