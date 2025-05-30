import React from "react";
import { Fade } from "react-awesome-reveal";
const Contact = () => {
  return (
    <div className="contact-container" id="Contact">
      <div className="contact-header container">
        <div className="text-center">
          <Fade triggerOnce direction="down">
            <h1>
              Contact <span>Me</span>
            </h1>
          </Fade>
        </div>
        <div className="contact-details">
          <div>
            <Fade triggerOnce direction="down">
              <h2>Get in touch</h2>
              <p>
                If you are interested in contacting me, please do not hesitate
                to write me an email let's talk, i will try to respond as soon
                as possible
              </p>
            </Fade>
          </div>
          <div>
            <Fade triggerOnce direction="down">
              <ul className="icons">
                <div className="d-flex">
                  <i class="fa-solid fa-envelope"></i>
                  <a href="mailto:Isikakufavour@yahoo.com">
                    <li>Isikakufavour@yahoo.com</li>
                  </a>
                </div>
                <div className="icon-2">
                  <a href="https://github.com/favourisikaku" className="d-flex">
                    <i class="fa-brands fa-github"></i>
                    <li>https://github.com/favourisikaku</li>
                  </a>
                </div>
                <div className="d-flex icon-3">
                  <i class="fa-solid fa-phone"></i>
                  <a href="tel:+2348140892026">
                    <li>+234 814 089 2026</li>
                  </a>
                </div>
                <div className="icon-4">
                  <a
                    href="https://linkedin.com/in/favourisikaku"
                    className="d-flex"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                    <li>https://linkedin.com/in/favourisikaku</li>
                  </a>
                </div>
              </ul>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
