import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data";

// Each link is its own page; the home page shows all of them as sections.
const links = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const [first, ...rest] = profile.name.split(" ");

export const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const isCurrent = (to) => (to === pathname ? "page" : undefined);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <button
        type="button"
        className={`to-top ${progress > 0.08 ? "is-on" : ""}`}
        onClick={toTop}
        aria-label="Back to top"
      >
        ↑
      </button>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <header className="nav">
        <div className="wrap nav__inner">
          <Link to="/" className="nav__brand" onClick={close} aria-label={`${profile.name}, home`}>
            <span className="nav__mono">
              {profile.monogram}
              {/* The orbit spins forever, carrying the star around the ring */}
              <span className="nav__orbit" aria-hidden="true"><b>✦</b></span>
            </span>
            {/* On hover the name slides up and the role slides in */}
            <span className="nav__id">
              <span className="nav__name">
                {first} <span>{rest.join(" ")}</span>
              </span>
              <span className="nav__role" aria-hidden="true">{profile.role}</span>
            </span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.to} to={l.to} aria-current={isCurrent(l.to)}>
                {l.label}
              </Link>
            ))}
            {profile.resume ? (
              <a href={profile.resume} className="nav__cta" download>Résumé ↓</a>
            ) : (
              <Link to="/contact" className="nav__cta">Hire me →</Link>
            )}
          </nav>

          <button
            className="nav__menu"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu"
          >
            {open ? "Close ✕" : "Menu"}
          </button>
        </div>
      </header>

      <div id="menu" className={`menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="wrap menu__inner">
          <ol className="menu__list">
            {links.map((l, i) => (
              <li key={l.to} style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}>
                <Link to={l.to} onClick={close} tabIndex={open ? 0 : -1} aria-current={isCurrent(l.to)}>
                  <span className="menu__num">0{i + 1}</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ol>
          <div className="menu__foot">
            <a href={`mailto:${profile.email}`} tabIndex={open ? 0 : -1}>{profile.email}</a>
            <div>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
