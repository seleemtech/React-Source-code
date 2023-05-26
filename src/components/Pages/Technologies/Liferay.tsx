import { useAllPrismicDocumentsByType } from "@prismicio/react";
import Aos from "aos";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import CardSingle from "../../common/Card/CardSingle";
import NormalText from "../../common/NormalText/NormalText";
import CaseStudies from "../Home/CaseStudies";
const CardImgitems = [
  {
    src: "/liferayDxp.png",
    title: "Digital Experience Platform 7.x",
    dataAos: "zoom-out-right",
    desc: "Stay focused on your business and use our expertise to implement your digital transformation strategy.",
    className: "col-lg-3 col-md-6 mb-30",
  },
  {
    src: "/LiferayEcom.png",
    title: "E-Commerce",
    dataAos: "zoom-in",
    desc: "Grow your business with an experience-led digital commerce platform that puts B2B first",
    className: "col-lg-3 col-md-6 mb-30",
  },
  {
    src: "/LiferayCloud.png",
    title: "Analytics Cloud",
    dataAos: "zoom-out-left",
    desc: "Launch your enterprise site with Liferay DXP Cloud and get autoscaling, development tools, environments, monitoring and much more.",
    className: "col-lg-3 col-md-6 mb-30",
  },
];
const LiferayServiceData = [
  {
    Bgsrc: "/lifservice1.png",
    IconSrc: "/liferatService1.png",
    title: "Consulting Services",
    dataAos: "zoom-out-right",
    lists: [
      {
        list: "Liferay DXP Consulting",
      },
      {
        list: "ROI Resolution",
      },
      { list: "Performance Fix" },
      { list: "Application Engineering Consulting" },
    ],
    className: "col-lg-6 col-md-12 mb-30 liferay-card",
  },
  {
    Bgsrc: "/lifservice2.png",
    IconSrc: "/liferayService2.png",
    title: "Migration & Upgradation",
    dataAos: "zoom-in",
    lists: [
      {
        list: "Migration & Upgradation Liferay DXP,",
      },
      {
        list: "Application Migration & Upgrade,",
      },
      {
        list: "Optimization with Migration/Upgrade",
      },
      {
        list: "Liferay License Purchasing",
      },
    ],
    className: "col-lg-6 col-md-12 mb-30 liferay-card",
  },
  {
    Bgsrc: "/lifservice3.png",
    IconSrc: "/liferayService3.png",
    title: "Support & Maintenance",
    dataAos: "zoom-out-left",
    lists: [
      {
        list: "Dedicated support by experts,",
      },
      { list: "Optimization and Preventive Maintenance," },
      { list: "DevOps Services," },

      {
        list: "Ceaseless Monitoring",
      },
    ],
    className: "col-lg-6 col-md-12 mb-30 liferay-card",
  },
  {
    Bgsrc: "/lifservice4.png",
    IconSrc: "/liferayService4.png",
    title: "Customization & Integration",
    dataAos: "zoom-out-left",
    lists: [
      {
        list: "Analysis and Strategy Designing,",
      },
      { list: "customization - Theme, portlet & module" },
      { list: "Interactive & Responsive Website," },
      { list: "SOA Solutions" },
    ],
    className: "col-lg-6 col-md-12 mb-30 liferay-card",
  },
];
const LiferayCardIconData = [
  {
    Bgsrc: "/LiferayCardImg.jpeg",
    IconSrc: "fa fa-pencil-square-o liferay_offer",
    title: "Planning Design",
    lists: [
      {
        list: "POC",
      },
      { list: "Architecture" },
      {
        list: "Wireframe/Mockup Design",
      },
    ],
    TitleclassName: "liferay_esq_off",
  },
  {
    Bgsrc: "/LiferayCardImg.jpeg",
    IconSrc: "fa fa-cogs liferay_offer1",
    title: "Development",
    lists: [
      {
        list: "Portlet Development",
      },
      { list: "Enterprise Application Integration" },
      { list: "OOTB Feature Customization" },
      { list: "Content and Document management" },
      { list: "Theme Development" },
    ],
    TitleclassName: "liferay_esq_off1",
  },
  {
    Bgsrc: "/LiferayCardImg.jpeg",
    IconSrc: "fa fa-check-square-o liferay_offer2",
    title: "Quality",
    lists: [
      {
        list: "Unit Testing",
      },
      { list: "Integration Testing" },
      { list: "Performance Testing" },
    ],
    TitleclassName: "liferay_esq_off2",
  },
  {
    Bgsrc: "/LiferayCardImg.jpeg",
    IconSrc: "fa fa-cogs  liferay_offer3",
    title: "Maintenance & Support",
    lists: [
      {
        list: "Performance Tuning",
      },
      { list: "SEO Maintenance" },
      { list: "Application Management" },
      { list: "Technical Documentation" },
      { list: "Mobile Interface Development" },
    ],
    TitleclassName: "liferay_esq_off3",
  },
  {
    Bgsrc: "/LiferayCardImg.jpeg",
    IconSrc: "fa fa-pencil-square-o liferay_offer4",
    title: "Devops",
    lists: [
      {
        list: "Admin and Developer Trainging",
      },
      { list: "Portal Migration and Upgradation" },
      { list: "Mobile Solutions" },
    ],
    TitleclassName: "liferay_esq_off4",
  },
];

const DeliveringSolutionList = [
  {
    list: "Enterprises are using Liferay to build robust business solutions that deliver results: Self-Service Portals.",
  },
  { list: "Knowledge Sharing Workspaces." },
  { list: "Dynamic Web 2.0 Websites." },
  { list: "Revenue-generating Social Networks." },
  { list: "Enterprise Application Integration." },
];
const AllInList = [
  {
    list: "Liferay Portal ships with broad product capabilities to provide immediate return on investment Content & Document Management with Microsoft Office® integration.",
  },
  { list: "Web Publishing and Shared Workspaces." },
  { list: "Enterprise Collaboration." },
  { list: "Social Networking and Mashups." },
  { list: "Enterprise Portals and Identity Management." },
];

const liferayMainIcon = [
  {
    src: "/liferayright1.png",
    className: "mainDiv marginLeft",
    desc: "Consulting Services",
  },
  {
    src: "/liferayright2.png",
    className: "mainDiv",
    desc: "Migration and Upgradation",
  },
  {
    src: "/liferayright3.png",
    className: "mainDiv marginLeft",
    desc: "Support and Maintenance",
  },
  {
    src: "/liferayright4.png",
    className: "mainDiv",
    desc: "Customization and Integration",
  },
];

const ImgWidth = {
  maxWidth: "100%",
  height: "85px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

const blackColor = {
  color: "black",
};
const cardSize = {
  display: "flex",
  justifyContent: "center",
};
const Liferay = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const [document] = useAllPrismicDocumentsByType("liferay");
  const slice = document && document[0]?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.liferay_bg_img.url : "/LiferayBg1.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    backgroundRepeat: " no-repeat",
  };
  const TextBg = {
    backgroundImage: `url(${
      slice ? slice?.body[2]?.primary?.list_bg_img.url : "/liferayimg3.jpeg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    backgroundRepeat: " no-repeat",
  };
  const Text2Bg = {
    backgroundImage: `url(${
      slice ? slice?.body[4]?.primary?.back_img.url :"/liferayBg22.jpeg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
  };
  const bg3 = {
    backgroundImage: `url(${
      slice ? slice?.body[6]?.primary?.main_img.url :"/liferayBg33.jpeg"})`,
    backgroundSize: "cover",
    backgroundRepeat: " no-repeat",
  };
  const NormalCardData = CardImgitems.map((item: any, i: any) => {
    return (
      <div
        className={item.className}
        data-aos={item.dataAos}
        data-aos-duration="1500"
        key={i}
        style={{
          background: "white",
          borderRadius: "4px",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <CardSingle
          itemClass="courses-item"
          image={item.src}
          visionicon={ImgWidth}
          textClass={blackColor}
          title={item.title}
          subtitle={item.desc}
        />
      </div>
    );
  });
  const PrismicCardData = slice?.body[6]?.items?.map((item: any, i: any) => {
    return (
      <div
        className={item.classname[0].text}
        data-aos={item.dataaos[0].text}
        data-aos-duration="1500"
        key={i}
        style={{
          background: "white",
          borderRadius: "4px",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <CardSingle
          itemClass="courses-item"
          image={item.src.url}
          visionicon={ImgWidth}
          textClass={blackColor}
          title={item.sub_title[0].text}
          subtitle={item.desc[0].text}
        />
      </div>
    );
  });

  const NormalServiceData = LiferayServiceData.map((item: any, i: any) => {
    return (
      <div className={item.className} style={cardSize} key={i}>
        <img src={item.Bgsrc} className="imgMain"></img>
        <img src={item.IconSrc} className="imgIcon" />
        <div className="text-group1">
          <p className="off_spn_h4">{item.title}</p>
          {item.lists.map((listitem: any, i: any) => (
            <>
              <li key={i}>{listitem.list}</li>
            </>
          ))}
        </div>
      </div>
    );
  });
  const PrismicServiceData = slice?.body[7]?.items?.map((item: any, i: any) => {
    return (
      <div className={item.classname[0].text} style={cardSize} key={i}>
        <img src={item.bg_img.url} className="imgMain"></img>
        <img src={item.iconsrc.url} className="imgIcon" />
        <div className="text-group1">
          <p className="off_spn_h4">{item.title[0].text}</p>
          {item.list.map((listitem: any, i: any) => (
            <>
              <li key={i}>{listitem.text}</li>
            </>
          ))}
        </div>
      </div>
    );
  });
  const NormalCardListeData = LiferayCardIconData.map((item: any, i: any) => {
    return (
      <div className="span3 liferay_cons" key={i}>
        <div>
          <img className="ofr-hd-img" src={item.Bgsrc} />
        </div>
        <div className="liferay_pln_icon">
          <i className={item.IconSrc}></i>
        </div>
        <div className="ofr-card-down">
          <h4 className={item.TitleclassName}>{item.title}</h4>
          {item.lists.map((listItem: any, i: any) => (
            <li key={i}>{listItem.list}</li>
          ))}
        </div>
      </div>
    );
  });
  const PrismicCardListeData = slice?.body[5]?.items?.map(
    (item: any, i: any) => {
      return (
        <div className="span3 liferay_cons" key={i}>
          <div>
            <img className="ofr-hd-img" src={item.bgsrc.url} />
          </div>
          <div className="liferay_pln_icon">
            <i className={item.iconimg[0].text}></i>
          </div>
          <div className="ofr-card-down">
            <h4 className={item.titleclassname[0].text}>
              {item.title[0].text}
            </h4>
            {item.list.map((listItem: any, i: any) => (
              <li key={i}>{listItem.text}</li>
            ))}
          </div>
        </div>
      );
    }
  );
  const NormalDeliverySolutionList = DeliveringSolutionList.map(
    (item: any, i: any) => {
      return (
        <li className="white-color" key={i}>
          {item.list}
        </li>
      );
    }
  );
  const PrismicDeliverySolutionList = slice?.body[4]?.items?.map(
    (item: any, i: any) => {
      return (
        <li className="white-color" key={i}>
          {item.list[0].text}
        </li>
      );
    }
  );
  const NormalAllInList = AllInList.map((item: any, i: any) => {
    return (
      <li className="black-color" key={i}>
        {item.list}
      </li>
    );
  });
  const NormalLiferayMainIcon = liferayMainIcon.map((item: any, i: any) => {
    return (
      <div className={item.className} key={i}>
        <img src={item.src} />
        <p>{item.desc}</p>
      </div>
    );
  });
  const PrismicLiferayMainIcon = slice?.body[0]?.items?.map(
    (item: any, i: any) => {
      return (
        <div className={item.liferay_right_classname[0].text} key={i}>
          <img src={item.liferay_right_src.url} />
          <p>{item.liferay_right_desc[0].text}</p>
        </div>
      );
    }
  );
  const PrismicAllInList = slice?.body[3]?.items?.map((item: any, i: any) => {
    return (
      <li className="black-color" key={i}>
        {item.liferay_list[0].text}
      </li>
    );
  });
  return (
    <React.Fragment>

      <div className="webportal main-home mt-128 md-mt-66  " style={bg}>
      <Helmet>
        <title>Liferay</title>
        <meta
          name="description"
          content="Liferay named as a Leader in the 2020 Gartner Magic Quadrant for Digital Experience Platforms."
        />
        <link rel="canonical" href="http://esquareinfo.com/Liferay"/>
      </Helmet>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row  ">
              <div className=" col-lg-6">
                <div className="sec-title3  mb-10">
                  <img
                    src={
                      slice
                        ? slice?.body[0]?.primary?.liferay_img.url
                        : "/liferayimg.png"
                    }
                  ></img>
                  <h2
                    className="title white-color pt-20 mb-16 Heading"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1800"
                    style={{ fontSize: "25px" }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.liferay_left_first_title[0]
                          .text
                      : "Single Platform"}
                  </h2>
                  <h2
                    className="title white-color mb-16 Heading"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1800"
                    style={{ fontSize: "32px" }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.liferay_left_sec_title[0].text
                      : "limitless Solutions"}
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
                      ? slice?.body[0]?.primary?.liferay_left_desc[0].text
                      : "Liferay named as a Leader in the 2020 Gartner Magic Quadrant for Digital Experience Platforms"}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 liferay ">
                {slice ? PrismicLiferayMainIcon : NormalLiferayMainIcon}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="webportal main-home mt--80 mb--100 md-mt-20 md-mb-20">
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row  ">
              <div className=" col-lg-6 ">
                <div className=" mb-40">
                  <h2
                    className="  mb-16 Heading"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1800"
                    style={{ fontSize: "25px", color: "#cc3300" }}
                  >
                    {slice
                      ? slice?.body[1]?.primary?.liferay_left_title[0].text
                      : "The Leading Open Source Portal for the Enterprise"}
                  </h2>
                  <p
                    className="desc   md-pr-0 sub-text"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="3000"
                    style={{
                      fontSize: "15px",
                      lineHeight: " 1.4",
                      textAlign: "justify",
                      color: "black",
                    }}
                  >
                    {slice
                      ? slice?.body[1]?.primary?.liferay_left_first_para[0].text
                      : "Proven real world performance with marquee clients across industries. Rapid innovation with customer-contributed sponsored development and new releases every 8 months."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[1]?.primary?.liferay_left_sec_para[0].text
                      : "A strong community with million downloads and worldwide deployments Guaranteed SLAs up to 24/7/1 with regular service packs."}
                    <br />
                    <br />
                    {slice
                      ? slice?.body[1]?.primary?.liferay_left_thid_para[0].text
                      : "Liferay DXP (Version 7.x) is designed to work within the existing business processes & technologies to build a custom solution that uniquely meets customer needs."}
                  </p>
                </div>
              </div>
              <div className=" col-lg-6 md-pl-14">
                <img
                  src={
                    slice
                      ? slice?.body[1]?.primary?.liferay_right_img.url
                      : "/liferayimg2.png"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="webportal main-home  " style={TextBg}>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row  ">
              <div className=" col-lg-6 mt--70 mb--120 md-mt-40">
                <img
                  src={
                    slice
                      ? slice?.body[2]?.primary?.left_img.url
                      : "/liferayimg4.jpeg"
                  }
                  style={{ maxWidth: "100%", height: "440px" }}
                />
              </div>
              <div
                className="col-lg-6 md-pl-14 noraml-Text main-home event-bg mt--10 mb--160  md-mt-150 "
                style={{ background: "transparent" }}
              >
                <div data-aos="fade-up" data-aos-duration="1500">
                  <NormalText
                    itemClass="courses-item"
                    title={
                      slice
                        ? slice?.body[2]?.primary?.list_title[0].text
                        : "Can handle Critical Capabilities"
                    }
                    twoList="twoList"
                    cloudList="cloud-none"
                    ecommerce="ecommerce-none"
                    list1={
                      slice
                        ? slice?.body[2]?.primary?.list1[0].text
                        : "Reduce information overload and context switching."
                    }
                    list2={
                      slice
                        ? slice?.body[2]?.primary?.list2[0].text
                        : "Improve satisfaction with effortless purchasing"
                    }
                    list3={
                      slice
                        ? slice?.body[2]?.primary?.list3[0].text
                        : "Monitor and increase customer adoption over time"
                    }
                    list4={
                      slice
                        ? slice?.body[2]?.primary?.list4[0].text
                        : "Cut costs by reducing the need for customization"
                    }
                    list5={
                      slice
                        ? slice?.body[2]?.primary?.list5[0].text
                        : "Multichannel Support"
                    }
                    list6={
                      slice
                        ? slice?.body[2]?.primary?.list6[0].text
                        : "Enhanced Customer Experience Management"
                    }
                    list7={
                      slice
                        ? slice?.body[2]?.primary?.list7[0].text
                        : "Personalization & Context Awareness"
                    }
                    list8={
                      slice
                        ? slice?.body[2]?.primary?.list8[0].text
                        : "Built in Content Management"
                    }
                    list9={
                      slice
                        ? slice?.body[2]?.primary?.list9[0].text
                        : "Analytics and Optimization"
                    }
                    list10={
                      slice
                        ? slice?.body[2]?.primary?.list10[0].text
                        : "Cloud Capability to accelerate Digital Transformations"
                    }
                    list11={
                      slice
                        ? slice?.body[2]?.primary?.list11[0].text
                        : "Applied Artificial Intelligence"
                    }
                    list12={
                      slice
                        ? slice?.body[2]?.primary?.list12[0].text
                        : "Flexible Integration and Interoperability"
                    }
                    list19={
                      slice
                        ? slice?.body[2]?.primary?.list13[0].text
                        : "Navigation, Search and Insight"
                    }
                    list20={
                      slice
                        ? slice?.body[2]?.primary?.list14[0].text
                        : "Security Admin and Access Control"
                    }
                    list21={
                      slice
                        ? slice?.body[2]?.primary?.list15[0].text
                        : "Collaboration and Knowledge Sharing"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="webportal main-home mt--80 mb--80 md-mt-20 md-mb-30">
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row  ">
              <div className=" col-lg-6 md-pl-14">
                <h2 style={{ fontSize: "25px", color: "#cc3300" }}>
                  {slice
                    ? slice?.body[3]?.primary?.liferay_main_title[0].text
                    : " An All-in-One Package"}
                </h2>
                {slice ? PrismicAllInList : NormalAllInList}
              </div>

              <div className=" col-lg-6 md-mt-20 ">
                <img
                  src={
                    slice
                      ? slice?.body[3]?.primary?.right_img.url
                      : "/liferayimg5.png"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="webportal main-home" style={Text2Bg}>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row  ">
              <div className=" col-lg-6 mt--80 mb--80 md-mt-30 md-mb-40">
                <img
                  src={
                    slice
                      ? slice?.body[4]?.primary?.left_img.url
                      : "/liferayimg6.png"
                  }
                  style={{ height: "320px" }}
                />
              </div>
              <div className=" col-lg-6 ">
                <h2 style={{ fontSize: "25px", color: "white" }}>
                  {slice
                    ? slice?.body[4]?.primary?.right_title[0].text
                    : "Delivering Solutions That Work"}
                </h2>

                {slice
                  ? PrismicDeliverySolutionList
                  : NormalDeliverySolutionList}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="liferay pt-20 pb-20">
        <div className="container">
          <div className="row liferay_align">
            {slice ? PrismicCardListeData : NormalCardListeData}
          </div>
        </div>
      </div>
      <div
        className="card-ss main-home event-bg pt-50 pb-10 md-pt-30 md-pb-0"
        style={bg3}
      >
        <div className="container">
          <div className="row " style={{ justifyContent: "space-around" }}>
            <h2
              style={{ textAlign: "center", fontSize: "20px", color: "white" }}
            >
              {slice
                ? slice?.body[6]?.primary?.main_title[0].text
                : "Liferay Solutions"}
            </h2>
            {slice ? PrismicCardData : NormalCardData}
          </div>
        </div>
      </div>
      <div className="liferay pt-40 ">
        <div className="container">
          <div className="row">
            <h2
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "#cc3300",
              }}
            >
              {slice
                ? slice?.body[7]?.primary?.main_title[0].text
                : "Our Services - Liferay"}
            </h2>

            {slice ? PrismicServiceData : NormalServiceData}
          </div>
        </div>
      </div>

      <CaseStudies />
    </React.Fragment>
  );
};

export default Liferay;
