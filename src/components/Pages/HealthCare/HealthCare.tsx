import { usePrismicDocumentByUID } from "@prismicio/react";
import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const HealthCare = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [document] = usePrismicDocumentByUID("educational", "healthid");
  const slice = document && document?.data;
  return (
    <React.Fragment>
      <div className="webportal main-home mt-130 md-mt-68">
      <Helmet>
        <title>HealthCare</title>
        <meta
          name="description"
          content="Our Awesome Products and services are coming soon"
        />
         <link rel="canonical" href="http://esquareinfo.com/HealthCare"/>
      </Helmet>
        <img
          src={slice ? slice?.body[0]?.items[0].img.url : "/comingsoon.jpg"}
          style={{ width: "100%", maxHeight: "auto" }}
        />
      </div>
    </React.Fragment>
  );
};

export default HealthCare;
