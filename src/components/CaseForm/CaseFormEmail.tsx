import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const CaseFormEmail = (props:any) => {
    const { fileUrl } = props;
    const [submit, setSubmit] = useState(false);
    const form = useRef<any>();
 
    const sendEmail = (e:any) => {
      e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
      emailjs.sendForm('service_f4x9uwg', 'template_6klm6mo', form.current, 'NQV60HXoGqVmWLKWZ')
        .then((result) => {
          setSubmit(true);
          window.location.href = `${fileUrl}`;
        }, (error) => {
            // show the user an error
        });
    };
    return ( <>{submit ? (
        <div className="afterForm">Thanks for dowload</div>
      ) : (
        <form id="contact-form" ref={form } onSubmit={sendEmail}  target="_self">
          <div className="row">
            <div className="col-md-6 mb-30">
              <input
                className="from-control"
                type="text"
                id="name"
                name="userName"
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
                placeholder="Company"
                required
              />
            </div>
            <div className="col-md-12 mb-30">
              <textarea
                className="from-control"
                id="message"
                name="message"
                placeholder="Your message Here"
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
      )}</> );
}
 
export default CaseFormEmail;