
import { Link, useNavigate } from "react-router-dom";

const SinglePost = (props:any) => {
    const {link, blogClass, blogImage, blogTitle, contentClass, blogDesc, blogCategory, blogButtonClass, blogButtonText } = props;
 
    return (  <div className={blogClass ? blogClass : 'blog-item mb-44'}>
    <div className="image-part">
        <Link to={link ? link :'/Case-Studies'}>
            <img style={{padding:"20px 20px 0 20px" }}
                src={blogImage}
                alt={blogTitle}
            />
        </Link>
    </div>
    <div className={contentClass ? contentClass : 'blog-content'} style={{height:"12rem",position:"relative", }}>
        <h3 className="title" style={{margin:'-3px 0 0 -10px'}}>
            <Link to={link ? link :'Case-Studies'}>
                {blogTitle}
            </Link>
        </h3>{blogDesc}
        <div className="desc">{blogDesc}</div>
        
            <div className={blogButtonClass ? blogButtonClass : 'rs-view-btn'} style={{marginLeft:"-9px",position:"absolute",top:"8.9rem"}}>
                <Link to={link ? link :'/Case-Studies'}>
                    {blogButtonText ? blogButtonText : 'View All'}
                </Link>
            </div>
    </div>
</div>
);
}
 
export default SinglePost;