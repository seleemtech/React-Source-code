import { useAllPrismicDocumentsByType } from "@prismicio/react";
import Aos from "aos";
import React, { createContext, useEffect } from "react";
import Brand from "../../common/Brand";
import SliderDefault from "../../Slider/SliderDefault";

import Technology from "./Technology";

import Cta from "./CtaSection";

import OurClients from "./OurClients";
import OurService from "./OurService";
import Testimonial from "./Testimonial";
import { CaseStudiesContext } from "../../Context/Context";
import CaseStudies from "./CaseStudies";
import Industry from "./Industry";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    Aos.init();
   
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
 
  }, []);
  const [document] = useAllPrismicDocumentsByType("home_page");
  const slice = document && document[0]?.data;

  return (
    <React.Fragment>
 
      {/* SliderDefault-start */}
      <SliderDefault SliderBanner={slice} />
      {/* SliderDefault-start */}

      {/* Our-Services-start */}
      <OurService ServiceBanner={slice}/>
      {/* Our-Services-start */}

      {/* Technology-area-start */}

      <Technology TechnologyBanner={slice} />

      {/* Technology-area-end */}

      {/* Ctasection-area-start */}
      <Cta AboutBanner={slice}/>
      {/* Ctasection-area-end */}

      {/* Industry-area-start pending */}
      <Industry  IndustryBanner={slice}/>
      {/* Industry-area-end */}

      {/* Few-of-Clients-area-start */}
      <OurClients ClientBanner={slice} />
      {/* Few-of-Clients-area-end */}
   

      {/* What-Client-say-area-start */}
      <Testimonial TestimonialBanner={slice} />
      {/* What-Client-say-area-end */}

      {/* Case-Studies-area-start */}
      <CaseStudiesContext.Provider value={slice}>
      <CaseStudies />
      </CaseStudiesContext.Provider>
      {/* Case-Studies-area-end */}
    </React.Fragment>
  );
};

export default Home;
