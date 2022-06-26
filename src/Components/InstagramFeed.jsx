import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import InstagramCard from "./InstagramCard";
import Carousel, { consts } from "react-elastic-carousel";
import Button from "./Button";
import SVGIcons from "./SVGIcons";


function InstagramFeed({ token, title }) {
  const [data, setData] = useState([]);
  const carouselRef = useRef(null);

  function getFeed() {
    var url =
      "https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token=" +
      token;
    axios.get(url).then((res) => {
      setData(res.data.data);
    });
  }

  useEffect(() => {
    getFeed();
  }, []);

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
    <div className="w-full items-center flex justify-center h-full">
      <div className="w-3/4  lg:mt-40 mt-20 ">
        <h2 className=" text-[#47A942] text-3xl mb-16 text-center">{title}</h2>
        {data.length >= 2 && (
          <div className="flex  items-center justify-center  ">
            <Carousel
              ref={carouselRef}
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
                <InstagramCard image={item.media_url} link={item.permalink} />
              ))}
            </Carousel>
          </div>
        )}
        <div className="flex items-center justify-center mt-8">
          <a
            href="https://www.instagram.com/ndwesternenergy/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">
              <div
            
                className="bg-[#47A942] text-white px-4 py-2 flex items-center  "
              >
                Connect with us
                <div className="ml-4">
                  <SVGIcons type={"ARROW"} />
                </div>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default InstagramFeed;
