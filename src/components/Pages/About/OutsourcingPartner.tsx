import React, { useEffect } from "react";
import CardSingle from "../../common/Card/CardSingle";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";
import Aos from "aos";
import {
  usePrismicDocumentByUID,
} from "@prismicio/react";
import { Helmet } from "react-helmet";
const CardImgitems = [
  {
    src: "/outpartnerimg1.jpeg",
    title: "Oracle Cloud Assessment",
    dataAos: "zoom-out-right",
    desc: "Oracle Cloud Assessment which is designed to help organizations prepare a business case and help develop a cloud adoption roadmap.",
  },
  {
    src: "/outpartnerimg2.jpeg",
    title: "Implementations and Roll Outs",
    dataAos: "zoom-in",
    desc: "The Oracle Cloud Fixed Scope Offering (FSO) from Technologies is designed by incorporating leading practices to provide a Fast Track",
  },
  {
    src: "/outpartnerimg3.jpeg",
    title: "Oracle Sales Cloud",
    dataAos: "zoom-out-left",
    desc: "Today’s selling organizations face unprecedented competition.customer relationship management solution that offers capabilities and features enabling companies to significantly grow through accelerated sales, improved customer engagement.",
  },
];
const CardTextitems = [
  {
    title: "Establish open communication",
    dataAos: "fade-right",
    desc: "where you voice concerns to the service provider through healthy and transparent dialog by involving appropriate stakeholders from both sides on equal conditions with a transparent relation between cost and pricing, to get access to and share communication resources on one level to provide value added services on another level in a layered communication.",
  },
  {
    title: "Realign priorities to reset relationship",
    dataAos: "fade-top",
    desc: "where you create a plan that identifies milestones and check points, and articulates what success looks likethe flow of information between people, is a very important part of the workplace. Managers must be able to communicate with employees and employees must be able to communicate with managers in order to have a profitable business.",
  },
  {
    title: "Stability of Core Systems",
    dataAos: "fade-left",
    desc: "To build resilience and adaptability in enterprises.Repeating the obvious - repeating orders is common, but it is never more important than in a code situation.",
  },
];
const ImgWidth = {
  width: "100%",
  height: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};
const whiteColor = {
  color: "white",
};
const OutSourcingPartner = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);

  const [document] = usePrismicDocumentByUID(
    "outsourcing-partners",
    "outsource_page"
  );
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/partnerbg1.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",

    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice
        ? slice?.body[2]?.primary?.card_text_bg_img.url
        : "outpartnerbg2.gif"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    backgroundRepeat: " no-repeat",
  };
  const NormalTextbg = {
    backgroundSize: "cover",
    backgroundImage: `url(${
      slice
        ? slice?.body[3]?.primary?.normal_text_bg_img.url
        : "outpartnerbg3.jpeg"
    })`,
    backgroundRepeat: " no-repeat",
  };
  const NormalCardTextData = CardTextitems.map((item: any, index: any) => {
    return (
      <div
        className="col-lg-4 col-md-6 "
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

  const NormalCardData = CardImgitems.map((item: any, index: any) => {
    return (
      <div
        className="col-lg-4 col-md-6 mb-10"
        data-aos={item.dataAos}
        data-aos-duration="1500"
        key={index}
      >
        <CardSingle
          itemClass="courses-item"
          titleSecClass={whiteColor}
          textClass={whiteColor}
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
        className="col-lg-4 col-md-6 mb-30"
        data-aos={item.mv_data_aos[0].text}
        data-aos-duration="1500"
        key={i}
      >
        <CardSingle
          itemClass="courses-item"
          titleSecClass={whiteColor}
          textClass={whiteColor}
          visionicon={ImgWidth}
          image={item.mv_img.url}
          title={item.mv_title[0].text}
          subtitle={item.mv_desc[0].text}
        />
      </div>
    );
  });
  const PrismmicCardTextData = slice?.body[2]?.items?.map(
    (item: any, index: any) => {
      return (
        <div
          className="col-lg-4 col-md-6 mb-10"
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
      <div className="webportal main-home mt-128 md-mt-66 " style={bg}>
      <Helmet>
        <title>Outsourcing Partners</title>
        <meta
          name="description"
          content="All you need to do is let us know what your overall objectives are for your business."
        />
        <link rel="canonical" href="http://esquareinfo.com/Outsourcing-Partners"/>
      </Helmet>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 ">
                <div className="sec-title3 ">
                  <h2
                    className="title white-color  Heading"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1800"
                    style={{ fontSize: "20px" }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.main_title[0].text
                      : " Outsourcing Partners"}
                  </h2>
                  <p
                    className="desc white-color  sub-text"
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
                      : "  All you need to do is let us know what your overall objectives are for your business. We then get back to you with a comprehensive plan that details our specific recommendations and a proposal to assist in enhancing your business."}

                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "Businesses are required to focus their attention and time on vital activities, including generating new business. Allow us the ability to oversee complete development until the end. You have many things to worry about, let outsourcing partners take care of Outsourcing Companies."}

                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.third_para_text[0].text
                      : "The different kinds of customers that they have provided services for and the number of projects that they have completed. Find out if your offshore partner has experience in delivering the required services at the scale of your business needs. This can help you analyze if the particular outsourcing service provider is best suited for your business."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-ss main-home event-bg pt-50 pb-30"
        style={{ background: "#4f82c2" }}
      >
        <div className="container">
          <div className="row">{slice ? PrismicCardData : NormalCardData}</div>
        </div>
      </div>
      <div
        className="card-Text main-home event-bg pt-50 pb-30 "
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
              className="col-lg-11 col-md-11"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_title[0].text
                    : "Value Proposition"
                }
                listClass="display-none"
                portalList="portal-none"
                cloudList="cloud-none"
                twoList="twoList"
                threeList="threeList"
                ecommerce="ecommerce-none"
                normal_text_first_text
                subtitle1={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_text[0].text
                    : "Where you evaluate and implement appropriate changes in behavior of internal organization that fosters a partnership environment."
                }
                subtitle2={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_sec_text[0].text
                    : "Is a promise of value to be delivered, communicated, and acknowledged. It is also a belief from the customer about how value (benefit) will be delivered, experienced and acquired. ... Creating a value proposition is a part of business strategy."
                }
                subtitle3={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_third_text[0].text
                    : "Executives set value propositions for their products — the target market segments, the benefits they provide, and their prices. It's why a target customer should buy the product. But value propositions go beyond just products. Your personal value proposition (PVP) is at the heart of your career strategy."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OutSourcingPartner;
