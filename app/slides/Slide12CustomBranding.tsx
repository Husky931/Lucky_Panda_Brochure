const slideHtml = `
  <!-- top: branded shipment photography -->
  <div style="
    display:flex;
    align-items:center;
    justify-content:center;
    background: linear-gradient(180deg, var(--rose-tint) 0%, #ead8c4 100%);
    position:relative;
  ">
    <div style="position:relative; width: 1138px; aspect-ratio: 16 / 9;">
      <div style="
        position:absolute;
        inset: -18px;
        background: var(--paper);
        border: 1px solid var(--gold-soft);
        transform: rotate(-1.1deg);
        box-shadow: 0 30px 74px -38px rgba(43,31,26,0.42);
      "></div>
      <img
        src="/branded_2.png"
        alt="Custom branded Lucky Panda shipment with box, printed cards, QR insert, and office supplies"
        style="
          position:relative;
          display:block;
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:center;
          box-sizing:border-box;
          border: 8px solid var(--paper);
          box-shadow: 0 30px 70px -34px rgba(43,31,26,0.42);
        "
      />
    </div>
  </div>

  <!-- bottom: custom branding copy -->
  <div class="paper-grain" style="
    padding: 48px 126px 54px;
    display:flex;
    align-items:center;
    background: var(--cream);
  ">
    <div style="width:100%; display:grid; grid-template-columns: 0.86fr 1.14fr; gap: 66px; align-items:end;">
      <div>
        <div class="eyebrow" style="font-size: 19px; margin-bottom: 18px;">Custom Branding</div>
        <h2 class="serif-display" style="font-size: 64px; line-height: 1.01; margin: 0 0 12px; color: var(--ink);">
          Your brand,<br/>
          <span class="serif-italic">inside the moment.</span>
        </h2>
        <div style="font-family:'Dancing Script'; font-size: 38px; color: var(--magenta); line-height: 1.08; margin: 0 0 18px; max-width: 520px;">
          A shipment that feels like it came from you.
        </div>
        <p style="font-family:'Source Sans 3'; font-size: 21px; line-height:1.44; max-width: 620px; margin: 0; color: var(--ink-soft);">
          Custom packaging, printed inserts, branded office pieces, and campaign-specific add-ons, designed around your team, your message, and your moment.
        </p>
      </div>

      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 28px; align-items:start;">
        <div style="border-top: 1px solid var(--hairline); padding-top: 16px;">
          <h3 class="serif-display" style="font-size: 28px; line-height:1.05; margin:0 0 7px; color:var(--ink);">Brand the box</h3>
          <p style="font-family:'Source Sans 3'; font-size:17px; line-height:1.36; margin:0; color:var(--ink-soft);">Sleeves, ribbons, lid cards, stickers, and printed panels brought into the Lucky Panda visual system.</p>
        </div>

        <div style="border-top: 1px solid var(--hairline); padding-top: 16px;">
          <h3 class="serif-display" style="font-size: 28px; line-height:1.05; margin:0 0 7px; color:var(--ink);">Print the message</h3>
          <p style="font-family:'Source Sans 3'; font-size:17px; line-height:1.36; margin:0; color:var(--ink-soft);">Welcome notes, thank-you cards, QR cards, desk signs, and campaign copy for the occasion.</p>
        </div>

        <div style="border-top: 1px solid var(--hairline); padding-top: 16px;">
          <h3 class="serif-display" style="font-size: 28px; line-height:1.05; margin:0 0 7px; color:var(--ink);">Extend the gift</h3>
          <p style="font-family:'Source Sans 3'; font-size:17px; line-height:1.36; margin:0; color:var(--ink-soft);">Notebooks, pens, pouches, name cards, and small desk objects that keep the story in daily use.</p>
        </div>
      </div>
    </div>
  </div>
`;

export default function Slide12CustomBranding() {
  return (
    <section
      data-label="12 Custom Branding"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateRows: "684px 396px",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
