import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Link } from "react-router-dom";


const CourseSingle = (props:any) => {
    const [document] = useAllPrismicDocumentsByType("home");
    const slice = document && document[0]?.data;
    return ( <div className={props.itemClass}>
        <div className="courses-grid">
            <div className="img-part" >
                <Link to="/course/course-single" >
                    <img 
                        src={props.image}
                        alt={props.title}
                    />
                </Link>
            </div>
            <div className="content-part" style={{height:"14rem"}}>
            
                
                <h3 className="title">
                    <Link to="/course/course-single">{props.title}</Link>
                </h3>
                <h5 className="Crsub-title">
                    <Link to="/course/course-single">{props.subtitle}</Link>
                </h5>
               
            </div>
        </div>
    </div>  );
}
 
export default CourseSingle;