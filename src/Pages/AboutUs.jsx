import React from "react";
import HeaderTwo from "../Components/HeaderTwo";
import hseMan from "../images/HSE.png";
import MainCard from "../Components/MainCard";
import oilMan from "../images/Operations.jpg";
import ceo from "../images/ceo_main.jpg";
import staff from "../images/ABOUT/about3.jpg";
import paperBg from "../images/paper-background.jpg";
import hse2 from "../images/hse2.png";
import towers from "../images/towers.jpg";
import GreenCard from "../Components/GreenCard";
import smiles from "../images/smiles.jpg";
import maninsuit from "../images/maninsuit.jpg";
import saipec8 from "../images/saipec8.jpg";
import OurStory from "../Components/OurStory";
import TwoColGrid from "../Components/TwoColGrid";
import SmallCard from "../Components/SmallCard";
import LowerBanner from "../Components/LowerBanner";
import award from "../images/ESG/esg4.jpg";
import TextPopup from "../Components/TextPopup";

function AboutUs() {
  const array = [
    {
      page: "Life at ND Western",
      link: "/about/life_at_NDWestern",
    },
    { page: "Careers", link: "/careers" },
    {
      page: "Ethical Standards",
      link: "/about/code_of_business_conduct/ethical_standards",
    },
    {
      page: "Violation of Ethical Standards",
      link: "/about/code_of_business_conduct/violations_of_ethical_standards",
    },
    {
      page: "Our Code of Business Conduct",
      link: "/about/code_of_business_conduct",
    },
    { page: "CSR", link: "/about/csr" },
  ];
  const coreValuesData = [
    {
      title: "High Performance",
      paragraph:
        "We value all people, praise efforts, reward and recognize high performance through our best-in-class performance management strategy.",
    },
    {
      title: "Honesty and Integrity",
      paragraph:
        "We walk the talk at ND Western and do what we say we will do and ought to do, while ensuring fairness and equality of opportunities for all.",
    },
    {
      title: "Respect for the Individual",
      paragraph:
        "We believe respect is important in our dealings with all our employees at all levels. Therefore, we create a culture of zero tolerance to disrespect including harassment in all forms.",
    },
    {
      title: "Health and Safety",
      paragraph:
        "The health and safety of our employees is very important to us. As a result we have deeply entrenched in our culture health and safety awareness campaigns, provision of comprehensive medical cover as well as fun and creative initiatives to drive health and safety awareness both on and off the field.",
    },
    {
      title: "Team Work",
      paragraph:
        "As the saying goes, the 'whole is greater than the sum of its parts'. While we recognize individual ingenuity, we encourage and celebrate team work because we have seen it produce incredible results compared to individual output. Effective team work enhances and harmonizes contributions towards a common goal.",
    },
  ];

  function generateCards() {
    const cards = coreValuesData.map((item) => (
      <SmallCard title={item.title} paragraph={item.paragraph} />
    ));

    return cards;
  }

  return (
    <div className="pt-24 sm:pt-0">

      
      <HeaderTwo
        pageText={"We Are the World-class Energy Company of Choice in Africa."}
        pageName={"About Us"}
        image={staff}
      />

      <OurStory />
      <TwoColGrid
        title={"Our Vision"}
        mainImage={ceo}
        paragraph={
          "To be a world class Energy Company of choice in Africa, effectively and prudently producing oil and gas, and delivering value to its people and shareholders."
        }
        reversed={false}
      />
      <TwoColGrid
        title={"Our Mission"}
        mainImage={oilMan}
        paragraph={
          "To create shareholder value by providing clean energy through sustainable and strategic partnerships in communities we operate in, while adhering to international HSSE Standards and best practices, utilizing innovative technologies and running efficient, cost effective operations with a prepared and motivated work force."
        }
        reversed={true}
      />

      <div
        style={{
          backgroundImage: `url(${paperBg})`,
        }}
        className=" bg-cover  mt-6 pt-12 lg:w-full min-h-screen flex items-center flex-col "
      >
        <h2 className="text-[#65B32E] text-center xl:text-4xl lg:text-3xl  md:text-2xl xl:mb-12 lg:mb-12">
          Our Core Values
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 xl:p-24 lg:p-6">
          {generateCards()}
        </div>
      </div>
      <div className="">
        <LowerBanner linkArray={array} image={award} />
      </div>
    </div>
  );
}

export default AboutUs;
