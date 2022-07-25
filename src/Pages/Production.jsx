import React from "react";
import SecondaryHeader from "../Components/SecondaryHeader";
import LegalParagraph from "../Components/LegalParagraph";
import LowerBanner from "../Components/LowerBanner";

function Production() {
  const operations7 =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658605908/NDWESTERN-MEDIA/images/OPERATIONS/operations7_ww1obq.jpg";
  const operations8 =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658605895/NDWESTERN-MEDIA/images/OPERATIONS/operations8_nys33o.jpg";
  const array = [
    {
      page: "Oil and Gas Assets",
      link: "/operations/oil_and_gas_assets",
    },
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
      page: "OML 34",
      link: "/operations/our_assets",
    },
    { page: "Careers", link: "/careers" },
  ];
  return (
    <div>
      <SecondaryHeader
        imageArray={[operations8, operations7]}
        heading={"Production"}
        greenHeader={true}
      />

      <div className="flex items-center flex-col justify-center">
        <LegalParagraph
          title={"Current Production"}
          paragraph={
            "• Oil: +/- 17,000 b/d (including condensate)/n • Gas: +/- 350 MMscf/d."
          }
        />
        <LegalParagraph
          title={"Aspiration "}
          paragraph={
            "Grow Production to:/n • Oil: > 60,000 b/d (including condensate)/n • Gas > 510 MMscf/d./n Currently most of the exploration and production activities are focused within the Utorogu and Ughelli East and West Fields."
          }
        />
        <LegalParagraph
          title={"GAS to POWER"}
          paragraph={
            "OML34 is key to the nation's power generation. Gas from OML-34 is produced from two of its fields, the Utorogu field and the Ughelli East field. Non associated gas (NAG) production from the Utorogu field started in 1989. A total of 11 NAG wells have been drilled to date./n The gas processing plant in Utorogu has an installed capacity of 360MMscf/d. Gas produced from the field goes into the Escravos-Lagos Pipeline (ELPS) owned and managed by the Nigerian Gas Company (NGC) from where it is distributed to our gas customers./n  The Ughelli East gas processing plant came on stream in 1966 with an installed capacity of 90MMscf/d. Six NAG wells have been drilled to date in the field and the gas produced supplies the Transcorp Ughelli Power station among others./n  ND Western is a major supplier of gas to the domestic market and the West African Sub region which include Ghana, Lome and the Benin Republic via the West African Gas Pipeline./n  Major ongoing projects in OML-34 include: /n  • Associated Gas Gathering: This project aims to gather all the flared gas in Ughelli East, Ughelli West & Utorogu (UUU) Fields for processing, to add about 15MMscf/d to the domestic gas market./n • The Non Associated Gas- 2(NAG-2) Project: This gas processing plant when completed will add about 150MMscf/d of processing capacity in the Utorogu area."
          }
        />
      </div>
      <div className="">
        <LowerBanner linkArray={array} image={operations8} />
      </div>
    </div>
  );
}

export default Production;
