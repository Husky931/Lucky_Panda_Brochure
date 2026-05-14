const slideHtml = `
  <!-- left: editorial -->
  <div class="paper-grain" style="padding: 150px 110px 150px 130px; display:flex; flex-direction:column; justify-content:center; background: var(--rose-tint);">

    <div class="eyebrow" style="margin-bottom: 26px;">Personal message</div>

    <h2 class="serif-display" style="font-size: 76px; line-height: 1.02; margin: 0 0 18px; color: var(--ink);">
      2 &mdash; A Personal Employee Note
    </h2>

    <div style="width: full; height: 1px; background: var(--gold-soft); margin-bottom: 32px; margin-top: 5px; "></div>


    <p class="body-lg" style="max-width: 540px; margin: 0 0 20px; margin-top: 50px; color: var(--ink);">
      Each box is delivered with a personalized card with the recipient&apos;s name — and for the message you want them to carry home.
    </p>
    <p class="body" style="max-width: 540px; margin: 0; margin-top: 30px;  color: var(--ink-soft);">
    Besides positive and encouraging messages, the note can contain HR-led campaigns, monthly goals, manager thank-yous, or a single heartfelt line from leadership.
    </p>
  </div>

  <!-- right: open-box horizontal photo -->
  <div class="photo" style="
    background-image: url('/used/slide_08/personal_note.png');
    background-size: cover;
    background-position: center;
  "></div>
`;

export default function Slide08ANoteInside() {
  return (
    <section
      data-label="08 2 — A Personal Employee Note"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1fr 1.28fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
