
import { Link, useLocation } from 'react-router-dom';

const SinglePostFour = (props:any) => {
    const { blogClass, linkPage,blogImage, blogTitle, contentClass, blogAuthor, blogPublishedDate, categoryClass, blogCategory } = props;
    console.log(linkPage)
    const location=useLocation();
    return (
        <div className= 'blog-item'>
            <div className="image-part">
            
                <Link to={linkPage}>
                    
                    <img
                        src={blogImage}
                        alt={blogTitle}
                    />
                </Link>
            </div>
            <div className={contentClass ? contentClass : 'blog-content'}>
                
                <h3 className="title mt-10 mb-10">
                    <Link to={linkPage}>
                        {blogTitle ? blogTitle : 'Open Source Job Report Show More Openings Fewer'}
                    </Link>
                </h3>
                <ul className="blog-meta">
                   
                </ul>
            </div>
        </div>

    )
}

export default SinglePostFour