const slideHtml = `
  <div style="text-align:center;">
    <div class="eyebrow" style="margin-bottom: 20px;">Frequently Asked Questions</div>
    <h2 class="serif-display" style="font-size: 112px; line-height: 0.95; margin: 0; color: var(--ink);">
      FAQ
    </h2>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 26px 52px;">
    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">How long do orders take?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Standard editions ship within 7 working days. Co-branded orders, 14 days. Bespoke, 4–6 weeks.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">What's your minimum order?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">30 boxes for L'Essentiel. 50 for personalized. 80 for fully bespoke editions.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">Multiple addresses?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Yes. Send us a CSV — we ship across China and to most international addresses.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">Do you offer fapiao?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Yes — both 增值税普通发票 and 专用发票 are available on every order.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">Do you handle Chinese New Year rush?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">We do — please reserve by mid-November to lock in CNY production windows.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">What can I personalize?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Inside-lid message, sleeve, ribbon, greeting card, item swaps, CEO QR card — and the full curation, on bespoke.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">Are the boxes recyclable?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Yes — corrugated FSC stock, soy-based inks, recyclable filler. No plastic windows, ever.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">Can I order a sample first?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Of course. Sample boxes are sent at cost — usually within 3 days, anywhere in mainland China.</p>
    </div>
  </div>
`;

export default function Slide19FAQ() {
  return (
    <section
      data-label="19 FAQ"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        padding: "92px 150px 96px",
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gap: "56px",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
