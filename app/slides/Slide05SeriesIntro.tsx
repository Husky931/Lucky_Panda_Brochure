const slideHtml = `
  <div style="
    position:absolute;
    left:132px;
    top:246px;
    max-width:640px;
  ">
    <h2 style="margin:0; color:var(--ink);">
      <span class="serif-display" style="
        display:block;
        font-size:58px;
        line-height:1.05;
        font-weight:500;
        letter-spacing:0;
      ">Introducing our series:</span>

      <span class="serif-display" style="
        display:block;
        margin-top:24px;
        font-size:80px;
        line-height:0.98;
        font-weight:600;
        letter-spacing:0;
      ">Lucky Panda</span>

      <span class="script-display" style="
        display:block;
        margin-top:-4px;
        margin-left:8px;
        font-size:142px;
        line-height:0.9;
      ">Around the World</span>
    </h2>

    <p style="
      margin:52px 0 0;
      max-width:560px;
      font-family:'Inter', sans-serif;
      font-size:30px;
      line-height:1.48;
      font-weight:300;
      color:var(--ink-soft);
      letter-spacing:0.01em;
    ">
      New month, new country. A small joy your team will start to expect.
    </p>
  </div>

  <div style="
    position:absolute;
    left:790px;
    right:64px;
    top:0;
    bottom:0;
    display:grid;
    place-items:center;
  ">
    <div style="
      position:relative;
      width:1100px;
      transform:rotate(-7deg);
    ">
      <div style="
        position:absolute;
        inset:-24px;
        transform:rotate(4deg);
      "></div>

      <div class="photo-frame" style="
        position:relative;
        width:100%;
        aspect-ratio:1672 / 941;
        background:var(--paper);
        border-width:7px;
        box-shadow:0 28px 64px -28px rgba(43,31,26,0.34);
        overflow:hidden;
      ">
        <img src="/uploads/team_going_next.png" alt="" style="
          display:block;
          width:100%;
          height:100%;
          object-fit:contain;
        "/>
      </div>
    </div>
  </div>
`;

export default function Slide05SeriesIntro() {
  return (
    <section
      data-label="05 Series Intro"
      className="paper-grain"
      style={{
        background: "var(--cream)",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
