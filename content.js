/*
  新增文章或案例时，只需要复制下方其中一笔资料并修改内容。
  图片请放在网站资料夹内，并在 image 中填写档名，例如："new-case.jpeg"。
*/
const siteContent = {
  contacts: {
    telegram: "https://t.me/kklovelife",
    line: "https://line.me/ti/p/6rN5nAxGsZ"
  },
  articles: [
    { category: "矿业寻源 · 并购收购", title: "长期寻源：合规在产金属矿项目", excerpt: "受头部省属能源矿业平台委托，长期寻求国内外优质铜、金、铅锌等金属矿项目；买方资金充裕、收购节奏稳定，重视专业、保密与高效沟通。", url: "mining-sourcing.html" },
    { category: "CROSS-BORDER COMPLIANCE", title: "跨境交易中，尽职调查真正应该关注什么？", excerpt: "跨境交易的风险往往并不只在文件本身，而在于交易背景、主体与后续履行能否形成完整闭环。", url: "https://xhslink.com/m/7AVJsZKQfc1" },
    { category: "OVERSEAS INVESTMENT", title: "海外资产配置：从购买到长期持有的法律视角", excerpt: "产权、运营限制、税务义务与退出机制，都会影响一项资产能否成为真正长期的配置。", url: "https://xhslink.com/m/7AVJsZKQfc1" },
    { category: "LEGAL PRACTICE", title: "面对复杂争议，如何建立有效的应对节奏", excerpt: "好的法律服务不仅在于判断，也在于让当事人能在时间、证据与沟通之间采取行动。", url: "https://xhslink.com/m/7AVJsZKQfc1" }
  ],
  cases: [
    { category: "主推项目 · 矿业并购寻源", title: "长期寻求合规在产金属矿项目", excerpt: "服务头部省属能源矿业平台，长期收购国内外优质矿业标的。买方资金充裕、收购周期稳定，不以付款为条件压价；所有项目资讯均严格保密。", image: "image_003873.jpg", highlights: ["优先：在产铜、金、铅锌等金属矿", "探矿权：详查以上、资源储量扎实", "暂不考虑：权属纠纷、红线压覆或遗留环保问题项目"] },
    { category: "跨境纠纷 · 账户解冻", title: "银行卡冻结解除与跨境资金风险应对", excerpt: "协助梳理交易背景、准备相关材料，并就账户冻结处理与跨境资金风险提供专业支持。", image: "case1.jpeg" }
  ]
};

// Contact buttons are enabled automatically once the Telegram and LINE links above are filled in.
(() => {
  const style = document.createElement("style");
  style.textContent = ".global-contact{position:fixed;right:22px;bottom:22px;z-index:20;display:flex;flex-direction:column;gap:9px;font:600 12px 'Plus Jakarta Sans',sans-serif;letter-spacing:.04em}.global-contact a,.global-contact span,.contact-actions a,.contact-actions span{min-width:142px;padding:12px 16px;color:#fff;text-decoration:none;background:#12231f;border:1px solid #b8955a;box-shadow:0 8px 22px rgba(18,35,31,.18);transition:.2s}.global-contact a:hover,.contact-actions a:hover{transform:translateY(-2px);background:#1d3b33}.global-contact span,.contact-actions span{display:block;color:#d5c9b4;cursor:default}.global-contact b,.contact-actions b{display:inline-block;min-width:29px;color:#d5b576}.contact-actions{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}.contact-actions a,.contact-actions span{display:inline-block;font:600 13px 'Plus Jakarta Sans',sans-serif;letter-spacing:.04em}@media(max-width:700px){.global-contact{right:13px;bottom:13px}.global-contact a,.global-contact span{min-width:126px;padding:10px 12px}}";
  document.head.appendChild(style);
  const contact = document.createElement("div");
  contact.className = "global-contact";
  const link = (name, value, mark) => value
    ? `<a href="${value}" target="_blank" rel="noopener"><b>${mark}</b>${name}</a>`
    : `<span><b>${mark}</b>${name}</span>`;
  contact.innerHTML = link("Telegram", siteContent.contacts.telegram, "TG") + link("LINE", siteContent.contacts.line, "LN");
  document.body.appendChild(contact);
  const languages = document.createElement("nav");
  languages.className = "language-switcher";
  languages.innerHTML = '<a class="active" href="index.html">中文</a><a href="en/index.html">EN</a><a href="ja/index.html">日本語</a>';
  const languageStyle = document.createElement("style");
  languageStyle.textContent = ".language-switcher{position:fixed;left:22px;bottom:22px;z-index:20;display:flex;background:#12231f;border:1px solid #b8955a;font:600 11px 'Plus Jakarta Sans',sans-serif}.language-switcher a{padding:9px 11px;color:#d8ddd8;text-decoration:none;border-left:1px solid #50635b}.language-switcher a:first-child{border-left:0}.language-switcher a.active,.language-switcher a:hover{background:#b8955a;color:#12231f}@media(max-width:700px){.language-switcher{left:13px;bottom:13px}.language-switcher a{padding:8px 9px}}";
  document.head.appendChild(languageStyle);
  document.body.appendChild(languages);
  const responsiveStyle = document.createElement("style");
  responsiveStyle.textContent = ".footer-links{margin-top:14px;display:flex;justify-content:center;gap:16px;flex-wrap:wrap}.footer-links a{color:#d8b97c;text-decoration:none;font:500 11px 'Plus Jakarta Sans',sans-serif;letter-spacing:.05em}@media(max-width:760px){.hero-grid{min-height:0!important;gap:32px!important;padding:42px 0 48px!important}.hero h1{font-size:45px!important;line-height:1.27!important;margin:15px 0 20px!important}.hero p{font-size:15px!important;line-height:1.8!important;margin-bottom:25px!important}.hero-image{height:390px!important}.links{gap:10px!important}.links a:nth-child(3){display:inline!important}.links a{margin-left:0!important;font-size:11px!important}.nav-contact{padding:8px 9px!important}.footer-links{gap:12px}.footer-links a{font-size:10px}}";
  document.head.appendChild(responsiveStyle);
  const footerWrap = document.querySelector(".footer .wrap");
  if (footerWrap) footerWrap.insertAdjacentHTML("beforeend", '<nav class="footer-links"><a href="index.html">首页</a><a href="insights.html">洞察</a><a href="mining-sourcing.html">矿业寻源</a><a href="#top" onclick="window.scrollTo({top:0,behavior:\'smooth\'});return false">回到顶部 ↑</a></nav>');
  const actionButtons = `<div class="contact-actions">${link("Telegram", siteContent.contacts.telegram, "TG")}${link("LINE", siteContent.contacts.line, "LN")}</div>`;
  document.querySelectorAll(".contact a[href*='xhslink'], main .cta[href*='xhslink']").forEach((button) => { button.outerHTML = actionButtons; });
  const contactCopy = document.querySelector(".contact p");
  if (contactCopy) contactCopy.textContent = "如您正面对跨境法律、税务、海外投资或矿业项目问题，欢迎通过 LINE 或 Telegram 与 Alan 律师联系。";
})();
