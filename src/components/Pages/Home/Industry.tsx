import SectionTitle from "../../common/SectionTitle/SectionTitle";
import * as prismicR from "@prismicio/richtext";
import * as prismicH from "@prismicio/helpers";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import IndustrySingle from "../../Industry/IndustrySingle";
import { useEffect } from "react";
import Aos from "aos";
const items = [
  {
    src: "/ourindustry1.jpg",
    title: "E-commerce",
    desc: "E-commerce is essentially doing any method business electronically.",
    dataAos: "zoom-out-right",
    link:"/E-commerce"
  },
  {
    src: "/ourindustry2.jpg",
    desc: "The HR function consists of tracking existing employee data, which traditionally includes personal histories, skills, capabilities, accomplishments, and salary.",
    title: "HRMS",
    dataAos: "zoom-in",
    link:"/HRMS"
  },
  {
    src: "/ourindustry3.jpg",
    desc: "Learning the acquisition of knowledge, skills, values by Smarter Education Systems.",
    title: "Education",
    dataAos: "zoom-out-left",
    link:"/Education"
  },
];
const Industry = (props: any) => {
  const { IndustryBanner } = props;
  useEffect(() => {
    Aos.init();
  }, []);
  const prismicData = IndustryBanner?.body[4]?.items?.map(
    (item: any, index: any) => {
      return (
        <div
          className="col-lg-4 col-md-6 mb-30"
          key={index}
          data-aos={item.industry_data_aos[0].text}
          data-aos-duration="1500"
        >
          <IndustrySingle
            itemImage={item.industry_main_img.url}
            title={item.industry_content_title[0].text}
            link={item.link[0].text}
            // desc={item.industry_content_text[0].text}
          />
        </div>
      );
    }
  );
  const IndustryNormalData = items?.map((item: any, index: any) => {
    return (
      <div
        className="col-lg-4 col-md-6 mb-30"
        key={index}
        data-aos={item.dataAos}
        data-aos-duration="1500"
      >
        <IndustrySingle
          itemImage={item.src}
          title={item.title}
          link={item.link}
          // desc={item.desc}
        />
      </div>
    );
  });
  return (
    <div className="rs-degree style1 modify gray-bg pt-30 pb-20 md-pt-70 md-pb-40">
      <div className="container">
        <SectionTitle
          sectionClass="sec-title3 text-center mb-44"
          subtitleClass="sub-title"
          titleClass="title black-color"
          AnimationTitle="fade-down"
          delayTitle="50"
          duration="1800"
          title={
            IndustryBanner
              ? IndustryBanner?.body[4]?.primary?.industry_main_title[0].text
              : "Our Industry Expertise"
          }
        />
        <div className="row y-middle">
          {IndustryBanner ?IndustryNormalData : prismicData }
        </div>
      </div>
    </div>
  );
};

export default Industry;
