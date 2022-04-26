import React from "react";
import ogunu from "../images/ogunu.png";
import givinggift from "../images/givinggift.png";
import governance from "../images/governance.png";

function CSRGrid() {
  return (
    <div>
      <div className="flex items-center justify-center mt-24">
        <div className="grid sm:grid-cols-6 bg-white sm:p-12 p-4 sm:gap-6 gap-2 sm:w-3/4 grid-cols-1">
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

          <div className="col-span-3">
            <p className="mt-2">
              As a modern, dynamic company operating in a rapidly evolving
              energy sector NDW recognizes the requirement to operate in a
              responsible way and to ensure that all our stakeholders are
              empowered to address environmental and social challenges.
            </p>
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
