import React, { useEffect } from "react";

import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";
import img1 from "../../../assets/img/DummyImg/ecommerceImg.jpg";
import Aos from "aos";
import CardSingle from "../../common/Card/CardSingle";
import { usePrismicDocumentByUID } from "@prismicio/react";
const CardImgitems = [
  {
    src: "/webhostImg1.jpeg",
    title: "Virtual Dedicated Server",
    dataAos: "zoom-out-right",
    desc: "Divides server resources into virtual servers, where resources can be allocated in a way that does not directly reflect the underlying hardware.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/webhostImg2.jpeg",
    title: "Cloud hosting",
    dataAos: "zoom-in",
    desc: "Is a new type of hosting platform that allows customers powerful, scalable and reliable hosting based on clustered load-balanced servers and utility billing.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/webhostImg3.jpeg",
    title: "Clustered hosting",
    dataAos: "zoom-out-left",
    desc: "Clustered servers are a perfect solution for high-availability dedicated hosting, or creating a scalable web hosting solution.",
    className: "col-lg-4 col-md-6 mb-30",
  },
];
const CardTextitems = [
  {
    title: "Transformation services",
    dataAos: "fade-right",
    desc: "Esquare’s Salesforce Customer Experience team can help you to become a customer company.",
    className: "col-lg-4 col-md-6",
  },
  {
    title: "Legacy Application Modernization",
    dataAos: "fade-top",
    desc: "Esquare's Salesforce expertise coupled with domain expertise across the various industries, provides end to end innovative solution to modernize your Legacy applications",
    className: "col-lg-4 col-md-6 ",
  },
  {
    title: "Integrations",
    dataAos: "fade-left",
    desc: "For smooth integration, our integration experts analyze and integrate enterprise applications with Sales Cloud, Service Cloud and Salesforce Platform",
    className: "col-lg-4 col-md-6 ",
  },
];
const ImgWidth = {
  height: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};
const blackColorText = {
  color: "black",
};
const TitleColor = {
  color: "black",
  textAlign: "center",
};

const WebHosting = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);
  const [document] = usePrismicDocumentByUID(
    "outsourcing-partners",
    "webhostid"
  );
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/webhostBg.jpeg"
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

    backgroundRepeat: " no-repeat",
  };
  const NormalTextbg = {
    backgroundImage: `url(${
      slice
        ? slice?.body[3]?.primary?.normal_text_bg_img.url
        : "/webhosttextbg.jpeg"
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
      <title>Web Hosting</title>
        <meta name="description" content="Get in touch with us today to learn more about our services and how we can help you."/>
      <div className="webportal main-home mt-128 md-mt-66" style={bg}>
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
                      : "Web Hosting Services"}
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
                      : "We provide comprehensive Web Hosting Services to our clients with the help of our experienced professionals."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "A web hosting service is a type of Internet hosting service that allows individuals and organizations to make their website accessible via the World Wide Web."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.third_para_text[0].text
                      : "Web hosts are companies that provide space on a server owned or leased for use by clients, as well as providing Internet connectivity, typically in a data center."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.fourth_para_text[0].text
                      : "Web hosts can also provide data center space and connectivity to the Internet for other servers located in  their data center, called colocation, also known as Hosing."}
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
                    : "Customer Testimonial"
                }
                listClass="display-none"
                portalList="portal-none"
                cloudList="cloud-none"
                twoList="twoList"
                threeList="threeList"
                ecommerce="ecommerce-none"
                subtitle1={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_text[0].text
                    : "“We need to deliver solutions that can be tailored in a cost-effective way to meet the specific needs of our contracts; and that is what esquare is helping us to do. We spent our time in selecting the right outsourcing partner for us and now reaping the rewards of our relationship with esquare, having introduced cost and delivery certainty into our business.”"
                }
                subtitle2={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_sec_text[0].text
                    : "-Head of Business Systems and Development for Morrison Utility Services"
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

export default WebHosting;
