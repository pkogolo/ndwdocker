import React from "react";
import HeaderMain from "../Components/HeaderMain";
import MainCard from "../Components/MainCard";
import OurVision from "../Components/OurVision";
import oilman from "../images/oilasset1.png";
import people1 from "../images/people1.jpg";
import headerImage from "../images/HeaderImage.jpg";
import circle1 from "../images/circle1.png";
import circle2 from "../images/circle2.png";
import afzar from "../images/azfar.png";
import temitope from "../images/temitope.png";
import coo from "../images/coo.png";
// import InstagramFeed from "react-ig-feed";
import InstagramFeed from "../Components/InstagramFeed";
import CSRSection from "../Components/CSRSection";
import LowerBanner from "../Components/LowerBanner";
import Popup from "../Components/Popup";
// import "react-ig-feed/dist/index.css";

function Home() {
  return (
    <div className="">
      <Popup />
      <HeaderMain
        title={
          "We are leading the way in sustainable oil exploration and production"
        }
        image={headerImage}
      />
      <OurVision />

      <div className="">
        <MainCard
          showCircles={true}
          circleImages={[circle1, circle2, oilman]}
          title={"Our Operations"}
          buttonLinks={"/operations"}
          mainImage={oilman}
          paragraph={
            "We are reshaping the Nigerian Energy industry, one step at a time.View our core services and operational areas"
          }
          buttonText={"View our Operations"}
          reversed={false}
        />
        <MainCard
          showCircles={true}
          circleImages={[afzar, coo, temitope]}
          reversed={true}
          title={"Our People"}
          paragraph={
            "We have the right people with the right skills in the right roles, and we employ a variety of strategies to motivate and retain our workforce and our position as an employer of choice."
          }
          buttonText={"Learn our Culture"}
          buttonLinks={"/about/human_assets"}
          mainImage={people1}
        />
      </div>

      <div className="w-full mb-40">
        <InstagramFeed token="IGQVJVNk9MVFpITW43ZADBCSnd3bjVUbGhVUUhZAYXRqd0RnSHpYa1pDdURWYlhZAaXU4dkVTNy1nRnhZAc19HVzlTY1RwT3hDRnB1QlUwelYtMUxSV2ZASa3V0a2ZAKaU9ZAZAThQbW1wb0lJcVlzU3JqMHI2WgZDZD" />
        {/* <InstagramFeed
          token="IGQVJVNk9MVFpITW43ZADBCSnd3bjVUbGhVUUhZAYXRqd0RnSHpYa1pDdURWYlhZAaXU4dkVTNy1nRnhZAc19HVzlTY1RwT3hDRnB1QlUwelYtMUxSV2ZASa3V0a2ZAKaU9ZAZAThQbW1wb0lJcVlzU3JqMHI2WgZDZD"
          counter="10"
        /> */}
      </div>

      <CSRSection />
    </div>
  );
}

export default Home;
