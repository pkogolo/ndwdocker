import React from "react";
import LowerBanner from "../Components/LowerBanner";
import SecondaryHeader from "../Components/SecondaryHeader";

import TwoColGrid from "../Components/TwoColGrid";

function ESOHS() {
  const image1 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658606043/NDWESTERN-MEDIA/images/ASSETS/asset19_pjfhzf.jpg";
  const image2 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658606043/NDWESTERN-MEDIA/images/ASSETS/asset33_gxfpbb.jpg";
  const image3 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658606048/NDWESTERN-MEDIA/images/ASSETS/asset16_yy0jax.jpg";
  const image5 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658606048/NDWESTERN-MEDIA/images/ASSETS/asset15_vx3iki.jpg";
  const image4 =
    ".https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658606049/NDWESTERN-MEDIA/images/ASSETS/asset14_aw2hvf.jpg";
  const image6 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658606050/NDWESTERN-MEDIA/images/ASSETS/asset3_ejgjng.jpg";
  const image7 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658606044/NDWESTERN-MEDIA/images/ASSETS/asset27_zsjx3j.jpg";
  const image8 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658606044/NDWESTERN-MEDIA/images/ASSETS/asset9_jpgdlj.jpg";
  const image9 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658606057/NDWESTERN-MEDIA/images/ASSETS/asset17_rvfxpn.jpg";
  const image10 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658606046/NDWESTERN-MEDIA/images/ASSETS/asset36_spehmt.jpg";

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
