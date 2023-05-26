import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    src: "/caseStud4.jpeg",
    title: "Company Intranet Portal",
    link: "/case-Studies/Case4",
  },
  {
    src: "/caseStud3.jpeg",
    title: "Enterprise Health Care Portal",
    link: "/case-Studies/Case3",
  },
  {
    src: "/caseStud6.jpeg",
    title: "Mobile Application For Power Consumers",
    link: "/case-Studies/Case6",
  },
  {
    src: "/caseStud9.jpeg",
    title: "Cloud Services Platform",
    link: "/case-Studies/Case9",
  },
  {
    src: "/caseStud8.jpeg",
    title: "Multi lingual Wiki Portal using Liferay",
    link: "/case-Studies/Case8",
  },
  {
    src: "/caseStud11.jpeg",
    title: "Budget Planning and Spending Application",
    link: "/case-Studies/Case11",
  },
];
const CaseList = () => {
  const NormalData = items.map((item: any, i: any) => {
    return (
      <div className="show-featured" key={i}>
        <div className="post-img">
          <Link to={item.link}>
            <img src={item.src} />
          </Link>
        </div>
        <div className="post-desc">
          <Link to={item.link}>{item.title}</Link>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="recent-posts-widget mb-50">
        <h3 className="widget-title">Case Studies</h3>
        {NormalData}
      </div>
    </React.Fragment>
  );
};

export default CaseList;
