import React from "react";
import HeaderMain from "../Components/HeaderMain";
import hseMan from "../images/HSE.png";
import MainCard from "../Components/MainCard";
import oilMan from "../images/asset2.jpg";
import pipes from "../images/pipes.jpg";
import house from "../images/house.jpg";
import covidRelief from "../images/covid-relief.png";
import walk4Alimb from "../images/walk4alimb.png";
import drilling from "../images/drilling.png";
import medal from "../images/medal.jpg";
import hse2 from "../images/hse2.png";
import GreenCard from "../Components/GreenCard";

function AboutUs() {
  const coreValuesData = [
    {
      title: "High Performance",
      paragraph:
        "We value all people, praise efforts, reward and recognize high performance through our best-in-class performance management strategy.",
      image: drilling,
    },
    {
      title: "Honesty and Integrity",
      paragraph:
        "We walk the talk at ND Western and do what we say we will do and ought to do, while ensuring fairness and equality of opportunities for all.",
      image: covidRelief,
    },
    {
      title: "Respect for the Individual",
      paragraph:
        "We believe respect is important in our dealings with all our employees at all levels. Therefore, we create a culture of zero tolerance to disrespect including harassment in all forms.",
      image: medal,
    },
    {
      title: "Health and Safety",
      paragraph:
        "The health and safety of our employees is very important to us. As a result we have deeply entrenched in our culture health and safety awareness campaigns, provision of comprehensive medical cover as well as fun and creative initiatives to drive health and safety awareness both on and off the field.",
      image: hse2,
    },
    {
      title: "Team Work",
      paragraph:
        "As the saying goes, the 'whole is greater than the sum of its parts'. While we recognize individual ingenuity, we encourage and celebrate team work because we have seen it produce incredible results compared to individual output. Effective team work enhances and harmonizes contributions towards a common goal.",
      image: walk4Alimb,
    },
  ];

  function generateCards() {
    const cards = coreValuesData.map((item) => (
      <GreenCard
        title={item.title}
        paragraph={item.paragraph}
        mainImage={item.image}
      />
    ));

    return cards;
  }

  return (
    <div className="pt-24 sm:pt-0">
      <HeaderMain
        title={
          "We are becoming the world class Energy Company of choice in Africa."
        }
        image={hseMan}
      />

      <MainCard
        title={"Our Vision"}
        mainImage={oilMan}
        paragraph={
          "To be a world class Energy Company of choice in Africa, effectively and prudently producing oil and gas, and delivering value to its people and shareholders."
        }
        reversed={false}
      />
      <MainCard
        title={"Our Mission"}
        mainImage={oilMan}
        paragraph={
          "To create shareholder value by providing clean energy through sustainable and strategic partnerships in communities we operate in, while adhering to international HSSE Standards and best practices, utilizing innovative technologies and running efficient, cost effective operations with a prepared and motivated work force."
        }
        reversed={true}
      />

      <MainCard
        title={"Our Story"}
        mainImage={house}
        paragraph={
          'ND Western Limited ("ND Western") is an independent Nigerian oil and gas exploration and production company made up of a consortium of four companies; Niger Delta Petroleum Resources Limited (NDPR), Petrolin Trading Limited (PETROLIN), FIRST Exploration & Petroleum Development OML 34 Limited and Walter-Smith Exploration and Production Limited.'
        }
        reversed={false}
        buttonText={"Read More"}
      />

      <div className=" sm:mt-40 mt-12 sm:w-full min-h-screen flex items-center flex-col mb-24">
        <h2 className="text-[#41D958] text-center sm:text-5xl text-3xl font-bold">
          Core Values
        </h2>
        {generateCards()}
      </div>
    </div>
  );
}

export default AboutUs;
