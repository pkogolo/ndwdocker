import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-elastic-carousel";
import PhotoPopup from "./PhotoPopup";

function PhotoGalleryComponent({ imageArray, header }) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("man");

  function Card(image) {
    return (
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-[565px] w-[360px] bg-cover bg-center card flex items-end justify-center"
      >
        <div
          onClick={() => {
            getFuntion(image);
          }}
          className="border-white bg-[#ffffff90] border rounded-full p-4 text mb-8 cursor-pointer "
        >
          View Photo
        </div>
      </div>
    );
  }

  function getFuntion(image) {
    setImage(image);
    setOpen(true);
  }

  function closePopup() {
    setOpen(false);
  }

  const breakPoints = [
    { width: 100, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 200, itemsToShow: 1.1, itemsToScroll: 1, pagination: false },
    { width: 300, itemsToShow: 1.05 },
    { width: 400, itemsToShow: 1.2, itemsToScroll: 1 },
    { width: 500, itemsToShow: 2.2, itemsToScroll: 1 },
    { width: 600, itemsToShow: 2.8, itemsToScroll: 2 },
    { width: 700, itemsToShow: 3.2, itemsToScroll: 2 },
    { width: 900, itemsToShow: 3.2, itemsToScroll: 3 },
    { width: 1000, itemsToShow: 3.2, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 3.4, itemsToScroll: 3 },
  ];
  return (
    <div className="min:h-screen w-screen bg-[#F1F1F5] py-24 flex flex-col justify-end items-end ">
      <div className="w-full flex items-center justify-center">
        {open && <PhotoPopup image={image} closeFunction={closePopup} />}
        <h2 className="text-bold xl:pl-24 lg:pl-12 md:pl-6 pl-4 text-3xl mb-16 md:w-full w-full text-left">
          {header}
        </h2>
      </div>

      <div className="grid lg:w-5/6 md:w-full w-full card">
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
          {imageArray.map((item) => Card(item))}

        </Carousel>
      </div>
    </div>
  );
}

export default PhotoGalleryComponent;

function circle() {
  return (
    <div className="h-[565px] w-[360px]  flex items-center justify-center ">
      <div className="rounded-full h-[200px] w-[200px] bg-[#47A942] main-card hover:bg-[#65B32E] flex items-center justify center hover:drop-shadow-sm">
        <h1 className="text-white text-center w-full text-3xl"></h1>
      </div>
      ;
    </div>
  );
}
