import React, { useRef, useEffect, useState } from "react";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
  let ref = useRef(null);
  let tl = useRef();

  useEffect(() => {
    let element = ref.current;
    tl.current = gsap.timeline({ paused: true });
    tl.current.fromTo(
      element,
      { backgroundColor: "white", color: "green" },
      { duration: 0.5, backgroundColor: "#47A942", color: "white" }
    );
  }, []);
  // useEffect(() => {
  //   tl.current.fromTo(
  //     element,
  //     {
  //       scale: 0,
  //     },
  //     {
  //       scale: 1.5,
  //       duration: 0.5,
  //       // scrollTrigger: {
  //       //   trigger: element,
  //       //   start: "top 50px",
  //       //   end: "bottom 50px",
  //       //   scrub: true,
  //       // },
  //     }
  //   );
  // }, []);

  return (
    <div className="flex items-center  justify-center sm:px-0 px-4">
      {!reversed && (
        <div
          ref={ref}
          onMouseEnter={() => {
            tl.current.play();
          }}
          onMouseLeave={() => {
            tl.current.reverse();
          }}
          className="grid hover:border-[#47A942] hover:border-l-8 lg:grid-cols-12 grid-cols-1 md:grid-cols-1 lg:h-[440px] h-full sm:w-3/4 w-full mt-24 overflow-hidden "
        >
          <div
            id="main-image"
            className="main-card sm:col-span-5 bg-cover hover:scale-105 bg-center border-l h-[400px] md:h-[400px] lg:h-full hover:border-[#47A942] hover:border-l-8"
            style={{ backgroundImage: `url(${mainImage})` }}
          ></div>
          <div className=" sm:col-span-7 sm:p-12 p-6 w-full">
            <h1 className="text-4xl">{title}</h1>
            {paragraph.split("/n").map((item) => (
              <p className="mt-4  w-full">{item}</p>
            ))}

            {buttonText && (
              <div className="w-full mt-12">
                <Button text={buttonText} itemlink={buttonLinks} />
              </div>
            )}
          </div>
        </div>
      )}
      {reversed && (
        <div
          ref={ref}
          onMouseEnter={() => {
            tl.current.play();
          }}
          onMouseLeave={() => {
            tl.current.reverse();
          }}
          className="main-card grid lg:grid-cols-12 grid-cols-1 md:grid-cols-1 hover:border-[#47A942] hover:border-l-8  lg:h-[440px] h-full sm:w-3/4 w-full mt-24 overflow-hidden"
        >
          <div
            className="lg:col-span-5 bg-cover lg:hidden bg-center hover:border-l h-[400px] lg:h-full md:h-[400px]  "
            style={{ backgroundImage: `url(${mainImage})` }}
          ></div>
          <div className=" sm:col-span-7 sm:p-12 p-6 w-full">
            <h1 className="text-4xl">{title}</h1>
            {paragraph.split("/n").map((item) => (
              <p className="mt-4 ">{item}</p>
            ))}

            {buttonText && (
              <div className="w-full mt-12">
                <Button text={buttonText} itemlink={buttonLinks} />
              </div>
            )}
          </div>
          <div
            className="sm:col-span-5 main-card bg-cover hidden lg:grid md:hidden bg-center h-[400px] sm:h-full hover:border-[#47A942] hover:border-r-8 hover:scale-105 "
            style={{ backgroundImage: `url(${mainImage})` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default MainCard;
