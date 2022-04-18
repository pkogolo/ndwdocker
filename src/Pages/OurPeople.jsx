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
import TemitopeRectangle from "../images/temitope-rectangle.png";
import oladele from "../images/oladele.png";
import adeyemi from "../images/adeyemi.png";
import ilesanmi from "../images/ilesanmi.png";
import lawrence from "../images/lawrence.png";
import omo from "../images/omo.png";
import sunday from "../images/sunday.png";

function OurPeople() {
  const profileData = [
    {
      image: adeyemi,
      name: "Adeyemi Adeniji",
      position: "Head, Geology and Geophysics",
      text: "Adeyemi graduated from the University of Ife (now Obafemi Awolowo University) Ile-Ife with a B.Sc (geology) in 1980. He started his professional career with Shell Petroleum Development Company of Nigeria (SPDC) as a geologist.",
      fullText:
        "Eberechukwu Oji joined ND Western as Managing Director/Chief Executive Offier (MD/CEO) in March 2020. He has over 25 years’ experience in the Oil and Gas sector. A Fellow of the Nigerian Society of Engineers and a Chattered Engineer with The Council for the Regulation of Engineering in Nigeria, COREN armed with a Master’s in Business Administration (MBA) Warwick University, UK, a Masters in Technology (MTech) Petroleum Engineering, Curtin University, Australia, a Masters in Engineering (MEng) Electrical & Electronics Engineering and a Bachelors in Engineering (BEng) Electrical & Electronics Engineering from Universities of Benin and Federal University of Technology Owerri respectively. /nPrior to joining ND Western, his Fields of experience included: /n  • Exploration and Production Oil and Gas accountability from Reservoir to Export Point operations as Chief Operating Officer (COO), Neconde Energy Limited./n • Upstream and Midstream Oil & Gas Senior executive leadership, Operations Management of Nigerian Liquefied Natural Gas (NLNG) plant accountable for the 6 Train Operations./n  • Regional Discipline Manager for Maintenance for Shell Companies in Nigeria and Gabon./n • Asset Manager for SPDC Central Hub Asset with over 1.2bscf/d of gas production and 50kbopd oil producing facilities. /n • Major Project Management as Operations Readiness Lead for Offshore, Maintenance, HSE and Logistics in Kashagan Project, Kazakhstan. /n• Global Field Development Consultant with significant front-end field development experience with projects in the Netherlands, UK, Norway, Singapore, Australia, United States, Bangalore etc./n His fields of experience cover: Major Projects delivery, Front-end Field Development, Field Operations, Facility Maintenance, Well Intervention, Gas plant operations, Compressor station operations, Asset Management, New Business Development, Country Entry, Commercial Deal negotiation, Community Relations management, Government Relations management amongst others.",
    },
    {
      image: oladele,
      name: "Oladele Oluwadare",
      position: "Head, Human Resources and Administration",
      text: "Oladele is a Human Resources professional with over 17 years general management experience spanning the Fast-moving consumer goods (FMCG)/Manufacturing, Management Consulting, Automobile and Agricultural Plantation, with proven record of successes in these sectors.",
      fullText:
        "Oladele is a Human Resources professional with over 17 years general management experience spanning the Fast-moving consumer goods (FMCG)/Manufacturing, Management Consulting, Automobile and Agricultural Plantation, with proven record of successes in these sectors./n Highly experienced in developing and implementing HR strategies and policies required to achieve organizational goals. His excellent strategic HR background includes; Talent Management, Resourcing, Succession Planning, Career and Change Management, Learning and Manpower development, Compensation and Benefits, Industrial and Labour relations, Strategic Business Unit (SBU) restructuring etc. /n Prior to joining ND Western he has worked as Human Resource and Administration Manager in Elizade Nigeria Limited, Technoglass Industries Limited, Lamid Consulting Company and JB Farms Limited. /n  He has an MBA in Human Resources Management from Obafemi Awolowo University, Ile Ife and a B.Sc. in Business Administration from Delta State University. He is an active member of The Chartered Institute of Personnel Management of Nigeria (CIPM). /n He is married with children.",
    },
    {
      image: ilesanmi,
      name: "Ilesanmi Obazu",
      position: "Management Accountant",
      text: "Ilesanmi has over 12 years cognate corporate accounting & financial reporting professional experience as a chartered accountant following a change in career after his voluntary retirement from the Nigerian Army.",
      fullText:
        "Ilesanmi has over 12 years cognate corporate accounting & financial reporting professional experience as a chartered accountant following a change in career after his voluntary retirement from the Nigerian Army. /n  He is a manager with hands-on expertise in a wide range of functions such as Audit, Financial Control, Compliance, Budget development & management, Tax Planning, Fixed assets management, Treasury, Financial Reporting & Strategic Planning as well as Systems implementation. /n  His professional experience cuts across Engineering, Energy services as well as the upstream sector of the oil and gas industry starting from PIVOT Engineering Ltd, Global Energy Company before joining Niger Delta Petroleum Resources Limited in 2008 as a Management Accountant a position he held until he was seconded to ND Western Limited in 2013. He has attended various local and international professional courses. He is a graduate of Accounting and a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN).",
    },
    {
      image: lawrence,
      name: "Lawrence Nwadiogbu",
      position: "Head, Petroleum Engineering",
      text: "Lawrence is a Petroleum Engineer with experience in Production Operations, Reservoir Engineering and Production Optimization. At ND Western he manages the petroleum engineering team with the objective of optimizing recovery from all the fields.",
      fullText:
        "Lawrence is a Petroleum Engineer with experience in Production Operations, Reservoir Engineering and Production Optimization. At ND Western he manages the petroleum engineering team with the objective of optimizing recovery from all the fields. /n  He has both local and international experience in the oil and gas industry, having started his career at ExxonMobil offshore facilities with subsequent work experience with EMR, Halliburton, AnkorpoinTe, Orion, and Pan Ocean Oil Corporation. /n  He has participated in a number of Integrated Field Studies, Prospect Evaluation and Field Development Plans for major E & P companies in Nigeria, which includes Mefa & Benin River reservoir modeling and simulation for Chevron. He was actively involved in the development of the Production & Network Monitoring, and Reservoir Surveillance solutions for the Agbami Deepwater i-field Project for Chevron in Houston, TX, USA. He holds both M.Sc. in Oil & Gas Engineering and B.Eng. in Petroleum Engineering. He is a member of the Society of Petroleum Engineers (SPE).",
    },
    {
      image: omo,
      name: "Omo Omorodion",
      position: "Legal Counsel",
      text: "Omo has about 19 years working experience, spanning advocacy and solicitor's practice, company secretarial practice, brand management, human resource management, administration & logistics, marketing, insurance law and practice, banking law and practice, e-payments, oil & gas law and practice.",
      fullText:
        "Omo has about 19 years working experience, spanning advocacy and solicitor's practice, company secretarial practice, brand management, human resource management, administration & logistics, marketing, insurance law and practice, banking law and practice, e-payments, oil & gas law and practice./nHe was called to the Nigerian bar in 1995, and served pupillage at the law firm of Olatunde Adejuyigbe (SAN) & Co. Thereafter he joined Cornerstone Insurance Plc in 1998 as the Legal/Corporate Affairs Officer, rising to the level of Assistant Manager and Company Secretary/Legal Adviser in 2001. He then left the company to join the Legal Department of Equitorial Trust Bank Limited (then Devcom Bank Limited) for a brief period in 2003, before returning to the insurance sector in the same year as the Head of the Corporate Services Group and Company Secretary/Legal Adviser of Consolidated Hallmark Insurance Plc (then Consolidated Risk Insurers Plc). /n Omo left Consolidated Hallmark Insurance Plc in 2008 and after another brief stint in 3Line Card Management Limited where he applied himself diligently in the card and e-payments sector, he joined Niger Delta Petroleum Resources Limited (a wholly-owned subsidiary of Niger Delta Exploration & Production Plc) in October of the same year as a Senior Legal Officer. Ever since, he has grounded himself firmly in the knowledge and practice of oil and gas law, and served meritoriously in the company. He has risen to the level of Manager and Company Secretary, and was seconded to ND Western Limited in May 2013 as the pioneer Legal Counsel.",
    },
    {
      image: sunday,
      name: "Sunday Okunbor",
      position: "Commercial Manager",
      text: "An Oil and Gas professional with over 14 years of finance and commercial experience in Shell Nigeria Gas Limited and Pan Ocean Oil Corporation. He started his career with Shell Nigeria Gas Limited as an Assistant Financial Accountant in 2000 and was promoted to the post of Treasury Accountant in 2004. Achieved First Gas in 2003 with Shell Nigeria Gas' Pressure Reduction Manifold Station (PRMS) Project at Agbara /Ota in Ogun State.",
      fullText:
        "An Oil and Gas professional with over 14 years of finance and commercial experience in Shell Nigeria Gas Limited and Pan Ocean Oil Corporation. He started his career with Shell Nigeria Gas Limited as an Assistant Financial Accountant in 2000 and was promoted to the post of Treasury Accountant in 2004. Achieved First Gas in 2003 with Shell Nigeria Gas' Pressure Reduction Manifold Station (PRMS) Project at Agbara /Ota in Ogun State./n From Shell, he moved to Pan Ocean Oil Corporation as an Account Officer to manage the company's fixed assets. He was later promoted and joined the commercial department as Senior Commercial Officer before joining ND Western as part of the pioneering staff./n He is a graduate of Economics from Delta State University, Abraka with a master's degree in Business Administration (MBA) from University of Calabar, Cross Rivers and also a Chartered Financial Consultant (CFC) with the Institute of Chartered Financial Consultants, USA.",
    },
    {
      image: temitope,
      name: "Temitope Onibudo",
      position: "Head, IT",
      text: "An experienced and certified professional delivering a wide range of information technology solutions to help ND Western improve efficiency and performance, reduce total cost of ownership and increase return on information technology investment.",
      fullText:
        "An experienced and certified professional delivering a wide range of information technology solutions to help ND Western improve efficiency and performance, reduce total cost of ownership and increase return on information technology investment./n Temitope has over 14 years of experience in project management for technology infrastructure projects, IT Service Management, Contract and procurement, Process Automation, Change Management, Service Delivery improvement, and Stakeholder Management./nTemitope has an MBA from the University of Lagos, B.Eng Electrical & Electronics Engineering from the Federal University of Technology Owerri and is PMP® and ITIL® Certified./n She has worked previously with Nigeria LNG Limited, Globacom and Accenture.",
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
        image={TemitopeRectangle}
        heading={"Our People"}
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

export default OurPeople;
