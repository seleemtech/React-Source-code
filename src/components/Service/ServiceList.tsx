import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <div className="widget-archives mb-50">
      <h3 className="widget-title">Services</h3>
      <ul>
        <li>
          <Link to="/WebPortal">Web Portal Development</Link>
        </li>
        <li>
          <Link to="/WebDesign">Web Designing</Link>
        </li>
        <li>
          <Link to="/MobileDevelopment">Mobile App Development</Link>
        </li>
        <li>
          <Link to="/CorporateTraining">Corporate Training</Link>
        </li>
        <li>
          <Link to="/WebHostingServices">Web Hosting Services</Link>
        </li>
        <li>
          <Link to="/OnlineMarketing">Online Marketing</Link>
        </li>
        <li>
          <Link to="/BusinessConsulting">Business Consulting</Link>
        </li>
      </ul>
    </div>
  );
};

export default ServiceList;
