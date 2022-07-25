import React from "react";
import LowerBanner from "../Components/LowerBanner";
import HeaderTwo from "../Components/HeaderTwo";
import TwoColGrid from "../Components/TwoColGrid";
import PhotoGalleryComponent from "../Components/PhotoGalleryComponent";
import { libraryData } from "../Components/CommunitiesData";
import { mocData } from "../Components/CommunitiesData";
import { scholarshipData } from "../Components/CommunitiesData";
import { skillsAqData } from "../Components/CommunitiesData";
import { deltaData } from "../Components/CommunitiesData";
import { outreachData } from "../Components/CommunitiesData";

function CSRPage() {
  const skillsAq1 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605885/NDWESTERN-MEDIA/images/communities/Skills/skillsAq1_gjorlj.jpg";
  const skillsAq3 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605884/NDWESTERN-MEDIA/images/communities/Skills/skillsAq2_xtljgd.jpg";
  const hse = "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605901/NDWESTERN-MEDIA/images/HSE/hse1_w7qthl.jpg";
  const delta7 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605884/NDWESTERN-MEDIA/images/communities/Skills/skillsAq3_abmjkm.jpg";
    const sportsImage = "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605963/NDWESTERN-MEDIA/images/sports_qmvzad.jpg";
const boyRunning = "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658606034/NDWESTERN-MEDIA/images/boy-running_xlrsm1.jpg";

  const array = [
    {
      page: "Contact us",
      link: "/contact",
    },
    {
      page: "About Us",
      link: "/about",
    },
    {
      page: "Our HSE Policy",
      link: "/about/HSE",
    },
    { page: "Human Assets", link: "/about/human_assets" },
    {
      page: "NDW in the News",
      link: "/NDW_in_the_News",
    },
    {
      page: "Code of Business Conduct",
      link: "/about/code_of_business_conduct",
    },
  ];
  return (
    <div>
      <HeaderTwo
        pageName={"Our Communities"}
        pageText={
          "We are committed to the utmost integrity in all dealings with our stakeholders"
        }
        image={sportsImage}
      />

      <TwoColGrid
        title={"Our Philosophy"}
        mainImage={boyRunning}
        paragraph={
          "At ND Western, corporate social responsibility is a necessity. Our philosophy is to be a socially responsible organization that appraises the communities and environment in which we operate to identify and work in conjunction with relevant stakeholders to eliminate barriers to Social, Economic and Environmental development."
        }
        reversed={false}
      />
      <TwoColGrid
        title={"Our Economic Responsibility"}
        mainImage={skillsAq1}
        paragraph={
          "We are fully committed to the local content initiative. We aim to use local contractors and 3rd party vendors in order to promote the growth of small to medium sized companies for economic progress and development."
        }
        reversed={true}
      />
      <TwoColGrid
        title={"Our Social Responsibility"}
        mainImage={skillsAq3}
        paragraph={
          "We support the development of local human capital through internships, scholarships and train-the-trainer schemes needed for the growth and sustainability of the oil and gas industry."
        }
        reversed={false}
      />
      <TwoColGrid
        title={"Our Environmental Responsibility"}
        mainImage={hse}
        paragraph={
          "We implement and adhere to the highest HSSE Standards, and adopt precautionary approaches to prevent adverse impacts on our people and environment in the course of our operations."
        }
        reversed={true}
      />
      <div className="my-12">
        <h1 className="text-center text-2xl text-[#65B32E]">
          Our Community Development Engagements
        </h1>
      </div>
      <PhotoGalleryComponent
        imageArray={libraryData}
        header={
          "Commissioning of the Prof. Mosobalaje Oyawoye E-Library Complex at University of Ibadan"
        }
      />

      <PhotoGalleryComponent
        imageArray={mocData}
        header={"The Making of Champions Sporting Event"}
      />
      <PhotoGalleryComponent
        imageArray={scholarshipData}
        header={"NPDC and ND Western Scholarship Awards"}
      />
      <PhotoGalleryComponent
        imageArray={skillsAqData}
        header={"ND Western Skills Acquisition Programme"}
      />
      <PhotoGalleryComponent
        imageArray={deltaData}
        header={"The Commissioning of Delta Plus Diagnostics"}
      />
      <PhotoGalleryComponent
        imageArray={outreachData}
        header={"NPDC and ND Western Medical Outreach Warri"}
      />

      <div className="">
        <LowerBanner linkArray={array} image={delta7} />
      </div>
    </div>
  );
}

export default CSRPage;
