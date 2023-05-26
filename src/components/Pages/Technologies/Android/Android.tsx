import Aos from "aos";
import React, { useEffect } from "react";
import Androidblog from "./Androidblog";
import LifeSpan from "../../../common/lifeSpan-Contact/Lifespan";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Helmet } from "react-helmet";
const CardTextitems = [
  {
    src: "/expand.png",
    title: "Android, the world's most popular mobile platform:",
    dataAos: "fade-right",
    desc: "Android powers hundreds of millions of mobile devices in more than 190 countries around the world. It's the largest installed base of any mobile platform and growing fast—every day another million users power up their Android devices for the first time and start looking for apps, games, and other digital content.",
    className: "col-md-4",
  },
  {
    src: "/diamond.png",
    title: "Global partnerships and large installed base",
    dataAos: "fade-top",
    desc: "Building on the contributions of the open-source Linux community and more than 300 hardware, software, and carrier partners, Android has rapidly become the fastest-growing mobile OS Every day more than 1 million new Android devices are activated worldwide.",
    className: "col-md-4",
  },
  {
    src: "/dropbox.png",
    title: "Powerful development framework",
    dataAos: "fade-left",
    desc: "Easily optimize a single binary for phones, tablets, and other devices. Android gives you everything you need to build best-in-class app experiences. It gives you a single application model that lets you deploy your apps broadly to hundreds of millions of users across a wide range of devices—from phones to tablets and beyond",
    className: "col-md-4",
  },
];

const Android = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = useAllPrismicDocumentsByType("android");
  const slice = document && document[0]?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/android.jpg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: " no-repeat",
  };
  const NormalCardTextData = CardTextitems.map((item: any, index: any) => {
    return (
      <div className={item.className} key={index}>
        <div className="features-wrap">
          <div className="icon-part">
            <img src={item.src} />
          </div>
          <div className="content-part">
            <h4 className="title">
              <span className="watermark" style={{ color: "#ffc266" }}>
                {item.title}
              </span>
            </h4>
            <p className="dese" style={{ color: "#ffff" }}>
              {item.desc}
            </p>
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
              <img src={item.card_text_img.url} />
            </div>
            <div className="content-part">
              <h4 className="title">
                <span className="watermark " style={{ color: "#ffc266" }}>
                  {item.card_text_title[0].text}
                </span>
              </h4>
              <p className="dese " style={{ color: "#ffff" }}>
                {item.card_text_desc[0].text}
              </p>
            </div>
          </div>
        </div>
      );
    }
  );
  return (
    <React.Fragment>

      <div className="webportal main-home mt-128 md-mt-66" style={bg}>
      <Helmet>
        <title>Android</title>
        <meta
          name="description"
          content="Android is a Linux-based operating system designed primarily for touchscreen mobile devices such as smartphones and tablet computers."
        />
         <link rel="canonical" href="http://esquareinfo.com/Android"/>
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
                      : "Android"}{" "}
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
                      : "Android is a Linux-based operating system designed primarily for touchscreen mobile devices such as smartphones and tablet computers."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.sec_para_text[0].text
                      : "Android is open source and Google releases the code under the Apache License. This open source code and permissive licensing allows the software to be freely modified and distributed by device manufacturers, wireless carriers and enthusiast developers."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.third_para_text[0].text
                      : "Android is a complete set of software for mobile devices such as tablet computers, notebooks, smartphones, electronic book readers, set-top boxes."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[0]?.primary?.fourth_para_text[0].text
                      : "It provides many interesting features like weather details, opening screen, live RSS (Really Simple Syndication) feeds etc. Lot of android widgets with simplified examples such as Button, EditText, AutoCompleteTextView, ToggleButton, DatePicker, TimePicker, ProgressBar etc."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="rs-blog"
        className="rs-blog style2 pt-40 pb-10 md-pt-70 md-pb-30"
      >
        <div className="container">
          <Androidblog BlogBanner={slice} />
        </div>
      </div>

      <div
        id="rs-features"
        className="rs-features style4 pt-40  md-pt-20 pb-30"
        style={{ background: "#202829" }}
      >
        <div className="container">
          <div className="row">
            {slice ? PrismmicCardTextData : NormalCardTextData}
          </div>
        </div>
      </div>

      <div
        className="noraml-Text main-home event-bg pt-40 pb-1 md-pt-10 md-pb-110"
        style={{ background: "#ffffff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 mb-30">
              <img
                src={
                  slice
                    ? slice?.body[3]?.primary?.left_side_img.url
                    : "/hand.png"
                }
                alt="Main Image"
              />
            </div>

            <div className="col-lg-6 col-md-6 mb-10">
              <div className="row">
                <div
                  className="col-lg-5 col-md-2 mb-50"
                  style={{
                    marginBottom: "15px",
                    background: "#F1F1F1",
                    marginRight: "15px",
                    padding: "15px",
                    textAlign: "justify",
                  }}
                >
                  <div
                    className="icon-part"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "15%",
                    }}
                  >
                    <img
                      src={
                        slice
                          ? slice?.body[3]?.primary?.first_card_img.url
                          : "/i1.png"
                      }
                    />
                  </div>
                  {slice
                    ? slice?.body[3]?.primary?.first_card_text[0].text
                    : " Effective online marketing will put your products or services in front of the people who really need them. Even if you don’t sell anything directly online, your business can still benefit from an internet marketing strategy that tells the world’s biggest marketplace all about whom you are and what you’ve got  to offer."}
                </div>
                <div
                  className="col-lg-6 col-md-2 mb-30"
                  style={{
                    marginBottom: "15px",
                    background: "#F1F1F1",
                    padding: "15px",
                    textAlign: "justify",
                  }}
                >
                  <div
                    className="icon-part"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "15%",
                    }}
                  >
                    <img
                      src={
                        slice
                          ? slice?.body[3]?.primary?.sec_card_img.url
                          : "i2.png"
                      }
                    />
                  </div>
                  {slice
                    ? slice?.body[3]?.primary?.sec_card_text[0].text
                    : "Clean architecture is a great way to start thinking about architecture for apps. Using S.O.L.I.D. principles is a philosophy that motivates developers to think of architecture in terms of intents rather than frameworks and build software that is independent of UI, database or libraries. UI changes much faster than databases, and it’s important to decouple former from latter to easily make changes without affecting the latter."}
                </div>
              </div>
              <div
                className="col-lg-12 col-md-2 mb-20"
                style={{
                  marginLeft: "-10px",
                  background: "#F1F1F1",
                  padding: "15px",
                  textAlign: "justify",
                }}
              >
                <div
                  className="icon-part"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "10%",
                  }}
                >
                  <img
                    src={
                      slice
                        ? slice?.body[3]?.primary?.third_card_img.url
                        : "i3.png"
                    }
                  />
                </div>
                {slice
                  ? slice?.body[3]?.primary?.third_card_text[0].text
                  : "As an open marketplace, Google Play puts you in control of how you sell your products. You can publish whenever you want, as often as you want, and to the customers you want. You can distribute broadly to all markets and devices or focus on specific segments, devices, or ranges of hardware capabilities."}
              </div>
            </div>
          </div>
        </div>
      </div>
      <LifeSpan />
    </React.Fragment>
  );
};

export default Android;
