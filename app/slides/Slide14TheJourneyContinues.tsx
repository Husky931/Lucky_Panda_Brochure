const slideHtml = `
  <!-- left photo full-bleed -->
  <div class="photo" style="
    background-image: url('assets/box-open-vertical-french.png');
    background-size: cover;
    background-position: center;
  "></div>

  <!-- right: series closing note / next destinations -->
  <div class="paper-grain" style="
    padding: 92px 104px 86px;
    display:grid;
    grid-template-rows: 0.92fr 1.08fr;
    background: var(--rose-tint);
  ">
    <div style="
      display:flex;
      flex-direction:column;
      justify-content:center;
      padding-bottom:22px;
    ">
      <div class="eyebrow" style="margin-bottom: 24px;">First Station</div>

      <div style="font-family:'Dancing Script'; font-size: 52px; color: var(--magenta); line-height: 1.04; margin-bottom: 20px;">
        "Explore France<br/>with your tastebuds &mdash;<br/>and the world too."
      </div>



    </div>

    <div style="
      padding-top:38px;
      display:flex;
      flex-direction:column;
      justify-content:center;
    ">
      <h3 class="serif-display" style="font-size: 40px; line-height:1.06; margin: 0; color: var(--ink);">
        The route continues after Paris.
      </h3>
      <p class="body-tight" style="font-size: 21px; line-height:1.42; margin: 12px 0 22px; max-width: 560px;">
        Upcoming editions can be planned as a recurring travel series, a seasonal
        gifting calendar, or a private country set.
      </p>

      <div style="display:grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 12px;">
        <div style="background:rgba(255,253,248,0.68); border:1px solid rgba(168,37,71,0.20); padding:13px 16px 14px;">
          <div style="display:flex; justify-content:space-between; align-items:baseline; gap:12px;">
            <span class="serif-italic" style="font-size:24px; color:var(--ink);">Japan</span>
            <span style="font-family:'Source Sans 3'; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--magenta);">Jul 2026</span>
          </div>
          <div style="font-family:'Source Sans 3'; font-size:13px; color:var(--ink-soft); margin-top:4px;">matcha, yuzu, Kyoto tea</div>
        </div>

        <div style="background:rgba(255,253,248,0.68); border:1px solid rgba(184,147,90,0.32); padding:13px 16px 14px;">
          <div style="display:flex; justify-content:space-between; align-items:baseline; gap:12px;">
            <span class="serif-italic" style="font-size:24px; color:var(--ink);">Italy</span>
            <span style="font-family:'Source Sans 3'; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--gold);">Sept 2026</span>
          </div>
          <div style="font-family:'Source Sans 3'; font-size:13px; color:var(--ink-soft); margin-top:4px;">Sicilian citrus, Roman crumbs</div>
        </div>

        <div style="background:rgba(255,253,248,0.68); border:1px solid rgba(168,37,71,0.20); padding:13px 16px 14px;">
          <div style="display:flex; justify-content:space-between; align-items:baseline; gap:12px;">
            <span class="serif-italic" style="font-size:24px; color:var(--ink);">Greece</span>
            <span style="font-family:'Source Sans 3'; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--magenta);">Nov 2026</span>
          </div>
          <div style="font-family:'Source Sans 3'; font-size:13px; color:var(--ink-soft); margin-top:4px;">olive groves, island sweets</div>
        </div>

        <div style="background:rgba(255,253,248,0.68); border:1px solid rgba(184,147,90,0.32); padding:13px 16px 14px;">
          <div style="display:flex; justify-content:space-between; align-items:baseline; gap:12px;">
            <span class="serif-italic" style="font-size:23px; color:var(--ink);">United States</span>
            <span style="font-family:'Source Sans 3'; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--gold);">Q1 2027</span>
          </div>
          <div style="font-family:'Source Sans 3'; font-size:13px; color:var(--ink-soft); margin-top:4px;">diner coffee, bourbon caramel</div>
        </div>

        <div style="background:rgba(255,253,248,0.68); border:1px solid rgba(168,37,71,0.20); padding:13px 16px 14px;">
          <div style="display:flex; justify-content:space-between; align-items:baseline; gap:12px;">
            <span class="serif-italic" style="font-size:24px; color:var(--ink);">Egypt</span>
            <span style="font-family:'Source Sans 3'; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--magenta);">Q2 2027</span>
          </div>
          <div style="font-family:'Source Sans 3'; font-size:13px; color:var(--ink-soft); margin-top:4px;">cardamom, dates, Nile gold</div>
        </div>

        <div style="background:rgba(255,253,248,0.68); border:1px solid rgba(184,147,90,0.32); padding:13px 16px 14px;">
          <div style="display:flex; justify-content:space-between; align-items:baseline; gap:12px;">
            <span class="serif-italic" style="font-size:24px; color:var(--ink);">Brazil</span>
            <span style="font-family:'Source Sans 3'; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--gold);">Q3 2027</span>
          </div>
          <div style="font-family:'Source Sans 3'; font-size:13px; color:var(--ink-soft); margin-top:4px;">coffee beans, coastal warmth</div>
        </div>
      </div>
    </div>
  </div>
`;

export default function Slide14TheJourneyContinues() {
  return (
    <section
      data-label="14 The Journey Continues"
      style={{
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
