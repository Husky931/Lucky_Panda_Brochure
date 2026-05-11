const slideHtml = `
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items:end;">
    <div>
      <div class="eyebrow" style="margin-bottom: 24px;">Coming soon</div>
      <h2 class="serif-display" style="font-size: 88px; line-height:1; margin: 0; color: var(--ink);">
        Where the Panda
      </h2>
      <h2 class="script-display" style="font-size: 180px; line-height: 0.9; margin: -10px 0 0;">goes next.</h2>
    </div>
    <p class="body-lg" style="max-width: 560px; margin: 0 0 28px;">
      Each box is a journey. Here's where the next ones take you. Plan ahead,
      reserve early, or design a private edition we haven't even drawn yet.
    </p>
  </div>

  <!-- 6 country tiles -->
  <div style="display:grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: 1fr 1fr; gap: 26px;">
    <!-- Japan (featured larger) -->
    <div class="country-tile" style="
      grid-column: span 2;
      background-image:
        linear-gradient(180deg, rgba(43,31,26,0) 30%, rgba(43,31,26,0.85) 100%),
        linear-gradient(135deg, #f4d4d8 0%, #d8a3aa 100%);
      min-height: 280px;
      padding: 36px 40px;
    ">
      <!-- decorative torii -->
      <svg viewBox="0 0 200 200" style="position:absolute; right: 30px; top: 30px; width: 160px; height: 160px; opacity: 0.55;">
        <g fill="none" stroke="#A82547" stroke-width="3">
          <path d="M30 50 Q100 20 170 50 L165 60 L35 60 Z"/>
          <line x1="50" y1="60" x2="50" y2="180"/>
          <line x1="150" y1="60" x2="150" y2="180"/>
          <line x1="20" y1="80" x2="180" y2="80"/>
        </g>
      </svg>
      <div style="display:flex; justify-content:space-between; align-items:flex-end; gap: 24px;">
        <div>
          <div style="font-family:'Inter'; font-size:14px; letter-spacing:0.32em; text-transform:uppercase; color: var(--paper); opacity:0.85; margin-bottom: 10px;">Édition n° 02</div>
          <h3 class="script-display" style="font-size: 88px; color: var(--paper); line-height: 0.9; margin: 0;">Japan</h3>
          <div class="serif-italic" style="font-size: 22px; color: var(--paper); opacity:0.9; margin-top: 6px;">A Tokyo dusk, a Kyoto morning</div>
        </div>
        <div style="text-align:right; color: var(--paper);">
          <div style="font-family:'Inter'; font-size:13px; letter-spacing:0.3em; text-transform:uppercase; opacity:0.7;">Arriving</div>
          <div style="font-family:'Playfair Display'; font-size: 30px; font-weight:600; margin-top: 4px;">July 2026</div>
        </div>
      </div>
      <div style="margin-top: 20px; font-family:'Playfair Display'; font-style:italic; font-size: 20px; color: var(--paper); opacity:0.85;">
        matcha · yuzu chocolate · kyoto tea · mochi · senbei
      </div>
    </div>

    <!-- Italy -->
    <div class="country-tile" style="
      background-image:
        linear-gradient(180deg, rgba(43,31,26,0) 30%, rgba(43,31,26,0.85) 100%),
        linear-gradient(135deg, #d9c89b 0%, #9ba968 100%);
      padding: 30px 32px;
    ">
      <h3 class="script-display" style="font-size: 60px; color: var(--paper); line-height: 0.9; margin: 0;">Italy</h3>
      <div class="serif-italic" style="font-size: 18px; color: var(--paper); opacity:0.9; margin: 4px 0 8px;">Sicilian sunlight, Roman crumbs</div>
      <div style="font-family:'Inter'; font-size:13px; letter-spacing:0.28em; text-transform:uppercase; color: var(--paper); opacity:0.85;">Sept 2026</div>
    </div>

    <!-- Greece -->
    <div class="country-tile" style="
      background-image:
        linear-gradient(180deg, rgba(43,31,26,0) 30%, rgba(43,31,26,0.85) 100%),
        linear-gradient(135deg, #b8d3e0 0%, #5d92b3 100%);
      padding: 30px 32px;
    ">
      <h3 class="script-display" style="font-size: 60px; color: var(--paper); line-height: 0.9; margin: 0;">Greece</h3>
      <div class="serif-italic" style="font-size: 18px; color: var(--paper); opacity:0.9; margin: 4px 0 8px;">Olive groves &amp; white-washed roofs</div>
      <div style="font-family:'Inter'; font-size:13px; letter-spacing:0.28em; text-transform:uppercase; color: var(--paper); opacity:0.85;">Nov 2026</div>
    </div>

    <!-- USA -->
    <div class="country-tile" style="
      background-image:
        linear-gradient(180deg, rgba(43,31,26,0) 30%, rgba(43,31,26,0.85) 100%),
        linear-gradient(135deg, #c9a98e 0%, #6b3a2e 100%);
      padding: 30px 32px;
    ">
      <h3 class="script-display" style="font-size: 56px; color: var(--paper); line-height: 0.9; margin: 0;">United States</h3>
      <div class="serif-italic" style="font-size: 18px; color: var(--paper); opacity:0.9; margin: 4px 0 8px;">Diner coffee &amp; bourbon caramels</div>
      <div style="font-family:'Inter'; font-size:13px; letter-spacing:0.28em; text-transform:uppercase; color: var(--paper); opacity:0.85;">Q1 2027</div>
    </div>

    <!-- Egypt -->
    <div class="country-tile" style="
      background-image:
        linear-gradient(180deg, rgba(43,31,26,0) 30%, rgba(43,31,26,0.85) 100%),
        linear-gradient(135deg, #e0c184 0%, #8a6526 100%);
      padding: 30px 32px;
    ">
      <h3 class="script-display" style="font-size: 60px; color: var(--paper); line-height: 0.9; margin: 0;">Egypt</h3>
      <div class="serif-italic" style="font-size: 18px; color: var(--paper); opacity:0.9; margin: 4px 0 8px;">Cardamom, dates, Nile gold</div>
      <div style="font-family:'Inter'; font-size:13px; letter-spacing:0.28em; text-transform:uppercase; color: var(--paper); opacity:0.85;">Q2 2027</div>
    </div>

    <!-- Brazil -->
    <div class="country-tile" style="
      background-image:
        linear-gradient(180deg, rgba(43,31,26,0) 30%, rgba(43,31,26,0.85) 100%),
        linear-gradient(135deg, #f0c98a 0%, #2f7d4a 100%);
      padding: 30px 32px;
    ">
      <h3 class="script-display" style="font-size: 60px; color: var(--paper); line-height: 0.9; margin: 0;">Brazil</h3>
      <div class="serif-italic" style="font-size: 18px; color: var(--paper); opacity:0.9; margin: 4px 0 8px;">Coffee beans &amp; coastal warmth</div>
      <div style="font-family:'Inter'; font-size:13px; letter-spacing:0.28em; text-transform:uppercase; color: var(--paper); opacity:0.85;">Q3 2027</div>
    </div>
  </div>

  <div style="font-family:'Playfair Display'; font-style:italic; font-size: 24px; color: var(--ink-soft); text-align:center;">
    + Scandinavia, Korea, Spain &amp; more — reservations open year-round.
  </div>
`;

export default function Slide16FutureCountries() {
  return (
    <section
      data-label="16 Future Countries"
      style={{
        background: "var(--cream-2)",
        padding: "110px 130px",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gap: "50px",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
