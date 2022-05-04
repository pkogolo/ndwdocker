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
import drilling from "../images/drilling.png";
import ugheliEast from "../images/ughelieast.png";
import ugheliWest from "../images/ugheliWest.png";
import warriRiver from "../images/warririver.png";
import lab from "../images/lab.jpg";
import ogunu from "../images/ogunu.png";
import edjeba from "../images/edjeba.png";
import GreenCard from "../Components/GreenCard";
import OperationsBottomLinks from "../Components/OperationsBottomLinks";

function NonOilAndGasAssets() {
  return (
    <div>
      <SecondaryHeader
        image={lab}
        heading={"Non Oil & Gas Assets"}
        greenHeader={true}
      />

      <div className="flex items-center flex-col justify-center">
        <MainCard
          showCircles={false}
          title={"NOGA Profile"}
          mainImage={ogunu}
          paragraph={
            "NOGA (Non-Oil &amp; Gas) department is responsible for the commercialization of NPDC/NDWHousing Estate in Edjeba and Ogunu. NOGA provides value-added services to the occupants in the estate by creating a successful partnership with the occupants through the services we provide which include, horticulture/housekeeping of the estate to always maintain a good hygiene environment, Provision of accommodation for NPDC/NDW staff, Civil repairs &amp; maintenance of bungalows, Provision of good portable drinking water, Electrical repairs &amp; maintenance, Refuse collection and disposal, 24hours security and steady power supply in the estate which has positioned the estate as a sought after estate for clients desiring a safe, serene and cozy accommodation in Warri Delta State."
          }
          reversed={false}
        />
        <MainCard
          showCircles={false}
          title={"Our Facility:"}
          mainImage={edjeba}
          paragraph={
            "We rent service apartments for clients/customers in need of a safe, comfortable, and exquisite living accommodation, office space/complex, and hall rental in a serene and peaceful location for weddings, meetings, and functions in Edjeba and Ogunu Estate located in the heart of Warri City in Delta State. Our facilities include High rise/office complex, 3- Bedroom Bungalows, 4-Bedroom Bungalows, Guesthouse, a swimming pool, etc."
          }
          reversed={true}
        />

        <GreenCard
          title={"Edjeba Estate"}
          paragraph={
            "The facilities in Edjeba include the following:/n  333 Service Apartment /n  17 High rises/office complex /n Gym center /n  Football field /n  Children playground /n  Multi-Purpose Hall /n Activity Centre /n Bank /n School /n Squash hall /n  Volley Court"
          }
          mainImage={ogunu}
        />
        <GreenCard
          title={"Ogunu Estate"}
          paragraph={
            "TThe facilities in Ogunu include the following: /n 142 Service Apartment /n Olympic-size swimming pool /n Management Guest House (Forcados 1 &amp; 2) /n Medical Laboratory Center /n School /n Supermarket /n Gym center /n Children Playground /n Football pitch /n Hockey pitch /n Long tennis Court"
          }
          mainImage={edjeba}
        />
      </div>
      <OperationsBottomLinks />
    </div>
  );
}

export default NonOilAndGasAssets;
