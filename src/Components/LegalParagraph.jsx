import React from "react";

function LegalParagraph({title, paragraph}) {
  return (
    <div className="lg:w-3/4 md:w-11/12  w-full px-4 md:px-6 border-b border-gray-400 sm:py-12 py-4">
      <div className="flex mt-6 items-center ">
        
        <h2 className="text-green sm:text-3xl text-2xl">{title}</h2>
      </div>

      {paragraph && (
        <div>
          {paragraph.split("/n").map((item) => (
            <p className="mt-4 sm:ml-14 ml-2">{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default LegalParagraph;
