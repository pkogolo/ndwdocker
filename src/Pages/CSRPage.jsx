import React from "react";
import HeaderMain from "../Components/HeaderMain";
import MainCard from "../Components/MainCard";
import sportsImage from "../images/sports.jpg";
import boyRunning from "../images/boy-running.jpg";
import tripod from "../images/tripod.png";
import ResponsibilityCard from "../Components/ResponsibilityCard";
import pipes from "../images/pipes.jpg";
import outreach from "../images/outreach.png";
import walk4aLimb from "../images/walk4alimb.png";
import CSRCards from "../Components/CSRCards";
import covidRelief from "../images/covid-relief.png";
import scholarship from "../images/scholarship.png";
import givingMedal from "../images/givingmedal.jpg";
import LowerBanner from "../Components/LowerBanner";

function CSRPage() {
  return (
    <div>
      <HeaderMain
        title={
          "We are committed to the utmost integrity in all dealings with our stakeholders"
        }
        image={sportsImage}
      />

      <MainCard
        title={"Our Philosophy"}
        mainImage={boyRunning}
        paragraph={
          "At ND Western, corporate social responsibility is a necessity. Our philosophy is to be a socially responsible organization that appraises the communities and environment in which we operate to identify and work in conjunction with relevant stakeholders to eliminate barriers to Social, Economic and Environmental development."
        }
        reversed={false}
      />
      <div className="w-full py-4">
        <h2 className="text-green text-3xl text-center">The Framework</h2>
      </div>
      <p className="px-4 my-4">
        We have a tripod approach that allows us to diversify how we implement
        our corporate social responsibilities.
      </p>
      <div className="w-full flex items-center justify-center">
        <div
          className="sm:w-[721px] sm:h-[545px] bg-center w-[421px] h-[245px] bg-contain bg-no-repeat "
          style={{ backgroundImage: `url(${tripod})` }}
        ></div>
      </div>

      <div className="w-full px-4 flex justify-center my-24">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 sm:w-3/4 w-full px-4">
          <ResponsibilityCard
            image={pipes}
            title={"Economic Responsibility"}
            text={
              "We are fully committed to the local content initiative. We aim to use local contractors and 3rd party vendors in order to promote the growth of small to medium sized companies for economic progress and development."
            }
          />
          <ResponsibilityCard
            image={walk4aLimb}
            title={" Social Responsibility"}
            text={
              "We support the development of local human capital through internships, scholarships and train-the-trainer schemes needed for the growth and sustainability of the oil and gas industry."
            }
          />
          <ResponsibilityCard
            image={pipes}
            title={"Environmental Responsibility"}
            text={
              "We implement and adhere to the highest HSSE Standards, and adopt precautionary approaches to prevent adverse impacts on our people and environment in the course of our operations."
            }
          />
        </div>
      </div>
      <div className="w-full flex justify-center my-24">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 sm:w-3/4 w-full">
          <CSRCards
            image={walk4aLimb}
            title={" Walk for a limb"}
            text={
              "We support the development of local human capital through internships, scholarships and train-the-trainer schemes needed for the growth and sustainability of the oil and gas industry."
            }
          />
          <CSRCards
            image={covidRelief}
            title={"Covid Relief"}
            text={
              "We are fully committed to the local content initiative. We aim to use local contractors and 3rd party vendors in order to promote the growth of small to medium sized companies for economic progress and development."
            }
          />

          <CSRCards
            image={scholarship}
            title={"ND Western Scholarship Awards"}
            text={
              "We implement and adhere to the highest HSSE Standards, and adopt precautionary approaches to prevent adverse impacts on our people and environment in the course of our operations."
            }
          />

          <CSRCards
            image={sportsImage}
            title={"Making of Champions"}
            text={
              "We implement and adhere to the highest HSSE Standards, and adopt precautionary approaches to prevent adverse impacts on our people and environment in the course of our operations."
            }
          />
        </div>
      </div>

      <LowerBanner
        text={
          "We strive to eliminate barriers to Social, Economic and Environmental development"
        }
        image={givingMedal}
      />
    </div>
  );
}

export default CSRPage;
