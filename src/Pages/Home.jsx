import React, { useEffect, useRef } from "react";
import HeaderMain from "../Components/HeaderMain";
import MainCard from "../Components/MainCard";
import OurVision from "../Components/OurVision";
import asset1 from "../images/HOME/asset1.jpg";
import asset10 from "../images/HOME/asset10.jpg";
import manwithBook from "../images/HOME/ndwasset1.jpg"; 
import { Link } from "react-router-dom";
import InstagramFeed from "../Components/InstagramFeed";
import CSRSection from "../Components/CSRSection";
import CookieConsent from "react-cookie-consent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoPlayer from "../Components/VideoPlayer";
gsap.registerPlugin(ScrollTrigger);
import Button from "../Components/Button";
import ESGComponent from "../Components/ESGComponent";
import iwd17 from "../images/NEWSANDLIFESTYLE/WOMENSDAY/iwd17.jpg"

function Home() {
  let visionBox = useRef(null);
  let boxTimeline = useRef();
  useEffect(() => {
    let el = visionBox.current;
    boxTimeline.current = gsap.timeline({ paused: true });
    boxTimeline.current.fromTo(
      [visionBox],
      {
        y: "20%",
        opacity: 0,
      },
      {
        duration: 0.8,
        opacity: 1,
        y: "0%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.2,
        },
        scrollTrigger: {
          trigger: el,
          start: "20px 80%",
          end: "bottom 100px ",
          toggleActions: "restart pause reverse pause",
        },
      }
    );
  }, []);

  useEffect(() => {
    boxTimeline.current.play();
  }, []);

  return (
    <div className=" ">
      <CookieConsent
        debug={true}
        location="bottom"
        buttonText="Accept cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#FFFFFF" }}
        buttonStyle={{
          color: "#eeeeff",
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
        topImage={asset1}
        bottomImage={manwithBook}
      />

      <div ref={(el) => (visionBox = el)} className="p-12">
        <OurVision />
      </div>

      <div className="">
        <MainCard
          title={"Our Operations"}
          buttonLinks={"/operations"}
          mainImage={asset10}
          paragraph={
            "We are reshaping the Nigerian Energy industry, one step at a time.View our core services and operational areas"
          }
          buttonText={"View our Operations"}
          reversed={false}
        />
        <MainCard
          reversed={true}
          title={"Our People"}
          paragraph={
            "We have the right people with the right skills in the right roles, and we employ a variety of strategies to motivate and retain our workforce and our position as an employer of choice."
          }
          buttonText={"Learn our Culture"}
          buttonLinks={"/about/life_at_NDWestern"}
          mainImage={iwd17}
        />
      </div>

      <div className="w-full my-40 flex items-center justify-center flex-col ">
        <h1 className="text-bold text-[#47A942] text-4xl mb-16 font-bold text-center">
          Life at ND Western
        </h1>
        <VideoPlayer />

        <div className="flex items-center justify-center mt-8">
          <Button text={"Take a Tour"} itemlink={"/about/life_at_NDWestern"} />
        </div>
      </div>

      <CSRSection />
      <div>
        <ESGComponent />
      </div>
      <div className="w-full mb-40">
        <InstagramFeed
          title={"Keep up with us on Social Media"}
          token="IGQVJXaml3NXpBVlpwTmNvUDM0ZADYwNUloVnNWdjUzM2FZANGxINU9WN2lCcVNxeGFWb2hmSE5xUmtJczBLUHVVN0dzU1VIUVdtSVpqZA3pCZATIzbXA0Uk9DWVg0RWo0ZAHc3UTlRZAm14U2VOLWFDdFVVWAZDZD"
        />
      </div>
    </div>
  );
}

export default Home;
