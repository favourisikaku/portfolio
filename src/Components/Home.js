import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Laptop from "./Laptop";
import { profile, heroMeta, projects, ticker, tickerSmall, process } from "../data";

const STEP_MS = 900;

const useCycle = (length, ms) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % length), ms);
    return () => clearInterval(id);
  }, [length, ms]);
  return i;
};

const Home = () => {
  const [project, setProject] = useState(0);
  const [step, setStep] = useState(0);
  const role = useCycle(profile.roles.length, 2600);
  const meta = useCycle(heroMeta.length, 3200);

  // Walk through the process steps; after the last one, show the next project.
  useEffect(() => {
    const id = setInterval(() => {
      setStep((s) => {
        if (s + 1 >= process.length) {
          setProject((p) => (p + 1) % projects.length);
          return 0;
        }
        return s + 1;
      });
    }, STEP_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="pulse" aria-hidden="true" />
            <span>{profile.role}</span>
            <i aria-hidden="true">/</i>
            <span className="roll">
              {profile.roles.map((r, i) => (
                <span key={r} className={i === role ? "is-on" : ""}>{r}</span>
              ))}
            </span>
          </p>
          <h1 className="hero__title">
            <span className="line"><span style={{ "--d": "0.1s" }}>Premium websites</span></span>
            <span className="line"><span style={{ "--d": "0.25s" }}>built to work</span></span>
            <span className="line"><span style={{ "--d": "0.4s" }}><em>flawlessly.</em></span></span>
          </h1>
          <p className="hero__intro">
            I help brands, startups and businesses launch fast, responsive websites and web
            apps — turning ideas and designs into products people enjoy using.
          </p>
          <div className="hero__cta">
            <Link to="/contact" className="btn btn--gold">Start a project →</Link>
            <Link to="/work" className="btn btn--outline">See the work</Link>
          </div>
          <div className="hero__rotator">
            {heroMeta.map((m, i) => (
              <span key={m.label} className={i === meta ? "is-on" : ""}>
                <b>{m.label}</b> — {m.value}
              </span>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <Laptop items={projects} active={project} badge="Live" />
          <ol className="hero__steps">
            {process.map((s, i) => (
              <li key={s.title} className={i <= step ? "is-on" : ""}>{s.title}</li>
            ))}
          </ol>
          <p className="hero__now">
            Now showing · <strong>{projects[project].title}</strong>
          </p>
        </div>
      </div>

      <div className="bands" aria-hidden="true">
        <div className="band band--big">
          <div className="band__track">
            {[...ticker, ...ticker, ...ticker].map((t, i) => (
              <span key={i}>{t}<b>✦</b></span>
            ))}
          </div>
        </div>
        <div className="band band--small">
          <div className="band__track band__track--reverse">
            {[...tickerSmall, ...tickerSmall].map((t, i) => (
              <span key={i}>{t}<b>•</b></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
