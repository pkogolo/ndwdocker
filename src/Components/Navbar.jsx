import React, { useState } from "react";
import SVGIcons from "./SVGIcons";
import { NavLink } from "react-router-dom";
import Logo from "../images/ndwesternlogo.png";
import oilman from "../images/oilasset1.png";
import people1 from "../images/people1.jpg";
import careers from "../images/careers.png";
import careersGroup from "../images/careersGroup.png";
import nigerDelta from "../images/nigerDelta.png";
import towers from "../images/towers.jpg";
import house from "../images/House.jpg";
import pipeAsset from "../images/pipe-asset.jpg";
import edjeba from "../images/edjeba.jpg";
import drilling from "../images/drilling.png";
import ugheliEast from "../images/ughelieast.png";
import ugheliWest from "../images/ugheliWest.png";
import warriRiver from "../images/warririver.png";
import hasset1 from "../images/hassests1.png";
import femiBalogun from "../images/femibalogun.png";
import michel from "../images/michel.png";
import abdul from "../images/abdul.png";
import ademola from "../images/ademola.png";
import coo from "../images/coo.png";
import cooPose from "../images/coo.jpg";
import timi from "../images/timi.png";
import Map from "./Map";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("HOME");

  const goHome = () => {
    setSelectedMenu("HOME");
    setOpen(false);
  };

  return (
    <div className="bg-white p-4 px-8 flex justify-between fixed z-40 w-full drop-shadow-xl">
      <Link
        to={"/"}
        style={{ backgroundImage: `url(${Logo})` }}
        className="logo w-[194px] h-[64px]"
      ></Link>

      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="hamburger cursor-pointer"
      >
        {" "}
        <SVGIcons type={"HAMBURGER"} />
      </div>

      {open && (
        <div className="bg-[#0A4D2A] w-full h-screen lg:flex md:hidden hidden fixed top-0 left-0">
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="absolute top-2 right-2"
          >
            <SVGIcons type={"CLOSE"} />
          </div>
          <div className="w-full">
            <ul className="text-white p-20 w-full cursor-pointer flex flex-col ">
              <div
                onClick={goHome}
                className="border-b w-full flex border-[#41D958] text-5xl font-bold  text-white hover:bg-[#47A942]"
              >
                <NavLink className={"w-full p-6"} to={"/"}>
                  Home
                </NavLink>
              </div>
              <li
                onClick={() => setSelectedMenu("ABOUT-US")}
                className="border-b w-full border-[#41D958] text-5xl font-bold p-6 text-white hover:bg-[#47A942]"
              >
                About Us
              </li>
              <li
                onClick={() => setSelectedMenu("OPERATIONS")}
                className="border-b w-full border-[#41D958] text-5xl font-bold p-6 text-white hover:bg-[#47A942]"
              >
                Operations
              </li>
              <li
                onClick={() => setSelectedMenu("CAREERS")}
                className="border-b w-full border-[#41D958] text-5xl font-bold p-6 text-white hover:bg-[#47A942]"
              >
                Careers
              </li>
              <li
                onClick={() => setSelectedMenu("NEWS")}
                className="border-b w-full border-[#41D958] text-5xl font-bold p-6 text-white hover:bg-[#47A942]"
              >
                News and Lifestyle
              </li>
              <li
                onClick={() => setSelectedMenu("CONTACT")}
                className="border-b w-full border-[#41D958] text-5xl font-bold p-6 text-white hover:bg-[#47A942]"
              >
                Contact us
              </li>
            </ul>
          </div>
          <div className="h-full w-full  p-24">
            {selectedMenu === "ABOUT-US" && (
              <ul className="h-full relative w-full bg-[#47A942] p-6 cursor-pointer flex flex-col">
                <NavLink
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={"/about"}
                  className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
                >
                  Core Values
                </NavLink>
                <NavLink
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={"/about/HSE"}
                  className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
                >
                  HSE
                </NavLink>
                <NavLink
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={"/about/ESG"}
                  className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
                >
                  ESG
                </NavLink>

                <NavLink
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={"/about/human_assets"}
                  className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
                >
                  Human Assets
                </NavLink>

                <div className="grid gap-6 grid-cols-3 px-16 absolute bottom-10  left-0 w-full">
                  <div
                    style={{ backgroundImage: `url(${pipeAsset})` }}
                    className="w-full h-[130px] w-[130px] bg-cover"
                  ></div>
                  <div
                    style={{ backgroundImage: `url(${timi})` }}
                    className="w-full h-[130px] w-[130px] bg-cover"
                  ></div>
                  <div
                    style={{ backgroundImage: `url(${drilling})` }}
                    className="w-full h-[130px] w-[130px] bg-cover"
                  ></div>
                </div>
              </ul>
            )}
            {selectedMenu === "OPERATIONS" && (
              <ul className="h-full relative w-full bg-[#47A942] p-6 cursor-pointer flex flex-col">
                <NavLink
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={"/operations"}
                  className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
                >
                  Overview
                </NavLink>
                <NavLink
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={"/operations/our_assets"}
                  className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
                >
                  Our Assets
                </NavLink>
                <NavLink
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={"/operations/production"}
                  className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
                >
                  Production
                </NavLink>
                <NavLink
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={"/operations/exploration"}
                  className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
                >
                  Exploration
                </NavLink>

                <div className="grid gap-6 grid-cols-3 px-16 absolute bottom-10  left-0 w-full">
                  <div
                    style={{ backgroundImage: `url(${oilman})` }}
                    className="w-full h-[130px] w-[130px] bg-cover"
                  ></div>
                  <div
                    style={{ backgroundImage: `url(${warriRiver})` }}
                    className="w-full h-[130px] w-[130px] bg-cover"
                  ></div>
                  <div
                    style={{ backgroundImage: `url(${ugheliEast})` }}
                    className="w-full h-[130px] w-[130px] bg-cover"
                  ></div>
                </div>
              </ul>
            )}
            {selectedMenu === "CAREERS" && (
              <ul className="h-full relative w-full bg-[#47A942] p-6 cursor-pointer flex flex-col relative">
                <NavLink
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={"/careers"}
                  className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
                >
                  Careers at NDW
                </NavLink>

                <div className="grid gap-6 grid-cols-3 px-16  absolute bottom-10 left-0 w-full">
                  <div
                    style={{ backgroundImage: `url(${coo})` }}
                    className="w-full h-[130px] w-[130px] bg-cover"
                  ></div>
                  <div
                    style={{ backgroundImage: `url(${abdul})` }}
                    className="w-full h-[130px] w-[130px] bg-cover"
                  ></div>
                  <div
                    style={{ backgroundImage: `url(${careersGroup})` }}
                    className="w-full h-[130px] w-[130px] bg-cover"
                  ></div>
                </div>
              </ul>
            )}
            {selectedMenu === "CONTACT" && (
              <ul className="h-full relative w-full bg-[#47A942] p-6 cursor-pointer flex flex-col relative">
                <NavLink
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={"/contact"}
                  className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
                >
                  Contact us
                </NavLink>

                <div className="absolute bottom-5 left-0 w-full flex items-center justify-center">
                  <div className=" border border-white flex items-center justify-center p-2">
                    <Map />
                  </div>
                </div>
              </ul>
            )}
          </div>
        </div>
      )}

      {open && (
        <div
          className={
            "w-full h-screen lg:hidden fixed top-0 right-0 bg-[#0A4D2A]"
          }
        >
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="absolute top-2 right-2 z-30"
          >
            <SVGIcons type={"CLOSE"} />
          </div>
          <ul
            className={
              !hidden
                ? "text-white p-4 h-screen w-full cursor-pointer flex flex-col "
                : "text-white p-4 hidden h-screen w-full cursor-pointer flex flex-col "
            }
          >
            <div
              onClick={goHome}
              className="border-b w-full flex border-[#41D958] text-4xl font-bold  hover:bg-[#47A942]"
            >
              <NavLink className={"w-full px-2 py-8"} to={"/"}>
                Home
              </NavLink>
            </div>
            <li
              onClick={() => {
                setSelectedMenu("ABOUT-US");
                setHidden(true);
              }}
              className="border-b w-full border-[#41D958] text-4xl font-bold py-8 px-2  text-white hover:bg-[#47A942]"
            >
              About Us
            </li>
            <li
              onClick={() => {
                setSelectedMenu("OPERATIONS");
                setHidden(true);
              }}
              className="border-b w-full border-[#41D958] text-4xl font-bold py-8 px-2  text-white hover:bg-[#47A942]"
            >
              Operations
            </li>
            <li
              onClick={() => setOpen(false)}
              className="border-b w-full border-[#41D958] text-4xl font-bold py-8 px-2  text-white hover:bg-[#47A942]"
            >
              <NavLink className={"w-full px-2 py-8"} to={"/careers"}>
                Careers
              </NavLink>
            </li>
            <li
              onClick={() => setSelectedMenu("NEWS")}
              className="border-b w-full border-[#41D958] text-4xl font-bold py-8 px-2  text-white hover:bg-[#47A942]"
            >
              News and Lifestyle
            </li>
            <li
              onClick={() => setOpen(false)}
              className="border-b w-full border-[#41D958] text-4xl font-bold py-8 px-2  text-white hover:bg-[#47A942]"
            >
              <NavLink className={"w-full px-2 py-8"} to={"/contact"}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          {selectedMenu === "ABOUT-US" && hidden == true && (
            <ul className="h-screen fixed relative w-full bg-[#47A942] p-6 cursor-pointer flex flex-col">
              <NavLink
                onClick={() => {
                  setOpen(false);
                  setHidden(false);
                }}
                to={"/about"}
                className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
              >
                Core Values
              </NavLink>
              <NavLink
                onClick={() => {
                  setOpen(false);
                  setHidden(false);
                }}
                to={"/about/HSE"}
                className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
              >
                HSE
              </NavLink>
              <NavLink
                onClick={() => {
                  setOpen(false);
                  setHidden(false);
                }}
                to={"/about/ESG"}
                className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
              >
                ESG
              </NavLink>

              <NavLink
                onClick={() => {
                  setOpen(false);
                  setHidden(false);
                }}
                to={"/about/human_assets"}
                className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
              >
                Human Assets
              </NavLink>
            </ul>
          )}

          {selectedMenu === "OPERATIONS" && hidden == true && (
            <ul className="h-screen relative w-full bg-[#47A942] p-6 cursor-pointer flex flex-col">
              <NavLink
                onClick={() => {
                  setOpen(false);
                  setHidden(false);
                }}
                to={"/operations"}
                className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
              >
                Overview
              </NavLink>
              <NavLink
                onClick={() => {
                  setOpen(false);
                  setHidden(false);
                }}
                to={"/operations/our_assets"}
                className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
              >
                Our Assets
              </NavLink>
              <NavLink
                onClick={() => {
                  setOpen(false);
                  setHidden(false);
                }}
                to={"/operations/production"}
                className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
              >
                Production
              </NavLink>
              <NavLink
                onClick={() => {
                  setOpen(false);
                  setHidden(false);
                }}
                to={"/operations/exploration"}
                className="border-b hover:text-[#0A4D2A] w-full border-[#41D958] text-3xl py-8 text-white"
              >
                Exploration
              </NavLink>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
