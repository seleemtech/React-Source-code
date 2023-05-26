import Aos from "aos";
import { useEffect } from "react";

const SectionTitle = (props:any) => {
    useEffect(() => {
        Aos.init();
      }, []);
    return ( <div className={props.sectionClass}  >
        <div className={props.subtitleClass}  >{props.subtitle}</div>
        <h2 className={props.titleClass}  data-aos={props.AnimationTitle}  data-aos-delay={props.delayTitle}  data-aos-duration={props.duration}>{props.title}</h2>
        <p className={props.descClass} data-aos={props.AnimationText}  data-aos-delay={props.delayText}  data-aos-duration={props.durationText}>{props.description}</p>
        <p className={props.secondDescClass}>{props.secondDescription}</p>
        <div className={props.effectClass}></div>
    </div> );
}
 
export default SectionTitle;
