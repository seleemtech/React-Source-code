import { Link } from "react-router-dom";

const SingleService = (props:any) => {
    const { itemClass, Icon,link, Title, Desc, btnText, key } = props;
    return (   <div className={itemClass ? itemClass : 'service-item'} key={key}>
    <div className="content-part">
        <span className="icon-part"><i className={Icon ? Icon : 'flaticon-analysis'}></i></span>
        <div></div>
        <h4 className="title" style={{height:"rem"}}>
            <Link to={link}>
                {Title ? Title : 'Online Coaching'}
            </Link>
        </h4>
        <p className="desc">{Desc ? Desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna'}</p>
        <Link to={link} className='service-btn'>
            {btnText ? btnText : 'Read More'} <i className="fa fa-arrow-right"></i>
        </Link>
    </div>
</div> );
}
 
export default SingleService;