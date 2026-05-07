window.STAR_STYLE_GA_ID = "G-L0376CLDH8";

if (window.STAR_STYLE_GA_ID && !window.__STAR_STYLE_GA_LOADED__) {
  window.__STAR_STYLE_GA_LOADED__ = true;

  const gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${window.STAR_STYLE_GA_ID}`;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = window.gtag || gtag;
  window.gtag("js", new Date());
  window.gtag("config", window.STAR_STYLE_GA_ID, {
    anonymize_ip: true
  });
}
