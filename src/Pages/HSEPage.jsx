import React from "react";
import HeaderMain from "../Components/HeaderMain";
import MainCard from "../Components/MainCard";
import oilMan from "../images/asset2.jpg";
import pipes from "../images/pipes.jpg";
import house from "../images/house.jpg";
import covidRelief from "../images/covid-relief.png";
import walk4Alimb from "../images/walk4alimb.png";
import drilling from "../images/drilling.png";
import medal from "../images/medal.jpg";
import hse2 from "../images/hse2.png";
import LowerBanner from "../Components/LowerBanner";


function HSEPage() {
  return (
    <div className="">
      <HeaderMain
        title={
          "We are committed to the highest health, safety, security and environmental standards."
        }
        image={oilMan}
      />

      <MainCard
        title={"Our HSSE Philosophy"}
        mainImage={oilMan}
        paragraph={
          "At ND Western, we are committed to the highest health, safety, security and environmental standards in all ramifications. In line with this, we operate international HSSE best practices in our field and office locations and aspire to achieve zero adverse incidents and accidents./n We, therefore, recognize and accept our responsibility for the health, safety, security of our people and the environment in which we operate. We believe that adverse incidents and accidents are preventable so we take proactive steps in maintaining the highest reasonably practicable HSSE standards by deploying appropriate systems and processes, championing and advocating continuous training on HSSE best practices both on and off the field, providing ergonomically sound work stations, tools and equipment for all relevant stakeholders as well as developing policies and procedures that support a world class HSSE system."
        }
        reversed={false}
      />
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

export default HSEPage;
