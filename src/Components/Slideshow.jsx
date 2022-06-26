import React from "react";
import Carousel, { consts } from "react-elastic-carousel";

function Slideshow({ data }) {
  const breakPoints = [
    { width: 100, itemsToShow: 1.0, itemsToScroll: 1 },
    { width: 200, itemsToShow: 1.0, itemsToScroll: 1, pagination: false },
    { width: 300, itemsToShow: 1.0, itemsToScroll: 1 },
    { width: 400, itemsToShow: 1.0, itemsToScroll: 1 },
    { width: 500, itemsToShow: 1.0, itemsToScroll: 1 },
    { width: 600, itemsToShow: 1.0, itemsToScroll: 1 },
    { width: 700, itemsToShow: 1.0, itemsToScroll: 1 },
    { width: 900, itemsToShow: 1.0, itemsToScroll: 1 },
    { width: 1000, itemsToShow: 1.0, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 1.0, itemsToScroll: 1 },
  ];

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
  return (
    <div>
      <div className="flex  items-center justify-center xl:p-24 lg:p-12 md:p-6 p-4">
        <Carousel
          enableAutoPlay
          autoPlaySpeed={4500}
          itemsToScroll={3}
          showArrows={false}
          renderArrow={myArrow}
          showEmptySlots={false}
          easing="ease"
          tiltEasing="ease"
          pagination={true}
          transitionMs={700}
          breakPoints={breakPoints}
          itemPadding={[4, 4]}
          loop={true}
        >
          {data.map((item) => slide(item))}
        </Carousel>
      </div>
    </div>
  );
}

export default Slideshow;

function slide(item) {
  return (
    <div
      style={{ backgroundImage: `url(${item})` }}
      className="bg-cover bg-no-repeat bg-center xl:h-screen lg:h-screen md:h-[400px] h-[400px] w-full"
    ></div>
  );
}
