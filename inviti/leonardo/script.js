const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const invite = document.getElementById("invite");
const music = document.getElementById("bgMusic");

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value !== undefined && value !== null) {
    el.textContent = value;
  }
}

function setLink(id, href) {
  const el = document.getElementById(id);
  if (el && href) {
    el.href = href;
  }
}

function applyConfig() {
  setText("titolo", INVITO_CONFIG.titolo);
  setText("sottotitolo", INVITO_CONFIG.sottotitolo);
  setText("desc1", INVITO_CONFIG.descrizione1);
  setText("desc2", INVITO_CONFIG.descrizione2);
  setText("mese", INVITO_CONFIG.mese);
  setText("giorno", INVITO_CONFIG.giorno);
  setText("anno", INVITO_CONFIG.anno);
  setText("giornoSettimana", INVITO_CONFIG.giornoSettimana);
  setText("ora", INVITO_CONFIG.ora);
  setText("testoFinale", INVITO_CONFIG.testoFinale);
  setText("openBtn", INVITO_CONFIG.testoBottoneApri);

  applyTheme();

  const messaggioWhatsapp = encodeURIComponent(
    INVITO_CONFIG.whatsappMessaggio || ""
  );

  const envelopeImg = document.getElementById("envelopeImg");

  if (INVITO_CONFIG.envelope && envelopeImg) {
    envelopeImg.src = INVITO_CONFIG.envelope;
  }

  setLink(
    "btnWhatsapp",
    `https://wa.me/${INVITO_CONFIG.whatsappNumero}?text=${messaggioWhatsapp}`
  );

  setLink(
    "btnMaps",
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      INVITO_CONFIG.indirizzoMaps || ""
    )}`
  );

  applyImages();
}

function applyImages() {
  const immagini = INVITO_CONFIG.immagini || {};

  const coverImage = document.querySelector(".dino-top");
  const deco = INVITO_CONFIG.decorazioneTop || {};

  if (coverImage && deco.immagine) {
    coverImage.src = deco.immagine;

    if (deco.left) coverImage.style.left = deco.left;
    if (deco.top) coverImage.style.top = deco.top;
    if (deco.width) coverImage.style.width = deco.width;
  }

 const inviteInner = document.querySelector(".invite-inner");
  const sfondo = INVITO_CONFIG.sfondo || immagini.sfondo;

  if (inviteInner && sfondo) {
    const invite = document.getElementById("invite");

    if (invite && sfondo) {
      invite.style.background =
        `url("${sfondo}") center/cover no-repeat`;
    }
  }

  const cover = document.getElementById("cover");

  if (cover && sfondo) {
    cover.style.background =
      `url("${sfondo}") center/cover no-repeat`;
  }

  if (music && immagini.musica) {
    const source = music.querySelector("source");
    if (source) {
      source.src = immagini.musica;
      music.load();
    }
  }
}

function initEffects() {
  const effetti = INVITO_CONFIG.effetti || [];

  if (effetti.includes("confetti")) {
    enableConfetti();
  }

  if (effetti.includes("balloons")) {
    createBalloons();
  }

  if (effetti.includes("sparkles")) {
    createSparkles();
  }

  if (effetti.includes("disco")) {
    createDiscoLights();
  }
}

function enableConfetti() {
  const layer = document.querySelector(".confetti-layer");
  if (layer) {
    layer.classList.add("active");
  }
}

function createBalloons() {
  const container = document.createElement("div");
  container.className = "balloons-layer";

  for (let i = 0; i < 12; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";

    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = `${7 + Math.random() * 6}s`;
    balloon.style.animationDelay = `${Math.random() * 4}s`;

    const hue = Math.floor(Math.random() * 360);
    balloon.style.background = `radial-gradient(circle at 30% 30%, hsl(${hue}, 100%, 78%), hsl(${hue}, 70%, 52%))`;

    container.appendChild(balloon);
  }

  document.body.appendChild(container);
}

function createSparkles() {
  const container = document.createElement("div");
  container.className = "sparkles-layer";

  for (let i = 0; i < 28; i++) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 3}s`;
    sparkle.style.animationDuration = `${1.8 + Math.random() * 1.6}s`;
    container.appendChild(sparkle);
  }

  document.body.appendChild(container);
}

function createDiscoLights() {
  const container = document.createElement("div");
  container.className = "disco-layer";

  for (let i = 0; i < 4; i++) {
    const beam = document.createElement("div");
    beam.className = "disco-beam";
    beam.style.left = `${10 + i * 25}%`;
    beam.style.animationDelay = `${i * 0.8}s`;
    container.appendChild(beam);
  }

  document.body.appendChild(container);
}

function initOpenAnimation() {
  if (!openBtn) {
    return;
  }

  const envelope = document.getElementById("envelope");

  openBtn.addEventListener("click", () => {
    openBtn.disabled = true;

    if (envelope) {
      envelope.classList.add("open");
    }

    setTimeout(() => {
      cover.classList.add("fade-out");
    }, 1300);

    setTimeout(() => {
      cover.classList.add("hidden");
      invite.classList.remove("hidden");
      invite.classList.add("fade-in");

      if (music) {
        music.play().catch(() => {
          console.log("Autoplay bloccato dal dispositivo");
        });
      }
    }, 2400);
  });
}

function applyTheme() {
  const tema = INVITO_CONFIG.tema || {};

  const root = document.documentElement;

  if (tema.colorePrimario) {
    root.style.setProperty("--primary", tema.colorePrimario);
  }

  if (tema.coloreSecondario) {
    root.style.setProperty("--secondary", tema.coloreSecondario);
  }

  if (tema.coloreTesto) {
    root.style.setProperty("--text", tema.coloreTesto);
  }

  if (tema.fontTitolo) {
    document.querySelectorAll("h1").forEach(el => {
      el.style.fontFamily = tema.fontTitolo;
    });
  }

  if (tema.fontTesto) {
    document.body.style.fontFamily = tema.fontTesto;
  }
}

applyConfig();
initEffects();
initOpenAnimation();