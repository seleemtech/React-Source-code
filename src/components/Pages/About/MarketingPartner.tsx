import Aos from "aos";
import React, { useEffect } from "react";
import CardSingle from "../../common/Card/CardSingle";
import TextSingle from "../../common/TextCard/TextSingle";
import NormalText from "../../common/NormalText/NormalText";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Helmet } from "react-helmet";

const CardImgitems = [
  {
    src: "/marketingimg1.jpeg",
    title: "Managed Services",
    dataAos: "zoom-out-right",
    desc: "Application management and support is most often an information technology (IT) services provider that manages and assumes responsibility for providing a defined set of services to its clients either proactively or as the MSP (not the client) determines that services are needed.",
  },
  {
    src: "/marketingimg2.jpeg",
    title: "Process Implementation & Enhancement",
    dataAos: "zoom-in",
    desc: "Function analytics, Budgeting & Consolidation design and implementation Process Implementation & Enhancement.is the process that turns strategies and plans into actions in order to accomplish strategic objectives and goals. Implementing your strategic plan is as important, or even more important, than your strategy.",
  },
  {
    src: "/marketingimg3.jpeg",
    title: "Business Strategy",
    dataAos: "zoom-out-left",
    desc: "Assessment, implementation roadmap, Information Management framework, BICC Framework Map the Process. Once you've decided which process you want to improve, document each step using a Flowchart.",
  },
];
const CardTextitems = [
  {
    title: "Market aligned",
    dataAos: "fade-right",
    desc: "Customer Focus, which includes using innovation, customer engagement and market research tools to create market-driven products and processes designed to gain and retain customer loyalty.",
  },
  {
    title: "Outcome driven",
    dataAos: "fade-top",
    desc: "Organizational Advancement, which views the organization itself as the product and focuses on developing both strategy and organizational capabilities.",
  },
  {
    title: "Enterprise of the Future",
    dataAos: "fade-left",
    desc: "Revenue Enhancement, which employs fundraising and marketing tools to identify and tap new sources of revenue.",
  },
];

const whiteColor = {
  color: "white",
};

const MarketingPartner = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = useAllPrismicDocumentsByType("marketing-partner");
  const slice = document && document[0]?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/marketingbg.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",

    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice ? slice?.body[2]?.primary?.card_text_bg_img.url : "textBack.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    backgroundRepeat: " no-repeat",
  };
  const NormalTextbg = {
    backgroundSize: "cover",
    backgroundPosition: "cover",
    backgroundImage: `url(${
      slice
        ? slice?.body[3]?.primary?.normal_text_bg_img.url
        : "marketingbg1.jpeg"
    })`,
    backgroundRepeat: " no-repeat",
  };

  const NormalCardTextData = CardTextitems.map((item: any, index: any) => {
    return (
      <div
        className="col-lg-4 col-md-6"
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
        className="col-lg-4 "
        data-aos={item.dataAos}
        data-aos-duration="1500"
        key={index}
      >
        <CardSingle
          itemClass="courses-item"
          titleSecClass={whiteColor}
          image={item.src}
          textClass={whiteColor}
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
          className="col-lg-4 col-md-6 mb-30"
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
        <title>Marketing Partners</title>
        <meta
          name="description"
          content="The world is changing at an accelerating pace. So we offer a client-driven mix of branding, business planning, business development."
        />
        <link rel="canonical" href="http://esquareinfo.com/Marketing-Partners"/>
      </Helmet>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 ">
                <div className="sec-title3 mb-40">
                  <h2
                    className="title white-color  Heading"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1800"
                    style={{ fontSize: "20px" }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.main_title[0].text
                      : "Marketing Partners"}
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
                      : " The world is changing at an accelerating pace. So we offer a client-driven mix of branding, business planning, business development, fundraising, marketing, marketing communications, market research, organizational development, performance improvement, product innovation, quality management, public relations and project management capabilities to both for-profit and not-for-profit clients."}
                    <br />
                    <br />

                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : " Marketing Agency and Digital Marketing Services. Modern Marketing Partners (MMP) provides comprehensive marketing services, creative execution, and technical implementation for global brands, and startups alike. We're marketing communications problem solvers, with a bias toward results."}
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
              className="col-lg-11 "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_title[0].text
                    : "Leader Speak"
                }
                listClass="display-none"
                twoList="twoList"
                threeList="threeList"
                portalList="portal-none"
                cloudList="cloud-none"
                ecommerce="ecommerce-none"
                subtitle1={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_text[0].text
                    : "We pride ourselves on being flexible, innovative and easy to work with. We have created subsidiary companies and joint ventures with interlinked specialties to focus more narrowly on business improvement and organizational development, market and opinion research, strategic planning and fundraising."
                }
                subtitle2={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_sec_title[0].text
                    : "Make sure that your outsource partner is financially secure, as this is a critical factor in outsourcing. You could also find out more about the outsourcing service provider's directors and managers, their experience and their qualification. Geared with such detailed information, you will be able to analyze if a particular outsourcing service provider can match up to your expectations."
                }
                subtitle3={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_sec_text[0].text
                    : "Ensure that the outsource partner that you choose speaks your language. Finding an outsource partner who can understand your language and communicate with you efficiently can help you understand their business objectives. Good communication can assure you about the outsourcing relationship."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MarketingPartner;
