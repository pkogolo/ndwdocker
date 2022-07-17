import React from "react";
import MainCard from "../Components/MainCard";

import LowerBanner from "../Components/LowerBanner";
import sunday from "../images/sunday.jpg";
import saipecceo from "../images/saipecceo.jpg";
import image1 from "../images/ASSETS/asset19.jpg";
import image2 from "../images/ASSETS/asset33.jpg";
import image3 from "../images/ASSETS/asset16.jpg";
import image5 from "../images/ASSETS/asset15.jpg";
import image4 from "../images/ASSETS/asset14.jpg";
import image6 from "../images/ASSETS/asset24.jpg";
import image7 from "../images/ASSETS/asset27.jpg";
import image8 from "../images/ASSETS/asset9.jpg";
import image9 from "../images/ASSETS/asset12.jpg";
import environmenttowers from "../images/environmenttowers.png";
import hse2 from "../images/hse2.png";
import SecondaryHeader from "../Components/SecondaryHeader";
import LargePageButtons from "../Components/LargePageButtons";
import pipes from "../images/pipes.jpg";
import house from "../images/house.jpg";
import towers from "../images/towers.jpg";
import GreenCard from "../Components/GreenCard";
import FormattedParagraph from "../Components/FormattedParagraph";
import ESGBottomLinks from "../Components/ESGBottomLinks";
import TwoColGrid from "../Components/TwoColGrid";

function TrackingEmmissions() {
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
        imageArray={[image1, image2, image3, image4]}
        heading={
          "Approach to tracking and reducing scope 1 and scope 2 emissions"
        }
        greenHeader={true}
      />

      <div className="flex items-center flex-col justify-center mb-24">
        <TwoColGrid
          showCircles={false}
          title={"Our Commitment to Reducing Emmissions"}
          mainImage={image5}
          paragraph={
            "NDW is committed to playing a central part in the Energy Transition and we see ourselves playing a leading role in reducing scope 1 and scope 2 emissions in the Nigerian oil and gas industry. Our gas focus is one way that we plan to achieve emissions reductions targets that align with reaching net zero by the middle of the century (year 2050). To monitor our progress towards Net Zero, it is essential that we can effectively track and reduce our Scope 1 and 2 emissions. "
          }
          reversed={false}
        />
        <TwoColGrid
          showCircles={false}
          title={"The GHG Protocol"}
          mainImage={saipecceo}
          paragraph={
            "The GHG Protocol published a widely accepted international “Corporate Accounting and Reporting Standard” in 2004. The Scope definition was developed to define direct and indirect emissions, to improve reporting transparency and to ensure consistency across industries when reporting. Scope 1 and Scope 2 emissions are most relevant to the hydrocarbon exploration and production industry."
          }
          reversed={true}
        />

        <h1 className="text-green text-3xl mt-24 ">
          The definitions are summarised below
        </h1>
        <TwoColGrid
          mainImage={image6}
          reverse={true}
          title={"Scope 1 Direct Emissions "}
          paragraph={
            "the direct GHG emissions that occur from sources that are owned or controlled by the company, for example, emissions from combustion in owned or controlled boilers, furnaces, vehicles, emissions from chemical production in owned or controlled process equipment. Examples may be:/n combustion in stationary sources (e.g., fuel use in engines or turbines used to compress gases, pump liquids and generate electricity, and fuel use in heaters and boilers)/n– combustion in flares and incinerators./n– combustion in mobile sources (e.g., transportation in motor vehicles and vessels, such as tank trucks and oil tankers)/n"
          }
        />

{/* – process emissions (e.g., glycol dehydration, acid gas removal/sulphur recovery,hydrogen production, fluid catalytic cracker (FCC) catalyst regeneration)/n– venting emissions (e.g., vessel loading, tank storage and flashing, and venting ofassociated gas)/n– fugitive emissions (e.g., leaks from equipment and piping components); and non-routine events (e.g., gas releases during planned pipeline and equipment maintenance, releases from unplanned events)" */}

        <TwoColGrid
          mainImage={image8}
          reverse={true}
          title={"Scope 2:  Indirect emissions"}
          paragraph={
            "those GHG emissions which are generated from the purchase or importation of energy to the site or company. For example:/n Defined as energy related indirect emissions, namely those from purchased electricity, steam, heating (hot water) and cooling. Often these emissions may be more difficult tocalculate as emissions factors for imported energy (e.g., mass of emissions per quantity of electricity consumed) may be unavailable or have a high degree of uncertainty."
          }
        />
        <TwoColGrid
          mainImage={image7}
          reverse={true}
          title={"Scope 3 All other indirect emissions"}
          paragraph={
            "An optional reporting category that allows for the treatment of all other indirect GHG emissions. Scope 3 emissions are a consequence of the activities of the company but occur from sources not owned or controlled by the company./n They represent emissions that occur in the life-cycle steps of a product or process that occur before the company’s activities, such as those resulting from the production and transport of raw materials. This includes the “embodied” carbon in the materials used to produce infrastructure, such as steel, cement etc./n Embodied carbon is usually a small but important part of the overall emissions of an oil/gas production facility that needs to be accounted for in full life cycle carbon emissions/intensity analysis. /n – Scope 3 also represent emissions that occur in the life-cycle steps of a product after a company’s activities, such as from the transportation and use of products, as well as the disposal of waste materials. "
          }
        />

        <h1 className="text-green text-3xl mt-24 ">Guidance for Reporting</h1>
        <FormattedParagraph
          paragraph={
            "NDW also uses specific guidance on reporting of emissions for the oil and gas industry as provided in the “Oil and gas industry guidance on voluntary sustainability reporting guidelines”, produced by IPIECA (formerly the International Petroleum Industry Environmental Conservation Association)./nThe IPIECA guidelines are industry specific and recommend a series of discrete activities that should be estimated and reported by oil and gas companies. The guidelines introduce the concept originally proposed by the Intergovernmental Panel on Climate Change (IPCC) to report emissions of not just CO2, but also CH4 and other greenhouse gases./nIPIECA also recognise that one of the most impactful sources of emissions in the oil and gas industry are caused by the flaring, venting and leakage of both CO2 and CH4 in production operations./nThe IPIECA guidelines recommend that GHG emissions from all company business activities should be reported, including: "
          }
        />
        <FormattedParagraph
          paragraph={
            "● Combustion emissions (e.g., fuel use in gas compression, power generation, heating, coke burn);/n ●  Flaring (primarily CO2) and venting (primarily CH4); /n ●  Process emissions (e.g., vessel loading, tank storage and flushing, glycol dehydration, sulphur recovery units, hydrogen production);/n ●  Process emissions (e.g., vessel loading, tank storage and flushing, glycol dehydration, sulphur recovery units, hydrogen production);/n ●  Non-routine events (e.g., pipeline maintenance, gas releases, equipment maintenance)"
          }
        />
        <FormattedParagraph
          paragraph={
            "NDW also follows guidance provided in the 2018 edition of the ISO 14064 standard, “Specification with guidance at the organisation level for quantification and reporting of greenhouse gas emissions and removals – Part one”. This standard is brief and is consistent with the GHG Protocol and IPIECA above, but also provides a definition for certain parameters that are part of the standard GHG estimation methodology. /n The standard provides relevant definitions for data types that are included in this study. These data definitions are /n ● primary data - quantified value of a process or an activity obtained from a direct measurement, or a calculation based on direct measurements/n ● site-specific data - primary data obtained within the organisational boundary /n ● secondary data - data obtained from sources other than primary data. Such sources can include databases and published literature validated by competent authorities. "
          }
        />
        <FormattedParagraph
          paragraph={
            "NDW is in the process of collecting data on Scope 1 and Scope 2 emissions across our operations. In the longer term, we plan to publish its Scope 1 and scope 2 emissions, based on the reporting techniques described above. The emissions reports will be used to develop emissions reduction plans.The largest emissions associated with NDW asset portfolio are the Venting, Flaring and Fugitive category. Our emissions reduction plans will be based on reducing venting and flaring and minimizing the leakage of fugitive methane. We aim to limit flaring to a minimum and to develop markets to use the Associated Gas and Non-Associated Gas produced from our fields. Where the produced gas cannot be monetized, we will look at options to inject gas as part of an EOR project or will inject gas into depleted or saline reservoirs for long term storage.  "
          }
        />
      </div>

      <div className="">
        <LowerBanner linkArray={array} image={image5} />
      </div>
    </div>
  );
}

export default TrackingEmmissions;
