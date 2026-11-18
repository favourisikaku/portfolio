import React from "react";
import { Link } from "react-router-dom";

// Opening block of the /services page.
const ServicesIntro = () => (
  <section className="section section--page page-intro">
    <div className="wrap">
      <p className="eyebrow">Services</p>
      <h1 className="contact__title page-intro__title">
        Frontend work, from the first sketch to <em>going live.</em>
      </h1>
      <p className="contact__sub">
        New builds, new features, redesigns and speed fixes. Everything I do is listed below,
        grouped so it's easy to scan.
      </p>
      <div className="hero__cta">
        <Link to="/contact" className="btn btn--gold">Start a project →</Link>
        <Link to="/work" className="btn btn--outline">See the work</Link>
      </div>
    </div>
  </section>
);

export default ServicesIntro;
