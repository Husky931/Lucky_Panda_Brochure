const slideHtml = `
  <div style="padding: 126px 88px 112px 130px; display:flex; flex-direction:column; justify-content:center;">
    <div class="eyebrow" style="margin-bottom: 26px;">First Stop</div>

    <div style="margin-bottom: 24px;">
      <span class="serif-italic" style="font-size:62px; color: var(--ink); line-height:1.1;">Bonjour,</span><br/>
      <span class="script-display" style="font-size:166px; line-height:0.82; display:inline-block; margin-top:-12px; transform:translateX(8px);">France</span>
    </div>


    <p class="body-lg" style="max-width: 640px; margin: 0 0 34px; font-style: italic;">
      A morning in Lyon. The smell of fresh butter, the clink of a coffee cup,
      the slow click of shoes on cobblestone.
    </p>

  </div>

  <div style="padding: 112px 118px 118px 28px; display:flex; align-items:center;">
    <div style="position:relative; width:100%;">
      <div class="photo photo-frame" style="
        width:100%;
        aspect-ratio: 990 / 1280;
        background-image:url('/assets/france.jpg');
        background-position:center;
        transform:rotate(2deg);
      "></div>

      <div style="
        position:absolute;
        left:-54px;
        bottom:-34px;
        width:424px;
        background:var(--paper);
        padding:20px 32px 22px;
        border:1px solid var(--hairline);
        transform:rotate(-3deg);
        box-shadow:0 18px 34px -18px rgba(43,31,26,0.26);
      ">
        <div style="font-family:'Caveat'; font-size:34px; line-height:1; color:var(--magenta);">French-inspired snack box</div>
        <div style="font-family:'Inter'; font-size:14px; letter-spacing:0.22em; text-transform:uppercase; color:var(--ink-soft); margin-top:8px;">sweet and savory treats</div>
      </div>
    </div>
  </div>
`;

export default function Slide04FirstStopFrance() {
  return (
    <section
      data-label="05 First Stop France"
      className="paper-grain"
      style={{
        display: "grid",
        gridTemplateColumns: "0.86fr 1.14fr",
        background: "var(--cream)",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
