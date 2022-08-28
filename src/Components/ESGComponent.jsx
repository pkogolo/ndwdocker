import React, { useState, useEffect, useRef } from "react";

import Button from "./Button";
import gsap from "gsap";
import Carousel from "react-elastic-carousel";

function ESGComponent() {
  const [color, setColor] = useState("black");
  const esg1 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605909/NDWESTERN-MEDIA/images/saipec8_jiqxqk.jpg";
  const esg2 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605897/NDWESTERN-MEDIA/images/HSE/hse4_zwu392.jpg";
  const outreach =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605949/NDWESTERN-MEDIA/images/communities/medicaloutreach/outreach3_brvkqp.jpg";

  const cardData = [
    {
      image: esg1,
      heading: "  An overview of our ESG Principles",
      paragraph:
        "Our responsible business operations aim to empower all our stakeholders to address environmental and social challenges.",
      link: "/about/ESG",
    },
    {
      image:
        "https://images.unsplash.com/photo-1635822743678-7ca9b20904d3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987",
      heading: "Lowering our Carbon Footprint ",
      paragraph:
        "We see ourselves playing a leading role in reducing scope 1 and scope 2 emissions in the Nigerian oil and gas industry.",
      link: "/about/ESG/approach_to_reducing_emmissions",
    },
    {
      image: esg2,
      heading: "ND Western, Safety and Occupational Health",
      paragraph:
        " This ESOHS MS provides guidance for the mitigation of occupational and environmental safety risks",
      link: "/about/ESG/ESOHS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1604079628040-94301bb21b91?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987",
      heading: "Environmental and Social Policy",
      link: "/about/ESG",
      paragraph:
        "Our ESG Framework is strongly built upon the United Nations Sustainable Development Goals",
    },
  ];

  const breakPoints = [
    { width: 100, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 200, itemsToShow: 1.2, itemsToScroll: 1, pagination: false },
    { width: 300, itemsToShow: 1.2, itemsToScroll: 1 },
    { width: 400, itemsToShow: 1.2, itemsToScroll: 1 },
    { width: 500, itemsToShow: 1.8 },
    { width: 600, itemsToShow: 2.2 },
    { width: 700, itemsToShow: 2.4 },
    { width: 900, itemsToShow: 3.2 },
    { width: 1000, itemsToShow: 3.8 },
    { width: 1200, itemsToShow: 5.4 },
  ];
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let tl1 = useRef();
  let tl2 = useRef();
  let tl3 = useRef();
  let tl4 = useRef();

  useEffect(() => {
    let element1 = box1.current;
    let element2 = box2.current;
    let element3 = box3.current;
    let element4 = box4.current;
    tl1.current = gsap.timeline({ paused: true });
    tl2.current = gsap.timeline({ paused: true });
    tl3.current = gsap.timeline({ paused: true });
    tl4.current = gsap.timeline({ paused: true });

    tl1.current.fromTo(
      element1,
      { backgroundImage: `url(null)` },
      { backgroundImage: `url(${esg1})`, duration: 0.01, ease: "expo.out" }
    );
    tl2.current.fromTo(
      element2,
      { backgroundImage: `url(null)` },
      {
        backgroundImage: `url(https://images.unsplash.com/photo-1635822743678-7ca9b20904d3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987)`,

        duration: 0.01,
        ease: "expo.out",
      }
    );
    tl3.current.fromTo(
      element3,
      { backgroundImage: `url(null)` },
      { backgroundImage: `url(${esg2})`, duration: 0.01, ease: "expo.out" }
    );
    tl4.current.fromTo(
      element4,
      { backgroundImage: `url(null)` },
      { backgroundImage: `url(${outreach})`, duration: 0.01, ease: "expo.out" }
    );
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1604079628040-94301bb21b91?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987)`,
      }}
      className="bg-cover bg-center lg:p-12 md:p-4 p-2"
    >
      <div className="w-full ">
        <h1 className="text-white text-4xl my-12">
          Environmental and Sustainability Governance
        </h1>
      </div>
      <div className="min-h-[580px] w-full xl:grid lg:hidden md:hidden hidden ">
        <div className="grid grid-cols-4 gap-2 h-full w-full main-card">
          <div
            ref={box1}
            onMouseEnter={() => {
              tl1.current.play();
              setColor("white");
            }}
            onMouseLeave={() => {
              tl1.current.reverse();
              setColor("white");
            }}
            className="h-full w-full bg-cover bg-center bg-no-repeat  p-8"
          >
            <div
              style={{ color: `${color}` }}
              className="flex flex-col    h-full w-full justify-between   "
            >
              <h1 className="text-2xl mb-60">
                An overview of our ESG Principles
              </h1>
              <div className="h-full pt-4  ">
                <p className="mb-8">
                  Our responsible business operations aim to empower all our
                  stakeholders to address environmental and social challenges.
                </p>
                <Button text={"Explore"} itemlink={"/about/ESG"} />
              </div>
            </div>
          </div>
          <div
            ref={box2}
            onMouseEnter={() => {
              tl2.current.play();
              setColor("white");
            }}
            onMouseLeave={() => {
              tl2.current.reverse();
              setColor("white");
            }}
            className="h-full w-full bg-cover bg-center bg-no-repeat  p-8"
          >
            <div
              style={{ color: `${color}` }}
              className="flex flex-col    h-full w-full justify-between   "
            >
              <h1 className="text-2xl mb-60">Lowering our Carbon Footprint</h1>
              <div className="h-full pt-4  ">
                <p className="mb-8">
                  We see ourselves playing a leading role in reducing scope 1
                  and scope 2 emissions in the Nigerian oil and gas industry.
                </p>
                <Button
                  text={"Explore"}
                  itemlink={"/about/ESG/approach_to_reducing_emmissions"}
                />
              </div>
            </div>
          </div>
          <div
            ref={box3}
            onMouseEnter={() => {
              tl3.current.play();
              setColor("white");
            }}
            onMouseLeave={() => {
              tl3.current.reverse();
              setColor("white");
            }}
            className="h-full w-full bg-cover bg-left bg-no-repeat  p-8"
          >
            <div
              style={{ color: `${color}` }}
              className="flex flex-col    h-full w-full justify-between   "
            >
              <h1 className="text-2xl mb-60">
                ND Western, Safety and Occupational Health
              </h1>
              <div className="h-full pt-4  ">
                <p className="mb-8 bg-blend-difference">
                  This ESOHS MS provides guidance for the mitigation of
                  occupational and environmental safety risks
                </p>
                <Button text={"Explore"} itemlink={"/about/ESG/ESOHS"} />
              </div>
            </div>
          </div>
          <div
            ref={box4}
            onMouseEnter={() => {
              tl4.current.play();
              setColor("white");
            }}
            onMouseLeave={() => {
              tl4.current.reverse();
              setColor("white");
            }}
            // style={{ backgroundImage: `url(${image1})` }}
            className="h-full w-full bg-cover bg-center bg-no-repeat  p-8"
          >
            <div
              style={{ color: `${color}` }}
              className="flex flex-col    h-full w-full justify-between   "
            >
              <h1 className="text-2xl mb-60">
                Environmental and Social Policy
              </h1>
              <div className="h-full pt-4  ">
                <p className="mb-8">
                  Our ESG Framework is strongly built upon the United Nations
                  Sustainable Development Goals
                </p>
                <Button text={"Explore"} itemlink={"/about/ESG"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:grid xl:hidden md:grid grid">
        <Carousel
          itemsToShow={1.1}
          itemsToScroll={3}
          showArrows={false}
          showEmptySlots={false}
          easing="ease"
          tiltEasing="ease"
          pagination={false}
          transitionMs={700}
          breakPoints={breakPoints}
          itemPadding={[4, 4]}
        >
          {cardData.map((item) => Card(item))}
        </Carousel>
      </div>
    </div>
  );
}

export default ESGComponent;

function Card(item) {
  return (
    <div
      style={{ backgroundImage: `url(${item.image})` }}
      className="h-[580px] w-full bg-cover bg-center bg-no-repeat  p-8"
    >
      <div className="flex text-white flex-col h-full w-full justify-between   ">
        <h1 className="text-2xl mb-40">{item.heading}</h1>
        <div className="h-full pt-4  ">
          <p className="mb-8 drop-shadow-xl backdrop-blur-sm ">
            {item.paragraph}
          </p>
          <Button text={"Explore"} itemlink={item.link} />
        </div>
      </div>
    </div>
  );
}
