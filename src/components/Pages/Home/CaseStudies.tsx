import { useAllPrismicDocumentsByType } from "@prismicio/react";
import React, { useContext, useEffect } from "react";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import * as prismicR from "@prismicio/richtext";
import Aos from "aos";
import CasePart from "../../CaseStudies/HomeCase";
import { CaseStudiesContext } from "../../Context/Context";

const CaseStudies = () => {
  const CaseBanner = useContext(CaseStudiesContext);

  return (
    <React.Fragment>
      <div
        id="rs-blog"
        className="rs-blog main-home pb-10 pt-30 md-pt-20 md-pb-20"
      >
        <div className="container">
          <SectionTitle
            sectionClass="sec-title3 text-center mb-50"
            subtitleClass="sub-title"
            titleClass="title"
            AnimationTitle="fade-down"
            delayTitle="50"
            duration="1800"
            title={
              CaseBanner
                ? CaseBanner?.body[7]?.primary?.case_main_title[0].text
                : "Latest Case Studies"
            }
          />
          <CasePart />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CaseStudies;
