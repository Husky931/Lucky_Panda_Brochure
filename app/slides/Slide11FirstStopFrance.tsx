const slideHtml = `
  <div style="padding: 112px 88px 112px 130px; display:flex; flex-direction:column; justify-content:center;">
    <div class="eyebrow" style="margin-bottom: 26px;">First Stop</div>

    <div style="margin-bottom: 0;">
      <span class="serif-italic" style="font-size:62px; color: var(--ink); line-height:1.1;">Bonjour,</span><br/>
      <span class="script-display" style="font-size:166px; line-height:0.82; display:inline-block; margin-top:-12px; transform:translateX(8px);">France</span>
    </div>
  </div>

  <div style="padding: 60px 118px 150px 28px; display:flex; align-items:center; justify-content:center;">
    <div style="position:relative; width:78%;">
      <div class="photo photo-frame" style="
        width:100%;
        aspect-ratio: 990 / 1280;
        background-image:url('/used/slide_11/france.jpg');
        background-position:center;
        transform:rotate(2deg);
      "></div>
    </div>
  </div>
`;

export default function Slide11FirstStopFrance() {
  return (
    <section
      data-label="11 First Stop France"
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
