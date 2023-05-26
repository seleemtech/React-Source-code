import { usePrismicDocumentByUID } from "@prismicio/react";
import Aos from "aos";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";

const CardTextitems = [
  {
    title: "E - commerce",
    dataAos: "fade-right",
    desc: "E-commerce can be a fully integrated solution or a technical front-end to a business that otherwise isn't wired. You can advertise for your offline store online and drive traffic to it, or you can offer your customers to purchase from your store online. Today, millions of businesses are linked online and it has proved to be very beneficial financially.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Statistics",
    dataAos: "fade-top",
    desc: "Take these statistics: 57% of consumers are likely to take action based on the information from a brand representative, and 62% of consumers have indicated that information from a brand representative would be more valuable than advertisements or promotional materials. Shoppers can visit the Web site at their convenience to find the information they need to purchase a product.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
  {
    title: "Complexities",
    dataAos: "fade-left",
    desc: "We at Esquare understand the complexities of an E-commerce portal and provide a simplified solution in building a robust E-commerce portal which is scalable. We provide solutions which include technologies like Magento.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
];
const Ecommerce = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = usePrismicDocumentByUID(
    "mobile_development",
    "ecommerceid"
  );
  const slice = document && document?.data;
  console.log(slice)
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url :"/ecommerceBg1.jpeg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice
        ? slice?.body[1]?.primary?.card_text_bg_img.url
        :"ecommerceBg2.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto",
    backgroundRepeat: " no-repeat",
  };
  const NormalTextbg = {
    backgroundSize: "100% 100%",
    backgroundPosition: "cover",
    backgroundImage: `url(${
      slice ? slice?.body[2]?.primary?.list_bg_img.url :"ecommerceBg3.jpg"})`,
    backgroundRepeat: " no-repeat",
  };
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
  const PrismmicCardTextData = slice?.body[1]?.items?.map(
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
        <title>E-commerce</title>
        <meta
          name="description"
          content="E-commerce can be a fully integrated solution or a technical front-end to a business that otherwise isn't wired."
        />
        <link rel="canonical" href="http://esquareinfo.com/E-commerce"/>
      </Helmet>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 sd-lg-4">
                <div className="sec-title3 mb-40">
                  <h2
                    className="title white-color mb-16 Heading"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1800"
                    style={{ fontSize: "20px", paddingTop:"150px"}}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.main_title[0].text
                      :"E - commerce Solutions"}
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
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-Text main-home event-bg pt-50 pb-10"
        style={Textbg}
      >
        <div className="container">
          <div className="row">
            {slice ? PrismmicCardTextData : NormalCardTextData}
          </div>
        </div>
      </div>
      <div
        className="noraml-Text main-home event-bg pt-50 "
        style={NormalTextbg}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-11 col-md-6 mb--100"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[2]?.primary?.list_title[0].text
                    :"Features of E-commerce"}
                twoList="twoList"
                threeList="threeList"
                portalList="portal-none"
                cloudList="cloud-none"
                list1={
                  slice
                    ? slice?.body[2]?.primary?.list1[0].text
                    :"Online Shopping."}
                list2={
                  slice
                    ? slice?.body[2]?.primary?.list2[0].text
                    :"Online Banking."}
                list3={
                  slice
                    ? slice?.body[2]?.primary?.list3[0].text
                    :"Order Tracking."}
                list4={
                  slice
                    ? slice?.body[2]?.primary?.list4[0].text
                    :"Shopping Cart."}
                list5={
                  slice
                    ? slice?.body[2]?.primary?.list5[0].text
                    : "Payment Systems."}
                list6={
                  slice
                    ? slice?.body[2]?.primary?.list6[0].text
                    :"Social Networking & Review System."}
                list13={
                  slice
                    ? slice?.body[2]?.primary?.list7[0].text
                    :"Electronic Tickets."}
                list14={
                  slice
                    ? slice?.body[2]?.primary?.list8[0].text
                    :"Email Marketing."}
                list15={
                  slice
                    ? slice?.body[2]?.primary?.list9[0].text
                    :"Enterprise Content Management."}
                list16={
                  slice
                    ? slice?.body[2]?.primary?.list10[0].text
                    :"Instant Messaging."}
              />
            </div>
          </div>
        </div>
      </div>
      <LifeSpan />
    </React.Fragment>
  );
};

export default Ecommerce;
