import React from "react";
import MainCard from "../Components/MainCard";

import LowerBanner from "../Components/LowerBanner";
import sunday from "../images/sunday.jpg";
import environmenttowers from "../images/environmenttowers.png";
import hse2 from "../images/hse2.png";
import SecondaryHeader from "../Components/SecondaryHeader";

import image1 from "../images/ASSETS/asset19.jpg";
import image2 from "../images/ASSETS/asset33.jpg";
import image3 from "../images/ASSETS/asset16.jpg";
import image5 from "../images/ASSETS/asset15.jpg";
import image4 from "../images/ASSETS/asset14.jpg";
import image6 from "../images/ASSETS/asset3.jpg";
import image7 from "../images/ASSETS/asset27.jpg";
import image8 from "../images/ASSETS/asset9.jpg";
import image9 from "../images/ASSETS/asset17.jpg";
import image10 from "../images/ASSETS/asset36.jpg";
import TwoColGrid from "../Components/TwoColGrid";

function ESOHS() {
  const array = [
    {
      page: "Tracking Emmissions",
      link: "/about/ESG/approach_to_reducing_emmissions",
    },
    { page: "HSE", link: "/about/HSE" },
    {
      page: "Non Oil and Gas Assets",
      link: "/operations/non_oil_and_gas_assets",
    },
    {
      page: "Production",
      link: "/operations/production",
    },
    { page: "Exploration", link: "/operations/exploration" },
    {
      page: "ESG",
      link: "/about/ESG",
    },
  ];
  return (
    <div>
      <SecondaryHeader
        imageArray={[image1, image2, image3, image4]}
        heading={
          "Environmental, Social, and Occupational Health and Safety Management Framework "
        }
        greenHeader={true}
      />

      <div className="flex items-center flex-col justify-center pb-12">
        <TwoColGrid
          showCircles={false}
          title={"Overview of our ESOHS MS"}
          mainImage={image10}
          paragraph={
            "ND Western’s Environmental, Social and Occupational Health and Safety Management Systems (ESOHS MS) provide the framework for Environmental and Social systems management in our operations. It is formed of several specific policies and describes how each policy is implemented and sustained throughout the organization. "
          }
          reversed={false}
        />
        <TwoColGrid
          showCircles={false}
          title={"Purpose of our ESOHS MS"}
          mainImage={image6}
          paragraph={
            "This ESOHS MS was developed to provide guidance for the management of occupational health and safety risk, to minimize environmental risk and impacts, to meet local and national legal requirements and to improve business performance at NDW locations. It has recently been updated to include NDW social impacts and activities. Our Social policies were developed after a gap analysis and to meet the updated World Bank requirements on environmental and social issues. This management system has been developed based on the international framework for Environmental Management Systems (ISO 14001:2015), Health and Safety Management System (ISO 45001:2018) and the World Bank environmental and social framework."
          }
          reversed={true}
        />
        <TwoColGrid
          showCircles={false}
          title={"Our Environmental and Social Policy "}
          mainImage={image5}
          paragraph={
            "NDW Environmental and Social Policy is to protect the environment, utilize, and manage our natural resources to prevent pollution, fulfil our compliance obligations and to continually maintain the quality of the air we breathe, the water we drink, the earth we inhabit, and respect our host communities and other stakeholders"
          }
          reversed={false}
        />
        <TwoColGrid
          showCircles={false}
          title={"Policy Scope"}
          mainImage={image9}
          paragraph={
            "To protect the environment./n • Improve facilities integrity to minimize pollution and waste./n • Incorporate environmental and social management into all future developments. /n  • Create a safe work environment./n • Ensure hazard control in all operations which personnel, contractors and the general public may be exposed to./n • Promote safety awareness amongst employees and all other stakeholders. • Meet regulatory requirements./n • Determine the external and internal issues that relate to its purpose./n  • Focus on understanding the needs and expectations of interested parties./n • Provide value for the environment, the organization itself and interested parties./n • Establish and maintain a good community relations mechanism./n • Enhancement of environmental performance./n • Fulfil all compliance obligations./n • Achieve all environmental objectives."
          }
          reversed={true}
        />
        <TwoColGrid
          showCircles={false}
          title={"Policy Objectives"}
          mainImage={image7}
          paragraph={
            "ND Western is committed to satisfying all stakeholders with excellence in environmental performance that complies consistently with current legislations and regulations to ensure: /n • Facilities and plants incorporate efficient waste and pollution control techniques /n • Environmental standards are incorporated in all developmental projects and other operations /n • Continuous improvement in environmental performance to reduce the impact from our operations /n • The environmental risks to the host communities in which we operate are minimized"
          }
          reversed={false}
        />
        {/* <TwoColGrid
          showCircles={false}
          title={"Purpose"}
          mainImage={champion}
          paragraph={
            "The purpose of the NDW ESOHS MS is to ensure product and service quality continue to meet the  highest standards demanded by the organization and expected by its customers and to also  ensure the organization’s processes and services are carried out in an environmentally  responsible, protective, and safe manner, as well as maintaining good relationships with host communities."
          }
          reversed={false}
        /> */}
      </div>

      <div className="">
        <LowerBanner linkArray={array} image={image8} />
      </div>
    </div>
  );
}

export default ESOHS;
