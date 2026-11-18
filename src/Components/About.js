import React from "react";
import photo from "../profile2.jpeg";
import Reveal from "./Reveal";
import { profile } from "../data";

// Add your work history / education here when ready, e.g.
// { label: "Before", lines: ["Frontend Developer — Company · 2025"] }
const timeline = [
  { label: "Now", lines: ["Open to freelance, contract and full-time frontend roles"] },
  { label: "Experience", lines: ["4+ years building responsive web applications"] },
  { label: "Stack", lines: ["React.js, Next.js, TypeScript, JavaScript, Tailwind CSS"] },
  { label: "Ships with", lines: ["Git, GitHub, Vercel, Netlify"] },
];

const About = ({ asPage = false }) => {
  const Heading = asPage ? "h1" : "h2";
  return (
    <section className={`section section--paper ${asPage ? "section--page" : ""}`} id="about">
      <div className="wrap about">
        <Reveal className="about__photo">
          <img src={photo} alt={`Portrait of ${profile.name} in warm monochrome`} />
        </Reveal>

        <div className="about__text">
          <p className="eyebrow">About</p>
          <Heading className="title">A developer who sweats <em>the details.</em></Heading>
          <Reveal as="p" className="about__lead">
            Frontend developer with 4+ years of experience building responsive web
            applications with React, Next.js, JavaScript and TypeScript.
          </Reveal>
          <Reveal as="p" className="about__p" delay={80}>
            I build <b>reusable UI components</b>, integrate REST APIs, manage application
            state, and create the forms and dashboards products depend on, always with an eye
            on <b>usability and performance.</b>
          </Reveal>
          <Reveal as="p" className="about__p" delay={140}>
            I work closely with backend developers and turn product requirements and designs
            into <b>maintainable interfaces.</b> I care about clean code and delivering
            accessible, mobile-friendly web experiences.
          </Reveal>
          <Reveal as="p" className="about__loc" delay={180}>
            Based in Nigeria · Working with clients remotely
          </Reveal>
          <Reveal className="about__grid" delay={220}>
            {timeline.map((t) => (
              <React.Fragment key={t.label}>
                <b>{t.label}</b>
                <span>{t.lines.map((l, i) => <React.Fragment key={l}>{i > 0 && <br />}{l}</React.Fragment>)}</span>
              </React.Fragment>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
