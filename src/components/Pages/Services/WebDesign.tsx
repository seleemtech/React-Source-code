import React, { useEffect } from "react";

import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";
import Aos from "aos";
import CardSingle from "../../common/Card/CardSingle";
import { usePrismicDocumentByUID } from "@prismicio/react";
import { Helmet } from "react-helmet";
const CardImgitems = [
  {
    src: "/webdesignImg1.jpeg",
    title: "Digital Automation",
    dataAos: "zoom-out-right",
    desc: "Our 20+ years of experience in influencing and delivering business outcomes to a diversified set of global customers proves our expertise",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/webdesignImg2.jpeg",
    title: "Digital Mobile",
    dataAos: "zoom-in",
    desc: "Mobility is at the core of everything digital. Multiple touchpoints across the target universe means there are new ways to connect and converse.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/webdesignImg3.jpeg",
    title: "Digital Social",
    dataAos: "zoom-out-left",
    desc: "Listening into social conversations is not enough to help enterprises make informed decisions and maintain brand image.",
    className: "col-lg-4 col-md-6",
  },
];
const CardTextitems = [
  {
    title: "CSS3 Development",
    dataAos: "fade-right",
    desc: "Esquare has helped organizations across 25 countries simplify, standardize and globalize their business processes.Create Flexible, Interesting, and Usable Designs for Desktop &Mobile Websites with CSS tutorial for beginners using CSS3.Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of ..... Development of HTML, CSS, and the DOM had all been taking place in one group, the HTML Editorial Review Board (ERB).",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Adobe Flash/Flex",
    dataAos: "fade-top",
    desc: "Ensuring our clients cruise smoothly through their Oracle Cloud journey With worldwide expertise in Oracle SaaS.Apache Flex, formerly Adobe Flex, is a software development kit for the development and deployment of cross-platform rich Internet applications based on the Adobe Flash platform.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
  {
    title: "Adobe AIR",
    dataAos: "fade-left",
    desc: "Empowers you with efficiency, flexibility and agility essential to transform your business.Adobe AIR is a cross-platform runtime system developed by Adobe Systems for building desktop applications and mobile applications, programmed using Adobe Animate, ActionScript and optionally Apache Flex.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
];

const blackColor = {
  color: "black",
};

const ImgWidth = {
  height: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};
const WebDesign = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [document] = usePrismicDocumentByUID(
    "outsourcing-partners",
    "webdesignid"
  );
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/webdesignBg.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice ? slice?.body[2]?.primary?.card_text_bg_img.url : "/textBack.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    backgroundRepeat: " no-repeat",
  };
  const NormalTextbg = {
    backgroundImage: `url(${
      slice
        ? slice?.body[3]?.primary?.normal_text_bg_img.url
        : "/webtextbg.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",

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
          titleSecClass={blackColor}
          textClass={blackColor}
          visionicon={ImgWidth}
          image={item.src}
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
          titleSecClass={blackColor}
          textClass={blackColor}
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
      <div className="webportal main-home mt-128 md-mt-66 " style={bg}>
      <Helmet>
        <title>Web Designing</title>
        <meta
          name="description"
          content="Esquare a professional firm for Website Designing Based in India, offers a wide range of Web Design Services India."
        />
        <link rel="canonical" href="http://esquareinfo.com/WebDesign"/>
      </Helmet>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 md-pl-14">
                <div className="sec-title3 ">
                  <h2
                    className="title white-color mb-16 Heading"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1800"
                    style={{ fontSize: "20px" }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.main_title[0].text
                      : "Web Designing"}
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
                      : "Esquare a professional firm for Website Designing Based in India, offers a wide range of Web Design Services India. We use a full-circle approach in Website Design. Our Website Design Company specializes in anything from basic Website Design to a wide variety of Web Site Design Services."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : " The Internet offers new opportunities for marketing businesses. Esquare helps you take advantage of the vast possibilities of this new medium, it is imperative for companies to have an online presence which makes an impact and generates business. The growing competition among businesses to secure a dominant position on the Internet has triggered a race for superior Website Designing and Development services."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-ss main-home event-bg pt-50 pb-10  "
        style={{ background: "#FFD401" }}
      >
        <div className="container">
          <div className="row">{slice ? PrismicCardData : NormalCardData}</div>
        </div>
      </div>
      <div className="card-Text main-home event-bg pt-50 pb-10 " style={Textbg}>
        <div className="container">
          <div className="row">
            {slice ? PrismmicCardTextData : NormalCardTextData}
          </div>
        </div>
      </div>
      <div
        className="noraml-Text main-home event-bg pt-50  "
        style={NormalTextbg}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-11 col-md-11"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_title[0].text
                    : "Web Designing"
                }
                listClass="display-none"
                twoList="twoList"
                threeList="threeList"
                portalList="portal-none"
                cloudList="cloud-none"
                ecommerce="ecommerce-none"
                subtitle1={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_text[0].text
                    : "In a situation like this, what your business needs is the support of a Website Design and Development company that offers technical experience combined with commitment to exceed your expectations. Esquare is a reputable name in web solutions. We offer state-of-the art Website Designing and Development services that can help you consolidate your online presence."
                }
                subtitle2={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_sec_text[0].text
                    : "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization."
                }
                subtitle3={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_third_text[0].text
                    : "Web design is the process of creating websites. It encompasses several different aspects, including webpage layout, content production, and graphic design. While the terms web design and web development are often used interchangeably, web design is technically a subset of the broader category of web development."
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

export default WebDesign;
