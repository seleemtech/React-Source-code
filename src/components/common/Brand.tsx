import Slider from "react-slick";
import brandNormalLogo1 from '../../assets/img/Brand/1.png';
import brandNormalLogo2 from '../../assets/img/Brand/2.png';
import brandNormalLogo3 from '../../assets/img/Brand/3.png';
import brandNormalLogo4 from '../../assets/img/Brand/4.png';
import brandNormalLogo5 from '../../assets/img/Brand/5.png';
import brandNormalLogo6 from '../../assets/img/Brand/6.png';
import SectionTitle from "./SectionTitle/SectionTitle";
import * as prismicR from "@prismicio/richtext";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
const Brand = (props:any) => {
    const { brandClass } = props;
    const [document] = useAllPrismicDocumentsByType("home");
    const slice = document && document[0]?.data;
    const sliderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (   <div className={brandClass ? brandClass : 'rs-partner pt-100 pb-100 md-pt-70 md-pb-70 gray-bg'}>
    <div className="container">
    <SectionTitle
          sectionClass="sec-title3 text-center mb-44"
          subtitleClass="sub-title"
          titleClass="title black-color"
          title={
            document && (
              <>
                <span>
                  {prismicR.asText(
                    slice && slice.body[6].primary.brandtitle
                  )}
                </span>
              </>
            )
          }
        />
        <Slider {...sliderSettings}>
            <div className="partner-item">
                <div className="logo-img">
                    <a href="#">
                        <img className="main-logo" src={slice && slice.body[6].items[0].brandimg.url} alt="" />
                    </a>
                </div>
            </div>
            <div className="partner-item">
                <div className="logo-img">
                    <a href="#">
                        <img className="main-logo" src={slice && slice.body[6].items[1].brandimg.url} alt="" />
                    </a>
                </div>
            </div>
            <div className="partner-item">
                <div className="logo-img">
                    <a href="#">
                        <img className="main-logo" src={slice && slice.body[6].items[2].brandimg.url} alt="" />
                    </a>
                </div>
            </div>
            <div className="partner-item">
                <div className="logo-img">
                    <a href="#">
                        <img className="main-logo" src={slice && slice.body[6].items[3].brandimg.url} alt="" />
                    </a>
                </div>
            </div>
            <div className="partner-item">
                <div className="logo-img">
                    <a href="#">
                        <img className="main-logo" src={slice && slice.body[6].items[4].brandimg.url} alt="" />
                    </a>
                </div>
            </div>
            <div className="partner-item">
                <div className="logo-img">
                    <a href="#">
                        <img className="main-logo" src={slice && slice.body[6].items[5].brandimg.url} alt="" />
                    </a>
                </div>
            </div>
            <div className="partner-item">
                <div className="logo-img">
                    <a href="#">
                        <img className="main-logo" src={slice && slice.body[6].items[6].brandimg.url} alt="" />
                    </a>
                </div>
            </div>
            <div className="partner-item">
                <div className="logo-img">
                    <a href="#">
                        <img className="main-logo" src={slice && slice.body[6].items[7].brandimg.url} alt="" />
                    </a>
                </div>
            </div>
            <div className="partner-item">
                <div className="logo-img">
                    <a href="#">
                        <img className="main-logo" src={slice && slice.body[6].items[8].brandimg.url} alt="" />
                    </a>
                </div>
            </div>
            <div className="partner-item">
                <div className="logo-img">
                    <a href="#">
                        <img className="main-logo" src={slice && slice.body[6].items[9].brandimg.url} alt="" />
                    </a>
                </div>
            </div>
        </Slider>
    </div>
</div> );
}
 
export default Brand;