import React from "react";
import HeaderMain from "../Components/HeaderMain";
import headerImage from "../images/HeaderImage.jpg";
import FormattedParagraph from "../Components/FormattedParagraph";
import Map from "../Components/Map";

function ContactPage() {
  return (
    <div>
      <HeaderMain title={"Reach out to us"} image={headerImage} />

      <div className="grid sm:grid-cols-2 grid-cols-1 place-items-start my-24">
        <div className="w-full sm:p-12 p-4">
          <Map />
        </div>
        <div className="sm:p-12 p-4">
          <h2 className="text-green text-3xl font-bold sm:ml-12 ml-8">Lagos</h2>
          <FormattedParagraph
            paragraph={
              "25 Babatunde Jose Road, Victoria Island, Lagos/n 234 1 4602602 /n ndwlagos@ndwestern.com"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
