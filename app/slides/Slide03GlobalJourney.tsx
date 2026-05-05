const slideHtml = `
  <!-- top: eyebrow -->
  <div>
    <div class="eyebrow ink" style="opacity:0.55;">Chapter Two — The Idea</div>
  </div>

  <!-- center: huge title + globe motif -->
  <div style="display:grid; grid-template-columns: 1.15fr 1fr; align-items:center; gap: 80px; margin-top: 30px;">
    <div>
      <h2 class="serif-display" style="font-size: 96px; line-height: 1.05; margin: 0 0 16px; color: var(--ink);">
        Take your team on
      </h2>
      <h2 class="script-display" style="font-size: 220px; line-height: 0.95; margin: -10px 0 30px;">
        a global journey
      </h2>
      <p class="body-lg" style="max-width: 640px; margin: 0;">
        Each Lucky Panda is a country in a box — a curated voyage of flavors,
        rituals, and small everyday joys. The Panda travels the world, and brings
        a little of it back to your team.
      </p>
    </div>

    <!-- right: globe / panda motif -->
    <div style="display:flex; justify-content:center; align-items:center; position:relative;">
      <!-- circular world tile -->
      <div style="position:relative; width: 540px; height: 540px;">
        <!-- outer dotted ring -->
        <div style="position:absolute; inset:0; border-radius:50%; border: 2px dashed var(--magenta); opacity:0.5;"></div>
        <!-- inner cream ring with continent dots -->
        <div style="position:absolute; inset: 26px; border-radius:50%; background: var(--paper); border: 1px solid var(--hairline); display:grid; place-items:center; box-shadow: inset 0 0 80px rgba(184,147,90,0.12);">
          <!-- stylized world -->
          <svg viewBox="0 0 400 400" style="width: 80%; height:80%;" aria-hidden="true">
            <circle cx="200" cy="200" r="180" fill="none" stroke="#C8395F" stroke-width="1" opacity="0.3"/>
            <circle cx="200" cy="200" r="140" fill="none" stroke="#C8395F" stroke-width="1" opacity="0.3"/>
            <!-- meridians -->
            <ellipse cx="200" cy="200" rx="60" ry="180" fill="none" stroke="#C8395F" stroke-width="1" opacity="0.3"/>
            <ellipse cx="200" cy="200" rx="120" ry="180" fill="none" stroke="#C8395F" stroke-width="1" opacity="0.3"/>
            <!-- equator -->
            <line x1="20" y1="200" x2="380" y2="200" stroke="#C8395F" stroke-width="1" opacity="0.3"/>
            <!-- city dots -->
            <g fill="#C8395F">
              <circle cx="160" cy="140" r="8"/> <!-- Paris -->
              <circle cx="285" cy="155" r="8"/> <!-- Shanghai -->
              <circle cx="115" cy="195" r="6"/> <!-- NYC -->
              <circle cx="230" cy="220" r="6"/> <!-- Cairo -->
              <circle cx="305" cy="170" r="6"/> <!-- Tokyo -->
              <circle cx="175" cy="265" r="6"/> <!-- São Paulo -->
              <circle cx="180" cy="115" r="5"/> <!-- Scandinavia -->
              <circle cx="200" cy="180" r="5"/> <!-- Athens -->
            </g>
            <!-- dotted travel arc Paris -> Shanghai -->
            <path d="M160 140 Q 220 70 285 155" stroke="#C8395F" stroke-width="2" fill="none" stroke-dasharray="4 6"/>
          </svg>
        </div>
        <!-- center panda label -->
        <div style="position:absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: var(--panda-red); color: var(--paper); width: 110px; height: 110px; border-radius: 50%; display:grid; place-items:center; box-shadow: 0 12px 24px -8px rgba(214,32,42,0.4);">
          <div style="text-align:center; font-family:'Caveat'; font-size: 24px; line-height: 1;">
            Lucky<br/>Panda
          </div>
        </div>
        <!-- corner stamps -->
        <div class="stamp" style="position:absolute; top:-20px; right:-20px; width: 130px; height:130px; font-size: 13px;">
          <div>Petit Plaisir<span class="heart"><svg width="16" height="16"><use href="#heart"/></svg></span>Grande Joie</div>
        </div>
      </div>
    </div>
  </div>

  <!-- bottom: route strip -->
  <div style="margin-top: 56px;">
    <div class="fleur" style="margin-bottom: 26px;">
      <span><svg width="22" height="22"><use href="#fleur"/></svg></span>
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; font-family:'Playfair Display'; font-style:italic; font-size: 24px; color: var(--ink-soft);">
      <span>Paris</span>
      <span style="letter-spacing:0.5em;">· · · · · · · · ·</span>
      <span>Athens</span>
      <span style="letter-spacing:0.5em;">· · · · · · · · ·</span>
      <span>Tokyo</span>
      <span style="letter-spacing:0.5em;">· · · · · · · · ·</span>
      <span>Cairo</span>
      <span style="letter-spacing:0.5em;">· · · · · · · · ·</span>
      <span>Stockholm</span>
      <span style="letter-spacing:0.5em;">· · · · · · · · ·</span>
      <span>São Paulo</span>
    </div>
  </div>
`;

export default function Slide03GlobalJourney() {
  return (
    <section
      data-label="03 Global Journey"
      className="paper-grain"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        background: "var(--cream-2)",
        padding: "110px 130px",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
