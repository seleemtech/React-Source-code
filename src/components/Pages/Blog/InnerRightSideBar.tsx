import { Link } from "react-router-dom";

const InnerRightSideBar = (props:any) => {
    const {linkText1,linkText2,linkText3,linkText4,linkText5,linkText6,linkText7,linkText8,linkText9,linkText10}=props;
  return (
    <div className="widget-archives mb-5">
      <h3 className="widget-title">Blogs</h3>
      <ul>
        <li>
          <Link to="/WebPortal">{linkText1}</Link>
        </li>
        <li>
          <Link to="/WebDesign">{linkText2}</Link>
        </li>
        <li>
          <Link to="/MobileDevelopment">{linkText3}</Link>
        </li>
        <li>
          <Link to="/CorporateTraining">{linkText4}</Link>
        </li>
        <li>
          <Link to="/WebHostingServices">{linkText5}</Link>
        </li>
        <li>
          <Link to="/OnlineMarketing">{linkText6}</Link>
        </li>
        <li>
          <Link to="/BusinessConsulting">{linkText7}</Link>
        </li>
        <li>
          <Link to="/WebHostingServices">{linkText8}</Link>
        </li>
        <li>
          <Link to="/OnlineMarketing">{linkText9}</Link>
        </li>
        <li>
          <Link to="/BusinessConsulting">{linkText10}</Link>
        </li>
      </ul>
    </div>
  );
};

export default InnerRightSideBar;
