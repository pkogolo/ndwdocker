import React from "react";
import HeaderMain from "../Components/HeaderMain";
import MainCard from "../Components/MainCard";
import OurVision from "../Components/OurVision";
import oilman from "../images/oilasset1.png";
import people1 from "../images/people1.jpg";
import manandlady from "../images/manandlady.png";
import headerImage from "../images/HeaderImage.jpg";
import circle1 from "../images/circle1.png";
import circle2 from "../images/circle2.png";
import afzar from "../images/azfar.png";
import temitope from "../images/temitope.png";
import coo from "../images/coo.png";
import InstagramFeed from "../Components/InstagramFeed";
import CSRSection from "../Components/CSRSection";
import LowerBanner from "../Components/LowerBanner";
import Popup from "../Components/Popup";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  return (
    <div className="">
      <CookieConsent
        debug={true}
        location="bottom"
        buttonText="Accept cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#FFFFFF" }}
        buttonStyle={{
          color: "#ffffff",
          backgroundColor: "#47A942",
          fontSize: "16px",
        }}
        expires={150}
      >
        <span className="text-black">
          ND Western.com uses cookies to provide necessary website
          functionality, improve your experience and analyze our traffic. By
          using our website, you agree to our{" "}
          <Link to={"/privacy_policy"} className="font-bold">
            Privacy Policy
          </Link>{" "}
          and our cookies usage.
        </span>
        {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
      </CookieConsent>
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
          mainImage={manandlady}
        />
      </div>

      <div className="w-full mb-40">
        <InstagramFeed token="IGQVJXaml3NXpBVlpwTmNvUDM0ZADYwNUloVnNWdjUzM2FZANGxINU9WN2lCcVNxeGFWb2hmSE5xUmtJczBLUHVVN0dzU1VIUVdtSVpqZA3pCZATIzbXA0Uk9DWVg0RWo0ZAHc3UTlRZAm14U2VOLWFDdFVVWAZDZD" />

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
