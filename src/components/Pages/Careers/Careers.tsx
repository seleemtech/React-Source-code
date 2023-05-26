import { useAllPrismicDocumentsByType } from "@prismicio/react";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ApplyForm from "../../ApplyForm/ApplyForm";

const items = [
  {
    col1: "Java Developer",
    col2: "Bangalore",
    col3: "Development",
    col4: "019-01-02",
  },
  {
    col1: "Liferay Developer",
    col2: "Bangalore",
    col3: "Development",
    col4: "2019-01-02",
  },
  {
    col1: "Marketing Executive",
    col2: "Bangalore",
    col3: "Marketing",
    col4: "2019-01-02",
  },
];

const buttonStyle = {
  border: "none",
  background: "none",
  color: "grey",
};

const Careers = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [document] = useAllPrismicDocumentsByType("careers");
  const slice = document && document[0]?.data;
  const bg = {
    backgroundImage: `url(${
      slice ? slice?.body[0]?.primary?.main_bg_img.url : "/careersBg.jpg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "right",

    backgroundRepeat: " no-repeat",
    borderBottom: "5px solid #d7df00",
  };
  const NormalData = items.map((item: any, i: any) => {
    return (
      <tr key={i}>
        <td>
          <button className="apply_button"  style={buttonStyle} onClick={handleShow}>
            {item.col1}
          </button>
        </td>
        <td> {item.col2}</td>
        <td> {item.col3}</td>
        <td>{item.col4}</td>
      </tr>
    );
  });
  const PrismicData = slice?.body[1]?.items?.map((item: any, i: any) => {
    return (
      <tr key={i}>
        <td>
          <button
            style={buttonStyle}
            className="apply_button"
            onClick={handleShow}
          >
            {item.table_data_1[0].text}{" "}
          </button>
        </td>
        <td> {item.table_data_2[0].text}</td>
        <td> {item.table_data_3[0].text}</td>
        <td>{item.table_data_4[0].text}</td>
      </tr>
    );
  });
  return (
    <React.Fragment>
      <div className="webportal main-home mt-130 md-mt-68" style={bg}>
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row">
              <div className=" col-lg-8 md-pl-14 ">
                <div className="sec-title3 mb-40">
                  <h2
                    className="title  mb-16 Heading"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1800"
                    style={{ fontSize: "24px", color: "#ccffff" }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.main_title[0].text
                      : "Grow with us"}
                  </h2>
                  <p
                    className="desc white-color  md-pr-0 sub-text"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="3000"
                    style={{
                      fontSize: "15px",
                      lineHeight: " 1.4",
                      textAlign: "justify",
                    }}
                  >
                    {slice
                      ? slice?.body[0]?.primary?.first_para_text[0].text
                      : "At Esquare, we value your passion for technologies and provide opportunities to build a world that is connected  intellegent, cleaner and greener."}
                    <hr style={{ border: "1px solid white" }} />
                    <span style={{ color: "#d7df00" }}>Share this page</span>
                    <div id="sociallinks" style={{ fontSize: "20px" }}>
                      {" "}
                      <i
                        style={{ marginRight: "5px" }}
                        className="fa fa-facebook"
                        id="yui_patched_v3_11_0_1_1672672313038_361"
                      ></i>{" "}
                      <i
                        style={{ marginRight: "5px" }}
                        className="fa fa-twitter"
                        id="yui_patched_v3_11_0_1_1672672313038_356"
                      ></i>{" "}
                      <i
                        style={{ marginRight: "5px" }}
                        className="fa fa-linkedin"
                        id="yui_patched_v3_11_0_1_1672672313038_354"
                      ></i>{" "}
                      <i className="fa fa-google-plus"></i>{" "}
                    </div>
                  </p>
                </div>
              </div>
              <div className=" col-lg-4 md-pl-14 ">
                <img
                  src={
                    slice
                      ? slice?.body[0]?.primary?.right_img.url
                      : "/careersrightImg.png"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-lg-12 pt-30 pb-30 careers">
        <div className="container">
          <table>
            <tr>
              <th>
                {slice
                  ? slice?.body[1]?.primary?.table_head1[0].text
                  : "Position"}
              </th>
              <th>
                {slice
                  ? slice?.body[1]?.primary?.table_head2[0].text
                  : "Location"}
              </th>
              <th>
                {slice
                  ? slice?.body[1]?.primary?.table_head3[0].text
                  : "Department"}
              </th>
              <th>
                {slice ? slice?.body[1]?.primary?.table_head4[0].text : "Date"}
              </th>
            </tr>
            {slice ? PrismicData : NormalData}
          </table>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          Need to explore? Take this way to achieve
        </Modal.Header>
        <Modal.Body>
          <div className="rs-apply style1  pt-30 md-pt-20 pb-50 md-pb-80">
            <div className="container">
              <div className="contact-widget">
                <ApplyForm
                  submitBtnClass="btn-send"
                  btnText="Submit"
                  fieldRequired={
                    <input
                      className="from-control"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Experience (in Years)"
                      required
                    />
                  }
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Careers;
