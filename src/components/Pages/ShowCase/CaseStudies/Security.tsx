import { usePrismicDocumentByUID } from "@prismicio/react";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CaseForm from "../../../CaseForm/CaseForm";
import CaseFormEmail from "../../../CaseForm/CaseFormEmail";
const normalData = [
  {
    title: "Business Need",
    desc: "Client wants to build a robust portal with a stringent Security solutions for a Government Portal dealing with National Panchanyats with multilevel hierarchy for Taluks, Districts and States.",
  },
  {
    title: "Challenges",
    desc: "The client was using Liferay CE for the development of the Portal. The proprietary solution was lacking the following features Liferay CE provides limited security but the client wants much secured Hacking and Hijacking data needs to be protected Multi-Site needs to be incorporated for multi-level hierarchy",
  },
];
const listData = [
  {
    list: "Dynamic security with user authentication at various levels.",
  },
  {
    list: "Complete Security system built from scratch certified with OWASP standards.",
  },
  {
    list: "Salt (cryptography) for sending the passwords to avoid any hacker's attacks during the transfer phase.",
  },
  {
    list: "CSRF (Cross - Site Request Forgery) to avoid any hacker's attac ks with respect to duplicating URLs.",
  },
  {
    list: "Multi site feature for implementing the multilevel hierarchy for Taluks, Panchayats, Districts and States.",
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

const Security = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);  
  const [form, setViewForm] = useState(false);
  const [document] = usePrismicDocumentByUID("case_type","case10");
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.case_bg_img.url :"/caseService.jpeg"})`,
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
  const NormalData = normalData?.map((item: any, i: any) => {
    return (
      <>
        <h2 style={{ color: "	#800000" }} key={i}>
          {item.title}
        </h2>
        <p className="textStyle">{item.desc}</p>
      </>
    );
  });
  const PrismicData = slice?.body[1].items?.map((item: any, i: any) => {
    return (
      <>
        <h2 style={{ color: "	#800000" }} key={i}>
          {item.main_head[0].text}
        </h2>
        <p className="textStyle">{item.main_text[0].text}</p>
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
  return (
    <React.Fragment>

      <div className="webportal main-home mt-128 md-mt-66" style={bg}>
      <Helmet>
        <title>Security Solutions</title>
        <meta
          name="description"
          content="Client wants to build a robust portal with a stringent Security solutions for a Government Portal dealing with National Panchanyats with multilevel hierarchy"
        />
        <link rel="canonical" href="http://esquareinfo.com/case-Studies/Case10"/>
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
                      :"Case Study"}
                    <p style={{ fontSize: "20px" }}>
                    {slice
                        ? slice?.body[0]?.primary?.case_desc[0].text
                        :"Security Solutions for National Panchayath Portal"}
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
                      :"/caseStud10.jpeg"}
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
             {slice ? PrismicData : NormalData}

              <h2 style={{ color: "	#800000" }}>{slice
                  ? slice?.body[2]?.primary?.list_head[0].text
                  :"Key Features"}</h2>
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
              :"Click Here For Full Brochure"}
            <button style={button1} onClick={() => setViewForm(true)}>Download</button>
          </p>
          {form ? (
            <div className="rs-caseform style2 col-lg-6">
              <div className="contact-widget ">
                {/* <CaseForm fileUrl={slice?.body[3]?.primary?.file.url}  /> */}
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

export default Security;
