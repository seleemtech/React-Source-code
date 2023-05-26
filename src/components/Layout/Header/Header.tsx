import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";

import Menuitems from "./MenuItems";
import normalLogo from "../../../assets/img/HomeLogo/normalLogo.png";

import darkLogo from "../../../assets/img/HomeLogo/darklogo.png";
import RSMobileMenu from "./RSMobileMenu";
import { useLocation } from 'react-router-dom';

const SpanStyles = {
  fontSize: "11px",
  paddingRight: "6px",
  letterSpacing: "1px",
  fontWeight:'400',
 
};
const Header = (props: any) => {
  const location = useLocation();
  const {
    headerClass,
    parentMenu,
    secondParentMenu,
    activeMenu,
    headerNormalLogo,
    headerStickyLogo,
    mobileNormalLogo,
  } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Sticky is displayed after scrolling for 100 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <React.Fragment>
      <div
        className={
          headerClass ? headerClass : "full-width-header home8-style4 main-home"
        }
      >
        <header id="rs-header" className="rs-header">
          <div
            className={
              isVisible || location.pathname!=='/' ?   "topbar-area menu-sticky  stickySub hidden-md sticky  " :"topbar-area menu-sticky "
            }
          >
            <div className="container">
              <div className="row y-middle">
                <div className="col-md-7">
                  <ul className="topbar-contact">
                  <li className="Social-icon-link">
                      <a href="https://www.linkedin.com/company/esquare-info-solutions">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  <li className="Social-icon-link">
                      <a href="https://wa.me/9538093537">
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>

                    <li className="Social-icon-link">
                      <a href="https://www.facebook.com/EsquareInfoSolutions">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="Social-icon-link">
                      <a href="https://twitter.com/esquareinfo">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li
                      className="Social-icon-link"
                      style={{ marginRight: "10px" }}
                    >
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>

                    <li>
                      <span style={ SpanStyles}>INDIA:</span>
                      <a href="tel:+" style={{fontSize:"11px"}}>+91-9538093537</a>
                    </li>

                    <li>
                      <span style={SpanStyles}>UK:</span>
                      <a href="tel:+" style={{fontSize:"11px"}}>+44 7865671970</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-5 text-end">
                  <ul className="topbar-right">
                    <li className="login-register">
                      <Link to="/Blogs">Blogs</Link>
                    </li>
                    <li className="login-register">
                      <a href="https://esquareinfo.zohorecruit.com/careers">Careers</a>
                    </li>
                    <li className="btn-part">
                      <Link to="/Contact" className="apply-btn">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              isVisible || location.pathname!=='/' ?
                 "menu-area menu-sticky sticky"
                : "menu-area menu-sticky"
            }
          >
            <div className="container">
              <div className="row y-middle">
                <div className="col-lg-2">
                  <div className="logo-area hidden-md">
                    <Link to="/">
                      <img
                        className="normal-logo"
                        src={headerNormalLogo ? headerNormalLogo : normalLogo}
                        alt=""
                      />
                      <img onClick={()=>{ window.scrollTo({top:0,left:0, behavior: 'smooth',});}}
                        className="sticky-logo"
                        src={headerStickyLogo ? headerStickyLogo : darkLogo}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-9 text-end">
                  <div className="rs-menu-area">
                    <div className="main-menu">
                      <div className="mobile-menu md-display-block">
                        <Link to="/" className="mobile-normal-logo">
                          <img
                            className="normal-logo"
                            src={
                              mobileNormalLogo ? mobileNormalLogo : normalLogo
                            }
                            alt=""
                          />
                        </Link>
                        <Link to="/" className="mobile-sticky-logo">
                          <img
                            src={mobileNormalLogo ? mobileNormalLogo : darkLogo}
                            alt="logo"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="rs-menu-toggle"
                          onClick={() => {
                            setMenuOpen(!menuOpen);
                          }}
                        >
                          <i className="fa fa-bars"></i>
                        </Link>
                      </div>
                      <nav className="rs-menu hidden-md">
                        <ul className="nav-menu">
                          <Menuitems
                            parentMenu={parentMenu}
                            secondParentMenu={secondParentMenu}
                            activeMenu={activeMenu}
                          />
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <RSMobileMenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            parentMenu={parentMenu}
            secondParentMenu={secondParentMenu}
          />
          <div
            onClick={() => setMenuOpen(false)}
            className={menuOpen ? "body-overlay show" : "body-overlay"}
          ></div>
        </header>
      </div>
    </React.Fragment>
  );
};

export default Header;
