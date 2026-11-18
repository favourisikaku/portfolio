import React from "react";
import { profile } from "../data";
import { toTop } from "./Nav";

const Footer = () => (
  <footer className="footer">
    <p className="giant" aria-label={profile.name}>
      <span aria-hidden="true">
        {profile.name.split("").map((ch, i) =>
          ch === " " ? <span key={i} className="giant__sp"> </span> : <span key={i} className="giant__l" style={{ "--n": i }}>{ch}</span>
        )}
      </span>
    </p>
    <div className="wrap footer__row">
      <span>© {new Date().getFullYear()} {profile.name} · {profile.role}</span>
      <span>Nigeria · Working remotely worldwide</span>
      <button type="button" onClick={toTop}>Back to top ↑</button>
    </div>
  </footer>
);

export default Footer;
