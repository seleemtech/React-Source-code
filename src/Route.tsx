import Header from "./components/Layout/Header/Header";
import Home from "./components/Pages/Home/Home";
import Aos from "aos";
import Contact from "./components/Pages/Contact/Contact";

import WebDesign from "./components/Pages/Services/WebDesign";
import MobileDevelop from "./components/Pages/Services/MobileDevelp";
import CorporateTraining from "./components/Pages/Services/CorporateTrainig";
import WebHosting from "./components/Pages/Services/WebHosting";
import OnlineMarketing from "./components/Pages/Services/OnlineMarketing";
import BusinessConsulting from "./components/Pages/Services/BusinessConsulting";
import Portal from "./components/Pages/Solutions/Portal";
import WebPortal from "./components/Pages/Services/WebPortal";
import CloudComputing from "./components/Pages/Solutions/CloudCoputing";
import ContentManagement from "./components/Pages/Solutions/ContentManagement";
import Ecommerce from "./components/Pages/Solutions/Ecommerce";
import BusinessManagement from "./components/Pages/Solutions/BusinessManagement";
import Company from "./components/Pages/About/Company";
import OutSourcingPartner from "./components/Pages/About/OutsourcingPartner";
import MarketingPartner from "./components/Pages/About/MarketingPartner";
import BecamePartner from "./components/Pages/About/BecamePartner";
import PHPFrame from "./components/Pages/Technologies/PhpFrame";
import Joomla from "./components/Pages/Technologies/Joomla";
import Alfresco from "./components/Pages/Technologies/Alfresco";
import Drupal from "./components/Pages/Technologies/Drupal";
import Liferay from "./components/Pages/Technologies/Liferay";
import Careers from "./components/Pages/Careers/Careers";
import Travel from "./components/Pages/Travel/Travel";
import HealthCare from "./components/Pages/HealthCare/HealthCare";
import Education from "./components/Pages/Education/Education";
import HRMS from "./components/Pages/HRMS/HRMS";
import CaseStudy from "./components/Pages/ShowCase/CaseStudies/CaseStudy";
import Magento from "./components/Pages/Technologies/Magento/Magento";
import Android from "./components/Pages/Technologies/Android/Android";
import Bigdata from "./components/Pages/Technologies/BigData/Bigdata";
import Brochure from "./components/Pages/ShowCase/Brochure";
import Presentation from "./components/Pages/ShowCase/Presentation";
import Clientele from "./components/Pages/ShowCase/Clientele";
import Meetingscheduler from "./components/Pages/ShowCase/CaseStudies/Meetingschedule";
import TripPlanner from "./components/Pages/ShowCase/CaseStudies/Tripplanner";
import Enterprisehealth from "./components/Pages/ShowCase/CaseStudies/Enterprisehealth";
import Companyportal from "./components/Pages/ShowCase/CaseStudies/Companyportal";
import RoadAccident from "./components/Pages/ShowCase/CaseStudies/Roadaccident";
import MobileApplication from "./components/Pages/ShowCase/CaseStudies/Mobileapplication";
import WeatherApp from "./components/Pages/ShowCase/CaseStudies/Weather";
import MultiLingual from "./components/Pages/ShowCase/CaseStudies/Multilingual";
import CloudService from "./components/Pages/ShowCase/CaseStudies/Cloudservice";
import Security from "./components/Pages/ShowCase/CaseStudies/Security";
import Budgetplanning from "./components/Pages/ShowCase/CaseStudies/Budgetplanning";
import Blogs from "./components/Pages/Blog/Blogs";
import Blog1 from "./components/Pages/Blog/InnerPages/Blog1";
import Cta from "./components/Pages/Home/CtaSection";
import { Route,Routes } from "react-router-dom";
import Java from "./components/Pages/Technologies/Java";
import Reacts from "./components/Pages/Technologies/React";
import Angular from "./components/Pages/Technologies/Angular";
import Net from "./components/Pages/Technologies/Net";
import SpringBoot from "./components/Pages/Technologies/SpringBoot";
import MicroServices from "./components/Pages/Technologies/MicroServices";

const route = () => {
    return ( <Routes>
      
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route  path="/WebPortal" element={<WebPortal />}></Route>
        <Route path="/WebDesign" element={<WebDesign />}></Route>
        <Route path="/MobileDevelopment" element={<MobileDevelop />}></Route>
        <Route path="/CorporateTraining" element={<CorporateTraining />}></Route>
        {/* <Route path="/WebHostingServices" element={<WebHosting />}></Route> */}
        {/* <Route path="/OnlineMarketing" element={<OnlineMarketing />}></Route> */}
        <Route
          path="/BusinessConsulting"
          element={<BusinessConsulting />}
        ></Route>
        <Route path="/Portal" element={<Portal />}></Route>
        <Route path="/CloudComputing" element={<CloudComputing />}></Route>
        <Route path="/ContentManagement" element={<ContentManagement />}></Route>
        <Route path="/E-commerce" element={<Ecommerce />}></Route>
        <Route
          path="/Business-Management"
          element={<BusinessManagement />}
        ></Route>
        <Route path="/About-Us" element={<Company />}></Route>
        <Route
          path="/Outsourcing-Partners"
          element={<OutSourcingPartner />}
        ></Route>
        <Route path="/Marketing-Partners" element={<MarketingPartner />}></Route>
        <Route path="/Become-A-Partner" element={<BecamePartner />}></Route>
        {/* <Route path="/PHP-Framework" element={<PHPFrame />}></Route>
        <Route path="/Joomla" element={<Joomla />}></Route>
        <Route path="/Alfresco" element={<Alfresco />}></Route>
        <Route path="/Drupal" element={<Drupal />}></Route> */}
        <Route path="/Liferay" element={<Liferay />}></Route>
        <Route path="/Careers" element={<Careers />}></Route>
        <Route path="/Travel" element={<Travel />}></Route>
        <Route path="/HealthCare" element={<HealthCare />}></Route>
        <Route path="/Education" element={<Education />}></Route>
        <Route path="/HRMS" element={<HRMS />}></Route>
        <Route path="/Case-Studies" element={<CaseStudy />}></Route>
        {/* <Route path="/Magento" element={<Magento />}></Route> */}
        <Route path="/Android" element={<Android />}></Route>
        {/* <Route path="/BigData" element={<Bigdata />}></Route> */}
        <Route path="/Brochure" element={<Brochure />}></Route>
        <Route path="/Presentation" element={<Presentation />}></Route>
        <Route path="/Clientele" element={<Clientele />}></Route>
        <Route path="/Blogs" element={<Blogs />}></Route>
        <Route path="/Java" element={<Java />}></Route>
        <Route path="/React" element={<Reacts />}></Route>
        <Route path="/Angular" element={<Angular />}></Route>
        <Route path="/.Net" element={<Net />}></Route>
        <Route path="/SpringBoot" element={<SpringBoot/>}></Route>
        <Route path="/MicroServices" element={<MicroServices/>}></Route>
       
        {/* Case Studies Routes Start-Here */}
        <Route path="/case-Studies/Case1" element={<Meetingscheduler />}></Route>
        <Route path="/case-Studies/Case2" element={<TripPlanner />}></Route>
        <Route path="/case-Studies/Case3" element={<Enterprisehealth />}></Route>
        <Route path="/case-Studies/Case4" element={<Companyportal />}></Route>
        <Route path="/case-Studies/Case5" element={<RoadAccident />}></Route>
        <Route path="/case-Studies/Case6" element={<MobileApplication />}></Route>
        <Route path="/case-Studies/Case7" element={<WeatherApp />}></Route>
        <Route path="/case-Studies/Case8" element={<MultiLingual />}></Route>
        <Route path="/case-Studies/Case9" element={<CloudService />}></Route>
        <Route path="/case-Studies/Case10" element={<Security />}></Route>
        <Route path="/case-Studies/Case11" element={<Budgetplanning />}></Route>
  
        {/* Case Studies Routes End-Here */}
  
        {/* Blog Routes Start-Here */}
        <Route path="/blog1" element={<Blog1 />}></Route>
        {/* Blog Routes End-Here */}
      </Routes> );
}
 
export default route;