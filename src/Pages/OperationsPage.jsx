import React from "react";
import HeaderMain from "../Components/HeaderMain";
import MainCard from "../Components/MainCard";
import ebereOji from "../images/ebereoji.jpg";
import ha1 from "../images/hassests1.png";
import people1 from "../images/people1.jpg";
import hse from "../images/HSE.png";
import pipes from "../images/pipes.jpg";
import oml34 from "../images/oml-34.png";
import towers from "../images/towers.jpg";
import house from "../images/House.jpg"
import pipeAsset from "../images/pipe-asset.jpg"
import edjeba from "../images/edjeba.jpg"

function OperationsPage() {
  return (
    <div>
      <HeaderMain
        title={
          "Our production facilities contribute immensely to the supply of gas for electricity generation in Nigeria"
        }
        image={hse}
      />

      <div className="mb-40">
        <MainCard
          showCircles={false}
          title={"OML 34"}
          mainImage={oml34}
          paragraph={
            "OML 34 is located in the Western Niger Delta and covers an area of some 950 square kilometers. The producing fields are Utorogu, Ughelli East, and Ughelli West, with total flowstation capacity of 90 Mbpd. Warri River field was previously a producing field until an imposed shut-in in 1997. The field is expected to return to production."
          }
          buttonText={"Read More"}
          reversed={false}
        />
        <MainCard
          showCircles={false}
          reversed={true}
          title={"Oil & Gas Assets"}
          paragraph={"Our Oil and Gas Assets"}
          buttonText={"Read More"}
          mainImage={pipeAsset}
        />
        <MainCard
          showCircles={false}
          title={"Non Oil & Gas Assets"}
          mainImage={edjeba}
          paragraph={
            "	The non-oil and gas assets are the Ogunu and Edjeba Estates. They consist of 260 buildings in Edjeba and 142 buildings in Ogunu."
          }
          buttonText={"Read More"}
          reversed={false}
        />
        <MainCard
          showCircles={false}
          reversed={true}
          title={"Production"}
          paragraph={
            "Current Production /n • Oil: +/- 17,000 b/d (including condensate) /n • Gas: +/- 390 MMscf/d /n  Aspiration /n Grow Production to: /n • Oil: > 60,000 b/d (including condensate) /n • Gas > 510 MMscf/d."
          }
          buttonText={"Read More"}
          mainImage={towers}
        />

        <MainCard
          showCircles={false}
          title={"Exploration"}
          mainImage={pipes}
          paragraph={
            "ND Western in partnership with NPDC as operator, carry out exploration and exploitation activities in OML 34. /n In meeting today's energy supply challenges, our Asset Team comprises well experienced multi-disciplinary professionals from Geology & Geophysics, Production Technology, Reservoir Engineering, Well Engineering and Facilities Operations & Management for optimized production. This diverse team of Professionals are strategically anchored to provide sound technical expertise to our partners for the growth of the venture."
          }
          buttonText={"Read More"}
          reversed={false}
        />
      </div>
    </div>
  );
}

export default OperationsPage;
