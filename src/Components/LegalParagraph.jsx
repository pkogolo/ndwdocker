import React from "react";

function LegalParagraph({title, paragraph}) {
  return (
    <div className="w-3/4 border-b border-gray-400 py-12">
      <div className="flex mt-6 items-center ">
        
        <h2 className="text-green text-3xl">{title}</h2>
      </div>

      {paragraph && (
        <div>
          {paragraph.split("/n").map((item) => (
            <p className="mt-4 ml-14">{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default LegalParagraph;
