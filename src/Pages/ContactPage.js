import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/email.svg";
import location from "../img/location .svg";
import Title from "../Components/Tittle";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Title title={"Contact Info"} span={"Contact Info"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            title="My Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.6911851998025!2d10.766672951661723!3d59.92067237042088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e5ce0bf7f13%3A0xb3c6bc0d9082b269!2sTrondheimsveien%2027%2C%200560%20Oslo!5e0!3m2!1sno!2sno!4v1615379285703!5m2!1sno!2sno"
            width="600"
            height="450"
            style={{ border: 0 }}
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text1={"47601378"} title={"Phone"} />
          <ContactItem
            icon={email}
            text1={"trondee98@gmail.com"}
            text2={"trond-einar98@hotmail.no"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Vogst gate 43"}
            text2={"0474 Oslo"}
            title={"Location"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
