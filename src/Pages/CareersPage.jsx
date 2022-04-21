import React from "react";
import FormattedParagraph from "../Components/FormattedParagraph";
import HeaderMain from "../Components/HeaderMain";
import careers from "../images/careers.png";
import careersGroup from "../images/careersGroup.png";

function CareersPage() {
  return (
    <div>
      <HeaderMain
        title={
          "We do everything possible to create a positive work environment for our teams"
        }
        image={careers}
      />

      <div>
        <div className="grid sm:grid-cols-2 grid place-items-center sm:my-24 my-6">
          <div className="w-full sm:p-12 p-8">
            <div
              className="bg-cover bg-no-repeat sm:w-[595px] sm:h-[521px] w-[295px] h-[221px]"
              style={{ backgroundImage: `url(${careersGroup})` }}
            ></div>
          </div>
          <div>
            <FormattedParagraph
              paragraph={
                "At ND Western we employ a diverse group of people which means we offer an inclusive workplace, built around respect for individuals and the appreciation of diversity in all its forms. We believe that commitment to diversity, tolerance and equal opportunity is an investment in our employees, and also in our growth./n Furthermore, we do everything possible to create a positive work environment for our teams. Our approach is based on four principles: /n 1. We tell people what we expect of them from day one./n 2. We give them the tools they need to be successful on the job /n 3. We have created an informal culture that promotes inspiration & innovation /n 4. We value all people, praise efforts and reward high performance"
              }
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 place-items-center sm:my-24 my-6">
          <div className="w-full sm:p-12 p-8 sm:hidden grid">
            <div
              className="bg-cover bg-no-repeat sm:w-[595px] sm:h-[521px] w-[295px] h-[221px]"
              style={{ backgroundImage: `url(${careersGroup})` }}
            ></div>
          </div>
          <div>
            <FormattedParagraph
              paragraph={
                "At ND Western we employ a diverse group of people which means we offer an inclusive workplace, built around respect for individuals and the appreciation of diversity in all its forms. We believe that commitment to diversity, tolerance and equal opportunity is an investment in our employees, and also in our growth./n Furthermore, we do everything possible to create a positive work environment for our teams. Our approach is based on four principles: /n 1. We tell people what we expect of them from day one./n 2. We give them the tools they need to be successful on the job /n 3. We have created an informal culture that promotes inspiration & innovation /n 4. We value all people, praise efforts and reward high performance"
              }
            />
          </div>
          <div className="w-full sm:p-12 sm:grid hidden">
            <div
              className="bg-cover bg-no-repeat sm:w-[595px] sm:h-[521px] w-[295px] h-[221px]"
              style={{ backgroundImage: `url(${careersGroup})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareersPage;
