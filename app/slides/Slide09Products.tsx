const slideHtml = `
  <!-- left: product explanations -->
  <div class="paper-grain" style="
    padding: 72px 82px 72px 126px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background: var(--cream);
  ">
    <h2 class="serif-display" style="font-size: 76px; line-height: 1.05; margin: 0 0 22px; color: var(--ink);">
      1 &mdash; Treats and cultural items
    </h2>
    <div style="width: 88px; height: 1px; background: var(--gold-soft); margin-bottom: 32px;"></div>

    <p style="font-family:'Source Sans 3'; font-size: 21px; line-height: 1.52; max-width: 640px; margin: 0 0 26px; color: var(--ink-soft);">
      Every month, a new destination. Every box, a fresh collection of handpicked treats &mdash; local snacks, artisan sweets, and beloved regional favourites sourced from the country of the month.
    </p>

    <p style="font-family:'Source Sans 3'; font-size: 21px; line-height: 1.52; max-width: 640px; margin: 0 0 26px; color: var(--ink-soft);">
      Each edition is researched, tasted, and curated to capture the authentic flavours of a place &mdash; the kind of things locals actually love.
    </p>

    <p style="font-family:'Source Sans 3'; font-size: 21px; line-height: 1.52; max-width: 640px; margin: 0; color: var(--ink-soft);">
      When possible, we also include a carefully chosen country-specific item &mdash; a local craft, a small keepsake, or a cultural token that turns the box into more than a snack selection. It becomes a memory.
    </p>
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
      data-label="08 1 — Treats and country based items"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1.3fr 0.7fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
