import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { process } from "../data";

// Steps light up one by one as the section scrolls through the viewport.
const Process = () => {
  const ref = useRef(null);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh * 0.85 - rect.top) / (rect.height + vh * 0.3);
      setLit(Math.max(0, Math.min(process.length, Math.ceil(progress * process.length))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="section section--rule" id="process">
      <div className="wrap">
        <div className="split-head">
          <div>
            <p className="eyebrow">How I work</p>
            <h2 className="title">From first call <em>to launch day.</em></h2>
          </div>
          <Reveal as="p" className="split-head__note">
            Every project follows the same five steps, so you always know what's happening
            next. Scroll and watch them light up.
          </Reveal>
        </div>
        <ol className="proc" ref={ref}>
          {process.map((s, i) => (
            <li key={s.title} className={i < lit ? "is-lit" : ""}>
              <span className="proc__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
