import React, { useEffect } from "react";
import TextSingle from "../../common/TextCard/TextSingle";
import NormalText from "../../common/NormalText/NormalText";
import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import Aos from "aos";
import CardSingle from "../../common/Card/CardSingle";
import { usePrismicDocumentByUID } from "@prismicio/react";
import { Helmet } from "react-helmet";
const CardImgitems = [
  {
    src: "/CorptrainingImg1.jpeg",
    title: "Corporate Training",
    dataAos: "zoom-out-right",
    desc: "We understand that one size doesn't fit all hence we provide different training solutions to our clients based on their requirement. Improving the performance of the individuals and groups of employees in the organizational settings. It is an organized activity for increasing the knowledge and skills of the employees.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/CorptrainingImg2.jpeg",
    title: "Liferay",
    dataAos: "zoom-in",
    desc: "Our Training methodology is based on role based approach, which helps developers, architect and project managers to get hands-on experience on Liferay Portal administration, System administration, Plugin development and Extension development.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
  {
    src: "/CorptrainingImg3.jpeg",
    title: "Web Technologies",
    dataAos: "zoom-out-left",
    desc: "This will help our participants understand the subject effectively and swiftly in addition we allow the customization of the training to align with your project needs with the flexibility and practicality for immediate implementation. This is a required training for individuals who wish to become Liferay Portal expert.",
    className: "col-lg-4 col-md-6 mb-30",
  },
];
const CardTextitems = [
  {
    title: "",
    dataAos: "fade-right",
    desc: "We understand that one size doesn't fit all hence we provide different training solutions to our clients based on their requirement. Improving the performance of the individuals and groups of employees in the organizational settings. It is an organized activity for increasing the knowledge and skills of the employees.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "",
    dataAos: "fade-top",
    desc: "Our Training methodology is based on role based approach, which helps developers, architect and project managers to get hands-on experience on Liferay Portal administration, System administration, Plugin development and Extension development.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "",
    dataAos: "fade-left",
    desc: "This will help our participants understand the subject effectively and swiftly in addition we allow the customization of the training to align with your project needs with the flexibility and practicality for immediate implementation. This is a required training for individuals who wish to become Liferay Portal expert.",
    className: "col-lg-4 col-md-6 mb-30",
  },
];
const blackColorText = {
  color: "black",
};
const TitleColor = {
  color: "black",
  textAlign: "center",
};

const ImgWidth = {
  height: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

const CorporateTraining = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = usePrismicDocumentByUID(
    "outsourcing-partners",
    "corporateid"
  );
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/CorptrainingBg.jpg"
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
    backgroundImage: "linear-gradient(to right, #325389 , #406498)",
    backgroundRepeat: " no-repeat",
  };
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
          titleSecClass={TitleColor}
          textClass={blackColorText}
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
        className={item.card_classname[0].text}
        data-aos={item.mv_data_aos[0].text}
        data-aos-duration="1500"
        key={i}
      >
        <CardSingle
          itemClass="courses-item"
          titleSecClass={TitleColor}
          textClass={blackColorText}
          image={item.mv_img.url}
          title={item.mv_title[0].text}
          subtitle={item.mv_desc[0].text}
        />
      </div>
    );
  });
  const NormalCardTextData = CardTextitems.map((item: any, index: any) => {
    return (
      <div
        className={item.className}
        data-aos={item.dataAos}
        data-aos-duration="1500"
        key={index}
      >
        <TextSingle itemClass="courses-item" title="" subtitle={item.desc} />
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
            title=""
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
       <title>Corporate Training</title>
        <meta
          name="description"
          content="Esquare provides an opportunity to organizations and Individuals to develop their skill sets."
        />
        <link rel="canonical" href="http://esquareinfo.com/CorporateTraining"/>
        </Helmet>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6  pt-40">
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
                      : "Training"}
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
                      : "Esquare provides an opportunity to organizations and Individuals to develop their skill sets. As it's the most important part for an individual and company to stay ahead of the competition. Esquare offers training solutions in  three different categories, Corporate trainings; (ELTP) Entry Level Training Program for fresher's & new hires; and  Open House Training Program."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-ss main-home event-bg pt-50 pb-10 "
        style={{ background: "#FFD401" }}
      >
        <div className="container">
          <div className="row">{slice ? PrismicCardData : NormalCardData}</div>
        </div>
      </div>
      <div
        className="card-Text main-home event-bg pt-50 "
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
              className="col-lg-11 col-md-11 "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_title[0].text
                    : "Training Methodology"
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
                    : "Our Training methodology is based on role based approach, which helps developers, architect and project managers to get hands-on experience on Liferay Portal administration, System administration, Plugin development and Extension development."
                }
                subtitle2={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_sec_text[0].text
                    : "This will help our participants understand the subject effectively and swiftly in addition we allow the customization of the training to align with your project needs with the flexibility and practicality for immediate implementation. This is a required training for individuals who wish to become Liferay Portal expert."
                }
                subtitle3={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_third_text[0].text
                    : "Designing training programme is an important component of systematic approach to training. ... Any programme designed for training of trainers (TOT) should have a component to enhance the instructional skills of the participants and another to impart knowledge and enhance skills in the subject matter."
                }
              />
            </div>
          </div>
        </div>
      </div>
      <LifeSpan />
    </React.Fragment>
  );
};

export default CorporateTraining;
