import { usePrismicDocumentByUID } from "@prismicio/react";
import Aos from "aos";
import React, { useEffect } from "react";
import img1 from "../../../assets/img/DummyImg/ecommerceImg.jpg";
import CardSingle from "../../common/Card/CardSingle";
import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import NormalText from "../../common/NormalText/NormalText";
const CardImgitems = [
  {
    src: "/joomlaImg1.jpeg",
    title: "QT",
    dataAos: "zoom-out-right",
    desc: "Esquare’s Sales force Customer Experience team can help you to become a customer company.Clean and Fresh Styles Joomla Template based on the Ganry Framework and have unlimited background colors.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/joomlaImg2.jpeg",
    title: "Embedded C",
    dataAos: "zoom-in",
    desc: "Esquare's Salesforce expertise coupled with domain expertise across the various industries.Sourcerer enables you to place PHP and any kind of HTML style code (including CSS and JavaScript) right in to your content! Not only in your articles, but also in sections, categories, modules, components, META tags, etc",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/joomlaImg3.jpeg",
    title: "Visual C++",
    dataAos: "zoom-out-left",
    desc: "For smooth integration, our integration experts analyze and integrate enterprise applications with Sales Cloud, Service Cloud and Salesforce Platform with optimistic approach.",
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

const Joomla = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);
  const [document] = usePrismicDocumentByUID("mobile_development", "joomlaid");
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/joomlabg.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: " no-repeat",
  };

  const NormalTextbg = {
    backgroundSize: "cover",
    backgroundPosition: "cover",
    backgroundImage: `url(${
      slice ? slice?.body[2]?.primary?.list_bg_img.url : "joomlabg1.jpeg"
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
                      : "Joomla"}
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
                      : "Joomla is an award-winning content management system (CMS), which enables you to build Web sites and powerful online applications. Many aspects, including its ease-of-use and extensibility, have made Joomla the most popular Web site software available. Best of all, Joomla is an open source solution that is freely available to everyone."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "Joomla is the most popular open source CMS currently available as evidenced by a vibrant and growing community of friendly users and talented developers. Joomla's roots go back to 2000 and, with over 200,000 community users and contributors, the future looks bright for the award-winning Joomla Project."}

                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.third_para_text[0].text
                      : "Joomla is an open source Content Management System (CMS), which is used to build websites and online applications. It is free and extendable which is separated into front-end and back-end templates (administrator). Joomla is developed using PHP, Object Oriented Programming, software design patterns and MySQL (used for storing the data)."}
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
        className="noraml-Text main-home event-bg pt-50 pb-10 mb--130"
        style={NormalTextbg}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-4 "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[2]?.primary?.list_title[0].text
                    : "Joomla is used all over the world"
                }
                listClass="display-none"
                portalList="portal-none"
                twoList="twoList"
                threeList="threeList"
                cloudList="cloud-none"
                list13={
                  slice
                    ? slice?.body[2]?.primary?.list1[0].text
                    : "Corporate Web sites or portals"
                }
                list14={
                  slice
                    ? slice?.body[2]?.primary?.list2[0].text
                    : "Corporate intranets and extranets."
                }
                list15={
                  slice
                    ? slice?.body[2]?.primary?.list3[0].text
                    : "Non-profit and organizational Web sites"
                }
                list16={
                  slice
                    ? slice?.body[2]?.primary?.list4[0].text
                    : "Community-based portals"
                }
              />
            </div>
            <div
              className="col-lg-4 col-md-4 pt-22 sm-mt--200"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                listClass="display-none"
                portalList="portal-none"
                cloudList="cloud-none"
                ecommerce="ecommerce-none"
                twoList="twoList"
                list19={
                  slice
                    ? slice?.body[2]?.primary?.list5[0].text
                    : "Online magazines, newspapers, and publications"
                }
                list20={
                  slice
                    ? slice?.body[2]?.primary?.list6[0].text
                    : "E-commerce and online reservations"
                }
                list21={
                  slice
                    ? slice?.body[2]?.primary?.list7[0].text
                    : "School and church Web sites"
                }
              />
            </div>
            <div
              className="col-lg-4 col-md-4 pt-22 sm-mt--200"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                listClass="display-none"
                portalList="portal-none"
                cloudList="cloud-none"
                ecommerce="ecommerce-none"
                twoList="twoList"
                list19={
                  slice
                    ? slice?.body[2]?.primary?.list8[0].text
                    : "Government applications"
                }
                list20={
                  slice
                    ? slice?.body[2]?.primary?.list9[0].text
                    : "Small business Web sites"
                }
                list21={
                  slice
                    ? slice?.body[2]?.primary?.list10[0].text
                    : "Personal or family homepages"
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

export default Joomla;
