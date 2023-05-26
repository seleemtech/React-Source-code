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
      src: "/reactimg1.jpg",
      title: "Community Support",
      dataAos: "zoom-out-right",
      desc: "Knowing that the technology you choose is community-driven is a calming thought for any business endeavor. One of the benefits of using React.js is its exceptional community support over time. Although Meta maintains the framework, React has a massive community of developers worldwide.",
      className: "col-lg-4 col-md-6 mb-30",
    },
    {
      src: "/reactimg2.png",
      title: "Improved Development Productivity",
      dataAos: "zoom-in",
      desc: "You can remove the heavy foundation processes when working on the application, leaving only the obligatory ones. These decisions eventually lead to narrowing down the work scope, alongside boosting your development team productivity.",
      className: "col-lg-4 col-md-6 mb-30 ",
    },
    {
      src: "/reactimg3.jpg",
      title: "Learning Curve",
      dataAos: "zoom-out-left",
      desc: " An accessible learning curve is one of many benefits of using React.js and staying with this framework for your project. Since this option is adaptable, easy-to-learn, and has solid community support, sticking to it is a great way to maintain your project in the long run.",
      className: "col-lg-4 col-md-6 mb-30 ",
    },
  ];
  const CardTextitems = [
    {
      title: "Testing Capacities",
      dataAos: "fade-right",
      desc: "maintaining the ability to test the application, developers get a chance to analyze the app's performance on various device types. Data tracking and quick debugging are efficient approaches in app development, allowing you to execute proper testing within your development team.",
      className: "col-lg-4 col-md-6 mb-30",
    },
    {
      title: "SEO-Friendliness",
      dataAos: "fade-top",
      desc: "React.js is capable of making sure that the render is performed way faster than in other frameworks, ensuring it works at lightning speed, thus reducing the loading times. While this parameter seems minuscule, its importance is exceptional for the SEO-friendliness of your app.",
      className: "col-lg-4 col-md-6 mb-30",
    },
    {
      title: "Stability",
      dataAos: "fade-left",
      desc: "React.js has a stable core that uses downward data flow. Even when your developers start tweaking the app’s structure, all other elements remain unchanged, allowing you to make amendments as you proceed with the development. All these stability perks combined make React.js a favorable choice for business apps that value stability and user-friendliness",
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
const Reacts = () => {
    useEffect(() => {
        Aos.init();
        window.scrollTo({top:0,left:0, behavior: 'smooth',});
      }, []);
      const [document] = usePrismicDocumentByUID("mobile_development", "reactid");
      const slice = document && document?.data;
      const bg = {
        backgroundImage: `url(${
          slice ? slice?.body[0]?.primary?.main_bg_img.url : "/reactmainimg.jpg"
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
    return ( <React.Fragment>

        <div className="webportal main-home mt-128 md-mt-66" style={bg}>
        <Helmet>
        <title>React</title>
        <meta
          name="description"
          content="React is a JavaScript library for building user interfaces. It is used for building complex, interactive web applications."
        />
        <link rel="canonical" href="http://esquareinfo.com/React"/>
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
                        :"React"}
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
                        : "React is a JavaScript library for building user interfaces. It is used for building complex, interactive web applications and allows developers to create reusable UI components and manage the state of their application in an efficient way. React uses a virtual DOM (Document Object Model) which optimizes updates and improves the overall performance of the application."}
                      <br />
                      <br />
                      {slice
                        ? slice?.body[0]?.primary?.sec_para_text[0].text
                        :  "React was initially released by Facebook in 2011, and is now maintained by a large community of developers."}
                      <br />
                      <br />
                      {slice
                        ? slice?.body[0]?.primary?.third_para_text[0].text
                        :  "React is commonly used in combination with other libraries or frameworks, such as Redux or React Router, to build full-featured web applications."}
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
                      :"Key Features of React:"}
                  portalList="portal-none"
                  ecommerce="ecommerce-none"
                  twoList="twoList"
                  threeList="threeList"
                  list1={
                    slice
                      ? slice?.body[3]?.primary?.list1[0].text
                      :"React allows developers to build reusable UI components, which can be easily composed to create complex user interfaces."}
                  list2={
                    slice
                      ? slice?.body[3]?.primary?.list2[0].text
                      :"React uses a virtual DOM, which optimizes updates and improves the overall performance of the application"}
                  list3={
                    slice
                      ? slice?.body[3]?.primary?.list3[0].text
                      :"React follows a unidirectional data flow model, which makes it easier for developers to manage and update the state of their application."}
                  list4={
                    slice
                      ? slice?.body[3]?.primary?.list4[0].text
                      :"React uses JSX, a syntax extension for JavaScript, which allows developers to write HTML-like elements in their JavaScript code."}
                  list5={
                    slice
                      ? slice?.body[3]?.primary?.list5[0].text
                      :"React can be rendered on the server-side which improves the performance of the application and makes it SEO-friendly."}
                  list6={
                    slice
                      ? slice?.body[3]?.primary?.list6[0].text
                      :"React has a large and active community of developers, who contribute to the library and create a wide range of tools and resources."}
                list22={
                    slice
                      ? slice?.body[3]?.primary?.list7[0].text
                      :"React also has a mobile development framework called React Native which allows developers to build native mobile applications."}
                  
                />
              </div>
            </div>
          </div>
        </div>
        <LifeSpan />
      </React.Fragment> );
}
 
export default Reacts;