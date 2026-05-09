const slideHtml = `
  <div style="padding: 116px 0 94px 116px; display:flex; flex-direction:column; justify-content:center;">
    <p class="body-lg" style="
      max-width:820px;
      margin:0 0 42px;
      font-size:34px;
      line-height:1.42;
    ">
      Every month, each member of your team receives a personalized,
      country-specific box filled with sweets, candies, and small cultural
      keepsakes from that destination.
    </p>

    <ul style="
      list-style:none;
      padding:0;
      margin:0;
      display:flex;
      flex-direction:column;
      gap:22px;
      max-width:790px;
      font-family:'Playfair Display', serif;
      font-size:31px;
      line-height:1.18;
      color:var(--ink);
    ">
      <li style="display:flex; align-items:flex-start;">
        <span class="dot-mark" style="width:11px; height:11px; margin-top:13px;"></span>
        Personalized messages for every recipient
      </li>

      <li style="display:flex; align-items:flex-start;">
        <span class="dot-mark" style="width:11px; height:11px; margin-top:13px;"></span>
        QR video or AR note from a CEO or manager
      </li>

      <li style="display:flex; align-items:flex-start;">
        <span class="dot-mark" style="width:11px; height:11px; margin-top:13px;"></span>
        Co-branded sleeves, ribbons, lid messages, belly bands, or boxes
      </li>

      <li style="display:flex; align-items:flex-start;">
        <span class="dot-mark" style="width:11px; height:11px; margin-top:13px;"></span>
        Company keepsakes such as keychains, notebooks, stickers, pins, or desk cards
      </li>

      <li style="display:flex; align-items:flex-start;">
        <span class="dot-mark" style="width:11px; height:11px; margin-top:13px;"></span>
        Destination story card with tasting notes and cultural cues
      </li>
    </ul>
  </div>

  <div style="position:relative; min-height:100%; display:flex; align-items:center; justify-content:center; padding:92px 116px 92px 24px;">
    <div style="position:relative; width:704px; height:820px;">
      <div style="
        position:absolute;
        left:44px;
        top:82px;
        width:520px;
        height:610px;
        background:var(--rose-tint);
        border:1px solid rgba(200,57,95,0.16);
        transform:rotate(-4deg);
      "></div>

      <div class="photo photo-frame" style="
        position:absolute;
        right:10px;
        top:50px;
        width:604px;
        aspect-ratio:1672 / 941;
        background-image:url('/what_is_LP/france.png');
        background-position:center;
        transform:rotate(3.5deg);
        z-index:2;
      "></div>

      <div class="photo photo-frame" style="
        position:absolute;
        left:2px;
        top:330px;
        width:548px;
        aspect-ratio:1672 / 941;
        background-image:url('/what_is_LP/france4.png');
        background-position:center;
        transform:rotate(-6deg);
        z-index:3;
      "></div>

      <div class="photo photo-frame" style="
        position:absolute;
        right:22px;
        bottom:28px;
        width:520px;
        aspect-ratio:1672 / 941;
        background-image:url('/what_is_LP/how_we_make_it_yours.png');
        background-position:center;
        transform:rotate(5deg);
        z-index:4;
      "></div>

      <div class="stamp" style="
        position:absolute;
        left:12px;
        top:124px;
        width:136px;
        height:136px;
        font-size:12px;
        z-index:5;
        background:var(--paper);
      ">
        <div>One Team<span class="heart"><svg width="14" height="14"><use href="#heart"/></svg></span>One Trip</div>
      </div>

      <div style="
        position:absolute;
        right:82px;
        bottom:0;
        z-index:6;
        background:var(--paper);
        border:1px solid var(--hairline);
        padding:18px 28px 19px;
        transform:rotate(-2deg);
        box-shadow:0 18px 34px -20px rgba(43,31,26,0.3);
      ">
        <div style="font-family:'Caveat'; font-size:34px; color:var(--magenta); line-height:1;">country of the month</div>
        <div style="font-family:'Inter'; font-size:13px; letter-spacing:0.24em; text-transform:uppercase; color:var(--ink-soft); margin-top:6px;">personalized for every employee</div>
      </div>
    </div>
  </div>
`;

export default function Slide06TravelersBenefits() {
  return (
    <section
      data-label="06 Travelers Benefits"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1.14fr 0.86fr",
        gap: "64px",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
