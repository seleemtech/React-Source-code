import { usePrismicDocumentByUID } from "@prismicio/react";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CaseFormEmail from "../../CaseForm/CaseFormEmail";

const listData = [
  {
    list: "Specializing in server technologies like database management.",
  },
  {
    list: "Web database design & maintenanace.",
  },
  {
    list: " Multi-user and multi-function corporate Intranet Portal system.",
  },
  {
    list: "Usage of Mobile Internet programming in the portal system.",
  },
  {
    list: "Extending the Web solutions with latest technologies.",
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

const Presentation = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [form, setViewForm] = useState(false);
  const [document] = usePrismicDocumentByUID("case_type", "presentationid");
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.case_bg_img.url : "/presentBg.jpeg"
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
  return (
    <React.Fragment>

      <div className="webportal main-home mt-128 md-mt-66" style={bg}>
      <Helmet>
        <title>Presentation</title>
        <meta
          name="description"
          content="Discover our company's story and mission on our presentation page. Learn how we have helped businesses improve their operations and achieve their goals."
        />
         <link rel="canonical" href="http://esquareinfo.com/Presentation"/>
      </Helmet>
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
                    style={{ fontSize: "40px", paddingTop: "140px" }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.case_main_title[0].text
                      : "Presentation"}
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
              <iframe
                src={
                  slice
                    ? slice?.body[1]?.primary?.vdo_link[0].text
                    : "https://www.youtube.com/embed/3ML5gRDtkC8?rel=0"
                }
                id="video"
                style={{ height: "260px", width: "100%" }}
              ></iframe>
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
                  : "Areas of Expertise"}
              </h2>
              <p>{slice ? PrismicListData : NormalListData}</p>

              <p
                style={{
                  fontSize: "14px",

                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {slice
                  ? slice?.body[2]?.primary.button_text[0].text
                  : "Click Here For Full Brochure"}
                <button style={button1} onClick={()=>{setViewForm(true)}}>Download</button>
              </p>
              {form ? (
            <div className="rs-caseform style2 col-lg-12">
              <div className="contact-widget ">
                {/* <CaseForm fileUrl={slice?.body[3]?.primary?.file.url}  /> */}
                <CaseFormEmail fileUrl={slice?.body[2]?.primary?.file.url}/>
              </div>
            </div>
          ) : (
            <></>
          )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Presentation;
