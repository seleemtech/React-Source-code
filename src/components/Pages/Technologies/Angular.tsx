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
      src: "/angim1.jpg",
      title: "Improved Speed and Performance",
      dataAos: "zoom-out-right",
      desc: "The diversity of Angular capabilities, for instance, template syntax, Angular CLI, routers, etc. make programmer’s work easier and enable quick loading of the application.",
      className: "col-lg-4 col-md-6 mb-30",
    },
    {
      src: "/angimg2.png",
      title: "Google Support",
      dataAos: "zoom-in",
      desc: "Google created Angular to use it internally for its official websites and solve problems in Google's internal systems.",
      className: "col-lg-4 col-md-6 mb-30 ",
    },
    {
      src: "/angimg3.jpg",
      title: "High Quality of the Application",
      dataAos: "zoom-out-left",
      desc: "Angular is a complex platform that’s difficult to learn, so it requires proper qualifications from a developer. Numerous structural elements that include Injectors, Components, Directives, Pipes, Services, etc. might be challenging for beginning developers to learn.",
      className: "col-lg-4 col-md-6 mb-30 ",
    },
  ];
  const CardTextitems = [
    {
      title: "Efficient Problem-Solving Patterns",
      dataAos: "fade-right",
      desc: "Angular offers powerful DI (dependency injection) instrument and services to resolve various productivity issues and speed up the development process.",
      className: "col-lg-4 col-md-6 mb-30",
    },
    {
      title: "Excellent Material Design Library",
      dataAos: "fade-top",
      desc: "Programmers choose Angular Material because once they learned it, it gets easier and faster to incorporate Angular design elements in further projects.",
      className: "col-lg-4 col-md-6 mb-30",
    },
    {
      title: "Faster Development Process",
      dataAos: "fade-left",
      desc: "The Angular framework allows a developer to build Angular web apps faster and make them highly efficient due to the technical advantages offered by the framework.",
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

const Angular = () => {
    useEffect(() => {
        Aos.init();
        window.scrollTo({top:0,left:0, behavior: 'smooth',});
      }, []);
      const [document] = usePrismicDocumentByUID("mobile_development", "angularid");
      const slice = document && document?.data;
      const bg = {
        backgroundImage: `url(${
          slice ? slice?.body[0]?.primary?.main_bg_img.url : "/angularmainImg.png"
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
    return (  <React.Fragment>

        <div className="webportal main-home mt-128 md-mt-66" style={bg}>
        <Helmet>
        <title>Angular</title>
        <meta
          name="description"
          content="Angular is a JavaScript framework for building web applications. It is developed and maintained by Google and is used for creating dynamic."
        />
        <link rel="canonical" href="http://esquareinfo.com/Angular"/>
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
                        :"Angular"}
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
                        : "Angular is a JavaScript framework for building web applications. It is developed and maintained by Google and is used for creating dynamic, interactive single-page applications (SPAs)."}
                      <br />
                      <br />
                      {slice
                        ? slice?.body[0]?.primary?.sec_para_text[0].text
                        :  "Angular uses a component-based architecture and a declarative approach to development, making it easier to build and maintain large-scale projects. It also includes features such as dependency injection, two-way data binding, and a powerful template system. Angular is often used in conjunction with other technologies such as TypeScript and RxJS to build robust and scalable web applications."}
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
                      :"Key Features of Angular:"}
                  portalList="portal-none"
                  ecommerce="ecommerce-none"
                  twoList="twoList"
                  threeList="threeList"
                  list1={
                    slice
                      ? slice?.body[3]?.primary?.list1[0].text
                      :"Angular uses a modular, component-based approach to building web applications, making it easy to organize and maintain large-scale projects."}
                  list2={
                    slice
                      ? slice?.body[3]?.primary?.list2[0].text
                      :"Angular provides a two-way data binding feature, which allows changes made in the model to be automatically reflected in the view, and vice versa."}
                  list3={
                    slice
                      ? slice?.body[3]?.primary?.list3[0].text
                      :"Angular uses a template-based approach to building user interfaces, which allows developers to create reusable components and dynamic views."}
                  list4={
                    slice
                      ? slice?.body[3]?.primary?.list4[0].text
                      :"Angular provides a testing framework, which allows developers to easily write unit tests for their components and services."}
                  list5={
                    slice
                      ? slice?.body[3]?.primary?.list5[0].text
                      :"Angular is written in TypeScript, which is a typed superset of JavaScript that offers better code readability and maintainability."}
                  list6={
                    slice
                      ? slice?.body[3]?.primary?.list6[0].text
                      :"Angular has a powerful CLI(Command Line Interface) that allows developers to easily build mobile apps for iOS and Android platforms using the same codebase."}
                list22={
                    slice
                      ? slice?.body[3]?.primary?.list7[0].text
                      :"Angular allows developers to build web, desktop and mobile apps using the same codebase."}
                  
                />
              </div>
            </div>
          </div>
        </div>
        <LifeSpan />
      </React.Fragment>  );
}
 
export default Angular;