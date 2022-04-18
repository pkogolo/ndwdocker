import React from "react";
import HeaderMain from "../Components/HeaderMain";
import MainCard from "../Components/MainCard";
import OurVision from "../Components/OurVision";
import oilman from "../images/oilasset1.png";
import people1 from "../images/people1.jpg";
import headerImage from "../images/HeaderImage.jpg";
// import InstagramFeed from "react-ig-feed";
import InstagramFeed from "../Components/InstagramFeed";
import CSRSection from "../Components/CSRSection";
import LowerBanner from "../Components/LowerBanner";
// import "react-ig-feed/dist/index.css";

function Home() {
  return (
    <div className="">
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
          title={"Our Operations"}
          mainImage={oilman}
          paragraph={
            "We are reshaping the Nigerian Energy industry, one step at a time.View our core services and operational areas"
          }
          buttonText={"View our Operations"}
          reversed={false}
        />
        <MainCard
          showCircles={true}
          reversed={true}
          title={"Our People"}
          paragraph={
            "We have the right people with the right skills in the right roles, and we employ a variety of strategies to motivate and retain our workforce and our position as an employer of choice."
          }
          buttonText={"Learn our Culture"}
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