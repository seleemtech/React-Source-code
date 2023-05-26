import Aos from "aos";
import React, { useEffect } from "react";
import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";
import CardSingle from "../../common/Card/CardSingle";
import { usePrismicDocumentByUID } from "@prismicio/react";
import { Helmet } from "react-helmet";
const CardImgitems = [
  {
    src: "/ConsultingImgs1.jpeg",
    title: "Strategy & performance improvement",
    dataAos: "zoom-out-right",
    desc: "We deliver strategy development and performance improvement services at every stage of your growth journey.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/ConsultingImgs2.jpeg",
    title: "Productivity improvement",
    dataAos: "zoom-in",
    desc: "We deliver systematic improvements across people, processes and technology right through the supply chain.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/ConsultingImgs3.jpeg",
    title: "Technology strategy & management",
    dataAos: "zoom-out-left",
    desc: "We engage, specify and deliver scalable solutions across the business, including finance, the supply chain, human resource functions and cyber security.",
    className: "col-lg-4 col-md-6 mb-30",
  },
];
const CardTextitems = [
  {
    title: "Strategically-effective",
    dataAos: "fade-right",
    desc: "An effective strategy is deeply understood and shared by the organization. ... As a strategist, you must count on the employees or members of your organization to make sound tactical and operational decisions that are aligned with your desired strategic direction.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Outcome Driven",
    dataAos: "fade-top",
    desc: "Innovation (ODI) is a strategy and innovation process developed by Anthony W. Ulwick. It is built around the theory that people buy products and services to get jobs done. As people complete these jobs, they have certain measurable outcomes that they are attempting to achieve.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Enterprise of the Future",
    dataAos: "fade-left",
    desc: "Having customers who buy from you, refer you to others and return to buy are hallmarks of a great business. Employees, who are proud to work with your company, are the best ambassadors on your way to a highly engaged clientele.",
    className: "col-lg-4 col-md-6 mb-30",
  },
];

const blackColorText = {
  color: "black",
};
const TitleColor = {
  color: "black",
  textAlign: "center",
};

const ImgWidth = {
  height: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

const BusinessConsulting = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = usePrismicDocumentByUID(
    "outsourcing-partners",
    "businessconsultingid"
  );
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/Consultingimg.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",

    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice ? slice?.body[2]?.primary?.card_text_bg_img.url : "textBack.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "auto",
    backgroundRepeat: " no-repeat",
  };
  const NormalTextbg = {
    backgroundImage: `url(${
      slice
        ? slice?.body[3]?.primary?.normal_text_bg_img.url
        : "/Consultingimg2.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "cover",
    backgroundRepeat: " no-repeat",
  };

  const NormalCardData = CardImgitems.map((item: any, index: any) => {
    return (
      <div
        className={item.className}
        data-aos={item.dataAos}
        data-aos-duration="1500"
        key={index}
      >
        <CardSingle
          itemClass="courses-item"
          titleSecClass={TitleColor}
          textClass={blackColorText}
          image={item.src}
          visionicon={ImgWidth}
          title={item.title}
          subtitle={item.desc}
        />
      </div>
    );
  });
  const PrismicCardData = slice?.body[1]?.items?.map((item: any, i: any) => {
    return (
      <div
        className={item.card_classname[0].text}
        data-aos={item.mv_data_aos[0].text}
        data-aos-duration="1500"
        key={i}
      >
        <CardSingle
          itemClass="courses-item"
          titleSecClass={TitleColor}
          textClass={blackColorText}
          image={item.mv_img.url}
          title={item.mv_title[0].text}
          subtitle={item.mv_desc[0].text}
        />
      </div>
    );
  });

  const NormalCardTextData = CardTextitems.map((item: any, index: any) => {
    return (
      <div
        className={item.className}
        data-aos={item.dataAos}
        data-aos-duration="1500"
        key={index}
      >
        <TextSingle
          itemClass="courses-item"
          title={item.title}
          subtitle={item.desc}
        />
      </div>
    );
  });
  const PrismmicCardTextData = slice?.body[2]?.items?.map(
    (item: any, index: any) => {
      return (
        <div
          className={item.text_classname[0].text}
          data-aos={item.card_text_dataaos[0].text}
          data-aos-duration="1500"
          key={index}
        >
          <TextSingle
            itemClass="courses-item"
            title={item.card_text_title[0].text}
            subtitle={item.card_text_desc[0].text}
          />
        </div>
      );
    }
  );

  return (
    <React.Fragment>
      <div className="webportal main-home mt-128 md-mt-66" style={bg}>
      <Helmet>
       <title>Business Consulting</title>
        <meta
          name="description"
          content="Esquare IT Consulting services help design, develop and maintain the software applications of its clients on various open source solutions"
        />
        <link rel="canonical" href="http://esquareinfo.com/BusinessConsulting"/>
        </Helmet>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 ">
                <div className="sec-title3 mb-40">
                  <h2
                    className="title white-color mb-16 Heading"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1800"
                    style={{ fontSize: "20px" }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.main_title[0].text
                      : "Esquare IT Consulting"}
                  </h2>
                  <p
                    className="desc white-color  md-pr-0 sub-text"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="3000"
                    style={{
                      fontSize: "15px",
                      lineHeight: " 1.4",
                      textAlign: "justify",
                    }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.first_para_text[0].text
                      : " Esquare IT Consulting services help design, develop and maintain the software applications of its clients on various open source solutions from Liferay, Alfresco, Joomla and Drupal. Our resources Architects, software developers, Web  portal designers, database designers, project managers, QA Team, Business systems analysts offer either onsite or offshore consulting services, which can help client every  step of the way for developing and deploying Open Source enterprise solutions end to end."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "In management, information technology consulting as a field of activity focuses on advising organizations on how best to use information technology in achieving their business objectives."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-ss main-home event-bg pt-50 pb-10 "
        style={{ background: "#FFD401" }}
      >
        <div className="container">
          <div className="row">{slice ? PrismicCardData : NormalCardData}</div>
        </div>
      </div>
      <div
        className="card-Text main-home event-bg pt-50 pb-10 "
        style={Textbg}
      >
        <div className="container">
          <div className="row">
            {slice ? PrismmicCardTextData : NormalCardTextData}
          </div>
        </div>
      </div>
      <div
        className="noraml-Text main-home event-bg pt-50 mb--100 "
        style={NormalTextbg}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-11 col-md-11 "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_title[0].text
                    : "Esquare IT Consulting"
                }
                listClass="display-none"
                portalList="portal-none"
                twoList="twoList"
                threeList="threeList"
                cloudList="cloud-none"
                ecommerce="ecommerce-none"
                subtitle1={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_text[0].text
                    : "The team consists of over 60 plus years of combined experience in Liferay in addition to the open source consultants who are available globally. Our team is uniquely capable of understanding our clients' business requirements and applying the best possible Open Source technology to accomplish business objectives. The team has worked on various client projects from a small implementation to a Large and complex integration. The consulting team hence delivers value to our clients and exceed expectations."
                }
              />
            </div>
          </div>
        </div>
      </div>
      <LifeSpan />
    </React.Fragment>
  );
};

export default BusinessConsulting;
