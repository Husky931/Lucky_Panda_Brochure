const slideHtml = `
  <div style="
    position:absolute;
    inset:0;
    background:
      linear-gradient(90deg, rgba(200,57,95,0.11) 0 1px, transparent 1px) 0 0 / 120px 120px,
      linear-gradient(0deg, rgba(184,147,90,0.10) 0 1px, transparent 1px) 0 0 / 120px 120px,
      var(--cream);
    opacity:0.42;
  "></div>

  <div style="
    position:absolute;
    left:110px;
    top:96px;
    width:520px;
    height:888px;
    border-left:2px solid rgba(200,57,95,0.46);
    border-right:1px solid rgba(184,147,90,0.34);
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:28px 0 30px 56px;
  ">
    <div>
      <div class="eyebrow" style="margin-bottom:38px;">Company Representation</div>
      <h2 class="serif-display" style="font-size:116px; line-height:0.94; margin:0; color:var(--ink);">
        Who
      </h2>
      <h2 class="script-display" style="font-size:188px; line-height:0.75; margin:-8px 0 0 44px;">
        we are
      </h2>
    </div>

    <div style="width:360px;">
      <div class="fleur" style="justify-content:flex-start; margin-bottom:26px;">
        <span><svg width="22" height="22" style="color:var(--magenta);"><use href="#fleur"/></svg></span>
      </div>
      <div style="font-family:'Inter'; font-size:18px; font-weight:700; letter-spacing:0.28em; text-transform:uppercase; color:var(--ink);">
        Shanghai studio
      </div>
    </div>
  </div>

  <div style="
    position:absolute;
    left:720px;
    right:126px;
    top:136px;
    bottom:118px;
    display:flex;
    flex-direction:column;
    justify-content:center;
  ">
    <p style="
      margin:0 0 58px;
      max-width:920px;
      font-family:'Playfair Display';
      font-size:58px;
      line-height:1.16;
      color:var(--ink);
      font-style:italic;
    ">
      <span style="color:var(--magenta);">Lucky Panda</span> is a creative gifting studio in Shanghai.
    </p>

    <p style="
      margin:0 0 62px;
      max-width:910px;
      font-family:'Cormorant Garamond';
      font-size:42px;
      line-height:1.32;
      color:var(--ink-soft);
    ">
      We design experiential, story-driven events that companies use to connect their teams:
      gifts that feel like an experience to remember, not a corporate transaction.
    </p>

    <div style="
      display:grid;
      grid-template-columns:repeat(3, 1fr);
      gap:34px;
      max-width:950px;
    ">
      <div style="border-top:2px solid var(--magenta); padding-top:24px;">
        <div style="font-family:'Inter'; font-size:16px; font-weight:700; letter-spacing:0.24em; text-transform:uppercase; color:var(--magenta); margin-bottom:16px;">01</div>
        <p style="margin:0; font-family:'Cormorant Garamond'; font-size:31px; line-height:1.22; color:var(--ink);">
          Curated gifts with a clear story, from first impression to final note.
        </p>
      </div>
      <div style="border-top:2px solid var(--gold); padding-top:24px;">
        <div style="font-family:'Inter'; font-size:16px; font-weight:700; letter-spacing:0.24em; text-transform:uppercase; color:var(--gold); margin-bottom:16px;">02</div>
        <p style="margin:0; font-family:'Cormorant Garamond'; font-size:31px; line-height:1.22; color:var(--ink);">
          Corporate moments made warmer, more personal, and easier to remember.
        </p>
      </div>
      <div style="border-top:2px solid var(--magenta); padding-top:24px;">
        <div style="font-family:'Inter'; font-size:16px; font-weight:700; letter-spacing:0.24em; text-transform:uppercase; color:var(--magenta); margin-bottom:16px;">03</div>
        <p style="margin:0; font-family:'Cormorant Garamond'; font-size:31px; line-height:1.22; color:var(--ink);">
          Designed in Shanghai for teams, clients, events, and celebrations.
        </p>
      </div>
    </div>
  </div>
`;

export default function Slide03WhoWeAre() {
  return (
    <section
      data-label="03 Who We Are"
      className="paper-grain"
      style={{
        background: "var(--cream)",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
