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

const tapHint = document.getElementById("tapAudioHint");

function hideTapHint() {
  if (tapHint) {
    tapHint.classList.add("hidden");
  }
}

document.addEventListener("touchstart", hideTapHint, { once: true });
document.addEventListener("click", hideTapHint, { once: true });

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

  const btnDresscode = document.getElementById("btnDresscode");

  if (btnDresscode && INVITO_CONFIG.dressCodeImage) {
    btnDresscode.href = INVITO_CONFIG.dressCodeImage;
    btnDresscode.target = "_blank";
  }

  applyImages();
}

function applyImages() {
  const immagini = INVITO_CONFIG.immagini || {};

  const coverImage = document.querySelector(".dino-top");
  const deco = INVITO_CONFIG.decorazioneTop || {};

  if (coverImage) {
  if (deco.immagine) {
    coverImage.src = deco.immagine;

    if (deco.left) coverImage.style.left = deco.left;
    if (deco.top) coverImage.style.top = deco.top;
    if (deco.width) coverImage.style.width = deco.width;

    coverImage.style.display = "block";
  } else {
    coverImage.style.display = "none";
  }
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

  // 👉 SFONDO SOLO AREA TESTO (NUOVO)
  /*
  if (inviteInner && immagini.sfondo) {
    inviteInner.style.background =
      `linear-gradient(
        180deg,
        rgba(255,255,255,0.95) 0%,
        rgba(255,255,255,0.92) 40%,
        rgba(255,255,255,0.85) 70%,
        rgba(255,255,255,0.80) 100%
      ),
      url("${immagini.sfondo}") center/cover no-repeat`;
  }*/

  const introVideo = document.getElementById("introVideo");
  const introSource = document.getElementById("introSource");

  if (introVideo && introSource && INVITO_CONFIG.introVideo) {
    introSource.src = INVITO_CONFIG.introVideo;
    introVideo.load();
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

function initOpenAnimation() {
  if (!openBtn) {
    return;
  }

  const envelope = document.getElementById("envelope");
  const flash = document.getElementById("flash");

  openBtn.addEventListener("click", () => {
    openBtn.disabled = true;

    if (music) {
      music.currentTime = 0;
      music.play().catch(() => {
        console.log("Audio bloccato");
      });
    }

    invite.classList.remove("hidden");

    if (envelope) {
      envelope.classList.add("open");
    }

    setTimeout(() => {
      cover.classList.add("fade-out");
    }, 1300);

    setTimeout(() => {
      if (flash) {
        flash.classList.add("active");
      }
    }, 1300);

    setTimeout(() => {
      cover.classList.add("hidden");

      if (flash) {
        flash.classList.remove("active");
      }
    }, 1600);
  });
}

function initIntroVideo() {
  const introVideo = document.getElementById("introVideo");

  if (!introVideo || !INVITO_CONFIG.introVideo || INVITO_CONFIG.introVideo.trim() === "") {
    cover.classList.remove("hidden");
    return;
  }

  introVideo.classList.remove("hidden");

  introVideo.onloadedmetadata = () => {
    const durata = introVideo.duration * 1000;

    setTimeout(() => {
      const flash = document.getElementById("flash");

      // 👉 mostra la cover sotto
      cover.classList.remove("hidden");

      hideTapHint();

      // 👉 fai partire insieme dissolvenza video + flash
      introVideo.classList.add("video-hide");

      if (flash) {
        flash.classList.add("active");
      }

      setTimeout(() => {
        introVideo.classList.add("hidden");

        if (flash) {
          flash.classList.remove("active");
        }
      }, 600);

    }, durata);
  };
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

function unlockAudioOnFirstTouch() {
  if (!music) return;

  const unlock = () => {
    music.muted = false;

    const playPromise = music.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Audio partito");
        })
        .catch(() => {
          console.log("Tentativo audio fallito, riprovo...");
          setTimeout(() => {
            music.play().catch(() => {});
          }, 300);
        });
    }
  };

  document.addEventListener("touchstart", unlock);
  document.addEventListener("click", unlock);
}

const btnDresscode = document.getElementById("btnDresscode");
const modalDresscode = document.getElementById("dresscodeModal");
const closeDresscode = document.getElementById("closeDresscode");
const previewDresscode = document.getElementById("dresscodePreview");

if (btnDresscode && modalDresscode) {
  btnDresscode.addEventListener("click", function (e) {
    e.preventDefault();
    previewDresscode.src = INVITO_CONFIG.dressCodeImage;
    modalDresscode.classList.remove("hidden");
  });
}

if (closeDresscode) {
  closeDresscode.addEventListener("click", function () {
    modalDresscode.classList.add("hidden");
  });
}

modalDresscode?.addEventListener("click", function (e) {
  if (e.target.classList.contains("dresscode-backdrop")) {
    modalDresscode.classList.add("hidden");
  }
});

applyConfig();
initEffects();
initOpenAnimation();
initIntroVideo();
unlockAudioOnFirstTouch();
