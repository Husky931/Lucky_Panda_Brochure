const slideHtml = `
  <div style="height:100%; display:grid; grid-template-columns: 1.1fr 1fr;">
    <!-- left -->
    <div style="padding: 120px 90px 120px 130px; display:flex; flex-direction:column; justify-content:space-between;">

      <!-- brand mark -->
      <div>
        <h2 class="serif-display" style="font-size: 68px; line-height: 0.95; margin: 0; color: var(--ink);">
          Lucky
        </h2>
        <h2 class="script-display" style="font-size: 124px; line-height: 0.9; margin: -14px 0 0; transform: translateX(8px);">
          Panda
        </h2>
        <div style="font-family:'Source Sans 3'; font-size: 13px; letter-spacing:0.36em; text-transform:uppercase; color: var(--ink-soft); margin-top: 22px;">
          Creative Gifting Studio
        </div>
      </div>

      <!-- contact + office -->
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 56px; margin-top: 70px;">
        <!-- contact column -->
        <div>
          <div class="eyebrow" style="font-size: 16px; margin-bottom: 28px;">Contact</div>

          <div style="font-family:'Source Sans 3'; font-size: 12px; letter-spacing:0.32em; text-transform:uppercase; color: var(--ink-soft); margin-bottom: 8px;">Write</div>
          <div style="font-family:'Libre Baskerville'; font-style: italic; font-size: 22px; color: var(--ink); margin-bottom: 28px;">
            luckypandaofficial@qq.com
          </div>

          <div style="font-family:'Source Sans 3'; font-size: 12px; letter-spacing:0.32em; text-transform:uppercase; color: var(--ink-soft); margin-bottom: 8px;">Scan</div>
          <div style="font-family:'Libre Baskerville'; font-style: italic; font-size: 22px; color: var(--ink);">
            WeChat — see opposite
          </div>
        </div>

        <!-- office column -->
        <div>
          <div class="eyebrow" style="font-size: 16px; margin-bottom: 28px;">Studio</div>

          <div style="font-family:'Libre Baskerville'; font-style: italic; font-size: 22px; line-height: 1.55; color: var(--ink);">
            WeWork China<br/>
            (West Nanjing Road Community)<br/>
            Jing'an District, Shanghai
          </div>
          <div style="font-family:'Libre Baskerville'; font-style: italic; font-size: 20px; line-height: 1.55; color: var(--ink-soft); margin-top: 14px;">
            WeWork 中国（南京西路社区店）<br/>
            上海市静安区
          </div>
        </div>
      </div>

      <!-- footer rule -->
      <div style="margin-top: 60px; display:flex; align-items:center; gap: 22px;">
        <div style="flex:1; height:1px; background: rgba(43,31,26,0.18);"></div>
        <div style="font-family:'Source Sans 3'; font-size: 12px; letter-spacing:0.36em; text-transform:uppercase; color: var(--ink-soft);">Small Gift · Great Joy</div>
        <div style="flex:1; height:1px; background: rgba(43,31,26,0.18);"></div>
      </div>
    </div>

    <!-- right: WeChat QR + closing -->
    <div style="padding: 130px 130px 130px 30px; display:flex; flex-direction:column; justify-content:center; align-items:center; gap: 40px; position: relative;">
      <div class="frame" style="padding: 56px 60px; text-align:center;">
        <div class="eyebrow" style="font-size: 16px; margin-bottom: 22px;">Scan on WeChat</div>
        <img src="/wechat_qr.png" alt="WeChat QR" style="width: 220px; height: 220px; display:block; margin: 0 auto; border: 8px solid var(--paper); box-shadow: 0 8px 24px -10px rgba(0,0,0,0.3); object-fit: cover;" />
        <div style="margin-top: 22px; font-family:'Libre Baskerville'; font-style: italic; font-size: 22px; color: var(--ink-soft);">@luckypandaofficial</div>
      </div>

      <!-- closing signature -->
      <div style="text-align:center; margin-top: 18px;">
        <div style="font-family:'Dancing Script'; font-size: 80px; color: var(--magenta); line-height: 1;">La Vita e Bella</div>
        <div style="font-family:'Source Sans 3'; font-size: 14px; letter-spacing:0.32em; text-transform:uppercase; color: var(--ink-soft); margin-top: 10px;">— Gregory &amp; Sebastian, Lucky Panda</div>
      </div>


    </div>
  </div>
`;

export default function Slide20Contact() {
  return (
    <section
      data-label="20 Contact"
      className="paper-grain"
      style={{
        background: "linear-gradient(180deg, var(--cream) 0%, var(--rose-tint) 100%)",
      }}
      dangerouslySetInnerHTML={{ __html: slideHtml }}
    />
  );
}
