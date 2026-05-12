export default function Slide03WhatWeBelieve() {
  return (
    <section
      data-label="03 What We Believe"
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
            fontSize: "78px",
            lineHeight: 1.12,
            letterSpacing: 0,
          }}
        >
          What if a small gift could recharge the whole team?
        </h2>

        <p
          style={{
            margin: "48px auto 0",
            maxWidth: "920px",
            color: "var(--ink-soft)",
            fontFamily: "'Source Sans 3', serif",
            fontSize: "36px",
            fontWeight: 400,
            lineHeight: 1.42,
            letterSpacing: 0,
          }}
        >
          Your team had a great month, and you want to surprise them with
          something unique. Or maybe there is one final push ahead, and they
          need a small spark. A personalised gift can leave a positive mark:
          a little recharge, a desk-side treat, and something to chat about
          during lunch.
        </p>

        <p
          style={{
            margin: "130px auto 0",
            maxWidth: "820px",
            color: "var(--magenta)",
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          So we turned that moment into a series: one country, one story, one
          shared pause at a time.
        </p>
      </div>
    </section>
  );
}
