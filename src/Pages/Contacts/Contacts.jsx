import React from "react";
import { FaHouse } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contact-container">
      <div className="contact-location-container">
        <div className="contact-location-main-content">
          <h2>UCSBreakin</h2>
          <h3>
            <FaHouse /> Location:{" "}
          </h3>
          <p>Robertsons Gym 2320</p>
          <h3>
            <FaCalendarAlt /> Schedule:{" "}
          </h3>
          <p>TBA</p>
        </div>

        <div className="contact-location-map-section">
          <div className="google-map-frame">
            <iframe
              id="google-map-canvas"
              frameBorder="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=robertsons%20gym+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </div>
      </div>

      <div className="contact-booking-container">
        <h3>Book UCSBreakin</h3>
        <h2>"Make it unforgettable !"</h2>
        <p>
          Leave a lasting impression on any audience with UCSBreakin. We have
          worked on many different productions. From creating a unique concept
          from scratch to choreographing parts of a larger production. We are
          able to work fast with our already existing vocabulary and routines.
          Get in touch with us, and we'll make sure to find a performance
          fitting for your event.
        </p>
      </div>
    </div>
  );
};

export default Contacts;
