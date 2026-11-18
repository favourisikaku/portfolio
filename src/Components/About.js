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
  { label: "Workflow", lines: ["Git, GitHub, Vercel, Netlify"] },
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
          <Heading className="title">Hi, I'm <em>Favour.</em></Heading>
          <Reveal as="p" className="about__lead">
            I'm a frontend developer, and I've spent the last four years building
            responsive web apps with React, Next.js, JavaScript and TypeScript.
          </Reveal>
          <Reveal as="p" className="about__p" delay={80}>
            Most of my work is the part of a product people actually touch: <b>reusable UI
            components</b>, forms, dashboards, and the screens that pull data from REST APIs.
            I pay close attention to <b>how it feels to use and how fast it loads.</b>
          </Reveal>
          <Reveal as="p" className="about__p" delay={140}>
            I work well alongside backend developers and designers. Hand me a Figma file or a
            list of requirements and I'll turn it into <b>clean code you can keep building
            on,</b> that works on any screen and with a keyboard too.
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
