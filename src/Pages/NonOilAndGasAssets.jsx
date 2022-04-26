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

function NonOilAndGasAssets() {
  return (
    <div>
      <SecondaryHeader
        image={lab}
        heading={"Non Oil & Gas Assets"}
        greenHeader={true}
      />

      <div className="flex items-center flex-col justify-center">
        <MainCard
          showCircles={false}
          title={"Ogunu Estate"}
          mainImage={ogunu}
          paragraph={"UA residential unit in ogunu"}
          reversed={false}
        />
        <MainCard
          showCircles={false}
          title={"Edjeba Estate"}
          mainImage={edjeba}
          paragraph={"An office block in Edjeba"}
          reversed={true}
        />
        
      </div>
      <div className="w-full flex items-center justify-center mt-24 ">
        <h2 className="w-3/4 text-green text-3xl">Other Links</h2>
      </div>
      <div className="flex justify-center my-24">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 place-items-center px-40">
          <LargePageButtons text={"OML 34"} image={pipes} />
          <LargePageButtons text={"Non Oil & Gas Assets"} image={house} />
          <LargePageButtons text={"Production"} image={towers} />
          <LargePageButtons text={"Exploration"} image={nigerDelta} />
        </div>
      </div>
    </div>
  );
}

export default NonOilAndGasAssets;
