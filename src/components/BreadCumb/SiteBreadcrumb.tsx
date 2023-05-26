import { Link } from "react-router-dom";

const SiteBreadcrumb = (props:any) => {
    const { breadcrumbsClass, innerClass,imagStyle, titleClass,displayNone, titleDisplay, pageTitle, parentCategory, pageCategory, pageName, breadcrumbsImg } = props;
    return ( <div className={breadcrumbsClass ? breadcrumbsClass : 'rs-breadcrumbs breadcrumbs-overlay mt-128 md-mt-66'}>
    <div className="breadcrumbs-img">
        <img style={imagStyle}
            src={breadcrumbsImg} 
            alt="Breadcrumbs Image" 
        />
    </div>
    <div className={innerClass ? innerClass : 'breadcrumbs-text white-color'}>
        <h1 className={titleClass ? titleClass : 'page-title'} style={titleDisplay}>{pageTitle ? pageTitle : 'Breadcrumbs'}</h1>
        <ul>
            <li style={displayNone}>
                <Link to="/" className="active">{parentCategory ? parentCategory : 'Home'}</Link>
            </li>
            {pageCategory ? 
                <>
                    <li >
                        <Link to="/" className="active">{pageCategory ? pageCategory : 'Category'}</Link>
                    </li> 
                    <li style={displayNone}>{pageName ? pageName : 'Page Name'}</li>
                </> : <li style={displayNone}>{pageName ? pageName : 'Page Name'}</li>							
            }
        </ul>
    </div>
</div> );
}
 
export default SiteBreadcrumb;