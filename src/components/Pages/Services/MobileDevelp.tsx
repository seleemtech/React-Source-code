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
    src: "/mobileImg1.jpeg",
    title: "Retail",
    dataAos: "zoom-out-right",
    desc: "We help global retailers deliver superior customer experience with capabilities in commerce, in-store tools, analytics and much more. Read more to rewrite retail with technology.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/mobileImg2.jpeg",
    title: "Manufacturing",
    dataAos: "zoom-in",
    desc: "We have helped large manufacturing organisations gain agility and flexibility with clear and achievable goals consistently.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/mobileImg3.jpeg",
    title: "Ecommerce",
    dataAos: "zoom-out-left",
    desc: "We work with some of the world’s largest ecommerce companies to help them deploy, leverage and create a seamless ecommerce experience for today’s growing breed of the digital customer.",
    className: "col-lg-4 col-md-6 mb-30",
  },
];
const CardTextitems = [
  {
    title: "Scenario",
    dataAos: "fade-right",
    desc: "You and your team are constantly on the move or just want to access data and systems remotely and you cannot afford to limit your business down to the traditional processes, as you understand that we cannot stay in business today with yesterday's processes & methodologies.",
    className: "col-lg-4 col-md-6",
  },
  {
    title: "Solution",
    dataAos: "fade-top",
    desc: "Our Mobile Application Development Services company is the one stop solution where we equip you with the power to access your information, Systems, Applications, Data, reports and much more as you name it anytime, anywhere for anyone you authorize using an handheld device.",
    className: "col-lg-4 col-md-6",
  },
  {
    title: "Enterprise Data Management",
    dataAos: "fade-left",
    desc: "Leave your data problems to us: Data is a true asset however data problems are way too many for any organization to handle.",
    className: "col-lg-4 col-md-6 ",
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
const MobileDevelop = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [document] = usePrismicDocumentByUID(
    "mobile_development",
    "mobiledevelopid"
  );
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/mobileFistBg.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",

    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice
        ? slice?.body[2]?.primary?.card_text_bg_img.url
        : "/mobileSecBg.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
  };
  const NormalTextbg = {
    backgroundImage: `url(${
      slice ? slice?.body[3]?.primary?.list_bg_img.url : "/mobilethirdBg.jpeg"
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
      <title>Mobile App Development</title>
      <meta
        name="description"
        content="Mobile app development is the act or process by which a mobile app is developed for mobile devices."
      />
      <link rel="canonical" href="http://esquareinfo.com/MobileDevelopment"/>
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
                      : "Mobile Application Development"}
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
                      : " A running images list of technologies like : IOS, Andriod, Blackberry, Symbian, windows etc."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "Is the set of processes and procedures involved in writing software for small, wireless computing devices such as smartphones or tablets. Mobile application development is similar to Web application development and has its roots in more traditional software development."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.third_para_text[0].text
                      : " Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-ss main-home event-bg pt-50  "
        style={{ background: "#FFD401" }}
      >
        <div className="container">
          <div className="row">{slice ? PrismicCardData : NormalCardData}</div>
        </div>
      </div>
      <div className="card-Text main-home event-bg pt-50 pb-30 " style={Textbg}>
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
              className="col-lg-11 col-md-11 mb--100"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[3]?.primary?.list_title[0].text
                    : "Solution"
                }
                twoList="twoList"
                threeList="threeList"
                portalList="portal-none"
                cloudList="cloud-none"
                ecommerce="ecommerce-none"
                list1={
                  slice
                    ? slice?.body[3]?.primary?.list1[0].text
                    : "iPad application development."
                }
                list2={
                  slice
                    ? slice?.body[3]?.primary?.list2[0].text
                    : "iphone application development."
                }
                list3={
                  slice
                    ? slice?.body[3]?.primary?.list3[0].text
                    : "Mobile Web application development"
                }
                list4={
                  slice
                    ? slice?.body[3]?.primary?.list4[0].text
                    : "BlackBerry application development."
                }
                list5={
                  slice
                    ? slice?.body[3]?.primary?.list5[0].text
                    : "Android application development."
                }
                list6={
                  slice
                    ? slice?.body[3]?.primary?.list6[0].text
                    : "Windows Phone application development."
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

export default MobileDevelop;
