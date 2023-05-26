import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CardSingle from "../../common/Card/CardSingle";
import img1 from "../../../assets/img/DummyImg/ecommerceImg.jpg";

import SectionTitle from "../../common/SectionTitle/SectionTitle";
import TextSingle from "../../common/TextCard/TextSingle";
import NormalText from "../../common/NormalText/NormalText";
import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import { usePrismicDocumentByUID } from "@prismicio/react";
import { Helmet } from "react-helmet";

const CardImgitems = [
  {
    src: "/portalCardImg1.jpeg",
    title: "BPM life-cycle",
    dataAos: "zoom-out-right",
    desc: "Business process management activities can be grouped into six categories: vision, design, modeling, execution, monitoring, and optimization.",
  },
  {
    src: "/portalCardImg2.jpeg",
    title: "Execution",
    dataAos: "zoom-in",
    desc: "A combination of software and human intervention is used to execute the processes as per the designed flow.",
  },
  {
    src: "/portalCardImg3.jpeg",
    title: "BPM Technology",
    dataAos: "zoom-out-left",
    desc: "Business process management (BPM) tools can be used to implement business processes through the orchestration of activities between people and systems.",
  },
];
const CardTextitems = [
  {
    title: "Partners Solutions",
    dataAos: "fade-right",
    desc: "Esquare team works together with the client as a partner provide solutions which fit their requirements in any environment.Web development broadly refers to the tasks associated with developing websites for hosting via intranet or internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Requirements",
    dataAos: "fade-top",
    desc: "We start right from beginning by understanding the clients requirements,The role is responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications. Strive to create visually appealing sites that feature user-friendly design and clear navigation.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
  {
    title: "Planning And Designing",
    dataAos: "fade-left",
    desc: "Planning and designing, Developing and implementing the solutions with any type and number of integrations by creating a one stop shop for our clients.After programming schematics, plans, specifications, and construction documents have been determined, Planning & Design hands over the project to Construction Services, which oversees the construction and execution of the plans.",
    className: "col-lg-4 col-md-6 mb-30",
  },
];
const whiteColor = {
  color: "white",
};
const ImgWidth = {
  height: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};
const WebPortal = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [document] = usePrismicDocumentByUID(
    "outsourcing-partners",
    "webportalid"
  );
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/webdevelopment.jpg"
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
        : "/normalTextBg.jpg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    backgroundRepeat: " no-repeat",
  };
  const NormalCardData = CardImgitems.map((item: any, index: any) => {
    return (
      <div
        className="col-lg-4 col-md-6 mb-30"
        data-aos={item.dataAos}
        data-aos-duration="1500"
        key={index}
      >
        <CardSingle
          itemClass="courses-item"
          titleSecClass={whiteColor}
          textClass={whiteColor}
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
        className="col-lg-4 col-md-6 mb-30"
        data-aos={item.mv_data_aos[0].text}
        data-aos-duration="1500"
        key={i}
      >
        <CardSingle
          itemClass="courses-item"
          titleSecClass={whiteColor}
          textClass={whiteColor}
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
        <title>Web Portal Development</title>
        <meta
          name="description"
          content="Esquare team works together with the client as a partner to help provide solutions which fit their requirements in any environment."
        />
        <link rel="canonical" href="http://esquareinfo.com/WebPortal"/>
      </Helmet>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 md-pl-14">
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
                      : "Web Portal Development"}
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
                      : " Esquare team works together with the client as a partner to help provide solutions which fit their requirements in any environment. We start right from beginning by understanding the clients requirements, Planning and designing, Developing  and implementing the solutions with any type and number of  integrations by creating a one stop shop for our clients."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "Our highly skilled developers have worked on Open Source for several years, and helped in implementing many complex projects and development challenges."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.third_para_text[0].text
                      : "Web development is the work involved in developing a web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web-based internet applications electronic businesses, and social network services."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-ss main-home event-bg pt-50 pb-10 "
        style={{ background: "#87c04f" }}
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
        className="noraml-Text main-home event-bg pt-50 "
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
                    : "Web development"
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
                    : "We don't satisfy your need but exceed your expectations by providing resources who can manage your projects and build your resource capabilities by mentoring and providing solutions which are required to meet your requirements. In turn increasing your profitability and helping you succeed."
                }
                subtitle2={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_sec_text[0].text
                    : "Design relates to creating something that will resonate with the intended user on several levels, including emotional, social, cultural, physical, and cognitive. Design planning includes: Problem framing and hypothesis development. Research (contextually based using both quantitative and qualitative methods)."
                }
                subtitle3={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_third_text[0].text
                    : " Network planning and design is an iterative process, encompassing topological design, network-synthesis, and network-realization."
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

export default WebPortal;
