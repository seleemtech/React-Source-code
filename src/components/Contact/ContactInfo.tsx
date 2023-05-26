import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactInfo = (props:any) => {
    const { boxClass, iconClass, title, address, phone, email,phoneStyle } = props;
 
    return ( <React.Fragment>

        <div className={`address-box ${boxClass}`}>
            <div className="address-icon">
                <i className={iconClass}></i>
            </div>
            <div className="address-text">
                <span className="label">{title }</span>
                {address ? <div className="address" style={{minHeight:"142px"}}>{address}</div> : ''}
                {phone ? <a className="phone" href={`tel:${phone}`} >{phone}</a> : ''}
                {email ? <a className="email" href={`mailto:${email}`}>{email}</a> : ''}
            </div>
        </div>
    </React.Fragment > );
}
 
export default ContactInfo;