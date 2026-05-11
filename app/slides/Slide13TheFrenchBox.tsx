const slideHtml = `
  <!-- left photo full-bleed -->
  <div class="photo" style="
    background-image: url('assets/box-open-vertical-french.png');
    background-size: cover;
    background-position: center;
  "></div>

  <!-- right: pull quote / message -->
  <div class="paper-grain" style="padding: 160px 130px; display:flex; flex-direction:column; justify-content:center; background: var(--rose-tint);">
    <div class="eyebrow" style="margin-bottom: 28px;">First Station</div>

    <div style="font-family:'Caveat'; font-size: 56px; color: var(--magenta); line-height: 1.05; margin-bottom: 24px;">
      "Explore France<br/>with your tastebuds —<br/>and the world too."
    </div>

    <div class="fleur" style="max-width: 320px; margin: 24px 0 32px; justify-content: flex-start;">
      <span><svg width="22" height="22"><use href="#fleur"/></svg></span>
    </div>

    <p class="body-lg" style="max-width: 560px; margin: 0; color: var(--ink);">
      Inside every lid, a printed note. Outside, the box pattern is illustrated by
      hand — a different scene for every country. Small details that turn a gift
      into a keepsake.
    </p>
  </div>
`;

export default function Slide13TheFrenchBox() {
  return (
    <section
      data-label="13 The French Box"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
