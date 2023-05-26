import { useContext } from "react";
import { Link } from "react-router-dom";

import Technology from "../Pages/Home/Technology";

const TechnologySingle = (props: any) => {
  const {
    itemClass,
    title,
    image,
    iconImg,
    quantity,
    btnText,
    catLink,
    link,
    delayTitle,
    duration,
    Animation,
  } = props;

  return (
    <div
      className={itemClass}
      data-aos={Animation}
      data-aos-delay={delayTitle}
      data-aos-duration={duration}
      key={props.key}
    >
      <div className="cate-images">
        <Link to={link}>
          <img src={image} />
        </Link>
      </div>
      <div className="contents">
        <div className="img-part"></div>
        <div className="content-wrap">
          <h2 className="title">
            <Link to={link}>{title}</Link>
          </h2>
          <span className="course-qnty">{quantity}</span>
          {btnText ? (
            <>
              <div className="btn2">
                <Link to={catLink ? catLink : "/course-categories"}>
                  {btnText}
                </Link>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnologySingle;
