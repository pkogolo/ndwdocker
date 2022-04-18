import React from "react";

function SVGIcons({ type }) {
  return (
    <div>
      {type === "HAMBURGER" && (
        <svg
          width={42}
          height={42}
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.75 17.5H5.25"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.75 10.5H5.25"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.75 24.5H5.25"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.75 31.5H5.25"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {type === "ARROW" && (
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66667 16H25.3333"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 6.6665L25.3333 15.9998L16 25.3332"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {type === "SHARP-ARROW" && (
        <svg
          width={87}
          height={18}
          viewBox="0 0 87 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M87 8.99999L72 0.339739L72 17.6602L87 8.99999ZM1.31134e-07 10.5L73.5 10.5L73.5 7.49999L-1.31134e-07 7.5L1.31134e-07 10.5Z"
            fill="white"
          />
        </svg>
      )}
      {type === "CLOSE" && (
        <svg
          width={60}
          height={60}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.9999 91.6663C73.0118 91.6663 91.6666 73.0115 91.6666 49.9997C91.6666 26.9878 73.0118 8.33301 49.9999 8.33301C26.9881 8.33301 8.33325 26.9878 8.33325 49.9997C8.33325 73.0115 26.9881 91.6663 49.9999 91.6663Z"
            stroke="#F1E4E4"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M62.5 37.5L37.5 62.5"
            stroke="#F1E4E4"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.5 37.5L62.5 62.5"
            stroke="#F1E4E4"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

export default SVGIcons;
