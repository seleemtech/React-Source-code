import { Link } from "react-router-dom";

const CardSingle = (props:any) => {
    return (   <div className={props.itemClass}>
        <div className="courses-grid">
            <div className="img-part" >
                
                    <img  style={props.visionicon}
                        src={props.image}
                        alt={props.title}
                    />
                
            </div>
            <div className="content-part"  >
            
                
                <h3 className="title" style={props.titleSecClass}>
                   {props.title}
                </h3>
                <h5 className="Crsub-title" style={props.textClass}>
                   {props.subtitle}
                </h5>
               
            </div>
        </div>
    </div> );
}
 
export default CardSingle;