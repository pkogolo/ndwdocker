import React from "react";
import SecondaryHeader from "../Components/SecondaryHeader";
import LowerBanner from "../Components/LowerBanner";
import TwoColGrid from "../Components/TwoColGrid";

function NonOilAndGasAssets() {
  const ogunu =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658605896/NDWESTERN-MEDIA/images/ogunu_mdclor.png";
  const edjeba =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658605876/NDWESTERN-MEDIA/images/edjeba_kdr1ns.png";
  const operations3 =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658605896/NDWESTERN-MEDIA/images/OPERATIONS/operations3_wvzxay.jpg";
  const operations9 =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658605895/NDWESTERN-MEDIA/images/OPERATIONS/operations9_bpf39w.jpg";
  const operations5 =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658605896/NDWESTERN-MEDIA/images/OPERATIONS/operations5_i7tjy5.jpg";
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
            "The facilities in Edjeba include the following:/n A 333 Service Apartment,  17 High rises/office complex, a Gym center,  Football field, Children's playground,  Multi-Purpose Hall, Activity Centre, Bank, School, Squash hall,  and a Volley Court"
          }
          mainImage={ogunu}
        />
        <TwoColGrid
          title={"Ogunu Estate"}
          paragraph={
            "The facilities in Ogunu include the following:/n, A 142 Service Apartment, an olympic-sized swimming pool,  a management guest house (Forcados 1 & 2), a Medical Laboratory Center,  a School, Supermarket, Gym center, Children's Playground, Football pitch, Hockey pitch,  and a Long tennis Court"
          }
          mainImage={edjeba}
          reversed={true}
        />
      </div>
      <div className="">
        <LowerBanner linkArray={array} image={operations9} />
      </div>
    </div>
  );
}

export default NonOilAndGasAssets;
