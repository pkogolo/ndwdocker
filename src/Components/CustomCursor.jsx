import React, { useState, useEffect } from "react";

function CustomCursor() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });
  return (
    <div
      style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
      className="cursor lg:grid md:hidden hidden sm:hidden"
    >
    </div>
  );
}

export default CustomCursor;
