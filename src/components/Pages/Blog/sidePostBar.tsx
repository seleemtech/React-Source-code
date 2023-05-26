import React from "react";
import CaseList from "../../CaseStudies/CaseList";
import ServiceList from "../../Service/ServiceList";
import TechnologyList from "../../Technology/TechnologyList";

const sidePostBar = () => {
    return ( <React.Fragment>
          <CaseList />
            <ServiceList />
            <TechnologyList />
    </React.Fragment> );
}
 
export default sidePostBar;