import React from "react";
import Reveal from "./Reveal";
import { toolkit } from "../data";

const Toolkit = () => {
  return (
    <section className="section section--dark" id="toolkit">
      <div className="wrap">
        <div className="split-head">
          <div>
            <p className="eyebrow">Toolkit</p>
            <h2 className="title">The tools <em>I build with.</em></h2>
          </div>
          <Reveal as="p" className="split-head__note">
            A modern, reliable stack for building fast, maintainable products.
          </Reveal>
        </div>

        <div className="tools">
          {toolkit.map((g, i) => (
            <Reveal key={g.title} delay={i * 60} className="tools__group">
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
