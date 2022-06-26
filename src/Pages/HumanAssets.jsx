import React from "react";
import HeaderMain from "../Components/HeaderMain";
import MainCard from "../Components/MainCard";
import ebereOji from "../images/ebereoji.jpg";
import titi from "../images/management/titi.jpg";
import HeaderTwo from "../Components/HeaderTwo";
import ProfileCarousel from "../Components/ProfileCarousel";
import { BODdata } from "../Components/ProfileData";
import { ExecManData } from "../Components/ProfileData";
import { mgmtTeamData } from "../Components/ProfileData";
import LowerBanner from "../Components/LowerBanner";
import landw1 from "../images/LIFEATNDW/landw1.jpg";
import landw2 from "../images/LIFEATNDW/landw2.jpg";
import landw3 from "../images/LIFEATNDW/landw3.jpg";
import landw4 from "../images/LIFEATNDW/landw4.jpg";
import landw5 from "../images/LIFEATNDW/landw5.jpg";
import landw6 from "../images/LIFEATNDW/landw6.jpg";

function HumanAssets() {
  const slideImages = [titi, ebereOji, landw1, landw2, landw3, landw4, landw6];
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
  return (
    <div>
      <HeaderTwo
        pageName={"Human Assets"}
        pageText={
          "ND Western is being steered in an upward direction by a group of highly professional and competent individuals."
        }
        image={ebereOji}
      />
    
      <div className="mb-40">
        <ProfileCarousel heading={"The Board of Directors"} data={BODdata} />
        <ProfileCarousel
          heading={"The Executive Management Team"}
          data={ExecManData}
          shade={true}
        />
        <ProfileCarousel
          heading={"The  Management Team"}
          data={mgmtTeamData}
          shade={false}
        />
      </div>

      {/* <MainCard
          showCircles={false}
          title={"Board of Directors"}
          mainImage={chairman2}
          paragraph={
            "ND Western is being steered in an upward direction by a group of highly professional and competent individuals who have left lasting marks in their diverse fields of endeavors."
          }
          buttonText={"View all"}
          buttonLinks={"/about/human_assets/board_of_directors"}
          reversed={false}
        /> */}
      {/* <MainCard
        showCircles={false}
        reversed={true}
        title={"Executive Management Team"}
        paragraph={
          "AT ND Western, we run a very lean organization as non-operator, regardless we have a skilled management team with over 70 man years of combined experience in the oil and gas industry. They have been involved in the oil and gas industry both at local and international levels and are committed to making ND Western a truly indigenous yet global company."
        }
        buttonText={"View all"}
        buttonLinks={"/about/human_assets/management_team"}
        mainImage={ebereOji}
      /> */}
      {/* <MainCard
        showCircles={false}
        title={"Management Team"}
        mainImage={temi}
        paragraph={
          "	We have the right people with the right skills in the right roles, and we employ a variety of strategies to motivate and retain our workforce and our position as an employer of choice."
        }
        buttonText={"View all"}
        buttonLinks={"/about/human_assets/our_people"}
        reversed={false}
      /> */}
      {/* <MainCard
        showCircles={false}
        reversed={true}
        title={"Life At NDW"}
        paragraph={
          "ND Western recognizes its human resource as its greatest assets and so the organization places a high premium on creating an employee friendly environment. We incorporate work-life balance with the aim of ensuring each person expresses their unique creativity and are giving the abest to the organization at all times."
        }
        buttonText={"View all"}
        mainImage={life_at_ndw}
      /> */}

      <div className="">
        <LowerBanner linkArray={array} image={titi} data={slideImages} />
      </div>
    </div>
  );
}

export default HumanAssets;
