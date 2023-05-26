import React, { useEffect } from "react";

import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";
import img1 from "../../../assets/img/DummyImg/ecommerceImg.jpg";
import Aos from "aos";
import CardSingle from "../../common/Card/CardSingle";
import { usePrismicDocumentByUID } from "@prismicio/react";
import { Helmet } from "react-helmet";
const CardImgitems = [
  {
    src: "/portalImg1.jpeg",
    title: "Listen and Respond",
    dataAos: "zoom-out-right",
    desc: "In this phase, an organization can listen to what stakeholders are saying on social media and provide real-time response, capture patterns and unusual spikes helping the organization take corrective and preventive actions.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/portalImg2.jpeg",
    title: "Engage and Connect",
    dataAos: "zoom-in",
    desc: "With this integrated insight, you can now create customized campaigns for a targeted audience, modify existing products based on what people want and gather enough inputs to create new leads",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/portalImg3.jpeg",
    title: "Analyze and Insight",
    dataAos: "zoom-out-left",
    desc: "The social data is integrated with your internal systems like CRM, POS, Inventory etc and with external platforms like LinkedIn and Klout to provide actionable business insight and identify new opportunities.",
    className: "col-lg-4 col-md-6 mb-30",
  },
];
const CardTextitems = [
  {
    title: "Build websites",
    dataAos: "fade-right",
    desc: "Portals make it easy to build websites that show different content depending on whether or not the person is logged in.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
  {
    title: "Development of websites",
    dataAos: "fade-top",
    desc: "Portals additionally simplify the development of websites that display different data depending on a user's role. In addition, portals allow end-users to define pages, and add content to their pages using predefined portlets or gadgets.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
  {
    title: "Available",
    dataAos: "fade-left",
    desc: "Once it is developed, a website may need to be made available in multiple languages and from multiple platforms (e.g., smart phones, tablets). The portal provides a method to simplify the development and management of pages for each type of end-user.",
    className: "col-lg-4 col-md-6 mb-30",
  },
];
const blackColorText = {
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
const Portal = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = usePrismicDocumentByUID("mobile_development", "portalid");
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/portalBg.jpeg"
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
    backgroundImage: `url(${
      slice ? slice?.body[3]?.primary?.list_bg_img.url : "/portalbg4.jpg"
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
  return (
    <React.Fragment>
      <div className="webportal main-home mt-128 md-mt-66" style={bg}>
      <Helmet>
        <title>Portal</title>
        <meta
          name="description"
          content="Portal's provides a single access point to content and applications, while delivering differentiated, personalized experiences for each user."
        />
        <link rel="canonical" href="http://esquareinfo.com/Portal"/>
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
                      : "Portal"}
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
                      : "Portal's provides a single access point to content and applications, while delivering differentiated, personalized experiences for each user. Modern portals have added multiple features that make them the best choice for a wide array of web applications."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "Portal platforms make it easy for users to build web pages and websites by assembling portlets or gadgets onto a portal page. Portal websites combine a theme (header/footer and common look and feel), a set of pages, navigation (menu bar, etc.), and a set of portlets and gadgets. Administrators can build pages without coding by reusing existing portlets and gadgets."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.third_para_text[0].text
                      : " A web portal is most often one specially designed Web page that brings information together from diverse sources in a uniform way. Usually, each information source gets its dedicated area on the page for displaying information (a portlet); often, the user can configure which ones to display."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-ss main-home event-bg pt-50 pb-10"
        style={{ background: "#87c04f" }}
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
        className="noraml-Text main-home event-bg pt-50  mb--120"
        style={NormalTextbg}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-11 col-md-6 mb-30"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[3]?.primary?.list_title[0].text
                    : "At Esquare we deliver to the promise of Simplifying Open Source, where we identify the requirement from the client and deliver a simplified solution. A few solutions that we offer from a strong team of experienced resources are."
                }
                twoList="twoList"
                threeList="threeList"
                cloudList="cloud-none"
                ecommerce="ecommerce-none"
                list1={
                  slice
                    ? slice?.body[3]?.primary?.list1[0].text
                    : "News portals."
                }
                list2={
                  slice
                    ? slice?.body[3]?.primary?.list2[0].text
                    : "Jobs Portals."
                }
                list3={
                  slice
                    ? slice?.body[3]?.primary?.list3[0].text
                    : "Social Networking portal."
                }
                list4={
                  slice
                    ? slice?.body[3]?.primary?.list4[0].text
                    : "Corporate web portals."
                }
                list5={
                  slice
                    ? slice?.body[3]?.primary?.list5[0].text
                    : "Personal portals."
                }
                list6={
                  slice
                    ? slice?.body[3]?.primary?.list6[0].text
                    : "Search portals."
                }
                list7={
                  slice
                    ? slice?.body[3]?.primary?.list7[0].text
                    : "Domain-specific portals."
                }
                list8={
                  slice
                    ? slice?.body[3]?.primary?.list8[0].text
                    : "Knowledge Management Portal."
                }
                list9={
                  slice
                    ? slice?.body[3]?.primary?.list9[0].text
                    : "Intranet Portal."
                }
                list10={
                  slice
                    ? slice?.body[3]?.primary?.list10[0].text
                    : "E-commerce Portal."
                }
                list11={
                  slice
                    ? slice?.body[3]?.primary?.list11[0].text
                    : "Customer – Supplier Portal."
                }
                list12={
                  slice
                    ? slice?.body[3]?.primary?.list12[0].text
                    : "Wiki Portal."
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

export default Portal;
