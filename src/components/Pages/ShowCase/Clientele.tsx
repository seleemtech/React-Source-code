import { useAllPrismicDocumentsByType } from "@prismicio/react";
import Aos from "aos";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import OurClients from "../Home/OurClients";
import Testimonial from "../Home/Testimonial";
const IconCard = [
  {
    iconSrc: "fa fa-globe indusIcon1",
    title: "TRAVEL",
    className: "card col-lg-3",
  },
  {
    iconSrc: "fa fa-university indusIcon1",
    title: "GOVERNMENT",
    className: "card col-lg-3",
  },
  {
    iconSrc: "fa fa-graduation-cap indusIcon1",
    title: "EDUCATION",
    className: "card col-lg-3",
  },
  {
    iconSrc: "fa fa-hospital-o indusIcon1",
    title: "HEALTHCARE",
    className: "card col-lg-3",
  },
  {
    iconSrc: "fa fa-industry indusIcon1",
    title: "MANUFACTURING",
    className: "card col-lg-3",
  },
  {
    iconSrc: "fa fa-shopping-cart indusIcon1",
    title: "ECOMMERCE",
    className: "card col-lg-3",
  },
];

const Clientele = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = useAllPrismicDocumentsByType("clientele");
  const slice = document && document[0]?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.case_bg_img.url : "/ClientBg1.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: " no-repeat",
  };
  const bg1 = {
    backgroundImage: `url(${
      slice ? slice?.body[1]?.primary?.map_bg_img.url : "/map.jpg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "cover",
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundRepeat: " no-repeat",
  };

  const normalCardData = IconCard.map((item: any, i: any) => {
    return (
      <div className={item.className} key={i}>
        <div className="icon">
          <i className={item.iconSrc}></i>
        </div>
        <p className="title">{item.title}</p>
      </div>
    );
  });
  const PrismicCardData = slice?.body[2].items?.map((item: any, i: any) => {
    return (
      <div className={item.icon_classname[0].text} key={i}>
        <div className="icon">
          <i className={item.icon_src[0].text}></i>
        </div>
        <p className="title">{item.icon_title[0].text}</p>
      </div>
    );
  });
  return (
    <React.Fragment>

      <div className="webportal main-home mt-128 md-mt-66" style={bg}>
      <Helmet>
        <title>Clientele</title>
        <meta
          name="description"
          content="Discover our diverse range of satisfied clients from various industries."
        />
         <link rel="canonical" href="http://esquareinfo.com/Clientele"/>
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
                    style={{ fontSize: "40px", paddingTop: "130px" }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.case_main_title[0].text
                      : "CLIENTELE"}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2
          style={{
            fontWeight: "400",
            fontFamily: "firstFont",
            fontSize: "39px",
            color: "#23343F",
            padding: "30px 10px 12px 10px ",
            textAlign: "center",
          }}
        >
          {slice
            ? slice?.body[1]?.primary?.map_title[0].text
            : "Our Client’s Across The Globe"}
        </h2>
      </div>
      <div style={bg1}>
        <img src="/map2.gif" alt="" />
      </div>

      <div className="container">
        <div
          className="row pt-30"
          style={{ justifyContent: "center", gap: "1rem" }}
        >
          {/* {slice ? normalCardData : PrismicCardData} */}
        </div>
      </div>
      <OurClients />
      <Testimonial />
    </React.Fragment>
  );
};

export default Clientele;
