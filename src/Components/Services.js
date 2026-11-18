import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { services } from "../data";

const numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
  "Nine", "Ten", "Eleven", "Twelve"];

const Services = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section--dark" id="services">
      <div className="wrap">
        <div className="split-head">
          <div>
            <p className="eyebrow">Scope of work</p>
            <h2 className="title">What I bring <em>to your team.</em></h2>
          </div>
          <Reveal as="p" className="split-head__note">
            {numberWords[services.length] || services.length} disciplines, from the first
            requirement to launch. Open one to see what it covers.
          </Reveal>
        </div>

        <div className="acc">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <div key={s.title} className={`acc__item ${isOpen ? "is-open" : ""}`}>
                <button
                  className="acc__head"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`acc-${i}`}
                  id={`acc-h-${i}`}
                >
                  <span className="acc__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="acc__name">{s.title}</span>
                  <span className="acc__count">{s.items.length} areas</span>
                  <span className="acc__plus" aria-hidden="true">+</span>
                </button>
                <div className="acc__body" id={`acc-${i}`} role="region" aria-labelledby={`acc-h-${i}`}>
                  <div>
                    {s.text && <p className="acc__text">{s.text}</p>}
                    <ul className="acc__items">
                      {s.items.map((it, k) => (
                        <li key={it} style={{ "--k": k }}>{it}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal className="ask">
          <span>Don't see what you need? Describe the problem instead.</span>
          <Link to="/contact" className="btn btn--gold">Tell me about it →</Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
