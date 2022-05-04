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
import edjeba from "../images/edjeba.jpg";
import drilling from "../images/drilling.png";
import ugheliEast from "../images/ughelieast.png";
import ugheliWest from "../images/ugheliWest.png";
import warriRiver from "../images/warririver.png";
import OperationsBottomLinks from "../Components/OperationsBottomLinks";

function OilAndGasAssets() {
  return (
    <div>
      <SecondaryHeader
        image={warriRiver}
        heading={"Oil & Gas Assets"}
        greenHeader={true}
      />

      <div className="flex items-center flex-col justify-center w-full">
        <MainCard
          showCircles={false}
          title={"Utorogu"}
          mainImage={pipeAsset}
          paragraph={
            "Utorogu field was discovered in 1964 and is located some 42 km south east of Warri. It currently produces about 10 Mbpd of oil & condensate and 300 MMscf/d of gas. /n The Utorogu Flowstation was commissioned in 1968 with a 30 Mbpd processing capacity. It currently also has one Non Associated Gas (NAG) plant of 360 MMscf/d and a Field Logistics Base. The station processes fluids from The Utorogu oil wells and condensate from the Utorogu NAG Plant. The station also handles hydrocarbon fluid from NPDC's Abura field, and sends high pressure gas to Ughelli West flow station for gas lifting."
          }
          reversed={false}
        />
        <MainCard
          showCircles={false}
          title={"Ughelli East"}
          mainImage={ugheliEast}
          paragraph={
            "Ughelli East field was discovered in 1959 and is located within 25 km south east of Warri. The field production is currently about 4.50 Mbpd of oil and 90 MMscf/d of gas with potentials for doubling the rates./n The Ughelli East Flowstation was commissioned in 1966, with a processing capacity of 30 Mbpd. The flowstation processes Oil from Ughelli East field and condensate from the Ughelli East gas plant."
          }
          reversed={true}
        />
        <MainCard
          showCircles={false}
          title={"Ugheli West"}
          mainImage={ugheliWest}
          paragraph={
            "Ughelli West field was discovered in 1960 and is located some 20 km east of Warri. The field produce currently about 2.5 Mbpd of oil./n The Ughelli West Flowstation was commissioned in 1969, and has a processing capacity of 30 Mbpd. The station processes fluids from the Ughelli West oil wells, and receives high pressure gas from Utorogu flow station for lift gas."
          }
          reversed={false}
        />
        <MainCard
          showCircles={false}
          title={"Warri River"}
          mainImage={ugheliEast}
          paragraph={
            "Warri River field was discovered in 1961 and is located some 20 km south east of Warri. There are 5 wells drilled to date. The flowstation is currently mothballed."
          }
          reversed={true}
        />
      </div>
      <OperationsBottomLinks />
    </div>
  );
}

export default OilAndGasAssets;
