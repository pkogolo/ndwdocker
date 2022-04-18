import React from "react";
import HeaderMain from "../Components/HeaderMain";
import MainCard from "../Components/MainCard";
import ebereOji from "../images/ebereoji.jpg";
import ha1 from "../images/hassests1.png";
import people1 from "../images/people1.jpg"

function HumanAssets() {
  return (
    <div>
      <HeaderMain
        title={
          "We are leading the way in sustainable oil exploration and production"
        }
        image={ebereOji}
      />

      <div className="mb-40">
        <MainCard
          showCircles={false}
          title={"Board of Directors"}
          mainImage={ha1}
          paragraph={
            "ND Western is being steered in an upward direction by a group of highly professional and competent individuals who have left lasting marks in their diverse fields of endeavors."
          }
          buttonText={"View all"}
          reversed={false}
        />
        <MainCard
          showCircles={false}
          reversed={true}
          title={"Management Team"}
          paragraph={
            "AT ND Western, we run a very lean organization as non-operator, regardless we have a skilled management team with over 70 man years of combined experience in the oil and gas industry. They have been involved in the oil and gas industry both at local and international levels and are committed to making ND Western a truly indigenous yet global company."
          }
          buttonText={"View all"}
          mainImage={ebereOji}
        />
        <MainCard
          showCircles={false}
          title={"Our People"}
          mainImage={ha1}
          paragraph={
            "	We have the right people with the right skills in the right roles, and we employ a variety of strategies to motivate and retain our workforce and our position as an employer of choice."
          }
          buttonText={"View all"}
          reversed={false}
        />
        <MainCard
          showCircles={false}
          reversed={true}
          title={"Life At NDW"}
          paragraph={
            "ND Western recognizes its human resource as its greatest assets and so the organization places a high premium on creating an employee friendly environment. We incorporate work-life balance with the aim of ensuring each person expresses their unique creativity and are giving the abest to the organization at all times."
          }
          buttonText={"View all"}
          mainImage={people1}
        />
      </div>
    </div>
  );
}

export default HumanAssets;