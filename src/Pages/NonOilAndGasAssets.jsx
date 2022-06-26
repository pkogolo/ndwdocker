import React from "react";
import SecondaryHeader from "../Components/SecondaryHeader";
import MainCard from "../Components/MainCard";
import lab from "../images/lab.jpg";
import ogunu from "../images/ogunu.png";
import edjeba from "../images/edjeba.png";
import GreenCard from "../Components/GreenCard";
import operations1 from "../images/OPERATIONS/operations1.jpg";
import operations3 from "../images/OPERATIONS/operations3.jpg";
import operations6 from "../images/OPERATIONS/operations6.jpg";
import operations9 from "../images/OPERATIONS/operations9.jpg";
import operations5 from "../images/OPERATIONS/operations5.jpg";
import LowerBanner from "../Components/LowerBanner";
import TwoColGrid from "../Components/TwoColGrid";

function NonOilAndGasAssets() {
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
        imageArray={[operations3, operations5, operations9]}
        heading={"Non Oil & Gas Assets"}
        greenHeader={true}
      />

      <div className="flex items-center flex-col justify-center">
        <TwoColGrid
          showCircles={false}
          title={"NOGA Profile"}
          mainImage={operations3}
          paragraph={
            "NOGA (Non-Oil &amp; Gas) department is responsible for the commercialization of NPDC/NDWHousing Estate in Edjeba and Ogunu. NOGA provides value-added services to the occupants in the estate by creating a successful partnership with the occupants through the services we provide which include, horticulture/housekeeping of the estate to always maintain a good hygiene environment, Provision of accommodation for NPDC/NDW staff, Civil repairs &amp; maintenance of bungalows, Provision of good portable drinking water, Electrical repairs &amp; maintenance, Refuse collection and disposal, 24hours security and steady power supply in the estate which has positioned the estate as a sought after estate for clients desiring a safe, serene and cozy accommodation in Warri Delta State."
          }
          reversed={false}
        />
        <TwoColGrid
          showCircles={false}
          title={"Our Facility:"}
          mainImage={operations5}
          paragraph={
            "We rent service apartments for clients/customers in need of a safe, comfortable, and exquisite living accommodation, office space/complex, and hall rental in a serene and peaceful location for weddings, meetings, and functions in Edjeba and Ogunu Estate located in the heart of Warri City in Delta State. Our facilities include High rise/office complex, 3- Bedroom Bungalows, 4-Bedroom Bungalows, Guesthouse, a swimming pool, etc."
          }
          reversed={true}
        />

        <TwoColGrid
          title={"Edjeba Estate"}
          paragraph={
            "The facilities in Edjeba include the following:/n  333 Service Apartment /n  17 High rises/office complex /n Gym center /n  Football field /n  Children playground /n  Multi-Purpose Hall /n Activity Centre /n Bank /n School /n Squash hall /n  Volley Court"
          }
          mainImage={ogunu}
        />
        <TwoColGrid
          title={"Ogunu Estate"}
          paragraph={
            "TThe facilities in Ogunu include the following: /n 142 Service Apartment /n Olympic-size swimming pool /n Management Guest House (Forcados 1 &amp; 2) /n Medical Laboratory Center /n School /n Supermarket /n Gym center /n Children Playground /n Football pitch /n Hockey pitch /n Long tennis Court"
          }
          mainImage={edjeba}
        />
      </div>
      <div className="">
        <LowerBanner linkArray={array} image={operations9} />
      </div>
    </div>
  );
}

export default NonOilAndGasAssets;
