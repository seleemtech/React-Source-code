import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
const ContactForm = (props: any) => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.764883328": "",
    "entry.1445011742": "",
    "entry.1934430461": "",
    "entry.1267950991": "",
    "entry.2141880935": "",
  });
  const form = useRef<any>();
 
  const sendEmail = (e:any) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
  
    emailjs.sendForm('service_f4x9uwg', 'template_6klm6mo', form.current, 'NQV60HXoGqVmWLKWZ')
      .then((result) => {
        setSubmit(true)
      }, (error) => {
          // show the user an error
      });
  };

  // const handleInputData = (input: any) => (e: any) => {
  //   const { value } = e.target;

  //   setFormData((prevState: any) => ({
  //     ...prevState,
  //     [input]: value,
  //   }));
  // };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   setSubmit(true);

  //   let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLScsngN-tSLvY71AplgG6irlTkorX3tsZyu4Vd46vYxBwrWVVw/formResponse?entry.764883328=${formData["entry.764883328"]}&entry.1445011742=${formData["entry.1445011742"]}&entry.1934430461=${formData["entry.1934430461"]}&entry.1267950991=${formData["entry.1267950991"]}&entry.2141880935=${formData["entry.2141880935"]}`;

  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //   });
  // };
  const { submitBtnClass, btnText } = props;

  return (
    <>
      {" "}
      {submit ? (
        <div className="afterForm" style={{fontSize:'17px',fontWeight:'500'}}>Thanks For Contacting Us, will get back to you soon</div>
      ) : (
        <form id="contact-form" ref={form } onSubmit={sendEmail}  target="_self">
          <div className="row">
            <div className="col-md-6 mb-30">
              <input
                className="from-control"
                type="text"
                id="name"
                name="userName"
                // name="entry.764883328"
                // onChange={handleInputData("entry.764883328")}
                placeholder="Name"
                required
              />
            </div>

            <div className="col-md-6 mb-30">
              <input
                className="from-control"
                type="text"
                id="email"
                name="email"
                // name="entry.1445011742"
                // onChange={handleInputData("entry.1445011742")}
                placeholder="E-Mail"
                required
              />
            </div>

            <div className="col-md-6 mb-30">
              <input
                className="from-control"
                type="text"
                id="phone"
                name="phone"
                // name="entry.1934430461"
                // onChange={handleInputData("entry.1934430461")}
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="col-md-6 mb-30">
              <input
                className="from-control"
                type="text"
                id="website"
                name="website"
                // name="entry.1267950991"
                // onChange={handleInputData("entry.1267950991")}
                placeholder="Company"
                required
              />
            </div>

            <div className="col-12 mb-30">
              <textarea
                className="from-control"
                id="message"
                name="message"
                // name="entry.2141880935"
                // onChange={handleInputData("entry.2141880935")}
                placeholder="Your message Here"
                required
              ></textarea>
            </div>
          </div>
          <div className="btn-part">
            <button
              className={
                submitBtnClass ? submitBtnClass : "readon learn-more submit"
              }
              type="submit"
            >
              {btnText ? btnText : "Submit Now"}
            </button>
          </div>
        </form>
      )}{" "}
    </>
  );
};

export default ContactForm;
