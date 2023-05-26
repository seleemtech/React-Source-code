import Aos from "aos";
import React, { useEffect } from "react";

import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";
import CardSingle from "../../common/Card/CardSingle";
import { usePrismicDocumentByUID } from "@prismicio/react";
const CardImgitems = [
  {
    src: "/onlineImg1.jpeg",
    title: "Retail",
    dataAos: "zoom-out-right",
    desc: "where marketers try to create valuable media and content and distribute it to potential future customers.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/onlineImg2.jpeg",
    title: "Manufacturing",
    dataAos: "zoom-in",
    desc: "where you use one or several social media channels to engage with customers, build relationships and then send them to your products and services.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/onlineImg3.jpeg",
    title: "Health Care",
    dataAos: "zoom-out-left",
    desc: "Is a kind of referral marketing, where you share profits with fellow marketers, in exchange for promoting each other’s products.",
    className: "col-lg-4 col-md-6 mb-30",
  },
];
const CardTextitems = [
  {
    title: "Content Marketing",
    dataAos: "fade-right",
    desc: "where marketers try to create valuable media and content and distribute it to potential future customers.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Social Media Marketing",
    dataAos: "fade-top",
    desc: "where you use one or several social media channels to engage with customers, build relationships and then send them to your products and services.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Affiliate Marketing",
    dataAos: "fade-left",
    desc: "Is a kind of referral marketing, where you share profits with fellow marketers, in exchange for promoting each other’s products.",
    className: "col-lg-4 col-md-6 mb-30",
  },
];
const blackColorText = {
  color: "black",
};
const TitleColor = {
  color: "black",
  textAlign: "center",
};
    const ImgWidth = {
      height: "auto",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    };
const OnlineMarketing = () => {
    useEffect(() => {
        Aos.init();
        window.scrollTo(0, 0);
      }, []);
      const [document] = usePrismicDocumentByUID(
        "outsourcing-partners",
        "onlineid"
      );
      const slice = document && document?.data;
      const bg = {
        backgroundImage: `url(${
          slice ? slice?.body[0]?.primary?.main_bg_img.url :"/onlineBg.jpeg"})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        minHeight: "auto",
        backgroundRepeat: " no-repeat",
      };
      const Textbg = {
        backgroundImage: `url(${
          slice ? slice?.body[2]?.primary?.card_text_bg_img.url :"onlineBg2.jpeg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "auto",
        backgroundRepeat: " no-repeat",
      };
      const NormalTextbg = {
        backgroundImage: `url(${
          slice ? slice?.body[3]?.primary?.normal_text_bg_img.url :"/onlineBg3.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "cover",
        minHeight: "auto",
        backgroundRepeat: " no-repeat",
      };
   
      console.log(slice)
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
                      :"Online Marketing Services"}
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
                      :"Having a website that ranks low in a search engine can't make your business grow. You are missing the boat if you think that just owning a website is more than enough to reach your targeted audience."}
                      <br />
                      <br />
                      {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      :" Benefits of doing business online. You don't have to run your entire business over the internet to benefit from online business opportunities. Small businesses might only need an email address to communicate with their clients, customers and suppliers electronically. ... improved client service through greater flexibility."}
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card-ss main-home event-bg pt-50 pb-10"
          style={{ background: "#FFD401" }}
        >
          <div className="container">
            <div className="row">
              {slice ? PrismicCardData : NormalCardData}
            </div>
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
          className="noraml-Text main-home event-bg pt-50  mb--30"
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
                      :"Effective online marketing"}
                  listClass="display-none"
                  twoList="twoList"
                  threeList="threeList"
                  portalList="portal-none"
                  cloudList="cloud-none"
                  ecommerce="ecommerce-none"
                  subtitle1={
                    slice
                      ? slice?.body[3]?.primary?.normal_text_first_text[0].text
                      :"Effective online marketing will put your products or services in front of the people who really need them. Even if you don’t sell anything directly online, your business can still benefit from an internet marketing strategy that tells the world’s biggest marketplace all about whom you are and what you’ve got to offer."}
                  subtitle2={
                    slice
                      ? slice?.body[3]?.primary?.normal_text_sec_text[0].text
                      :"As a n open marketplace, Google Play puts you in control of how you sell your products. You can publish whenever you want, as often as you want, and to the customers you want. You can distribute broadly to all markets and devices or focus on specific segments, devices, or ranges of hardware capabilities."}
                />
              </div>
            </div>
          </div>
        </div>
        <LifeSpan />
      </React.Fragment>);
}
 
export default OnlineMarketing;