import { Link } from "react-router-dom";

const IndustrySingle = (props:any) => {
    const { itemClass, titleClass, titleClass2,link, descClass, btnText } = props;
    return ( <div className={itemClass ? itemClass : 'degree-wrap'}>
    <img
        src={props.itemImage}
        alt={props.title}
    />
    <div className="title-part">
        <h4 className={titleClass ? titleClass : 'title'}>{props.title}</h4>
    </div>
    <div className="content-part">
        <h4 className={titleClass2 ? titleClass2 : 'title'}><Link to={link}>{props.title}</Link></h4>
        <p className={descClass ? descClass : 'desc'}>{props.desc}</p>
    </div>
</div> );
}
 
export default IndustrySingle;