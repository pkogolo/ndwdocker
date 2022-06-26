import React, { useState } from "react";
import SVGIcons from "./SVGIcons";

function TextPopup({ title, position, text, closeFunction }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ zIndex: "1000" }}
      className="h-screen bg-[#00000092] fixed top-0 left-0 w-screen h-screen w-screen flex items-center justify-center"
    >
      <div className="bg-white rounded shadow-xl lg:h-[500px] lg:w-[500px] md:h-[500px] md:w-[500px] h-[560px] w-[340px] relative p-8">
        <div
          onClick={closeFunction}
          className="absolute top-4 right-4 cursor-pointer"
        >
          {" "}
          <SVGIcons type={"CLOSE"} />
        </div>

        <div>
          <h1 className="text-2xl mb-2">{title}</h1>
          {/* <p className="text-sm">{position}</p> */}
          <div className="w-[48px] mt-2 h-[4px] rounded-full bg-green-300"></div>
          <div className="overflow-y-auto lg:h-[300px] lg:w-[420px] md:h-[300px] md:w-[420px] h-[360px] w-[300px] mt-8">
            {text.split("/n").map((item) => (
              <p className="mt-2">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextPopup;
