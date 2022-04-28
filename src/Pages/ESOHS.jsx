import React from "react";
import MainCard from "../Components/MainCard";
import temitopeLong from "../images/temitope-rectangle.png";
import LowerBanner from "../Components/LowerBanner";
import sunday from "../images/sunday.jpg";
import environmenttowers from "../images/environmenttowers.png";
import hse2 from "../images/hse2.png";
import SecondaryHeader from "../Components/SecondaryHeader";
import LargePageButtons from "../Components/LargePageButtons";
import pipes from "../images/pipes.jpg";
import house from "../images/house.jpg";
import nigerDelta from "../images/nigerDelta.png";
import maninsuit from "../images/maninsuit.jpg";
import smiles from "../images/smiles.jpg";
import booth from "../images/booth.jpg";
import towers from "../images/towers.jpg"
import isaandothers from "../images/isaandothers.jpg"
import champion from "../images/champion.jpg"
import ugheliEast from "../images/ughelieast.png"

function ESOHS() {
  return (
    <div>
      <SecondaryHeader
        image={smiles}
        heading={
          "Environmental, Social, and Occupational Health and Safety Management Framework "
        }
        greenHeader={true}
      />

      <div className="flex items-center flex-col justify-center">
        <MainCard
          showCircles={false}
          title={"Overview of our ESOHS MS"}
          mainImage={maninsuit}
          paragraph={
            "ND Western’s Environmental, Social and Occupational Health and Safety Management Systems (ESOHS MS) provide the framework for Environmental and Social systems management in our operations. It is formed of several specific policies and describes how each policy is implemented and sustained throughout the organization. "
          }
          reversed={false}
        />
        <MainCard
          showCircles={false}
          title={"Purpose"}
          mainImage={booth}
          paragraph={
            "This ESOHS MS was developed to provide guidance for the management of occupational health and safety risk, to minimize environmental risk and impacts, to meet local and national legal requirements and to improve business performance at NDW locations. It has recently been updated to include NDW social impacts and activities. Our Social policies were developed after a gap analysis and to meet the updated World Bank requirements on environmental and social issues. This management system has been developed based on the international framework for Environmental Management Systems (ISO 14001:2015), Health and Safety Management System (ISO 45001:2018) and the World Bank environmental and social framework."
          }
          reversed={true}
        />
        <MainCard
          showCircles={false}
          title={"Environmental and Social Policy "}
          mainImage={towers}
          paragraph={
            "NDW Environmental and Social Policy is to protect the environment, utilize, and manage our natural resources to prevent pollution, fulfil our compliance obligations and to continually maintain the quality of the air we breathe, the water we drink, the earth we inhabit, and respect our host communities and other stakeholders"
          }
          reversed={true}
        />
        <MainCard
          showCircles={false}
          title={"Policy Objectives"}
          mainImage={isaandothers}
          paragraph={
            "ND Western is committed to satisfying all stakeholders with excellence in environmental performance that complies consistently with current legislations and regulations to ensure: /n • Facilities and plants incorporate efficient waste and pollution control techniques /n • Environmental standards are incorporated in all developmental projects and other operations /n • Continuous improvement in environmental performance to reduce the impact from our operations /n • The environmental risks to the host communities in which we operate are minimized"
          }
          reversed={false}
        />
        <MainCard
          showCircles={false}
          title={"Purpose"}
          mainImage={champion}
          paragraph={
            "The purpose of the NDW ESOHS MS is to ensure product and service quality continue to meet the  highest standards demanded by the organization and expected by its customers and to also  ensure the organization’s processes and services are carried out in an environmentally  responsible, protective, and safe manner, as well as maintaining good relationships with host communities."
          }
          reversed={true}
        />
        <MainCard
          showCircles={false}
          title={"Scope"}
          mainImage={ugheliEast}
          paragraph={
            "To protect the environment./n • Improve facilities integrity to minimize pollution and waste./n • Incorporate environmental and social management into all future developments. /n  • Create a safe work environment./n • Ensure hazard control in all operations which personnel, contractors and the general public may be exposed to./n • Promote safety awareness amongst employees and all other stakeholders. • Meet regulatory requirements./n • Determine the external and internal issues that relate to its purpose./n  • Focus on understanding the needs and expectations of interested parties./n • Provide value for the environment, the organization itself and interested parties./n • Establish and maintain a good community relations mechanism./n • Enhancement of environmental performance./n • Fulfil all compliance obligations./n • Achieve all environmental objectives."
          }
          reversed={false}
        />
      </div>

      <div className="w-full flex items-center justify-center mt-40 ">
        <h2 className="w-3/4 text-green text-3xl">Other Links</h2>
      </div>
      <div className="flex justify-center my-24">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 place-items-center px-40">
          <LargePageButtons text={"ESG Overview"} image={pipes} />
          <LargePageButtons text={"ESOHS MS Framework"} image={house} />
          <LargePageButtons
            text={"Reducing Scope 1 and 2 Emmissions"}
            image={towers}
          />
          <LargePageButtons text={""} image={nigerDelta} arrow={true} />
        </div>
      </div>
      <div className="">
        <LowerBanner
          text={
            "We pride ourselves in our sustainable practices geared at protecting the environment "
          }
          image={sunday}
        />
      </div>
    </div>
  );
}

export default ESOHS;
