import { usePrismicDocumentByUID } from "@prismicio/react";
import Aos from "aos";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import CardSingle from "../../common/Card/CardSingle";
import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";

const CardImgitems = [
  {
    src: "/springimg1.jpg",
    title: "Cloud",
    dataAos: "zoom-out-right",
    desc: "Provides support to easily develop some of the common distributed system patterns like service discovery, circuit breaker, and API gateway.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/springimg2.jpg",
    title: "Security",
    dataAos: "zoom-in",
    desc: "With minimal declarative support, user get protection against common attacks like session fixation, click-jacking, and cross-site request forgery.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
  {
    src: "/springimg3.jpg",
    title: "Boot",
    dataAos: "zoom-out-left",
    desc: "Provides us with a set of highly opinionated but extensible template for creating various projects based on Spring in almost no time. It makes it really easy to create standalone Spring applications with embedded Tomcat or a similar container.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
];
const CardTextitems = [
  {
    title: "Bootstrapping saves memory space",
    dataAos: "fade-right",
    desc: "Spring Boot uses Boot Initializer to compile the source language. This bootstrapping technique makes it possible for users to save space on their devices and load applications quickly.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Constant Transaction Management",
    dataAos: "fade-top",
    desc: "Spring provides an interface that can help scale down to a local transaction (for example, using a single database) and scale up to global transactions (for example, JTA).",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "POM dependency management",
    dataAos: "fade-left",
    desc: "Spring Boot doesn’t force you to use a parent POM (project object model). Adding the spring-boot-dependencies artifact lets you manage dependencies without relying on a parent POM or XML file.",
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

const SpringBoot = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = usePrismicDocumentByUID("mobile_development", "springbootid");
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/springmainimg.jpg"
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
      <Helmet>
        <title>Spring Boot</title>
        <meta
          name="description"
          content="Spring Boot is a Java-based framework used to create microservices and web applications."
        />
        <link rel="canonical" href="http://esquareinfo.com/SpringBoot"/>
      </Helmet>
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
                      : "Spring Boot"}
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
                      : "Spring Boot is a Java-based framework used to create microservices and web applications. It is built on top of the Spring framework and provides a set of tools and features for quickly creating and deploying new projects. "}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "Spring Boot makes it easy to get started with a new project by providing a set of pre-configured defaults and a simple, opinionated configuration. This helps developers to avoid the tedious and time-consuming task of manually configuring a new project from scratch."}
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
      <div className="card-Text main-home event-bg pt-50 pb-10 " style={Textbg}>
        <div className="container">
          <div className="row">
            {slice ? PrismmicCardTextData : NormalCardTextData}
          </div>
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
                    : "Key Features of Spring Boot:"
                }
                portalList="portal-none"
                ecommerce="ecommerce-none"
                twoList="twoList"
                threeList="threeList"
                cloudList="cloud-none"
                list1={
                  slice
                    ? slice?.body[3]?.primary?.list1[0].text
                    : "Spring Boot can run on any web server, but it also provides an embedded web server, such as Tomcat or Jetty, which can be started with a single command."
                }
                list2={
                  slice
                    ? slice?.body[3]?.primary?.list2[0].text
                    : "Spring Boot automatically configures the application based on the dependencies that are included in the project's classpath."
                }
                list3={
                  slice
                    ? slice?.body[3]?.primary?.list3[0].text
                    : "Spring Boot provides a command-line interface (CLI) tool, which can be used to quickly create new projects and generate code."
                }
                list4={
                  slice
                    ? slice?.body[3]?.primary?.list4[0].text
                    : "Spring Boot provides a set of development tools which makes development process faster by providing features like hot reloading, Live reload etc."
                }
                list5={
                  slice
                    ? slice?.body[3]?.primary?.list5[0].text
                    : "Spring Boot provides support for ORM (Object-Relational Mapping) frameworks such as JPA and Hibernate."
                }
                list6={
                  slice
                    ? slice?.body[3]?.primary?.list6[0].text
                    : "Spring Boot provides a comprehensive test framework for unit testing and integration testing."
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

export default SpringBoot;

