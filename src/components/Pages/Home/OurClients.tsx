import { useAllPrismicDocumentsByType } from "@prismicio/react";
import Aos from "aos";
import { useEffect } from "react";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
const items = [
  {
    src: "/ourclient1.png",
    dataAosDelay: "30",
  },
  {
    src: "/ourclient2.png",
    dataAosDelay: "100",
  },
  {
    src: "/ourclient3.png",
    dataAosDelay: "150",
  },
  {
    src: "/ourclient4.png",
    dataAosDelay: "200",
  },
  {
    src: "/ourclient5.png",
    dataAosDelay: "250",
  },
  {
    src: "/ourclient6.png",
    dataAosDelay: "300",
  },
  {
    src: "/ourclient7.png",
    dataAosDelay: "350",
  },
  {
    src: "/ourclient8.png",
    dataAosDelay: "400",
  },
  {
    src: "/ourclient9.png",
    dataAosDelay: "450",
  },
  {
    src: "/ourclient10.png",
    dataAosDelay: "500",
  },
  {
    src: "/ourclient11.png",
    dataAosDelay: "550",
  },
  {
    src: "/ourclient12.png",
    dataAosDelay: "600",
  },
  {
    src: "/ourclient13.png",
    dataAosDelay: "650",
  },
  {
    src: "/ourclient14.png",
    dataAosDelay: "700",
  },
  {
    src: "/ourclient15.png",
    dataAosDelay: "750",
  },
];


const OurClients = (props: any) => {
  const { ClientBanner } = props;
  useEffect(() => {
    Aos.init();
  }, []);
const PrismicData=ClientBanner?.body[5]?.items?.map((item:any,index:any)=>{
  return (
    <a
      data-aos="fade-right"
      data-aos-duration="1400"
      key={index}
      data-aos-delay={item.client_dataaos_delay[0].text}
    >
      <img className="main-logo" src={item.client_main_img.url} alt="" />
    </a>
  );
})

  const ClinetNormalData = items?.map((item: any, index: any) => {
    return (
      <a
        data-aos="fade-right"
        data-aos-duration="1400"
        key={index}
        data-aos-delay={item.dataAosDelay}
      >
        <img className="main-logo" src={item.src} alt="" />
      </a>
    );
  });

  return (
    <div
      className="pt-40 pb-20 md-pt-40 md-pb-20 "
      style={{ background: "black", marginBottom: "30px" }}
    >
      <div className="container">
        <SectionTitle
          sectionClass="sec-title3 text-center mb-44"
          subtitleClass="sub-title"
          titleClass="title white-color"
          title={
            ClientBanner
              ? ClientBanner?.body[5]?.primary?.client_main_title[0].text
              : "Few of Our Clients"
          }
          AnimationTitle="fade-down"
          delayTitle="50"
          duration="1800"
        />

        <div className="grid">
          {ClientBanner ? PrismicData :ClinetNormalData}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
