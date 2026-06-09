const config = MEMORIALE_CONFIG || {};
const music = document.getElementById("bgMusic");

function hasValue(value) {
  return value !== undefined && value !== null && String(value).trim() !== "";
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (!el) return;

  if (hasValue(value)) {
   el.innerText = value;
    el.classList.remove("hidden");
  } else {
    el.classList.add("hidden");
  }
}

function setMeta(selector, value) {
  const el = document.querySelector(selector);
  if (el && hasValue(value)) {
    el.setAttribute("content", value);
  }
}

function applyTheme() {
  const tema = config.tema || {};
  const root = document.documentElement;

  if (tema.colorePrimario) root.style.setProperty("--primary", tema.colorePrimario);
  if (tema.coloreSecondario) root.style.setProperty("--secondary", tema.coloreSecondario);
  if (tema.coloreTesto) root.style.setProperty("--text", tema.coloreTesto);

  if (tema.fontTitolo) {
    document.querySelectorAll("h1, h2").forEach(el => {
      el.style.fontFamily = tema.fontTitolo;
    });
  }

  if (tema.fontTesto) {
    document.body.style.fontFamily = tema.fontTesto;
  }
}

function applyMeta() {
  const meta = config.meta || {};

  if (hasValue(meta.titolo)) document.title = meta.titolo;

  setMeta('meta[name="description"]', meta.descrizione);
  setMeta('meta[property="og:title"]', meta.titolo);
  setMeta('meta[property="og:description"]', meta.descrizione);
  setMeta('meta[property="og:image"]', meta.immagine);
  setMeta('meta[property="og:url"]', meta.url);

  setMeta('meta[name="twitter:title"]', meta.titolo);
  setMeta('meta[name="twitter:description"]', meta.descrizione);
  setMeta('meta[name="twitter:image"]', meta.immagine);
}

function applyPhoto() {
  const wrapper = document.getElementById("fotoWrapper");
  const img = document.getElementById("fotoPersona");

  if (wrapper && img && hasValue(config.foto)) {
    img.src = config.foto;
    wrapper.classList.remove("hidden");
  } else if (wrapper) {
    wrapper.classList.add("hidden");
  }
}

function applyQuote() {
  const box = document.getElementById("fraseBox");

  let frase = config.frase;
  let autore = config.autoreFrase;

  if (!hasValue(frase)) {
    if (config.religioso === true) {
      frase = "Il Signore è il mio pastore: non manco di nulla.";
      autore = "Salmo 23";
    } else {
      frase = "Coloro che amiamo e che abbiamo perduto non sono più dove erano, ma sono ovunque noi siamo.";
      autore = "";
    }
  }

  if (box && hasValue(frase)) {
    setText("frase", frase);
    setText("autoreFrase", autore);
    box.classList.remove("hidden");
  } else if (box) {
    box.classList.add("hidden");
  }
}

function applyCeremony() {
  const box = document.getElementById("cerimoniaBox");

  const hasCeremony =
    hasValue(config.titoloCerimonia) ||
    hasValue(config.giorno) ||
    hasValue(config.dataCerimonia) ||
    hasValue(config.ora) ||
    hasValue(config.luogo) ||
    hasValue(config.indirizzo);

  if (!hasCeremony) {
    box.classList.add("hidden");
    return;
  }

  box.classList.remove("hidden");

  setText("titoloCerimonia", config.titoloCerimonia);

  setRow("giornoRow", "giorno", config.giorno);
  setRow("dataRow", "dataCerimonia", config.dataCerimonia);
  setRow("oraRow", "ora", config.ora);
  setRow("luogoRow", "luogo", config.luogo);
  setRow("indirizzoRow", "indirizzo", config.indirizzo);
}

function setRow(rowId, textId, value) {
  const row = document.getElementById(rowId);

  if (hasValue(value)) {
    setText(textId, value);
    row.classList.remove("hidden");
  } else {
    row.classList.add("hidden");
  }
}

function applyButtons() {
  const pulsanti = config.pulsanti || {};

  const btnWhatsapp = document.getElementById("btnWhatsapp");
  const btnCalendar = document.getElementById("btnCalendar");
  const btnMaps = document.getElementById("btnMaps");

  if (
    btnWhatsapp &&
    pulsanti.mostraConferma &&
    hasValue(config.whatsappNumero)
  ) {
    const msg = encodeURIComponent(config.whatsappMessaggio || "");
    btnWhatsapp.href = `https://wa.me/${config.whatsappNumero}?text=${msg}`;
    btnWhatsapp.textContent = config.testoPulsanteConferma || "Messaggio alla famiglia";
    btnWhatsapp.classList.remove("hidden");
    
  }

  if (
    btnCalendar &&
    pulsanti.mostraCalendario &&
    config.calendario &&
    hasValue(config.calendario.dataInizio) &&
    hasValue(config.calendario.dataFine)
  ) {
    const c = config.calendario;

    btnCalendar.href =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(c.titolo || "")}` +
      `&dates=${c.dataInizio}/${c.dataFine}` +
      `&details=${encodeURIComponent(c.descrizione || "")}` +
      `&location=${encodeURIComponent(c.luogo || config.indirizzo || "")}`;

    btnCalendar.textContent = config.testoPulsanteCalendario || "Salva in calendario";
    btnCalendar.classList.remove("hidden");
  }

  if (
    btnMaps &&
    pulsanti.mostraMaps &&
    hasValue(config.indirizzoMaps)
  ) {
    btnMaps.href =
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.indirizzoMaps)}`;

    btnMaps.textContent = config.testoPulsanteMaps || "Come arrivare";
    btnMaps.classList.remove("hidden");
  }
}

function applyConfig() {
  if (music && config.musica) {
    const source = music.querySelector("source");

    if (source) {
      source.src = config.musica;
      music.load();
    }
  }

  applyTheme();
  applyMeta();
  applyPhoto();

  setText("titolo", config.titolo);
  const simbolo = document.getElementById("simbolo");

	if (simbolo && hasValue(config.simbolo)) {
	  simbolo.textContent = config.simbolo;
	  simbolo.classList.remove("hidden");
	}
  setText("nome", config.nome);

 let datePersona = "";

	if (hasValue(config.dataNascita) && hasValue(config.dataScomparsa)) {
	  datePersona =
		`${config.dataNascita}\n✦\n${config.dataScomparsa}`;
	} else {
	  datePersona =
		config.dataNascita || config.dataScomparsa || "";
	}

  setText("datePersona", datePersona);
  setText("messaggioFamiglia", config.messaggioFamiglia);

  applyQuote();
  applyCeremony();

  setText("testoFinale", config.testoFinale);

  applyButtons();
}

function unlockAudioOnFirstTouch() {
  const overlay = document.getElementById("audioOverlay");

  if (!music || !overlay || !config.musica) return;

  overlay.addEventListener("click", () => {
    music.muted = false;
    music.volume = 1;

    music.play()
      .catch(err => console.log("ERRORE MUSICA", err));

    overlay.remove();
  });
}

applyConfig();
unlockAudioOnFirstTouch();