const slideHtml = `
  <div style="
    width:100%;
    max-width: 1180px;
  ">
    <div class="eyebrow" style="font-size: 19px; margin-bottom: 28px;">Customisation</div>
    <div style="width: 118px; height: 1px; background: var(--gold-soft); margin-bottom: 46px;"></div>

    <h2 class="serif-display" style="font-size: 92px; line-height: 1.0; margin: 0 0 30px; color: var(--ink);">
      Customisation available
    </h2>

    <p class="body-lg" style="max-width: 900px; margin: 0 0 22px; color: var(--ink-soft);">
      From the outer box to the products inside, each gift can be tailored to your brand, your occasion, and the people receiving it, with co-design available alongside HR and PR teams.
    </p>

    <p class="serif-italic" style="font-size: 36px; line-height: 1.32; max-width: 760px; margin: 0 0 52px; color: var(--ink);">
      A simple way to make every present feel considered, personal, and distinctly yours.
    </p>

    <div style="display:grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 44px; max-width: 1040px;">
      <div style="border-top: 1px solid var(--hairline); padding-top: 18px;">
        <h3 class="serif-display" style="font-size: 31px; line-height:1.05; margin:0 0 9px; color:var(--ink);">For the box</h3>
        <p style="font-family:'Source Sans 3'; font-size:19px; line-height:1.38; margin:0; color:var(--ink-soft);">
          Branded sleeves, ribbons, lid cards, stickers, printed panels, or campaign-specific packaging details.
        </p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 18px;">
        <h3 class="serif-display" style="font-size: 31px; line-height:1.05; margin:0 0 9px; color:var(--ink);">For what goes inside</h3>
        <p style="font-family:'Source Sans 3'; font-size:19px; line-height:1.38; margin:0; color:var(--ink-soft);">
          Dietary swaps, milestone treats, local favourites, wellness pieces, desk accessories, or a fully new edition.
        </p>
      </div>
    </div>
  </div>
`;

export default function Slide13AnythingCustom() {
  return (
    <section
      data-label="13 Customisation Available"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        padding: "176px 156px",
        display: "flex",
        alignItems: "center",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
