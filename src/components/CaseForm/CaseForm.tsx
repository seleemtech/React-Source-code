import FileSaver from "file-saver";
import { useEffect, useState } from "react";

const CaseForm = (props: any) => {
  const { fileUrl } = props;
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.1635827906": "",
    "entry.174943319": "",
    "entry.898856883": "",
    "entry.2135201168": "",
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
    
    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSfqHNEB2FsspzavzXwfOo9uWRSpBHGk3ZQvpFbhnxUrmgReEg/formResponse?entry.1635827906=${formData["entry.1635827906"]}&entry.174943319=${formData["entry.174943319"]}&entry.898856883=${formData["entry.898856883"]}&entry.2135201168=${formData["entry.2135201168"]}`;
    
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      
    });

    if(res){
      window.location.href = `${fileUrl}`;
    }
  };

  return (
    <>
      {submit ? (
        <div className="afterForm">Thanks for dowload</div>
      ) : (
        <form id="contact-form" onSubmit={handleSubmit} target="_self">
          <div className="row">
            <div className="col-md-6 mb-30">
              <input
                className="from-control"
                type="text"
                id="name"
                name="entry.1635827906"
                onChange={handleInputData("entry.1635827906")}
                placeholder="Name"
                required
              />
            </div>

            <div className="col-md-6 mb-30">
              <input
                className="from-control"
                type="text"
                id="email"
                name="entry.898856883"
                onChange={handleInputData("entry.898856883")}
                placeholder="E-Mail"
                required
              />
            </div>

            <div className="col-md-6 mb-30">
              <input
                className="from-control"
                type="text"
                id="phone"
                name="entry.2135201168"
                onChange={handleInputData("entry.2135201168")}
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="col-md-6 mb-30">
              <input
                className="from-control"
                type="text"
                id="website"
                name="entry.174943319"
                onChange={handleInputData("entry.174943319")}
                placeholder="Company"
                required
              />
            </div>
          </div>
          <div className="btn-part">
            <button className="btn-send" type="submit">
              download
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default CaseForm;
