const slideHtml = `
  <div style="
    position:absolute;
    inset:0;
    background:
      linear-gradient(90deg, rgba(200,57,95,0.11) 0 1px, transparent 1px) 0 0 / 120px 120px,
      linear-gradient(0deg, rgba(184,147,90,0.10) 0 1px, transparent 1px) 0 0 / 120px 120px,
      var(--cream);
    opacity:0.42;
  "></div>



  <div style="
    position:absolute;
    left:248px;
    top:206px;
    width:660px;
  ">
    <h2 style="
      margin:0;
      font-family:'Libre Baskerville';
      font-size:78px;
      line-height:1.24;
      font-weight:400;
      letter-spacing:0;
      color:var(--ink);
    ">
      <span style="color:var(--magenta);">Lucky Panda</span><br/>
      is a creative<br/>
      gifting studio<br/>
      helping companies<br/>
      make moments<br/>
      feel personal
    </h2>
  </div>

  <div style="
    position:absolute;
    left:1044px;
    right:254px;
    top:228px;
    bottom:176px;
    display:flex;
    flex-direction:column;
    justify-content:center;
  ">
    <p style="
      margin:0 0 42px;
      font-family:'Source Sans 3';
      font-size:35px;
      line-height:1.43;
      color:var(--ink-soft);
    ">
      Lucky Panda is a Shanghai-based creative gifting studio built for companies
      that want team moments, client events, and celebrations to feel thoughtful,
      warm, and easy to remember.
    </p>

    <p style="
      font-family:'Source Sans 3';
      font-size:35px;
      line-height:1.43;
      color:var(--ink-soft);
      margin:0 0 42px;
    ">
      We design experiential, story-driven events from first impression to final note,
      blending curated treats, printed details, and event-ready presentation into one
      polished gifting experience.
    </p>

    <p style="
      margin:0 0 48px;
      font-family:'Source Sans 3';
      font-size:35px;
      line-height:1.43;
      color:var(--ink-soft);
    ">
      Our studio handles the creative direction, sourcing, assembly details, and
      delivery flow so every gift feels considered rather than transactional.
    </p>

    <p style="
      margin:0;
      font-family:'Source Sans 3';
      font-size:35px;
      line-height:1.43;
      color:var(--ink-soft);
    ">
      <span style="font-family:'Source Sans 3'; font-size:24px; font-weight:700; letter-spacing:0.02em; color:var(--magenta);">Shanghai studio</span>
      for teams, clients, events, and celebrations.
    </p>
  </div>



  <div style="
    position:absolute;
    right:134px;
    top:176px;
    bottom:132px;
    width:1px;
    background:linear-gradient(180deg, transparent, rgba(184,147,90,0.52), rgba(200,57,95,0.38), transparent);
  "></div>
`;

export default function Slide03WhoWeAre() {
  return (
    <section
      data-label="03 Who We Are"
      className="paper-grain"
      style={{
        background: "var(--cream)",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
