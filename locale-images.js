(() => {
  const style = document.createElement("style");
  style.textContent = ".locale-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:58px;align-items:center}.locale-portrait{height:490px;position:relative;background:#0d201a}.locale-portrait:after{content:'';position:absolute;inset:17px -14px -14px 17px;border:1px solid #987f52}.locale-portrait img{position:relative;width:100%;height:100%;object-fit:contain;filter:saturate(.82)}.locale-mine-image{display:block;width:100%;height:205px;object-fit:contain;background:#e8e0d2;margin-top:28px}@media(max-width:700px){.locale-hero-grid{grid-template-columns:1fr;gap:35px}.locale-portrait{height:390px}.locale-mine-image{height:185px}}";
  document.head.appendChild(style);
  const heroWrap = document.querySelector(".hero .wrap");
  if (heroWrap) {
    const text = document.createElement("div");
    while (heroWrap.firstChild) text.appendChild(heroWrap.firstChild);
    const portrait = document.createElement("div");
    portrait.className = "locale-portrait";
    portrait.innerHTML = '<img src="../alan_portrait.jpeg" alt="Alan">';
    heroWrap.classList.add("locale-hero-grid");
    heroWrap.append(text, portrait);
  }
  const mining = document.querySelector(".mining .intro");
  if (mining) {
    const image = document.createElement("img");
    image.className = "locale-mine-image";
    image.src = "../image_003873.jpg";
    image.alt = "Mining acquisition sourcing";
    mining.appendChild(image);
  }
  const footer = document.querySelector(".footer .wrap");
  if (footer) footer.insertAdjacentHTML("beforeend", '<div style="margin-top:12px"><a href="index.html" style="color:#d8b97c;text-decoration:none">Back to top / ホームへ ↑</a></div>');
})();
