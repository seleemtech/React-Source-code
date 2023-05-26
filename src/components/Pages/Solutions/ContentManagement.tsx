import React, { useEffect } from "react";
import CardSingle from "../../common/Card/CardSingle";
import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";
import Aos from "aos";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Helmet } from "react-helmet";
const CardImgitems = [
  {
    src: "/contentImg1.jpeg",
    title: "Evaluation and Consulting",
    dataAos: "zoom-out-right",
    desc: "We can help you evaluate and select your next generation focused on your unique needs and goals. Supervise on the technical aspects and Custom development to provide user friendly interface.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/contentImg2.jpeg",
    title: "Implementation",
    dataAos: "zoom-in",
    desc: "We provide full service CMS implementation and website design and development using platform best-practices and mobile-first, responsive design.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/contentImg3.jpeg",
    title: "Customization and Support",
    dataAos: "zoom-out-left",
    desc: "We have extensive experiencing customizing content management systems to meet your unique needs. After deployment, we can assist you with ongoing maintenance, patches, and technical support, including helping to manage your users and workflows.",
    className: "col-lg-4 col-md-6 mb-30 ",
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

const ContentManagement = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = useAllPrismicDocumentsByType("content-management");
  const slice = document && document[0]?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/contentBg1.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice ? slice?.body[2]?.primary?.text_bg_img.url : "contentbg2.jpg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    backgroundRepeat: " no-repeat",
  };
  const NormalTextbg = {
    backgroundSize: "cover",
    backgroundPosition: "cover",
    backgroundImage: `url(${
      slice ? slice?.body[3]?.primary?.normal_text_bg_img.url : "contentbg3.jpg"
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
          visionicon={ImgWidth}
          image={item.mv_img.url}
          title={item.mv_title[0].text}
          subtitle={item.mv_desc[0].text}
        />
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="webportal main-home mt-128 md-mt-66" style={bg}>
      <Helmet>
        <title>Content Management</title>
        <meta
          name="description"
          content="Content Management System is a system that is used to manage website content."
        />
        <link rel="canonical" href="http://esquareinfo.com/ContentManagement"/>
      </Helmet>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 ">
                <div className="sec-title3  mb-40">
                  <h2
                    className="title white-color mb-16 Heading"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1800"
                    style={{ fontSize: "20px" }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.main_title[0].text
                      : "Content Management system"}
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
                      : "Today managing content is very important because business activities are carried out on a vast scale and as a result, there are a lot of reports, data, and records being generated. Information is being created extensively in various formats and managing all such content efficiently is necessary to keep track of all that is being recorded. This is where using a Content Management System is necessary."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "Content Management System is a system that is used to manage website content. It has a host of features that include web-based publishing, revision control, content searching, content retrieving, indexing, and format management. Content may refer to binary files, images, audio, video, office documents, and Web content."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : " A content management system (CMS) manages the creation and modification of digital content. It typically supports multiple users in a collaborative environment. ... A web content management system (WCM or WCMS) is a CMS designed to support the management of the content of Web pages."}
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
      <div className="card-Text main-home event-bg pt-50  " style={Textbg}>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-11  col-md-11  "
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <TextSingle
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[2]?.primary?.text_main_title[0].text
                    : "Component CMS"
                }
                subtitle={
                  slice
                    ? slice?.body[2]?.primary?.text_first_para[0].text
                    : "A component CMS is a software system which involves managing of components (usually customer content) at the component level instead of whole documents or web pages. Though it can work as a standalone application, most of the time it is a sub-functionality of all the other CMS systems (ECMS, WCMS, MCMS etc.). It can assist with marketing, monitoring costs, customer support, and training purposes."
                }
              />
            </div>
            <div className="col-lg-11 col-md-11 ">
              <TextSingle
                itemClass="courses-item"
                title=""
                subtitle={
                  slice
                    ? slice?.body[2]?.primary?.text_sec_para[0].text
                    : "Component content management system. A component content management system (CCMS) is a content management system that manages content at a granular level (component) rather than at the document level."
                }
              />
            </div>
            <div
              className="col-lg-11 col-md-11 mb-20"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <TextSingle
                itemClass="courses-item"
                title=""
                subtitle={
                  slice
                    ? slice?.body[2]?.primary?.text_third_para[0].text
                    : "A content management system (CMS) is a software application or set of related programs that are used to create and manage digital content. CMSes are typically used for enterprise content management (ECM) and web content management (WCM)."
                }
              />
            </div>
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
              className="col-lg-11 col-md-11  "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_title[0].text
                    : "Mobile CMS (MCMS)"
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
                    : "A mobile CMS is a software program that is customized to create and manage mobile web pages. It allows businesses to upload, edit, and approve content for their mobile website without any need for programming skills.."
                }
                subtitle2={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_sec_text[0].text
                    : "CMS’s Media & Broadcasting Services offers most advanced and cost-effective content delivery systems to our clients. Media & Broadcasting Solutions, a division of CMS Computers Ltd, is India’s leading and most trusted solution provider in traditional broadcast and online video."
                }
              />
              <div
                className="col-lg-11 col-md-11 mt--50 mb--100 "
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <NormalText
                  itemClass="courses-item"
                  title={
                    slice
                      ? slice?.body[3]?.primary?.normal_text_sec_title[0].text
                      : "Media CMS"
                  }
                  listClass="display-none"
                  portalList="portal-none"
                  cloudList="cloud-none"
                  twoList="twoList"
                  threeList="threeList"
                  ecommerce="ecommerce-none"
                  subtitle1={
                    slice
                      ? slice?.body[3]?.primary?.normal_text_sec_text_para[0]
                          .text
                      : "This CMS is for media (radio and television)."
                  }
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

export default ContentManagement;
