import React from "react";
import FormattedParagraph from "../Components/FormattedParagraph";
import HeaderMain from "../Components/HeaderMain";
import careers from "../images/careers.png";
import careersGroup from "../images/careersGroup.png";
import headband_lady from "../images/headband_lady.jpg";
import man_and_lady from "../images/manandlady.png";
import temi_main from "../images/temi_main.jpg";

function CareersPage() {
  return (
    <div>
      <HeaderMain
        pageName={"Careers at NDW"}
        title={
          "We do everything possible to create a positive work environment for our teams"
        }
        image={man_and_lady}
      />

      <div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 place-items-center lg:my-24 md:my-12 my-6">
          <div className="w-full sm:p-12 p-8 flex justify-center">
            <div
              className="bg-cover bg-no-repeat sm:w-[595px] sm:h-[521px] w-[295px] h-[221px]"
              style={{ backgroundImage: `url(${headband_lady})` }}
            ></div>
          </div>
          <div className="md:px-4  ">
            <FormattedParagraph
              paragraph={
                "At ND Western we employ a diverse group of people which means we offer an inclusive workplace, built around respect for individuals and the appreciation of diversity in all its forms. We believe that commitment to diversity, tolerance and equal opportunity is an investment in our employees, and also in our growth./n Furthermore, we do everything possible to create a positive work environment for our teams. Our approach is based on four principles: /n 1. We tell people what we expect of them from day one./n 2. We give them the tools they need to be successful on the job /n 3. We have created an informal culture that promotes inspiration & innovation /n 4. We value all people, praise efforts and reward high performance"
              }
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 place-items-center lg:my-24 md:my-12 my-6">
          <div className="lg:grid md:hidden hidden  lg:pl-12 md:pl-0 pl-0">
            <FormattedParagraph
              paragraph={
                "We understand the positive link between employee ability, motivation and company profitability therefore at ND Western, our employees take center stage./n At ND Western, we are always looking for bright minds that have a can do attitude. Therefore, if you are innovative, proactive, result-oriented and possess great interpersonal skills, then you just might be what we are looking for./n If you are interested in joining a winning team that plays hard and works hard, let's talk! Start by sending your resume to careers@ndwestern.com"
              }
            />
          </div>
          <div className="w-full sm:p-12 p-8 flex justify-center">
            <div
              className="bg-cover bg-no-repeat sm:w-[595px] sm:h-[521px] w-[295px] h-[221px]"
              style={{ backgroundImage: `url(${temi_main})` }}
            ></div>
          </div>
          <div className="md:grid lg:hidden grid">
            <FormattedParagraph
              paragraph={
                "We understand the positive link between employee ability, motivation and company profitability therefore at ND Western, our employees take center stage./n At ND Western, we are always looking for bright minds that have a can do attitude. Therefore, if you are innovative, proactive, result-oriented and possess great interpersonal skills, then you just might be what we are looking for./n If you are interested in joining a winning team that plays hard and works hard, let's talk! Start by sending your resume to careers@ndwestern.com"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareersPage;
