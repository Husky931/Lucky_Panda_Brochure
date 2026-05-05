const slideHtml = `
  <!-- bottom: founders image, revealed under the curved story panel -->
  <div class="photo" style="
    position:absolute;
    inset:0;
    background-image:
      linear-gradient(180deg, rgba(43,31,26,0.04) 0%, rgba(43,31,26,0.08) 46%, rgba(43,31,26,0.16) 100%),
      url('/founders.jpg');
    background-position: center 46%;
    background-size: cover;
  "></div>

  <!-- hand-cut top field -->
  <svg viewBox="0 0 1920 1080" preserveAspectRatio="none" style="position:absolute; inset:0; width:100%; height:100%; z-index:1;" aria-hidden="true">
    <path d="M0 0H1920V0C1742 -129 1635 -90 1480 -43C1320 6 1228 24 1060 115C900 202 812 319 642 373C486 422 374 420 214 485C122 522 55 597 0 715Z" fill="var(--cream)"/>
    <path d="M0 715C55 597 122 522 214 485C374 420 486 422 642 373C812 319 900 202 1060 115C1228 24 1320 6 1480 -43C1635 -90 1742 -129 1920 -160" fill="none" stroke="var(--magenta)" stroke-width="3" stroke-linecap="round" opacity="0.58"/>
    <path d="M0 687C66 575 136 510 230 467C380 398 490 401 648 351C820 297 906 183 1070 96C1232 10 1330 -14 1486 -63C1644 -113 1754 -151 1920 -181" fill="none" stroke="var(--gold)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="10 16" opacity="0.42"/>
  </svg>

  <!-- top: story copy -->
  <div style="
    position:absolute;
    z-index:2;
    top:94px;
    left:130px;
    right:220px;
    display:grid;
    grid-template-columns: 1fr;
    gap:72px;
    align-items:start;
  ">
    <div>
      <h2 class="serif-display" style="font-size:92px; line-height:0.98; margin:0; color:var(--ink);">
        A story
      </h2>
      <h2 class="script-display" style="font-size:138px; line-height:0.76; margin:-4px 0 0 52px; max-width:620px;">
        in every
      </h2>
      <h2 class="script-display" style="font-size:150px; line-height:0.76; margin:3px 0 0 133px; max-width:260px;">
        box
      </h2>
    </div>
  </div>

  <!-- bottom-right: story callout -->
  <div style="
    position:absolute;
    z-index:2;
    right:42px;
    bottom:38px;
    width:720px;
    min-height:356px;
    padding:70px 88px 72px 96px;
    border-radius:50%;
    background:#faf4ed;
    border:1px solid rgba(200,57,95,0.2);
    box-shadow:0 28px 70px -34px rgba(43,31,26,0.42), inset 0 0 0 10px rgba(255,253,248,0.52);
    display:flex;
    flex-direction:column;
    justify-content:center;
  ">
      <p style="max-width:540px; margin:0; margin-left: 6px; font-family:'Cormorant Garamond'; font-size:32px; line-height:1.22; color:var(--ink-soft); font-style:italic; ">
        <span style="font-family:'Playfair Display'; font-size:37px; line-height:1; color:var(--ink); font-style:italic;">Lucky Panda</span>
        is a creative gifting studio in Shanghai. We design experiential,
        story-driven events that companies use to connect their teams
        <span style="color:var(--magenta);"> — gifts that feel like an experience to remember,</span>
        not a corporate transaction.
      </p>
  </div>
`;

export default function Slide02WhoWeAre() {
  return (
    <section
      data-label="02 Who We Are"
      className="paper-grain"
      style={{
        background: "var(--cream)",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
