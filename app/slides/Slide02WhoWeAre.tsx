const slideHtml = `
  <div style="padding: 130px 90px 110px 130px; display:flex; flex-direction:column; justify-content:center;">
    <div class="eyebrow" style="margin-bottom: 28px;">Chapter One</div>

    <div style="margin-bottom: 28px;">
      <span class="serif-italic" style="font-size:62px; color: var(--ink); line-height:1.1;">A Story</span><br/>
      <span class="script-display" style="font-size:160px; line-height:0.9; display:inline-block; margin-top: -20px; transform: translateX(8px);">in every box</span>
    </div>

    <div class="fleur" style="margin: 14px 0 44px; max-width: 480px; justify-content: flex-start;">
      <span style="color:var(--magenta);"><svg width="22" height="22"><use href="#fleur"/></svg></span>
    </div>

    <p class="body-lg" style="max-width: 620px; margin: 0 0 36px;">
      Lucky Panda is a creative gifting studio in Shanghai. We design experiential,
      story-driven boxes that companies send to their teams — gifts that feel like
      an invitation to travel, not a corporate transaction.
    </p>
    <p class="body" style="max-width: 620px; margin: 0; font-style: italic; color: var(--ink);">
      Founded by two foreigners who fell in love with China — and now help Chinese
      companies share the world with their teams, one box at a time.
    </p>
  </div>

  <!-- right: founders narrative photo -->
  <div style="padding: 130px 130px 130px 30px; display:flex; align-items:center;">
    <div style="position: relative; width: 100%;">
      <div class="photo photo-frame" style="
        width: 100%; aspect-ratio: 4/5;
        background-image: url('assets/founders-balcony.jpg');
        background-position: center 30%;
        transform: rotate(2deg);
      "></div>
      <!-- caption tag -->
      <div style="position:absolute; bottom:-30px; left:-40px; background: var(--paper); padding: 18px 28px; border:1px solid var(--hairline); transform: rotate(-3deg); box-shadow: 0 12px 24px -12px rgba(0,0,0,0.2);">
        <div style="font-family:'Caveat'; font-size: 28px; color: var(--magenta);">Tom &amp; Léo · Shanghai, 2025</div>
        <div style="font-family:'Inter'; font-size: 14px; letter-spacing: 0.22em; text-transform:uppercase; color: var(--ink-soft); margin-top: 4px;">at the packing table</div>
      </div>
    </div>
  </div>
`;

export default function Slide02WhoWeAre() {
  return (
    <section
      data-label="02 Who We Are"
      className="paper-grain"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "var(--cream)",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
