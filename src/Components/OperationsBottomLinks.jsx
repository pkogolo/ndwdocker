import React from "react";
import pipes from "../images/pipes.jpg";
import LargePageButtons from "../Components/LargePageButtons";
import nigerDelta from "../images/nigerDelta.png";
import towers from "../images/towers.jpg";
import house from "../images/House.jpg";


function OperationsBottomLinks() {
  return (
    <div>
      {" "}
      <div className="w-full flex items-center justify-center mt-24 ">
        <h2 className="w-3/4 text-green text-3xl">Other Links</h2>
      </div>
      <div className="flex justify-center my-24">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 place-items-center lg:px-40">
          <LargePageButtons
            text={"Oil & Gas Assets"}
            image={pipes}
            link={"/operations/oil_and_gas_assets"}
          />
          <LargePageButtons
            text={"Non Oil & Gas Assets"}
            image={house}
            link={"/operations/non_oil_and_gas_assets"}
          />
          <LargePageButtons
            text={"Production"}
            image={towers}
            link={"/operations/production"}
          />
          <LargePageButtons
            text={"Exploration"}
            image={nigerDelta}
            link={"/operations/exploration"}
          />
        </div>
      </div>
    </div>
  );
}

export default OperationsBottomLinks;
