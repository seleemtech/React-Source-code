const TextSingle = (props:any) => {
    return ( <div className={props.itemClass}>
        <div className="courses-grid">
            <div className="content-part" >
            
                
                <h3 className="title" style={props.titleHeadClass}>
                   {props.title}
                </h3>
                <h5 className="Crsub-title" style={props.titleTextClass}>
                   {props.subtitle}
                </h5>
               
            </div>
        </div>
    </div>  );
}
 
export default TextSingle;