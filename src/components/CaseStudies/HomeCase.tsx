import React, { useContext, useEffect } from "react";

import SinglePost from "./SinglePost";

import Aos from "aos";
import { CaseStudiesContext } from "../Context/Context";
const items = [
  {
    src: "/caseStud1.jpeg",
    title: "Road Accident Statistics and Street Issues Reporting Application",
    dataAos: "fade-down",
  },
  {
    src: "/caseStud2.jpeg",
    title: "Trip Planner Application using Webservices",
    dataAos: "zoom-out",
  },
  {
    src: "/caseStud3.jpeg",
    title: "Enterprise Health Care Portal",
    dataAos: "fade-up",
  },
];

const CasePart = () => {
  const CaseBanner = useContext(CaseStudiesContext);
  useEffect(() => {
    Aos.init();
  }, []);

  const blogSettings = {
    dots: false,
    centerMode: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const PrismicData = CaseBanner?.body[7].items?.map(
    (item: any, index: any) => {
      return (
        <div
          className="col-lg-4 col-md-6 mb-30"
          key={index}
          data-aos={item.case_content_data_aos[0].text}
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SinglePost
            blogClass="blog-item"
            blogImage={item.case_content_img.url}
            blogTitle={item.case_content_title[0].text}
          />
        </div>
      );
    }
  );
  const CaseNormalData = items?.map((item: any, index: any) => {
    return (
      <div
        className="col-lg-4 col-md-6 mb-30"
        key={index}
        data-aos={item.dataAos}
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <SinglePost
          blogClass="blog-item"
          blogImage={item.src}
          blogTitle={item.title}
        />
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="row mb-34">
        {CaseBanner ? PrismicData : CaseNormalData}
      </div>
    </React.Fragment>
  );
};

export default CasePart;
