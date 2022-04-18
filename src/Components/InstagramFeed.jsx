import React, { useState, useEffect } from "react";
import axios from "axios";
import InstagramCard from "./InstagramCard";
// import { Carousel } from "@trendyol-js/react-carousel";
import Carousel from "react-elastic-carousel";
// import { ScrollingCarousel } from "@trendyol-js/react-carousel";
// import Carousel from "carousel-react-rcdev";
import Button from "./Button";

function InstagramFeed({ token }) {
  const [data, setData] = useState([]);

  function getFeed() {
    var url =
      "https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token=" +
      token;
    axios.get(url).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="w-full items-center flex justify-center h-full">
      <div className="w-full hidden sm:grid  sm:mt-40 mt-20 relative">
        <h2 className="text-bold text-[#47A942] text-3xl mb-16 font-bold text-center">
          ND Western News & Life Style
        </h2>
        {data.length >= 2 && (
          <Carousel itemsToShow={3}>
            <InstagramCard image={data[2].media_url} link={data[2].permalink} />
            <InstagramCard image={data[3].media_url} link={data[3].permalink} />
            <InstagramCard image={data[4].media_url} link={data[4].permalink} />
            <InstagramCard image={data[5].media_url} link={data[5].permalink} />
            <InstagramCard image={data[6].media_url} link={data[6].permalink} />
            <InstagramCard image={data[7].media_url} link={data[7].permalink} />
            <InstagramCard image={data[8].media_url} link={data[8].permalink} />
            <InstagramCard image={data[9].media_url} link={data[9].permalink} />
            <InstagramCard
              image={data[10].media_url}
              link={data[2].media_url}
            />
          </Carousel>
        )}
        <div className="flex items-center justify-center mt-8">
          <Button text={"View All"} />
        </div>
      </div>
      <div className="sm:w-5/6 w-full sm:hidden block sm:mt-40 mt-20 relative">
        <h2 className="text-bold text-[#47A942] text-3xl mb-16 font-bold text-center">
          ND Western News & Life Style
        </h2>
        {data.length >= 2 && (
          <Carousel itemsToShow={1}>
            <InstagramCard image={data[2].media_url} link={data[2].permalink} />
            <InstagramCard image={data[3].media_url} link={data[3].permalink} />
            <InstagramCard image={data[4].media_url} link={data[4].permalink} />
            <InstagramCard image={data[5].media_url} link={data[5].permalink} />
            <InstagramCard image={data[6].media_url} link={data[6].permalink} />
            <InstagramCard image={data[7].media_url} link={data[7].permalink} />
            <InstagramCard image={data[8].media_url} link={data[8].permalink} />
            <InstagramCard image={data[9].media_url} link={data[9].permalink} />
            <InstagramCard
              image={data[10].media_url}
              link={data[2].media_url}
            />
          </Carousel>
        )}
        <div className="flex items-center justify-center mt-8">
          <Button text={"View All"} />
        </div>
      </div>
    </div>
  );
}

export default InstagramFeed;

function RightArrow() {
  return (
    <div>
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
}
function LeftArrow() {
  return (
    <div>
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
  );
}
