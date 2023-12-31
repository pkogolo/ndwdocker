import React from "react";
import FormattedParagraph from "../Components/FormattedParagraph";
import ListArray from "../Components/ListArray";
import SecondaryHeader from "../Components/SecondaryHeader";
import LowerBanner from "../Components/LowerBanner";

function ViolationsOfEthicalStandards() {
  const image1 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605927/NDWESTERN-MEDIA/images/LIFEATNDW/landw9_fducux.jpg";
  const image2 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605923/NDWESTERN-MEDIA/images/LIFEATNDW/landw11_oxabbb.jpg";
  const image4 =
    "https://res.cloudinary.com/ndwestern/image/upload/q_auto:best/v1658605934/NDWESTERN-MEDIA/images/LIFEATNDW/landw12_kqvcfe.jpg";

  const array = [
    {
      page: "Life at ND Western",
      link: "/about/life_at_NDWestern",
    },
    { page: "Careers", link: "/careers" },
    {
      page: "Ethical Standards",
      link: "/about/code_of_business_conduct/ethical_standards",
    },
    {
      page: "Violation of Ethical Standards",
      link: "/about/code_of_business_conduct/violations_of_ethical_standards",
    },
    {
      page: "Our Code of Business Conduct",
      link: "/about/code_of_business_conduct",
    },
    { page: "CSR", link: "/about/csr" },
  ];
  return (
    <div>
      <SecondaryHeader
        imageArray={[image1, image4, image2]}
        heading={"Violations of Ethical Standards"}
      />

      <div className="sm:mt-24 mt-10 flex items-center flex-col justify-center w-full ">
        <div className="sm:w-3/4 w-full flex flex-col items-center">
          {" "}
          <FormattedParagraph
            title={"Reporting Known or Suspected Violations"}
            number={1}
            paragraph={
              "It is the responsibility of every Obliged Person to aid the Company in unearthing and addressing violations of this Code. You should talk to supervisors, managers or the Legal Department about known or suspected illegal or unethical behavior./n ND Western absolutely abjures any kind of retaliation against anyone for making a report in good faith or participating in any investigation into reports of violations of this Code or other unsavory or illegal conduct. Retaliation is defined as any adverse action taken against an employee because he or she exercised his or her duty to assist the company in promoting adherence to this Code. A few examples are:"
            }
          />
          <div className="flex justify-start sm:w-1/2 w-full ">
            <ListArray
              listArray={[
                "Creating an uncomfortable or hostile work environment",
                "Decreasing or marginalizing responsibilities or reporting relationships",
                "Transferring an employee",
              ]}
            />
          </div>
          <FormattedParagraph
            title={"Accountability for Violations."}
            number={2}
            paragraph={
              "If the Company's investigations determine that this Code has been violated, either directly, by failure to report a violation, or by withholding information related to a violation, the offending Obliged Person may be disciplined for non-compliance with penalties up to and including removal from office or dismissal. Such penalties may include written notices to the individual involved that a violation has been determined, censure by the Human Resources Department, demotion or re-assignment of the individual involved and suspension with or without pay or benefits. /n Violations of this Code may also constitute violations of law and may result in criminal penalties and civil liabilities for the offending Obliged Person and the Company./n All Obliged Persons are expected to cooperate in internal investigations of misconduct. /n Because we cannot anticipate every situation that will arise, it is important that we have a way to approach a new question or problem. These are the steps to keep in mind:"
            }
          />
          <div className="flex justify-start xl:w-3/4 lg:w-3/4 md:w-full w-full">
            <ListArray
              listArray={[
                "Make sure you have all the facts. In order to reach the right solutions, we must be as informed as possible.",
                "Ask yourself: What specifically am I being asked to do? Does it seem unethical or improper? Use your judgment and common sense. If something seems unethical or improper, it probably is.",
                "Clarify your responsibility and role. In most situations, there is shared responsibility. Are your colleagues informed? It may help to get others involved and discuss the problem.",
                "Discuss the problem with your supervisor. This is the basic guidance for all situations. In many cases, your supervisor will be more knowledgeable about the questions, and he or she will appreciate being consulted as part of the decision-making process.",
                "Seek help from Company resources. In rare cases where it would be inappropriate or uncomfortable to discuss an issue with your supervisor, or where you believe your supervisor has given you an inappropriate answer, discuss it locally with your human resources manager or the chief legal officer.",
                "You may report ethical violations in confidence without fear of retaliation. If your situation requires that your identity be kept secret, your anonymity will be protected to the maximum extent consistent with the Company's legal obligations. The Company in all circumstances prohibits retaliation of any kind against those who report ethical violations in good faith.",
                "Ask first, act later. If you are unsure of what to do in any situation, seek guidance before you act.",
              ]}
            />
          </div>
        </div>
      </div>

      <div className="">
        <LowerBanner linkArray={array} image={image4} />
      </div>
    </div>
  );
}

export default ViolationsOfEthicalStandards;
