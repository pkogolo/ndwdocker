import React from "react";
import HeaderMain from "../Components/HeaderMain";
import MainCard from "../Components/MainCard";
import operations1 from "../images/OPERATIONS/operations1.jpg";
import operations2 from "../images/OPERATIONS/operations2.jpg";
import operations3 from "../images/OPERATIONS/operations3.jpg";
import operations4 from "../images/OPERATIONS/operations4.jpg";
import pipes from "../images/pipes.jpg";
import operations5 from "../images/OPERATIONS/operations5.jpg";
import towers from "../images/towers.jpg";

import HeaderTwo from "../Components/HeaderTwo";
import LowerBanner from "../Components/LowerBanner";

function OperationsPage() {
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
      page: "production",
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
      <HeaderTwo
        pageName={"Operations"}
        pageText={
          "Our production facilities contribute immensely to the supply of gas for electricity generation in Nigeria"
        }
        image={operations1}
      />

      <div className="mb-40">
        <MainCard
          showCircles={false}
          title={"OML 34"}
          mainImage={operations2}
          paragraph={
            "OML 34 is located in the Western Niger Delta and covers an area of some 950 square kilometers. The producing fields are Utorogu, Ughelli East, and Ughelli West, with total flowstation capacity of 90 Mbpd. Warri River field was previously a producing field until an imposed shut-in in 1997. The field is expected to return to production."
          }
          buttonText={"Read More"}
          buttonLinks={"/operations/our_assets"}
          reversed={false}
        />
        <MainCard
          showCircles={false}
          reversed={true}
          title={"Oil & Gas Assets"}
          paragraph={"Our Oil and Gas Assets"}
          buttonText={"Read More"}
          buttonLinks={"/operations/oil_and_gas_assets"}
          mainImage={operations4}
        />
        <MainCard
          showCircles={false}
          title={"Non Oil & Gas Assets"}
          mainImage={operations3}
          paragraph={
            "	The non-oil and gas assets are the Ogunu and Edjeba Estates. They consist of 260 buildings in Edjeba and 142 buildings in Ogunu."
          }
          buttonText={"Read More"}
          buttonLinks={"/operations/non_oil_and_gas_assets"}
          reversed={false}
        />
        <MainCard
          showCircles={false}
          reversed={true}
          title={"Production"}
          paragraph={
            "Current Production /n • Oil: +/- 17,000 b/d (including condensate) /n • Gas: +/- 390 MMscf/d /n "
          }
          buttonText={"Read More"}
          buttonLinks={"/operations/production"}
          mainImage={towers}
        />

        <MainCard
          showCircles={false}
          title={"Exploration"}
          mainImage={pipes}
          paragraph={
            "ND Western in partnership with NPDC as operator, carry out exploration and exploitation activities in OML 34. "
          }
          buttonText={"Read More"}
          buttonLinks={"/operations/exploration"}
          reversed={false}
        />
      </div>
      <div className="">
        <LowerBanner linkArray={array} image={operations5} />
      </div>
    </div>
  );
}

export default OperationsPage;
