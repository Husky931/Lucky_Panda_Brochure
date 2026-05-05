const slideHtml = `
  <!-- left: text panel -->
  <div style="padding: 140px 90px 140px 130px; display:flex; flex-direction:column; justify-content:center; position:relative;">
    <div style="font-family:'Inter'; font-size: 22px; font-weight:600; letter-spacing:0.32em; text-transform:uppercase; color: var(--rose-tint-2); margin-bottom: 28px;">
      First Stop
    </div>

    <h2 class="script-display" style="font-size: 280px; line-height: 0.85; margin: 0 0 0; color: var(--paper);">
      France
    </h2>

    <div class="fleur" style="margin: 36px 0 36px; max-width: 480px; justify-content: flex-start;">
      <span style="color: var(--rose-tint-2);"><svg width="24" height="24"><use href="#fleur"/></svg></span>
    </div>

    <p class="serif-italic" style="font-size: 36px; line-height: 1.4; color: var(--rose-tint); max-width: 560px; margin: 0 0 28px;">
      A morning in Lyon. The smell of fresh butter,
      the clink of a tin coffee cup, the slow click
      of shoes on cobblestone.
    </p>
    <p class="body" style="color: rgba(251,244,237,0.7); max-width: 540px; margin: 0;">
      Our first journey leaves from a small bakery in the 7ème, follows the Saône,
      and arrives in your office wrapped in red.
    </p>
  </div>

  <!-- right: cinematic photo (use box-in-livingroom because it has cinematic warm light, or fall back) -->
  <div style="position:relative;">
    <div class="photo" style="
      position:absolute; inset:0;
      background-image:
        linear-gradient(110deg, rgba(43,22,17,0.55) 0%, rgba(43,22,17,0) 40%),
        linear-gradient(0deg, rgba(43,22,17,0.45) 0%, rgba(43,22,17,0) 35%),
        url('assets/box-in-livingroom.jpg');
    "></div>
    <!-- caption -->
    <div style="position:absolute; bottom: 60px; right: 80px; text-align:right;">
      <div style="font-family:'Playfair Display'; font-style:italic; font-size: 26px; color: var(--paper); opacity: 0.95;">
        — Bonjour, Shanghai
      </div>
      <div style="font-family:'Inter'; font-size: 14px; letter-spacing:0.32em; text-transform:uppercase; color: var(--rose-tint-2); margin-top: 8px;">
        a small piece of France, by post
      </div>
    </div>
  </div>
`;

export default function Slide04FirstStopFrance() {
  return (
    <section
      data-label="04 First Stop France"
      style={{
        background: "linear-gradient(180deg, #2b1611 0%, #4a1a1f 50%, #2b1611 100%)",
        color: "var(--paper)",
        display: "grid",
        gridTemplateColumns: "1fr 1.15fr",
        overflow: "hidden",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
