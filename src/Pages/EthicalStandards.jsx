import React from "react";
import FormattedParagraph from "../Components/FormattedParagraph";
import ListArray from "../Components/ListArray";
import LargePageButtons from "../Components/LargePageButtons";
import groupengineers from "../images/groupengineers.jpg";
import nog from "../images/nog.jpg";
import SecondaryHeader from "../Components/SecondaryHeader";
import LowerBanner from "../Components/LowerBanner";
import image1 from "../images/ABOUT/about1.jpg";
import image2 from "../images/ABOUT/about2.jpg";
import image3 from "../images/ABOUT/about3.jpg";

function EthicalStandards() {
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
        imageArray={[image1, image2, image3]}
        heading={"Ethical Standards"}
      />

      <div className="my-24 flex items-center flex-col justify-center w-full ">
        <div className="sm:w-3/4 w-full flex flex-col items-center">
          {" "}
          <FormattedParagraph
            title={"Conflicts of Interest."}
            number={1}
            paragraph={
              "A conflict of interest exists when a person's private interest interferes in any way with the interests of the Company. A conflict can arise when an Obliged Person takes actions or has interests that may make it difficult to perform his or her work for the Company objectively and effectively. Conflicts of interest may also arise when an Obliged Person receives improper personal benefits as a result of his or her position in the Company. /n An Obliged Person should avoid transactions, commitments and other activities that are not in ND Western's best interests or that could involve a conflict between the Obliged Person's personal interests and the interests of ND Western, or that could involve a conflict in relation to the bid, award or administration of any contract or service to be provided by third parties to the Company. It would be a particularly uphill task to list every activity that could constitute a conflict of interest herein, but it is almost certainly a conflict of interest for an Obliged Person to work simultaneously for a competitor, customer or supplier./n Conflicts of interest may not always be obvious, so if you have a question, you should consult with your supervisor or manager or, if circumstances warrant, the chief legal officer of the Company. An Obliged Person who becomes aware of a conflict or potential conflict should bring it to the attention of a supervisor, manager or other appropriate personnel."
            }
          />
          <FormattedParagraph
            title={"Corporate Opportunities"}
            number={2}
            paragraph={
              "Obliged Persons are prohibited from taking for themselves opportunities that are discovered through the use of corporate property, information or position, without the consent of the Board of Directors of the Company. No Obliged Person may use corporate property, information or position for improper personal gain, or may compete with ND Western directly or indirectly."
            }
          />
          <FormattedParagraph
            title={"Fair Dealing"}
            number={3}
            paragraph={
              "The drive by ND Western to outperform its competition can only be achieved through fair and honest means. Obliged Persons shall act at all times in good faith, with due care, and shall engage only in fair and open competition, by treating ethically competitors, suppliers, customers, contractors and colleagues. Stealing proprietary information, possessing trade secret information that was obtained without the owner's consent, or inducing such disclosures by past or present employees of other companies is prohibited. /n No Obliged Person should take unfair advantage of anyone through manipulation, concealment, abuse of privileged information, misrepresentation of material facts, or any other unfair or underhand practice."
            }
          />
          <FormattedParagraph
            title={"Gifts and Entertainment"}
            number={4}
            paragraph={
              "In dealings with vendors, contractors, suppliers and other third parties (including representatives of government agencies), it is important to adhere to sound business practices that will not foist on an Obliged Person the notion of being indebted or obligated to any such third parties. It should be understood that the purpose of business entertainment and gifts in dealings with such third parties is to create good will and sound working relationships, not to exert improper influence or to gain an unfair advantage. No gift or entertainment should ever be offered or accepted by an Obliged Person unless it is:"
            }
          />
          <div className="flex justify-start ">
            <ListArray
              listArray={[
                "Consistent with customary business practices.",
                "Not excessive in value.",
                "Not construed as a bribe or payoff and",
                "Not violating any laws or regulations.",
              ]}
            />
          </div>
          <FormattedParagraph
            paragraph={
              "Gifts or payments may not be offered or given on behalf of the Company to any government official, political party or candidate for public office. Such payments may be in violation of federal law and could result in the imposition of fines on the Company or imprisonment of the affected Obliged Person, or both. Obliged Persons should discuss with their supervisors, managers or other appropriate personnel about any gifts which they think may be inappropriate."
            }
          />
          <FormattedParagraph
            title={"Confidentiality"}
            number={5}
            paragraph={
              "Obliged Persons must maintain the confidentiality of confidential information entrusted to them, except when disclosure is authorized by the chief legal officer of the Company or required by laws or regulations, as may be advised by the Legal Department./n Confidential information includes all non-public information of ND Western that might be of use to competitors or harmful to the Company or its customers if disclosed. Such information includes but is not limited to financial information, business projections, oil and gas reserves, information on new wells, geologic prospects developed internally, drilling plans and results, and personnel records. It also includes information about suppliers and customers, and information that the said suppliers and customers have entrusted to the Company. /n The obligation to preserve confidential information continues even after employment ends or directorship ceases."
            }
          />
          <FormattedParagraph
            title={"Protection and Proper Use of Company Assets"}
            number={6}
            paragraph={
              "All Obliged Persons should endeavor to protect the Company's assets and ensure their efficient use. Theft, carelessness, and waste have a direct impact on the Company's profitability and it is a duty of everyone to keep an eye on the bottom-line. Any suspected incident of fraud or theft should be immediately reported for investigation. /n The Company's equipment should not be used for non-Company business, though incidental personal use is permitted. With particular regard to electronic media and services including computer systems, the Company e-mail system, telephones, voice mail, fax machines, on-line services, internet access, these belong to the Company and not to Obliged Persons. /n  While incidental use of these systems for personal reasons is permitted, it is prohibited to make, download or forward harassing, derogatory, obscene, defamatory, threatening or offensive remarks to other people or groups. In addition, downloading, transmitting, or creating, through the internet or otherwise, material that is offensive or illegal because it discriminates against race, sex, sexual orientation, physical condition, tribe or nationality is strictly prohibited. /n The obligation of Obliged Parties to protect the Company's assets includes its proprietary information. Proprietary information includes intellectual property such as trade secrets, patents, trademarks, and copyrights, as well as business, marketing and service plans, engineering and manufacturing ideas, designs, databases, records, salary information and any unpublished financial data and reports. Unauthorized use or distribution of this information would violate Company policy. It could also be illegal and result in civil or criminal penalties."
            }
          />
          <FormattedParagraph
            title={"Compliance with Laws, Rules and Regulations"}
            number={7}
            paragraph={
              "Obeying the law, both in letter and in spirit, is the foundation on which the Company's ethical standards are built. In conducting the business of the Company, Obliged Persons shall comply with applicable governmental laws, rules and regulations at all levels of government in the Federal Republic of Nigeria and in any jurisdiction outside Nigeria in which ND Western may do business./n Although not all Obliged Persons are expected to know the details of these laws, it behooves every Obliged Person to know enough about the applicable local, state and federal laws to determine when to seek advice from the Legal Department."
            }
          />
          <FormattedParagraph
            title={"Cooperation with Government and Regulatory Interventions"}
            number={8}
            paragraph={
              "It is the Company's policy to cooperate fully with any government or regulatory interventions in any aspects of our business. ND Western will also in a timely manner render all returns required by its regulators. In reports and documents filed with or submitted to regulators by the Company, and in other public communications made by the Company, the Obliged Persons involved in the preparation of such reports and documents (including those who are involved in the preparation of financial or other reports and the information included in such reports and documents) shall make disclosures that are full, fair, accurate, timely and understandable. Where applicable, these Obliged Persons shall provide thorough and accurate financial and accounting data for inclusion in such disclosures. /n They shall not destroy or alter any Company documents in order to evade or deflect regulatory inquisition, or knowingly conceal or falsify information, misrepresent or omit material facts with the intention of misleading the Company's independent external auditors or investors."
            }
          />
        </div>
      </div>
     
      <div className="">
        <LowerBanner linkArray={array} image={image2} />
      </div>
    </div>
  );
}

export default EthicalStandards;
