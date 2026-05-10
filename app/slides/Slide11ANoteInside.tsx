const slideHtml = `
  <!-- left: editorial -->
  <div class="paper-grain" style="padding: 150px 110px 150px 130px; display:flex; flex-direction:column; justify-content:center; background: var(--rose-tint);">
    <div class="eyebrow" style="margin-bottom: 26px;">Inside the lid</div>

    <h2 class="serif-display" style="font-size: 76px; line-height: 1.02; margin: 0 0 18px; color: var(--ink);">
      A note <span class="serif-italic">meant</span> for them
    </h2>

    <div style="font-family:'Caveat'; font-size: 48px; color: var(--magenta); line-height: 1.1; margin-bottom: 28px; max-width: 520px;">
      A name, a thank-you, a quiet milestone.
    </div>

    <div class="fleur" style="max-width: 320px; margin: 0 0 28px; justify-content: flex-start;">
      <span><svg width="22" height="22"><use href="#fleur"/></svg></span>
    </div>

    <p class="body-lg" style="max-width: 540px; margin: 0 0 20px; color: var(--ink);">
      Tucked into every lid, a printed card with room for the recipient&apos;s name — and for the message you want them to carry home.
    </p>
    <p class="body" style="max-width: 540px; margin: 0; color: var(--ink-soft);">
      We set type and pack each note by hand so it reads like a small letter, not a form. Pair it with HR-led campaigns, manager thank-yous, or a single heartfelt line from leadership.
    </p>
  </div>

  <!-- right: open-box horizontal photo -->
  <div class="photo" style="
    background-image: url('assets/box-open-horizontal.png');
    background-size: cover;
    background-position: center;
  "></div>
`;

export default function Slide11ANoteInside() {
  return (
    <section
      data-label="11 A Note Inside"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1fr 1.28fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
