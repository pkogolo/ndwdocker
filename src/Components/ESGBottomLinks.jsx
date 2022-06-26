import React from "react";
import LargePageButtons from "./LargePageButtons";
import edjeba from "../images/edjeba.png";
import house from "../images/house.jpg";
import towers from "../images/towers.jpg";
   

function ESGBottomLinks() {
  return (
    <div>
      <div className="w-full flex items-center justify-center mt-24 ">
        <h2 className="w-3/4 text-green text-3xl">Other Links</h2>
      </div>
      <div className="flex justify-center my-24">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 place-items-center lg:px-40">
          <LargePageButtons
            text={"ESG Overview"}
            image={edjeba}
            link={"/about/ESG"}
          />
          <LargePageButtons
            text={"ESOHS MS Framework"}
            image={house}
            link={"/about/ESG/ESOHS"}
          />
          <LargePageButtons
            text={"Reducing Scope 1 and 2 Emmissions"}
            image={towers}
            link={"/about/ESG/approach_to_reducing_emmissions"}
          />
          <LargePageButtons text={""} image={nigerDelta} arrow={"none"} />
        </div>
      </div>
    </div>
  );
}

export default ESGBottomLinks;
