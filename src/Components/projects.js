import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Laptop from "./Laptop";
import Reveal from "./Reveal";
import { projects } from "../data";

const tones = ["gold", "ink", "sand", "smoke", "stone"];

const StackIcon = () => (
  <svg
    viewBox="0 0 20 20"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <rect x="2.5" y="3" width="15" height="5" rx="1" />
    <rect x="4.5" y="10" width="11" height="3.5" rx="1" />
    <rect x="6.5" y="15.5" width="7" height="2" rx="1" />
  </svg>
);

const GridIcon = () => (
  <svg
    viewBox="0 0 20 20"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="11" y="3" width="6" height="6" rx="1" />
    <rect x="3" y="11" width="6" height="6" rx="1" />
    <rect x="11" y="11" width="6" height="6" rx="1" />
  </svg>
);

const roleOf = (p) => p.role || "Personal build · Frontend";
const num = (i) => String(i + 1).padStart(2, "0");

// On the home page this is a section; with `asPage` it is the whole /work page.
const Projects = ({ asPage = false }) => {
  // Opens in grid view when the URL has ?view=grid
  const [view, setView] = useState(() =>
    new URLSearchParams(window.location.search).get("view") === "grid"
      ? "grid"
      : "stacked",
  );
  const Heading = asPage ? "h1" : "h2";
  const cursorRef = useRef(null);

  // Moves the badge directly (no re-render) so it tracks the mouse smoothly.
  const moveCursor = (e) => {
    const el = cursorRef.current;
    if (el) el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  };
  const cursorHandlers = {
    onMouseEnter: (e) => {
      moveCursor(e);
      cursorRef.current?.classList.add("is-on");
    },
    onMouseMove: moveCursor,
    onMouseLeave: () => cursorRef.current?.classList.remove("is-on"),
  };

  return (
    <section
      className={`section section--paper ${asPage ? "section--page" : ""}`}
      id="work"
    >
      <div className="wrap">
        <div className="work__head">
          <div>
            <p className="eyebrow">Selected work</p>
            <Heading className="title title--xl">
              Projects I've <mark>designed,</mark> <mark>built</mark> and{" "}
              <mark>launched</mark> on the web.
            </Heading>
          </div>
          <div className="counter" aria-hidden="true">
            <b>{projects.length}+</b>
            <span>Builds</span>
          </div>
        </div>

        <div className="view">
          <span className="view__label">View</span>
          <div
            className={`view__switch is-${view}`}
            role="radiogroup"
            aria-label="Choose layout"
          >
            <i className="view__thumb" aria-hidden="true" />
            <button
              role="radio"
              aria-checked={view === "stacked"}
              onClick={() => setView("stacked")}
            >
              <StackIcon /> Stacked
            </button>
            <button
              role="radio"
              aria-checked={view === "grid"}
              onClick={() => setView("grid")}
            >
              <GridIcon /> Grid
            </button>
          </div>
        </div>

        {view === "stacked" ? (
          <div className="folders">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={`folder folder--${tones[i % tones.length]}`}
                style={{ "--i": i, zIndex: i + 1 }}
              >
                <span className="folder__tab">Project {num(i)}</span>
                <div className="folder__body">
                  <div className="folder__text">
                    <div>
                      <p className="folder__cat">
                        <i /> {p.category}
                      </p>
                      <h3>{p.title}</h3>
                      <p className="folder__desc">{p.description}</p>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="folder__link"
                      >
                        View project ↗
                      </a>
                    </div>
                    <ul className="folder__stack">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                      <li className="folder__role">{roleOf(p)}</li>
                    </ul>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="folder__media"
                    tabIndex={-1}
                    {...cursorHandlers}
                  >
                    <Laptop items={[p]} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="cards">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card"
                  {...cursorHandlers}
                >
                  <div className="card__img">
                    <Laptop items={[p]} />
                  </div>
                  <div className="card__text">
                    <p className="card__n">
                      {num(i)} · {p.category}
                    </p>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <span className="card__role">{roleOf(p)}</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}

        {/* Round "View ↗" badge that follows the mouse over projects */}
        <div ref={cursorRef} className="view-cursor" aria-hidden="true">
          View ↗
        </div>

        {/* <div className="work__more">
          <span><b>Archive</b> · More experiments and earlier builds live on my GitHub</span>
          <a href={profile.github} target="_blank" rel="noreferrer">All archive →</a>
        </div> */}
        {!asPage && (
          <div className="work__more work__more--plain">
            <span>
              Every project has its own live link. Browse them all on one page.
            </span>
            <Link to="/work">See the work page →</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
