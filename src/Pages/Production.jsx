import React from "react";
import ProfileComponent from "../Components/ProfileComponent";
import SecondaryHeader from "../Components/SecondaryHeader";
import chairman from "../images/chairman2.png";
import pipes from "../images/pipes.jpg";
import LargePageButtons from "../Components/LargePageButtons";
import ebereoji from "../images/ebereoji.jpg";
import people1 from "../images/people1.jpg";
import temitope from "../images/temitope.png";
import oml34 from "../images/oml-34.png";
import MainCard from "../Components/MainCard";
import nigerDelta from "../images/nigerDelta.png";
import towers from "../images/towers.jpg";
import house from "../images/House.jpg";
import pipeAsset from "../images/pipe-asset.jpg";
import drilling from "../images/drilling.png";
import ugheliEast from "../images/ughelieast.png";
import ugheliWest from "../images/ugheliWest.png";
import warriRiver from "../images/warririver.png";
import lab from "../images/lab.jpg";
import ogunu from "../images/ogunu.png";
import edjeba from "../images/edjeba.png";
import gasplant from "../images/gasplant.png";
import LegalParagraph from "../Components/LegalParagraph";

function Production() {
  return (
    <div>
      <SecondaryHeader
        image={gasplant}
        heading={"Production"}
        greenHeader={true}
      />

      <div className="flex items-center flex-col justify-center">
        <LegalParagraph
          title={"Current Production"}
          paragraph={
            "• Oil: +/- 17,000 b/d (including condensate)/n • Gas: +/- 390 MMscf/d"
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
      <div className="w-full flex items-center justify-center mt-24 ">
        <h2 className="w-3/4 text-green text-3xl">Other Links</h2>
      </div>
      <div className="flex justify-center my-24">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 place-items-center px-40 ">
          <LargePageButtons text={"OML 34"} image={pipes} />
          <LargePageButtons text={"Non Oil & Gas Assets"} image={house} />
          <LargePageButtons text={"Production"} image={towers} />
          <LargePageButtons text={"Exploration"} image={nigerDelta} />
        </div>
      </div>
    </div>
  );
}

export default Production;
