const slideHtml = `
  <div>
    <div class="eyebrow" style="margin-bottom: 22px;">Pricing &amp; Tiers</div>
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items:center;">
      <h2 class="serif-display" style="font-size: 84px; line-height: 1.0; margin: 0; color: var(--ink);">
        Three editions.<br/>
        <span class="serif-italic">One way of caring.</span>
      </h2>
      <div style="justify-self:center; max-width: 630px; padding: 24px 28px; text-align:center; border-top:1px solid var(--hairline); border-bottom:1px solid var(--hairline);">
        <p class="serif-italic" style="font-size: 34px; line-height:1.25; color: var(--ink); margin:0;">
          &ldquo;For additional services, such as hosted experiences, workshops, and fully custom programs, contact us directly&ldquo;
        </p>
      </div>
    </div>
  </div>

  <!-- 3 tiers -->
  <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 36px; align-items: stretch;">
    <!-- Tier 1 -->
    <div class="tier">
      <h3 class="serif-display" style="font-size: 48px; line-height: 1; margin: 0 0 8px; color: var(--ink);">Light</h3>
      <div class="serif-italic" style="font-size: 22px; color: var(--magenta); margin-bottom: 28px;">A thoughtful country discovery</div>

      <div style="display:flex; align-items:baseline; gap: 8px; margin-bottom: 28px;">
        <span style="font-family:'Libre Baskerville'; font-size: 64px; font-weight:600; color: var(--ink);">¥145</span>
        <span style="font-family:'Source Sans 3'; font-size: 16px; color: var(--ink-soft);">/ box</span>
      </div>
      <ul style="list-style:none; padding:0; margin: 0; display:flex; flex-direction:column; gap: 14px; font-family:'Source Sans 3'; font-size: 19px; color: var(--ink); flex: 1;">
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>5 curated products</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Personal note for each recipient</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Single-address delivery</li>
      </ul>
    </div>

    <!-- Tier 2 (featured) -->
    <div class="tier featured">
      <div class="tier-tag">Most chosen</div>
      <h3 class="serif-display" style="font-size: 48px; line-height: 1; margin: 0 0 8px; color: var(--ink);">Standard</h3>
      <div class="serif-italic" style="font-size: 22px; color: var(--magenta); margin-bottom: 28px;">The signature team-gifting edition</div>

      <div style="display:flex; align-items:baseline; gap: 8px; margin-bottom: 28px;">
        <span style="font-family:'Libre Baskerville'; font-size: 64px; font-weight:600; color: var(--ink);">¥198</span>
        <span style="font-family:'Source Sans 3'; font-size: 16px; color: var(--ink-soft);">/ box</span>
      </div>
      <ul style="list-style:none; padding:0; margin: 0; display:flex; flex-direction:column; gap: 14px; font-family:'Source Sans 3'; font-size: 19px; color: var(--ink); flex: 1;">
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>8 curated products</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Personal note for each recipient</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Custom QR digital experience</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Multi-address delivery</li>
      </ul>
    </div>

    <!-- Tier 3 -->
    <div class="tier">
      <h3 class="serif-display" style="font-size: 48px; line-height: 1; margin: 0 0 8px; color: var(--ink);">Enterprise</h3>
      <div class="serif-italic" style="font-size: 22px; color: var(--magenta); margin-bottom: 28px;">A fully bespoke gifting experience</div>

      <div style="display:flex; align-items:baseline; gap: 8px; margin-bottom: 28px;">
        <span style="font-family:'Libre Baskerville'; font-size: 64px; font-weight:600; color: var(--ink);">¥499</span>
        <span style="font-family:'Source Sans 3'; font-size: 16px; color: var(--ink-soft);">/ box</span>
      </div>
      <ul style="list-style:none; padding:0; margin: 0; display:flex; flex-direction:column; gap: 14px; font-family:'Source Sans 3'; font-size: 19px; color: var(--ink); flex: 1;">
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>12 products, including 3 premium selections</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Personal note for each recipient</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Custom QR digital experience</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Custom illustrated packaging</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Product customization</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Country-based story booklet</li>
        <li style="display:flex; gap: 14px; align-items:flex-start;"><span class="dot-mark" style="margin-top:8px;"></span>Multi-address delivery</li>
      </ul>
    </div>
  </div>

  <div style="border-top: 1px solid var(--hairline); padding-top: 20px; display:flex; justify-content:space-between; gap: 40px; align-items:flex-start;">
    <p style="font-family:'Source Sans 3'; font-size: 16px; line-height:1.45; color: var(--ink-soft); margin:0; max-width: 670px;">
      Pricing shown per box in RMB. Final quotes can reflect quantity, delivery needs, and custom requests.
    </p>
    <p style="font-family:'Source Sans 3'; font-size: 16px; line-height:1.45; color: var(--ink); margin:0; max-width: 720px; text-align:right;">
      Orders above 100 boxes are eligible for volume discount pricing.
    </p>
  </div>
`;

export default function Slide18Pricing() {
  return (
    <section
      data-label="18 Pricing"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        padding: "96px 130px 84px",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gap: "38px",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
