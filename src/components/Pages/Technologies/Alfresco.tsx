import Aos from "aos";
import React from "react";
import { useEffect } from "react";
import CardSingle from "../../common/Card/CardSingle";
import TextSingle from "../../common/TextCard/TextSingle";
import img1 from "../../../assets/img/DummyImg/ecommerceImg.jpg";
import NormalText from "../../common/NormalText/NormalText";
import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
const CardImgitems = [
  {
    src: "/AlfrescoImg1.jpeg",
    title: "File Maker",
    dataAos: "zoom-out-right",
    desc: "Esquare’s SAP HANA migration services helps unleash the potential of SAP S4/HANA with solutions focused on delivering quick business outcomes.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/AlfrescoImg2.jpeg",
    title: "Crystal Reports",
    dataAos: "zoom-in",
    desc: "Today Organizations face Multiple challenges of Proper Cost visibility and Control, Reliable Support to business.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/AlfrescoImg3.jpeg",
    title: "Fast Reports",
    dataAos: "zoom-out-left",
    desc: "Our Solution ZenDairy powered by S/4HANA is packaged solution exclusive for the dairy industries.",
    className: "col-lg-4 col-md-6 mb-30",
  },
];
const CardTextitems = [
  {
    title: "Low Cost",
    dataAos: "fade-right",
    desc: "Low Cost — A low cost, open source, annual subscription with minimal upfront investment.",
    className: "col-lg-4 col-md-6 mb-10",
  },
  {
    title: "Simplicity",
    dataAos: "fade-top",
    desc: "Simplicity — Rapid deployment to deliver immediate business value and rapid application development using pre-built components and lightweight scripting.",
    className: "col-lg-4 col-md-6 mb-0",
  },
  {
    title: "Choice",
    dataAos: "fade-left",
    desc: "Choice — Lower Total Cost of Ownership (TCO) by reusing existing hardware, software and skills.",
    className: "col-lg-4 col-md-6 mb-0",
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
const Alfresco = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);
  const [document] = useAllPrismicDocumentsByType("alfresco");
  const slice = document && document[0]?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/Alfrescobg1.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",

    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice
        ? slice?.body[2]?.primary?.card_text_bg_img.url
        : "/Alfrescobg2.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    backgroundRepeat: " no-repeat",
  };
  const NormalTextbg = {
    backgroundSize: "cover",
    backgroundPosition: "right center",
    backgroundImage: `url(${
      slice ? slice?.body[3]?.primary?.list_bg_img.url : "Alfrescobg3.jpeg"
    })`,
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
          image={item.mv_img.url}
          title={item.mv_title[0].text}
          subtitle={item.mv_desc[0].text}
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
                      ? slice?.body[0]?.primary?.first_main_title[0].text
                      : "Alfresco"}
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
                      : "Alfresco is the leading open source enterprise content management system built by the most experienced team in the industry - drawn from Documentum®, Vignette® and Interwoven®. Our years of experience in ECM drove us to believe that legacy, proprietary technologies are plagued with high cost, high complexity and lack of customer control. We wanted to do things differently."}
                    <br />
                    <br />
                    <h2
                      style={{
                        fontSize: "16px",
                        color: "white",
                        marginBottom: "10px",
                      }}
                    >
                      {slice
                        ? slice?.body[0]?.primary?.sec_main_title[0].text
                        : "An open platform for a social world"}
                    </h2>
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "Alfresco has largely disrupted the proprietary ECM world  with a low cost, open source alternative. But the rise of social software in the enterprise has created a new set of use cases for content management - a new, more collaborative paradigm that we (and the industry) calls Social Content Management. Alfresco's support for open source and open standards (like CMIS and JSR 168) makes Alfresco the perfect platform to manage content in this new social world. Watch our video to learn more."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-ss main-home event-bg pt-50 pb-10 "
        style={{ background: "#4f82c2" }}
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
            <div
              className="col-lg-11 col-md-6 "
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h2 style={{ fontSize: "20px", color: "white" }}>
                {slice
                  ? slice?.body[2]?.primary?.card_text_main_title[0].text
                  : " Alfresco offers a content management platform that focuses on:"}
              </h2>
            </div>
            {slice ? PrismmicCardTextData : NormalCardTextData}
            <div
              className="col-lg-11 col-md-11 mb-30 mt-20"
              data-aos="fade-left"
              data-aos-duration="1500"
    
            >
              <TextSingle
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[2]?.primary?.card_non_repeat_text_title[0]
                        .text
                    : "Alfresco Enterprise Edition"
                }
                subtitle={
                  slice
                    ? slice?.body[2]?.primary?.card_non_repeat_para[0].text
                    : "Alfresco Enterprise Edition is a proven, tested version of Alfresco software that is provided as part of the annual Alfresco Enterprise Subscription (learn more). Alfresco Enterprise Edition includes Document Management, Web Content Management, Share and the Content Platform. Records Management, as well as Enterprise add-ons such as clustering and a connector for content addressable storage can be added as an additional subscription on top of the base subscription. Contact Us to learn more about pricing for our Alfresco Enterprise Subscription."
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="noraml-Text main-home event-bg pt-50 pb-10 mb--100"
        style={NormalTextbg}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-11 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[3]?.primary?.list_title[0].text
                    : "Esquare Alfresco Offerings include:"
                }
                portalList="portal-none"
                cloudList="cloud-none"
                twoList="twoList"
                threeList="threeList"
                list1={
                  slice
                    ? slice?.body[3]?.primary?.list1[0].text
                    : "Alfresco consulting, configuration & deployment"
                }
                list2={
                  slice
                    ? slice?.body[3]?.primary?.list2[0].text
                    : "Architectural or feasibility consultation"
                }
                list3={
                  slice
                    ? slice?.body[3]?.primary?.list3[0].text
                    : "Customizations"
                }
                list4={
                  slice
                    ? slice?.body[3]?.primary?.list4[0].text
                    : "Integration to other enterprise applications"
                }
                list5={
                  slice
                    ? slice?.body[3]?.primary?.list5[0].text
                    : "On-going Support & Enhancement"
                }
                list6={
                  slice ? slice?.body[3]?.primary?.list6[0].text : "Training"
                }
                list13={
                  slice
                    ? slice?.body[3]?.primary?.list7[0].text
                    : "Alfresco Document Management and Collaboration"
                }
                list14={
                  slice
                    ? slice?.body[3]?.primary?.list8[0].text
                    : "Alfresco Web Content Management"
                }
                list15={
                  slice
                    ? slice?.body[3]?.primary?.list9[0].text
                    : "Alfresco Records Management"
                }
                list16={
                  slice
                    ? slice?.body[3]?.primary?.list10[0].text
                    : "Alfresco Content Platform"
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

export default Alfresco;
