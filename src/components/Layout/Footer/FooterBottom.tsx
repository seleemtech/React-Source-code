import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row y-middle">
          <div className="col-lg-3 " style={{ textAlign: "center" }}>
            <img src="/iso1.png" style={{ paddingRight: "15px" }}></img>
            <img src="/iso2.png" style={{ paddingRight: "15px" }}></img>
            <img src="/iso3.png"></img>
          </div>

          <div className="col-lg-6 md-mb-10">
            <div className="copyright md-mb-0">
              <p style={{ textAlign: "center" }}>
                © 2023 - E2 Software India Pvt Ltd All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-lg-3 text-end md-text-left">
            <ul className="copy-right-menu" style={{ textAlign: "center" }}>
              <li>
                <Link to="/About-Us">About Us</Link>
              </li>
              <li>
                <Link to="/Blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
