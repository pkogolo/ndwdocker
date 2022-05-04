import React from "react";
import ogunu from "../images/ogunu.png";
import givinggift from "../images/givinggift.png";
import governance from "../images/governance.png";

function CSRGrid() {
  return (
    <div>
      <div className="flex items-center justify-center mt-24">
        <div className="grid lg:grid-cols-6 md:grid-cols-2 bg-white lg:p-12 md:p-12 p-4 lg:gap-6 gap-2 lg:w-3/4 md:w-3/4 grid-cols-1">
          <div className="w-full flex flex-col sm:col-span-1">
            <div
              style={{ backgroundImage: `url(${ogunu})` }}
              className=" sm:p-16 p-4 py-12  bg-cover bg-no-repeat"
            ></div>
            <p className=" w-full p-2 text-sm">Environmental Responsibility</p>
          </div>
          <div className="w-full flex flex-col sm:col-span-1">
            <div
              style={{ backgroundImage: `url(${givinggift})` }}
              className=" sm:p-16 p-4 py-12   bg-cover bg-no-repeat"
            ></div>
            <p className=" w-full p-2 text-sm">Social Responsibility</p>
          </div>
          <div className="w-full flex flex-col sm:col-span-1">
            <div
              style={{ backgroundImage: `url(${governance})` }}
              className=" sm:p-16 p-4 py-12  bg-cover bg-no-repeat"
            ></div>
            <p className=" w-full p-2 text-sm">Governance</p>
          </div>

          <div className="lg:col-span-3 md:col-span">
            
            <p className="mt-2">
              Emphasise ND Western's commitment to ethics and compliance with
              the law;
            </p>
            <p className="mt-2">
              Set forth basic standards of ethical and legal behavior;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSRGrid;
