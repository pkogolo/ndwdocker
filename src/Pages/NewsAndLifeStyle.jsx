import React from "react";

import crowd2 from "../images/crowd.jpg";
import news1 from "../images/NEWSANDLIFESTYLE/news1.jpg";
import InstagramFeed from "../Components/InstagramFeed";
import HeaderTwo from "../Components/HeaderTwo";
import NewsCard from "../Components/NewsCard";
import { newsData } from "../Components/NewsData";
import LowerBanner from "../Components/LowerBanner";

function NewsAndLifeStyle() {
  function generateCards() {
    const cards = newsData.map((item) => (
      <NewsCard
        heading={item.heading}
        text={item.text}
        image={item.image}
        link={item.link}
        date={item.date}
        source={item.source}
      />
    ));

    return cards;
  }
  const array = [
    {
      page: "Life at NDWestern",
      link: "/about/life_at_NDWestern",
    },
    {
      page: "Contact us",
      link: "/contact",
    },
    {
      page: "Life at NDWestern",
      link: "/life_at_NDWestern",
    },
    { page: "Human Assets", link: "/about/human_assets" },
    {
      page: "Operations",
      link: "/operations",
    },
    { page: "Careers", link: "/careers" },
  ];
  return (
    <div className="pt-24 sm:pt-0">
      <HeaderTwo
        pageName={"NDW in the News!"}
        pageText={"Keep in touch with all activities going on at ND Western "}
        image={crowd2}
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center xl:px-24 lg:px-12 md:px-6 gap-6 py-24 bg-[#F7F7FB]">
        {generateCards()}
      </div>

      
      <div className="">
        <LowerBanner linkArray={array} image={news1} />
      </div>
    </div>
  );
}

export default NewsAndLifeStyle;
