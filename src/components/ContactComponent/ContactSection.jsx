import React from "react";
import "./ContactSection.css";
import contactData from "./ContactData.js";
import { Form, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  return (
    <div className="contactsection">
      <h3 className="contactsection-head">Contact Us</h3>
      <h1>Have a Project?</h1>
      <p className="contactsection-para">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>

      <div className="contact-hero">
        <div className="left">
          <Form>
            <div className="form-input-flex">
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  required
                  className="fields"
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  className="fields"
                  required
                />
              </Form.Group>
            </div>

            <Form.Group controlId="formSubject">
              <Form.Control
                type="text"
                placeholder="Subject"
                className="fields"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Message"
                required
                className="form-message"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="contact-from-button"
            >
              Send Message
            </Button>
          </Form>
        </div>

        <div className="right">
          {contactData.map((item, index) => (
            <div key={index} className="right-details">
             {item.title === "Address:" && <FontAwesomeIcon icon={faMapMarkerAlt} className="right-details-icnos"/>}
             {item.title === "Phone:" && <FontAwesomeIcon icon={faPhoneAlt}
             className="right-details-icnos"
              />}
             {item.title === "Email:" && <FontAwesomeIcon icon={faEnvelope} 
             className="right-details-icnos"
             />}
             {item.title === "Website:" && <FontAwesomeIcon icon={faGlobe} 
             className="right-details-icnos"
             />}
             <div>
             <h3 >{item.title}</h3>
              <p>{item.detail}</p>
             </div>
              
            </div>
          ))}
        </div>

      </div>

      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=islamabad&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://sprunkin.com/">Sprunki Phases</a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
