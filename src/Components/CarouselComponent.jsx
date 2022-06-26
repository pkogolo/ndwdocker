import React from "react";
import Carousel, { consts } from "react-elastic-carousel";

function CarouselComponent({ array }) {
  function myArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <div className="mt-[100px]">
          <svg
            width={49}
            height={49}
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.0453 24.2031H10.0453"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24.0453 38.2031L10.0453 24.2031L24.0453 10.2031"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : (
        <div className=" mt-[100px]">
          <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1824 24.9775H38.1824"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.1824 10.9775L38.1824 24.9775L24.1824 38.9775"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      );
    return (
      <div onClick={onClick} disabled={isEdge}>
        {pointer}
      </div>
    );
  }

  const breakPoints = [
    { width: 100, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 200, itemsToShow: 1.2, itemsToScroll: 1, pagination: false },
    { width: 300, itemsToShow: 1.2, itemsToScroll: 1 },
    { width: 400, itemsToShow: 1.2, itemsToScroll: 1 },
    { width: 500, itemsToShow: 1.8 },
    { width: 600, itemsToShow: 2.2 },
    { width: 700, itemsToShow: 2.4 },
    { width: 900, itemsToShow: 2.8 },
    { width: 1000, itemsToShow: 3.2 },
    { width: 1200, itemsToShow: 3.2 },
  ];
  return (
    <div>
      {" "}
      <Carousel
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
        {array.map((item) => Card(item))}
        {circle()}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;

function Card(item) {
  return (
    <div
      style={{ backgroundImage: `url(${item})` }}
      className="h-[580px] w-full bg-cover bg-center bg-no-repeat  p-8"
    ></div>
  );
}

function circle() {
  return (
    <div className="h-[565px] w-[360px]  flex items-center justify-center ">
      <div className="rounded-full h-[200px] w-[200px] bg-[#47A942] main-card hover:bg-[#65B32E] flex items-center justify center hover:drop-shadow-sm">
        <h1 className="text-white text-center w-full text-3xl">End of Slide</h1>
      </div>
      ;
    </div>
  );
}
