import React, { useState } from "react";
import Button from "./Button";

function Popup() {
  const [open, setOpen] = useState(true);
  let [count, setCount] = useState(0);
  return (
    <div className="fixed bottom-0 w-full flex items-center justify-center">
      {open == true && count < 1 ? (
        <div className=" bg-[#eeeeee] w-3/4 p-4">
          <p>
            By clicking “Accept all cookies”, you agree to the storing of
            optional cookies on your device to enhance site navigation, analyze
            site usage, and assist in our marketing efforts. Please checkout out
            our privacy policy page to view how we store and use your data. To
            do this kindly click on the "View our cookie policy" button below.
          </p>
          <div className="flex justify-center mt-4">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 place-items-center  w-3/4 ">
              <div
                onClick={() => {
                  setOpen(false);
                  setCount((count += 1));
                }}
              >
                <Button
                  text={"View our Cookie Policy"}
                  itemlink={"/privacy_policy"}
                />
              </div>
              <div
                onClick={() => {
                  setOpen(false);
                  setCount((count += 1));
                  console.log(count);
                }}
              >
                <Button text={"Accept Cookies"} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Popup;
