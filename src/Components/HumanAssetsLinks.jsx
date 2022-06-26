import React from "react";
import chairman from "../images/chairman2.png";
import LargePageButtons from "../Components/LargePageButtons";
import ebereoji from "../images/ebereoji.jpg";
import people1 from "../images/our_people.jpg";
    ;

function HumanAssetsLinks() {
  return (
    <div>
      {" "}
      <div className="w-full flex items-center justify-center mt-24 ">
        <h2 className="w-3/4 text-green text-3xl">Other Links</h2>
      </div>
      <div className="flex justify-center my-24">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 place-items-center lg:px-40">
          <LargePageButtons
            text={"Board of Directors"}
            image={chairman}
            link={"/about/human_assets/board_of_directors"}
          />
          <LargePageButtons
            text={"Management Team"}
            image={ebereoji}
            link={"/about/human_assets/management_team"}
          />
          <LargePageButtons
            text={"Our People"}
            image={temitope}
            link={"/about/human_assets/our_people"}
          />
          <LargePageButtons
            text={"Life at NDW"}
            image={people1}
            link={"/about/life_at_NDWestern"}
          />
        </div>
      </div>
    </div>
  );
}

export default HumanAssetsLinks;
