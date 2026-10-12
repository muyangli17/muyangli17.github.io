(() => {
  const navbar = document.getElementById("navbar");
  const translations = document.getElementById("navigation-translations");
  if (!navbar || !translations) return;

  const labels = JSON.parse(translations.textContent);
  const preferenceKey = "site-language";
  const languageKey = (value) => {
    const key = String(value || "").split("-")[0];
    return key === "en" || key === "zh" ? key : null;
  };
  const explicitLanguage = languageKey(navbar.dataset.pageLanguage);
  let rememberedLanguage = null;
  try {
    rememberedLanguage = languageKey(localStorage.getItem(preferenceKey));
  } catch {
    // Explicit page languages and the Chinese default also work without storage.
  }

  const remember = (language) => {
    try {
      localStorage.setItem(preferenceKey, language);
    } catch {
      // Storage may be unavailable in a private browsing session.
    }
  };

  const applyLanguage = (language) => {
    const translated = labels[language];
    if (!translated) return;
    navbar.lang = language === "zh" ? "zh-CN" : "en";
    navbar.dataset.navigationLanguage = language;
    navbar.querySelectorAll("[data-nav-label]").forEach((element) => {
      const text = translated[element.dataset.navLabel];
      if (text) element.textContent = text;
    });
    navbar.querySelectorAll("[data-nav-path]").forEach((element) => {
      const text = translated.pages[element.dataset.navPath];
      if (text) element.textContent = text;
    });
    navbar.querySelectorAll("[data-nav-aria]").forEach((element) => {
      element.setAttribute("aria-label", translated[element.dataset.navAria]);
    });
    navbar.querySelectorAll("[data-nav-title]").forEach((element) => {
      element.title = translated[element.dataset.navTitle];
    });
    const home = language === "zh" ? navbar.dataset.homeZh : navbar.dataset.homeEn;
    navbar.querySelectorAll("[data-nav-home]").forEach((element) => {
      element.href = home;
    });
    const alternate = language === "zh" ? "en" : "zh";
    const control = navbar.querySelector("[data-nav-language-switch]");
    if (control) {
      control.textContent = translated.switch_label;
      control.setAttribute("aria-label", translated.switch_aria);
      control.href = alternate === "zh" ? navbar.dataset.homeZh : navbar.dataset.homeEn;
      control.hreflang = alternate === "zh" ? "zh-CN" : "en";
      control.lang = control.hreflang;
    }
    remember(language);
  };

  applyLanguage(explicitLanguage || rememberedLanguage || "zh");

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest("a[hreflang]");
    if (!link) return;
    const selected = languageKey(link.hreflang);
    if (selected) remember(selected);
  });
  window.addEventListener("storage", (event) => {
    if (event.key === preferenceKey && !explicitLanguage) {
      applyLanguage(languageKey(event.newValue) || "zh");
    }
  });
})();
