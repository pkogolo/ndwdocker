import React, { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import ProfileCard from "../Components/ProfileCard";
import ProfilePopup from "./ProfilePopup";

function ProfileCarousel({ heading, data, shade }) {
  const [position, setPosition] = useState("hi");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("hello");
  const [fullBio, setFullBio] = useState("man");
  const breakPoints = [
    { width: 100, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 200, itemsToShow: 1.2, itemsToScroll: 1, pagination: false },
    { width: 300, itemsToShow: 1.2, itemsToScroll: 1 },
    { width: 400, itemsToShow: 1.2, itemsToScroll: 1 },
    { width: 500, itemsToShow: 1.8 },
    { width: 600, itemsToShow: 2.2 },
    { width: 700, itemsToShow: 2.4 },
    { width: 900, itemsToShow: 3.2 },
    { width: 1000, itemsToShow: 3.4 },
    { width: 1200, itemsToShow: 3.4 },
  ];

  function getFuntion(fullname, bio, post) {
    setFullBio(bio);
    setName(fullname);
    setPosition(post);
    setOpen(true);

  }

  function closePopup() {
    setOpen(false);
  }

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
    <div
      className={
        shade
          ? "bg-[#F7F7FB] lg:p-6 min-h-screen "
          : "bg-[#F1F1F5] lg:p-6 min-h-screen "
      }
    >
      {open && (
        <ProfilePopup
          position={position}
          name={name}
          fullBio={fullBio}
          closeFunction={closePopup}
        />
      )}
      <h1 className="text-2xl  p-12 mb-12">{heading}</h1>
      <div className="flex  flex-col items-start justify-center   ">
        <Carousel
          itemsToScroll={3}
          showArrows={true}
          renderArrow={myArrow}
          showEmptySlots={false}
          easing="ease"
          tiltEasing="ease"
          pagination={false}
          transitionMs={700}
          breakPoints={breakPoints}
          itemPadding={[4, 4]}
        >
          {data.map((item) => (
            <ProfileCard
              image={item.image}
              fullBio={item.fullText}
              position={item.position}
              name={item.name}
              getDataFunction={getFuntion}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ProfileCarousel;
