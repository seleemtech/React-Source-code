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
      src: "/microimg1.jpg",
      title: "Avoid the potholes",
      dataAos: "zoom-out-right",
      desc: "Thinking of migrating to the microservice architecture? If so, you should look at this presentation about the potholes in the road from monolithic hell and read this series of blog posts about anti-patterns and how to avoid them.",
      className: "col-lg-4 col-md-6 mb-30",
    },
    {
      src: "/DrupalImg2.jpeg",
      title: "3 C's of MicroServices",
      dataAos: "zoom-in",
      desc: "When you are ready to start adopting a microservices architecture and the associated development and deployment best practices, you'll want to follow the three C's of microservices: componentize, collaborate, and connect",
      className: "col-lg-4 col-md-6 mb-30",
    },
    {
      src: "/DrupalImg1.jpeg",
      title: "Maintenance Led Modernization",
      dataAos: "zoom-out-left",
      desc: "Improving business agility through application and infrastructure modernisation.unique approach to “de-risk” the entire transformation journey of the legacy systems. In order to transform the systems it is very important to transition the support of the systems and optimize the same first.",
      className: "col-lg-4 col-md-6 mb-30",
    },
  ];
  const CardTextitems = [
    {
      title: "lifecycle",
      dataAos: "fade-right",
      desc: "Just like the famous Software Development Life Cycle (SDLC), microservice development also has a life cycle process: first, design; second, build; next, deploy; then, maintain; and finally, manage.",
      className: "col-lg-4 col-md-6 mb-30",
    },
    {
      title: "execution",
      dataAos: "fade-top",
      desc: "The application handles requests (HTTP requests and messages) by executing business logic; accessing a database; exchanging messages with other systems",
      className: "col-lg-4 col-md-6 mb-30",
    },
    {
      title: "microservices adoption",
      dataAos: "fade-left",
      desc: "Many enterprise applications are large, complex monoliths that are developed by large teams that struggle to keep up with the needs of the business. Consequently, adopting the microservice architecture is an appealing option. ",
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
  

const MicroServices = () => {
    useEffect(() => {
        Aos.init();
        window.scrollTo({top:0,left:0, behavior: 'smooth',});
      }, []);
      const [document] = usePrismicDocumentByUID("mobile_development", "microid");
      const slice = document && document?.data;
      const bg = {
        backgroundImage: `url(${
          slice ? slice?.body[0]?.primary?.main_bg_img.url : "/micromainimg.jpeg"
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
        <title>Microservices</title>
        <meta
          name="description"
          content="Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services."
        />
        <link rel="canonical" href="http://esquareinfo.com/MicroServices"/>
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
                        : "Microservices"}
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
                        : "Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services."}
                      <br />
                      <br />
                      {slice
                        ? slice?.body[0]?.primary?.sec_para_text[0].text
                        : "The microservice architecture enables the rapid, frequent and reliable delivery of large, complex applications. It also enables an organization to evolve its technology stack."}
                         <br />
                      <br />
                      {slice
                        ? slice?.body[0]?.primary?.third_para_text[0].text
                        :  "A good starting point is the Monolithic Architecture pattern, which is the traditional architectural style that is still a good choice for many applications. It does, however, have numerous limitations and issues and so a better choice for large/complex applications is the Microservice architecture pattern."}
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
                      : "Key Features of MicroServices:"
                  }
                  portalList="portal-none"
                  ecommerce="ecommerce-none"
                  twoList="twoList"
                  threeList="threeList"
                  cloudList="cloud-none"
                  list1={
                    slice
                      ? slice?.body[3]?.primary?.list1[0].text
                      : "Independently deployable."
                  }
                  list2={
                    slice
                      ? slice?.body[3]?.primary?.list2[0].text
                      : "Loosely coupled."
                  }
                  list3={
                    slice
                      ? slice?.body[3]?.primary?.list3[0].text
                      : "Organized around business capabilities."
                  }
                  list4={
                    slice
                      ? slice?.body[3]?.primary?.list4[0].text
                      : "Owned by a small team."
                  }
                  list5={
                    slice
                      ? slice?.body[3]?.primary?.list5[0].text
                      : "Highly maintainable and testable."
                  }
                  list6={
                    slice
                      ? slice?.body[3]?.primary?.list6[0].text
                      : "Agility."
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <LifeSpan />
      </React.Fragment> );
}
 
export default MicroServices;