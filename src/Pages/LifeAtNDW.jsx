import React, { useState, useEffect, useRef } from "react";
import HeaderTwo from "../Components/HeaderTwo";
import ScrollIntoView from "react-scroll-into-view";

import LowerBanner from "../Components/LowerBanner";
import PhotoGalleryComponent from "../Components/PhotoGalleryComponent";
import VideoPlayer from "../Components/VideoPlayer";
import news1 from "../images/NEWSANDLIFESTYLE/news1.jpg";
import news2 from "../images/NEWSANDLIFESTYLE/news2.jpg";
import IWD13 from "../images/NEWSANDLIFESTYLE/WOMENSDAY/iwd13.jpg";
import image1 from "../images/CSR/csr15.jpg";
import { IDWArray } from "../Components/LifeAtNdwData";
import { talentArray } from "../Components/LifeAtNdwData";
import { eoyArray } from "../Components/LifeAtNdwData";
import { outingArray } from "../Components/LifeAtNdwData";
import IWD15 from "../images/NEWSANDLIFESTYLE/WOMENSDAY/iwd15.jpg";

function LifeAtNDW() {
  let [index, setindex] = useState(0);

  const cardOverviewArray = [
    {
      text: "International Women's Day",
      selector: "#iwd",
      image: IDWArray[3],
    },
    { text: "End of Year Awards", selector: "#eoy", image: eoyArray[3] },
    {
      text: "Our Talents in Action",
      selector: "#talents",
      image: talentArray[0],
    },
    {
      text: "Corporate Outings and Dinners",
      selector: "#outing",
      image: outingArray[3],
    },
  ];

  const styles = { height: "100%" };

  const array = [
    {
      page: "Life at ND Western",
      link: "/life_at_NDWestern",
    },
    {
      page: "Contact us",
      link: "/contact",
    },
    {
      page: "NDW in the News",
      link: "/NDW_in_the_News",
    },
    { page: "Human Assets", link: "/about/human_assets" },
    {
      page: "Operations",
      link: "/operations",
    },
    { page: "Careers", link: "/careers" },
  ];

  function card(text, selector, image) {
    return (
      <div className="h-full">
        <ScrollIntoView
          selector={selector}
          smooth={true}
          alignToTop={true}
          style={styles}
        >
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="p-6 main-card lg:h-full xl:h-  hover:bg-[#1E7F3C] bg-center bg-cover  bg-[#65B32E] cursor-pointer rounded-xl hover:rounded-[100px] flex items-center justify-center h-[360px] bg-center hovershadow-xl hover:-translate-y-2 hover:drop-shadow-md"
          >
            <p className="text-white mix-blend-screen text-3xl drop-shadow-lg">{text}</p>
          </div>
        </ScrollIntoView>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-0">
      <HeaderTwo
        pageName={"Life at ND Western"}
        pageText={"Explore our amazing work culture here at NDWestern"}
        image={IWD13}
      />
      <h1 className="text-center text-3xl text-">View our Gallery</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 lg:px-80 md:px-6 px-6 xl:min-h-screen lg:min-h-screen md:h-full md:my-24 lg:my-24 md:my-2 my-12">
        {cardOverviewArray.map((item) =>
          card(item.text, item.selector, item.image)
        )}
      </div>
      <div id="iwd" className="flex flex-col justify-center items-center">
        <VideoPlayer />

        <p className="mt-4 ">
          Women's Network and International Women's Day Outreach
        </p>
      </div>

      <div>
        <div>
          <PhotoGalleryComponent
            imageArray={IDWArray}
            header={"International Women's Day"}
          />
        </div>

        <div id="talents">
          <PhotoGalleryComponent
            imageArray={talentArray}
            header={"Our Talents in Action"}
          />
        </div>

        <div id="eoy">
          <PhotoGalleryComponent
            imageArray={eoyArray}
            header={"End of Year Awards"}
          />
        </div>

        <div id="outing">
          <PhotoGalleryComponent
            imageArray={outingArray}
            header={"Corporate Outings and Dinners"}
          />
        </div>
      </div>
      <div className="">
        <LowerBanner linkArray={array} image={IWD15} />
      </div>
    </div>
  );
}

export default LifeAtNDW;
