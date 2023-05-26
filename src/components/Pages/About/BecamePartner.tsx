import { useAllPrismicDocumentsByType } from "@prismicio/react";
import Aos from "aos";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import CardSingle from "../../common/Card/CardSingle";
import NormalText from "../../common/NormalText/NormalText";
const CardImgitems = [
  {
    src: "/BecamePartnerImg1.jpeg",
    title: "Service Provider",
    dataAos: "zoom-out-right",
    desc: "Provide Esquare's virtualization solutions, including hosted desktops and applications, on a rental, subscription or services basis is a technology partner that helps brand manufacturers streamline the process of getting product data to retailers.",
  },
  {
    src: "/BecamePartnerImg2.jpeg",
    title: "Solution advisor",
    dataAos: "zoom-in",
    desc: "Earn the trust of your customers as an expert in solutions to enable mobile workstyles, and earn incentives recognizing your commitment and success.Customer service is the service we provide fellow employees and other departments within our own organizations, as well as our suppliers and anyone else with whom we work to get our jobs done.",
  },
  {
    src: "/BecamePartnerImg3.jpeg",
    title: "SaaS Referral Partner",
    dataAos: "zoom-out-left",
    desc: "Recommend our industry-leading small business SaaS solutions to your customers and receive generous rewards for every qualifying referral.Referral software to help you get more customers. Quickly & easily integrate a referral program into your SaaS application or subscription website.",
  },
];
const whiteColor = {
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
const BecamePartner = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = useAllPrismicDocumentsByType("become_a_partner");
  const slice = document && document[0]?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/BecamePartner.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: " no-repeat",
  };
  const NormalTextbg = {
    backgroundSize: "cover",
    backgroundPosition: "cover",
    backgroundImage: `url(${
      slice
        ? slice?.body[2]?.primary?.normal_text_bg_img.url
        : "marketingbg1.jpeg"
    })`,
    backgroundRepeat: " no-repeat",
  };
  const NormalCardData = CardImgitems.map((item: any, index: any) => {
    return (
      <div
        className="col-lg-4 col-md-6 mb-30"
        data-aos={item.dataAos}
        data-aos-duration="1500"
        key={index}
      >
        <CardSingle
          itemClass="courses-item"
          titleSecClass={TitleColor}
          textClass={whiteColor}
          visionicon={ImgWidth}
          image={item.src}
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
  return (
    <React.Fragment>

      <div className="webportal main-home mt-128 md-mt-66" style={bg}>
      <Helmet>
        <title>Become Partner</title>
        <meta
          name="description"
          content="Join a community of recognized technology leaders and provide your customers with industry leading tools to deliver secure data and apps."
        />
        <link rel="canonical" href="http://esquareinfo.com/Become-A-Partner"/>
      </Helmet>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 md-pl-14">
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
                      : " Become a Esquare Partner"}
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
                      : " Join a community of recognized technology leaders and provide your customers with industry leading tools to deliver secure data and apps. By becoming a Esquare partner you can expand your business opportunities in new lucrative markets. Plan, deploy and manage Esquare solutions to increase profitability - for your business as well as your customer’s."}
                    <br />
                    <br />

                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "  A leading outsourced services provider, has put in place an effective business model, a fact borne out by the organization's world-class service delivery to its global clientele. Our customers, across a range of verticals, have benefited from increased productivity, sales, customer satisfaction, business value."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.third_para_text[0].text
                      : "If your offshore partner has experience in delivering the required services at the scale of your business needs. This can help you analyze if the particular outsourcing service provider is best suited for your business."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-ss main-home event-bg pt-50 pb-10 md-pt-30 md-pb-0"
        style={{ background: "#4f82c2" }}
      >
        <div className="container">
          <div className="row">
            {slice ? PrismicCardData: NormalCardData }
          </div>
        </div>
      </div>
      <div
        className="noraml-Text main-home event-bg pt-30  "
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
                    ? slice?.body[2]?.primary?.normal_text_first_title[0].text
                    : "Client Speak"
                }
                listClass="display-none"
                portalList="portal-none"
                twoList="twoList"
                threeList="threeList"
                cloudList="cloud-none"
                ecommerce="ecommerce-none"
                subtitle1={
                  slice
                    ? slice?.body[2]?.primary?.normal_text_first_text[0].text
                    : "The catalog is very impressive. Navigation is extremely fast, the image loading and flow, as we traverse the catalog, is very impressive"
                }
                subtitle2={
                  slice
                    ? slice?.body[2]?.primary?.normal_text_sec_text[0].text
                    : "The most exciting aspect of today’s business environment is the ability to customize your business to fit your talents, values and strengths. Your performance spikes when you’re doing work you love."
                }
                subtitle3={
                  slice
                    ? slice?.body[2]?.primary?.normal_text_third_text[0].text
                    : "Your business can’t grow in a vacuum. The more people know about you and respect your work, the easier it is to create the critical mass needed to fast forward your business growth."
                }
                subtitle4={
                  slice
                    ? slice?.body[2]?.primary?.normal_text_fourth_text[0].text
                    : "- Director of Operations of a Furniture retailer"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BecamePartner;
