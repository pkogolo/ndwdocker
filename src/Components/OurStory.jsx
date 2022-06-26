import React, { useState } from "react";
import Button from "./Button";
import Lottie from "react-lottie";
import animationData from "./lotties/city.json";
import TextPopup from "./TextPopup";

function OurStory() {
  const [open, setOpen] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    speed: 2,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function closePopup() {
    setOpen(false);
  }

  return (
    <div className="xl:p-24 lg:p-16 md:p-6">
      {open && (
        <TextPopup
          closeFunction={closePopup}
          title={"Our Story"}
          text={
            "ND Western Limited (ND Western) is an independent Nigerian oil and gas exploration and production company made up of a consortium of four companies; Niger Delta Petroleum Resources Limited (NDPR), Petrolin TradingLimited (PETROLIN), FIRST Exploration & Petroleum Development OML 34 Limited and Walter-Smith Exploration and Production Limited. /n  ND Western was incorporated on 20th April, 2011 as a Special Purpose Vehicle to acquire the jointly held 45% participating interest of The Shell Petroleum Development Company of Nigeria, Total E&P Nigeria Limited and Nigerian Agip Oil Company Limited in Oil Mining Lease (OML) 34. Contracts for the transfer of the assets were exchanged on 17th June 2011, at a historic signing ceremony of the Sale and  Purchase Agreement with the NNPC/ Shell/ Total/Agip JV and the transaction completed on 1st September 2012. /n ND Western is now the holder of a 45% Participating Interest in OML 34, in an unincorporated JV with Nigerian Petroleum Development Company Limited (NPDC) that holds the remaining 55% interest previously held by its parent entity, the Nigerian National Petroleum Corporation. NPDC is the operator of the Asset./n OML 34 lies in the onshore Western Niger Delta all season land with 950 km2 area and it is strategic to the Federal Government of Nigeria's gas-to-power and domestic gas supply. /n ND Western's primary objective for the acquisition of the asset was to maximise the commercial and economic value of the full spectrum of the resources in OML 34 to include growth in oil, gas, condensate and NGLs production./n On the 15th June, 2016, ND Western and NPDC signed off an Agreement which amends certain provisions of the Joint Operating Agreement to enable both party carry out Joint Operations of the asset through an Asset Management Team (AMT) in the short and medium term, and convert the existing unincorporated joint venture ('UJV') into an incorporated joint venture ('IJV') in the long term."
          }
        />
      )}

      <div className="xl:px-40 lg:px-10 py-24 bg-gradient-to-r from-[#0A4D2A] to-[#094827] text-white">
        <h1 className="text-center mb-8 text-3xl text-[#65B32E]">Our Story</h1>
        <p className=" text-center mb-8">
          ND Western Limited ("ND Western") is an independent Nigerian oil and
          gas exploration and production company made up of a consortium of four
          companies; Niger Delta Petroleum Resources Limited (NDPR), Petrolin
          Trading Limited (PETROLIN), FIRST Exploration & Petroleum Development
          OML 34 Limited and Walter-Smith Exploration and Production Limited.
        </p>
        <p className="text-center">
          ND Western was incorporated on 20th April, 2011 as a Special Purpose
          Vehicle to acquire the jointly held 45% participating interest of The
          Shell Petroleum Development Company of Nigeria, Total E&P Nigeria
          Limited and Nigerian Agip Oil Company Limited in Oil Mining Lease
          (OML) 34. Contracts for the transfer of the assets were exchanged on
          17th June 2011, at a historic signing ceremony of the Sale and
          Purchase Agreement with the NNPC/ Shell/ Total/Agip JV and the
          transaction completed on 1st September 2012.
        </p>
        <div className="w-full flex items-center p-8 justify-center">
          <div
            onClick={() => {
              setOpen(true);
            }}
            className="w-fit"
          >
            <Button text={"Read More"} />
          </div>
        </div>

        <div className="hidden lg:grid flex w-full items-center justify-center ">
          <Lottie options={defaultOptions} height={300} width={700} speed={2} />
        </div>
      </div>
    </div>
  );
}

export default OurStory;
