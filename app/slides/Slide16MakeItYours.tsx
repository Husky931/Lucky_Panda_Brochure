const slideHtml = `
  <div style="display:grid; grid-template-columns: 1.1fr 1fr; gap: 80px; align-items: end;">
    <div>
      <div class="eyebrow" style="margin-bottom: 24px;">Customization</div>
      <h2 class="serif-display" style="font-size: 96px; line-height: 1.0; margin: 0; color: var(--ink);">
        How we make it
        <span class="script-display" style="font-size: 180px; display:inline-block; transform: translateY(20px);"> yours.</span>
      </h2>
    </div>
    <p class="body-lg" style="max-width: 560px; margin: 0 0 24px;">
      Beyond the standard collection, every box can be made to feel like
      <em>yours</em>. We co-design with HR and brand teams — from a single
      personal note to a fully co-branded edition.
    </p>
  </div>

  <!-- 4 customization cards -->
  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 32px;">
    <!-- card 1 -->
    <div class="frame corner-orn" style="padding: 56px 36px 44px; display:flex; flex-direction:column; gap: 18px;">
      <div style="font-family:'Playfair Display'; font-style:italic; font-size: 60px; color: var(--magenta); line-height:1;">i.</div>
      <h3 class="serif-display" style="font-size: 30px; margin: 0; color: var(--ink);">A note from you</h3>
      <p class="body-tight" style="font-size: 19px; margin: 0;">Personal handwritten or printed messages, one per recipient. Your voice, in their hands.</p>
    </div>
    <!-- card 2 -->
    <div class="frame corner-orn" style="padding: 56px 36px 44px; display:flex; flex-direction:column; gap: 18px;">
      <div style="font-family:'Playfair Display'; font-style:italic; font-size: 60px; color: var(--magenta); line-height:1;">ii.</div>
      <h3 class="serif-display" style="font-size: 30px; margin: 0; color: var(--ink);">CEO video, by QR</h3>
      <p class="body-tight" style="font-size: 19px; margin: 0;">A small printed QR card linking to a personal video from leadership — a 30-second thank you.</p>
    </div>
    <!-- card 3 -->
    <div class="frame corner-orn" style="padding: 56px 36px 44px; display:flex; flex-direction:column; gap: 18px;">
      <div style="font-family:'Playfair Display'; font-style:italic; font-size: 60px; color: var(--magenta); line-height:1;">iii.</div>
      <h3 class="serif-display" style="font-size: 30px; margin: 0; color: var(--ink);">Your brand, on the box</h3>
      <p class="body-tight" style="font-size: 19px; margin: 0;">Co-branded sleeves, ribbons, and inside-lid prints. Your logo, our pattern, one keepsake.</p>
    </div>
    <!-- card 4 -->
    <div class="frame corner-orn" style="padding: 56px 36px 44px; display:flex; flex-direction:column; gap: 18px;">
      <div style="font-family:'Playfair Display'; font-style:italic; font-size: 60px; color: var(--magenta); line-height:1;">iv.</div>
      <h3 class="serif-display" style="font-size: 30px; margin: 0; color: var(--ink);">Curation tweaks</h3>
      <p class="body-tight" style="font-size: 19px; margin: 0;">Swap items for dietary needs, add a milestone treat, or commission an entirely new edition.</p>
    </div>
  </div>
`;

export default function Slide16MakeItYours() {
  return (
    <section
      data-label="16 Make It Yours"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        padding: "110px 130px",
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gap: "64px",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
