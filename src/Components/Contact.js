import React, { useState } from "react";
import { profile } from "../data";

const MAX = 2000;

const modes = {
  project: {
    tab: "I have a project",
    title: <>Tell me what you want <em>built.</em></>,
    sub: "Share the idea, the site that needs a refresh, or the feature you're stuck on. I'll reply with questions and a clear first step.",
    placeholder: "Tell me about the project, the problem, and where you want to get to.",
  },
  hiring: {
    tab: "I'm hiring",
    title: <>Let's talk about <em>the role.</em></>,
    sub: "Looking for a frontend developer for your team? Send the role details and I'll get back to you within 24 hours.",
    placeholder: "Tell me about the role, the team and the stack.",
  },
};

const Contact = ({ asPage = false }) => {
  const Heading = asPage ? "h1" : "h2";
  const [mode, setMode] = useState("project");
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);
  const m = modes[mode];

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value.slice(0, MAX) });

  // No backend needed: opens the visitor's email app with everything pre-filled.
  const submit = (e) => {
    e.preventDefault();
    const subject = form.subject || (mode === "hiring" ? "Job opportunity" : "New project enquiry");
    const body = `${form.message}\n\n— ${form.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className={`section section--rule contact ${asPage ? "section--page" : ""}`} id="contact">
      <div className="wrap">
        <p className="eyebrow">Contact</p>
        <div className="tabs" role="tablist">
          {Object.entries(modes).map(([key, v]) => (
            <button
              key={key}
              role="tab"
              aria-selected={mode === key}
              className={mode === key ? "is-on" : ""}
              onClick={() => setMode(key)}
            >
              {v.tab}
            </button>
          ))}
        </div>
        <Heading className="contact__title">{m.title}</Heading>
        <p className="contact__sub">{m.sub}</p>

        <form className="cform" onSubmit={submit}>
          <label className="cform__row">
            <span>Your email</span>
            <input name="email" type="email" value={form.email} onChange={update} required placeholder="you@company.com" autoComplete="email" />
          </label>
          <label className="cform__row">
            <span>Subject</span>
            <input name="subject" value={form.subject} onChange={update} maxLength={120} placeholder="What is this about?" />
          </label>
          <label className="cform__row">
            <span>Message</span>
            <textarea name="message" rows="6" value={form.message} onChange={update} required placeholder={m.placeholder} />
            <em className="cform__count">{form.message.length} / {MAX}</em>
          </label>
          <button type="submit" className="btn btn--gold">Send message <span>→</span></button>
        </form>

        <div className="routes">
          <button type="button" onClick={copy}>{copied ? "Copied ✓" : "Copy email"}</button>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          {profile.resume && <a href={profile.resume} download>Résumé (PDF)</a>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
