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
      src: "/dnetimg1.jpg",
      title: "Outstanding Technical Support",
      dataAos: "zoom-out-right",
      desc: "Providing dependable technical assistance and timely customer care are two of the main services offered by net development companies.",
      className: "col-lg-4 col-md-6 mb-30",
    },
    {
      src: "/dnetimg2.jpg",
      title: "Confidence",
      dataAos: "zoom-in",
      desc: "One of the primary reasons for this is that service providers give coding help. A customer may employ an IT expert and request assistance developing their Dot Net application in exchange for confidentiality.",
      className: "col-lg-4 col-md-6 mb-30 ",
    },
    {
      src: "/dnetimg3.jpg",
      title: "tools Benefits",
      dataAos: "zoom-out-left",
      desc: "The programmers at Dot Net Development can create their products using the technologies they utilize. They can develop a diverse variety of apps that are accessible to consumers and require a lot less initial expenditure.",
      className: "col-lg-4 col-md-6 mb-30 ",
    },
  ];
  const CardTextitems = [
    {
      title: "Flexible Deployment",
      dataAos: "fade-right",
      desc: "Flexible deployment is one of the most important .NET Core capabilities. The modular design considers all of the dependencies you’ll need. It’s as simple as copying a folder to get started.",
      className: "col-lg-4 col-md-6 mb-30",
    },
    {
      title: "Interoperability",
      dataAos: "fade-top",
      desc: "Interoperability allows developers of the .NET development company to keep and benefit from current unmanaged codes.",
      className: "col-lg-4 col-md-6 mb-30",
    },
    {
      title: "Growth potential",
      dataAos: "fade-left",
      desc: "It enables businesses to save money on new product development by avoiding the expenses associated with creating a product from the start. Net development services enable the creation of new applications that benefit consumers.",
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


const Net = () => {
    useEffect(() => {
        Aos.init();
        window.scrollTo({top:0,left:0, behavior: 'smooth',});
      }, []);
      const [document] = usePrismicDocumentByUID("mobile_development", "netid");
      const slice = document && document?.data;
      const bg = {
        backgroundImage: `url(${
          slice ? slice?.body[0]?.primary?.main_bg_img.url : "/dnetmainimg.jpg"
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
        <title>.Net</title>
        <meta
          name="description"
          content=".NET is a framework developed by Microsoft that allows developers to create a wide range of applications for the Windows operating system."
        />
        <link rel="canonical" href="http://esquareinfo.com/.Net"/>
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
                        :".Net"}
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
                        : ".NET is a framework developed by Microsoft that allows developers to create a wide range of applications for the Windows operating system using different programming languages like C#, F#, and Visual Basic. It includes a runtime environment, a set of class libraries, and tools for developing and deploying applications. The runtime environment manages the execution of code and provides services such as memory management, security, and exception handling."}
                      <br />
                      <br />
                      {slice
                        ? slice?.body[0]?.primary?.sec_para_text[0].text
                        :  " The class libraries are a set of pre-written code that developers can use to perform common tasks. The framework also includes features for improving the security and performance of applications."}
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
                      :"Key Features of .Net:"}
                  portalList="portal-none"
                  ecommerce="ecommerce-none"
                  twoList="twoList"
                  threeList="threeList"
                  cloudList="cloud-none"
                  list1={
                    slice
                      ? slice?.body[3]?.primary?.list1[0].text
                      :".NET framework allows developers to use multiple programming languages to create a single application. This means that code written in one language can easily interact with code written in another language."}
                  list2={
                    slice
                      ? slice?.body[3]?.primary?.list2[0].text
                      :"This framework is designed to support object-oriented programming (OOP) concepts, such as inheritance, polymorphism, and encapsulation, which makes it easier for developers to create reusable and maintainable code."}
                  list3={
                    slice
                      ? slice?.body[3]?.primary?.list3[0].text
                      :" The .NET framework includes a large set of pre-written class libraries that developers can use to perform common tasks such as reading and writing to files, connecting to databases, and working with the user interface."}
                  list4={
                    slice
                      ? slice?.body[3]?.primary?.list4[0].text
                      :" This framework includes features such as code access security and role-based security to help prevent unauthorized access to resources and protect sensitive data."}
                  list5={
                    slice
                      ? slice?.body[3]?.primary?.list5[0].text
                      :"This framework includes a garbage collector that automatically manages the memory used by an application, which helps to prevent memory leaks and improve performance."}
                  list6={
                    slice
                      ? slice?.body[3]?.primary?.list6[0].text
                      :"This framework includes a number of tools for developing and deploying applications, such as Visual Studio, which is an integrated development environment (IDE) for creating .NET applications."}
                  
                />
              </div>
            </div>
          </div>
        </div>
        <LifeSpan />
      </React.Fragment> );
}
 
export default Net;