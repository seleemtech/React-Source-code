import { usePrismicDocumentByUID } from "@prismicio/react";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CaseForm from "../../../CaseForm/CaseForm";
import CaseFormEmail from "../../../CaseForm/CaseFormEmail";
const listData = [
  {
    list: "Fully customized applications with rich user interface.",
  },
  {
    list: "Enhanced User Experience by way of Self-Provisioning, Support Processes and Life Cycle Management.",
  },
  {
    list: "Dynamic security with user authentication at various levels.",
  },
];
const listData2 = [
  {
    list: "Business Growth – Through Sales Channel and Channel Partner.",
  },
  {
    list: "Onboarding Process Facilitation.",
  },
  {
    list: "Enhanced User Experience by way of Interactive Interfaces.",
  },
  {
    list: " Internal Efficiencies, Workflow management, Automation and Integrations..",
  },
  {
    list: "Secure and Sustainable Platform.",
  },
];

const button1 = {
  backgroundColor: "#881e20",
  color: "#FFFFFF",
  border: "none",
  fontWeight: "bold",
  padding: "7px 25px",
  borderRadius: "2px",
  marginLeft: "24px",
};

const CloudService = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [form, setViewForm] = useState(false);
  const [document] = usePrismicDocumentByUID("case_type", "case9");
  const slice = document && document?.data;
  console.log(slice)
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.case_bg_img.url : "/caseCloud.jpeg"
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
  const NormalListData2 = listData2?.map((item: any, i: any) => {
    return (
      <>
        <li key={i}>{item.list}</li>
      </>
    );
  });
  const PrismicListData = slice?.body[2].items[0]?.list?.map(
    (item: any, i: any) => {
      return (
        <>
          <li key={i}>{item.text}</li>
        </>
      );
    }
  );
  const PrismicListData2 = slice?.body[1].items[0]?.list?.map(
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
 
      <div className="webportal main-home mt-130 md-mt-68" style={bg}>
      <Helmet>
        <title>Cloud Services</title>
        <meta
          name="description"
          content="Client wants to build a robust platform for offering cloud services targeted at enterprise customers. Apart from investing in data centers, secure networks,"
        />
        <link rel="canonical" href="http://esquareinfo.com/case-Studies/Case9"/>
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
                      : "Case Study"}
                    <p style={{ fontSize: "20px" }}>
                      {" "}
                      {slice
                        ? slice?.body[0]?.primary?.case_desc[0].text
                        : "Cloud Services Platform"}
                    </p>
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
                      : "/caseStud9.jpeg"
                  }
                  alt="Main Image"
                  style={{ borderRadius: "30px", width: "100%" }}
                />
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6 mb-50"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h2 style={{ color: "	#800000" }}>
                {slice
                  ? slice?.body[1]?.primary?.first_head[0].text
                  : "Business Need"}
              </h2>
              <p className="textStyle">
                {slice
                  ? slice?.body[1]?.primary?.first_text[0].text
                  : " Client wants to build a robust platform for offering cloud services targeted at enterprise customers. Apart from investing in data centers, secure networks, they needed a rock solid platform to support and sustain an evolving eco system, enable interactive collaboration with the user community, and enhance operational efficiencies."}
              </p>

              <h2 style={{ color: "	#800000" }}>
                {slice
                  ? slice?.body[1]?.primary?.sec_head[0].text
                  : "Challenges"}
              </h2>
              <p>
                {slice
                  ? slice?.body[1]?.primary?.sec_text[0].text
                  : "The existing portal had limited features wasn't flexible and extendable to address the client's business needs mentioned below."}
                {slice ? PrismicListData2 : NormalListData2}
              </p>

              <h2 style={{ color: "	#800000" }}>
                {" "}
                {slice
                  ? slice?.body[2]?.primary?.list_head[0].text
                  : "Key Features"}
              </h2>

              {slice ? PrismicListData : NormalListData}
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
              ? slice?.body[3]?.primary.button_text[0].text
              : "Click Here For Full Brochure"}
            <button style={button1} onClick={() => setViewForm(true)}>Download</button>
          </p>
          {form ? (
            <div className="rs-caseform style2 col-lg-6">
              <div className="contact-widget ">
                {/* <CaseForm fileUrl={slice?.body[3]?.primary?.file.url} /> */}
                <CaseFormEmail fileUrl={slice?.body[3]?.primary?.file.url}/>
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

export default CloudService;
