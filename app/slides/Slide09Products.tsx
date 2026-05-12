const slideHtml = `
  <!-- left: product explanations -->
  <div class="paper-grain" style="
    padding: 72px 82px 72px 126px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background: var(--cream);
  ">
    <div style="
      display:grid;
      grid-template-columns: 1fr;
      row-gap: 12px;
      max-width: 760px;
    ">
      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 27px; line-height:1.05; margin:0 0 5px; color:var(--ink);">Le Chocolat des Fran&ccedil;ais</h3>
        <p style="font-family:'Source Sans 3'; font-size:18.5px; line-height:1.34; margin:0; color:var(--ink-soft);">Illustrated chocolate bars with caramel, hazelnut, and a bright Parisian wink.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 27px; line-height:1.05; margin:0 0 5px; color:var(--ink);">Truffettes de France</h3>
        <p style="font-family:'Source Sans 3'; font-size:18.5px; line-height:1.34; margin:0; color:var(--ink-soft);">Hazelnut cocoa truffles, rich, soft, and easy to share at the desk.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 27px; line-height:1.05; margin:0 0 5px; color:var(--ink);">St. Dalfour preserves</h3>
        <p style="font-family:'Source Sans 3'; font-size:18.5px; line-height:1.34; margin:0; color:var(--ink-soft);">Mini French jams for breakfast moments, cheese boards, or pastries.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 27px; line-height:1.05; margin:0 0 5px; color:var(--ink);">French candy tins</h3>
        <p style="font-family:'Source Sans 3'; font-size:18.5px; line-height:1.34; margin:0; color:var(--ink-soft);">Collectible Eiffel tins filled with fruit candies, made to be kept after the sweets are gone.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 27px; line-height:1.05; margin:0 0 5px; color:var(--ink);">LU Le Petit Chocolat</h3>
        <p style="font-family:'Source Sans 3'; font-size:18.5px; line-height:1.34; margin:0; color:var(--ink-soft);">Butter biscuits layered with chocolate for the classic coffee-break bite.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 27px; line-height:1.05; margin:0 0 5px; color:var(--ink);">Jacquet mini brownies</h3>
        <p style="font-family:'Source Sans 3'; font-size:18.5px; line-height:1.34; margin:0; color:var(--ink-soft);">Individually portioned chocolate-chip cakes for a familiar, generous finish.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 27px; line-height:1.05; margin:0 0 5px; color:var(--ink);">La M&egrave;re Poulard shortbreads</h3>
        <p style="font-family:'Source Sans 3'; font-size:18.5px; line-height:1.34; margin:0; color:var(--ink-soft);">Pure butter biscuits from Mont-Saint-Michel, crisp, simple, and elegant.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 27px; line-height:1.05; margin:0 0 5px; color:var(--ink);">Chocolate cornetti</h3>
        <p style="font-family:'Source Sans 3'; font-size:18.5px; line-height:1.34; margin:0; color:var(--ink-soft);">Wrapped pastry treats that turn the box into a morning or afternoon ritual.</p>
      </div>
    </div>
  </div>

  <!-- right: product photography -->
  <div style="
    background: linear-gradient(180deg, #ead6bf 0%, #d7bea3 100%);
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 34px 48px;
  ">
    <img
      src="/products.png"
      alt="Lucky Panda French box product assortment"
      style="display:block; width:100%; height:100%; object-fit:contain;"
    />
  </div>
`;

export default function Slide09Products() {
  return (
    <section
      data-label="09 The Products"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1.3fr 0.7fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
