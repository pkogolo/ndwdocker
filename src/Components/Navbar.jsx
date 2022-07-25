import React, { useState, useRef, useEffect } from "react";
import SVGIcons from "./SVGIcons";
import { NavLink } from "react-router-dom";
import Logo from "../images/ndwesternlogo.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Link } from "react-router-dom";

function Navbar() {
  const [openAbout, setOpenAbout] = useState(false);
  const [openOperations, setOpenOperations] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("HOME");

  const goHome = () => {
    setSelectedMenu("HOME");
    closeNav();
  };

  let navRef = useRef(null);
  let bg = useRef(null);
  let tl = useRef();

  useEffect(() => {
    let element = navRef.current;
    let bgElement = bg.current;
    tl.current = gsap.timeline({ paused: true });

    tl.current.fromTo(
      [element, bgElement],
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        duration: 0.3,
        opacity: 1,
        ease: "power3.inOut",
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  function openNav() {
    open ? tl.current.play() : tl.current.reverse();
  }

  function closeNav() {
    tl.current.reverse();
  }

  function OpenSubMenuAbout(submemu) {
    setOpenAbout(!openAbout);
    setOpenOperations(false);
    setSelectedMenu(submemu);
  }
  function OpenSubMenuOperations(submemu) {
    setOpenOperations(!openOperations);
    setOpenAbout(false);
    setSelectedMenu(submemu);
  }

  return (
    <div className="bg-[#ffffffdf] backdrop-blur-lg p-2 px-8 flex justify-between fixed z-40 w-full drop-shadow-sm">
      <Link
        to={"/"}
        style={{ backgroundImage: `url(${Logo})` }}
        className="logo w-[150px] h-[64px] bg-contain bg-no-repeat bg-center"
      ></Link>

      <div
        onClick={() => {
          tl.current.play();
        }}
        className="hamburger cursor-pointer"
      >
        {" "}
        <SVGIcons type={"HAMBURGER"} />
      </div>

      <div
        ref={bg}
        className="lg:flex  lg:justify-end w-full h-screen fixed top-0 left-0  bg-gradient-to-r from-[#00000033]  to-[#00000033]  "
      >
        <div
          ref={navRef}
          className="bg-gradient-to-r from-[#76b852ff] to-[#47A942ef] backdrop-blur-3xl lg:w-1/2 md:w-full w-full shadow-xl h-full overflow-y-auto"
        >
          <div
            onClick={() => {
              tl.current.reverse();
            }}
            className="absolute top-2 right-2"
          >
            <SVGIcons type={"CLOSE"} />
          </div>
          <div className="w-full overflow-y-auto">
            <ul className="text-white lg:p-20 md:p-6 p-4 w-full cursor-pointer flex flex-col overflow-y-auto ">
              <div
                onClick={goHome}
                className="border-b w-full flex border-[#65B32E] text-3xl      text-white hover:bg-[#47A942]"
              >
                <NavLink className={"w-full p-6"} to={"/"}>
                  Home
                </NavLink>
              </div>
              <li
                onClick={() => OpenSubMenuAbout("ABOUT-US")}
                className="text-3xl  border-y w-full border-[#65B32E] p-6 text-white hover:bg-[#47A942]"
              >
                About Us
              </li>
              {openAbout == true && (
                <ul className="h-full border-y w-full border-[#65B32E] relative w-full p-6 cursor-pointer flex flex-col">
                  <NavLink
                    onClick={() => {
                      closeNav();
                    }}
                    to={"/about"}
                    className="hover:text-[#0A4D2A] w-full text--normal py-2 px-0 text-white"
                  >
                    About ND Western
                  </NavLink>
                  <NavLink
                    onClick={() => {
                      closeNav();
                    }}
                    to={"/about/csr"}
                    className="hover:text-[#0A4D2A] w-full text--normal py-2 px-0 text-white"
                  >
                    Our Communities
                  </NavLink>
                  <NavLink
                    onClick={() => {
                      closeNav();
                    }}
                    to={"/about/HSE"}
                    className="hover:text-[#0A4D2A] w-full text--normal py-2 px-0 text-white"
                  >
                    HSE
                  </NavLink>

                  <NavLink
                    onClick={() => {
                      closeNav();
                    }}
                    to={"/about/ESG"}
                    className="hover:text-[#0A4D2A] w-full text--normal py-2 px-0 text-white"
                  >
                    ESG
                  </NavLink>
                  <NavLink
                    onClick={() => {
                      closeNav();
                    }}
                    to={"/about/human_assets"}
                    className="hover:text-[#0A4D2A] w-full   py-2 px-0 text-white"
                  >
                    Human Assets
                  </NavLink>
                  <NavLink
                    onClick={() => {
                      closeNav();
                    }}
                    to={"/about/life_at_NDWestern"}
                    className="hover:text-[#0A4D2A] w-full   py-2 px-0 text-white"
                  >
                    Life at ND Western
                  </NavLink>
                </ul>
              )}
              <li
                onClick={() => OpenSubMenuOperations("OPERATIONS")}
                className="border-b w-full border-[#65B32E]    text-3xl     p-6 text-white hover:bg-[#47A942]"
              >
                Operations
              </li>
              {openOperations == true && (
                <ul className="h-full relative w-full  p-6 cursor-pointer flex flex-col">
                  <NavLink
                    onClick={() => {
                      closeNav();
                    }}
                    to={"/operations"}
                    className="hover:text-[#0A4D2A] w-full text--normal py-2 px-0 text-white"
                  >
                    Overview
                  </NavLink>
                  <NavLink
                    onClick={() => {
                      closeNav();
                    }}
                    to={"/operations/our_assets"}
                    className="hover:text-[#0A4D2A] w-full text--normal py-2 px-0 text-white"
                  >
                    Our Assets
                  </NavLink>
                  <NavLink
                    onClick={() => {
                      closeNav();
                    }}
                    to={"/operations/production"}
                    className="hover:text-[#0A4D2A] w-full text--normal py-2 px-0 text-white"
                  >
                    Production
                  </NavLink>
                  <NavLink
                    onClick={() => {
                      closeNav();
                    }}
                    to={"/operations/exploration"}
                    className="hover:text-[#0A4D2A] w-full text--normal py-2 px-0 text-white"
                  >
                    Exploration
                  </NavLink>
                </ul>
              )}

              <NavLink
                onClick={() => {
                  closeNav();
                }}
                to={"/careers"}
                className="border-b w-full border-[#65B32E] text-3xl  p-6 text-white hover:bg-[#47A942]"
              >
                Careers
              </NavLink>
              <li
                onClick={() => setOpen(false)}
                className="border-b w-full border-[#65B32E]    text-3xl     py-6 text-white hover:bg-[#47A942]"
              >
                <NavLink
                  onClick={() => {
                    closeNav();
                  }}
                  to={"/NDW_in_the_News"}
                  className="border-b w-full border-[#65B32E] text-3xl  p-6 text-white hover:bg-[#47A942]"
                >
                  NDW in the News
                </NavLink>
              </li>
              <NavLink
                onClick={() => {
                  closeNav();
                }}
                to={"/contact"}
                className="border-b w-full border-[#65B32E] text-3xl  p-6 text-white hover:bg-[#47A942]"
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
