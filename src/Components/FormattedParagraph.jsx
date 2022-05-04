import React from "react";

function FormattedParagraph({ title, number, paragraph, addendum }) {
  return (
    <div className="lg:w-3/4 md:w-11/12 w-full px-4">
      <div className="flex sm:flex-row flex-col  mt-6 items-center ">
        {number && (
          <div className="border mr-4 rounded-full border-gray-500 p-2 px-4 sm:my-0 my-8">
            {number}
          </div>
        )}
        <div className="font-bold">{title}</div>
      </div>

      {paragraph && (
        <div>
          {paragraph.split("/n").map((item) => (
            <p className="mt-4 sm:ml-14 ml-4">{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default FormattedParagraph;
