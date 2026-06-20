(function () {
  "use strict";

  /* ----------------------------------------------------------
     1) LANGUAGE TOGGLE (ID default / EN)
     Each translatable node carries the Indonesian text as its
     own content plus a data-en attribute with the English
     version. Switching language just swaps textContent — no
     duplicate DOM nodes, no class collisions.
  ---------------------------------------------------------- */
  var STORAGE_KEY = "pda-lang";
  var translatable = document.querySelectorAll("[data-id][data-en]");
  var langButtons = document.querySelectorAll("[data-set-lang]");
  var body = document.body;

  var TITLES = {
    id: "Pintar dengan AI — Program Belajar AI oleh PindAI",
    en: "Pintar dengan AI — AI Learning Program by PindAI"
  };

  function applyLang(lang) {
    if (lang !== "id" && lang !== "en") lang = "id";

    translatable.forEach(function (el) {
      var text = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-id");
      if (text != null) el.textContent = text;
    });

    document.documentElement.setAttribute("lang", lang);
    document.title = TITLES[lang];
    body.setAttribute("data-lang", lang);

    langButtons.forEach(function (btn) {
      var isActive = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable, ignore */ }
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-set-lang"));
    });
  });

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  if (saved === "en") applyLang("en");

  /* ----------------------------------------------------------
     2) STICKY NAV — subtle elevation once page scrolls
  ---------------------------------------------------------- */
  var nav = document.getElementById("nav");
  var lastScrolled = false;
  function onScroll() {
    var scrolled = window.scrollY > 8;
    if (scrolled !== lastScrolled) {
      nav.style.boxShadow = scrolled ? "0 8px 24px -18px rgba(10,24,48,.45)" : "none";
      lastScrolled = scrolled;
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----------------------------------------------------------
     3) SCROLL REVEAL — gentle fade/slide-in for content blocks
  ---------------------------------------------------------- */
  var revealTargets = document.querySelectorAll(
    ".card, .steps__item, .section-head, .about, .badge, .tech-strip__head"
  );

  if ("IntersectionObserver" in window) {
    revealTargets.forEach(function (el) { el.classList.add("reveal"); });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach(function (el) { observer.observe(el); });
  }
})();
