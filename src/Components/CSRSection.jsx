import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import SVGIcons from "./SVGIcons";
import Button from "./Button";
function CSRSection() {
  const [play, setPlay] = useState(false);
  const image1 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605878/NDWESTERN-MEDIA/images/CSR/csr15_fm1sco.jpg";
  const image2 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605878/NDWESTERN-MEDIA/images/CSR/csr2_dfib5j.jpg";
  const image3 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605879/NDWESTERN-MEDIA/images/CSR/csr3_vlivbl.jpg";
  const image4 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658606015/NDWESTERN-MEDIA/images/CSR/csr4_u6b6eu.jpg";
  const image5 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605962/NDWESTERN-MEDIA/images/CSR/csr5_s8gq9c.jpg";
  const image6 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658606075/NDWESTERN-MEDIA/images/CSR/csr6_xxznu2.jpg";
  const image8 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658606066/NDWESTERN-MEDIA/images/CSR/csr8_v31scq.jpg";
  const image9 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605884/NDWESTERN-MEDIA/images/CSR/csr9_ehdpsr.jpg";
  const image10 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605878/NDWESTERN-MEDIA/images/CSR/csr10_xukbkn.jpg";
  const image11 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605877/NDWESTERN-MEDIA/images/CSR/csr11_r6ymzg.jpg";
  const image12 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605876/NDWESTERN-MEDIA/images/CSR/csr12_qxrwtp.jpg";
  const image13 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605890/NDWESTERN-MEDIA/images/CSR/csr33_mlxush.png";
  const image14 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605880/NDWESTERN-MEDIA/images/CSR/csr14_wavbi8.jpg";
  const image21 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605903/NDWESTERN-MEDIA/images/CSR/csr21_rirbml.jpg";
  const image15 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_35/v1658605905/NDWESTERN-MEDIA/images/CSR/csr16_bndirm.jpg";
  const cardArray = [
    image5,
    image10,
    image3,
    image4,
    image1,
    image2,
    image6,
    image8,
    image9,
    image10,
    image12,
    image13,
    image14,
    image15,
    image21,
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
