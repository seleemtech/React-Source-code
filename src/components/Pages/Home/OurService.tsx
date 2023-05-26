
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import SingleService from "../../Service/SingleService";
const items = [
  {
    title: "Web Portal Development",
    iconImg: "bi bi-code-square",
    desc: "Esquare team works together with the client as a partner to help provide solutions which fit their requirements in any environment. ",
    link:"/WebPortal"
  },
  {
    iconImg: "bi bi-phone",
    title: "Mobile Apps Development",
    desc: "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
    link:"/MobileDevelopment"
  },
  {
    iconImg: "bi bi-laptop",
    title: "Web Designing",
    desc: "Esquare a professional firm for Website Designing Based in India, offers a wide range of Web Design Services India. We use a full-circle approach in Website Design.",
    link:"/WebDesign"
  },
  {
    title: "Corporate Training",
    iconImg: "bi bi-person-rolodex",
    desc: "Esquare provides an opportunity to organizations and Individuals to develop their skill sets. As its the most important part for an individual and company to stay ahead of the competition.",
  link:"/CorporateTraining"
  },
];
const OurService = (props: any) => {
  const { ServiceBanner } = props;
  const prismicData =
    ServiceBanner &&
    ServiceBanner?.body[1]?.items?.map((itema: any, index: any) => {
      return (
        <div className="col-lg-3 md-mb-0" key={index}>
          <SingleService
            Icon={itema.service_content_icon[0].text}
            Title={itema.service_content_title[0].text}
            Desc={itema.service_content_desc[0].text}
            link={itema.link[0].text}
          />
        </div>
      );
    });
  const ServiceNormalData = items.map((item: any, index: any) => {
    return (
      <div className="col-lg-3 md-mb-0" key={index}>
        <SingleService
          Icon={item.iconImg}
          Title={item.title}
          Desc={item.desc}
          link={item.link}
        />
      </div>
    );
  });

  return (
    <div className="rs-contact style2 pt-40 md-pt-20 pb-20 md-pb-40">
      <div className="container">
        <div className="contact-widget event-bg">
          <SectionTitle
            sectionClass="sec-title text-center mb-20"
            titleClass="title black-color mb-14"
            title={
              ServiceBanner
                ? ServiceBanner.body[1].primary.service_header_title[0].text
                : "Our Services"
            }
            descClass="desc big"
            AnimationTitle="fade-down"
            AnimationText="zoom-in-up"
            delayTitle="50"
            delayText="100"
            durationText="1800"
            duration="1800"
            description={
              ServiceBanner
                ? ServiceBanner.body[1].primary.service_herder_subtext[0].text
                : "Esquare is a software solution provider, specialized in the design and development of custom solutions for web poratl and mobile applications. We partner with brands and organizations to create innovative offers that contribute to increase leads  and generate demand."
            }
          />

          <div className="rs-services style2">
            <div className="row">
              {ServiceBanner ?prismicData : ServiceNormalData}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
