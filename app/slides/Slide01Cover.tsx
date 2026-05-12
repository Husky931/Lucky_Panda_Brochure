const slideHtml = `
  <!-- Left: typography composition -->
  <div style="padding: 110px 80px 100px 130px; display:flex; flex-direction:column; justify-content:space-between; position:relative;">
    <!-- top: stamp + meta -->


    <!-- center: title -->
    <div style="position:absolute; top:50%; left:130px; right:80px; transform:translateY(-50%);">
      <div class="eyebrow" style="margin-bottom: 28px;">Creative Gifting Studio</div>

      <h1 class="serif-display" style="font-size: 132px; line-height: 0.95; margin: 0 0 8px; color: var(--ink);">
        Lucky
      </h1>
      <h1 class="script-display" style="font-size: 230px; margin: -32px 0 0; transform: translateX(20px);">
        Panda
      </h1>


    </div>

    <!-- bottom: tagline strip -->
    <div style="position:absolute; left:130px; right:80px; bottom:100px; display:flex; align-items:center; gap:28px;">
      <div style="font-family:'Source Sans 3'; font-size:18px; letter-spacing:0.3em; text-transform:uppercase; color:var(--ink); font-weight:600;">Company Introduction</div>
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
