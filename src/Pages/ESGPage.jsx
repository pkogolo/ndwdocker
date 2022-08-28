import React from "react";
import LowerBanner from "../Components/LowerBanner";
import SDGgrid from "../Components/SDGgrid";
import HeaderTwo from "../Components/HeaderTwo";
import TwoColGrid from "../Components/TwoColGrid";

function ESGPage() {
  const ESG1 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658606036/NDWESTERN-MEDIA/images/ESG/ESG1_cbcav9.jpg";
  const ESG2 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658606031/NDWESTERN-MEDIA/images/ESG/ESG2_torfj8.jpg";
  const ESG3 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658606114/NDWESTERN-MEDIA/images/ESG/ESG3_xezd6u.jpg";
  const ESG4 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658606033/NDWESTERN-MEDIA/images/ESG/ESG4_wkor2h.jpg";
  const ESG5 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658606031/NDWESTERN-MEDIA/images/ESG/ESG5_cf3uoy.jpg";

  const array = [
    {
      page: "Tracking Emmissions",
      link: "/about/ESG/approach_to_reducing_emmissions",
    },
    { page: "ESOHS", link: "/about/ESG/ESOHS" },
    {
      page: "HSE",
      link: "/about/HSE",
    },
    { page: "Our ESG Policy", link: "/about/ESG" },
    {
      page: "Our Code of Business Conduct",
      link: "/about/code_of_business_conduct",
    },
    { page: "CSR", link: "/about/csr" },
  ];

  return (
    <div className="">
      <HeaderTwo
        pageName={"ESG Policy"}
        pageText={
          "Our  ESG Framework is closely  aligned to United Nations Sustainable Development Goals (SDGs) Framework"
        }
        image={"https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658606057/NDWESTERN-MEDIA/images/smiles_elas26.jpg"}
      />

      <TwoColGrid
        title={"Overview"}
        mainImage={ESG3}
        paragraph={
          "As a modern, dynamic company operating in a rapidly evolving energy sector NDW recognizes the requirement to operate in a responsible way and to ensure that all our stakeholders are empowered to address environmental and social challenges."
        }
        reversed={false}
      />

      {/* <CSRGrid /> */}
      <TwoColGrid
        title={"Our ESG Framework"}
        mainImage={ESG5}
        paragraph={
          "ND Western’s ESG Framework is aligned to United Nations Sustainable Development Goals (SDGs) Framework. The UN SDGs was adopted by member states including Nigeria in 2015, as part of the global 2030 Agenda for Sustainable Development. "
        }
        reversed={true}
      />
      <TwoColGrid
        title={"ESG Stakeholders' Engagement "}
        mainImage={ESG4}
        reverse={true}
        paragraph={
          "At NDW, we believe that early engagement with key stakeholders, especially the communities local to our areas of operations, throughout the lifecycle of our projects is critical to the success of our business. In line with industry best practice, NDW plans to: /n - Manage our ‘social’ performance as part of our ESMS /n - Continue to conduct Environmental, Social and Health Impact Assessments (ESHIAs) when planning key projects /n - Continue to conduct Environmental Evaluation Studies (EES) for our brown fields /n"
        }
      />

      <div className="w-full flex flex-col items-center justify-center sm:my-24 my-6 px-4">
        <h1 className="mb-8 text-3xl text-[#65B32E]">
          The SDGs and their relationship with the Oil & Gas industry
        </h1>
        <p className="xl:w-1/2 lg:w-3/4 md:w-3/4 w-full">
          The UN SDGs have been widely adopted across the oil and gas industry.
          The oil and gas industry association IPIECA, has identified those
          SDG’s that have the largest impact in oil and gas operations and NDW
          aligns its ESG objectives with these SDGs, listed below:
        </p>
      </div>

      <SDGgrid />

      <div className="w-full flex items-center justify-center xl:my-24 lg:my-24 my-6 px-4">
        <p className="xl:w-1/2 lg:w-5/6 md:w-3/4 w-full">
          To ensure excellence in both environmental and social management, NDW
          plans to achieve social and environmental performance excellence by
          meeting International Finance Corporation Performance Standards (IFC
          PS) to ensure industry best practice is adopted. Also, NDW plans to
          enhance its reporting and disclosure to full TCFD reporting standards
          over the next 5 years. The Task Force on Climate-Related Financial
          Disclosures (TCFD) was created in 2015 by the Financial Stability
          Board to develop consistent climate-related financial risk disclosures
          for use by companies, banks, and investors in providing information to
          stakeholders
        </p>
      </div>
      <div className="">
        <LowerBanner linkArray={array} image={ESG1} />
      </div>
    </div>
  );
}

export default ESGPage;
