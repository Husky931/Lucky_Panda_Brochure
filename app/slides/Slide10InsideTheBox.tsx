const slideHtml = `
  <!-- left: open-box photo with framing -->
  <div style="display:flex; flex-direction:column; justify-content:center;">
    <div class="eyebrow" style="margin-bottom: 22px;">Curation</div>
    <h2 class="serif-display" style="font-size: 84px; line-height: 1.0; margin: 0 0 20px; color: var(--ink);">
      Inside <span class="serif-italic">the box</span>
    </h2>
    <p class="body" style="max-width: 540px; margin: 0 0 36px;">
      A curated selection of authentic French treats — sweet, savory, and quietly indulgent. Wrapped in red, sealed with a paw, and ready to land on a desk.
    </p>

    <div class="photo photo-frame" style="
      aspect-ratio: 4/3;
      background-image: url('assets/box-open-flatlay.png');
      background-position: center;
    "></div>
  </div>

  <!-- right: three editorial notes -->
  <div style="
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap: 34px;
    padding: 18px 12px 0 20px;
  ">
    <div style="width: min(660px, 100%); margin-left:auto;">
      <ul style="
        list-style:disc;
        padding:0 0 0 32px;
        margin:0;
        display:flex;
        flex-direction:column;
        gap: 12px;
        font-family:'Playfair Display', serif;
        font-size: 30px;
        line-height:1.14;
        color:var(--ink);
      ">
        <li>Premium chocolates &amp; truffles</li>
        <li>Gourmet biscuits &amp; mini cakes</li>
        <li>Artisan jams, honey &amp; confections</li>
        <li>Handpicked, imported from France</li>
      </ul>
      <div style="width:100%; height:2px; background:var(--ink); opacity:0.9; margin-top: 38px;"></div>
    </div>

    <div style="width: min(660px, 100%); margin-left:auto;">
      <h3 class="serif-display" style="font-size: 40px; line-height:1.04; margin:0 0 14px; color:var(--ink);">
        A message for each employee.
      </h3>
      <p class="body-tight" style="font-size: 22px; line-height:1.48; margin:0; max-width:620px;">
        Every box can include a printed card addressed by name, with the recipient's team,
        milestone, or thank-you message handled individually for HR and manager-led campaigns.
      </p>
      <div style="width:100%; height:2px; background:var(--ink); opacity:0.9; margin-top: 38px;"></div>
    </div>

    <div style="width: min(660px, 100%); margin-left:auto;">
      <h3 class="serif-display" style="font-size: 40px; line-height:1.04; margin:0 0 14px; color:var(--ink);">
        A short video from leadership.
      </h3>
      <p class="body-tight" style="font-size: 22px; line-height:1.48; margin:0; max-width:620px;">
        A QR card can open a recorded greeting from the CEO or manager, turning the box
        into a direct recognition moment for remote teams, anniversaries, onboarding, or year-end thanks.
      </p>
    </div>
  </div>
`;

export default function Slide10InsideTheBox() {
  return (
    <section
      data-label="09 Inside The Box"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1.05fr 1fr",
        padding: "110px 130px",
        gap: "70px",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
