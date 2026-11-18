import React from "react";

// A simple laptop frame. Pass `items` (array of {media, video, title}) and `active` to crossfade
// between several screens, or a single item to show one.
const Laptop = ({ items, active = 0, badge }) => (
  <div className="laptop">
    <div className="laptop__screen">
      {items.map((p, i) =>
        p.video ? (
          <video
            key={p.title}
            src={p.media}
            muted
            loop
            autoPlay
            playsInline
            className={i === active ? "is-active" : ""}
          />
        ) : (
          <img
            key={p.title}
            src={p.media}
            alt={i === active ? `${p.title} screenshot` : ""}
            loading={i === 0 ? "eager" : "lazy"}
            className={i === active ? "is-active" : ""}
          />
        )
      )}
      {badge && <span className="live-badge"><i /> {badge}</span>}
    </div>
    <div className="laptop__base" />
  </div>
);

export default Laptop;
