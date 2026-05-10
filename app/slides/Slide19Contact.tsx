const slideHtml = `
  <div style="height:100%; display:grid; grid-template-columns: 1.1fr 1fr;">
    <!-- left -->
    <div style="padding: 130px 90px 130px 130px; display:flex; flex-direction:column; justify-content:center;">
      <div class="eyebrow" style="margin-bottom: 28px;">Let's begin</div>

      <h2 class="serif-display" style="font-size: 96px; line-height: 1.0; margin: 0 0 4px; color: var(--ink);">
        Send the
      </h2>
      <h2 class="script-display" style="font-size: 220px; line-height: 0.9; margin: -10px 0 36px;">
        first box.
      </h2>

      <p class="body-lg" style="max-width: 600px; margin: 0 0 48px;">
        Tell us who you'd like to surprise — a team, a client, a single new hire.
        We'll reply within a working day with three options to choose from.
      </p>

      <!-- contact rows -->
      <div style="display:flex; flex-direction: column; gap: 18px; font-family:'Playfair Display'; font-size: 26px; color: var(--ink);">
        <div style="display:flex; gap: 26px; align-items:center;">
          <span style="font-family:'Inter'; font-size: 13px; letter-spacing:0.32em; text-transform:uppercase; color: var(--ink-soft); width: 100px;">Email</span>
          hello@luckypandatreats.com
        </div>
        <div style="display:flex; gap: 26px; align-items:center;">
          <span style="font-family:'Inter'; font-size: 13px; letter-spacing:0.32em; text-transform:uppercase; color: var(--ink-soft); width: 100px;">Web</span>
          www.luckypandatreats.com
        </div>
        <div style="display:flex; gap: 26px; align-items:center;">
          <span style="font-family:'Inter'; font-size: 13px; letter-spacing:0.32em; text-transform:uppercase; color: var(--ink-soft); width: 100px;">Studio</span>
          Jing'an, Shanghai · 上海市静安区
        </div>
      </div>

      <div style="margin-top: 64px;">
        <a class="cta-pill">
          Begin a conversation
          <span style="display:inline-block; transform: translateY(-1px);">→</span>
        </a>
      </div>
    </div>

    <!-- right: WeChat QR + closing -->
    <div style="padding: 130px 130px 130px 30px; display:flex; flex-direction:column; justify-content:center; align-items:center; gap: 40px; position: relative;">
      <div class="frame" style="padding: 56px 60px; text-align:center;">
        <div class="eyebrow" style="font-size: 16px; margin-bottom: 22px;">Scan on WeChat</div>
        <div class="qr-box" style="margin: 0 auto;"></div>
        <div style="margin-top: 22px; font-family:'Playfair Display'; font-style: italic; font-size: 22px; color: var(--ink-soft);">@LuckyPandaTreats</div>
      </div>

      <!-- closing signature -->
      <div style="text-align:center; margin-top: 18px;">
        <div style="font-family:'Allura'; font-size: 80px; color: var(--magenta); line-height: 1;">À très vite</div>
        <div style="font-family:'Inter'; font-size: 14px; letter-spacing:0.32em; text-transform:uppercase; color: var(--ink-soft); margin-top: 10px;">— Tom &amp; Léo, Lucky Panda</div>
      </div>

      <!-- floating stamps -->
      <div class="stamp" style="position:absolute; top: 80px; right: 90px; width: 130px; height: 130px; font-size: 12px;">
        <div>Petit Plaisir<span class="heart"><svg width="14" height="14"><use href="#heart"/></svg></span>Grande Joie</div>
      </div>
    </div>
  </div>
`;

export default function Slide19Contact() {
  return (
    <section
      data-label="19 Contact"
      className="paper-grain"
      style={{
        background: "linear-gradient(180deg, var(--cream) 0%, var(--rose-tint) 100%)",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
