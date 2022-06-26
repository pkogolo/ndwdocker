import React from "react";

function InstagramCard({ image, title, category, link }) {
  return (
    <div className="w-[300px] p-4 h-[240px] rounded-lg border border-green-600 ">
      <a href={link} target="_blank">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="image bg-cover bg-center h-full w-full"
        ></div>
      </a>
    </div>
  );
}

export default InstagramCard;
