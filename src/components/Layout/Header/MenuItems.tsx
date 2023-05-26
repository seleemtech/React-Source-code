import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menuitems = (props:any) => {
    const { parentMenu, secondParentMenu } = props;

    const location = useLocation();
    return ( <React.Fragment>
        {/* <li className={  location.pathname === "/" ? 'rs-mega-menu menu-item-has-children active-menu current-menu-item' : 'rs-mega-menu menu-item-has-children'}><Link to="/">Home</Link>
                    
              
        </li> */}
        <li className={location.pathname === "/Liferay" || location.pathname==="/Liferay"? 'menu-item-has-children active-menu current-menu-item' : 'menu-item-has-children'}>
            <Link to="/Liferay">Technologies</Link>
            <ul className="sub-menu">
                <li>
                    <Link to="/Liferay" className={location.pathname === "/Liferay" ? "active-menu" : ""}>Liferay</Link>
                </li>
                {/* <li>
                    <Link to="/BigData" className={location.pathname === "/BigData" ? "active-menu" : ""}>Big Data</Link>
                </li> */}
                <li>
                    <Link to="/Java" className={location.pathname === "/Java" ? "active-menu" : ""}>Java</Link>
                </li>
                <li>
                    <Link to="/SpringBoot" className={location.pathname === "/SpringBoot" ? "active-menu" : ""}>Spring Boot</Link>
                </li>
                <li>
                    <Link to="/MicroServices" className={location.pathname === "/MicroServices" ? "active-menu" : ""}>Micro Services</Link>
                </li>
                <li>
                    <Link to="/.Net" className={location.pathname === "/.Net" ? "active-menu" : ""}>.Net</Link>
                </li>
                <li>
                    <Link to="/React" className={location.pathname === "/React" ? "active-menu" : ""}>React</Link>
                </li>
              
               
                <li>
                    <Link to="/Angular" className={location.pathname === "/Angular" ? "active-menu" : ""}>Angular</Link>
                </li>
                <li>
                    <Link to="/Android" className={location.pathname === "/Android" ? "active-menu" : ""}>Android</Link>
                </li>
                {/* <li>
                    <Link to="/Magento" className={location.pathname === "/Magento" ? "active-menu" : ""}>Magneto</Link>
                </li>
                <li>
                    <Link to="/Drupal" className={location.pathname === "/Drupal" ? "active-menu" : ""}>Drupal</Link>
                </li> */}
                {/* <li>
                    <Link to="/Alfresco" className={location.pathname === "/Alfresco" ? "active-menu" : ""}>Alfresco</Link>
                </li>
                <li>
                    <Link to="/Joomla" className={location.pathname === "/Joomla" ? "active-menu" : ""}>Joomla</Link>
                </li>
                <li>
                    <Link to="/PHP-Framework" className={location.pathname === "/PHP-Framework" ? "active-menu" : ""}>PHP Framework</Link>
                </li> */}
            </ul>
        </li>
        <li className={parentMenu === 'course' || location.pathname==="/Portal" ? 'menu-item-has-children active-menu current-menu-item' : 'menu-item-has-children'}>
            <Link to="/Portal" className={location.pathname === "/Portal" ? "active-menu" : ""}>Solutions</Link>
            <ul className="sub-menu">
                <li>
                    <Link to="/Portal" className={location.pathname === "/Portal" ? "active-menu" : ""}>Portal</Link>
                </li>
                <li>
                    <Link to="/CloudComputing" className={location.pathname === "/CloudComputing" ? "active-menu" : ""}>Cloud Computing</Link>
                </li>
                <li>
                    <Link to="/ContentManagement" className={location.pathname === "/ContentManagement" ? "active-menu" : ""}>Content Management</Link>
                </li>
                <li>
                    <Link to="/E-commerce" className={location.pathname === "/E-commerce" ? "active-menu" : ""}>E-Commerce</Link>
                </li>
                <li>
                    <Link to="/Business-Management" className={location.pathname === "/Business-Management" ? "active-menu" : ""}>Business Management</Link>
                </li>
            </ul>
        </li>
          <li className={location.pathname === "/WebPortal"? 'menu-item-has-children active-menu current-menu-item' : 'menu-item-has-children'}>
            <Link to="/WebPortal">Services</Link>
            <ul className="sub-menu">
                <li>
                    <Link to="/WebPortal" className={location.pathname === "/WebPortal" ? "active-menu" : ""}>Web Portal Development</Link>
                </li>
                <li>
                    <Link to="/WebDesign" className={location.pathname === "/WebDesign" ? "active-menu" : ""}>Web Designing</Link>
                </li>
                <li>
                    <Link to="/MobileDevelopment" className={location.pathname === "/MobileDevelopment" ? "active-menu" : ""}>Mobile App Development</Link>
                </li>
                <li>
                    <Link to="/CorporateTraining" className={location.pathname === "/CorporateTraining" ? "active-menu" : ""}>Corporate Training</Link>
                </li>
                {/* <li>
                    <Link to="WebHostingServices" className={location.pathname === "/WebHostingServices" ? "active-menu" : ""} >Web Hosting Services</Link>
                </li>
                <li>
                    <Link to="/OnlineMarketing" className={location.pathname === "/OnlineMarketing" ? "active-menu" : ""}>Online Marketing</Link>
                </li> */}
                <li>
                    <Link to="/BusinessConsulting" className={location.pathname === "/BusinessConsulting" ? "active-menu" : ""}>Business Consulting</Link>
                </li>
            </ul>
        </li>
        <li className={location.pathname === "/Case-Studies"? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
            <Link to="/Case-Studies" >ShowCase</Link>
            <ul className="sub-menu">
                <li>
                    <Link to="/Case-Studies" className={location.pathname === "/Case-Studies" ? "active-menu" : ""}>Case Studies</Link>
                </li>
                <li>
                    <Link to="/Clientele" className={location.pathname === "/Clientele" ? "active-menu" : ""}>Clientele</Link>
                </li>
                <li>
                    <Link to="/Brochure" className={location.pathname === "/Brochure" ? "active-menu" : ""}>Brochure</Link>
                </li>
                <li>
                    <Link to="/Presentation" className={location.pathname === "/Presentation" ? "active-menu" : ""}>Presentation</Link>
                </li>
              
            </ul>
        </li>
        <li className={location.pathname === "/About-Us"? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
            <Link to="/About-Us" >About Us</Link>
            <ul className="sub-menu">
                <li>
                    <Link to="/About-Us" className={location.pathname === "/About-Us" ? "active-menu" : ""}>Company</Link>
                </li>
                <li>
                    <Link to="/Outsourcing-Partners" className={location.pathname === "/Outsourcing-Partners" ? "active-menu" : ""}>OutSourcing Partners</Link>
                </li>
                <li>
                    <Link to="/Marketing-Partners" className={location.pathname === "/Marketing-Partners" ? "active-menu" : ""}>Marketing Partners</Link>
                </li>
                <li>
                    <Link to="/Become-A-Partner" className={location.pathname === "/Become-A-Partner" ? "active-menu" : ""}>Become A Partner</Link>
                </li>
              
            </ul>
        </li>
      
    </React.Fragment> );
}
 
export default Menuitems;