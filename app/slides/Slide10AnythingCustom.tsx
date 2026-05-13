const slideHtml = `
  <!-- left: text content -->
  <div style="
    padding: 106px 72px 106px 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  ">
    <div class="eyebrow" style="font-size: 17px; margin-bottom: 24px;">Customisation</div>
    <div style="width: 88px; height: 1px; background: var(--gold-soft); margin-bottom: 46px;"></div>

    <h2 class="serif-display" style="font-size: 84px; line-height: 1.0; margin: 0 0 28px; color: var(--ink);">
      4 &mdash; Customisation<br/>
      <span class="serif-italic">available</span>
    </h2>

    <div style="font-family:'Dancing Script'; font-size: 34px; color: var(--magenta); line-height: 1.1; margin: 0 0 32px; max-width: 500px;">
      From the box to every piece inside.
    </div>

    <p style="font-family:'Source Sans 3'; font-size: 20px; line-height: 1.52; max-width: 540px; margin: 0; color: var(--ink-soft);">
      From the box itself to the products inside and supplementary items, each gift can be tailored to your brand, your occasion, and the people receiving it — with co-design available alongside HR and PR teams.
    </p>
  </div>

  <!-- right: image full-bleed -->
  <div style="position: relative; overflow: hidden;">
    <div style="
      position: absolute;
      left: 0;
      top: 64px;
      bottom: 64px;
      width: 1px;
      background: linear-gradient(180deg, transparent, var(--gold-soft) 35%, var(--gold-soft) 65%, transparent);
      z-index: 2;
    "></div>
    <img
      src="/used/slide_10/branded.png"
      alt="Custom branded Lucky Panda shipment with box, printed cards, QR insert, and office supplies"
      style="
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: fill;
        object-position: center;
        display: block;
      "
    />
  </div>
`;

export default function Slide10AnythingCustom() {
  return (
    <section
      data-label="10 4 — Customisation Available"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}