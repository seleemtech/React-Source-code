import Aos from "aos";
import React, { useEffect } from "react";

import Bigblog from "./Bigblog";
import LifeSpan from "../../../common/lifeSpan-Contact/Lifespan";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
const CardTextitems = [
  {
    src: "/cld.png",
    title: "Volume",
    dataAos: "fade-right",
    desc: "Volume Organizations collect data from a variety of sources, including business transactions, social media and information from sensor or machine-to-machine data. In the past, storing it would’ve been a problem – but new technologies (such as Hadoop) have eased the burden.",
    className: "col-md-4 md-mt-10",
  },
  {
    src: "/dat.png",
    title: "Variability",
    dataAos: "fade-top",
    desc: "Variability Complexity In addition to the increasing velocities and varieties of data, data flows can be highly inconsistent with periodic peaks. Is something trending in social media? Daily, seasonal and event-triggered peak data loads can be challenging to manage.",
    className: "col-md-4 md-mt-10",
  },
  {
    src: "/hand1.png",
    title: "Complexity",
    dataAos: "fade-left",
    desc: "Today's data comes from multiple sources, which makes it difficult to link, match, cleanse and transform data across systems. However, it’s necessary to connect and correlate relationships",
    className: "col-md-4 md-mt-10",
  },
];

const listData = [
  {
    list: "Cost reductions",
  },
  {
    list: "Time reductions",
  },
  {
    list: "New product development and optimized offerings",
  },
  {
    list: "Smart decision making.",
  },
  {
    list: "Determining root causes of failures, issues and defects in near-real time.",
  },
  {
    list: " Generating coupons at the point of sale based on the customer’s buying habits.",
  },
  {
    list: "Recalculating entire risk portfolios in minutes.",
  },
  {
    list: "Detecting fraudulent behavior before it affects your organization.",
  },
  {
    list: "Organizations collect data from a variety of sources",
  },
  {
    list: "Data streams in at an unprecedented speed and must be dealt with in a timely manner.",
  },
  {
    list: " Including business transactions, social media and information from sensor or machine-to-machine data.",
  },
];

const Bigdata = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);
  const [document] = useAllPrismicDocumentsByType("bigdata");
  const slice = document && document[0]?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/big.jpg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice ? slice?.body[2]?.primary?.card_text_bg_img.url : "/bg1.jfif"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
  };
  const NormalCardTextData = CardTextitems.map((item: any, index: any) => {
    return (
      <div className={item.className} key={index}>
        <div className="features-wrap">
          <div className="icon-part">
            <img src={item.src} />
          </div>
          <div className="content-part">
            <h4 className="title">
              <span className="watermark" style={{ color: "#ffc266" }}>
                {item.title}
              </span>
            </h4>
            <p className="dese" style={{ color: "white" }}>
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    );
  });
  const PrismmicCardTextData = slice?.body[2]?.items?.map(
    (item: any, index: any) => {
      return (
        <div className={item.text_classname[0].text} key={index}>
          <div className="features-wrap">
            <div className="icon-part">
              <img src={item.card_text_img.url} />
            </div>
            <div className="content-part">
              <h4 className="title">
                <span className="watermark" style={{ color: "#ffc266" }}>
                  {item.card_text_title[0].text}
                </span>
              </h4>
              <p className="dese " style={{ color: "white" }}>
                {item.card_text_desc[0].text}
              </p>
            </div>
          </div>
        </div>
      );
    }
  );

  const NormalListData = listData.map((item: any, i: any) => {
    return <li key={i}>{item.list}</li>;
  });
  const PrismmicNormalListData = slice?.body[3]?.items?.map(
    (item: any, index: any) => {
      return <li key={index}>{item.lists[0].text}</li>;
    }
  );
  return (
    <React.Fragment>
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
                      : "Big Data"}
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
                      : "Big data is a term that describes the large volume of data – both structured and unstructured – that inundates a business on a day-to-day basis. But it’s not the amount of data that’s important. It’s what organizations do with the data that matters. Big data can be analyzed for insights that lead to better decisions and strategic business moves."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "There's nothing new about the notion of big data, which has been around since at least 2001. In a nutshell, Big Data is your data. It's the information owned by your company, obtained and processed through new techniques to produce value in the best way possible. Even the value in analyzing unstructured data such as e-mail and documents has been well understood. What is new is the coming together of advances in computer technology and software, new sources of data (e.g., social media), and business opportunity. Governments and companies are able to integrate personal data from numerous sources and learn much of what you do, where you go, who your friends are, and what your preferences are. Although this leads to better service (and profits for companies), it also raises privacy concerns."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="rs-blog"
        className="rs-blog style2 pt-40 pb-10 md-pt-70 md-pb-30"
      >
        <div className="container">
          <Bigblog BlogBanner={slice} />
        </div>
      </div>

      <div
        id="rs-features"
        className="rs-features style4 pt-40  md-pt-20 pb-30"
        style={Textbg}
      >
        <div className="container">
          <div className="row">
            {slice ?PrismmicCardTextData : NormalCardTextData }
          </div>
        </div>
      </div>

      <div
        className="noraml-Text main-home event-bg pt-40 pb-1 md-pt-30 md-pb-110"
        style={{ background: "#ffffff" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 mb-50"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h2 style={{ color: "	#800000" }}>
                {" "}
                {slice
                  ? slice?.body[3]?.primary?.list_main_title[0].text
                  : "Why Is Big Data Important"}
              </h2>

              {slice ? PrismmicNormalListData : NormalListData}
            </div>
            <div className="col-lg-6 col-md-6 mb-50">
              <div
                data-aos="flip-left"
                data-aos-duration="1500"
                data-aos-delay="280"
              >
                <img
                  src={
                    slice ? slice?.body[3]?.primary?.left_img.url : "/bg2.jpg"
                  }
                  alt="Main Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LifeSpan />
    </React.Fragment>
  );
};

export default Bigdata;
