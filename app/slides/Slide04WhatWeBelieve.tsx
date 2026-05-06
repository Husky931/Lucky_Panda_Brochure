export default function Slide04WhatWeBelieve() {
  return (
    <section
      data-label="04 What We Believe"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        display: "grid",
        placeItems: "center",
        padding: "120px 180px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          textAlign: "center",
          transform: "translateY(-10px)",
        }}
      >
        <h2
          className="serif-italic"
          style={{
            margin: "0",
            color: "var(--ink)",
            fontSize: "96px",
            lineHeight: 1.16,
            letterSpacing: 0,
          }}
        >
          What if a gift could take your team somewhere?
        </h2>

        {/* <p
          style={{
            margin: "42px 0 0",
            color: "var(--ink-soft)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "28px",
            fontWeight: 300,
            lineHeight: 1.45,
            letterSpacing: "0.02em",
          }}
        >
          We believe every gift should tell a story
        </p> */}
      </div>
    </section>
  );
}
