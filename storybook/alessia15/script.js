/* ==========================================================
   STORYBOOK - SCRIPT PRINCIPALE
   Tutta la pagina viene costruita leggendo config.js.
   ========================================================== */

const CONFIG =
  typeof INVITO_CONFIG !== "undefined"
    ? INVITO_CONFIG
    : {};

/* ==========================================================
   UTILITÀ
   ========================================================== */

const $ = (id) => document.getElementById(id);

function get(path, fallback = "") {
  const value = path.split(".").reduce((obj, key) => {
    if (obj && obj[key] !== undefined) {
      return obj[key];
    }

    return undefined;
  }, CONFIG);

  return value ?? fallback;
}

function show(element) {
  if (element) {
    element.classList.remove("hidden");
  }
}

function hide(element) {
  if (element) {
    element.classList.add("hidden");
  }
}

function createElement(tag, className = "", text = "") {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined && text !== null && text !== "") {
    element.textContent = text;
  }

  return element;
}

function setSectionBackground(section, image) {
  if (!section || !image) return;

  section.style.backgroundImage = `url("${image}")`;
}

function setCardBackground(card, image) {
  if (!card || !image) return;

  card.style.backgroundImage = `url("${image}")`;
  card.classList.add("module-card-image");
}

function applyModuleStyle(section, card, style = {}) {
  if (!section || !card || !style) return;

  const properties = {
    "--module-title-color": style.coloreTitolo,
    "--module-name-color": style.coloreNome,
    "--module-text-color": style.coloreTesto,
    "--module-accent-color": style.coloreAccento,

    "--module-title-shadow": style.ombraTitolo,
    "--module-name-shadow": style.ombraNome,
    "--module-text-shadow": style.ombraTesto,

    "--module-phrase-bg": style.sfondoFrase,
    "--module-title-bg": style.sfondoTitolo,
    "--module-text-bg": style.sfondoTesto
  };

  Object.entries(properties).forEach(([property, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      section.style.setProperty(property, value);
    }
  });
}

function encodeWhatsAppText(text) {
  return encodeURIComponent(text || "");
}

/* ==========================================================
   META WHATSAPP / FACEBOOK
   ========================================================== */

function applyMeta() {
  const meta = CONFIG.meta || {};

  if (meta.title) {
    document.title = meta.title;
  }

  updateMetaProperty("og:title", meta.title);
  updateMetaProperty("og:description", meta.description);
  updateMetaProperty("og:image", meta.image);
  updateMetaProperty("og:url", meta.url);

  updateMetaName("description", meta.description);
}

function updateMetaProperty(property, content) {
  if (!content) return;

  const element = document.querySelector(
    `meta[property="${property}"]`
  );

  if (element) {
    element.setAttribute("content", content);
  }
}

function updateMetaName(name, content) {
  if (!content) return;

  const element = document.querySelector(
    `meta[name="${name}"]`
  );

  if (element) {
    element.setAttribute("content", content);
  }
}

/* ==========================================================
   TEMA GRAFICO
   ========================================================== */

function applyTheme() {
  const theme = CONFIG.tema || {};
  const root = document.documentElement;

  const properties = {
    "--primary": theme.colorePrimario,
    "--secondary": theme.coloreSecondario,
    "--text": theme.coloreTesto,
    "--card-bg": theme.coloreCard,
    "--card-border": theme.coloreCardBordo,
    "--title-font": theme.fontTitolo,
    "--text-font": theme.fontTesto,
    "--title-size": theme.grandezzaTitolo,
    "--name-size": theme.grandezzaNome
  };

  Object.entries(properties).forEach(([property, value]) => {
    if (value) {
      root.style.setProperty(property, value);
    }
  });
}

/* ==========================================================
   CREAZIONE STRUTTURA MODULI
   ========================================================== */

function createModuleSection(moduleName, moduleConfig) {
  const section = createElement(
    "section",
    `story-module story-module-${moduleName}`
  );

  section.id = `module-${moduleName}`;

  section.dataset.animation =
    moduleConfig.animazione || "fade";

  setSectionBackground(section, moduleConfig.sfondo);

  const overlay = createElement("div", "module-overlay");
  const container = createElement("div", "module-container");
  const card = createElement("div", "module-card");
  const contentRoot = createElement("div", "module-inner");

  setCardBackground(card, moduleConfig.card);

  /* Applica i colori personalizzati del modulo */
  applyModuleStyle(
    section,
    card,
    moduleConfig.stile || {}
  );

  card.appendChild(contentRoot);
  container.appendChild(card);
  overlay.appendChild(container);
  section.appendChild(overlay);

  return {
    section,
    card,
    contentRoot
  };
}

function appendModule(section) {
  const storybook = $("storybook");

  if (storybook && section) {
    storybook.appendChild(section);
  }
}

/* ==========================================================
   HERO
   ========================================================== */

function buildHero() {
  const config = get("moduli.hero", {});

  if (config.attivo === false) return;

  const { section, card, contentRoot } = createModuleSection(
    "hero",
    config
  );

  card.classList.add("hero-card");

  if (config.foto) {
    const photoWrap = createElement(
      "div",
      "hero-photo-wrap"
    );

    const photo = createElement("img", "hero-photo");
    photo.src = config.foto;
    photo.alt = config.nome
      ? `Foto di ${config.nome}`
      : "Foto della festeggiata";

    photoWrap.appendChild(photo);
    contentRoot.appendChild(photoWrap);
  }

  const content = createElement("div", "hero-content");

  if (config.titolo) {
    const title = createElement(
      "p",
      "hero-kicker",
      config.titolo
    );

    content.appendChild(title);
  }

  if (config.nome) {
    const name = createElement(
      "h1",
      "hero-name",
      config.nome
    );

    content.appendChild(name);
  }

  if (config.frase) {
    const phrase = createElement(
      "p",
      "hero-phrase",
      config.frase
    );

    content.appendChild(phrase);
  }

  contentRoot.appendChild(content);
  appendModule(section);
}

/* ==========================================================
   PRESENTAZIONE / PERGAMENA
   ========================================================== */

function buildPresentation() {
  const config = get("moduli.presentazione", {});

  if (config.attivo === false) return;

  const { section, card, contentRoot } = createModuleSection(
    "presentation",
    config
  );

  card.classList.add("presentation-card");

  const content = createElement(
    "div",
    "presentation-content"
  );

  if (config.frase) {
    const phrase = createElement(
      "p",
      "presentation-phrase",
      config.frase
    );

    content.appendChild(phrase);
  }

  if (config.genitori) {
    const parentsLabel = createElement(
      "p",
      "presentation-label",
      "I genitori"
    );

    const parents = createElement(
      "h2",
      "presentation-parents",
      config.genitori
    );

    content.appendChild(parentsLabel);
    content.appendChild(parents);
  }

  if (config.testo) {
    const text = createElement(
      "p",
      "presentation-text",
      config.testo
    );

    content.appendChild(text);
  }

  contentRoot.appendChild(content);
  appendModule(section);
}

/* ==========================================================
   COUNTDOWN
   ========================================================== */

function buildCountdown() {
  const config = get("moduli.countdown", {});

  if (config.attivo === false) return;

  const { section, card, contentRoot } = createModuleSection(
    "countdown",
    config
  );

  card.classList.add("countdown-card");

  if (config.titolo) {
    const title = createElement(
      "h2",
      "module-title",
      config.titolo
    );

    contentRoot.appendChild(title);
  }

  const countdown = createElement(
    "div",
    "countdown-grid"
  );

  const labels = config.etichette || {};

  const units = [
    {
      key: "days",
      label: labels.giorni || "Giorni"
    },
    {
      key: "hours",
      label: labels.ore || "Ore"
    },
    {
      key: "minutes",
      label: labels.minuti || "Minuti"
    },
    {
      key: "seconds",
      label: labels.secondi || "Secondi"
    }
  ];

  units.forEach((unit) => {
    const box = createElement(
      "div",
      "countdown-item"
    );

    const value = createElement(
      "span",
      "countdown-value",
      "00"
    );

    value.id = `countdown-${unit.key}`;

    const label = createElement(
      "span",
      "countdown-label",
      unit.label
    );

    box.appendChild(value);
    box.appendChild(label);
    countdown.appendChild(box);
  });

  const completedText = createElement(
    "p",
    "countdown-completed hidden",
    config.testoConcluso || "Il grande giorno è arrivato!"
  );

  completedText.id = "countdownCompleted";

  contentRoot.appendChild(countdown);
  contentRoot.appendChild(completedText);
  appendModule(section);

  startCountdown(config.dataEvento);
}

function startCountdown(eventDate) {
  if (!eventDate) return;

  const targetDate = new Date(eventDate).getTime();

  if (Number.isNaN(targetDate)) return;

  let intervalId = null;

  const update = () => {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
      setCountdownValue("days", 0);
      setCountdownValue("hours", 0);
      setCountdownValue("minutes", 0);
      setCountdownValue("seconds", 0);

      document
        .querySelector(".countdown-grid")
        ?.classList.add("hidden");

      show($("countdownCompleted"));

      if (intervalId) {
        clearInterval(intervalId);
      }

      return;
    }

    const days = Math.floor(
      distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (distance / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
      (distance / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
      (distance / 1000) % 60
    );

    setCountdownValue("days", days);
    setCountdownValue("hours", hours);
    setCountdownValue("minutes", minutes);
    setCountdownValue("seconds", seconds);
  };

  update();

  intervalId = window.setInterval(update, 1000);
}

function setCountdownValue(unit, value) {
  const element = $(`countdown-${unit}`);

  if (element) {
    element.textContent = String(value).padStart(2, "0");
  }
}

/* ==========================================================
   GALLERIA
   ========================================================== */

function buildGallery() {
  const config = get("moduli.gallery", {});

  if (config.attivo === false) return;

  const photos = Array.isArray(config.foto)
    ? config.foto.filter(Boolean).slice(0, 4)
    : [];

  if (!photos.length) return;

  const { section, card, contentRoot } = createModuleSection(
    "gallery",
    config
  );

  card.classList.add("gallery-card");

  if (config.titolo) {
    const title = createElement(
      "h2",
      "module-title",
      config.titolo
    );

    contentRoot.appendChild(title);
  }

  if (config.testo) {
    const text = createElement(
      "p",
      "module-text",
      config.testo
    );

    contentRoot.appendChild(text);
  }

  const slider = createElement("div", "gallery-slider");

  const stage = createElement("div", "gallery-stage");

  const imageButton = createElement(
    "button",
    "gallery-display"
  );
  imageButton.type = "button";
  imageButton.setAttribute(
    "aria-label",
    "Apri foto"
  );

  const image = createElement(
    "img",
    "gallery-display-image"
  );

  imageButton.appendChild(image);

  const prevButton = createElement(
    "button",
    "gallery-nav gallery-nav-prev",
    "‹"
  );
  prevButton.type = "button";
  prevButton.setAttribute(
    "aria-label",
    "Foto precedente"
  );

  const nextButton = createElement(
    "button",
    "gallery-nav gallery-nav-next",
    "›"
  );
  nextButton.type = "button";
  nextButton.setAttribute(
    "aria-label",
    "Foto successiva"
  );

  stage.appendChild(prevButton);
  stage.appendChild(imageButton);
  stage.appendChild(nextButton);

  const footer = createElement("div", "gallery-footer");

  const dots = createElement("div", "gallery-dots");

  const counter = createElement(
    "div",
    "gallery-counter"
  );

  footer.appendChild(dots);
  footer.appendChild(counter);

  slider.appendChild(stage);
  slider.appendChild(footer);

  contentRoot.appendChild(slider);
  appendModule(section);

  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function renderGallery() {
    const currentPhoto = photos[currentIndex];

    image.src = currentPhoto;
    image.alt = `Foto ${currentIndex + 1}`;

    counter.textContent = `${currentIndex + 1} / ${photos.length}`;

    dots.innerHTML = "";

    photos.forEach((_, index) => {
      const dot = createElement(
        "button",
        `gallery-dot ${index === currentIndex ? "active" : ""}`
      );

      dot.type = "button";
      dot.setAttribute(
        "aria-label",
        `Vai alla foto ${index + 1}`
      );

      dot.addEventListener("click", () => {
        currentIndex = index;
        renderGallery();
      });

      dots.appendChild(dot);
    });

    if (photos.length <= 1) {
      prevButton.classList.add("hidden");
      nextButton.classList.add("hidden");
      footer.classList.add("hidden");
    } else {
      prevButton.classList.remove("hidden");
      nextButton.classList.remove("hidden");
      footer.classList.remove("hidden");
    }
  }

  function goPrev() {
    currentIndex =
      (currentIndex - 1 + photos.length) % photos.length;

    renderGallery();
  }

  function goNext() {
    currentIndex =
      (currentIndex + 1) % photos.length;

    renderGallery();
  }

  prevButton.addEventListener("click", goPrev);
  nextButton.addEventListener("click", goNext);

  imageButton.addEventListener("click", () => {
    openModal({
      title: config.titolo || "",
      text: "",
      image: photos[currentIndex],
      imageAlt: `Foto ${currentIndex + 1}`
    });
  });

  stage.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  });

  stage.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].screenX;

    const diff = touchEndX - touchStartX;

    if (Math.abs(diff) < 40) return;

    if (diff > 0) {
      goPrev();
    } else {
      goNext();
    }
  });

  renderGallery();
}

/* ==========================================================
   DATA, ORA E LUOGO
   ========================================================== */

function buildEventInfo() {
  const config = get("moduli.eventoInfo", {});

  if (config.attivo === false) return;

  const event = CONFIG.evento || {};
  const maps = CONFIG.maps || {};

  const { section, card, contentRoot } = createModuleSection(
    "event",
    config
  );

  card.classList.add("event-card");

  if (config.titolo) {
    const title = createElement(
      "h2",
      "module-title",
      config.titolo
    );

    contentRoot.appendChild(title);
  }

  if (config.testo) {
    const text = createElement(
      "p",
      "module-text",
      config.testo
    );

    contentRoot.appendChild(text);
  }

  const details = createElement(
    "div",
    "event-details"
  );

  if (config.mostraData !== false) {
    const dateText = [
      event.giornoSettimana,
      event.giorno,
      event.mese,
      event.anno
    ]
      .filter(Boolean)
      .join(" ");

    if (dateText) {
      details.appendChild(
        createInfoItem("📅", "Data", dateText)
      );
    }
  }

  if (config.mostraOra !== false && event.ora) {
    details.appendChild(
      createInfoItem("🕒", "Ora", event.ora)
    );
  }

  if (
    config.mostraLuogo !== false &&
    (maps.nomeLuogo || maps.indirizzo)
  ) {
    const locationText = [
      maps.nomeLuogo,
      maps.indirizzo
    ]
      .filter(Boolean)
      .join("\n");

    details.appendChild(
      createInfoItem(
        "📍",
        "Luogo",
        locationText
      )
    );
  }

  contentRoot.appendChild(details);

  if (
    config.mostraMappa !== false &&
    (maps.link || maps.indirizzo)
  ) {
    const mapButton = createElement(
      "a",
      "story-button map-button"
    );

    mapButton.textContent =
      maps.testoPulsante || "Vedi la posizione";

    mapButton.href = getMapsLink();
    mapButton.target = "_blank";
    mapButton.rel = "noopener noreferrer";

    contentRoot.appendChild(mapButton);
  }

  appendModule(section);
}

function createInfoItem(icon, label, value) {
  const item = createElement("div", "event-info-item");

  const iconElement = createElement(
    "span",
    "event-info-icon",
    icon
  );

  const content = createElement(
    "div",
    "event-info-content"
  );

  const labelElement = createElement(
    "span",
    "event-info-label",
    label
  );

  const valueElement = createElement(
    "span",
    "event-info-value",
    value
  );

  content.appendChild(labelElement);
  content.appendChild(valueElement);

  item.appendChild(iconElement);
  item.appendChild(content);

  return item;
}

function getMapsLink() {
  const maps = CONFIG.maps || {};

  if (maps.link) {
    return maps.link;
  }

  if (maps.indirizzo) {
    return (
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(maps.indirizzo)
    );
  }

  return "#";
}

/* ==========================================================
   ITINERARIO
   ========================================================== */

function buildItinerary() {
  const config = get("moduli.itinerary", {});

  if (config.attivo === false) return;

  const events = Array.isArray(config.eventi)
    ? config.eventi
    : [];

  const { section, card, contentRoot } = createModuleSection(
    "itinerary",
    config
  );

  card.classList.add("itinerary-card");

  if (config.titolo) {
    const title = createElement(
      "h2",
      "module-title",
      config.titolo
    );

    contentRoot.appendChild(title);
  }

  if (config.testo) {
    const text = createElement(
      "p",
      "module-text",
      config.testo
    );

    contentRoot.appendChild(text);
  }

  const timeline = createElement(
    "div",
    "timeline"
  );

  events.forEach((event) => {
    const item = createElement(
      "div",
      "timeline-item"
    );

    const marker = createElement(
      "div",
      "timeline-marker",
      event.icona || "✨"
    );

    const content = createElement(
      "div",
      "timeline-content"
    );

    if (event.ora) {
      content.appendChild(
        createElement(
          "span",
          "timeline-time",
          event.ora
        )
      );
    }

    if (event.titolo) {
      content.appendChild(
        createElement(
          "h3",
          "timeline-title",
          event.titolo
        )
      );
    }

    if (event.descrizione) {
      content.appendChild(
        createElement(
          "p",
          "timeline-description",
          event.descrizione
        )
      );
    }

    item.appendChild(marker);
    item.appendChild(content);
    timeline.appendChild(item);
  });

  contentRoot.appendChild(timeline);
  appendModule(section);
}

/* ==========================================================
   MODULI INFORMATIVI
   REGALO E BAMBINI
   ========================================================== */

function buildInformationModule(moduleName) {
  const config = get(`moduli.${moduleName}`, {});

  if (config.attivo === false) return;

  const { section, card, contentRoot } = createModuleSection(
    moduleName,
    config
  );

  card.classList.add("information-card");

  if (config.icona) {
    contentRoot.appendChild(
      createElement(
        "div",
        "information-icon",
        config.icona
      )
    );
  }

  if (config.titolo) {
    contentRoot.appendChild(
      createElement(
        "h2",
        "module-title",
        config.titolo
      )
    );
  }

  if (config.testo) {
    contentRoot.appendChild(
      createElement(
        "p",
        "module-text",
        config.testo
      )
    );
  }

  appendModule(section);
}

/* ==========================================================
   DRESS CODE
   ========================================================== */

function buildDresscode() {
  const config = get("moduli.dresscode", {});

  if (config.attivo === false) return;

  const { section, card, contentRoot } = createModuleSection(
    "dresscode",
    config
  );

  card.classList.add("dresscode-card");

  if (config.titolo) {
    contentRoot.appendChild(
      createElement(
        "h2",
        "module-title",
        config.titolo
      )
    );
  }

  if (config.testo) {
    contentRoot.appendChild(
      createElement(
        "p",
        "module-text",
        config.testo
      )
    );
  }

  if (config.immagine) {
    const preview = createElement(
      "img",
      "dresscode-preview"
    );

    preview.src = config.immagine;
    preview.alt = config.titolo || "Dress Code";

    contentRoot.appendChild(preview);
  }

  if (config.mostraPulsante !== false) {
    const button = createElement(
    "button",
    "story-button dresscode-button",
    config.testoPulsante || "Vedi il dress code"
  );

    button.type = "button";

    button.addEventListener("click", () => {
    openModal({
      title: config.titolo || "Dress Code",
      text: config.testo || "",
      image: config.immagine || "",
      imageAlt: config.titolo || "Dress Code"
    });
  });

    contentRoot.appendChild(button);
  }

  appendModule(section);
}

/* ==========================================================
   CONFERMA WHATSAPP
   ========================================================== */

function buildRsvp() {
  const config = get("moduli.rsvp", {});

  if (config.attivo === false) return;

  const whatsapp = CONFIG.whatsapp || {};

  const { section, card, contentRoot } = createModuleSection(
    "rsvp",
    config
  );

  card.classList.add("rsvp-card");

  if (config.titolo) {
    contentRoot.appendChild(
      createElement(
        "h2",
        "module-title",
        config.titolo
      )
    );
  }

  if (config.testo) {
    contentRoot.appendChild(
      createElement(
        "p",
        "module-text",
        config.testo
      )
    );
  }

  if (
    config.mostraWhatsapp !== false &&
    whatsapp.numero
  ) {
    const button = createElement(
      "a",
      "story-button whatsapp-button"
    );

    button.textContent =
      whatsapp.testoPulsante ||
      "Conferma la presenza";

    button.href =
      `https://wa.me/${whatsapp.numero}` +
      `?text=${encodeWhatsAppText(whatsapp.messaggio)}`;

    button.target = "_blank";
    button.rel = "noopener noreferrer";

    contentRoot.appendChild(button);
  }

  appendModule(section);
}

/* ==========================================================
   FOTO FINALE
   ========================================================== */

function buildFinale() {
  const config = get("moduli.finale", {});

  if (config.attivo === false) return;

  const { section, card, contentRoot } = createModuleSection(
    "ending",
    config
  );

  card.classList.add("ending-card");

  if (config.foto) {
    const photo = createElement(
      "img",
      "ending-photo"
    );

    photo.src = config.foto;
    photo.alt = config.titolo
      ? `Foto di ${config.titolo}`
      : "Foto finale";

    contentRoot.appendChild(photo);
  }

  const content = createElement(
    "div",
    "ending-content"
  );

  if (config.titolo) {
    content.appendChild(
      createElement(
        "h2",
        "ending-title",
        config.titolo
      )
    );
  }

  if (config.frase) {
    content.appendChild(
      createElement(
        "p",
        "ending-phrase",
        config.frase
      )
    );
  }

  contentRoot.appendChild(content);
  appendModule(section);
}

/* ==========================================================
   CREAZIONE STORYBOOK
   ========================================================== */

function buildStorybook() {
  const storybook = $("storybook");

  if (!storybook) return;

  storybook.innerHTML = "";

  buildHero();
  buildPresentation();
  buildCountdown();
  buildGallery();
  buildEventInfo();
  buildItinerary();
  buildInformationModule("gift");
  buildInformationModule("kids");
  buildDresscode();
  buildRsvp();
  buildFinale();
}

/* ==========================================================
   MODALE GENERICA
   ========================================================== */

function initModal() {
  document
    .querySelectorAll("[data-close-modal]")
    .forEach((element) => {
      element.addEventListener("click", closeModal);
    });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

function openModal({
  title = "",
  text = "",
  image = "",
  imageAlt = ""
}) {
  const modal = $("modal");
  const modalTitle = $("modalTitle");
  const modalText = $("modalText");
  const modalImage = $("modalImage");

  if (!modal) return;

  if (modalTitle) {
    modalTitle.textContent = title;
    modalTitle.classList.toggle("hidden", !title);
  }

  if (modalText) {
    modalText.textContent = text;
    modalText.classList.toggle("hidden", !text);
  }

  if (modalImage) {
    if (image) {
      modalImage.src = image;
      modalImage.alt = imageAlt;
      show(modalImage);
    } else {
      modalImage.removeAttribute("src");
      modalImage.alt = "";
      hide(modalImage);
    }
  }

  show(modal);
  document.body.classList.add("modal-open");
}

function closeModal() {
  hide($("modal"));
  document.body.classList.remove("modal-open");
}

/* ==========================================================
   MUSICA
   ========================================================== */

function initMusic() {
  const config = CONFIG.musica || {};

  const music = $("bgMusic");
  const source = $("musicSource");
  const audioHint = $("tapAudioHint");

  if (
    !music ||
    !source ||
    config.attiva === false ||
    !config.file
  ) {
    hide(audioHint);
    return;
  }

  source.src = config.file;
  music.load();

  if (audioHint) {
    audioHint.textContent =
      config.iconaAttiva || "🔊";

    if (config.mostraIconaAudio !== false) {
      show(audioHint);
    }

    audioHint.addEventListener("click", () => {
      toggleMusic();
    });
  }

  addAudioUnlockListeners();
}

function tryStartMusic() {
  const music = $("bgMusic");
  const audioHint = $("tapAudioHint");

  if (
    !music ||
    get("musica.attiva", true) === false
  ) {
    return;
  }

  music.muted = false;

  const playPromise = music.play();

  if (playPromise && typeof playPromise.catch === "function") {
    playPromise
      .then(() => {
        updateAudioIcon(true);
      })
      .catch(() => {
        if (get("musica.mostraIconaAudio", true)) {
          show(audioHint);
        }
      });
  }
}

function toggleMusic() {
  const music = $("bgMusic");

  if (!music) return;

  if (music.paused) {
    music.muted = false;

    music
      .play()
      .then(() => {
        updateAudioIcon(true);
      })
      .catch(() => {});
  } else {
    music.pause();
    updateAudioIcon(false);
  }
}

function updateAudioIcon(isPlaying) {
  const audioHint = $("tapAudioHint");

  if (!audioHint) return;

  audioHint.textContent = isPlaying
    ? get("musica.iconaAttiva", "🔊")
    : get("musica.iconaDisattiva", "🔇");

  if (get("musica.mostraIconaAudio", true)) {
    show(audioHint);
  }
}

function addAudioUnlockListeners() {
  const unlock = () => {
    tryStartMusic();

    document.removeEventListener("click", unlock);
    document.removeEventListener("touchstart", unlock);
    document.removeEventListener("keydown", unlock);
  };

  document.addEventListener("click", unlock, {
    once: true
  });

  document.addEventListener("touchstart", unlock, {
    once: true,
    passive: true
  });

  document.addEventListener("keydown", unlock, {
    once: true
  });
}

/* ==========================================================
   VIDEO INTRO
   ========================================================== */

function initIntro() {
  const config = CONFIG.intro || {};

  const video = $("introVideo");
  const source = $("introSource");
  const storybook = $("storybook");

  if (
    config.attivo === false ||
    !config.video ||
    !video ||
    !source
  ) {
    showStorybook();
    return;
  }

  source.src = config.video;
  video.load();

  show(video);
  hide(storybook);

  let introCompleted = false;

  const finishIntro = () => {
    if (introCompleted) return;

    introCompleted = true;

    if (config.mostraFlashFinale !== false) {
      showFlash();
    }

    video.classList.add("video-hide");
    showStorybook();
    tryStartMusic();

    window.setTimeout(() => {
      video.pause();
      hide(video);
      video.classList.remove("video-hide");
    }, 900);
  };

  video.addEventListener("ended", finishIntro);

  video.addEventListener("error", finishIntro);

  video.addEventListener("loadedmetadata", () => {
    const playPromise = video.play();

    if (
      playPromise &&
      typeof playPromise.catch === "function"
    ) {
      playPromise.catch(() => {
        finishIntro();
      });
    }
  });

  window.setTimeout(() => {
    if (
      video.readyState < 2 &&
      !introCompleted
    ) {
      finishIntro();
    }
  }, 5000);
}

function showStorybook() {
  const storybook = $("storybook");

  if (!storybook) return;

  show(storybook);
  storybook.classList.add("storybook-visible");

  initScrollAnimations();
}

function showFlash() {
  const flash = $("flash");

  if (!flash) return;

  flash.classList.add("active");

  window.setTimeout(() => {
    flash.classList.remove("active");
  }, 900);
}

/* ==========================================================
   ANIMAZIONI ALLO SCROLL
   ========================================================== */

function initScrollAnimations() {
  const modules = document.querySelectorAll(
    ".story-module"
  );

  if (
    !modules.length ||
    !("IntersectionObserver" in window)
  ) {
    modules.forEach((module) => {
      module.classList.add("module-visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const module = entry.target;
        const animation =
          module.dataset.animation || "fade";

        module.classList.add(
          "module-visible",
          `animation-${animation}`
        );

        currentObserver.unobserve(module);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  modules.forEach((module) => {
    observer.observe(module);
  });
}

/* ==========================================================
   EFFETTI
   ========================================================== */

function initEffects() {
  const effects = Array.isArray(CONFIG.effetti)
    ? CONFIG.effetti
    : [];

  const root = $("effectsRoot");

  if (!root) return;

  root.innerHTML = "";

  if (effects.includes("sparkles")) {
    createSparkles(root);
  }

  if (effects.includes("confetti")) {
    createConfetti(root);
  }

  if (effects.includes("balloons")) {
    createBalloons(root);
  }

  if (effects.includes("disco")) {
    createDisco(root);
  }
}

function createSparkles(root) {
  const layer = createElement(
    "div",
    "sparkles-layer"
  );

  for (let index = 0; index < 35; index++) {
    const sparkle = createElement(
      "span",
      "sparkle"
    );

    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;

    sparkle.style.animationDelay =
      `${Math.random() * 4}s`;

    sparkle.style.animationDuration =
      `${2 + Math.random() * 3}s`;

    sparkle.style.setProperty(
      "--sparkle-size",
      `${5 + Math.random() * 9}px`
    );

    layer.appendChild(sparkle);
  }

  root.appendChild(layer);
}

function createConfetti(root) {
  const layer = createElement(
    "div",
    "confetti-layer"
  );

  root.appendChild(layer);
}

function createBalloons(root) {
  const layer = createElement(
    "div",
    "balloons-layer"
  );

  for (let index = 0; index < 12; index++) {
    const balloon = createElement(
      "span",
      "balloon"
    );

    balloon.style.left =
      `${Math.random() * 100}%`;

    balloon.style.animationDuration =
      `${8 + Math.random() * 7}s`;

    balloon.style.animationDelay =
      `${Math.random() * 6}s`;

    balloon.style.setProperty(
      "--balloon-hue",
      Math.floor(Math.random() * 360)
    );

    layer.appendChild(balloon);
  }

  root.appendChild(layer);
}

function createDisco(root) {
  const layer = createElement(
    "div",
    "disco-layer"
  );

  for (let index = 0; index < 4; index++) {
    const beam = createElement(
      "span",
      "disco-beam"
    );

    beam.style.left = `${index * 25}%`;
    beam.style.animationDelay =
      `${index * 0.8}s`;

    layer.appendChild(beam);
  }

  root.appendChild(layer);
}

/* ==========================================================
   AVVIO
   ========================================================== */

function init() {
  applyMeta();
  applyTheme();

  buildStorybook();

  initModal();
  initMusic();
  initEffects();
  initIntro();
}

document.addEventListener("DOMContentLoaded", init);