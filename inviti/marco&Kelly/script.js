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


/* =========================================================
   META
========================================================= */

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


/* =========================================================
   TEMA
========================================================= */

function applyTheme() {
  const tema = CONFIG.tema || {};
  const root = document.documentElement;

  if (tema.colorePrimario)
    root.style.setProperty("--primary", tema.colorePrimario);

  if (tema.coloreSecondario)
    root.style.setProperty("--secondary", tema.coloreSecondario);

  if (tema.coloreTesto)
    root.style.setProperty("--text", tema.coloreTesto);

  if (tema.coloreCard)
    root.style.setProperty("--card-bg", tema.coloreCard);

  if (tema.coloreCardBordo)
    root.style.setProperty("--card-border", tema.coloreCardBordo);

  if (tema.fontTitolo)
    root.style.setProperty("--title-font", tema.fontTitolo);

  if (tema.fontTesto)
    root.style.setProperty("--text-font", tema.fontTesto);

  if (tema.grandezzaTitolo)
    root.style.setProperty("--title-size", tema.grandezzaTitolo);

  if (tema.grandezzaNome)
    root.style.setProperty("--name-size", tema.grandezzaNome);
}


/* =========================================================
   TESTI
========================================================= */

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
 hide($("indirizzoTesto"));

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


/* =========================================================
   IMMAGINI
========================================================= */

function applyImages() {
  const immagini = CONFIG.immagini || {};

  setBackground(
    $("cover"),
    immagini.sfondoCover ||
    immagini.sfondo ||
    CONFIG.sfondoCover
  );

  setBackground(
    $("invite"),
    immagini.sfondoInvito ||
    immagini.sfondo ||
    CONFIG.sfondoInvito
  );

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


/* =========================================================
   MUSICA
========================================================= */

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


/* =========================================================
   VIDEO INTRO
   In questo invito è disattivato dal CONFIG
========================================================= */

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

      if (flash) {
        flash.classList.remove("active");
      }
    }, 700);
  });
}


/* =========================================================
   APERTURA BUSTA
========================================================= */

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

    if (
      music &&
      get("musica.attiva", true) !== false
    ) {
      music.muted = false;
      music.currentTime = 0;
      music.play().catch(() => {});
    }

    if (envelope) {
      envelope.classList.add("open");
    }

    setTimeout(() => {

      show(invite);
      invite.classList.add("fade-in");

      if (flash) {
        flash.classList.add("active");
      }

      cover.classList.add("fade-out");

    }, 850);

    setTimeout(() => {

      hide(cover);

      if (flash) {
        flash.classList.remove("active");
      }

    }, 1500);
  });
}


/* =========================================================
   CREAZIONE PULSANTI
========================================================= */

function createActionButton(key, config, href, onClick) {

  if (!config || config.attivo === false) {
    return null;
  }

  const isLink = !!href;

  const el = document.createElement(
    isLink ? "a" : "button"
  );

  el.className = "circle-action";

  if (!isLink) {
    el.type = "button";
  }

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

    icon.textContent =
      config.emoji ||
      config.iconaEmoji ||
      "✨";
  }

  const text = document.createElement("span");

  text.className = "action-text";
  text.textContent = config.testo || key;

  el.appendChild(icon);
  el.appendChild(text);

  return el;
}


/* =========================================================
   PULSANTI INVITO
========================================================= */

function applyButtons() {

  const actions = $("actions");

  if (!actions) return;

  actions.innerHTML = "";

  const pulsanti = CONFIG.pulsanti || {};


  /* WHATSAPP */

  const waNumber = CONFIG.whatsappNumero;

  const waText =
    encodeURIComponent(
      CONFIG.whatsappMessaggio || ""
    );

  const waHref = waNumber
    ? `https://wa.me/${waNumber}?text=${waText}`
    : "";


  /* CALENDARIO */

  const calendarHref =
    buildCalendarLink();


  /*
   * IMPORTANTE:
   *
   * MAPS non ha più un href diretto.
   * Apre il selettore:
   *
   * 1. Cerimonia
   * 2. Ricevimento
   */

  const buttons = [

    createActionButton(
      "whatsapp",
      pulsanti.whatsapp,
      waHref
    ),

    createActionButton(
      "maps",
      pulsanti.maps,
      "",
      openLocationSelector
    ),

    createActionButton(
      "calendario",
      pulsanti.calendario,
      calendarHref
    ),

    createActionButton(
      "dresscode",
      pulsanti.dresscode,
      "",
      openDresscodeModal
    ),

    createActionButton(
      "foto",
      pulsanti.foto,
      get("foto.link")
    )
  ];


  buttons.forEach((btn) => {

    if (btn) {
      actions.appendChild(btn);
    }

  });


  if (!actions.children.length) {
    hide(actions);
  } else {
    show(actions);
  }
}


/* =========================================================
   DUE INDIRIZZI
   CERIMONIA + RICEVIMENTO
========================================================= */

function openLocationSelector() {

  /*
   * Se NON esiste un secondo indirizzo,
   * mantiene il comportamento classico
   * dell'Invito Base.
   */

  const ricevimento = CONFIG.ricevimento || {};

  if (
    ricevimento.attivo !== true ||
    !ricevimento.indirizzoMaps
  ) {

    openGoogleMaps(CONFIG.indirizzoMaps);
    return;
  }


  /*
   * Se esiste il ricevimento,
   * crea il selettore dei due luoghi.
   */

  let overlay =
    document.getElementById("locationSelectorOverlay");


  /*
   * Lo creiamo soltanto la prima volta.
   */

  if (!overlay) {

    overlay = document.createElement("div");

    overlay.id = "locationSelectorOverlay";

    overlay.innerHTML = `

      <div class="location-selector-card">

        <button
          type="button"
          class="location-close"
          aria-label="Chiudi"
        >
          ×
        </button>

        <div class="location-heart">
          ♡
        </div>

        <h2>
          Dove festeggeremo
        </h2>

        <p class="location-intro">
          Scegli la destinazione
        </p>


        <button
          type="button"
          class="location-option"
          id="cerimoniaLocation"
        >

          <span class="location-icon">
            🏛️
          </span>

          <span class="location-info">

            <strong>
              Cerimonia civile
            </strong>

            <span>
              Comune di Pianezza
            </span>

            <small>
              Ore 10:30
            </small>

          </span>

          <span class="location-arrow">
            ›
          </span>

        </button>


        <button
          type="button"
          class="location-option"
          id="ricevimentoLocation"
        >

          <span class="location-icon">
            🥂
          </span>

          <span class="location-info">

            <strong>
              Ricevimento
            </strong>

            <span>
              Ristorante La Campana
            </span>

            <small>
              Ore ${ricevimento.ora || "12:30"}
            </small>

          </span>

          <span class="location-arrow">
            ›
          </span>

        </button>


        <div class="location-monogram">
          K & M
        </div>

      </div>
    `;


    /*
     * STILE DEL POPUP
     *
     * Inserito direttamente dallo script,
     * quindi NON devi modificare style.css.
     */

    const style =
      document.createElement("style");

    style.textContent = `

      #locationSelectorOverlay {

        position: fixed;

        inset: 0;

        z-index: 99999;

        display: flex;

        align-items: center;

        justify-content: center;

        padding: 24px;

        background:
          rgba(45, 34, 24, 0.42);

        backdrop-filter:
          blur(8px);

        -webkit-backdrop-filter:
          blur(8px);

        animation:
          locationFadeIn 0.28s ease;
      }


      .location-selector-card {

        position: relative;

        width: min(92vw, 390px);

        padding:
          34px 22px 25px;

        border-radius: 28px;

        background:
          linear-gradient(
            145deg,
            rgba(255,253,247,0.98),
            rgba(246,237,218,0.98)
          );

        border:
          1px solid rgba(198,161,91,0.60);

        box-shadow:
          0 24px 70px
          rgba(40,28,15,0.28);

        text-align: center;

        color: #5b4636;

        overflow: hidden;
      }


      .location-selector-card::before {

        content: "";

        position: absolute;

        width: 180px;

        height: 180px;

        top: -90px;

        right: -70px;

        border-radius: 50%;

        border:
          1px solid rgba(198,161,91,0.22);
      }


      .location-selector-card::after {

        content: "";

        position: absolute;

        width: 130px;

        height: 130px;

        bottom: -75px;

        left: -55px;

        border-radius: 50%;

        border:
          1px solid rgba(198,161,91,0.18);
      }


      .location-close {

        position: absolute;

        top: 10px;

        right: 14px;

        z-index: 2;

        border: 0;

        background: transparent;

        color: #9d7b46;

        font-size: 30px;

        line-height: 1;

        cursor: pointer;
      }


      .location-heart {

        color: #c6a15b;

        font-size: 29px;

        margin-bottom: 3px;
      }


      .location-selector-card h2 {

        position: relative;

        z-index: 1;

        margin: 0;

        color: #6c5036;

        font-family:
          var(--title-font),
          Georgia,
          serif;

        font-size: 29px;

        font-weight: 600;
      }


      .location-intro {

        position: relative;

        z-index: 1;

        margin:
          5px 0 22px;

        font-size: 14px;

        color: #9a8168;
      }


      .location-option {

        position: relative;

        z-index: 1;

        width: 100%;

        display: flex;

        align-items: center;

        gap: 13px;

        margin: 12px 0;

        padding: 16px 14px;

        border-radius: 18px;

        border:
          1px solid rgba(198,161,91,0.38);

        background:
          rgba(255,255,255,0.68);

        color: #5b4636;

        text-align: left;

        cursor: pointer;

        box-shadow:
          0 7px 22px
          rgba(108,80,54,0.08);

        transition:
          transform .2s ease,
          box-shadow .2s ease,
          background .2s ease;
      }


      .location-option:hover {

        transform:
          translateY(-2px);

        background:
          rgba(255,255,255,0.92);

        box-shadow:
          0 10px 28px
          rgba(108,80,54,0.14);
      }


      .location-icon {

        width: 44px;

        height: 44px;

        flex: 0 0 44px;

        display: flex;

        align-items: center;

        justify-content: center;

        border-radius: 50%;

        background:
          linear-gradient(
            145deg,
            #f8ecd4,
            #e8cf9c
          );

        font-size: 21px;
      }


      .location-info {

        min-width: 0;

        display: flex;

        flex-direction: column;

        flex: 1;
      }


      .location-info strong {

        color: #725333;

        font-size: 15px;

        margin-bottom: 2px;
      }


      .location-info span {

        font-size: 14px;

        color: #806c58;
      }


      .location-info small {

        margin-top: 4px;

        color: #b08b52;

        font-size: 12px;

        font-weight: 600;
      }


      .location-arrow {

        color: #c6a15b;

        font-size: 27px;

        line-height: 1;
      }


      .location-monogram {

        position: relative;

        z-index: 1;

        margin-top: 20px;

        color: #b8955c;

        font-family:
          var(--title-font),
          Georgia,
          serif;

        font-size: 21px;

        letter-spacing: 3px;
      }


      @keyframes locationFadeIn {

        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }


      @media (max-width: 480px) {

        #locationSelectorOverlay {
          padding: 18px;
        }

        .location-selector-card {
          width: 100%;
          padding:
            32px 17px 23px;
        }

        .location-selector-card h2 {
          font-size: 26px;
        }

      }

    `;


    document.head.appendChild(style);

    document.body.appendChild(overlay);


    /*
     * CERIMONIA
     */

    const cerimoniaBtn =
      document.getElementById(
        "cerimoniaLocation"
      );

    cerimoniaBtn.addEventListener(
      "click",
      () => {

        openGoogleMaps(
          CONFIG.indirizzoMaps
        );

      }
    );


    /*
     * RICEVIMENTO
     */

    const ricevimentoBtn =
      document.getElementById(
        "ricevimentoLocation"
      );

    ricevimentoBtn.addEventListener(
      "click",
      () => {

        openGoogleMaps(
          ricevimento.indirizzoMaps
        );

      }
    );


    /*
     * CHIUDI X
     */

    overlay
      .querySelector(".location-close")
      .addEventListener(
        "click",
        closeLocationSelector
      );


    /*
     * CHIUDI CLICCANDO FUORI
     */

    overlay.addEventListener(
      "click",
      (event) => {

        if (event.target === overlay) {
          closeLocationSelector();
        }

      }
    );

  }


  overlay.style.display = "flex";
}


/* =========================================================
   CHIUSURA POPUP LUOGHI
========================================================= */

function closeLocationSelector() {

  const overlay =
    document.getElementById(
      "locationSelectorOverlay"
    );

  if (overlay) {
    overlay.style.display = "none";
  }
}


/* =========================================================
   APERTURA GOOGLE MAPS
========================================================= */

function openGoogleMaps(location) {

  if (!location) return;


  /*
   * Se nel CONFIG abbiamo già inserito
   * un link completo Google Maps,
   * lo utilizza direttamente.
   *
   * Esempio:
   * https://share.google/....
   */

  if (
    location.startsWith("http://") ||
    location.startsWith("https://")
  ) {

    window.open(
      location,
      "_blank",
      "noopener,noreferrer"
    );

    return;
  }


  /*
   * Altrimenti genera una ricerca
   * Google Maps dall'indirizzo.
   */

  const url =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(location);

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}


/* =========================================================
   GOOGLE CALENDAR
========================================================= */

function buildCalendarLink() {

  const calendario =
    CONFIG.calendario || {};

  if (calendario.attivo === false) {
    return "";
  }

  if (
    !calendario.inizio ||
    !calendario.fine
  ) {
    return "";
  }

  const title =
    encodeURIComponent(
      calendario.titolo ||
      CONFIG.titolo ||
      "Evento"
    );

  const details =
    encodeURIComponent(
      calendario.descrizione ||
      CONFIG.testoFinale ||
      ""
    );

  const location =
    encodeURIComponent(
      CONFIG.indirizzoMaps || ""
    );

  return (
    "https://calendar.google.com/calendar/render" +
    "?action=TEMPLATE" +
    `&text=${title}` +
    `&dates=${calendario.inizio}/${calendario.fine}` +
    `&details=${details}` +
    `&location=${location}`
  );
}


/* =========================================================
   DRESS CODE
   Rimane compatibile con il template,
   anche se in questo invito è disattivato.
========================================================= */

function applyDresscode() {

  const dress =
    CONFIG.dresscode || {};

  setText(
    "dresscodeTitle",
    dress.titolo || "Dress code"
  );

  setText(
    "dresscodeText",
    dress.testo || ""
  );

  if (dress.immagine) {

    setImage(
      "dresscodeImage",
      dress.immagine
    );

  } else {

    hide(
      $("dresscodeImage")
    );
  }


  document
    .querySelectorAll(
      "[data-close-modal]"
    )
    .forEach((el) => {

      el.addEventListener(
        "click",
        closeDresscodeModal
      );

    });
}


function openDresscodeModal() {

  const dress =
    CONFIG.dresscode || {};

  if (dress.attivo === false) {
    return;
  }

  show(
    $("dresscodeModal")
  );
}


function closeDresscodeModal() {

  hide(
    $("dresscodeModal")
  );
}


/* =========================================================
   EFFETTI
========================================================= */

function initEffects() {

  const effects =
    CONFIG.effetti || [];

  const root =
    $("effectsRoot");

  if (
    !root ||
    !Array.isArray(effects)
  ) {
    return;
  }

  root.innerHTML = "";


  if (
    effects.includes("confetti")
  ) {

    const layer =
      document.createElement("div");

    layer.className =
      "confetti-layer";

    root.appendChild(layer);
  }


  if (
    effects.includes("balloons")
  ) {
    createBalloons(root);
  }


  if (
    effects.includes("sparkles")
  ) {
    createSparkles(root);
  }


  if (
    effects.includes("disco")
  ) {
    createDisco(root);
  }
}


/* =========================================================
   BALLOONS
========================================================= */

function createBalloons(root) {

  const layer =
    document.createElement("div");

  layer.className =
    "balloons-layer";


  for (
    let i = 0;
    i < 12;
    i++
  ) {

    const balloon =
      document.createElement("div");

    balloon.className =
      "balloon";

    balloon.style.left =
      `${Math.random() * 100}%`;

    balloon.style.animationDuration =
      `${7 + Math.random() * 6}s`;

    balloon.style.animationDelay =
      `${Math.random() * 4}s`;

    const hue =
      Math.floor(
        Math.random() * 360
      );

    balloon.style.background =
      `radial-gradient(
        circle at 30% 30%,
        hsl(${hue}, 100%, 78%),
        hsl(${hue}, 70%, 52%)
      )`;

    layer.appendChild(balloon);
  }


  root.appendChild(layer);
}


/* =========================================================
   SPARKLES
========================================================= */

function createSparkles(root) {

  const layer =
    document.createElement("div");

  layer.className =
    "sparkles-layer";


  for (
    let i = 0;
    i < 30;
    i++
  ) {

    const sparkle =
      document.createElement("span");

    sparkle.className =
      "sparkle";

    sparkle.style.left =
      `${Math.random() * 100}%`;

    sparkle.style.top =
      `${Math.random() * 100}%`;

    sparkle.style.animationDelay =
      `${Math.random() * 3}s`;

    sparkle.style.animationDuration =
      `${1.8 + Math.random() * 1.6}s`;

    layer.appendChild(sparkle);
  }


  root.appendChild(layer);
}


/* =========================================================
   DISCO
========================================================= */

function createDisco(root) {

  const layer =
    document.createElement("div");

  layer.className =
    "disco-layer";


  for (
    let i = 0;
    i < 4;
    i++
  ) {

    const beam =
      document.createElement("div");

    beam.className =
      "disco-beam";

    beam.style.left =
      `${i * 25}%`;

    beam.style.animationDelay =
      `${i * 0.7}s`;

    layer.appendChild(beam);
  }


  root.appendChild(layer);
}


/* =========================================================
   AVVIO INVITO
========================================================= */

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


document.addEventListener(
  "DOMContentLoaded",
  init
);