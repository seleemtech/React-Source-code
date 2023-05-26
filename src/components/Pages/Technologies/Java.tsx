import { usePrismicDocumentByUID } from "@prismicio/react";
import Aos from "aos";
import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import CardSingle from "../../common/Card/CardSingle";
import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";
const CardImgitems = [
  {
    src: "/javaimg1.jpg",
    title: "Cost-effective Development",
    dataAos: "zoom-out-right",
    desc: "The application which is developed under Java is needed to test for every possible environment and browser.  The user need not be oriented for any type of web browser and develop versions.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/javaimg2.jpg",
    title: "Enhanced Security",
    dataAos: "zoom-in",
    desc: "The applications are usually deployed on dedicated servers. They can be easily maintained and monitored by experienced server administrators. The potential security breaches of Java applications are comparatively tighter.",
    className: "col-lg-4 col-md-6 mb-30 sm-mt-105",
  },
  {
    src: "/javaimg3.jpeg",
    title: "Easy to maintain and install",
    dataAos: "zoom-out-left",
    desc: "we can easily install and maintain as the Java applications are web-based. If a new version is installed by the company the users can easily upgrade and feature easily. The new software can even be upgraded in the new versions.",
    className: "col-lg-4 col-md-6 mb-30 sm-mt-30",
  },
];
const CardTextitems = [
  {
    title: "Scalable and Reliable",
    dataAos: "fade-right",
    desc: "Java appears to be an all-round universal solution for every enterprise. So, it’s the fact that libraries are the basic structural units of any enterprise solution. You will find many loopholes in other programming languages, whereas, Java is able to tick the box on an issue way quicker and better.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Cross-platform Compatibility",
    dataAos: "fade-top",
    desc: "In the current time, many banks, retailers, manufacturers, insurance companies use Java for their app development. It's quite easy to understand and scalable language for both web and mobile application development as the Android platform is driven by Java.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Simplicity",
    dataAos: "fade-left",
    desc: "The simplicity of Java is what attracts enterprises. It’s very easy and flexible to code in Java, while it also renders an easily understandable user interface for applications.",
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
const Java = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = usePrismicDocumentByUID("mobile_development", "javaid");
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/java.png"
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
        <title>Java</title>
        <meta
          name="description"
          content="Java is a programming language that is widely used for building different types of software applications."
        />
         <link rel="canonical" href="http://esquareinfo.com/Java"/>
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
                      : "Java"}
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
                      : "Java is a programming language that is widely used for building different types of software applications. It is a powerful and versatile language that is easy to learn, even for people new to programming.Java is class-based, object-oriented, and designed to have as few implementation dependencies as possible. This makes it an ideal language for building mobile apps, web applications, games, and other software."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "One of the main advantages of Java is its 'Write once, run anywhere' (WORA) principle, which means that the code written in Java can run on any platform that supports Java, such as Windows, Mac, or Linux, without modification. This makes it a popular choice for enterprise applications and cross-platform development."}
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
          <div className="row">{slice ?PrismicCardData : NormalCardData    }</div>
        </div>
      </div>
      <div className="card-Text main-home event-bg pt-50 pb-10 " style={Textbg}>
        <div className="container">
          <div className="row">
            {slice ? PrismmicCardTextData : NormalCardTextData   }
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
                  slice!
                    ? slice?.body[3]?.primary?.list_title[0].text
                    : "Key Features of Java:"
                }
                portalList="portal-none"
                ecommerce="ecommerce-none"
                twoList="twoList"
                cloudList="cloud-none"
                threeList="threeList"
                list1={
                  slice
                    ? slice?.body[3]?.primary?.list1[0].text
                    : "Java is an object-oriented programming language, which means it is built around the concept of objects, classes and their interactions. "
                }
                list2={
                  slice
                    ? slice?.body[3]?.primary?.list2[0].text
                    : "Java code can run on any platform that supports Java, which makes it easy to learn and run on different systems."
                }
                list3={
                  slice
                    ? slice?.body[3]?.primary?.list3[0].text
                    : "Java has an automatic memory management feature which helps to reduce the chances of memory leaks and improve the overall performance of the application "
                }
                list4={
                  slice
                    ? slice?.body[3]?.primary?.list4[0].text
                    : "Java has a large developer community and a wide range of libraries and frameworks available, making it easy to find support and resources for development. "
                }
                list5={
                  slice
                    ? slice?.body[3]?.primary?.list5[0].text
                    : "Java is a popular language among beginners because of its wide range of application such as Android, Web, Backend and many more."
                }
                list6={
                  slice
                    ? slice?.body[3]?.primary?.list6[0].text
                    : "Java is widely used in industry for developing different types of applications "
                }
                
              />
            </div>
          </div>
        </div>
      </div>
      <LifeSpan />{" "}
    </React.Fragment>
  );
};

export default Java;
