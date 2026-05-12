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
      From the box itself to the products inside and supplementary items, each gift can be tailored to your brand, your occasion, and the people receiving it, with co-design available alongside HR and PR teams.
    </p>


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
