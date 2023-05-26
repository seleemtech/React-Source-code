import { PrismicRichText, useAllPrismicDocumentsByType } from "@prismicio/react";
import { Link } from "react-router-dom";
import * as prismicR from '@prismicio/richtext'
import SectionTitle from "../../common/SectionTitle/SectionTitle";

const Cta = (props:any) => {
//     const styls={
        
//             after: {
//                 background:`url("/ctaleft.jpg)`,
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center',
            
//           }
        
// }
    const {AboutBanner}=props;
    return ( <div className="rs-cta main-home">
    <div className="partition-bg-wrap" >
        <div className="container">
            <div className="row">
                <div className="offset-lg-6 col-lg-6 pl-70 md-pl-14">
                    <SectionTitle
                        sectionClass="sec-title3 mb-40"
                        titleClass="title white-color mb-16"
                        AnimationTitle="fade-up"
                        AnimationText="fade-up"
                        delayText="200"
                        delayTitle="50"
                        durationText="3000"
                        duration="1800"
                        title={AboutBanner ?  AboutBanner?.body[3].primary.about_main_title[0].text :"Esquare Simplifying Open Source! looks and how it functions."}
                        descClass="desc white-color pr-100 md-pr-0"
                        description={AboutBanner ?  AboutBanner?.body[3].primary.about_content_text[0].text :"Esquare's leadership is founded on talented employees effectively applying advanced technology, innovative solutions and sound business management. We add more value at lower cost with faster response. We each lead through our competence, creativity and teamwork."}
                        />
                    <div className="btn-part" data-aos="fade-up" data-aos-delay="1000"  data-aos-duration="8000">
                        <Link className="readon orange-btn transparent" to="/About-Us">About Us</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> );
}
 
export default Cta;