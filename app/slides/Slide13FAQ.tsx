const slideHtml = `
  <div>
    <div class="eyebrow" style="margin-bottom: 24px;">Frequently asked</div>
    <h2 class="serif-display" style="font-size: 84px; line-height: 1.0; margin: 0 0 16px; color: var(--ink);">
      The practical
    </h2>
    <h2 class="script-display" style="font-size: 130px; line-height: 0.9; margin: -8px 0 36px;">questions.</h2>
    <p class="body" style="margin: 0; max-width: 380px;">
      Sourcing in Shanghai, shipping across China, fapiao and CNY rush — we handle
      the small print so you can focus on who's receiving the gift.
    </p>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 28px 44px;">
    <div>
      <div class="serif-italic" style="font-size: 20px; color: var(--magenta); margin-bottom: 6px;">Lead time</div>
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">How long do orders take?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Standard editions ship within 7 working days. Co-branded orders, 14 days. Bespoke, 4–6 weeks.</p>
    </div>

    <div>
      <div class="serif-italic" style="font-size: 20px; color: var(--magenta); margin-bottom: 6px;">MOQ</div>
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">What's your minimum order?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">30 boxes for L'Essentiel. 50 for personalized. 80 for fully bespoke editions.</p>
    </div>

    <div>
      <div class="serif-italic" style="font-size: 20px; color: var(--magenta); margin-bottom: 6px;">Delivery</div>
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">Multiple addresses?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Yes. Send us a CSV — we ship across China and to most international addresses.</p>
    </div>

    <div>
      <div class="serif-italic" style="font-size: 20px; color: var(--magenta); margin-bottom: 6px;">Invoicing</div>
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">Do you offer fapiao?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Yes — both 增值税普通发票 and 专用发票 are available on every order.</p>
    </div>

    <div>
      <div class="serif-italic" style="font-size: 20px; color: var(--magenta); margin-bottom: 6px;">CNY</div>
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">Do you handle Chinese New Year rush?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">We do — please reserve by mid-November to lock in CNY production windows.</p>
    </div>

    <div>
      <div class="serif-italic" style="font-size: 20px; color: var(--magenta); margin-bottom: 6px;">Customization</div>
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">What can I personalize?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Inside-lid message, sleeve, ribbon, greeting card, item swaps, CEO QR card — and the full curation, on bespoke.</p>
    </div>

    <div>
      <div class="serif-italic" style="font-size: 20px; color: var(--magenta); margin-bottom: 6px;">Sustainability</div>
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">Are the boxes recyclable?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Yes — corrugated FSC stock, soy-based inks, recyclable filler. No plastic windows, ever.</p>
    </div>

    <div>
      <div class="serif-italic" style="font-size: 20px; color: var(--magenta); margin-bottom: 6px;">Trial</div>
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">Can I order a sample first?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Of course. Sample boxes are sent at cost — usually within 3 days, anywhere in mainland China.</p>
    </div>
  </div>
`;

export default function Slide13FAQ() {
  return (
    <section
      data-label="13 FAQ"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        padding: "120px 130px",
        display: "grid",
        gridTemplateColumns: "0.85fr 1.4fr",
        gap: "100px",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
