import React, { useEffect } from "react";
import CardSingle from "../../common/Card/CardSingle";
import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";
import Aos from "aos";
import { usePrismicDocumentByUID } from "@prismicio/react";
import { Helmet } from "react-helmet";
const CardImgitems = [
  {
    src: "/cloudImg1.jpeg",
    title: "Cloud Solutions",
    dataAos: "zoom-out-right",
    desc: "Private Cloud Solutions: with dedicated resources for enhanced security, reliability & manageability from Partner like AWS. You can choose which services you use, one or several, and choose how you use them.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/cloudImg2.jpeg",
    title: "Secure",
    dataAos: "zoom-in",
    desc: "AWS is a secure, durable technology platform with industry-recognized certifications and audits: PCI DSS Level 1, ISO 27001, FISMA Moderate, HIPAA, and SAS 70 Type II. Our services and data centers have multiple layers of operational and physical security to ensure the integrity and safety of your data.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    src: "/cloudImg3.jpeg",
    title: "Open and Flexible",
    dataAos: "zoom-out-left",
    desc: "AWS is a language and operating system agnostic platform. You choose the development platform or programming model that makes the most sense for your business. This flexibility allows you to focus on innovation, not infrastructure.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
];
const CardTextitems = [
  {
    title: "Agility and Instant Elasticity",
    dataAos: "fade-right",
    desc: "AWS provides a massive global cloud infrastructure that allows you to quickly innovate, experiment and iterate. Instead of waiting weeks or months for hardware, you can instantly deploy new applications, instantly scale up as your workload grows, and instantly scale down based on demand. Whether you need one virtual server or thousands, whether you need them for a few hours or 24/7, you still only pay for what you use.",
    className: "col-lg-4 col-md-6 mb-30",
  },
  {
    title: "Amazon Web Services",
    dataAos: "fade-top",
    desc: "Today, Amazon Web Services provides a highly reliable, scalable, low-cost infrastructure platform in the cloud that powers hundreds of thousands of businesses in 190 countries around the world. With data center locations in the U.S., Europe, Singapore, and Japan, customers across all industries are taking advantage of the following benefit",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
  {
    title: "Low Cost",
    dataAos: "fade-left",
    desc: "AWS offers low, pay-as-you-go pricing with no up-front expenses or long-term commitments. We are able to build and manage a global infrastructure at scale, and pass the cost saving benefits onto you in the form of lower prices. With the efficiencies of our scale and expertise, we have been able to lower our prices on 15 different occasions over the past four years.",
    className: "col-lg-4 col-md-6 mb-30 ",
  },
];

const whiteColorText = {
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
const CloudComputing = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = usePrismicDocumentByUID("mobile_development", "cloudid");
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/cloudbg1.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",

    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice ? slice?.body[2]?.primary?.card_text_bg_img.url : "/cloudbg2.png"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
  };
  const NormalTextbg = {
    backgroundImage: `url(${
      slice ? slice?.body[3]?.primary?.list_bg_img.url : "/cloudbg3.jpg"
    })`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",

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
          textClass={whiteColorText}
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
          textClass={whiteColorText}
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
        <TextSingle
          itemClass="courses-item"
          title={item.title}
          subtitle={item.desc}
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
      <div className="webportal main-home mt-128 md-mt-68" style={bg}>
      <Helmet>
        <title>Cloud Computing</title>
        <meta
          name="description"
          content="The term 'Cloud Computing' is such a by-word nowadays with people claiming it's the trend of the future."
        />
        <link rel="canonical" href="http://esquareinfo.com/CloudComputing"/>
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
                    style={{ fontSize: "20px" }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.main_title[0].text
                      : "Cloud Computing"}
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
                      : "The term 'Cloud Computing' is such a by-word nowadays with people claiming it's the trend of the future. The idea of cloud computing is that individuals and business need not be limited by applications in their desktops. The applications, services and utilities needed in the performance of your work can simply be hosted in the 'Cloud' or by a provider. You probably didn't know it but you are already part of the cloud computing generation if you have a simple online email subscription, which is not installed in your desktop."}

                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "Esquare identifies the requirement for having cloud based hosting for our clients to have it accessed globally by the users. We provide end-end hosting solutions on the cloud. Esquare understands that one size does not fit all, hence we provide a customised solutions to our clients based on the clients requirements in partnership with Cloud Computing providers for any technology under the sun."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-ss main-home event-bg pt-50 pb-10 "
        style={{ background: "#87c04f" }}
      >
        <div className="container">
          <div className="row">{slice ? PrismicCardData : NormalCardData}</div>
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
        className="noraml-Text main-home event-bg pt-50 mb--100"
        style={NormalTextbg}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-11 col-md-11"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NormalText
                itemClass="courses-item"
                title={
                  slice
                    ? slice?.body[3]?.primary?.list_title[0].text
                    : "Agility and Instant Elasticity"
                }
                twoList="twoList"
                threeList="threeList"
                ecommerce="ecommerce-none"
                list1={
                  slice
                    ? slice?.body[3]?.primary?.list1[0].text
                    : "Application Hosting."
                }
                list2={
                  slice
                    ? slice?.body[3]?.primary?.list2[0].text
                    : "Backup and Storage."
                }
                list3={
                  slice
                    ? slice?.body[3]?.primary?.list3[0].text
                    : "Content Delivery."
                }
                list4={
                  slice ? slice?.body[3]?.primary?.list4[0].text : "Databases."
                }
                list5={
                  slice ? slice?.body[3]?.primary?.list5[0].text : "E-Commerce."
                }
                list6={
                  slice
                    ? slice?.body[3]?.primary?.list6[0].text
                    : "Enterprise IT."
                }
                list7={
                  slice
                    ? slice?.body[3]?.primary?.list7[0].text
                    : "High Performance Computing."
                }
                list8={
                  slice
                    ? slice?.body[3]?.primary?.list8[0].text
                    : "Media Hosting."
                }
                list9={
                  slice
                    ? slice?.body[3]?.primary?.list9[0].text
                    : "On-Demand Workforce."
                }
                list10={
                  slice
                    ? slice?.body[3]?.primary?.list10[0].text
                    : "Search Engines."
                }
                list11={
                  slice
                    ? slice?.body[3]?.primary?.list11[0].text
                    : "Web Hosting."
                }
                list12={
                  slice
                    ? slice?.body[3]?.primary?.list12[0].text
                    : "Media and Entertainment."
                }
                list22={
                  slice
                    ? slice?.body[3]?.primary?.list13[0].text
                    : "Life Sciences."
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

export default CloudComputing;
