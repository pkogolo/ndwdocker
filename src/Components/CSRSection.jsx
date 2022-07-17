import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import image1 from "../images/CSR/csr15.jpg";
import image2 from "../images/CSR/csr2.jpg";
import image3 from "../images/CSR/csr3.jpg";
import image4 from "../images/CSR/csr4.jpg";
import image5 from "../images/CSR/csr5.jpg";
import image6 from "../images/CSR/csr6.jpg";
import image7 from "../images/CSR/csr7.jpg";
import image8 from "../images/CSR/csr8.jpg";
import image9 from "../images/CSR/csr9.jpg";
import image10 from "../images/CSR/csr10.jpg";
import image11 from "../images/CSR/csr11.jpg";
import image12 from "../images/CSR/csr12.jpg";
import image13 from "../images/CSR/csr13.jpg";
import image14 from "../images/CSR/csr14.jpg";
import image15 from "../images/CSR/csr15.jpg";
import SVGIcons from "./SVGIcons";
import Button from "./Button";
import CustomCursor from "./CustomCursor";
function CSRSection() {
  const [play, setPlay] = useState(false);
  const cardArray = [
    image5,
    image10,
    image3,
    image4,
    image1,
    image6,
    image7,
    image8,
    image9,
    image10,
    image12,
    image13,
    image14,
    image15,
  ];
  const breakPoints = [
    { width: 100, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 200, itemsToShow: 1.1, itemsToScroll: 1, pagination: false },
    { width: 300, itemsToShow: 1.05 },
    { width: 400, itemsToShow: 1.2, itemsToScroll: 1 },
    { width: 500, itemsToShow: 2.2 },
    { width: 600, itemsToShow: 2.8 },
    { width: 700, itemsToShow: 3.2 },
    { width: 900, itemsToShow: 3.2 },
    { width: 1000, itemsToShow: 3.2 },
    { width: 1200, itemsToShow: 3.4 },
  ];
  return (
    <div className="min:h-screen w-screen bg-[#0A4D2A] py-24 flex flex-col justify-end items-end ">
      <div className="w-full flex items-center justify-center">
        <h2 className="text-bold text-white text-3xl mb-16 lg:w-1/2 md:w-full w-full text-center">
          We are committed to building the Nation, and inspiring a generation of
          young change makers
        </h2>
      </div>

      <div
        onMouseEnter={() => {
          setPlay(true);
        }}
        onMouseLeave={() => {
          setPlay(false);
        }}
        className="grid lg:w-5/6 md:w-full w-full card"
      >
        <CustomCursor />
        <Carousel
          itemsToShow={3.5}
          itemsToScroll={1}
          showArrows={false}
          showEmptySlots={false}
          easing="ease"
          tiltEasing="ease"
          pagination={false}
          transitionMs={700}
          breakPoints={breakPoints}
          itemPadding={[4, 4]}
        >
          {cardArray.map((item) => Card(item))}
          {circle()}
        </Carousel>
      </div>
      <div className="flex items-center justify-center w-full mt-12">
        <Button text={"See Our Impact "} itemlink={"/about/csr"} />
      </div>
    </div>
  );
}

export default CSRSection;

function Card(image) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="h-[565px] w-[360px] bg-cover bg-center card "
    ></div>
  );
}

function circle() {
  return (
    <div className="h-[565px] w-[360px]  flex items-center justify-center ">
      <Link
        to={"/about/csr"}
        className="rounded-full h-[300px] w-[300px] bg-[#47A942] main-card hover:bg-[#65B32E] flex items-center justify center hover:drop-shadow-sm"
      >
        <h1 className="text-white text-center w-full text-3xl">View More</h1>
      </Link>
      ;
    </div>
  );
}
