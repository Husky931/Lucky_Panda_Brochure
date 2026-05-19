const slideHtml = `
  <div style="text-align:center;">
    <div class="eyebrow" style="margin-bottom: 16px;">Frequently Asked Questions</div>
    <h2 class="serif-display" style="font-size: 92px; line-height: 0.98; margin: 0; color: var(--ink);">
      A few things <br/><em style="font-family:'Libre Baskerville', serif; font-style: italic;">clients ask.</em>
    </h2>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 18px 56px;">
    <div style="border-top: 1px solid var(--hairline); padding-top: 16px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 25px; line-height: 1.22; margin: 0 0 8px; color:var(--ink);">Can we customize the box?</h4>
      <p class="body-tight" style="margin: 0; font-size: 20px; line-height: 1.5;">Yes. The box, products, supplementary items, branded keepsakes, and full curation can be tailored with your HR or PR team.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 16px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 25px; line-height: 1.22; margin: 0 0 8px; color:var(--ink);">Can every gift feel personal?</h4>
      <p class="body-tight" style="margin: 0; font-size: 20px; line-height: 1.5;">Yes. Each box can include a printed card with the recipient&apos;s name, team, milestone, or message from leadership.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 16px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 25px; line-height: 1.22; margin: 0 0 8px; color:var(--ink);">What comes inside the box?</h4>
      <p class="body-tight" style="margin: 0; font-size: 20px; line-height: 1.5;">Curated sweets, snacks, cultural keepsakes, a personal note, QR digital content, and destination story details.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 16px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 25px; line-height: 1.22; margin: 0 0 8px; color:var(--ink);">Do you have a minimum order?</h4>
      <p class="body-tight" style="margin: 0; font-size: 20px; line-height: 1.5;">Yes — 30 boxes is our minimum order.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 16px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 25px; line-height: 1.22; margin: 0 0 8px; color:var(--ink);">Where do you deliver?</h4>
      <p class="body-tight" style="margin: 0; font-size: 20px; line-height: 1.5;">Currently across the wider Shanghai area.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 16px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 25px; line-height: 1.22; margin: 0 0 8px; color:var(--ink);">Do you offer discounts?</h4>
      <p class="body-tight" style="margin: 0; font-size: 20px; line-height: 1.5;">Yes — orders over 100 boxes qualify for a volume discount.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 16px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 25px; line-height: 1.22; margin: 0 0 8px; color:var(--ink);">How far in advance should we order?</h4>
      <p class="body-tight" style="margin: 0; font-size: 20px; line-height: 1.5;">Please place your order at least 7 days in advance so we can curate, prepare, and deliver with care.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 16px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 25px; line-height: 1.22; margin: 0 0 8px; color:var(--ink);">Can we order mixed edition boxes?</h4>
      <p class="body-tight" style="margin: 0; font-size: 20px; line-height: 1.5;">Yes — you can mix editions freely, as long as the 30-box minimum is met overall.</p>
    </div>
  </div>

  <div style="border-top: 1px solid var(--hairline); padding-top: 26px; text-align:center;">
    <p style="font-family:'Libre Baskerville', serif; font-style: italic; font-size: 40px; line-height: 1.45; margin: 0; color: var(--ink);">
      Not sure where your request fits? Send us the brief — we&rsquo;ll<br/>shape the right box around it.
    </p>
  </div>
`;

export default function Slide19FAQ() {
  return (
    <section
      data-label="19 FAQ"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        padding: "72px 150px 72px",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gap: "40px",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
