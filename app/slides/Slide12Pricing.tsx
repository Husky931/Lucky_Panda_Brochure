const slideHtml = `
  <div>
    <div class="eyebrow" style="margin-bottom: 22px;">Pricing &amp; Tiers</div>
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items:end;">
      <h2 class="serif-display" style="font-size: 84px; line-height: 1.0; margin: 0; color: var(--ink);">
        Three editions.<br/>
        <span class="serif-italic">One way of caring.</span>
      </h2>
      <p class="body-lg" style="max-width: 540px; margin: 0;">
        Volume pricing applies above 50 boxes. Logistics, fapiao and multi-address
        delivery included on every tier. Bespoke is quoted per project.
      </p>
    </div>
  </div>

  <!-- 3 tiers -->
  <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 36px; align-items: stretch;">
    <!-- Tier 1 -->
    <div class="tier">
      <div style="font-family:'Inter'; font-size: 14px; letter-spacing:0.32em; text-transform:uppercase; color: var(--ink-soft); margin-bottom: 12px;">Tier 01</div>
      <h3 class="serif-display" style="font-size: 48px; line-height: 1; margin: 0 0 8px; color: var(--ink);">L'Essentiel</h3>
      <div class="serif-italic" style="font-size: 22px; color: var(--magenta); margin-bottom: 28px;">The signature country box</div>

      <div style="display:flex; align-items:baseline; gap: 8px; margin-bottom: 28px;">
        <span style="font-family:'Playfair Display'; font-size: 64px; font-weight:600; color: var(--ink);">¥288</span>
        <span style="font-family:'Inter'; font-size: 16px; color: var(--ink-soft);">/ box</span>
      </div>
      <ul style="list-style:none; padding:0; margin: 0; display:flex; flex-direction:column; gap: 14px; font-family:'Inter'; font-size: 19px; color: var(--ink); flex: 1;">
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Standard country curation</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Lucky Panda branded box</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Printed greeting card</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Single-address delivery</li>
      </ul>
      <div style="margin-top: 28px; font-family:'Inter'; font-size: 14px; color: var(--ink-soft); letter-spacing:0.16em; text-transform:uppercase;">MOQ — 30 boxes</div>
    </div>

    <!-- Tier 2 (featured) -->
    <div class="tier featured">
      <div class="tier-tag">Most chosen</div>
      <div style="font-family:'Inter'; font-size: 14px; letter-spacing:0.32em; text-transform:uppercase; color: var(--magenta); margin-bottom: 12px;">Tier 02</div>
      <h3 class="serif-display" style="font-size: 48px; line-height: 1; margin: 0 0 8px; color: var(--ink);">Le Personnalisé</h3>
      <div class="serif-italic" style="font-size: 22px; color: var(--magenta); margin-bottom: 28px;">Co-branded, with personal notes</div>

      <div style="display:flex; align-items:baseline; gap: 8px; margin-bottom: 28px;">
        <span style="font-family:'Playfair Display'; font-size: 64px; font-weight:600; color: var(--ink);">¥428</span>
        <span style="font-family:'Inter'; font-size: 16px; color: var(--ink-soft);">/ box</span>
      </div>
      <ul style="list-style:none; padding:0; margin: 0; display:flex; flex-direction:column; gap: 14px; font-family:'Inter'; font-size: 19px; color: var(--ink); flex: 1;">
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Everything in L'Essentiel</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Co-branded sleeve &amp; ribbon</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Personal note per recipient</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>CEO QR video card</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Multi-address delivery</li>
      </ul>
      <div style="margin-top: 28px; font-family:'Inter'; font-size: 14px; color: var(--ink-soft); letter-spacing:0.16em; text-transform:uppercase;">MOQ — 50 boxes</div>
    </div>

    <!-- Tier 3 -->
    <div class="tier">
      <div style="font-family:'Inter'; font-size: 14px; letter-spacing:0.32em; text-transform:uppercase; color: var(--ink-soft); margin-bottom: 12px;">Tier 03</div>
      <h3 class="serif-display" style="font-size: 48px; line-height: 1; margin: 0 0 8px; color: var(--ink);">Le Bespoke</h3>
      <div class="serif-italic" style="font-size: 22px; color: var(--magenta); margin-bottom: 28px;">A box designed only for you</div>

      <div style="display:flex; align-items:baseline; gap: 8px; margin-bottom: 28px;">
        <span style="font-family:'Playfair Display'; font-size: 48px; font-weight:600; color: var(--ink);">On request</span>
      </div>
      <ul style="list-style:none; padding:0; margin: 0; display:flex; flex-direction:column; gap: 14px; font-family:'Inter'; font-size: 19px; color: var(--ink); flex: 1;">
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Original curation theme</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Custom-illustrated packaging</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Story-rich ingredient labels</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>End-to-end project management</li>
      </ul>
      <div style="margin-top: 28px; font-family:'Inter'; font-size: 14px; color: var(--ink-soft); letter-spacing:0.16em; text-transform:uppercase;">From — 80 boxes</div>
    </div>
  </div>

  <div class="fleur"><span><svg width="22" height="22"><use href="#fleur"/></svg></span></div>
`;

export default function Slide12Pricing() {
  return (
    <section
      data-label="13 Pricing"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        padding: "110px 130px 100px",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gap: "50px",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
