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
      font-family:'Libre Baskerville', serif;
      font-size:31px;
      line-height:1.18;
      color:var(--ink);
    ">
      <li style="display:flex; align-items:flex-start;">
        <span class="dot-mark" style="width:11px; height:11px; margin-top:13px;"></span>
        Unique gathered and imported treats, snacks and items from the country of the month
      </li>

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
        Destination story card with tasting notes and cultural cues
      </li>

      <li style="display:flex; align-items:flex-start;">
        <span class="dot-mark" style="width:11px; height:11px; margin-top:13px;"></span>
        Additional company branded keepsakes such as keychains, notebooks, stickers, pins, or desk cards
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
        background-image:url('assets/box-open-flatlay.png');
        background-position:center;
        transform:rotate(5deg);
        z-index:4;
      "></div>


    </div>
  </div>
`;

export default function Slide05TravelersBenefits() {
  return (
    <section
      data-label="05 Travelers Benefits"
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
