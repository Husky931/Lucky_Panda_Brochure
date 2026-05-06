const slideHtml = `
  <!-- left: open-box photo with framing -->
  <div style="display:flex; flex-direction:column; justify-content:center;">
    <div class="eyebrow" style="margin-bottom: 22px;">Curation</div>
    <h2 class="serif-display" style="font-size: 84px; line-height: 1.0; margin: 0 0 20px; color: var(--ink);">
      Inside <span class="serif-italic">the box</span>
    </h2>
    <p class="body" style="max-width: 540px; margin: 0 0 36px;">
      Every item is chosen for its story. A bakery that's been baking since 1923.
      A village where lavender turns honey amber. A confiserie tucked behind a
      Brittany lighthouse. The label tells you where you've just been.
    </p>

    <div class="photo photo-frame" style="
      aspect-ratio: 4/3;
      background-image: url('assets/box-open-flatlay.png');
      background-position: center;
    "></div>
  </div>

  <!-- right: labeled ingredient cards -->
  <div style="display:flex; flex-direction:column; justify-content:center; gap: 22px;">
    <div class="frame" style="padding: 26px 32px; display:grid; grid-template-columns: 90px 1fr; gap: 22px; align-items:center;">
      <div style="width:90px; height:90px; background: var(--rose-tint); display:grid; place-items:center; font-family:'Playfair Display'; font-size: 32px; color: var(--magenta);">01</div>
      <div>
        <div style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; color: var(--ink);">Les Palets de la Mère Poulard</div>
        <div class="body-tight" style="font-size: 18px; margin-top: 6px;">Buttery shortbread biscuits from Mont-Saint-Michel, baking since 1888.</div>
      </div>
    </div>

    <div class="frame" style="padding: 26px 32px; display:grid; grid-template-columns: 90px 1fr; gap: 22px; align-items:center;">
      <div style="width:90px; height:90px; background: var(--rose-tint); display:grid; place-items:center; font-family:'Playfair Display'; font-size: 32px; color: var(--magenta);">02</div>
      <div>
        <div style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; color: var(--ink);">French Truffles, Hazelnut</div>
        <div class="body-tight" style="font-size: 18px; margin-top: 6px;">Truffettes de France — cocoa-dusted, slow-melting, the small luxury kind.</div>
      </div>
    </div>

    <div class="frame" style="padding: 26px 32px; display:grid; grid-template-columns: 90px 1fr; gap: 22px; align-items:center;">
      <div style="width:90px; height:90px; background: var(--rose-tint); display:grid; place-items:center; font-family:'Playfair Display'; font-size: 32px; color: var(--magenta);">03</div>
      <div>
        <div style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; color: var(--ink);">St Dalfour Confitures</div>
        <div class="body-tight" style="font-size: 18px; margin-top: 6px;">A trio of fruit preserves from the Lot-et-Garonne, sweetened only with grape juice.</div>
      </div>
    </div>

    <div class="frame" style="padding: 26px 32px; display:grid; grid-template-columns: 90px 1fr; gap: 22px; align-items:center;">
      <div style="width:90px; height:90px; background: var(--rose-tint); display:grid; place-items:center; font-family:'Playfair Display'; font-size: 32px; color: var(--magenta);">04</div>
      <div>
        <div style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; color: var(--ink);">Jacquet Mini Cakes</div>
        <div class="body-tight" style="font-size: 18px; margin-top: 6px;">Pocketable madeleines studded with chocolate chips — a Parisian afternoon, by post.</div>
      </div>
    </div>

    <div class="frame" style="padding: 26px 32px; display:grid; grid-template-columns: 90px 1fr; gap: 22px; align-items:center;">
      <div style="width:90px; height:90px; background: var(--rose-tint); display:grid; place-items:center; font-family:'Playfair Display'; font-size: 32px; color: var(--magenta);">05</div>
      <div>
        <div style="font-family:'Playfair Display'; font-weight:600; font-size: 24px; color: var(--ink);">+ A handwritten note</div>
        <div class="body-tight" style="font-size: 18px; margin-top: 6px;">A folded card, on cream stock, with whatever message you'd like the recipient to read first.</div>
      </div>
    </div>
  </div>
`;

export default function Slide06InsideTheBox() {
  return (
    <section
      data-label="09 Inside The Box"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1.05fr 1fr",
        padding: "110px 130px",
        gap: "70px",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
