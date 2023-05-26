import React, { useEffect } from "react";
import CardSingle from "../../common/Card/CardSingle";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";
import Aos from "aos";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Helmet } from "react-helmet";
const items = [
  {
    src: "/missionlogo.png",
    title: "OUR MISSION",
    dataAos: "zoom-out-right",
    desc: "Our mission is to enhancing the business growth of our customers with creative Design and Development to deliver market-defining high-quality solutions that create value and reliable competitive advantage for our clients around the world.",
  },
  {
    src: "/visionLogo.png",
    title: "OUR VISION",
    dataAos: "zoom-out-left",
    desc: "Our vision is to be the most trusted provider of Solutions and Services in Liferay and the open-source technologies known for its value in Technical Expertise, Execution, Capabilities, and Innovation.",
  },
];
const listItems = [
  {
    list: "Clients globally across domains & verticals.",
  },
  {
    list: "Expertise on Liferay leader in open source as per Gartner.",
  },
  {
    list: "Over 60+ globally mobilized consultants available to meet client requirements.",
  },
  {
    list: "CMMI Level 3 rated by our partner company.",
  },
  {
    list: "Global Focus – US, Asia-Pacific & Europe.",
  },
];

const iconpaddingRight = {
  paddingRight: "8px",
};

const ImgWidth = {
  width: "140px",
  height: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};
const titleColor = {
  color: "white",
  textAlign: "center",
};
const titeleFont = {
  fontSize: "17px",
};
const textFont = {
  fontSize: "13px",
};
const Company = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = useAllPrismicDocumentsByType("company");
  const slice = document && document[0]?.data;
  const NormalTextbg = {
    backgroundSize: "cover",
    backgroundPosition: "cover",
    backgroundImage: `url(${
      slice
        ? slice?.body[3]?.primary?.normal_text_bg_img.url
        : "companytextbg.jpeg"
    })`,
    backgroundRepeat: " no-repeat",
  };
  const PrismicCardData = slice?.body[1]?.items?.map((item: any, i: any) => {
    return (
      <div
        className="col-lg-6 col-md-6 mb-30"
        data-aos={item.mv_data_aos[0].text}
        data-aos-duration="1500"
        key={i}
      >
        <CardSingle
          itemClass="courses-item"
          titleSecClass={titleColor}
          image={item.mv_img.url}
          visionicon={ImgWidth}
          title={item.mv_title[0].text}
          subtitle={item.mv_desc[0].text}
        />
      </div>
    );
  });

  const NormalCardData = items.map((item: any, index: any) => {
    return (
      <div
        className="col-lg-6 col-md-6 "
        data-aos={item.dataAos}
        data-aos-duration="1500"
        key={index}
      >
        <CardSingle
          itemClass="courses-item"
          titleSecClass={titleColor}
          image={item.src}
          visionicon={ImgWidth}
          title={item.title}
          subtitle={item.desc}
        />
      </div>
    );
  });
  const PrismicListData = slice?.body[0]?.items?.map((item: any, i: any) => {
    return (
      <li className="listType" key={i}>
        <i className="fa fa-check-square-o" style={iconpaddingRight}></i>
        {item.list[0].text}
      </li>
    );
  });
  const NormalListData = listItems.map((item: any, i: any) => {
    return (
      <li className="listType" key={i}>
        <i className="fa fa-check-square-o" style={iconpaddingRight}></i>
        {item.list}
      </li>
    );
  });
  return (
    <React.Fragment>
   
      <div
        className="webportal main-home mt-128 md-mt-66"
        style={{ backgroundColor: "#6f3637" }}
      >
           <Helmet>
        <title>Company</title>
        <meta
          name="description"
          content="Esquare was founded in Silicon Valley of India in the year 2010 with a group of like-minded people and is into Liferay Application Development."
        />
        <link rel="canonical" href="http://esquareinfo.com/About-Us"/>
      </Helmet>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6">
                <div className="sec-title3 ">
                  <h2
                    className="title white-color mb-16 Heading"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1800"
                    style={{ fontSize: "20px" }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.main_title[0].text
                      : "WHO WE ARE ?"}
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
                      : "   Esquare was founded in Silicon Valley of India in the year 2010 with a group of like-minded people and is into Liferay Application Development and other open source technologies including Android, iOS, Phone Gap, Cross-platform Mobile  Applications."}

                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "Our team of experts has successfully helped enterprises migrate to Open Source technologies across Enterprise Content Management, Portals & Social Collaboration, e-commerce, Business Intelligence and ERP through a proven  Open Source adoption methodology."}
                    <br />
                    <br />
                    {slice ? PrismicListData : NormalListData}
                  </p>
                </div>
              </div>
              <div className=" col-lg-6  pl-60 md-pl-130 sm-pl-70 mbl-ml--30">
                <img
                  src={
                    slice
                      ? slice?.body[0]?.primary?.main_bg_img.url
                      : "/aboutImg.png"
                  }
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    verticalAlign: "middle",
                    width: " 375px",
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-ss main-home event-bg pt-50 "
        style={{ background: "#233342" }}
      >
        <div className="container">
          <div className="row">{slice ? PrismicCardData : NormalCardData}</div>
        </div>
      </div>
      <div
        className="card-Text main-home event-bg pt-50 pb-30"
        style={{ backgroundColor: "#21759B" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 "
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <TextSingle
                itemClass="courses-item"
                titleTextClass={textFont}
                titleHeadClass={titeleFont}
                title={
                  slice
                    ? slice?.body[2]?.primary?.first_card_title[0].text
                    : "WE PROVIDE LEADERSHIP AS A COMPANY AND AS INDIVIDUALS..."
                }
                subtitle={
                  slice
                    ? slice?.body[2]?.primary?.first_card_text[0].text
                    : "A component CMS is a software system which involves managing of components (usually customer content) at the component level instead of whole documents or web pages. Though it can work as a standalone application, most of the time it is a sub-functionality of all the other CMS systems (ECMS, WCMS, MCMS etc.). It can assist with marketing, monitoring costs, customer support, and training purposes."
                }
              />
            </div>
            <div
              className="col-lg-6 pt-20 col-md-6 sm-mb--20 mbl-pb-40"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <TextSingle
                itemClass="courses-item"
                titleTextClass={textFont}
                titleHeadClass={titeleFont}
                title={
                  slice
                    ? slice?.body[2]?.primary?.sec_card_title[0].text
                    : "WE ACT WITH INTEGRITY IN ALL WE DO..."
                }
                subtitle={
                  slice
                    ? slice?.body[2]?.primary?.sec_card_text[0].text
                    : "We are each personally accountable for the highest standards of behaviour, including honesty and fairness in all aspects of our work. We fulfil our commitments as responsible citizens and employees. We will consistently treat customers and company resources with the respect they deserve."
                }
              />
            </div>
            <div
              className="col-lg-6 col-md-6 pt-20"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <TextSingle
                titleTextClass={textFont}
                titleHeadClass={titeleFont}
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[2]?.primary?.third_card_title[0].text
                    : "WE VALUE Esquare PEOPLE..."
                }
                subtitle={
                  slice
                    ? slice?.body[2]?.primary?.third_card_text[0].text
                    : "We treat one another with respect and take pride in the significant contributions that come from the diversity of individuals and ideas. Our continued success requires us to provide the education and development needed to help our people grow. We are committed to openness and trust in all relationships."
                }
              />
            </div>
            <div
              className="col-lg-6  col-md-6 pt-20"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <TextSingle
                titleTextClass={textFont}
                titleHeadClass={titeleFont}
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[2]?.primary?.fourth_card_title[0].text
                    : "WE REGARD OUR Vendors AS ESSENTIAL TEAM MEMBERS..."
                }
                subtitle={
                  slice
                    ? slice?.body[2]?.primary?.fourth_card_text[0].text
                    : "We owe our vendors the same type of respect that we show to our customers. Our vendors deserve fair and equitable treatment, clear agreements and honest feedback on performance. We consider our vendors' needs in conducting all aspects of our business."
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="noraml-Text main-home event-bg pt-50"
        style={NormalTextbg}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-11 col-md-11  "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_title[0].text
                    : "WE DELIVER CUSTOMER SATISFACTION..."
                }
                listClass="display-none"
                portalList="portal-none"
                twoList="twoList"
                threeList="threeList"
                cloudList="cloud-none"
                ecommerce="ecommerce-none"
                subtitle1={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_text[0].text
                    : "We are dedicated to satisfying our customers. We believe in respecting our customers, listening to their requests and understanding their expectations. We strive to exceed their expectations in affordability, quality and on-time delivery."
                }
              />
              <div className="mt--80 mb--80">
                <NormalText
                  itemClass="courses-item"
                  title={
                    slice
                      ? slice?.body[3]?.primary?.normal_text_sec_title[0].text
                      : "WE TAKE RESPONSIBILITY FOR QUALITY..."
                  }
                  listClass="display-none"
                  portalList="portal-none"
                  twoList="twoList"
                  threeList="threeList"
                  cloudList="cloud-none"
                  ecommerce="ecommerce-none"
                  subtitle1={
                    slice
                      ? slice?.body[3]?.primary?.normal_text_sec_text[0].text
                      : "Our products and services will be best in class in terms of value received for money paid. We will deliver excellence, strive for continuous improvement and respond vigorously to change. Each of us is responsible for the quality of whatever we do."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Company;
