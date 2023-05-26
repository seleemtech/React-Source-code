
import { useEffect, useState } from "react";


const ApplyForm = (props: any) => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.177995139": "",
    "entry.1339429589": "",
    "entry.1376241147": "",
    "entry.2063253212": "",
    "entry.1491423521": "",
    "entry.490312836": "",
    "entry.509401282": "",
    "entry.1145786136": "",
  });

  const handleInputData = (input: any) => (e: any) => {
    const { value } = e.target;
  

    setFormData((prevState: any) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSei3pM8GXzNxxXRWSrh9JeEE045yItJNnYhMVFer25mnVDh7A/formResponse?entry.177995139=${formData["entry.177995139"]}&entry.1339429589=${formData["entry.1339429589"]}&entry.1376241147=${formData["entry.1376241147"]}&entry.2063253212=${formData["entry.2063253212"]}&entry.1491423521=${formData["entry.1491423521"]}&entry.490312836=${formData["entry.490312836"]}&entry.509401282=${formData["entry.509401282"]}&entry.1145786136=${formData["entry.1145786136"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  };

  return (
    <>
      {submit ? (
        <div className="afterForm">Thanks, will get back to you soon</div>
      ) : (
        <form id="contact-form" onSubmit={handleSubmit} target="_self">
          <div className="row">
            <div className="col-md-6 mb-30">
              <input
                className="from-control"
                type="text"
                id="name"
                name="entry.177995139"
                onChange={handleInputData("entry.177995139")}
                placeholder="Name"
                required
              />
            </div>

            <div className="col-md-6 mb-30">
              <input
                className="from-control"
                type="text"
                id="email"
                name="entry.1339429589"
                onChange={handleInputData("entry.1339429589")}
                placeholder="E-Mail"
                required
              />
            </div>

            <div className="col-md-12 mb-30">
              <input
                className="from-control"
                type="text"
                id="phone"
                name="entry.1376241147"
                onChange={handleInputData("entry.1376241147")}
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="col-md-6 mb-30">
              <select
                name="entry.2063253212"
                onChange={handleInputData("entry.2063253212")}
                className="from-control"
              >
                <option value="" disabled selected>
                  Years
                </option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="col-md-6 mb-30">
              <select
                name="entry.1491423521"
                onChange={handleInputData("entry.1491423521")}
                className="from-control"
              >
                <option value="" disabled selected>
                  Months
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="col-md-6 mb-30">
              <input
                className="from-control"
                type="file"
                id="file"
                name="entry.490312836"
                onChange={handleInputData("entry.490312836")}
                required
              />
            </div>
            <div className="col-md-6 mb-30">
              <input
                className="from-control"
                type="text"
                id="liferay"
                name="entry.509401282"
                onChange={handleInputData("entry.509401282")}
                placeholder="Position"
                required
              />
            </div>
            <div className="col-md-12 mb-30">
              <select
                name="entry.1145786136"
                onChange={handleInputData("entry.1145786136")}
                className="from-control"
              >
                <option value="" disabled selected>
                  How did you find us?
                </option>
                <option value="1">Search Engine</option>
                <option value="2">Newspaper Ads</option>
                <option value="3">Online Ads/ Job Sites</option>
                <option value="4">Institutions / Colleges</option>
                <option value="5">References</option>
                <option value="6">Others</option>
              </select>
            </div>
          </div>
          <div className="btn-part">
            <button className="btn-send" type="submit">
              Send Mail
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ApplyForm;
