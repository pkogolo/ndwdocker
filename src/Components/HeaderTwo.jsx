import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Lottie from "react-lottie";
import animationData from "./lotties/down-arrow.json";

function HeaderTwo({ pageText, image, pageName }) {
  let image2 = useRef(null);
  let image3 = useRef(null);
  let headerText = useRef(null);
  let imageTimeline = useRef();
  let pageTitle = useRef(null);
  let arrowRef = useRef(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    speed: 2,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    imageTimeline.current = gsap.timeline({ paused: true });
    imageTimeline.current
      .fromTo(
        [
          image2.current,
          image3.current,
          pageTitle.current,
          headerText.current,
          arrowRef.current,
        ],
        {
          duration: 0,
          y: "100%",
          opacity: 0,
        },
        {
          duration: 1.75,
          opacity: 1,

          y: "0%",
          ease: "power3.inOut",
          stagger: {
            amount: 0.2,
          },
        }
      )
      .fromTo([image2.current, image3.current], { scale: 1.1 }, { scale: 1 });
  }, []);

  useEffect(() => {
    imageTimeline.current.play();
  }, []);

  return (
    <div>
      <div className=" w-full bg-cover lg:min-h-screen h-[960px] grid lg:grid-cols-2 grid-cols-1 pt-24 md:grid-cols-1">
        <div className="flex items-start flex-col justify-center lg:px-12 md:px-6 px-4 w-full">
          <p
            ref={pageTitle}
            className="lg:text-6xl xl:text-7xl md:text-4xl text-[#47A942] md:text-center md:w-full lg:text-left text-3xl leading-loose mb-4 "
          >
            {pageName}
          </p>
          <h3
            ref={headerText}
            style={{ lineHeight: "48px" }}
            className="lg:text-3xl lg:w-3/4  md:w-full lg:text-left md:text-center text-xl text-[#1E7F3C]"
          >
            {pageText}
          </h3>
        </div>
        <div className="h-full bg-no-repeat lg:grid hidden  place-items-center">
          <div
            ref={image2}
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="bg-cover bg-center bg-no-repeat lg:h-[510px] lg:w-[510px] xl:h-[600px] xl:w-[600px] h-[320px] w-[320px]"
          ></div>
        </div>
        <div className="h-full  pt-4 bg-no-repeat lg:hidden  grid grid-cols-1 justify-items-center">
          <div
            ref={image3}
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="bg-cover bg-center bg-no-repeat h-[320px] w-[320px] md:h-[500px] md:w-[520px] "
          ></div>
        </div>
      </div>

      <div
        ref={arrowRef}
        className="hidden lg:grid md:grid flex w-full xl:-mt-80 lg:-mt-40 md:-mt-12 items-center justify-center "
      >
        <Lottie options={defaultOptions} height={300} width={300} speed={2} />
      </div>
    </div>
  );
}

export default HeaderTwo;
