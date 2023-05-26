import { usePrismicDocumentByUID } from "@prismicio/react";
import Aos from "aos";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import CardSingle from "../../common/Card/CardSingle";
import LifeSpan from "../../common/lifeSpan-Contact/Lifespan";
import NormalText from "../../common/NormalText/NormalText";
import TextSingle from "../../common/TextCard/TextSingle";
const CardImgitems = [
  {
    src: "/travelImg1.jpeg",
    title: "Comcover International SOS",
    dataAos: "zoom-out-right",
    desc: "International SOS is the Commonwealth's contracted overseas medical and travel assistance (OMTA) provider for employees of Comcover Fund Members.",
    className: "col-lg-4 col-md-6 md-30",
  },
  {
    src: "/travelImg2.jpeg",
    title: "Guide to International SOS services",
    dataAos: "zoom-in",
    desc: "Travel bookers, travel managers and travellers are encouraged to access the resources provided by International SOS prior to undertaking travel.",
    className: "col-lg-4 col-md-6 md-30",
  },
  {
    src: "/travelImg3.jpeg",
    title: "International SOS App",
    dataAos: "zoom-out-left",
    desc: "Travel bookers, travel managers and travellers are encouraged to access the resources provided by International SOS prior to undertaking travel.",
    className: "col-lg-4 col-md-6 md-30",
  },
];
const CardTextitems = [
  {
    title: "Travelling with Disability",
    dataAos: "fade-right",
    desc: "In compliance with regulations and as part of our commitment to serve all our guests fairly and without discrimination.",
    className: "col-lg-4 col-md-6 md-30",
  },
  {
    title: "Destination Reviews",
    dataAos: "fade-top",
    desc: "Travelling to a new destination is always fun. Explore your destination even before you travel by reading first-hand reviews of hotels, restaurants, attractions and activities.",
    className: "col-lg-4 col-md-6 md-30",
  },
  {
    title: "Customs, Currency and Airport Tax",
    dataAos: "fade-left",
    desc: "There are restrictions on goods that you can bring into and take out of the country including animal and plant material, food, wildlife, medicinal products, firearms etc.",
    className: "col-lg-4 col-md-6 md-30",
  },
];

const whiteColor = {
  color: "white",
  textAlign: "center",
};
const titleColor = {
  color: "white",
};
const Travel = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = usePrismicDocumentByUID(
    "outsourcing-partners",
    "travelid"
  );
  const slice = document && document?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url :"/travelBg.jpeg"})`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: " no-repeat",
  };
  const Textbg = {
    backgroundImage: `url(${
      slice
        ? slice?.body[2]?.primary?.card_text_bg_img.url
        :"/textBack.jpeg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  
    backgroundRepeat: " no-repeat",
  };
  const NormalTextbg = {
    backgroundImage: `url(${
      slice
        ? slice?.body[3]?.primary?.normal_text_bg_img.url
        :"/travelTextBg.jpeg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  
    backgroundRepeat: " no-repeat",
  };
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
          textClass={titleColor}
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
          textClass={titleColor}
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
        <title>Travel</title>
        <meta
          name="description"
          content="Travel bookers, travel managers and travelers are encouraged to access the resources provided by International SOS prior to undertaking travel."
        />
         <link rel="canonical" href="http://esquareinfo.com/Travel"/>
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
                      :"Travel Solutions"}
                  </h2>
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
            {slice ?PrismicCardData : NormalCardData}
          </div>
        </div>
      </div>
      <div
        className="card-Text main-home event-bg pt-50  pb-10"
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
                    :"Tips and Tools"}
                listClass="display-none"
                twoList="twoList"
                threeList="threeList"
                portalList="portal-none"
                cloudList="cloud-none"
                ecommerce="ecommerce-none"
                subtitle1={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_first_text[0].text
                    :"Let us help you plan your trip better. Get to know the latest weather at your destination, browse through visitor reviews and read our travel giudelines to ensure you know it all before you go."}
                subtitle2={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_sec_text[0].text
                    :"Though the popularity of this platform burned out fairly quickly, its loss could still impact some marketing factors for local businesses."}
                subtitle3={
                  slice
                    ? slice?.body[3]?.primary?.normal_text_third_text[0].text
                    :"Automation is working its way into so many industries and business functions — including podcasting. If you have a podcast and are looking to make the posting process easier."}
              />
            </div>
          </div>
        </div>
      </div>
      <LifeSpan />
    </React.Fragment>
  );
};

export default Travel;
