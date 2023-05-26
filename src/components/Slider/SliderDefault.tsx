import { useAllPrismicDocumentsByType } from "@prismicio/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import * as prismicR from "@prismicio/richtext";
import FeatureStyle1 from "../Feature/FeatureStyle1";
import img1 from "../../assets/img/HomeSliderPic/slide1im.jpeg";
import img2 from "../../assets/img/HomeSliderPic/slide2im.jpeg";
import * as prismicH from "@prismicio/helpers";
import Aos from "aos";
const SliderDefault = (props: any) => {
  const { SliderBanner } = props;

  useEffect(() => {
    Aos.init();
  }, []);
  const sliderSettings = {
    dots: false,
    centerMode: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  const slide1 = {
    // backgroundImage: `url(${slice && slice.body[2].items[0].techimg.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    backgroundRepeat: " no-repeat",
  };
  const slide2 = {
    backgroundImage: `url(${img2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    backgroundRepeat: " no-repeat",
  };
  return (
    <React.Fragment>
      <div className="rs-slider main-home">
        <Slider {...sliderSettings}>
          <div className="slider-content slide1">
            <div className="container">
              <div
                className="content-part"
                data-aos="zoom-in"
                data-aos-duration="1800"
              >
                <h1 className="sl-title">
                  {SliderBanner
                    ? SliderBanner.body[0].primary.slidetext1[0].text
                    : "OUR SERVICES LEAD YOU TO SUCCESS THAT MATTERS"}
                </h1>
              </div>
            </div>
          </div>

          <div className="slider-content slide2">
            <div className="container">
              <div
                className="content-part"
                data-aos="zoom-in"
                data-aos-duration="1800"
              >
                <h1 className="sl-title">
                  {SliderBanner
                    ? SliderBanner.body[0].primary.slidetext2[0].text
                    : "THE LEADING OPEN SOURCE PORTAL FOR THE ENTERPRISE"}
                </h1>
              </div>
            </div>
          </div>
          <div className="slider-content slide3">
            <div className="container">
              <div
                className="content-part"
                data-aos="zoom-in"
                data-aos-duration="1800"
                data-aos-delay="200"
              >
                <h1 className="sl-title">
                  {SliderBanner
                    ? SliderBanner.body[0].primary.slidetext3[0].text
                    : " MOBILE APPLICATION DEVELOPMENT"}
                </h1>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default SliderDefault;
