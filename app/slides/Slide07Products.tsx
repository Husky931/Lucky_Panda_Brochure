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
      1 &mdash; Treats and a cultural keepsake
    </h2>
    <div style="width: 88px; height: 1px; background: var(--gold-soft); margin-bottom: 32px;"></div>

    <p style="font-family:'Source Sans 3'; font-size: 21px; line-height: 1.52; max-width: 640px; margin: 0 0 26px; color: var(--ink-soft);">
      Every month, a new destination. Every box is mostly a collection of country based edibles &mdash; snacks, sweets, all sorts of interesting and authentic treats that have the goal of bringing as closely of an authentic experience as possible to the client.
    </p>

    <p style="font-family:'Source Sans 3'; font-size: 21px; line-height: 1.52; max-width: 640px; margin: 0 0 26px; color: var(--ink-soft);">
      Each edition is researched, tasted, and curated to capture the original flavour of a place.
    </p>

    <p style="font-family:'Source Sans 3'; font-size: 21px; line-height: 1.52; max-width: 640px; margin: 0; color: var(--ink-soft);">
      When possible, we also include a carefully chosen country-specific item &mdash; we deliberately pick something local and usefull that we think the receiver can either use in their daily live or work.
    </p>
  </div>

  <!-- right: product photography -->
  <div style="
    background: linear-gradient(180deg, #ead6bf 0%, #d7bea3 100%);s
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 34px 48px;
  ">
    <img
      src="/used/slide_07/products_2.png"
      alt="Lucky Panda French box product assortment"
      style="display:block; width:100%; height:100%; object-fit:contain;"
    />
  </div>
`;

export default function Slide07Products() {
  return (
    <section
      data-label="07 1 — Treats and a cultural keepsake"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1.3fr 0.7fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
