import React, { useEffect } from "react";
import SiteBreadcrumb from "../../BreadCumb/SiteBreadcrumb";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import ContactForm from "../../Contact/ContactForm";
import ContactInfo from "../../Contact/ContactInfo";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Helmet } from "react-helmet";

const items = [
  {
    title: "INDIA",
    emailTitle: "Email Addresss",
    email: "sales@esquareinfo.com",
    phoneTitle: "Phone Number",
    phone: "+91-9538093537",
    addTitle: "Address",
    address:
      "P-1, 4th Floor, Gold Signature, 95, Frazer Town, Above J&K Bank, Bangalore-560005.",
  },
  {
    title: "MALAYSIA",
    emailTitle: "Email Addresss",
    email: "sales@esquareinfo.com",
    phoneTitle: "Phone Number",
    phone: "+91-9538093537",
    addTitle: "Address",
    address:
      "Kuala Lumpur #2-11-2 Idaman Suria, Jalan10/21D, Medan Idaman 53100, Kuala Lumpur Malaysia.",
  },
  {
    title: "GERMANY",
    emailTitle: "Email Addresss",
    email: "sales@esquareinfo.com",
    phoneTitle: "Phone Number",
    phone: "+91-9538093537",
    addTitle: "Address",
    address:
      "GräfelfingbeiMünchen C/O - Co.n.t.r.a- 3000 Postfach1363, 82155 GräfelfingbeiMünchen",
  },
];
const style = {
  display: "none",
};
const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [document] = useAllPrismicDocumentsByType("contact");
  const slice = document && document[0]?.data;
  const NormalData = items.map((item: any, i: any) => {
    return (
      <div className="col-lg-4 md-mb-30" key={i}>
        <div className="box-wraper">
          <h4 className="box-title">{item.title}</h4>
          <ContactInfo
            boxClass="mb-30"
            title={item.emailTitle}
            iconClass="fa fa-envelope-o"
            email={item.email}
          />
          <ContactInfo
            boxClass="mb-30"
            title={item.phoneTitle}
            iconClass="fa fa-headphones"
            phone={item.phone}
          />
          <ContactInfo
            boxClass=""
            title={item.addTitle}
            iconClass="fa fa-map-signs"
            address={item.address}
          />
        </div>
      </div>
    );
  });
  const PrismicData = slice?.body[1]?.items?.map((item: any, i: any) => {
    return (
      <div className="col-lg-4 md-mb-30" key={i}>
        <div className="box-wraper">
          <h4 className="box-title">{item.info_main_title[0].text}</h4>
          <ContactInfo
            boxClass="mb-30"
            title={item.info_email_title[0].text}
            iconClass="fa fa-envelope-o"
            email={item.info_title[0].text}
          />
          <ContactInfo
            boxClass="mb-30"
            title={item.info_phone_title[0].text}
            iconClass={item.info_phone_icon[0]?.text}
            phone={item.info_phone[0].text}
          />
          <ContactInfo
            boxClass=""
            title={item.info_add_title[0].text}
            iconClass="fa fa-map-signs"
            address={item.info_add[0].text}
          />
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <SiteBreadcrumb
        pageTitle={
          document && (
            <>
              <span>
                {slice
                  ? slice?.body[0]?.primary?.contact_title[0].text
                  : "Contact Us"}
              </span>
            </>
          )
        }
        pageName="Contact"
        breadcrumbsImg={
          slice
            ? slice?.body[0]?.primary?.contact_bg_img.url
            : "/contactBackimage.jpeg"
        }
      />
      <div className="rs-contact style2 pt-5 md-pt-5 pb-70 md-pb-40">
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Get in touch with us today to learn more about our services and how we can help you."
        />
        <link rel="canonical" href="http://esquareinfo.com/Contact"/>
      </Helmet>
        <div className="container">
          <div className="contact-box pt-90 pb-90 md-pb-80 md-pt-30">
            <div className="row gutter-35">
              {slice ? PrismicData : NormalData}
            </div>
          </div>
          <div className="row y-middle">
            <div className="col-lg-6 md-mb-30 ">
              <div className="contact-widget">
                <SectionTitle
                  sectionClass="sec-title3 mb-36"
                  titleClass="title black-color mb-14"
                  title={
                    slice
                      ? slice?.body[2]?.primary?.map_title[0].text
                      : "Get in Touch"
                  }
                  descClass="new-desc"
                  description={
                    slice
                      ? slice?.body[2]?.primary?.map_desc[0].text
                      : "Have some suggestions or just want to say hi? Our  support team are ready to help you 24/7."
                  }
                />

                <ContactForm submitBtnClass="btn-send" btnText="Submit" />
              </div>
            </div>
            <div className="col-lg-6 pl-48 md-pl-14 md-pr-14">
              <div className="map-canvas">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7775.1246184840265!2d77.61123162439972!3d12.999822913349398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d13.0022994!2d77.61923349999999!4m5!1s0x3bae1642b33f8627%3A0xfd81705cf51bca0!2sesquare!3m2!1d12.996268299999999!2d77.6139202!5e0!3m2!1sen!2sin!4v1672760255106!5m2!1sen!2sin"
                  width="600"
                  height="450"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
