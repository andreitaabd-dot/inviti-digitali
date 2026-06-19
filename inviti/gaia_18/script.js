const CONFIG = window.INVITO_CONFIG || INVITO_CONFIG || {};

const $ = (id) => document.getElementById(id);

function get(path, fallback = "") {
  return path.split(".").reduce((obj, key) => {
    return obj && obj[key] !== undefined ? obj[key] : undefined;
  }, CONFIG) ?? fallback;
}

function show(el) {
  if (el) el.classList.remove("hidden");
}

function hide(el) {
  if (el) el.classList.add("hidden");
}

function setText(id, value) {
  const el = $(id);
  if (!el) return;

  if (value === undefined || value === null || value === "") {
    hide(el);
    return;
  }

  el.textContent = value;
  show(el);
}

function setImage(id, src) {
  const el = $(id);
  if (!el) return;

  if (!src) {
    hide(el);
    return;
  }

  el.src = src;
  show(el);
}

function setBackground(el, src) {
  if (!el || !src) return;
  el.style.backgroundImage = `url("${src}")`;
}

function applyMeta() {
  const meta = CONFIG.meta || {};

  if (meta.title) document.title = meta.title;

  updateMeta("og:title", meta.title);
  updateMeta("og:description", meta.description);
  updateMeta("og:image", meta.image);
  updateMeta("og:url", meta.url);
}

function updateMeta(property, content) {
  if (!content) return;

  const el = document.querySelector(`meta[property="${property}"]`);
  if (el) el.setAttribute("content", content);
}

function applyTheme() {
  const tema = CONFIG.tema || {};
  const root = document.documentElement;

  if (tema.colorePrimario) root.style.setProperty("--primary", tema.colorePrimario);
  if (tema.coloreSecondario) root.style.setProperty("--secondary", tema.coloreSecondario);
  if (tema.coloreTesto) root.style.setProperty("--text", tema.coloreTesto);

  if (tema.coloreCard) root.style.setProperty("--card-bg", tema.coloreCard);
  if (tema.coloreCardBordo) root.style.setProperty("--card-border", tema.coloreCardBordo);

  if (tema.fontTitolo) root.style.setProperty("--title-font", tema.fontTitolo);
  if (tema.fontTesto) root.style.setProperty("--text-font", tema.fontTesto);

  if (tema.grandezzaTitolo) root.style.setProperty("--title-size", tema.grandezzaTitolo);
  if (tema.grandezzaNome) root.style.setProperty("--name-size", tema.grandezzaNome);
}

function applyTexts() {
  setText("titolo", CONFIG.titolo);
  setText("sottotitolo", CONFIG.sottotitolo);

  setText("descrizione1", CONFIG.descrizione1);
  setText("descrizione2", CONFIG.descrizione2);

  setText("mese", CONFIG.mese);
  setText("giorno", CONFIG.giorno);
  setText("anno", CONFIG.anno);

  setText("giornoSettimana", CONFIG.giornoSettimana);
  setText("ora", CONFIG.ora);

  setText("testoFinale", CONFIG.testoFinale);

  setText("luogoNome", CONFIG.luogoNome);
  setText("indirizzoTesto", CONFIG.indirizzoMaps);

  if (CONFIG.luogoNome || CONFIG.indirizzoMaps) {
    show($("luogoBox"));
  } else {
    hide($("luogoBox"));
  }

  const openText =
    get("cover.testoBottoneApri") ||
    CONFIG.testoBottoneApri ||
    "Apri la busta";

  setText("openBtn", openText);
}

function applyImages() {
  const immagini = CONFIG.immagini || {};

  setBackground($("cover"), immagini.sfondoCover || immagini.sfondo || CONFIG.sfondoCover);
  setBackground($("invite"), immagini.sfondoInvito || immagini.sfondo || CONFIG.sfondoInvito);

  const envelopeImg =
    get("cover.envelope.immagine") ||
    immagini.envelope ||
    CONFIG.envelope;

  setImage("envelopeImg", envelopeImg);

  const envelopeWidth = get("cover.envelope.width");
  if (envelopeWidth && $("envelope")) {
    $("envelope").style.width = envelopeWidth;
  }

  const deco = get("cover.decorazioneTop", {});
  const decoImg =
    deco.immagine ||
    immagini.decorazioneTop ||
    CONFIG.decorazioneTop;

  if (deco.attiva === false || !decoImg) {
    hide($("coverDecorationWrap"));
  } else {
    setImage("coverDecoration", decoImg);
    show($("coverDecorationWrap"));

    const img = $("coverDecoration");
    if (img) {
      if (deco.width) img.style.width = deco.width;
      if (deco.top) img.style.top = deco.top;
      if (deco.left) img.style.left = deco.left;
    }
  }
}

function applyMusic() {
  const music = $("bgMusic");
  const source = $("musicSource");
  const hint = $("tapAudioHint");

  const musicConfig = CONFIG.musica || {};
  const immagini = CONFIG.immagini || {};

  const active = musicConfig.attiva !== false;
  const file = musicConfig.file || immagini.musica;

  if (!music || !source || !active || !file) {
    hide(hint);
    return;
  }

  source.src = file;
  music.load();

  if (musicConfig.mostraIconaAudio !== false && hint) {
    hint.textContent = musicConfig.icona || "🔊";
    show(hint);
  }
}

function unlockAudio() {
  const music = $("bgMusic");
  const hint = $("tapAudioHint");

  if (!music) return;

  const unlock = () => {
    music.muted = false;
    music.play().catch(() => {});
    hide(hint);

    document.removeEventListener("click", unlock);
    document.removeEventListener("touchstart", unlock);
  };

  document.addEventListener("click", unlock, { once: true });
  document.addEventListener("touchstart", unlock, { once: true });
}

function initIntroVideo() {
  const introVideo = $("introVideo");
  const introSource = $("introSource");
  const cover = $("cover");
  const flash = $("flash");

  const intro = CONFIG.introVideo || {};
  const active = intro.attivo === true;
  const file = intro.file;

  if (!introVideo || !introSource || !active || !file) {
    show(cover);
    return;
  }

  introSource.src = file;
  introVideo.load();
  show(introVideo);

  const startVideo = () => {
    introVideo.play().catch(() => {
      hide(introVideo);
      show(cover);
    });
  };

  introVideo.addEventListener("loadedmetadata", () => {
    startVideo();
  });

  introVideo.addEventListener("ended", () => {
    show(cover);

    if (flash) flash.classList.add("active");
    introVideo.classList.add("video-hide");

    setTimeout(() => {
      hide(introVideo);
      if (flash) flash.classList.remove("active");
    }, 700);
  });
}

function initOpenEnvelope() {
  const openBtn = $("openBtn");
  const cover = $("cover");
  const invite = $("invite");
  const envelope = $("envelope");
  const flash = $("flash");
  const music = $("bgMusic");

  if (!openBtn || !cover || !invite) return;

  openBtn.addEventListener("click", () => {
    openBtn.disabled = true;

    if (music && get("musica.attiva", true) !== false) {
      music.muted = false;
      music.currentTime = 0;
      music.play().catch(() => {});
    }

    if (envelope) envelope.classList.add("open");

    setTimeout(() => {
      show(invite);
      invite.classList.add("fade-in");

      if (flash) flash.classList.add("active");
      cover.classList.add("fade-out");
    }, 850);

    setTimeout(() => {
      hide(cover);
      if (flash) flash.classList.remove("active");
    }, 1500);
  });
}

function createActionButton(key, config, href, onClick) {
  if (!config || config.attivo === false) return null;

  const isLink = !!href;
  const el = document.createElement(isLink ? "a" : "button");

  el.className = "circle-action";
  el.type = isLink ? undefined : "button";

  if (isLink) {
    el.href = href;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  }

  if (onClick) {
    el.addEventListener("click", onClick);
  }

  const icon = document.createElement("span");
  icon.className = "icon";

  if (config.icona) {
    const img = document.createElement("img");
    img.className = "icon-img";
    img.src = config.icona;
    img.alt = config.testo || key;
    icon.appendChild(img);
  } else {
    icon.textContent = config.emoji || config.iconaEmoji || "✨";
  }

  const text = document.createElement("span");
  text.className = "action-text";
  text.textContent = config.testo || key;

  el.appendChild(icon);
  el.appendChild(text);

  return el;
}

function applyButtons() {
  const actions = $("actions");
  if (!actions) return;

  actions.innerHTML = "";

  const pulsanti = CONFIG.pulsanti || {};

  const waNumber = CONFIG.whatsappNumero;
  const waText = encodeURIComponent(CONFIG.whatsappMessaggio || "");
  const waHref = waNumber ? `https://wa.me/${waNumber}?text=${waText}` : "";

  const mapsHref = CONFIG.mapsLink
  ? CONFIG.mapsLink
  : (
      CONFIG.indirizzoMaps
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.indirizzoMaps)}`
        : ""
    );

  const calendarHref = buildCalendarLink();

  const buttons = [
    createActionButton("whatsapp", pulsanti.whatsapp, waHref),
    createActionButton("maps", pulsanti.maps, mapsHref),
    createActionButton("calendario", pulsanti.calendario, calendarHref),
    createActionButton("dresscode", pulsanti.dresscode, "", openDresscodeModal),
    createActionButton("foto", pulsanti.foto, get("foto.link"))
  ];

  buttons.forEach((btn) => {
    if (btn) actions.appendChild(btn);
  });

  if (!actions.children.length) {
    hide(actions);
  } else {
    show(actions);
  }
}

function buildCalendarLink() {
  const calendario = CONFIG.calendario || {};

  if (calendario.attivo === false) return "";
  if (!calendario.inizio || !calendario.fine) return "";

  const title = encodeURIComponent(calendario.titolo || CONFIG.titolo || "Evento");
  const details = encodeURIComponent(calendario.descrizione || CONFIG.testoFinale || "");
  const location = encodeURIComponent(CONFIG.indirizzoMaps || "");

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${calendario.inizio}/${calendario.fine}&details=${details}&location=${location}`;
}

function applyDresscode() {
  const dress = CONFIG.dresscode || {};

  setText("dresscodeTitle", dress.titolo || "Dress code");
  setText("dresscodeText", dress.testo || "");

  if (dress.immagine) {
    setImage("dresscodeImage", dress.immagine);
  } else {
    hide($("dresscodeImage"));
  }

  document.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeDresscodeModal);
  });
}

function openDresscodeModal() {
  const dress = CONFIG.dresscode || {};
  if (dress.attivo === false) return;

  show($("dresscodeModal"));
}

function closeDresscodeModal() {
  hide($("dresscodeModal"));
}

function initEffects() {
  const effects = CONFIG.effetti || [];
  const root = $("effectsRoot");

  if (!root || !Array.isArray(effects)) return;

  root.innerHTML = "";

  if (effects.includes("confetti")) {
    const layer = document.createElement("div");
    layer.className = "confetti-layer";
    root.appendChild(layer);
  }

  if (effects.includes("balloons")) {
    createBalloons(root);
  }

  if (effects.includes("sparkles")) {
    createSparkles(root);
  }

  if (effects.includes("disco")) {
    createDisco(root);
  }
}

function createBalloons(root) {
  const layer = document.createElement("div");
  layer.className = "balloons-layer";

  for (let i = 0; i < 12; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";

    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = `${7 + Math.random() * 6}s`;
    balloon.style.animationDelay = `${Math.random() * 4}s`;

    const hue = Math.floor(Math.random() * 360);
    balloon.style.background =
      `radial-gradient(circle at 30% 30%, hsl(${hue}, 100%, 78%), hsl(${hue}, 70%, 52%))`;

    layer.appendChild(balloon);
  }

  root.appendChild(layer);
}

function createSparkles(root) {
  const layer = document.createElement("div");
  layer.className = "sparkles-layer";

  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";

    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 3}s`;
    sparkle.style.animationDuration = `${1.8 + Math.random() * 1.6}s`;

    layer.appendChild(sparkle);
  }

  root.appendChild(layer);
}

function createDisco(root) {
  const layer = document.createElement("div");
  layer.className = "disco-layer";

  for (let i = 0; i < 4; i++) {
    const beam = document.createElement("div");
    beam.className = "disco-beam";
    beam.style.left = `${i * 25}%`;
    beam.style.animationDelay = `${i * 0.7}s`;
    layer.appendChild(beam);
  }

  root.appendChild(layer);
}

function init() {
  applyMeta();
  applyTheme();
  applyTexts();
  applyImages();
  applyMusic();
  applyDresscode();
  applyButtons();
  initEffects();
  initOpenEnvelope();
  initIntroVideo();
  unlockAudio();
}

document.addEventListener("DOMContentLoaded", init);