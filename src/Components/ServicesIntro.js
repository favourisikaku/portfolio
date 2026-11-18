import React from "react";
import { Link } from "react-router-dom";

// Opening block of the /services page.
const ServicesIntro = () => (
  <section className="section section--page page-intro">
    <div className="wrap">
      <p className="eyebrow">Services</p>
      <h1 className="contact__title page-intro__title">
        Frontend engineering, from the first requirement to <em>launch.</em>
      </h1>
      <p className="contact__sub">
        New products, features, upgrades and performance work for brands, startups and
        teams. Open any area below to see what it covers.
      </p>
      <div className="hero__cta">
        <Link to="/contact" className="btn btn--gold">Start a project →</Link>
        <Link to="/work" className="btn btn--outline">See the work</Link>
      </div>
    </div>
  </section>
);

export default ServicesIntro;
