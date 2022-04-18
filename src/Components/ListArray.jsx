import React from "react";

function ListArray({ listArray }) {
  return (
    <div className="pl-20 pr-6">
      {" "}
      <ul className="my-8">
        {listArray.map((item) => (
          <li className="mt-4 list-disc">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListArray;
