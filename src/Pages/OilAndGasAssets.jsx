import React from "react";
import SecondaryHeader from "../Components/SecondaryHeader";
import MainCard from "../Components/MainCard";
import pipeAsset from "../images/pipe-asset.jpg";
import ugheliEast from "../images/ughelieast.png";
import ugheliWest from "../images/ugheliWest.png";
import operations1 from "../images/OPERATIONS/operations1.jpg";
import operations2 from "../images/OPERATIONS/operations2.jpg";
import operations6 from "../images/OPERATIONS/operations6.jpg";
import operations7 from "../images/OPERATIONS/operations7.jpg";

import OperationsBottomLinks from "../Components/OperationsBottomLinks";
import LowerBanner from "../Components/LowerBanner";
import TwoColGrid from "../Components/TwoColGrid";

function OilAndGasAssets() {
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
        imageArray={[operations7, operations2]}
        heading={"Oil & Gas Assets"}
        greenHeader={true}
      />

      <div className="flex items-center flex-col justify-center w-full">
        <TwoColGrid
          showCircles={false}
          title={"Utorogu"}
          mainImage={pipeAsset}
          paragraph={
            "Utorogu field was discovered in 1964 and is located some 42 km south east of Warri. It currently produces about 10 Mbpd of oil & condensate and 300 MMscf/d of gas. /n The Utorogu Flowstation was commissioned in 1968 with a 30 Mbpd processing capacity. It currently also has one Non Associated Gas (NAG) plant of 360 MMscf/d and a Field Logistics Base. The station processes fluids from The Utorogu oil wells and condensate from the Utorogu NAG Plant. The station also handles hydrocarbon fluid from NPDC's Abura field, and sends high pressure gas to Ughelli West flow station for gas lifting."
          }
          reversed={false}
        />
        <TwoColGrid
          showCircles={false}
          title={"Ughelli East"}
          mainImage={ugheliEast}
          paragraph={
            "Ughelli East field was discovered in 1959 and is located within 25 km south east of Warri. The field production is currently about 4.50 Mbpd of oil and 90 MMscf/d of gas with potentials for doubling the rates./n The Ughelli East Flowstation was commissioned in 1966, with a processing capacity of 30 Mbpd. The flowstation processes Oil from Ughelli East field and condensate from the Ughelli East gas plant."
          }
          reversed={true}
        />
        <TwoColGrid
          showCircles={false}
          title={"Ugheli West"}
          mainImage={ugheliWest}
          paragraph={
            "Ughelli West field was discovered in 1960 and is located some 20 km east of Warri. The field produce currently about 2.5 Mbpd of oil./n The Ughelli West Flowstation was commissioned in 1969, and has a processing capacity of 30 Mbpd. The station processes fluids from the Ughelli West oil wells, and receives high pressure gas from Utorogu flow station for lift gas."
          }
          reversed={false}
        />
        <TwoColGrid
          showCircles={false}
          title={"Warri River"}
          mainImage={ugheliEast}
          paragraph={
            "Warri River field was discovered in 1961 and is located some 20 km south east of Warri. There are 5 wells drilled to date. The flowstation is currently mothballed."
          }
          reversed={true}
        />
      </div>
      <div className="">
        <LowerBanner linkArray={array} image={operations6} />
      </div>
    </div>
  );
}

export default OilAndGasAssets;
