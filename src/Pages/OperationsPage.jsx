import React from "react";
import MainCard from "../Components/MainCard";
import HeaderTwo from "../Components/HeaderTwo";
import LowerBanner from "../Components/LowerBanner";

function OperationsPage() {
  const operations1 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605899/NDWESTERN-MEDIA/images/OPERATIONS/operations1_jbaq92.jpg";
  const operations2 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605907/NDWESTERN-MEDIA/images/OPERATIONS/operations2_oqdegp.jpg";
  const operations3 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605896/NDWESTERN-MEDIA/images/OPERATIONS/operations3_wvzxay.jpg";
  const operations4 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605913/NDWESTERN-MEDIA/images/OPERATIONS/operations4_gbjujv.jpg";
  const pipes =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605896/NDWESTERN-MEDIA/images/pipes_pp1bq5.jpg";
  const operations5 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605896/NDWESTERN-MEDIA/images/OPERATIONS/operations5_i7tjy5.jpg";
  const towers =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658606057/NDWESTERN-MEDIA/images/towers_j1xuqt.jpg";

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
