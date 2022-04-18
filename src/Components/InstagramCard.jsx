import React from "react";

function InstagramCard({ image, title, category, link }) {
  return (
    <div className="w-full px-2 h-[488px] ">
      <a href={link} target="_blank">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="image bg-cover bg-center h-full w-full"
        ></div>
        {/* <div className="text bg-white">
          <p>News</p>
          <h2 className="text-[#47A942] text-2xl">
            Distinguished Contribution to the African Oil Industry Award
          </h2>
        </div> */}
      </a>
    </div>
  );
}

export default InstagramCard;
