import React from "react";
import SecondaryHeader from "../Components/SecondaryHeader";
import TwoColGrid from "../Components/TwoColGrid";
import LowerBanner from "../Components/LowerBanner";

function OML34() {
  const oml34 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658606049/NDWESTERN-MEDIA/images/oml-34_ppimtd.png";
  const operations1 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605899/NDWESTERN-MEDIA/images/OPERATIONS/operations1_jbaq92.jpg";
  const operations2 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605907/NDWESTERN-MEDIA/images/OPERATIONS/operations2_oqdegp.jpg";
  const operations6 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605899/NDWESTERN-MEDIA/images/OPERATIONS/operations6_ehjwar.jpg";

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
        imageArray={[operations1, operations2]}
        heading={"OML 34"}
        greenHeader={true}
      />

      <div className="flex items-center justify-center w-full">
        <TwoColGrid
          oml34={true}
          showCircles={false}
          title={"OML 34"}
          mainImage={oml34}
          paragraph={
            "OML 34 is located in the Western Niger Delta and covers an area of some 950 square kilometers. The producing fields are Utorogu, Ughelli East, and Ughelli West, with total flowstation capacity of 90 Mbpd. Warri River field was previously a producing field until an imposed shut-in in 1997. The field is expected to return to production./n  The block has two Gas Plants; one in Utorogu field with 360 MMscfd capacity and the other in Ughelli East field with 90 MMscfd capacity. The combined fields currently produce an average of about 390 MMscfd of gas, and 17,000 bpd of oil and condensate./n OML 34 is of utmost strategic importance to Nigeria and the West African sub-region, as a major supplier of gas for electricity generation in Nigeria. It also feeds gas through the West African Gas Pipeline (WAGP) to neighboring countries."
          }
          reversed={false}
        />
      </div>
      <div className="">
        <LowerBanner linkArray={array} image={operations6} />
      </div>
    </div>
  );
}

export default OML34;
