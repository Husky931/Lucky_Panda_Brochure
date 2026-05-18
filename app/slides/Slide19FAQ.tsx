const slideHtml = `
  <div style="text-align:center;">
    <div class="eyebrow" style="margin-bottom: 20px;">Frequently Asked Questions</div>
    <h2 class="serif-display" style="font-size: 112px; line-height: 0.95; margin: 0; color: var(--ink);">
      FAQ
    </h2>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 26px 52px;">
    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">What is Lucky Panda?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">A Shanghai-based creative gifting studio helping companies make team moments, client events, and celebrations feel personal.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">What comes inside the box?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Curated sweets, snacks, cultural keepsakes, a personal note, QR digital content, and destination story details.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">Can every gift feel personal?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Yes. Each box can include a printed card with the recipient&apos;s name, team, milestone, or message from leadership.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">What can the QR code open?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">A CEO or manager video, private landing page, team highlight reel, event invitation, survey, or campaign microsite.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">Can we customize the box?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Yes. The box, products, supplementary items, branded keepsakes, and full curation can be tailored with your HR or PR team.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">Which edition should we choose?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Light starts with 5 products, Standard adds 8 products and QR content, and Enterprise includes 12 products plus custom packaging.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">Who is it designed for?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Teams, clients, events, celebrations, onboarding kits, milestone gifts, anniversary moments, and employee recognition campaigns.</p>
    </div>

    <div style="border-top: 1px solid var(--hairline); padding-top: 22px;">
      <h4 style="font-family:'Libre Baskerville'; font-weight:600; font-size: 24px; margin: 0 0 6px; color:var(--ink);">How do we begin?</h4>
      <p class="body-tight" style="margin: 0; font-size: 18px;">Tell us who you&apos;d like to surprise. We&apos;ll reply within a working day with three options to choose from.</p>
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
