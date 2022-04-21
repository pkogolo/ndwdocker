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
import medal from "../images/medal.jpg";
import hse2 from "../images/hse2.png";
import LowerBanner from "../Components/LowerBanner";
import manwithboy from "../images/manwithboy.png"

function ESGPage() {
  return (
    <div className="">
      <HeaderMain
        pageName={"ESG Policy"}
        title={
          "Our  ESG Framework is closely  aligned to United Nations Sustainable Development Goals (SDGs) Framework"
        }
        image={bushhouse}
      />

      <MainCard
        title={"Overview"}
        mainImage={manwithboy}
        paragraph={
          "As a modern, dynamic company operating in a rapidly evolving energy sector NDW recognizes the requirement to operate in a responsible way and to ensure that all our stakeholders are empowered to address environmental and social challenges."
        }
        reversed={false}
      />


      <div className="grid grid-cols-4">

        
      </div>
      <MainCard
        title={"HSSE Principles"}
        mainImage={hse2}
        paragraph={
          "At ND Western, we: /n Operate to the highest HSSE standards/n Conduct active Health, safety and environment awareness campaigns for our staff and for people in communities in which we operate. /n Empower our staff to stop work on any project if they ever feel unsafe and to continue to report all health and safety breaches. /n Build partnership and participate in industry initiatives in reducing negative environmental impact on communities in which we operate out of i.e. oil spillage into rivers, oceans etc."
        }
        reversed={true}
      />

      <div className="">
        <LowerBanner
          text={
            "We pride ourselves in our sustainable practices geared at protecting the environment "
          }
          image={house}
        />
      </div>
    </div>
  );
}

export default ESGPage;
