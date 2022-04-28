import React from "react";
import HeaderMain from "../Components/HeaderMain";
import MainCard from "../Components/MainCard";
import oilMan from "../images/asset2.jpg";
import pipes from "../images/pipes.jpg";
import house from "../images/house.jpg";
import bushhouse from "../images/bushhouse.png";
import covidRelief from "../images/covid-relief.png";
import walk4Alimb from "../images/walk4alimb.png";
import drilling from "../images/drilling.png";
import booth from "../images/booth.jpg";
import LowerBanner from "../Components/LowerBanner";
import manwithboy from "../images/manwithboy.png";
import ogunu from "../images/ogunu.png";
import givinggift from "../images/givinggift.png";
import governance from "../images/governance.png";
import CSRGrid from "../Components/CSRGrid";
import SDGgrid from "../Components/SDGgrid";
import GreenCard from "../Components/GreenCard";
import coo from "../images/coo.png";
import LargePageButtons from "../Components/LargePageButtons";
import nigerDelta from "../images/nigerDelta.png";
import towers from "../images/towers.jpg";
import ESGBottomLinks from "../Components/ESGBottomLinks";
import smiles from "../images/smiles.jpg";
import crowd from "../images/crowd.jpg";

function ESGPage() {
  return (
    <div className="">
      <HeaderMain
        pageName={"ESG Policy"}
        title={
          "Our  ESG Framework is closely  aligned to United Nations Sustainable Development Goals (SDGs) Framework"
        }
        image={smiles}
      />

      <MainCard
        title={"Overview"}
        mainImage={manwithboy}
        paragraph={
          "As a modern, dynamic company operating in a rapidly evolving energy sector NDW recognizes the requirement to operate in a responsible way and to ensure that all our stakeholders are empowered to address environmental and social challenges."
        }
        reversed={false}
      />

      <CSRGrid />
      <MainCard
        title={"Our ESG Framework"}
        mainImage={crowd}
        paragraph={
          "ND Western’s ESG Framework is aligned to United Nations Sustainable Development Goals (SDGs) Framework. The UN SDGs was adopted by member states including Nigeria in 2015, as part of the global 2030 Agenda for Sustainable Development. The SDGs address a number of global challenges, in the form of 17 goals aimed at creating a better future for people and the planet, some of which include:/n • eradicating hunger and poverty /n • strengthening environmental protection /n • achieving peace /n• widening access to education/n • encouraging responsible consumption"
        }
        reversed={true}
      />

      <div className="w-full flex items-center justify-center sm:my-24 my-6 px-4">
        <p className="sm:w-1/2 w-full">
          The UN SDGs have been widely adopted across the oil and gas industry.
          The oil and gas industry association IPIECA, has identified those
          SDG’s that have the largest impact in oil and gas operations and NDW
          aligns its ESG objectives with these SDGs, listed below:
        </p>
      </div>

      <SDGgrid />

      <div className="w-full flex items-center justify-center sm:my-24 my-6 px-4">
        <p className="sm:w-1/2 w-full">
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

      <div className="w-full flex items-center justify-center">
        <GreenCard
          mainImage={coo}
          reverse={true}
          paragraph={
            "At NDW, we believe that early engagement with key stakeholders, especially the communities local to our areas of operations, throughout the lifecycle of our projects is critical to the success of our business. In line with industry best practice, NDW plans to: /n • Manage our ‘social’ performance as part of our ESMS /n • Continue to conduct Environmental, Social and Health Impact Assessments (ESHIAs) when planning key projects /n • Continue to conduct Environmental Evaluation Studies (EES) for our brown fields /n• Invest in early and continuous stakeholder engagement /n • Conduct Human Rights Due Diligence./n • Conduct a Human Rights Impact Assessment on any areas of concern identified in our operations, such as, where Private Security Companies (PSCs) are used. /n • Ensure continuous business and social performance improvement, via feedback and action from our grievance mechanisms, both internal and external. "
          }
        />
      </div>

      <ESGBottomLinks />
      <div className="">
        <LowerBanner
          text={
            "We pride ourselves in our sustainable practices geared at protecting the environment "
          }
          image={
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          }
        />
      </div>
    </div>
  );
}

export default ESGPage;
