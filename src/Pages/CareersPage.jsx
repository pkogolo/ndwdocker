import React from "react";
import FormattedParagraph from "../Components/FormattedParagraph";
import HeaderTwo from "../Components/HeaderTwo";
import careers1 from "../images/CAREERS/careers1.jpg";
import careers2 from "../images/CAREERS/careers2.jpg";
import careers3 from "../images/CAREERS/careers3.jpg";
import careers4 from "../images/CAREERS/careers4.jpg";
import TwoColGrid from "../Components/TwoColGrid";
import LowerBanner from "../Components/LowerBanner";

function CareersPage() {
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
      link: "/about/life_at_NDWestern",
    },
    { page: "Our People", link: "/people" },
  ];
  return (
    <div>
      <HeaderTwo
        pageName={"Careers at NDW"}
        pageText={
          "We do everything possible to create a positive work environment for our teams"
        }
        image={careers1}
      />

      <div className="flex items-center flex-col justify-center w-full">
        <TwoColGrid
          showCircles={false}
          title={"We are on the lookout for exceptional talents!"}
          mainImage={careers3}
          paragraph={
            "At ND Western we employ a diverse group of people which means we offer an inclusive workplace, built around respect for individuals and the appreciation of diversity in all its forms. We believe that commitment to diversity, tolerance and equal opportunity is an investment in our employees, and also in our growth./n Furthermore, we do everything possible to create a positive work environment for our teams. Our approach is based on four principles: /n 1. We tell people what we expect of them from day one./n 2. We give them the tools they need to be successful on the job /n 3. We have created an informal culture that promotes inspiration & innovation /n 4. We value all people, praise efforts and reward high performance"
          }
          reversed={false}
        />
        <TwoColGrid
          showCircles={false}
          title={"We are searching for you!"}
          mainImage={careers2}
          paragraph={
            "We understand the positive link between employee ability, motivation and company profitability therefore at ND Western, our employees take center stage./n At ND Western, we are always looking for bright minds that have a can do attitude. Therefore, if you are innovative, proactive, result-oriented and possess great interpersonal skills, then you just might be what we are looking for./n If you are interested in joining a winning team that plays hard and works hard, let's talk! Start by sending your resume to careers@ndwestern.com"
          }
          reversed={true}
        />
      </div>
      <div className="">
        <LowerBanner linkArray={array} image={careers4} />
      </div>
    </div>
  );
}

export default CareersPage;
