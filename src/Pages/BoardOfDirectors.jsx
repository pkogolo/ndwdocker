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
import timi from "../images/timi.png";
import LargePageButtons from "../Components/LargePageButtons";
import ebereoji from "../images/ebereoji.jpg";
import people1 from "../images/people1.jpg";
import temitope from "../images/temitope.png";

function BoardOfDirectors() {
  const profileData = [
    {
      image: hasset1,
      name: "Mr. Samuel Dossou-Aworet",
      position: "Chairman",
      text: "Mr. Dossou-Aworet is an Advisor and Strategic Partner to several oil companies (Tullow Oil, Afren, Surestream in England, Hess in the US, Engen in South Africa, NDEP in Nigeria, etc…)./n Mr. Dossou-Aworet has over 40 years experience in the petroleum industry and holds engineering degrees from reputable European universities. He is a highly respected businessman who, since the early 1990s, has played an active role in negotiating numerous oil deals.",
      fullText:
        "Mr. Samuel Dossou-Aworet is the Founder of the Petrolin Group of companies and is the Group Chairman and CEO./n Mr. Dossou-Aworet is an Advisor and Strategic Partner to several oil companies (Tullow Oil, Afren, Surestream in England, Hess in the US, Engen in South Africa, NDEP in Nigeria, etc…) /n Mr. Dossou-Aworet has over 40 years experience in the petroleum industry and holds engineering degrees from reputable European universities. He is a highly respected businessman who, since the early 1990s, has played an active role in negotiating numerous oil deals./n Throughout his dynamic career, Mr. Dossou Aworet has been entrusted with high level positions. He has served twice as Chairman of the OPEC Board of Governors./n He is Executive Vice President of African Business Round Table (ABR) and President of ABR International Chapter. He is a Founding member of the Geneva Petroleum Club./n He is Honorary Chairman of several cultural, social and humanitarian associations.",
    },
    {
      image: chairman,
      name: "Dr. Layi Fatona",
      position: "Executive Vice Chairman",
      text: "Layi Fatona is a Petroleum Geologist with more than forty years of oil industry experience. He graduated with a Bachelor of Science Degree in Geology at the University of Ibadan (Nigeria) in 1973 and obtained both the Masters of Science and Doctorate degrees in Petroleum Geology and Sedimentology from the Royal School of Mines, Imperial College of Science, Technology and Medicine, University of London.",
      fullText:
        "Layi Fatona is a Petroleum Geologist with more than forty years of oil industry experience. He graduated with a Bachelor of Science Degree in Geology at the University of Ibadan (Nigeria) in 1973 and obtained both the Masters of Science and Doctorate degrees in Petroleum Geology and Sedimentology from the Royal School of Mines, Imperial College of Science, Technology and Medicine, University of London./n He started his career as a Review Geologist responsible for regional geological studies in the Niger Delta with The Shell Petroleum Development Company, rising through the ranks in the seven years he was there. He left to join other like minds to start up Geotrex Systems Limited (Petroleum Exploration and Production Consultants) starting as a Senior Consultant and currently retaining the position of Chairman of the Company. /n He holds other board positions across the industry. He is currently the Managing Director of Niger Delta Exploration and Production Plc. He also sits on the board of Consolidated Hallmark Insurance Plc. He is the chairman of the board of Skye Financial Services Limited. /n Layi is a staunch believer in the ability of indigenous minds to control the narrative of the Nigerian oil and gas industry. He insists that Nigerians can and should increasingly play major roles in exploring, producing and creating additional value for the country and its people from our vast oil and gas reserves./n He is a member of various professional bodies and has won several awards and recognitions over the years for his contributions to the general areas of Petroleum Engineering and Geology. He is a past President and Fellow of the Nigerian Association of Petroleum Explorationists (NAPE), a Certified Petroleum Geologist of the American Association of Petroleum Geologist (AAPG), the 6th and 2010 recipient of the prestigious highest ranking 'Aret Adams Award' of the Nigerian Association of Petroleum Explorationists, the 2012 recipient of the Nigerian Mining and Geosciences Society (NMGS) NMGS/DPR/Chief M.O. Feyide Award, and a 'Master Class Finalist' in the 2011 Ernst & Young – Entrepreneur of the Year Award series./n As an explorer, he isn't resting on his oars and continues to seek means of creating awareness, growth and local participation in the industry. He is married with children. He enjoys playing golf.",
    },
    {
      image: femiBalogun,
      name: "Femi Balogun",
      position: "Director",
      text: "Femi Balogun is a Chartered Accountant with over thirty years working experience in the finance sector./n He graduated from the University of Ibadan in 1973 with a BSc in Chemistry and Geology, and later became an Associate of the Chartered Institute of Taxation in London in 1979.",
      fullText:
        "Femi Balogun is a Chartered Accountant with over thirty years working experience in the finance sector./n He graduated from the University of Ibadan in 1973 with a BSc in Chemistry and Geology, and later became an Associate of the Chartered Institute of Taxation in London in 1979./n He is a member of the ACCA and ICAN. He practiced as an accountant and started working with The Shell Petroleum Development Company of Nigeria (SPDC) in 1980 as a Senior Internal Auditor. He later joined the Yinka Folawiyo Group as Group Finance Controller in 1983 till he joined the International Institute for Tropical Agriculture (IITA) as Finance Manager in 1988. In 1994 he returned to the Oil & Gas Industry and started working for Oilscan Limited in Port Harcourt as the Executive Director (Finance)./n He joined Niger Delta Exploration & Production Plc in 2003 as Group Finance Controller. He is a Fellow of the Chartered Certified Accountants London.",
    },
    {
      image: michel,
      name: "Michel-Ange Dossou",
      position: "Director",
      text: "Michel-Ange Dossou is Managing Director of the Petrolin Group of Companies./n He is a Chemical Engineer with over 20 years experience in the downstream and upstream sectors of the petroleum industry. He commenced his career at Hess Corporation in the US - New Jersey and Houston - where he worked in various sectors of refining processes and productions operations and rose through the ranks from Process Engineer in 1993 where he was in charge of MTBE, WTP, PTU and SWS refining units, to Senior Process & Operations Engineer and then to Deputy Operations Manager in charge of refinery economics & planning and production operations.",
      fullText:
        "Michel-Ange Dossou is Managing Director of the Petrolin Group of Companies./nHe is a Chemical Engineer with over 20 years experience in the downstream and upstream sectors of the petroleum industry. He commenced his career at Hess Corporation in the US - New Jersey and Houston - where he worked in various sectors of refining processes and productions operations and rose through the ranks from Process Engineer in 1993 where he was in charge of MTBE, WTP, PTU and SWS refining units, to Senior Process & Operations Engineer and then to Deputy Operations Manager in charge of refinery economics & planning and production operations./n  He joined Petrolin Group in 1999 to oversee the Trading activities of the Group and has since seen his areas of responsibilities expand to include Exploration and Production activities of the Group in the Middle East and Africa./n Michel-Ange is a member of several professional bodies including the American Institute of Chemical Engineers (AIChE) and the American Chemical Society (ACS).",
    },
    {
      image: abdul,
      name: "Abdulrazaq Isa",
      position: "Director",
      text: "Abdulrazaq Isa is a Co-Founder and Chairman/CEO of Waltersmith Petroman Oil Limited an Indigenous Nigerian Independent oil and gas producing company which operates the Ibigwe field in Oil Mining Lease 16 located in Imo State Nigeria.",
      fullText:
        "Abdulrazaq Isa is a Co-Founder and Chairman/CEO of Waltersmith Petroman Oil Limited an Indigenous Nigerian Independent oil and gas producing company which operates the Ibigwe field in Oil Mining Lease 16 located in Imo State Nigeria./nUnder Abdulrazaq's leadership, WALTERSMITH commenced commercial export from the field in 2008 and in 2011 participated in the consortium that acquired Shell/Total/Agip 45% interest in OML 34./n With over 30 years professional experience as a Banker and Entrepreneur, Abdulrazaq has interests in financial services and the oil and gas industry in Nigeria. He is an Alumnus of Ahmadu Bello University Zaria, Nigeria and The Lee Kuan Yew School of Public Policy at the National University of Singapore.",
    },
    {
      image: ademola,
      name: "Ademola Adeyemi-Bero",
      position: "Director",
      text: "Ademola is a seasoned E&P professional spanning over 25 years of experience in the petroleum industry working in Shell International and BG Group and has just recently taken up the role of Managing Director and CEO of FIRST Exploration & Petroleum Development Company Limited.",
      fullText:
        "Ademola is a seasoned E&P professional spanning over 25 years of experience in the petroleum industry working in Shell International and BG Group and has just recently taken up the role of Managing Director and CEO of FIRST Exploration & Petroleum Development Company Limited./n  Over the years, Ademola has acquired deep knowledge and excellent understanding of various aspects of the oil and gas business in a variety of roles, culminating as Business Director of Shell's Nigeria Joint Venture (SPDC JV) where he was responsible for the business growth and joint venture management functions of the company, VP New Business, Africa within Shell International E&P, responsible for portfolio growth in Africa as well as General & Asset Management and Chief Technical roles across a number of countries./n He is widely travelled and has a sound understanding of the Nigerian oil and gas business environment.",
    },
    {
      image: coo,
      name: "Edirin James Abamwa",
      position: "Director",
      text: "Edirin is a Reservoir and Software Engineer with some 32 years of practical experience. He graduated with a B.Sc. in Electrical Engineering (1977) from the University of Lagos and began his oil field career with Schlumberger in 1978 as a Wireline Logging Engineer.",
      fullText:
        "Edirin is a Reservoir and Software Engineer with some 32 years of practical experience. He graduated with a B.Sc. in Electrical Engineering (1977) from the University of Lagos and began his oil field career with Schlumberger in 1978 as a Wireline Logging Engineer./nHe joined Shell (Nigeria) in 1980 where over 20 years he acquired rich, practical oil field experiences spanning reserves estimation and administration; field development design, planning and execution; petroleum economics; field operations optimization and production analytics as well as data management and corporate information planning./n He was pioneer Head of Field Development (2000) of Niger Delta Petroleum Resources Limited responsible for early development of the Ogbele Field, overseeing it through to first oil production in November 2005./n Edirin taught petrophysics and computing at the Shell Intensive Training Program (SITP) for graduate engineers and geoscientists (2000 – 2003) and also taught the reservoir engineering module of Shell's EP00 training program for staff./n  He is a member of the Nigeria Society of Engineers, the Society of Petroleum Engineers International as well as ACM – American Computing Machinery; a US based professional society for computer scientists and engineers.",
    },
    {
      image: timi,
      name: "Titi Omisore",
      position: "Director",
      text: "Titi Omisore graduated with a BA (Political Science), and an LLB from the University of Illinois, Champaign Urbana, and the University of Buckingham respectively. She thereafter, obtained her BL from the Nigerian Law School.",
      fullText:
        "Titi Omisore graduated with a BA (Political Science), and an LLB from the University of Illinois, Champaign Urbana, and the University of Buckingham respectively. She thereafter, obtained her BL from the Nigerian Law School./n She started her working career with Strachan Partners in 1993. In 1999 she attended Kings College, University of London where she obtained a Master's degree in Tax Law. Ms. Omisore returned to Strachan Partners where she was made a Partner, before joining Niger Delta Exploration and Production Plc in 2001. She is currently the company secretary and Group Legal Adviser for Niger Delta Exploration & Production Plc.",
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
        image={chairman}
        heading={"Board of Directors"}
        greenHeader={true}
      />

      <div className="flex items-center justify-center w-full">
        <div className="">{generateCards()}</div>
      </div>
      <div className="w-full flex items-center justify-center mt-24 ">
        <h2 className="w-3/4 text-green text-3xl">Other Links</h2>
      </div>
      <div className="flex justify-center my-24">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 place-items-center px-40 ">
          <LargePageButtons
            text={"Board of Directors"}
            image={chairman}
            link={"/about/human_assets/board_of_directors"}
          />
          <LargePageButtons
            text={"Management Team"}
            image={ebereoji}
            link={"/about/human_assets/management_team"}
          />
          <LargePageButtons
            text={"Our People"}
            image={temitope}
            link={"/about/human_assets/our_people"}
          />
          <LargePageButtons
            text={"Life at NDW"}
            image={people1}
            link={"/about/human_assets/life_at_ndw"}
          />
        </div>
      </div>
    </div>
  );
}

export default BoardOfDirectors;
