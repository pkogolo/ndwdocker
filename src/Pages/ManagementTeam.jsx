import React from "react";
import ProfileComponent from "../Components/ProfileComponent";
import SecondaryHeader from "../Components/SecondaryHeader";
import chairman from "../images/chairman2.png";
import hasset1 from "../images/hassests1.png";
import femiBalogun from "../images/femibalogun.png";
import michel from "../images/michel.png";
import abdul from "../images/abdul.png";
import ademola from "../images/ademola.png";
import coo from "../images/coo.png";
import cooPose from "../images/coo.jpg";
import timi from "../images/timi.png";
import LargePageButtons from "../Components/LargePageButtons";
import ebereoji from "../images/ebereoji.jpg";
import people1 from "../images/people1.jpg";
import temitope from "../images/temitope.png";
import ceoSmall from "../images/ceo-small.jpg";
import azfar from "../images/azfar.png";
import james from "../images/james.png";

function ManagementTeam() {
  const profileData = [
    {
      image: ebereoji,
      name: "Eberechukwu Oji",
      position: "Managing Director/ Chief Executive Officer",
      text: "Eberechukwu Oji joined ND Western as Managing Director/Chief Executive Offier (MD/CEO) in March 2020. He has over 25 years’ experience in the Oil and Gas sector. /n A Fellow of the Nigerian Society of Engineers and a Chattered Engineer with The Council for the Regulation of Engineering in Nigeria, COREN armed with a Master’s in Business Administration (MBA) Warwick University, UK, a Masters in Technology (MTech) Petroleum Engineering, Curtin University, Australia, a Masters in Engineering (MEng) Electrical & Electronics Engineering and a Bachelors in Engineering (BEng) Electrical & Electronics Engineering from Universities of Benin and Federal University of Technology Owerri respectively.",
      fullText:
        "Eberechukwu Oji joined ND Western as Managing Director/Chief Executive Offier (MD/CEO) in March 2020. He has over 25 years’ experience in the Oil and Gas sector. A Fellow of the Nigerian Society of Engineers and a Chattered Engineer with The Council for the Regulation of Engineering in Nigeria, COREN armed with a Master’s in Business Administration (MBA) Warwick University, UK, a Masters in Technology (MTech) Petroleum Engineering, Curtin University, Australia, a Masters in Engineering (MEng) Electrical & Electronics Engineering and a Bachelors in Engineering (BEng) Electrical & Electronics Engineering from Universities of Benin and Federal University of Technology Owerri respectively. /nPrior to joining ND Western, his Fields of experience included: /n  • Exploration and Production Oil and Gas accountability from Reservoir to Export Point operations as Chief Operating Officer (COO), Neconde Energy Limited./n • Upstream and Midstream Oil & Gas Senior executive leadership, Operations Management of Nigerian Liquefied Natural Gas (NLNG) plant accountable for the 6 Train Operations./n  • Regional Discipline Manager for Maintenance for Shell Companies in Nigeria and Gabon./n • Asset Manager for SPDC Central Hub Asset with over 1.2bscf/d of gas production and 50kbopd oil producing facilities. /n • Major Project Management as Operations Readiness Lead for Offshore, Maintenance, HSE and Logistics in Kashagan Project, Kazakhstan. /n• Global Field Development Consultant with significant front-end field development experience with projects in the Netherlands, UK, Norway, Singapore, Australia, United States, Bangalore etc./n His fields of experience cover: Major Projects delivery, Front-end Field Development, Field Operations, Facility Maintenance, Well Intervention, Gas plant operations, Compressor station operations, Asset Management, New Business Development, Country Entry, Commercial Deal negotiation, Community Relations management, Government Relations management amongst others.",
    },
    {
      image: cooPose,
      name: "Edirin James Abamwa",
      position: "Director and COO Asset Management Team",
      text: "Edirin is a Reservoir and Software Engineer with some 32 years of practical experience. He graduated with a B.Sc. in Electrical Engineering (1977) from the University of Lagos and began his oil field career with Schlumberger in 1978 as a Wireline Logging Engineer.",
      fullText:
        "Edirin is a Reservoir and Software Engineer with some 32 years of practical experience. He graduated with a B.Sc. in Electrical Engineering (1977) from the University of Lagos and began his oil field career with Schlumberger in 1978 as a Wireline Logging Engineer./n  He joined Shell (Nigeria) in 1980 where over 20 years he acquired rich, practical oil field experiences spanning reserves estimation and administration; field development design, planning and execution; petroleum economics; field operations optimization and production analytics as well as data management and corporate information planning./n  He was pioneer Head of Field Development (2000) of Niger Delta Petroleum Resources Limited responsible for early development of the Ogbele Field, overseeing it through to first oil production in November 2005./n Edirin taught petrophysics and computing at the Shell Intensive Training Program (SITP) for graduate engineers and geoscientists (2000 – 2003) and also taught the reservoir engineering module of Shell's EP00 training program for staff./n He is a member of the Nigeria Society of Engineers, the Society of Petroleum Engineers International as well as ACM – American Computing Machinery; a US based professional society for computer scientists and engineers.",
    },
    {
      image: azfar,
      name: "Azfar Hussain",
      position: "Chief Financial Officer",
      text: "Azfar Hussain joined ND Western in January 2020./n  As Chief Financial Officer (CFO) he is responsible for Finance and Commercial strategy of the company. With over 20 years’ experience in leadership roles successfully leading capital raising at various life-cycle stages, investments and joint venture transactions. His career has spanned across multiple sectors including Energy, Infrastructure and Technology.",
      fullText:
        "Femi Balogun is a Chartered Accountant with over thirty years working experience in the finance sector./n He graduated from the University of Ibadan in 1973 with a BSc in Chemistry and Geology, and later became an Associate of the Chartered Institute of Taxation in London in 1979./n He is a member of the ACCA and ICAN. He practiced as an accountant and started working with The Shell Petroleum Development Company of Nigeria (SPDC) in 1980 as a Senior Internal Auditor. He later joined the Yinka Folawiyo Group as Group Finance Controller in 1983 till he joined the International Institute for Tropical Agriculture (IITA) as Finance Manager in 1988. In 1994 he returned to the Oil & Gas Industry and started working for Oilscan Limited in Port Harcourt as the Executive Director (Finance)./n He joined Niger Delta Exploration & Production Plc in 2003 as Group Finance Controller. He is a Fellow of the Chartered Certified Accountants London.",
    },
    {
      image: james,
      name: "James Okoro",
      position: "General Manager Operations",
      text: "James is an accomplished Oil and Gas Engineer. A graduate of Chemical Engineering from the University of Benin, he joined the Shell Petroleum Development Company in 1985 as a trainee engineer. Thereafter, he worked variously as Facilities, Terminals/Offshore and Conceptual/Appraisal Engineer prior to majoring in Project Management.",
      fullText:
        "James is an accomplished Oil and Gas Engineer. A graduate of Chemical Engineering from the University of Benin, he joined the Shell Petroleum Development Company in 1985 as a trainee engineer. Thereafter, he worked variously as Facilities, Terminals/Offshore and Conceptual/Appraisal Engineer prior to majoring in Project Management./n In 1998, he became the Head of Engineering for the Land Area of Shell's Western Division's operations. More recently, in 2008, he became the Resident/Chief Engineer for the world class Gbaran-Ubie integrated oil/gas project with a processing capacity for 1bscf/d of gas and 220,000bbls of liquids. He is a member of the Nigeria Society of Engineers (NSE). He left Shell in 2012 to join ND Western.",
    },
   
  ];

  function generateCards() {
    const cards = profileData.map((item) => (
      <ProfileComponent
        image={item.image}
        name={item.name}
        position={item.position}
        text={item.text}
        fullText={item.fullText}
      />
    ));

    return cards;
  }

  return (
    <div>
      <SecondaryHeader
        image={ceoSmall}
        heading={"Management Team"}
        greenHeader={true}
      />

      <div className="flex items-center justify-center w-full">
        <div className="">{generateCards()}</div>
      </div>
      <div className="w-full flex items-center justify-center mt-24 ">
        <h2 className="w-3/4 text-green text-3xl">Other Links</h2>
      </div>
      <div className="flex justify-center my-24">
        <div className="grid grid-cols-2 gap-6 place-items-center px-40 w-3/4">
          <LargePageButtons text={"Board of Directors"} image={chairman} />
          <LargePageButtons text={"Management Team"} image={ebereoji} />
          <LargePageButtons text={"Our People"} image={temitope} />
          <LargePageButtons text={"Life at NDW"} image={people1} />
        </div>
      </div>
    </div>
  );
}

export default ManagementTeam;
