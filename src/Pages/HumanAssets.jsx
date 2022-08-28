import React from "react";
import HeaderTwo from "../Components/HeaderTwo";
import ProfileCarousel from "../Components/ProfileCarousel";
import { BODdata } from "../Components/ProfileData";
import { ExecManData } from "../Components/ProfileData";
import { mgmtTeamData } from "../Components/ProfileData";
import LowerBanner from "../Components/LowerBanner";

function HumanAssets() {
  const ebereOji =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658606040/NDWESTERN-MEDIA/images/ebereoji_n9dpch.jpg";
  const titi =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658605891/NDWESTERN-MEDIA/images/management/titi_ovwmwg.jpg";

  const landw1 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658605970/NDWESTERN-MEDIA/images/LIFEATNDW/landw1_eddoqa.jpg";
  const landw2 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658605897/NDWESTERN-MEDIA/images/LIFEATNDW/landw2_jlu6nl.jpg";
  const landw3 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658605942/NDWESTERN-MEDIA/images/LIFEATNDW/landw3_jgpwzv.jpg";
  const landw4 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658605955/NDWESTERN-MEDIA/images/LIFEATNDW/landw4_qykfq7.jpg";
  const landw6 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658605986/NDWESTERN-MEDIA/images/LIFEATNDW/landw6_g87lnf.jpg";

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
