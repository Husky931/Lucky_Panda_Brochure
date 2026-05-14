const slideHtml = `
  <!-- left: photo -->
  <div style="padding: 130px 60px 130px 130px; display:flex; align-items:center;">
    <div style="position: relative; width: 100%;">
      <div style="position:absolute; inset: -20px; background: var(--rose-tint); transform: rotate(-2deg);"></div>
      <div class="photo photo-frame" style="
        position: relative;
        width: 100%; aspect-ratio: 1/1;
        background-image: url('/used/slide_15/founders.png');
        background-position: center 25%;
      "></div>
    </div>
  </div>

  <!-- right: bio -->
  <div style="padding: 130px 130px 130px 80px; display:flex; flex-direction:column; justify-content:center;">
    <h2 class="serif-display" style="font-size: 44px; line-height:1.0; margin: 0 0 16px; color: var(--ink);">
      The Founders
    </h2>
    <h2 class="script-display" style="font-size: 88px; line-height:0.9; margin: -8px 0 28px; margin-top: 16px;">
      Why We Started
    </h2>

    <p class="body" style="margin: 0 0 20px; max-width: 580px; font-size: 22px; font-style: italic;">
      We came to Shanghai from different places, with different stories, and found ourselves drawn to the same thing: the energy of this city, and the way people here build, celebrate, and connect.
    </p>
    <p class="body" style="margin: 0 0 20px; max-width: 580px; font-size: 22px; font-style: italic;">
      With backgrounds across marketing, business, and brand experiences, we saw how much meaning a thoughtful gift could carry, especially when it feels personal rather than corporate.
    </p>
    <p class="body-tight" style="margin: 0 0 26px; max-width: 580px; font-size: 22px; font-style: italic;">
     After years of travel, tasting, sourcing, and collecting ideas from different cultures, Lucky Panda became our way of bringing those discoveries to Chinese companies through creative gifting that feels warm, polished, memorable, and, when needed, experimental and creatively bold.
    </p>

    <!-- signatures -->
    <div style="display:flex; gap: 70px; align-items:center; margin-top: 8px;">
      <div>
        <div style="font-family:'Dancing Script'; font-size: 60px; color: var(--magenta); line-height: 0.9;">Gregory</div>
        <div style="font-family:'Source Sans 3'; font-size: 14px; letter-spacing:0.3em; text-transform:uppercase; color: var(--ink-soft); margin-top: 4px;">Co-founder</div>
      </div>
      <div style="width: 1px; height: 70px; background: var(--hairline);"></div>
      <div>
        <div style="font-family:'Dancing Script'; font-size: 60px; color: var(--magenta); line-height: 0.9;">Sebastian</div>
        <div style="font-family:'Source Sans 3'; font-size: 14px; letter-spacing:0.3em; text-transform:uppercase; color: var(--ink-soft); margin-top: 4px;">Co-founder</div>
      </div>
    </div>
  </div>
`;

export default function Slide16Founders() {
  return (
    <section
      data-label="16 Founders"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
