import React from "react";

import LowerBanner from "../Components/LowerBanner";
import TwoColGrid from "../Components/TwoColGrid";
import HeaderTwo from "../Components/HeaderTwo";
import LegalParagraph from "../Components/LegalParagraph";
import CarouselComponent from "../Components/CarouselComponent";
import SwipeLeftComp from "../Components/SwipeLeftComp";

function HSEPage() {
  const HSE1 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658605901/NDWESTERN-MEDIA/images/HSE/hse1_w7qthl.jpg";
  const HSE2 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658605904/NDWESTERN-MEDIA/images/HSE/hse2_astshi.jpg";
  const HSE3 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658605901/NDWESTERN-MEDIA/images/HSE/hse3_ejvte4.jpg";
  const HSE4 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658605897/NDWESTERN-MEDIA/images/HSE/hse4_zwu392.jpg";
  const HSE5 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605893/NDWESTERN-MEDIA/images/HSE/hse5_ughx77.jpg";
  const HSE7 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_50/v1658605894/NDWESTERN-MEDIA/images/HSE/hse7_v74o3k.jpg";

  const pictureArray = [HSE1, HSE2, HSE3, HSE5,];

  const array = [
    { page: "Operations", link: "/operations" },
    { page: "Human Assets", link: "/about/human_assets" },
    {
      page: "Board of Directors",
      link: "/about/human_assets",
    },
    { page: "Our ESG Policy", link: "/about/ESG" },
    { page: "Our Assets", link: "/operations/oil_and_gas_assets" },
    { page: "Exploration", link: "/operations/exploration" },
  ];

  return (
    <div className="">
      <HeaderTwo
        pageName={"HSE"}
        pageText={
          "We are committed to the highest health, safety, security and environmental standards."
        }
        image={HSE5}
      />

      <TwoColGrid
        title={"Our HSSE Policy"}
        mainImage={HSE4}
        paragraph={
          "ND Western is committed to providing a healthy and safe work environment for its workers and preventing occupational illness and injury. To express that commitment, we hereby issue the following policy on occupational health and safety./n"
        }
        reversed={false}
      />
      <div className="grid lg:grid-cols-12 grid-cols-1 md:grid-cols-12 pl-6 lg:mt-40 md:mt-24 mt-12">
        <div className="lg:col-span-4 md:col-span-2 m-auto  ">
          <SwipeLeftComp />
        </div>

        <div className="lg:col-span-8 md:col-span-10 col-span-12">
          <CarouselComponent array={pictureArray} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <LegalParagraph
          title={"Components of our HSSE Policy:"}
          paragraph={
            "As the employer, ND Western is responsible for the health and safety of its workers."
          }
        />
        <LegalParagraph
          paragraph={
            "ND Western shall take adequate steps to identify major risks in our operations and eliminate or mitigate the reasonably foreseeable risks to as low as reasonably practicable in compliance with applicable legislation and best practices."
          }
        />
        <LegalParagraph
          paragraph={
            "Top Management shall take all reasonable precautions to prevent harm to workers. Frontline Supervisors shall be trained and held responsible for ensuring that the workers under their supervision follow this policy. Frontline Supervisors are accountable for ensuring that workers follow safe work practices and receive appropriate training to support their health and safety./n Supervisors also have a general responsibility for ensuring the safety of equipment and facility."
          }
        />
        <LegalParagraph
          paragraph={
            "ND Western through all levels of management shall cooperate with the Occupational Safety and Health (OSH) Committee and employees to create a healthy and safe work environment. This cooperation shall also be extended to contractors who do business with us."
          }
        />
        <LegalParagraph
          paragraph={
            "ND Western employees shall be required to support the organization’s health and safety initiative and to cooperate with the OSH Committee and with others exercising authority under the applicable legislations."
          }
        />
        <LegalParagraph
          paragraph={
            "It is the duty of each worker to report to the supervisor or line manager, as soon as possible, any hazardous conditions, injury, accident, or illness related to the workplace. Employees and contractors shall protect their health and safety by complying with applicable legislation, policies, procedures, rules and, instructions as prescribed by ND Western."
          }
        />
        <LegalParagraph
          paragraph={
            "ND Western recognises the worker’s duty to identify hazards and supports and encourages workers to play an active role in identifying hazards and to offer suggestions or ideas to improve the health and safety program."
          }
        />
        <LegalParagraph
          paragraph={
            "ND Western shall ensure that employees are made aware of the risks pertaining to their operations and ensure that they understand the mitigation measures to reduce or eliminate the risk."
          }
        />
        <LegalParagraph
          paragraph={
            "ND Western shall provide appropriate personal protective equipment (PPE’s) for her employees to reduce exposure to hazards in the worksite which cannot be eliminated. Contractors working in ND Western facilities shall also be required to wear appropriate PPE’s as required."
          }
        />
        <LegalParagraph
          title={"Stop Work Authority: "}
          paragraph={
            "ND Western employees and contractors are required to adhere to all applicable safety standards while working in ND Western facilities. The STOP WORK AUTHORITY empowers everyone to halt any work (regardless of your involvement) and request for the risk to be re-assessed."
          }
        />
      </div>

      <div className="">
        <LowerBanner
          linkArray={array}
          text={
            "We pride ourselves in our sustainable practices geared at protecting the environment "
          }
          image={HSE7}
        />
      </div>
    </div>
  );
}

export default HSEPage;
