import React from "react";
import Slider from "react-slick";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import SingleTestimonial from "../../Testimonials/SingleTestimonial";

const items = [
  {
    qoute: "/qoute.png",
    title: "“Sumitra, United States.”",
    desc: "Esquare Team supported me at every moment whenever there was a deadlock, and with a quick turn around time.",
  },
  {
    desc: "It was a great experience working with Esquare &Team and will look forward to working with you in the future.",
    title: "“Matthias, Germany.”",
    qoute: "/qoute.png",
  },
  {
    desc: "Esquare will be our preferred Vendor for all future Liferay Stuff.",
    title: "“Khayahan, Turkey.”",
    qoute: "/qoute.png",
  },
  {
    desc: "Thanks for all your dedicated support and cooperation.",
    title: "“Ghouse, United States.”",
    qoute: "/qoute.png",
  },
  {
    desc: "We are really happy with what you and the team have delivered so far, we really appreciate all the work you have put into this and your flexibility.",
    title: "“David, Australia.”",
    qoute: "/qoute.png",
  },
];
const Testimonial = (props: any) => {
  const { TestimonialBanner } = props;
  const testimonialSettings = {
    dots: true,
    centerMode: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  const PrismicData = TestimonialBanner?.body[6]?.items?.map(
    (item: any, index: any) => {
      return (
        <SingleTestimonial
          itemClass="testi-item"
          quoteImage={TestimonialBanner?.body[6]?.primary?.few_client_qoute.url}
          Designation={item.few_client_content_title[0].text}
          Description={item.few_client_content_desc[0].text}
          key={index}
        />
      );
    }
  );
  const TestimonialNormalData = items.map((item: any, index: any) => {
    return (
      <SingleTestimonial
        itemClass="testi-item"
        quoteImage={item.qoute}
        Designation={item.title}
        Description={item.desc}
        key={index}
      />
    );
  });

  return (
    <React.Fragment>
      <div className="rs-testimonial main-home pt-50 pb-100 md-pt-30 md-pb-70" id="testimonial">
        <div className="container">
          <SectionTitle
            sectionClass="sec-title3 mb-50 md-mb-30 text-center"
            subtitleClass="sub-title primary"
            titleClass="title white-color"
            AnimationTitle="fade-down"
            delayTitle="50"
            duration="1800"
            title={
              TestimonialBanner
                ? TestimonialBanner?.body[6]?.primary?.few_client_main_title[0]
                    .text
                : "What Clients Say"
            }
            effectClass="heading-line"
          />
          <Slider {...testimonialSettings}>
            {TestimonialBanner ? PrismicData : TestimonialNormalData}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonial;
