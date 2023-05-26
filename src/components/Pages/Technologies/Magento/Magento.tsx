import Aos from "aos";
import React, { useEffect } from "react";
import Magentoblog from "./Magentoblog";
import LifeSpan from "../../../common/lifeSpan-Contact/Lifespan";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
const CardTextitems = [
  {
    src: "/globe.png",
    title: "Magento PHP Developers",
    dataAos: "fade-right",
    desc: "Our dedicated Magento team of experts will guide you through the different stages of your project from scope definition to deployment.",
    className: "col-md-4",
  },
  {
    src: "/rocket.png",
    title: "Offshore Development",
    dataAos: "fade-top",
    desc: "We have a qualified team of Magento developers who can assist you in Magento E-commerce development and customization along with multiple online stores integration and many more things.",
    className: "col-md-4",
  },
  {
    src: "/buy.png",
    title: "Magento E-Commerce",
    dataAos: "fade-left",
    desc: "We have a qualified team of Magento developers who can assist you in Magento E-commerce development and customization along with multiple online stores integration and many more things.",
    className: "col-md-4",
  },
];

const Magento = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);
  const [document] = useAllPrismicDocumentsByType("magento");
  const slice = document && document[0]?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/magentoBg.jpg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",

    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice ? slice?.body[3]?.primary?.normal_text_bg_img.url : "/megbg.jfif"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    backgroundRepeat: " no-repeat",
  };

  const NormalCardTextData = CardTextitems.map((item: any, index: any) => {
    return (
      <div className={item.className} key={index}>
        <div className="features-wrap">
          <div className="icon-part">
            <img src={item.src} alt="Image" />
          </div>
          <div className="content-part">
            <h4 className="title">
              <span className="watermark orange-color">{item.title}</span>
            </h4>
            <p className="dese ">{item.desc}</p>
          </div>
        </div>
      </div>
    );
  });
  const PrismmicCardTextData = slice?.body[2]?.items?.map(
    (item: any, index: any) => {
      return (
        <div className={item.text_classname[0].text} key={index}>
          <div className="features-wrap">
            <div className="icon-part">
              <img src={item.card_text_img.url} alt="Image" />
            </div>
            <div className="content-part">
              <h4 className="title">
                <span className="watermark orange-color">
                  {item.card_text_title[0].text}
                </span>
              </h4>
              <p className="dese ">{item.card_text_desc[0].text}</p>
            </div>
          </div>
        </div>
      );
    }
  );
  return (
    <React.Fragment>
      <div className="webportal main-home mt-128  md-mt-66" style={bg}>
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
                    style={{ fontSize: "40px" }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.main_title[0].text
                      : " Magento"}
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
                      : "Magento is an open-source eCommerce platform that offers great flexibility for customizing the look, content, and functionality of an online store."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "The best thing about Magento is the robust set of features which are scalable and customizable for the convenience of buyers and sellers. It has a flexible modular architecture and is scalable with many control options that is helpful for users."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.third_para_text[0].text
                      : "Magento uses E-commerce platform which offers organizations ultimate E-commerce solutions and extensive support network. Magento allows user to update E-commerce website automatically. It is simple, quick and versatile to use."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="rs-blog"
        className="rs-blog style2 pt-40 pb-40 md-pt-70 md-pb-30"
        style={{
          backgroundColor: "#0098CA",
        }}
      >
        <div className="container">
          <Magentoblog BlogSlice={slice} />
        </div>
      </div>

      <div
        id="rs-features"
        className="rs-features style4 pt-40  md-pt-20 pb-30"
        style={{ backgroundColor: "#ffff" }}
      >
        <div className="container">
          <div className="row">
            {slice ? PrismmicCardTextData : NormalCardTextData}
          </div>
        </div>
      </div>

      <div
        className="noraml-Text main-home event-bg pt-40 pb-1 md-pt-10 md-pb-110"
        style={Textbg}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 mb-50"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h2 style={{ color: "	#ffff" }}>
                {" "}
                {slice
                  ? slice?.body[3]?.primary?.normal_text_first_title[0].text
                  : "Magento E-commerce development"}
              </h2>
              <p style={{ color: "	#ffff" }}>
                {slice
                  ? slice?.body[3]?.primary?.normal_text_first_text[0].text
                  : "We have a versatile and highly competent E-commerce tool and uses it to provide solutions to store owners/merchants with high-quality level"}{" "}
                <br /> <br />
                {slice
                  ? slice?.body[3]?.primary?.normal_text_sec_text[0].text
                  : "This transaction is between businesses and consumers. In this type of transaction, merchants sell products to consumers through shopping cart software."}
                <br /> <br />
                {slice
                  ? slice?.body[3]?.primary?.normal_text_third_text[0].text
                  : "In this type of transaction, one consumer or customer interacts with other consumers through internet."}
                <br /> <br />
                {slice
                  ? slice?.body[3]?.primary?.normal_text_fourth_text[0].text
                  : "This transaction is between the consumer or the customer and businesses or organizations where the consumer makes a product that the organization uses it to complete the business."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <LifeSpan />
    </React.Fragment>
  );
};

export default Magento;
