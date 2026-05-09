const slideHtml = `
  <!-- left photo full-bleed -->
  <div class="photo" style="
    background-image: url('assets/box-open-vertical-french.png');
    background-size: cover;
    background-position: center;
  "></div>

  <!-- right: centered editorial column -->
  <div class="paper-grain" style="padding: 130px 100px; display:flex; flex-direction:column; justify-content:center;">
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
  </div>
`;

export default function Slide09TheFrenchBox() {
  return (
    <section
      data-label="09 The French Box"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
