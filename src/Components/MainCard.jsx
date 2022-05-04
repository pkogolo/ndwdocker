import React from "react";
import Button from "./Button";

function MainCard({
  reversed,
  title,
  paragraph,
  buttonText,
  buttonLinks,
  mainImage,
  showCircles,
  circleImages,
}) {
  return (
    <div className="flex items-center  justify-center sm:px-0 px-4">
      {!reversed && (
        <div className="grid lg:grid-cols-12 grid-cols-1 md:grid-cols-1  lg:h-[640px] h-full sm:w-3/4 w-full mt-24 ">
          <div
            className="sm:col-span-5 bg-cover bg-center border-l h-[400px] md:h-[400px] lg:h-full border-[#47A942] border-l-8"
            style={{ backgroundImage: `url(${mainImage})` }}
          ></div>
          <div className="bg-white sm:col-span-7 sm:p-12 p-6 w-full">
            <h1 className="text-4xl text-[#65B32E]">{title}</h1>
            {paragraph.split("/n").map((item) => (
              <p className="mt-4 text-[#2B2929] w-full">{item}</p>
            ))}
            {showCircles && (
              <div className="grid grid-cols-3 gap-6 sm:my-24 my-12 w-3/4">
                {circleImages.map((item) => (
                  <div
                    className="sm:w-[98px] sm:h-[98px] w-[58px] bg-cover rounded-full bg-center h-[58px] bg-cover"
                    style={{ backgroundImage: `url(${item})` }}
                  ></div>
                ))}
              </div>
            )}
            {buttonText && (
              <div className="w-full mt-12">
                <Button text={buttonText} itemlink={buttonLinks} />
              </div>
            )}
          </div>
        </div>
      )}
      {reversed && (
        <div className="grid lg:grid-cols-12 grid-cols-1 md:grid-cols-1  lg:h-[640px] h-full sm:w-3/4 w-full mt-24">
          <div
            className="lg:col-span-5 bg-cover lg:hidden bg-center border-l h-[400px] lg:h-full md:h-[400px] border-[#47A942] border-l-8"
            style={{ backgroundImage: `url(${mainImage})` }}
          ></div>
          <div className="bg-white sm:col-span-7 sm:p-12 p-6 w-full">
            <h1 className="text-4xl text-[#65B32E]">{title}</h1>
            {paragraph.split("/n").map((item) => (
              <p className="mt-4 text-[#2B2929]">{item}</p>
            ))}
            {showCircles && (
              <div className="grid grid-cols-3 gap-6 sm:my-24 my-12 w-3/4">
                {circleImages.map((item) => (
                  <div
                    className="sm:w-[98px] sm:h-[98px] w-[58px] bg-cover rounded-full bg-center h-[58px] bg-cover"
                    style={{ backgroundImage: `url(${item})` }}
                  ></div>
                ))}
              </div>
            )}
            {buttonText && (
              <div className="w-full mt-12">
                <Button text={buttonText} itemlink={buttonLinks} />
              </div>
            )}
          </div>
          <div
            className="sm:col-span-5 bg-cover hidden lg:grid md:hidden bg-center h-[400px] sm:h-full border-[#47A942] border-r-8"
            style={{ backgroundImage: `url(${mainImage})` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default MainCard;
