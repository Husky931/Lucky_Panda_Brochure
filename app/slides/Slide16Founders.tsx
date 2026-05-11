const slideHtml = `
  <!-- left: photo -->
  <div style="padding: 130px 60px 130px 130px; display:flex; align-items:center;">
    <div style="position: relative; width: 100%;">
      <div style="position:absolute; inset: -20px; background: var(--rose-tint); transform: rotate(-2deg);"></div>
      <div class="photo photo-frame" style="
        position: relative;
        width: 100%; aspect-ratio: 1/1;
        background-image: url('assets/founders.png');
        background-position: center 25%;
      "></div>
    </div>
  </div>

  <!-- right: bio -->
  <div style="padding: 130px 130px 130px 80px; display:flex; flex-direction:column; justify-content:center;">
    <div class="eyebrow" style="margin-bottom: 24px;">The Studio</div>

    <h2 class="serif-display" style="font-size: 84px; line-height:1.0; margin: 0 0 16px; color: var(--ink);">
      Two foreigners.
    </h2>
    <h2 class="script-display" style="font-size: 140px; line-height:0.9; margin: -8px 0 36px;">
      One Shanghai.
    </h2>

    <p class="body-lg" style="margin: 0 0 24px; max-width: 580px;">
      We came to Shanghai chasing curiosity, stayed for the friendships,
      and started Lucky Panda because the gifts we kept wanting to give
      didn't exist here yet.
    </p>
    <p class="body" style="margin: 0 0 36px; max-width: 580px;">
      We design every box ourselves — the curation, the labels, the inside-lid
      message, the ribbon. We pack them by hand, in small batches. When you order
      one, you'll meet one of us.
    </p>

    <!-- signatures -->
    <div style="display:flex; gap: 70px; align-items:center; margin-top: 16px;">
      <div>
        <div style="font-family:'Allura'; font-size: 60px; color: var(--magenta); line-height: 0.9;">Tom</div>
        <div style="font-family:'Inter'; font-size: 14px; letter-spacing:0.3em; text-transform:uppercase; color: var(--ink-soft); margin-top: 4px;">Co-founder · Curation</div>
      </div>
      <div style="width: 1px; height: 70px; background: var(--hairline);"></div>
      <div>
        <div style="font-family:'Allura'; font-size: 60px; color: var(--magenta); line-height: 0.9;">Léo</div>
        <div style="font-family:'Inter'; font-size: 14px; letter-spacing:0.3em; text-transform:uppercase; color: var(--ink-soft); margin-top: 4px;">Co-founder · Design &amp; Ops</div>
      </div>
    </div>
  </div>
`;

export default function Slide16Founders() {
  return (
    <section
      data-label="16 Founders"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
