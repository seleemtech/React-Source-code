import SectionTitle from "../../common/SectionTitle/SectionTitle";
import CourseSingle from "../../Courses/CourseSingle";
import * as prismicR from "@prismicio/richtext";
import * as prismicH from '@prismicio/helpers'
import image1 from "../../assets/img/courses/main-home/1.jpg";
import image2 from "../../assets/img/courses/main-home/2.jpg";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { useEffect } from "react";
import Aos from "aos";

const Courses = () => {
  const [document] = useAllPrismicDocumentsByType("home");
  const slice = document && document[0]?.data;
  console.log(document);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="rs-popular-courses main-home event-bg pt-50 pb-50 md-pt-30 md-pb-30">
      <div className="container">
        <SectionTitle  
          sectionClass="sec-title3 text-center mb-44"
          subtitleClass="sub-title"
          titleClass="title black-color"
          AnimationTitle="fade-down"
          delayTitle="50"
          duration="1800"
          title={
            document && (
              <>
                <span>
                  {prismicR.asText(
                    slice && slice.body[4].primary.industrymainhead
                  )}
                </span>
              </>
            )
          }
        />
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-30" data-aos="zoom-out-right" data-aos-duration="1500">
            <CourseSingle
              itemClass="courses-item"
              image={prismicH.asImageSrc(slice && slice.body[4].items[0].industryimg)}
              title={
                document && (
                  <>
                    <span>
                      {prismicR.asText(
                        slice && slice.body[4].items[0].industrysubtext
                      )}
                    </span>
                  </>
                )
              }
              subtitle={
                document && (
                  <>
                    <span>
                      {prismicR.asText(
                        slice && slice.body[4].items[0].industrytitle
                      )}
                    </span>
                  </>
                )
              }
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-30">
            <CourseSingle
              itemClass="courses-item"
              image={prismicH.asImageSrc(slice && slice.body[4].items[1].industryimg)}
              title={
                document && (
                  <>
                    <span>
                      {prismicR.asText(
                        slice && slice.body[4].items[1].industrysubtext
                      )}
                    </span>
                  </>
                )
              }
              subtitle={
                document && (
                  <>
                    <span>
                      {prismicR.asText(
                        slice && slice.body[4].items[1].industrytitle
                      )}
                    </span>
                  </>
                )
              }
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-30" data-aos="zoom-out-left" data-aos-duration="1500">
            <CourseSingle
              itemClass="courses-item"
              image={prismicH.asImageSrc(slice && slice.body[4].items[2].industryimg)}
              title={
                document && (
                  <>
                    <span>
                      {prismicR.asText(
                        slice && slice.body[4].items[2].industrysubtext
                      )}
                    </span>
                  </>
                )
              }
              subtitle={
                document && (
                  <>
                    <span>
                      {prismicR.asText(
                        slice && slice.body[4].items[2].industrytitle
                      )}
                    </span>
                  </>
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
