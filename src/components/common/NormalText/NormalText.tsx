const NormalText = (props: any) => {
  return (
    <div className={props.itemClass}>
      <div className="courses-grid">
        <div className="content-part" >
          <h3 className="title" style={props.redTitle}>{props.title}</h3>
          <h5 className="Crsub-title">
            <li className={props.listClass}>{props.list1}</li>
            <li className={props.listClass}>{props.list2}</li>
            <li className={props.listClass}>{props.list3}</li>
            <li className={props.listClass}>{props.list4}</li>
            <li className={props.listClass}>{props.list5}</li>
            <li className={props.listClass}>{props.list6}</li>
            <li className={props.portalList}>{props.list7}</li>
            <li className={props.portalList}> {props.list8}</li>
            <li className={props.portalList}>{props.list9}</li>
            <li className={props.portalList}>{props.list10}</li>
            <li className={props.portalList}>{props.list11}</li>
            <li className={props.portalList}>{props.list12}</li>
            <li className={props.cloudList}>{props.list22}</li>
            <li className={props.ecommerce}>{props.list13}</li>
            <li className={props.ecommerce}>{props.list14}</li>
            <li className={props.ecommerce}>{props.list15}</li>
            <li className={props.ecommerce}>{props.list16}</li>
            <li className={props.twoList} >{props.list17}</li>
            <li className={props.twoList}>{props.list18}</li>
            <li className={props.threeList}>{props.list19}</li>
            <li className={props.threeList}>{props.list20}</li>
            <li className={props.threeList}>{props.list21}</li>
            {props.subtitle1}
            <br />
            <br />
            {props.subtitle2}
            <br />
            <br /> {props.subtitle3}
            <br />
            <br />
            {props.subtitle4}
            <br />
            <br />
            {props.subtitle5}
          </h5>
       
        </div>
      </div>
    </div>
  );
};

export default NormalText;
