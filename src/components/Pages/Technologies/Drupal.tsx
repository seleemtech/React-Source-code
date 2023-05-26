import React, { useEffect } from "react";
import CardSingle from "../../common/Card/CardSingle";
import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";
import Aos from "aos";
import { usePrismicDocumentByUID } from "@prismicio/react";
const CardImgitems = [
  {
    src: "/DrupalImg1.jpeg",
    title: "Maintenance Led Modernization",
    dataAos: "zoom-out-right",
    desc: "Improving business agility through application and infrastructure modernisation.unique approach to “de-risk” the entire transformation journey of the legacy systems. In order to transform the systems it is very important to transition the support of the systems and optimize the same first.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/DrupalImg2.jpeg",
    title: "Application business process",
    dataAos: "zoom-in",
    desc: "Business process management is a discipline in operations management in which people use various methods to discover, model, analyze, measure, improve, optimize, and automate business processes.",
    className: "col-lg-4 col-md-6 mb-30 sm-mt-105",
  },
  {
    src: "/DrupalImg3.jpeg",
    title: "PCI Compliance at Vista",
    dataAos: "zoom-out-left",
    desc: "Vulnerability Assessment and Penetration Testing.Design from scratch, customise a template, or upload own logo or complete design. Money Back Guaranteed. 2K Products 2 Lac Designs. No Hidden Charges. COD Available. No Minimum Orders.",
    className: "col-lg-4 col-md-6 mb-30 sm-mt-30",
  },
];
const CardTextitems = [
  {
    title: "BPM life-cycle",
    dataAos: "fade-right",
    desc: "Business process management activities can be grouped into six categories: vision, design, modeling, execution, monitoring, and optimization.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Design",
    dataAos: "fade-top",
    desc: "The Design Process consists of both the identification of existing processes and the design of to-be processes. The key focus include representation of the process flow, the actors & role within it, alerts & notifications, escalations, SOP, SLA, and task hand-over mechanisms.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Modeling",
    dataAos: "fade-left",
    desc: "Modeling takes the theoretical design and introduces combinations of variables (e.g., changes in rent or materials costs, which determine how the process might operate under different circumstances).",
    className: "col-lg-4 col-md-6 mb-30 ",
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
const Drupal = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo(0,0);
  }, []);
  const [document] = usePrismicDocumentByUID("mobile_development", "drupalid");
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/DrupalBg1.jpeg"
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
  const NormalTextbg = {
    backgroundSize: "cover",
    backgroundPosition: "cover",
    backgroundImage: `url(${
      slice ? slice?.body[3]?.primary?.list_bg_img.url : "/DrupalBg2.png"
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
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 pb-20">
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
                      :"Drupal"}
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
                      : "Drupal is open source software maintained and developed by a community of 630,000+ users and developers. It's distributed under the terms of the GNU General Public License (or 'GPL'), which means anyone is free to download it and share it with others. This open development model means that people are constantly working to make sure."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      :  "Drupal is a cutting-edge platform that supports the latest technologies that the Web has to offer. The Drupal project's principles encourage modularity, standards, collaboration, ease-of-use, and more."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.third_para_text[0].text
                      :  "Drupal an open source content management system (CMS) has been written in PHP. Drupal is used as a back-end system for at least 1% of all the websites across the global. Drupal has emerged extensively in last couple of years due to it's capability to development robust and scalable web applications."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.fourth_para_text[0].text
                      : "Drupal is very popular to be used as knowledge management system."}
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
          <div className="row">{ slice? PrismmicCardTextData : NormalCardTextData}</div>
        </div>
      </div>

      <div
        className="noraml-Text main-home event-bg pt-50 pb-80 mb--180"
        style={NormalTextbg}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[3]?.primary?.list_title[0].text
                    :"Key Features of Drupal:"}
                portalList="portal-none"
                ecommerce="ecommerce-none"
                twoList="twoList"
                cloudList="cloud-none"
                list1={
                  slice
                    ? slice?.body[3]?.primary?.list1[0].text
                    :"Drupal is Open source CMS so, it is most cost effective website CMS Solutions."}
                list2={
                  slice
                    ? slice?.body[3]?.primary?.list2[0].text
                    :"Drupal come with great modular architecture, new feature and functionality can be added or removed by custom Drupal development."}
                list3={
                  slice
                    ? slice?.body[3]?.primary?.list3[0].text
                    :"For better performance it supported caching and feature throttling."}
                list4={
                  slice
                    ? slice?.body[3]?.primary?.list4[0].text
                    :"Supported for multi-user content creation and editing."}
                list5={
                  slice
                    ? slice?.body[3]?.primary?.list5[0].text
                    :"It supported by large Expert Drupal programmers community so, new update and features are available at regular intervals."}
                list6={
                  slice
                    ? slice?.body[3]?.primary?.list6[0].text
                    :"Advance search functionality and SEO friendly URLs."}
                list19={
                  slice
                    ? slice?.body[3]?.primary?.list7[0].text
                    :"Variety of Module and themes templates for enhances Drupal website functionality like forum, discussion board, shopping cart, podcasting, photo gallery etc."}
                list20={
                  slice
                    ? slice?.body[3]?.primary?.list8[0].text
                    :"Esquare Info Solutions acquires a strong team of drupal developers globally to manage the CMS requirements in building complex applications."}
                list21={
                  slice
                    ? slice?.body[3]?.primary?.list9[0].text
                    :"Esquare services include complete Drupal Website Development, Drupal Themes, Drupal Customization, Drupal Maintenance, and Drupal Optimization."}
              />
            </div>
          </div>
        </div>
      </div>
      <LifeSpan />
    </React.Fragment>
  );
};

export default Drupal;
