
import { Link } from 'react-router-dom';

const SinglePost = (props:any) => {
    const { blogClass, blogImage, blogTitle, contentClass, blogDesc, blogCategory, blogAuthor, blogPublishedDate, blogButtonClass, blogButtonText } = props;
    return (
        <div className={blogClass ? blogClass : 'blog-item mb-44'}>
            <div className="image-part">
                <Link to="/blog/single-post-right-sidebar">
                    <img 
                        src={blogImage}
                        alt={blogTitle}
                    />
                </Link>
            </div>
            <div className={contentClass ? contentClass : 'blog-content'}>
                
                <h3 className="title" style={{textAlign:'center'}}>
                    <Link to="/blog/single-post-right-sidebar">
                        {blogTitle ? blogTitle : 'Open Source Job Report Show More Openings Fewer '}
                    </Link>
                </h3>
                <div className="desc" style={{textAlign:'justify'}}>{blogDesc ? blogDesc : 'We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'}</div>
                <div className="btn-btm">
                   
                   
                </div>
            </div>
        </div>

    )
}

export default SinglePost