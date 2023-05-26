import { useAllPrismicDocumentsByType } from "@prismicio/react";
import Aos from "aos";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import SiteBreadcrumb from "../../../BreadCumb/SiteBreadcrumb";
import SinglePost from "../../../CaseStudies/SinglePost";
const items = [
  {
    src: "/caseStud1.jpeg",
    title: "Meeting Scheduler Application",
    dataAos: "fade-down",
    link: "/case-Studies/Case1",
  },
  {
    src: "/caseStud2.jpeg",
    title: "Trip Planner Application using Webservices",
    dataAos: "zoom-out",
    link: "/case-Studies/Case2",
  },
  {
    src: "/caseStud3.jpeg",
    title: "Enterprise Health Care Portal",
    dataAos: "fade-up",
    link: "/case-Studies/Case3",
  },
  {
    src: "/caseStud4.jpeg",
    title: "Company Intranet Portal",
    dataAos: "fade-down",
    link: "/case-Studies/Case4",
  },
  {
    src: "/caseStud5.jpeg",
    title: "Road Accident Statistics and Street Issues Reporting Application",
    dataAos: "zoom-out",
    link: "/case-Studies/Case5",
  },
  {
    src: "/caseStud6.jpeg",
    title: "Mobile Application For Power Consumers",
    dataAos: "fade-up",
    link: "/case-Studies/Case6",
  },
  {
    src: "/caseStud7.jpeg",
    title: "Weather Application using Webservices",
    dataAos: "fade-down",
    link: "/case-Studies/Case7",
  },
  {
    src: "/caseStud8.jpeg",
    title: "Multi lingual Wiki Portal using Liferay",
    dataAos: "zoom-out",
    link: "/case-Studies/Case8",
  },
  {
    src: "/caseStud9.jpeg",
    title: "Cloud Services Platform",
    dataAos: "fade-up",
    link: "/case-Studies/Case9",
  },
  {
    src: "/caseStud10.jpeg",
    title: "Security Solutions for National Panchayath Portal",
    dataAos: "fade-down",
    link: "/case-Studies/Case10",
  },
  {
    src: "/caseStud11.jpeg",
    title: "Budget Planning and Spending Application",
    dataAos: "zoom-out",
    link: "/case-Studies/Case11",
  },
];
const DisplayNone = {
  display: "none",
};
const CaseStudy = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = useAllPrismicDocumentsByType("case-studies");
  const slice = document && document[0]?.data;
  const CaseNormalData = items?.map((item: any, index: any) => {
    return (
      <div
        className="col-lg-3 col-md-6 mb-30"
        key={index}
        data-aos={item.dataAos}
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <SinglePost
          blogClass="blog-item"
          blogImage={item.src}
          blogTitle={item.title}
          link={item.link}
          blogButtonText="Read More"
        />
      </div>
    );
  });

  const PrismicCaseData = slice?.body[1]?.items?.map((item: any, i: any) => {
    return (
      <div
        className="col-lg-3 col-md-6 mb-30"
        key={i}
        data-aos={item.mv_dataaos[0].text}
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <SinglePost
          blogClass="blog-item"
          blogImage={item.mv_img.url}
          blogTitle={item.mv_title[0].text}
          link={item.page_link[0].text}
          blogButtonText="Read More"
        />
      </div>
    );
  });

  return (
    <React.Fragment>

      <SiteBreadcrumb
        pageTitle={
          slice ? slice?.body[0]?.primary?.main_title[0].text : "Case Studies"
        }
        displayNone={DisplayNone}
        breadcrumbsImg={
          slice ? slice?.body[0]?.primary?.bg_img.url : "/casesBg.jpeg"
        }
      />
      <div
        id="rs-blog"
        className="rs-blog main-home pb-10 pt-30 md-pt-20   md-pb-20"
      >
              <Helmet>
        <title>Case Studies</title>
        <meta
          name="description"
          content="Explore our case studies to see how our solutions have helped businesses overcome their challenges and achieve their goals."
        />
         <link rel="canonical" href="http://esquareinfo.com/Case-Studies"/>
      </Helmet>
        <div className="container">
          <div className="row mb-34">
            {slice ? PrismicCaseData : CaseNormalData}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CaseStudy;
