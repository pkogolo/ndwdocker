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
import OperationsBottomLinks from "../Components/OperationsBottomLinks";

function OML34() {
  return (
    <div>
      <SecondaryHeader
        image={pipeAsset}
        heading={"OML 34"}
        greenHeader={true}
      />

      <div className="flex items-center justify-center w-full">
        <MainCard
          showCircles={false}
          title={"OML 34"}
          mainImage={oml34}
          paragraph={
            "OML 34 is located in the Western Niger Delta and covers an area of some 950 square kilometers. The producing fields are Utorogu, Ughelli East, and Ughelli West, with total flowstation capacity of 90 Mbpd. Warri River field was previously a producing field until an imposed shut-in in 1997. The field is expected to return to production./n  The block has two Gas Plants; one in Utorogu field with 360 MMscfd capacity and the other in Ughelli East field with 90 MMscfd capacity. The combined fields currently produce an average of about 390 MMscfd of gas, and 17,000 bpd of oil and condensate./n OML 34 is of utmost strategic importance to Nigeria and the West African sub-region, as a major supplier of gas for electricity generation in Nigeria. It also feeds gas through the West African Gas Pipeline (WAGP) to neighboring countries."
          }
          reversed={false}
        />
      </div>
      <OperationsBottomLinks />
    </div>
  );
}

export default OML34;
