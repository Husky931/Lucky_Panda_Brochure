const slideHtml = `
  <!-- left photo full-bleed -->
  <div class="photo" style="
    background-image: url('assets/box-trio.png');
    background-size: cover;
    background-position: center;
  "></div>

  <!-- right: editorial column -->
  <div class="paper-grain" style="padding: 130px 100px; display:flex; flex-direction:column; justify-content:center;">
    <div class="ribbon" style="margin-bottom: 36px; align-self: flex-start;">A Taste of</div>

    <h2 class="script-display" style="font-size: 200px; line-height: 0.9; margin: 0 0 24px;">France</h2>

    <div style="display:flex; align-items:center; gap: 20px; margin-bottom: 36px;">
      <div style="width: 28px; height: 1.5px; background: var(--ink);"></div>
      <div style="font-family:'Inter'; font-weight:700; letter-spacing:0.34em; text-transform:uppercase; font-size: 18px; color: var(--ink);">
        Delivered with love
      </div>
      <div style="width: 28px; height: 1.5px; background: var(--ink);"></div>
    </div>

    <p class="body-lg" style="margin: 0 0 36px; max-width: 540px;">
      Our flagship gift box. A curated selection of authentic French treats —
      sweet, savory, and quietly indulgent. Wrapped in red, sealed with a paw,
      and ready to land on a desk in Shanghai.
    </p>

    <!-- features list -->
    <ul style="list-style:none; padding:0; margin: 0; display:flex; flex-direction:column; gap: 18px;">
      <li style="display:flex; align-items:center; font-family:'Playfair Display'; font-size: 24px; color: var(--ink);">
        <span class="dot-mark"></span>Premium chocolates &amp; truffles
      </li>
      <li style="display:flex; align-items:center; font-family:'Playfair Display'; font-size: 24px; color: var(--ink);">
        <span class="dot-mark"></span>Gourmet biscuits &amp; mini cakes
      </li>
      <li style="display:flex; align-items:center; font-family:'Playfair Display'; font-size: 24px; color: var(--ink);">
        <span class="dot-mark"></span>Artisan jams, honey &amp; confections
      </li>
      <li style="display:flex; align-items:center; font-family:'Playfair Display'; font-size: 24px; color: var(--ink);">
        <span class="dot-mark"></span>Handpicked, imported from France
      </li>
    </ul>

    <!-- price tag -->
    <div style="margin-top: 56px; align-self: flex-start; border: 1px solid var(--hairline); padding: 16px 28px; background: var(--paper); transform: rotate(-2deg);">
      <div style="font-family:'Inter'; font-size: 13px; letter-spacing:0.3em; text-transform:uppercase; color: var(--ink-soft);">Édition n° 01</div>
      <div style="font-family:'Playfair Display'; font-style:italic; font-size: 22px; color: var(--magenta); margin-top: 4px;">Le Voyage Français</div>
    </div>
  </div>
`;

export default function Slide05TheFrenchBox() {
  return (
    <section
      data-label="06 The French Box"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
