// Fill in your Google Analytics measurement ID to enable visitor statistics.
// Example: window.ZODIAC_GA_ID = "G-XXXXXXXXXX";
window.ZODIAC_GA_ID = "";

if (window.ZODIAC_GA_ID) {
  const gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${window.ZODIAC_GA_ID}`;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", window.ZODIAC_GA_ID, {
    anonymize_ip: true
  });
}
