import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function HeaderMain({ title, topImage, bottomImage, pageName }) {
  let image1 = useRef(null);
  let image2 = useRef(null);
  let image3 = useRef(null);
  let headerText = useRef(null);
  let imageTimeline = useRef();

  

  useEffect(() => {
    imageTimeline.current = gsap.timeline({ paused: true });
    imageTimeline.current
      .fromTo(
        [image2.current, image1.current,image3.current, headerText.current],
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
      .fromTo([image1.current, image2.current, image3.current], { scale: 1.1 }, { scale: 1 });
  }, []);

  useEffect(() => {
    imageTimeline.current.play();
  }, []);

  return (
    <div className=" w-full bg-cover lg:min-h-screen h-[960px] grid lg:grid-cols-2 grid-cols-1 pt-24 md:grid-cols-1">
      <div className="flex items-start flex-col justify-center lg:px-12 md:px-6 px-4 w-full">
        <h3 className="lg:text-2xl md:w-full lg:text-left md:text-center text-xl text-[#65B32E] lg:mb-12 mb-4">
          {pageName}
        </h3>
        <p style={{lineHeight:"60px"}}
          ref={headerText}
          className="lg:text-5xl lg:w-5/6 md:text-3xl text-[#47A942] md:text-center md:w-full lg:text-left text-3xl leading-loose "
        >
          {title}
        </p>
      </div>
      <div className="h-full bg-no-repeat lg:grid hidden grid-cols-2 lg:bg-cover md:bg-contain bg-center flex items-center justify-center">
        <div
          ref={image1}
          style={{
            backgroundImage: `url(${topImage})`,
          }}
          className="bg-cover bg-center bg-no-repeat  xl:h-[517px] xl:w-[305px]  lg:h-[417px] lg:w-[205px] md:w-[150px]  md:w-[250px] h-[400px] w-[300px] "
        ></div>
        <div
          ref={image2}
          style={{
            backgroundImage: `url(${bottomImage})`,
          }}
          className="bg-cover bg-center bg-no-repeat lg:h-[417px] lg:w-[205px] xl:h-[517px] xl:w-[305px] h-[400px] w-[300px] mb-80"
        ></div>
      </div>
      <div className="h-full  pt-4 bg-no-repeat lg:hidden md:hidden grid grid-cols-1 place-items-center lg:bg-cover md:bg-contain bg-center flex items-center justify-center">
        {/* <div
          ref={image1}
          style={{
            backgroundImage: `url(${topImage})`,
          }}
          className="bg-cover bg-center bg-no-repeat lg:h-[517px] md:w-[150px] lg:w-[305px] md:w-[250px] h-[400px] w-[300px] "
        ></div> */}
        <div
          ref={image3}
          style={{
            backgroundImage: `url(${bottomImage})`,
          }}
          className="bg-cover bg-center bg-no-repeat lg:h-[507px] lg:w-[315px] h-[400px] w-[300px] lg:mb-80 md:mb-4 mb-4"
        ></div>
      </div>
    </div>
  );
}

export default HeaderMain;
