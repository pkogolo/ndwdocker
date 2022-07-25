import React from "react";
import SecondaryHeader from "../Components/SecondaryHeader";
import LowerBanner from "../Components/LowerBanner";
import TwoColGrid from "../Components/TwoColGrid";

function Exploration() {
  const operations1 =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658605899/NDWESTERN-MEDIA/images/OPERATIONS/operations1_jbaq92.jpg";
  const operations2 =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658605907/NDWESTERN-MEDIA/images/OPERATIONS/operations2_oqdegp.jpg";
  const operations8 =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658605895/NDWESTERN-MEDIA/images/OPERATIONS/operations8_nys33o.jpg";
  const operations11 =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658605895/NDWESTERN-MEDIA/images/OPERATIONS/operations11_kzorlo.jpg";
  const operations12 =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658605898/NDWESTERN-MEDIA/images/OPERATIONS/operations12_znvm65.jpg";

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
        heading={"Exploration"}
        greenHeader={true}
      />

      <div className="flex items-center flex-col justify-center w-full">
        <TwoColGrid
          showCircles={false}
          title={"Overview"}
          mainImage={operations11}
          paragraph={
            "ND Western in partnership with NPDC as operator, carry out exploration and exploitation activities in OML 34./n In meeting today's energy supply challenges, our Asset Team comprises well experienced multi-disciplinary professionals from Geology & Geophysics, Production Technology, Reservoir Engineering, Well Engineering and Facilities Operations & Management for optimized production. This diverse team of Professionals are strategically anchored to provide sound technical expertise to our partners for the growth of the venture."
          }
          reversed={false}
        />
        <TwoColGrid
          showCircles={false}
          title={"Exploration at OML 34"}
          mainImage={operations8}
          paragraph={
            "OML 34 is located in the Greater Ughelli depo belt of the Niger Delta Land terrain. Four fields are already established with oil and gas production, namely Ughelli West, Ughelli East, Utorogu and Warri River fields. The block has a lot of exploration and appraisal/development potentials. The Greater Ughelli depo belt is dominated by simple/faulted rollover structures. This sub play has been proven to be very successful with numerous known producing fields. A large number of prospects and leads have also been identified within the concession for future drilling. /n ND Western is focused on driving upwards its energy deliverables to the nation and beyond by boosting its current exploration and production activities to a fully grown asset. Currently, the NPDC/ND Western JV is appraising a new oil reservoir and few gas reservoirs discovered in the northern part of Utorogu field which when fully developed will boost our oil and gas production significantly."
          }
          reversed={true}
        />
        <TwoColGrid
          showCircles={false}
          title={"Exploration Strategy"}
          mainImage={operations12}
          paragraph={
            "The overall exploration strategy of ND Western can be summarized as follows:/n  • Establishment of a robust exploration funnel with credible leads and prospects/n  • Aggressive maturation of identified leads to prospect level to become drillable candidates /n • Aggressively appraise existing discoveries within the license to increase reserves and maintain the production profile plateau /n • Drill deep gas and oil exploration wells /n • Deploy novel technologies where needed especially in the area of seismic acquisition and reprocessing ./n "
          }
          reversed={false}
        />
      </div>
      <div className="">
        <LowerBanner linkArray={array} image={operations8} />
      </div>
    </div>
  );
}

export default Exploration;
