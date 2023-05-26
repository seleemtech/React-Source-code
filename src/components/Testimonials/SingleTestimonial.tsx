import { Link } from "react-router-dom";

const SingleTestimonial = (props:any) => {
    return (  <div className={props.itemClass}>
        <div className="author-desc">
            <div className="desc">
                <img
                    src={props.quoteImage}
                    alt={props.Title}
                    className="quote"
                />
                {props.Description}
            </div>
          
        </div>
        <div className="author-part">
            
            <span className="designation">{props.Designation}</span>
        </div>
    </div> );
}
 
export default SingleTestimonial;
