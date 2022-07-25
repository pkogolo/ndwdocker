import React from "react";
import SecondaryHeader from "../Components/SecondaryHeader";

import LegalParagraph from "../Components/LegalParagraph";
import Button from "../Components/Button";

function PrivacyPolicy() {
  const image1 =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658606043/NDWESTERN-MEDIA/images/ASSETS/asset19_pjfhzf.jpg";
  const image2 =
    "https://res.cloudinary.com/ndwestern/image/upload/v1658606048/NDWESTERN-MEDIA/images/ASSETS/asset13_lz2hsv.jpg";

  return (
    <div>
      <SecondaryHeader
        imageArray={[image1, image2]}
        heading={"Privacy Policy"}
        greenHeader={true}
      />

      <div className="flex items-center flex-col justify-center my-24">
        <LegalParagraph
          title={"1. Introduction"}
          paragraph={
            "ND Western Limited (referred to in this document as “NDW”, “the Company”, or “We/we”) values your Personal Data and we are committed to protecting your privacy whenever you interact with us. Please read this Privacy Notice (Notice) to understand our policies, processes and procedures regarding the processing of your personal data."
          }
        />
        <LegalParagraph
          title={"2. The Personal Data that we collect "}
          paragraph={
            "We collect Personal Data that you give to us, when you request for further information about our products and services, fill a form, apply for a job through our website or you subscribe to newsletters on our website. We may also automatically collect some technical information when you visit our website such as your IP address, and information about your visit, such as the pages that you viewed. This information helps us understand customer interests and helps us improve our website. When you visit our site, the pages that you look at, and a short text file called a cookie, are downloaded to your computer. By visiting and using our website, you agree to our use of cookies in line with NDW’s policies. For more details about Cookies, please read our Cookies Policy available through this link."
          }
        />
        <LegalParagraph
          title={"3. What Purpose do we use your Personal Data?"}
          paragraph={
            "We may process your Personal Data to communicate with you, and/or provide you with further information about our products and how we can serve you better, process your application for employment with NDW or to fulfill our contractual obligations with you. We may also process your Personal Data to comply with provisions of Nigerian and other applicable laws."
          }
        />
        <LegalParagraph
          title={"4. What Constitutes Your Consent?"}
          paragraph={
            "Where processing of Personal Data is based on consent, we shall obtain the requisite consent at the time of collection of the Personal Data. In this regard, you consent to the processing of your Personal Data when you access our platforms, or use our services, content, features, technologies or functions offered on our website or other digital platforms. You can withdraw your consent at any time but such withdrawal will not affect the lawfulness of processing based on consent given before its withdrawal."
          }
        />
        <LegalParagraph
          title={"5. Who do we share your Personal Data with?"}
          paragraph={
            "We respect your privacy and we limit disclosure of your Personal Data to third parties. We do not sell, give or trade any Personal Data that we obtain from you to any third party for data-mining or marketing purposes. However, we may share your Personal Data with companies within the NDW Group and service providers engaged by us to provide services to NDW subject to appropriate data security and protection. In addition, we may transfer your Personal Data out of Nigeria in line with the requirements of the Nigeria Data Protection Regulation, 2019. We may also share your information where there is a regulatory or statutory obligation to disclose such Personal Data in accordance with provisions of applicable laws."
          }
        />
        <LegalParagraph
          title={"6. Security of your Personal Data"}
          paragraph={
            "We take security of your Personal Data serious and we make every effort to keep your Personal Data secure. We have put in place technological and organizational procedures, including requiring our staff and any third parties who carry out any work on our behalf to comply with appropriate security standards in order to protect your Personal Data."
          }
        />
        <LegalParagraph
          title={"7. Retention of your Personal Data"}
          paragraph={
            "We take appropriate measures to ensure that your Personal Data is only processed for the minimum period necessary in line with the purposes set out in this Notice or as required by applicable laws, until a time it is no longer required or has no use. Once your Personal Data is no longer required, we destroy it in a safe and secure manner."
          }
        />
        <LegalParagraph
          title={"8. Your Rights"}
          paragraph={
            "NDW collects Personal Data only for the purposes identified in this Policy and such information /n cannot be reused for another purpose that is incompatible with the original purpose./n You can exercise the following rights with respect to your Personal Data with NDW:/n a) request for and access your Personal Data collected and stored by NDW;/n b) withdraw consent at any time. For example, you can unsubscribe to our newsletters;/n c) object to automated decision making;/n d) request rectification and modification of Personal Data kept by NDW;/n e) request for deletion of your Personal Data;/n  f) be informed of and entitled to provide consent prior to the processing of Personal Data for purposes other than that for which the Personal Data were collected;/n g) request that NDW restricts processing of your Personal Data; and /n h) request for information regarding any specific processing of your personal data./n If you wish to exercise any of these rights you may contact our Data Protection Officer (DPO)using the contact details provided below. You also have the right to complain to the National Information Technology Development Agency (NITDA) if you believe that we have violated your privacy rights. "
          }
        />
        <LegalParagraph
          title={"9. Changes to our Privacy Notice"}
          paragraph={
            "Due to constant changes in technology and regulatory requirements, we may need to change our privacy policies or update this Notice from time to time. You will always be able to find the most recent version of our updated privacy policy on this site."
          }
        />
        <LegalParagraph
          title={"10. Contact & Communication"}
          paragraph={
            "If you would like further information on this Notice, or to contact our DPO, you may contact us at /n ND Western Limited, 25 Babatunde Jose Road, off Adetokunbo Ademola Road, Victoria Island, Lagos, Nigeria or at dpo@ndwestern.com. "
          }
        />
      </div>
      <div className="items-center flex justify-end sm:px-40 px-4 sm:mb-24 mb-12">
        <Button text={"Back to Home Page"} itemlink={"/"} />
      </div>
    </div>
  );
}

export default PrivacyPolicy;
