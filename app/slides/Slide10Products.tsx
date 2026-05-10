const slideHtml = `
  <!-- left: product explanations -->
  <div class="paper-grain" style="
    padding: 92px 74px 84px 126px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background: var(--cream);
  ">
    <div class="eyebrow" style="margin-bottom: 22px;">Product notes</div>

    <h2 class="serif-display" style="font-size: 76px; line-height: 1.0; margin: 0 0 18px; color: var(--ink); max-width: 780px;">
      The French box,
      <span class="serif-italic"> item by item.</span>
    </h2>

    <p class="body-tight" style="font-size: 22px; line-height: 1.45; max-width: 790px; margin: 0 0 34px;">
      A generous mix of chocolate, biscuits, preserves, candies, and pastry moments,
      chosen so every recipient finds something familiar, something playful, and something worth keeping.
    </p>

    <div style="
      display:grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 34px;
      row-gap: 18px;
      max-width: 880px;
    ">
      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 25px; line-height:1.05; margin:0 0 6px; color:var(--ink);">Le Chocolat des Fran&ccedil;ais</h3>
        <p style="font-family:'Inter'; font-size:16.5px; line-height:1.38; margin:0; color:var(--ink-soft);">Illustrated chocolate bars with caramel, hazelnut, and a bright Parisian wink.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 25px; line-height:1.05; margin:0 0 6px; color:var(--ink);">Truffettes de France</h3>
        <p style="font-family:'Inter'; font-size:16.5px; line-height:1.38; margin:0; color:var(--ink-soft);">Hazelnut cocoa truffles, rich, soft, and easy to share at the desk.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 25px; line-height:1.05; margin:0 0 6px; color:var(--ink);">St. Dalfour preserves</h3>
        <p style="font-family:'Inter'; font-size:16.5px; line-height:1.38; margin:0; color:var(--ink-soft);">Mini French jams for breakfast moments, cheese boards, or pastries.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 25px; line-height:1.05; margin:0 0 6px; color:var(--ink);">French candy tins</h3>
        <p style="font-family:'Inter'; font-size:16.5px; line-height:1.38; margin:0; color:var(--ink-soft);">Collectible Eiffel tins filled with fruit candies, made to be kept after the sweets are gone.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 25px; line-height:1.05; margin:0 0 6px; color:var(--ink);">LU Le Petit Chocolat</h3>
        <p style="font-family:'Inter'; font-size:16.5px; line-height:1.38; margin:0; color:var(--ink-soft);">Butter biscuits layered with chocolate for the classic coffee-break bite.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 25px; line-height:1.05; margin:0 0 6px; color:var(--ink);">Jacquet mini brownies</h3>
        <p style="font-family:'Inter'; font-size:16.5px; line-height:1.38; margin:0; color:var(--ink-soft);">Individually portioned chocolate-chip cakes for a familiar, generous finish.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 25px; line-height:1.05; margin:0 0 6px; color:var(--ink);">La M&egrave;re Poulard shortbreads</h3>
        <p style="font-family:'Inter'; font-size:16.5px; line-height:1.38; margin:0; color:var(--ink-soft);">Pure butter biscuits from Mont-Saint-Michel, crisp, simple, and elegant.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 14px;">
        <h3 class="serif-display" style="font-size: 25px; line-height:1.05; margin:0 0 6px; color:var(--ink);">Chocolate cornetti</h3>
        <p style="font-family:'Inter'; font-size:16.5px; line-height:1.38; margin:0; color:var(--ink-soft);">Wrapped pastry treats that turn the box into a morning or afternoon ritual.</p>
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

export default function Slide10Products() {
  return (
    <section
      data-label="10 The Products"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1.3fr 0.7fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
