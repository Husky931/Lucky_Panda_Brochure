const slideHtml = `
  <!-- left photo full-bleed -->
  <div class="photo" style="
    background-image: url('/used/slide_14/box-open-vertical-french.png');
    background-size: cover;
    background-position: center;
  "></div>

  <!-- right: series closing note / next destinations -->
  <div class="paper-grain" style="
    padding: 92px 104px 86px;
    display:grid;
    grid-template-rows: 0.92fr 1.08fr;
    background: var(--rose-tint);
  ">
    <div style="
      display:flex;
      flex-direction:column;
      justify-content:center;
      padding-bottom:22px;
    ">
      <div class="eyebrow" style="margin-bottom: 24px;">Station One</div>

      <div style="font-family:'Dancing Script'; font-size: 52px; color: var(--magenta); line-height: 1.04; margin-bottom: 20px;">
        "Explore France<br/>with your tastebuds &mdash;<br/>and the world too."
      </div>



    </div>

    <div style="
      padding-top:28px;
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
    ">
      <h3 class="serif-display" style="font-size: 34px; line-height:1.06; margin: 0 0 16px; color: var(--ink);">
        Inside the French edition
      </h3>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 6px 18px; margin-bottom: 22px;">
        <div style="border-top: 1px solid var(--hairline); padding-top: 8px;">
          <h4 class="serif-display" style="font-size: 19px; line-height:1.1; margin:0 0 2px; color:var(--ink);">Le Chocolat des Fran&ccedil;ais</h4>
          <p style="font-family:'Source Sans 3'; font-size:13px; line-height:1.3; margin:0; color:var(--ink-soft);">Illustrated chocolate bars with caramel, hazelnut, and a bright Parisian wink.</p>
        </div>
        <div style="border-top: 1px solid var(--hairline); padding-top: 8px;">
          <h4 class="serif-display" style="font-size: 19px; line-height:1.1; margin:0 0 2px; color:var(--ink);">Truffettes de France</h4>
          <p style="font-family:'Source Sans 3'; font-size:13px; line-height:1.3; margin:0; color:var(--ink-soft);">Hazelnut cocoa truffles, rich, soft, and easy to share at the desk.</p>
        </div>
        <div style="border-top: 1px solid var(--hairline); padding-top: 8px;">
          <h4 class="serif-display" style="font-size: 19px; line-height:1.1; margin:0 0 2px; color:var(--ink);">St. Dalfour preserves</h4>
          <p style="font-family:'Source Sans 3'; font-size:13px; line-height:1.3; margin:0; color:var(--ink-soft);">Mini French jams for breakfast moments, cheese boards, or pastries.</p>
        </div>
        <div style="border-top: 1px solid var(--hairline); padding-top: 8px;">
          <h4 class="serif-display" style="font-size: 19px; line-height:1.1; margin:0 0 2px; color:var(--ink);">French candy tins</h4>
          <p style="font-family:'Source Sans 3'; font-size:13px; line-height:1.3; margin:0; color:var(--ink-soft);">Collectible Eiffel tins filled with fruit candies, made to be kept after the sweets are gone.</p>
        </div>
        <div style="border-top: 1px solid var(--hairline); padding-top: 8px;">
          <h4 class="serif-display" style="font-size: 19px; line-height:1.1; margin:0 0 2px; color:var(--ink);">LU Le Petit Chocolat</h4>
          <p style="font-family:'Source Sans 3'; font-size:13px; line-height:1.3; margin:0; color:var(--ink-soft);">Butter biscuits layered with chocolate for the classic coffee-break bite.</p>
        </div>
        <div style="border-top: 1px solid var(--hairline); padding-top: 8px;">
          <h4 class="serif-display" style="font-size: 19px; line-height:1.1; margin:0 0 2px; color:var(--ink);">Jacquet mini brownies</h4>
          <p style="font-family:'Source Sans 3'; font-size:13px; line-height:1.3; margin:0; color:var(--ink-soft);">Individually portioned chocolate-chip cakes for a familiar, generous finish.</p>
        </div>
        <div style="border-top: 1px solid var(--hairline); padding-top: 8px;">
          <h4 class="serif-display" style="font-size: 19px; line-height:1.1; margin:0 0 2px; color:var(--ink);">La M&egrave;re Poulard shortbreads</h4>
          <p style="font-family:'Source Sans 3'; font-size:13px; line-height:1.3; margin:0; color:var(--ink-soft);">Pure butter biscuits from Mont-Saint-Michel, crisp, simple, and elegant.</p>
        </div>
        <div style="border-top: 1px solid var(--hairline); padding-top: 8px;">
          <h4 class="serif-display" style="font-size: 19px; line-height:1.1; margin:0 0 2px; color:var(--ink);">Chocolate cornetti</h4>
          <p style="font-family:'Source Sans 3'; font-size:13px; line-height:1.3; margin:0; color:var(--ink-soft);">Wrapped pastry treats that turn the box into a morning or afternoon ritual.</p>
        </div>
      </div>

      <div style="border-top: 1px solid var(--gold-soft); padding-top: 14px;">
        <div class="eyebrow" style="font-size: 12px; margin-bottom: 8px;">Every box also includes</div>
        <ul style="font-family:'Source Sans 3'; font-size: 16px; line-height: 1.6; color: var(--ink-soft); margin: 0; padding-left: 20px; list-style-type: disc;">
          <li>Personalized messages</li>
          <li>QR code with custom digital experience</li>
          <li>Custom changes supported</li>
        </ul>
      </div>
    </div>
  </div>
`;

export default function Slide14TheJourneyContinues() {
  return (
    <section
      data-label="14 The Journey Continues"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
