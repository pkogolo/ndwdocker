import React from "react";
import coo from "../images/coo.jpg";
import MainCard from "../Components/MainCard";
import HeaderMain from "../Components/HeaderMain";
import sunday from "../images/sunday.jpg";
import FormattedParagraph from "../Components/FormattedParagraph";
import LargePageButtons from "../Components/LargePageButtons";
import groupengineers from "../images/groupengineers.jpg";
import nog from "../images/nog.jpg";
import LowerBanner from "../Components/LowerBanner";
import image1 from "../images/management/mrFalade.jpg";
import image2 from "../images/management/davidHarris.jpg";
import image3 from "../images/management/jamesOkoro2.jpg";
import TwoColGrid from "../Components/TwoColGrid";
import HeaderTwo from "../Components/HeaderTwo";


function CodeofBusiness() {
  const array = [
    {
      page: "About ND Western",
      link: "/about/",
    },
    { page: "Operations", link: "/operations" },
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
        pageText={
          "We are committed to the utmost integrity in all dealings with our stakeholders"
        }
        pageName={"Our Code of Business Conduct"}
        image={image1}
      />

      <TwoColGrid
        title={"Overview"}
        mainImage={image2}
        paragraph={
          "At ND Western Limited ('ND Western' or the 'Company') we are committed to the utmost integrity in all dealings with our external and internal stakeholders. The Company will strive to uphold the highest levels of business ethics and personal integrity in all types of transactions and interactions./n This Code of Business Conduct and Ethics covers a wide range of business practices and applies to all directors, officers and employees of the Company, collectively referred to herein as the 'Obliged Persons.' It is also expected that all suppliers, contractors, agents and consultants of ND Western will abide by the principles of this Code, and the Company will not hesitate to sever ties with any of such persons that is found to have violated the tenets of the Code."
        }
        reversed={false}
      />

      <div className="mt-24">
        <h2 className="text-4xl text-center text-[#65B32E]">
          Purpose of this Code
        </h2>
      </div>

      <div className="flex flex-col items-center my-24">
        <div className="w-full flex items-center justify-center">
          <p className="sm:w-3/4 w-5/6">
            The purpose of this Code is to guide the Obliged Persons in conduct
            that is fair, ethical, honest and lawful. The Code serves to:
          </p>
        </div>
        <FormattedParagraph
          title={
            "Emphasise ND Western's commitment to ethics and compliance with the law;"
          }
          number={1}
        />
        <FormattedParagraph
          title={"Set forth basic standards of ethical and legal behavior;"}
          number={2}
        />
        <FormattedParagraph
          title={
            "Provide reporting mechanisms for known or suspected ethical or legal violations; and"
          }
          number={3}
        />
        <FormattedParagraph
          title={"Help prevent and detect wrongdoing."}
          number={4}
        />
        <div className="w-3/4 mt-6">
          <p className="">
            Given the diversity and convolution of ethical questions that may
            arise in the course of the Company's dealings, this Code serves only
            as a rough guide. Faced with situations that are ethically abstruse
            or uncertain, Obliged Persons should first ask themselves the
            following questions:
          </p>

          <ul className="my-8 sm:px-20 px-4">
            <li className="mt-4 list-disc">Is it legal?</li>
            <li className="mt-4 list-disc">Is it the right thing to do?</li>
            <li className="mt-4 list-disc">
              Would I be able to hold my head high amongst my family, friends
              and colleagues if my actions were made public by an informed and
              unbiased member of the press?
            </li>
          </ul>
          <p>
            If further in doubt regarding the appropriateness of any intended
            course of action, advice should be sought from your supervisor or
            the Legal Department to ensure that all actions taken on behalf of
            the Company honor our commitment to the highest levels of business
            ethics.
          </p>
        </div>
      </div>
      <div className="">
        <LowerBanner linkArray={array} image={image3} />
      </div>
    </div>
  );
}

export default CodeofBusiness;
