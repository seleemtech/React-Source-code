import { usePrismicDocumentByUID } from "@prismicio/react";
import Aos from "aos";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import CardSingle from "../../common/Card/CardSingle";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";
const CardImgitems = [
  {
    src: "/hrmsImg1.jpeg",
    title: "Time And Attendance Module",
    dataAos: "zoom-out-right",
    desc: "The most advanced modules provide broad flexibility in data collection methods, labor distribution capabilities and data analysis features.",
    className: "col-lg-4 col-md-6 ",
  },
  {
    src: "/hrmsImg2.jpeg",
    title: "Benefits Administration Module",
    dataAos: "zoom-in",
    desc: "The benefits administration module provides a system for organizations to administer and track employee participation in benefits programs.",
    className: "col-lg-4 col-md-6 ",
  },
  {
    src: "/hrmsImg3.png",
    title: "HR management module",
    dataAos: "zoom-out-left",
    desc: "Is the strategic approach to the effective management of organization workers so that they help the business gain a competitive advantage, Commonly known as the HR Department, it is designed to maximize employee performance in service of an employer's strategic objectives.",
    className: "col-lg-4 col-md-6 ",
  },
];
const CardTextitems = [
  {
    title: "Organization",
    dataAos: "fade-right",
    desc: "The Organization module is organization structure such as company, location, department, designations, employee group and organization change such as resignation, termination, transfer, promotion.",
    classNAme: "col-lg-4 col-md-6",
  },
  {
    title: "Employee Self-Service",
    dataAos: "fade-top",
    desc: "The Employee Self-Service module allows employees to query HR related data and perform some HR transactions over the system.",
    classNAme: "col-lg-4 col-md-6  xs-mt--20",
  },
  {
    title: "Reports",
    dataAos: "fade-left",
    desc: "The Reports Module provides customized reporting according to employees individual needs.Report definitions can be saved to avoid repeating this task.",
    classNAme: "col-lg-4 col-md-6 xs-mt--40",
  },
];
const whiteColor = {
  color: "white",
};

const HRMS = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = usePrismicDocumentByUID("outsourcing-partners", "hrmsid");
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/hrmsBg.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",

    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice ? slice?.body[2]?.primary?.card_text_bg_img.url : "/hrmsBg1.png"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    backgroundRepeat: " no-repeat",
  };
  const NormalTextbg = {
    backgroundImage: `url(${
      slice
        ? slice?.body[3]?.primary?.normal_text_bg_img.url
        : "/travelTextBg.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    backgroundRepeat: " no-repeat",
  };

  const NormalCardTextData = CardTextitems.map((item: any, index: any) => {
    return (
      <div
        className={item.classNAme}
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
        className={item.className}
        data-aos={item.dataAos}
        data-aos-duration="1500"
        key={index}
      >
        <CardSingle
          itemClass="courses-item"
          titleSecClass={whiteColor}
          textClass={whiteColor}
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
        className={item.card_classname[0].text}
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
        <title>Human Resource</title>
        <meta
          name="description"
          content="A Human Resource Management System is a form of HR software that combines a number of system."
        />
         <link rel="canonical" href="http://esquareinfo.com/HRMS"/>
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
                      : "Human Resource Management System"}
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
                      : "A Human Resource Management System or HRIS (Human Resource Information System) is a form of HR software that combines a number of systems and processes to ensure the easy management of a business's employees and data. Human Resources Software is used by businesses to combine a number of necessary HR functions, such as storing employee data, managing payrolls, recruitment processes, benefits administration and keeping track of attendance records."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-ss main-home event-bg pt-50 pb-10 "
        style={{ background: "#21759B" }}
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
        className="noraml-Text main-home event-bg pt-50 "
        style={NormalTextbg}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-11 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_title[0].text
                    : "Functions"
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
                    : "The function of human resources (HR) departments is administrative and common to all organizations. Organizations may have formalized selection, evaluation, and payroll processes. Management of 'human capital' progressed to an imperative and complex process."
                }
                subtitle2={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_sec_text[0].text
                    : "Design relates to creating something that will resonate with the intended user on several levels, including emotional, social, cultural, physical, and cognitive. Design planning includes: Problem framing and hypothesis development. Research (contextually based using both quantitative and qualitative methods)."
                }
                subtitle3={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_third_text[0].text
                    : " HR executives rely on internal or external IT professionals to develop and maintain an integrated HRMS."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HRMS;
