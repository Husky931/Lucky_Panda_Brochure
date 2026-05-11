const slideHtml = `
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items:end;">
    <div>
      <div class="eyebrow" style="margin-bottom: 24px;">Beyond the collection</div>
      <h2 class="serif-display" style="font-size: 96px; line-height: 1.0; margin: 0; color: var(--ink);">
        Bespoke
      </h2>
      <h2 class="script-display" style="font-size: 180px; line-height: 0.9; margin: -10px 0 0;">
        gifting.
      </h2>
    </div>
    <p class="body-lg" style="max-width: 580px; margin: 0 0 14px;">
      Beyond our country collection, we design custom gifting projects with the
      same storytelling approach — we start with <em>who the recipient is</em>,
      not what's in the box.
    </p>
  </div>

  <!-- 3 use cases -->
  <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 36px;">
    <div class="frame" style="padding: 60px 44px; display:flex; flex-direction:column; gap: 22px; min-height: 360px;">
      <div style="font-family:'Playfair Display'; font-style:italic; font-size: 26px; color: var(--magenta);">— New hires</div>
      <h3 class="serif-display" style="font-size: 38px; line-height: 1.05; margin: 0; color: var(--ink);">Welcome kits worth opening twice.</h3>
      <p class="body-tight" style="margin: 0;">A first-day box that tells your company's story before the onboarding deck does.</p>
    </div>

    <div class="frame" style="padding: 60px 44px; display:flex; flex-direction:column; gap: 22px; min-height: 360px;">
      <div style="font-family:'Playfair Display'; font-style:italic; font-size: 26px; color: var(--magenta);">— Clients</div>
      <h3 class="serif-display" style="font-size: 38px; line-height: 1.05; margin: 0; color: var(--ink);">Thank-yous they actually keep.</h3>
      <p class="body-tight" style="margin: 0;">For closed deals, anniversaries, and the quiet "thank you for trusting us" moments.</p>
    </div>

    <div class="frame" style="padding: 60px 44px; display:flex; flex-direction:column; gap: 22px; min-height: 360px;">
      <div style="font-family:'Playfair Display'; font-style:italic; font-size: 26px; color: var(--magenta);">— Teams</div>
      <h3 class="serif-display" style="font-size: 38px; line-height: 1.05; margin: 0; color: var(--ink);">Annual appreciation, done well.</h3>
      <p class="body-tight" style="margin: 0;">CNY, year-end, milestone moments — sent across cities, addressed by name.</p>
    </div>
  </div>
`;

export default function Slide17Bespoke() {
  return (
    <section
      data-label="17 Bespoke"
      className="paper-grain"
      style={{
        background: "linear-gradient(180deg, var(--rose-tint) 0%, var(--cream) 100%)",
        padding: "130px 160px",
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gap: "70px",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
