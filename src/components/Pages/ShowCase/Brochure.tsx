import { useAllPrismicDocumentsByType } from "@prismicio/react";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CaseFormEmail from "../../CaseForm/CaseFormEmail";

const listData = [
  {
    list: "Experts on Liferay 200 + Years of combined expertise on Liferay.",
  },
  {
    list: "Extensive know-how on portal space.",
  },
  {
    list: "Team of enduring web architects.",
  },
  {
    list: "Passion to deliver quality at a competitive costs.",
  },
  {
    list: "Resarch & Innovation.",
  },
  {
    list: "Collaborative Development.",
  },
];
const listData1 = [
  {
    list: "Web application development.",
  },
  {
    list: "Mobile software development.",
  },
  {
    list: "Custom software development for Windows, Mac OS and Linux.",
  },
  {
    list: "Database design, development and management.",
  },
  {
    list: "Information technology consulting.",
  },
  {
    list: "Design, redesign, support, integration and maintenance of custom software.",
  },
];
const listData2 = [
  {
    list: "Travel.",
  },
  {
    list: "Health Care.",
  },
  {
    list: "Government.",
  },
  {
    list: "Education.",
  },
  {
    list: "E-Commerce.",
  },
  {
    list: "Manufacturing.",
  },
];

const button1 = {
  backgroundColor: "rgb(136, 30, 32)",
  color: "#FFFFFF",
  border: "none",
  fontWeight: "bold",
  padding: "7px 25px",
  borderRadius: "2px",
  marginLeft: "24px",
};

const Brochure = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [form, setViewForm] = useState(false);
  const [document] = useAllPrismicDocumentsByType("brochure");
  const slice = document && document[0]?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.case_bg_img.url : "/brobg1.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",

    backgroundRepeat: " no-repeat",
  };

  const NormalListData = listData?.map((item: any, i: any) => {
    return (
      <>
        <li key={i}>{item.list}</li>
      </>
    );
  });
  const PrismicListData = slice?.body[1].items[0]?.list?.map(
    (item: any, i: any) => {
      return (
        <>
          <li key={i}>{item.text}</li>
        </>
      );
    }
  );
  const NormalListData1 = listData1?.map((item: any, i: any) => {
    return (
      <>
        <li key={i}>{item.list}</li>
      </>
    );
  });
  const PrismicListData1 = slice?.body[2].items[0]?.list?.map(
    (item: any, i: any) => {
      return (
        <>
          <li key={i}>{item.text}</li>
        </>
      );
    }
  );
  const NormalListData2 = listData2?.map((item: any, i: any) => {
    return (
      <>
        <li key={i}>{item.list}</li>
      </>
    );
  });
  const PrismicListData2 = slice?.body[3].items[0]?.list?.map(
    (item: any, i: any) => {
      return (
        <>
          <li key={i}>{item.text}</li>
        </>
      );
    }
  );
  return (
    <React.Fragment>
     

      <div className="webportal main-home mt-128 md-mt-66" style={bg}>
      <Helmet>
        <title>Brochure</title>
        <meta
          name="description"
          content="We are the leading Liferay service provider in Bangalore and we have been delivering open source solutions to our customers for over a decade now. "
        />
         <link rel="canonical" href="http://esquareinfo.com/Brochure"/>
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
                    style={{ fontSize: "40px", paddingTop: "140px" }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.case_main_title[0].text
                      : "Brochure"}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="noraml-Text main-home event-bg pt-40 pb-1 md-pt-10 md-pb-110"
        style={{ background: "#ffffff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 mb-20">
              <div
                data-aos="flip-left"
                data-aos-duration="1500"
                data-aos-delay="280"
              >
                <img
                  src={
                    slice
                      ? slice?.body[1]?.primary?.left_img.url
                      : "/brobg2.jpeg"
                  }
                  alt="Main Image"
                  style={{ borderRadius: "60px", width: "100%" }}
                />
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6 mb-50"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h2 style={{ color: "	#800000" }}>
                {" "}
                {slice
                  ? slice?.body[1]?.primary?.first_head[0].text
                  : "Why Esquare"}
              </h2>
              <p className="textStyle">
                {slice
                  ? slice?.body[1]?.primary?.first_text[0].text
                  : "As a customer, why should you choose Esquare? We are the leading Liferay service provider in Bangalore and we have been delivering open source solutions to our customers for over a decade now. We believe that the digital transformation is the next great callenge for organizations."}

                {slice ? PrismicListData : NormalListData}
              </p>

              <h2 style={{ color: "	#800000" }}>
                {" "}
                {slice
                  ? slice?.body[2]?.primary?.list_head[0].text
                  : "Our Services"}
              </h2>
              <p className="textStyle">{slice ? PrismicListData1 : NormalListData1}</p>

              <h2 style={{ color: "	#800000" }}>
                {slice
                  ? slice?.body[3]?.primary?.list_head[0].text
                  : "Industry Verticals"}
              </h2>

              {slice ? PrismicListData2 : NormalListData2}
            </div>
          </div>
          <p
            style={{
              fontSize: "14px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {slice
              ? slice?.body[4]?.primary.button_text[0].text
              : "Click Here For Full Brochure"}
            <button style={button1} onClick={()=>{setViewForm(true)}}>Download</button>
          </p>
          {form ? (
            <div className="rs-caseform style2 col-lg-6">
              <div className="contact-widget ">
                {/* <CaseForm fileUrl={slice?.body[3]?.primary?.file.url}  /> */}
                <CaseFormEmail fileUrl={slice?.body[4]?.primary?.file.url}/>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Brochure;
