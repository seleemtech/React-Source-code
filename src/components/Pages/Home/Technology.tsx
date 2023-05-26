import SectionTitle from "../../common/SectionTitle/SectionTitle";
import { useEffect } from "react";
import Aos from "aos";
import TechnologySingle from "../../Technology/TechnologySingle";
const items = [
  {
    src: "/tech1.jpeg",
    caption: "Liferay",
    dataAos: "fade-down-right",
    link: "/Liferay",
  },
  {
    src: "/tech3.png",
    caption: "Java",
    dataAos: "zoom-in",
    link: "/Java",
  },
  {
    src: "/tech9.jpg",
    caption: "React",
    dataAos: "zoom-in",
    link: "/React",
  },
  {
    src: "/tech4.jpeg",
    caption: "Android",
    dataAos: "fade-down-left",
    link: "/Android",
  },
  {
    src: "/tech10.png",
    caption: "Spring Boot",
    dataAos: "fade-up-right",
    link: "/SpringBoot",
  },
  {
    src: "/tech11.jpg",
    caption: "Micro Services",
    dataAos: "zoom-in",
    link: "/MicroServices",
  },
  {
    src: "/tech12.jpeg",
    caption: ".Net",
    dataAos: "zoom-in",
    link: "/.Net",
  },
  {
    src: "/tech13.jpeg",
    caption: "Angular",
    dataAos: "fade-down-right",
    link: "/Angular",
  },
];

const Technology = (props: any) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { TechnologyBanner } = props;

  const PrismicData =
    TechnologyBanner &&
    TechnologyBanner?.body[2]?.items?.map((item: any, index: any) => {
      return (
        <div
          className="col-lg-3 col-md-6 mb-30"
          data-aos={item.tech_data_aos[0].text}
          data-aos-duration="1500"
          key={index}
        >
          <TechnologySingle
            itemClass="categories-items"
            image={item.tech_main_img.url}
            title={item.tech_caption[0].text}
            link={item.link[0]?.text}
          />
        </div>
      );
    });

  const TechNormalData = items?.map((item: any, index: any) => {
    return (
      <div
        className="col-lg-3 col-md-6 mb-30"
        data-aos={item.dataAos}
        data-aos-duration="1500"
        key={index}
      >
        <TechnologySingle
          itemClass="categories-items"
          image={item.src}
          title={item.caption}
          link={item.link}
        />
      </div>
    );
  });
  return (
    <div className="rs-categories main-home pt-0 pb-0 md-pt-20 md-pb-20">
      <div className="container">
        <SectionTitle
          sectionClass="sec-title3 text-center mb-44"
          subtitleClass="sub-title"
          titleClass="title black-color"
          AnimationTitle="fade-down"
          delayTitle="50"
          duration="1800"
          title={
            TechnologyBanner
              ? TechnologyBanner?.body[2]?.primary?.tech_head_title[0].text
              : "Our Technology Expertise"
          }
        />
        <div className="row mb-34">
          {TechnologyBanner ?  PrismicData :  TechNormalData }
        </div>
      </div>
    </div>
  );
};

export default Technology;
