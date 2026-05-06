const slideHtml = `
  <!-- left: lifestyle photo full bleed -->
  <div class="photo" style="
    background-image: url('assets/box-open-vertical.png');
    background-position: center;
  "></div>

  <!-- right: pull quote / message -->
  <div class="paper-grain" style="padding: 160px 130px; display:flex; flex-direction:column; justify-content:center; background: var(--rose-tint);">
    <div class="eyebrow" style="margin-bottom: 28px;">A small detail</div>

    <div style="font-family:'Caveat'; font-size: 56px; color: var(--magenta); line-height: 1.05; margin-bottom: 24px;">
      "Explore China<br/>with your tastebuds —<br/>and the world too."
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

export default function Slide07ANoteInside() {
  return (
    <section
      data-label="10 A Note Inside"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
