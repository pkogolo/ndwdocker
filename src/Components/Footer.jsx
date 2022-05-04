import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/ndwesternlogo.png";

function Footer() {
  const getDate = () => {
    let d = new Date();

    const date = d.getFullYear();

    return date;
  };

  return (
    <div className="w-full bg-[#13401A] text-white lg:px-16 md:px-8 px-4 py-6">
      <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2  border-y mt-6 py-12">
        <div>
          <h1 className="text-white text-2xl mt-8 lg:mt-0 md:mt-0 mb-8">Our Office</h1>
          <p className="text-white my-4 w-3/4">
            25 Babatunde Jose Road, Victoria Island, Lagos +234 909 6996 102,
            +234 909 6996 104
          </p>
          <p className="text-white my-4 w-3/4">info@ndwestern.com</p>
        </div>
        <div>
          <h1 className="text-2xl mb-8">Quick Links</h1>
          <ul className="grid grid-cols-1">
            <Link to={"/about"} className="mb-4">
              Our Company
            </Link>
            <Link to={"/careers"} className="mb-4">
              Careers
            </Link>
            <Link to={"/operations"} className="mb-4">
              Operations
            </Link>
            <Link to={"/news_and_lifestyle"} className="mb-4">
              News and LinkfeStyle
            </Link>
            <Link to={"/about/ESG"} className="mb-4">
              ESG
            </Link>
            <Link to={"/privacy_policy"} className=" ">
              Our Privacy Policy
            </Link>
          </ul>
        </div>
        <div className="w-full lg:mt-0 md:mt-12 mt-12">
          <h1 className="text-2xl">Connect With us</h1>

          <div className="flex mt-2">
            <a href="">
              <svg
                className="mx-2"
                width={38}
                height={38}
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_565_4)">
                  <path
                    d="M36.3688 4.74368C34.8546 5.81178 33.178 6.62871 31.4037 7.163C30.4514 6.068 29.1857 5.29189 27.7779 4.93964C26.3701 4.58739 24.8881 4.676 23.5323 5.19348C22.1766 5.71095 21.0124 6.63233 20.1973 7.833C19.3823 9.03367 18.9556 10.4557 18.975 11.9067V13.488C16.1962 13.5601 13.4427 12.9438 10.9597 11.694C8.47672 10.4442 6.34136 8.59978 4.7438 6.32493C4.7438 6.32493 -1.5812 20.5562 12.65 26.8812C9.39351 29.0917 5.51412 30.2001 1.5813 30.0437C15.8125 37.9499 33.2063 30.0437 33.2063 11.8593C33.2048 11.4189 33.1625 10.9795 33.0798 10.5469C34.6936 8.95533 35.8325 6.94591 36.3688 4.74368V4.74368Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_565_4">
                    <rect width="37.95" height="37.95" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a
              target={"_blank"}
              href="https://www.linkedin.com/company/nd-western-limited/"
            >
              <svg
                className="mx-2"
                width={36}
                height={36}
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 12C26.3869 12 28.6761 12.9482 30.364 14.636C32.0518 16.3239 33 18.6131 33 21V31.5H27V21C27 20.2044 26.6839 19.4413 26.1213 18.8787C25.5587 18.3161 24.7956 18 24 18C23.2044 18 22.4413 18.3161 21.8787 18.8787C21.3161 19.4413 21 20.2044 21 21V31.5H15V21C15 18.6131 15.9482 16.3239 17.636 14.636C19.3239 12.9482 21.6131 12 24 12V12Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 13.5H3V31.5H9V13.5Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              target={"_blank"}
              href="https://www.instagram.com/ndwesternenergy/?hl=en"
            >
              <svg
                className="mx-2"
                width={36}
                height={36}
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.5 3H10.5C6.35786 3 3 6.35786 3 10.5V25.5C3 29.6421 6.35786 33 10.5 33H25.5C29.6421 33 33 29.6421 33 25.5V10.5C33 6.35786 29.6421 3 25.5 3Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 17.0555C24.1852 18.3038 23.9719 19.5788 23.3907 20.699C22.8094 21.8192 21.8898 22.7276 20.7625 23.295C19.6352 23.8624 18.3577 24.0598 17.1117 23.8594C15.8657 23.6589 14.7147 23.0706 13.8223 22.1782C12.9299 21.2858 12.3416 20.1348 12.1412 18.8888C11.9407 17.6428 12.1381 16.3653 12.7055 15.238C13.2729 14.1107 14.1813 13.1911 15.3015 12.6098C16.4217 12.0286 17.6967 11.8153 18.945 12.0005C20.2184 12.1893 21.3973 12.7826 22.3076 13.6929C23.2179 14.6032 23.8112 15.7821 24 17.0555Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.25 9.75H26.265"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <p className="text-sm sm:w-3/4 w-full sm:mt-4 my-8">
            At ND Western, we use social media as part of our commitment to
            putting the public and our stakeholders first and to providing
            timely information on the work we do.
          </p>
        </div>
        <div className="bg-white flex items-center flex-col justify-center  lg:mt-0 md:mt-12 mt-12">
          <div
            style={{ backgroundImage: `url(${Logo})` }}
            className="logo w-[194px] h-[64px]"
          ></div>
          <iframe
            frameBorder={0}
            scrolling="no"
            height={112}
            width={260}
            allowTransparency="true"
            marginWidth={0}
            marginHeight={0}
            src="http://comrates.investing.com/index.php?pairs_ids=8833;8849;8862;&header-text-color=%23FFFFFF&curr-name-color=%230059b0&inner-text-color=%23000000&green-text-color=%232A8215&green-background=%23B7F4C2&red-text-color=%23DC0001&red-background=%23FFE2E2&inner-border-color=%23CBCBCB&border-color=%23cbcbcb&bg1=%23F6F6F6&bg2=%23ffffff&last=hide&open=hide&month=hide&change_in_percents=hide&last_update=hide"
          />

          <span
            style={{
              fontSize: "11px",
              color: "#333333",
              textDecoration: "none",
            }}
          >
            Commodities are powered by
            <a
              href="http://www.investing.com/"
              rel="nofollow"
              target="_blank"
              style={{ fontSize: "11px", color: "#06529D", fontWeight: "bold" }}
              className="underline_link"
            >
              Investing.com
            </a>
          </span>
        </div>
      </div>

      <div className="flex py-4 justify-center">
        <p>Copyright ND Western {getDate()}</p>
      </div>
    </div>
  );
}

export default Footer;
