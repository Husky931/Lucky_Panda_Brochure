const slideHtml = `
  <!-- Left: typography composition -->
  <div style="padding: 110px 80px 100px 130px; display:flex; flex-direction:column; justify-content:space-between; position:relative;">
    <!-- top: stamp + meta -->
    <div style="display:flex; align-items:center; gap:36px;">
      <div class="stamp">
        <div>
          Fait avec
          <span class="heart" style="color:var(--magenta);">
            <svg width="20" height="20"><use href="#heart"/></svg>
          </span>
          Pour Vous
        </div>
      </div>
      <div style="font-family: 'Inter'; font-size: 18px; letter-spacing: 0.32em; color: var(--ink-soft); text-transform: uppercase;">
        Shanghai · Est. 2025
      </div>
    </div>

    <!-- center: title -->
    <div style="margin-top: 40px;">
      <div class="eyebrow" style="margin-bottom: 28px;">A Storytelling Gifting Studio</div>

      <h1 class="serif-display" style="font-size: 132px; line-height: 0.95; margin: 0 0 8px; color: var(--ink);">
        Lucky
      </h1>
      <h1 class="script-display" style="font-size: 230px; margin: -32px 0 0; transform: translateX(20px);">
        Panda
      </h1>

      <div class="fleur" style="max-width: 540px; margin: 36px 0 32px;">
        <span><svg width="22" height="22" style="color:var(--magenta);"><use href="#fleur"/></svg></span>
      </div>

      <p class="serif-italic" style="font-size: 36px; color: var(--ink-soft); margin: 0; max-width: 600px; line-height: 1.35;">
        Every gift, a small journey.<br/>
        Every box, a story to keep.
      </p>
    </div>

    <!-- bottom: tagline strip -->
    <div style="display:flex; align-items:center; gap:28px; padding-top: 36px; border-top: 1px solid var(--hairline);">
      <div style="font-family:'Inter'; font-size:18px; letter-spacing:0.3em; text-transform:uppercase; color:var(--ink); font-weight:600;">Company Introduction</div>
      <div style="flex:1; height:1px; background: var(--hairline);"></div>
      <div style="font-family:'Playfair Display'; font-style:italic; font-size:22px; color:var(--magenta);">No. 01 / 2026</div>
    </div>
  </div>

  <!-- Right: hero photograph -->
  <div style="position:relative; padding: 80px 100px 80px 0;">
    <div style="position:absolute; inset:80px 100px 80px 0; background: var(--rose-tint);"></div>
    <div class="photo photo-frame" style="
        position: relative;
        width: 100%; height: 100%;
        background-image: url('assets/box-hero-single.png');
        transform: rotate(-2deg);
        margin-top: -24px;
    "></div>

    <!-- floating paws, brand cue -->
    <svg style="position:absolute; top:140px; right:130px; width:60px; height:60px; color:var(--magenta); transform: rotate(-12deg);"><use href="#paw"/></svg>
    <svg style="position:absolute; bottom:160px; left:30px; width:48px; height:48px; color:var(--magenta); transform: rotate(18deg); opacity:0.8;"><use href="#paw"/></svg>
  </div>
`;

export default function Slide01Cover() {
  return (
    <section
      data-label="01 Cover"
      className="paper-grain"
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 1fr",
        background: "var(--cream)",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
