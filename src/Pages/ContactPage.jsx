import React from "react";

import FormattedParagraph from "../Components/FormattedParagraph";
import Map from "../Components/Map";
import HeaderTwo from "../Components/HeaderTwo";

function ContactPage() {
  const headerImage =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658606040/NDWESTERN-MEDIA/images/nog_d4bj64.jpg";

  return (
    <div>
      <HeaderTwo
        pageText={"Reach out to us"}
        image={headerImage}
        pageName={"Contact"}
      />

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-start my-24">
        <div className="w-full lg:p-12 md:p-4 p-4">
          <Map />
        </div>
        <div className="lg:p-12 md:p-4 p-4">
          <h2 className="text-green text-3xl font-bold sm:ml-16 ml-8">Lagos</h2>
          <FormattedParagraph
            paragraph={
              "25 Babatunde Jose Road, Victoria Island, Lagos/n +234 909 6996 102,     +234 909 6996 104 /n info@ndwestern.com"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
