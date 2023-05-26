import Aos from "aos";
import React, { useEffect } from "react";
import CardSingle from "../../common/Card/CardSingle";
import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import img1 from "../../../assets/img/DummyImg/ecommerceImg.jpg";
import TextSingle from "../../common/TextCard/TextSingle";
import { usePrismicDocumentByUID } from "@prismicio/react";
import { Helmet } from "react-helmet";
const CardImgitems = [
  {
    src: "/portalCardImg1.jpeg",
    title: "BPM life-cycle",
    dataAos: "zoom-out-right",
    desc: "Business process management activities can be grouped into six categories: vision, design, modeling, execution, monitoring, and optimization.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/portalCardImg2.jpeg",
    title: "Execution",
    dataAos: "zoom-in",
    desc: "A combination of software and human intervention is used to execute the processes as per the designed flow.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/portalCardImg3.jpeg",
    title: "BPM Technology",
    dataAos: "zoom-out-left",
    desc: "Business process management (BPM) tools can be used to implement business processes through the orchestration of activities between people and systems.",
    className: "col-lg-4 col-md-6 mb-30",
  },
];
const CardTextitems = [
  {
    title: "Optimization",
    dataAos: "fade-right",
    desc: "Process optimization includes retrieving process performance information from modeling or monitoring phase; identifying the potential or actual bottlenecks and the potential opportunities for cost savings or other improvements; and then, applying those enhancements in the design of the process. Overall, this creates greater business value.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Design",
    dataAos: "fade-top",
    desc: "The Design Process consists of both the identification of existing processes and the design of 'to-be' processes. The key focus include representation of the process flow, the actors & role within it, alerts & notifications, escalations, SOP, SLA, and task hand-over mechanisms.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
  {
    title: "Modeling",
    dataAos: "fade-left",
    desc: "Modeling takes the theoretical design and introduces combinations of variables (e.g., changes in rent or materials costs, which determine how the process might operate under different circumstances).",
    className: "col-lg-4 col-md-6 mb-30",
  },
];
const whiteColorText = {
  color: "white",
};

const TitleColor = {
  color: "white",
  textAlign: "center",
};
const ImgWidth = {
  height: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};
const BusinessManagement = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = usePrismicDocumentByUID(
    "outsourcing-partners",
    "businessmanagmentid"
  );
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/businessmangBg1.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",

    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice ? slice?.body[2]?.primary?.card_text_bg_img.url : "/portalgb2.gif"
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
          titleSecClass={TitleColor}
          textClass={whiteColorText}
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
          textClass={whiteColorText}
          visionicon={ImgWidth}
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
        <title>Business Management</title>
        <meta
          name="description"
          content="The Business processes are driven by events and change frequently during the life cycle of a process."
        />
        <link rel="canonical" href="http://esquareinfo.com/Business-Management"/>
      </Helmet>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6">
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
                      : "Business Process Management"}
                  </h2>
                  <p
                    className="desc white-color  md-pr-0 sub-text"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="3000"
                    style={{
                      fontSize: "12px",
                      lineHeight: " 1.4",
                      textAlign: "justify",
                    }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.first_para_text[0].text
                      : "A business process comprises a 'series or network of value-added activities, performed by their relevant roles or collaborators, to purposefully achieve the common business goal. These processes are critical to any organization, as they can generate revenue and often represent a significant proportion of costs. As a managerial approach, BPM considers processes to be strategic assets of an organization that must be understood, managed, and improved to deliver value added products and services to clients."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "The Business processes are driven by events and change frequently during the life cycle of a process. The state of services should be managed for proper integration during the execution of a business process. BPM goes a step further by stating that this approach can be supported, or enabled, through technology to ensure the viability of the managerial approach in times of stress and change."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "BPM focus on the automation of business processes, and integration with people, information and process. BPM allows organizations to abstract business process from technologies; it is much beyond automating business processes or solving business problems. BPM enables business to respond to changing customer requirements, market needs, and faster time-to-market than competitors - creating competitive advantage."}
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
      <div
        className="card-Text main-home event-bg pt-50 pb-10"
        style={Textbg}
      >
        <div className="container">
          <div className="row">
            {slice ? PrismmicCardTextData : NormalCardTextData}
          </div>
        </div>
      </div>
      <LifeSpan />
    </React.Fragment>
  );
};

export default BusinessManagement;
