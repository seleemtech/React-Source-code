import { Link } from "react-router-dom";
import normalLogo from '../../../assets/img/HomeLogo/normalLogo.png';

import FooterBottom from "./FooterBottom";

const Footer = (props:any) => {
    const { footerClass, footerTopClass } = props;
    return (   <footer className={footerClass ? footerClass : 'rs-footer'}>
    <div className={`footer-top ${footerTopClass}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
                    <h3 className="widget-title">Address</h3>
                    <ul className="address-widget">
                        <li>
                            <i className="flaticon-location"></i>
                            <div className="desc">P-1, 4th Floor, Gold Signature, <br/>95, Mosque Road
Frazer Town, 
Bengaluru-560005.<br/>
Karnataka, India.</div>
                        </li>
                        <li>
                            <i className="flaticon-call"></i>
                            <div className="desc"><a href="+91-9538093537">+91-9538093537</a></div>
                        </li>
                        <li>
                            <i className="flaticon-email"></i>
                            <div className="desc"><a href="mailto:sales@esquareinfo.com">sales@esquareinfo.com</a></div>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 pl-50 md-pl-14 footer-widget md-mb-50">
                    <h3 className="widget-title">Products</h3>
                    <ul className="site-map">
                        <li><Link to="E-commerce">E-commerce</Link></li>
                        <li><Link to="/Travel">Travel</Link></li>
                        <li><Link to="/Education">Educational</Link></li>
                        <li><Link to="/HRMS">HRMS</Link></li>
                        <li><Link to="/HealthCare">HealthCare</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 pl-50 md-pl-14 footer-widget md-mb-50">
                    <h3 className="widget-title">Company</h3>
                    <ul className="site-map">
                        <li><Link to="/About-Us">About Us</Link></li>
                        <li><Link to="/Clientele">Clientele</Link></li>
                        <li><a href="/">Testimonials</a></li>
                        <li> <a href="https://esquareinfo.zohorecruit.com/careers">Careers</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                    <h3 className="widget-title">Support
</h3>
                    <ul className="site-map">
                        <li><Link to="/Blogs">Product Support</Link></li>
                        <li><Link to="/Case-Studies">Knowledge Base</Link></li>
                        <li><Link to="/Portal">FAQs</Link></li>
                        <li><Link to="/Contact">Request a Quote</Link></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
    <FooterBottom />
</footer> );
}
 
export default Footer;