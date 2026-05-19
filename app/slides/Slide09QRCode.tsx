const slideHtml = `
  <!-- left: QR story image -->
  <div style="
    padding: 68px 70px 68px 122px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: linear-gradient(180deg, var(--cream) 0%, var(--rose-tint) 100%);
  ">
    <div style="position:relative; width: min(510px, 100%);">
      <div class="print-hide" style="
        position:absolute;
        inset: -20px;
        background: var(--paper);
        border: 1px solid var(--gold-soft);
        transform: rotate(-1.7deg);
        box-shadow: 0 28px 70px -36px rgba(43,31,26,0.35);
      "></div>
      <img
        src="/used/slide_09/qr_code.png"
        alt="Lucky Panda QR code video message card"
        style="
          position:relative;
          display:block;
          width:100%;
          height:auto;
          box-sizing:border-box;
          border: 8px solid var(--paper);
          box-shadow: 0 30px 70px -34px rgba(43,31,26,0.42);
        "
      />
    </div>
  </div>

  <!-- right: feature copy -->
  <div class="paper-grain" style="
    padding: 90px 130px 90px 88px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background: var(--cream);
  ">
    <div class="eyebrow" style="margin-bottom: 20px;">Digital keepsake</div>

    <h2 class="serif-display" style="font-size: 64px; line-height: 1.04; margin: 0 0 14px; color: var(--ink);">
      3 &mdash; QR code with digital content
    </h2>

    <div style="font-family:'Dancing Script'; font-size: 40px; color: var(--magenta); line-height: 1.08; margin-bottom: 22px; max-width: 600px;">
      From a beautiful box to a digital branded moment.
    </div>

    <p class="body" style="max-width: 650px; margin: 0 0 28px; color: var(--ink-soft);">
      We can place a custom QR card inside each gift, linking recipients to a
      secure video, landing page, campaign page, or any digital experience your
      team wants to create.
    </p>

    <div style="display:grid; grid-template-columns: 1fr; row-gap: 18px; max-width: 690px;">
      <div style="border-top: 1px solid var(--hairline); padding-top: 18px;">
        <h3 class="serif-display" style="font-size: 31px; line-height:1.05; margin:0 0 8px; color:var(--ink);">A message from the CEO or manager</h3>
        <p style="font-family:'Source Sans 3'; font-size:23px; line-height:1.42; margin:0; color:var(--ink-soft);">A personal thank-you, holiday greeting, campaign note, or milestone message that feels direct and human.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 18px;">
        <h3 class="serif-display" style="font-size: 31px; line-height:1.05; margin:0 0 8px; color:var(--ink);">A team highlight reel</h3>
        <p style="font-family:'Source Sans 3'; font-size:23px; line-height:1.42; margin:0; color:var(--ink-soft);">A 60-90 second montage of the year: milestones, event photos, customer wins, internal moments, and music. Especially strong for year-end gifting.</p>
      </div>

      <div style="border-top: 1px solid var(--hairline); padding-top: 18px;">
        <h3 class="serif-display" style="font-size: 31px; line-height:1.05; margin:0 0 8px; color:var(--ink);">Custom digital solutions</h3>
        <p style="font-family:'Source Sans 3'; font-size:23px; line-height:1.42; margin:0; color:var(--ink-soft);">Private landing pages, event invitations, surveys, employee recognition walls, or campaign microsites built around the gift.</p>
      </div>
    </div>
  </div>
`;

export default function Slide09QRCode() {
  return (
    <section
      data-label="09 3 — QR code with digital content"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "0.95fr 1.05fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
