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
import asset3 from "../images/asset3.jpg";
import OperationsBottomLinks from "../Components/OperationsBottomLinks";

function Exploration() {
  return (
    <div>
      <SecondaryHeader
        image={asset3}
        heading={"Exploration"}
        greenHeader={true}
      />

      <div className="flex items-center flex-col justify-center w-full">
        <MainCard
          showCircles={false}
          title={"Overview"}
          mainImage={pipeAsset}
          paragraph={
            "ND Western in partnership with NPDC as operator, carry out exploration and exploitation activities in OML 34./n In meeting today's energy supply challenges, our Asset Team comprises well experienced multi-disciplinary professionals from Geology & Geophysics, Production Technology, Reservoir Engineering, Well Engineering and Facilities Operations & Management for optimized production. This diverse team of Professionals are strategically anchored to provide sound technical expertise to our partners for the growth of the venture."
          }
          reversed={false}
        />
        <MainCard
          showCircles={false}
          title={"Exploration at OML 34"}
          mainImage={ugheliEast}
          paragraph={
            "OML 34 is located in the Greater Ughelli depo belt of the Niger Delta Land terrain. Four fields are already established with oil and gas production, namely Ughelli West, Ughelli East, Utorogu and Warri River fields. The block has a lot of exploration and appraisal/development potentials. The Greater Ughelli depo belt is dominated by simple/faulted rollover structures. This sub play has been proven to be very successful with numerous known producing fields. A large number of prospects and leads have also been identified within the concession for future drilling. /n ND Western is focused on driving upwards its energy deliverables to the nation and beyond by boosting its current exploration and production activities to a fully grown asset. Currently, the NPDC/ND Western JV is appraising a new oil reservoir and few gas reservoirs discovered in the northern part of Utorogu field which when fully developed will boost our oil and gas production significantly."
          }
          reversed={true}
        />
        <MainCard
          showCircles={false}
          title={"Exploration Strategy"}
          mainImage={ugheliWest}
          paragraph={
            "The overall exploration strategy of ND Western can be summarized as follows:/n  • Establishment of a robust exploration funnel with credible leads and prospects/n  • Aggressive maturation of identified leads to prospect level to become drillable candidates /n • Aggressively appraise existing discoveries within the license to increase reserves and maintain the production profile plateau /n • Drill deep gas and oil exploration wells /n • Deploy novel technologies where needed especially in the area of seismic acquisition and reprocessing ./n • Proactively share evaluation results with internal and external stakeholders for seamless alignment purposes"
          }
          reversed={false}
        />
      </div>
     <OperationsBottomLinks/>
    </div>
  );
}

export default Exploration;
