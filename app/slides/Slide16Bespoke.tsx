const slideHtml = `
  <div style="height:100%; display:flex; flex-direction:column;">
    <div>
      <div class="eyebrow" style="margin-bottom: 14px;">Beyond the box</div>
      <h2 class="serif-display" style="font-size: 76px; line-height: 1.0; margin: 0; color: var(--ink);">
        What else  we offer.
      </h2>

      <p class="body-lg" style="max-width: 820px; margin: 24px 0 0;">
        The Lucky Panda box can become a branded gifting program, or the beginning
        of a shared experience: something to receive, open, make, taste, and remember.
      </p>
    </div>

    <div style="flex:1; display:flex; align-items:center; padding-bottom: 34px;">
      <div style="display:grid; grid-template-columns: 1fr;">
        <div style="display:grid; grid-template-columns: 58px 1fr; align-items:baseline; border-top:1px solid var(--hairline); padding: 17px 0;">
          <div style="font-family:'Libre Baskerville'; font-style:italic; font-size: 24px; color: var(--magenta);"></div>
          <div class="serif-display" style="font-size: 31px; line-height:1.08; color:var(--ink);">Milestone &amp; anniversary gifts</div>
        </div>
        <div style="display:grid; grid-template-columns: 58px 1fr; align-items:baseline; border-top:1px solid var(--hairline); padding: 17px 0;">
          <div style="font-family:'Libre Baskerville'; font-style:italic; font-size: 24px; color: var(--magenta);"></div>
          <div class="serif-display" style="font-size: 31px; line-height:1.08; color:var(--ink);">Employee onboarding kits</div>
        </div>
        <div style="display:grid; grid-template-columns: 58px 1fr; align-items:baseline; border-top:1px solid var(--hairline); padding: 17px 0;">
          <div style="font-family:'Libre Baskerville'; font-style:italic; font-size: 24px; color: var(--magenta);"></div>
          <div class="serif-display" style="font-size: 31px; line-height:1.08; color:var(--ink);">Client appreciation gifts</div>
        </div>
        <div style="display:grid; grid-template-columns: 58px 1fr; align-items:baseline; border-top:1px solid var(--hairline); padding: 17px 0;">
          <div style="font-family:'Libre Baskerville'; font-style:italic; font-size: 24px; color: var(--magenta);"></div>
          <div class="serif-display" style="font-size: 31px; line-height:1.08; color:var(--ink);">Event gifting</div>
        </div>
        <div style="display:grid; grid-template-columns: 58px 1fr; align-items:baseline; border-top:1px solid var(--hairline); border-bottom:1px solid var(--hairline); padding: 17px 0;">
          <div style="font-family:'Libre Baskerville'; font-style:italic; font-size: 24px; color: var(--magenta);"></div>
          <div class="serif-display" style="font-size: 31px; line-height:1.08; color:var(--ink);">Custom gifting</div>
        </div>
      </div>
    </div>
  </div>

  <div style="height:100%; display:flex; flex-direction:column; justify-content:center;">
    <div style="font-family:'Source Sans 3'; font-size: 15px; font-weight:700; letter-spacing:0.3em; text-transform:uppercase; color: var(--magenta); margin-bottom: 18px;">
      Foreigner-led classes
    </div>
    <h3 class="serif-display" style="font-size: 50px; line-height: 1.02; margin: 0 0 16px; color: var(--ink);">
      Experiences to make, taste, and talk about.
    </h3>
    <p class="body-tight" style="font-size: 21px; line-height:1.42; margin: 0 0 30px; max-width: 720px;">
      Hosted in a warm, social format for teams, clients, events, or private groups.
    </p>

    <div style="display:grid; grid-template-columns: 1fr; gap: 28px;">
      <div style="display:grid; grid-template-columns: 330px 1fr; gap: 30px; align-items:center; border-top:1px solid var(--hairline); padding-top: 22px;">
        <img
          src="/used/slide_16/cocktails.png"
          alt="Cocktail making class"
          style="display:block; width:100%; aspect-ratio: 13 / 8.5; object-fit:cover; object-position:center; box-shadow: 0 20px 46px -30px rgba(43,31,26,0.45);"
        />
        <div>
          <h4 class="serif-display" style="font-size: 33px; line-height:1.05; margin:0 0 9px; color:var(--ink);">
            Popular cocktail-making classes
          </h4>
          <p style="font-family:'Source Sans 3'; font-size:18px; line-height:1.36; margin:0; color:var(--ink-soft);">
            Shaken classics, simple techniques, and a lively format that works for after-work groups.
          </p>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: 330px 1fr; gap: 30px; align-items:center; border-top:1px solid var(--hairline); border-bottom:1px solid var(--hairline); padding: 22px 0;">
        <img
          src="/used/slide_16/cooking.png"
          alt="Cooking class"
          style="display:block; width:100%; aspect-ratio: 13 / 8.5; object-fit:cover; object-position:center; box-shadow: 0 20px 46px -30px rgba(43,31,26,0.45);"
        />
        <div>
          <h4 class="serif-display" style="font-size: 33px; line-height:1.05; margin:0 0 9px; color:var(--ink);">
            Cooking classes: make a popular foreign dish
          </h4>
          <p style="font-family:'Source Sans 3'; font-size:18px; line-height:1.36; margin:0; color:var(--ink-soft);">
            A hands-on session where guests learn, cook together, and sit down with something they made.
          </p>
        </div>
      </div>
    </div>
  </div>
`;

export default function Slide16Bespoke() {
  return (
    <section
      data-label="16 What Else We Offer"
      className="paper-grain"
      style={{
        background: "var(--cream)",
        padding: "88px 130px 96px",
        display: "grid",
        gridTemplateColumns: "0.9fr 1.1fr",
        gap: "78px",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
