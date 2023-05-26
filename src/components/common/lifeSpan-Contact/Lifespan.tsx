import { Link } from "react-router-dom";
const spanbg = {
    backgroundImage: `url("/LifspanBg.jpeg")`,
    backgroundSize: "cover",
    backgroundRepeat: " no-repeat",
  };
const LifeSpan = () => {
  return (
    <div className="webportal main-home md-pb-12" style={spanbg} >
      <div className="partition-bg-wrap" style={{padding:"28px 0 0 0"}}>
        <div className="container">
          <div className="row">
            <div className=" col-lg-8 md-pl-14">
              <div className="sec-title3 mb-40">
                <h2
                  className="title white-color mb-16 Heading"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1800"
                  style={{ fontSize: "30px"}}
                >
                 Making innovation a lifespan for your business
                </h2>
              </div>
            </div>
            <div  className="col-lg-4 md-pl-14">
              <div
                className="btn-part"
                data-aos="zoom-in"
                data-aos-delay="1000"
                data-aos-duration="8000"
              >
                <Link className="readon orange-btn transparent" to="/Contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeSpan;
