import React, { useEffect } from "react";
import CardSingle from "../../common/Card/CardSingle";
import Aos from "aos";
import TextSingle from "../../common/TextCard/TextSingle";
import NormalText from "../../common/NormalText/NormalText";
import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import { usePrismicDocumentByUID } from "@prismicio/react";
const CardImgitems = [
  {
    src: "/phpImg1.jpeg",
    title: "Sencha",
    dataAos: "zoom-out-right",
    desc: "Deployment of end to end digital testing services framework.Sencha Touch is a user interface JavaScript library, or web framework, specifically built for the Mobile Web. It can be used by Web developers to develop user interfaces for mobile web applications that look and feel like native applications on supported mobile devices.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/phpImg2.jpeg",
    title: "Mono Framework",
    dataAos: "zoom-in",
    desc: "Esquare’s managed testing service addresses the key challenges the industry is facing today.Mono is a free and open-source project to create an Ecma standard-compliant .NET Framework-compatible software framework, including a C# compiler and a Common Language Runtime.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
  {
    src: "/phpImg3.jpeg",
    title: "Titanium ",
    dataAos: "zoom-out-left",
    desc: "Our solution focuses on testing of new and upcoming technologies.Titanium SDK is an open-source framework that allows the creation of native mobile apps on platforms including iOS, Android and Windows UWP from a single JavaScript codebase.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
];
const CardTextitems = [
  {
    title: "Enterprise CMS (ECMS)",
    dataAos: "fade-right",
    desc: "We offer all open source customization, programming and integration.Enterprise content management is the technology used to capture, manage, store, preserve, and deliver content and documents related to organizational processes. ECM tools and strategies allow the management of an organization's unstructured information, wherever that information exists.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Web CMS (WCMS)",
    dataAos: "fade-top",
    desc: "A web content management system (WCMS) is a software content management system (CMS) specifically for web content. It provides website authoring, collaboration, and administration tools that help users with little knowledge of web programming languages or markup languages create and manage website content.",
    className: "col-lg-4 col-md-6 mb-30 md-mt-30",
  },
  {
    title: "Electronic document",
    dataAos: "fade-left",
    desc: "PHP third party tool and plug-in integration such as chat, forum, blog and search engine. Web-based, open source document management system (DMS) written in PHP designed to comply with OIE standard for document management. It features web based access, fine grained control of access to files, and automated install and upgrades.",
    className: "col-lg-4 col-md-6 mb-30 md-mt-10",
  },
];
const WhiteColorText = {
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
const PHPFrame = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);
  const [document] = usePrismicDocumentByUID("outsourcing-partners", "phpid");
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/phpBg.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice ? slice?.body[2]?.primary?.card_text_bg_img.url : "contentbg2.jpg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    backgroundRepeat: " no-repeat",
  };
  const NormalTextbg = {
    backgroundSize: "cover",
    backgroundPosition: "cover",
    backgroundImage: `url("phpBg1.jpeg")`,
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
          textClass={WhiteColorText}
          image={item.src}
          visionicon={ImgWidth}
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
          textClass={WhiteColorText}
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
                      : "Php Framework"}
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
                      : " PHP applications are compatible to all operating systems, support all the popular databases, 100% remotely  configurable, perfect for web programming & provide higher performance and speed."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be  embedded into HTML."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.third_para_text[0].text
                      : "It is an open source, server-side, scripting language used  for the development of web applications. By scripting  language, we mean a program that is script-based (lines of  code) written for the automation of tasks."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.fourth_para_text[0].text
                      : "A good benefit of using PHP is that it can interact with many different database languages including MySQL. ... Those are the main reasons we use PHP at Bluelinemedia."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-ss main-home event-bg pt-50 pb-10"
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
            {slice ? PrismmicCardTextData : NormalCardTextData}
          </div>
        </div>
      </div>
      <div
        className="noraml-Text main-home event-bg pt-50 pb-30"
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
                    : "Our Client Say"
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
                    : "At Esquare, our outstanding PHP Web Development team counts on experienced PHP Web Developers who have effectively completed a number of PHP Web Programming projects like web portals, online shopping / e-commerce website development, CRM, CMS, social networking websites, community websites, and much more."
                }
                subtitle2={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_text[0].text
                    : "The PHP software works with the web server, which is the software that delivers web pages to the world. ... This process is essentially the same when PHP is installed. You request a file, the web server happens to be running PHP, and it sends HTML back to the browser, thanks to the programming in PHP."
                }
                subtitle3={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_sec_text[0].text
                    : "Cross-Platform. PHP is, an application can be run on various platforms."
                }
                subtitle4={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_third_text[0].text
                    : "Ease of use. Any individuals who are new to programming can easily learn to use them within a short duration of time."
                }
                subtitle5={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_fourth_text[0].text
                    : "Basic PHP Syntax. A PHP script can be placed anywhere in the document. The default file extension for PHP files is .php. A PHP file normally contains HTML tags, and some PHP scripting code."
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

export default PHPFrame;
