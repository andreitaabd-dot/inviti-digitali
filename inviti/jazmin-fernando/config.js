const INVITO_CONFIG = {
    /* =========================
     DATI EVENTO
  ========================= */

  tipoEvento: "rivelazione_sesso",

  nomeFesteggiato: "Jazmin & Fernando",
  // eta: "1 anno",

  titolo: "Niña o Niño",
  sottotitolo: "¡La emoción crece y el gran secreto será revelado!",

  descrizione1: "Acompáñanos en este momento tan especial",
  // descrizione2: "il primo anno e il Battesimo di Leonardo",

  giorno: "12",
  mese: "Luglio",
  anno: "2026",
  giornoSettimana: "Domenica",
  ora: "17:00",

  testoFinale: "Ti aspettiamo per scoprire insieme questa dolce sorpresa.",

  /* =========================
     LUOGO / MAPPA
  ========================= */

  luogoNome: "Via Scotellaro 70",
  indirizzoMaps: "Via Scotellaro 70",
  // mapsLink: "",

  /* =========================
     WHATSAPP
  ========================= */

  whatsappNumero: "393203438536",
  whatsappMessaggio: "Hola! Confirmo mi presencia para la revelación de sexo de Jazmin & Fernando",

      /* =========================
     SAVE THE DATE / CALENDARIO
  ========================= */

  calendario: {
    attivo: true,
    titolo: "Revelación de sexo de Jazmin & Fernando",
    descrizione: "Niña o Niño - Acompáñanos en este momento tan especial",
    inizio: "20260712T170000",
    fine: "20260712T210000"
  },

    /* =========================
     DRESS CODE
  ========================= */

  dresscode: {
    attivo: false,
    // titolo: "Dress code",
    // testo: "vestiti comodi e calzine antiscivolo.",
    // immagine: "dresscode.jpg"
  },

  /* =========================
     FOTO / GALLERIA
  ========================= */

    foto: {
    attivo: true,
    titolo: "Fotos de la revelación",
    testo: "Carica qui le foto e i video di questo momento speciale",
     link: "https://photos.app.goo.gl/MqcoT34jL7DP7AwQA"
  },

  /* =========================
     IMMAGINI
  ========================= */

  immagini: {
    sfondoCover: "bg-cover.jpg",
    sfondoInvito: "bg-invito.jpg",

    envelope: "envelope.png",

    decorazioneTop: "personaggio.png",

    preview: "preview.jpg",

    musica: "music.mp3"
    // musica: ""
  },

  /* =========================
     VIDEO INTRO
     se non serve lascia vuoto
  ========================= */

  introVideo: {
    attivo: false,
    //file: "intro.mp4"
     file: ""
  },

  /* =========================
     BUSTA / COVER
  ========================= */

  cover: {
    testoBottoneApri: "Apri la busta",

    decorazioneTop: {
      attiva: true,
      immagine: "personaggio.png",
      width: "100px",
      top: "10px",
      left: "50%"
    },

    envelope: {
      immagine: "envelope.png",
      width: "260px"
    }
  },

  /* =========================
     MUSICA
  ========================= */

  musica: {
    attiva: true,
    file: "music.mp3",
    mostraIconaAudio: true,
    icona: "🔊"
  },

  /* =========================
     EFFETTI
     disponibili:
     confetti, balloons, sparkles, disco
  ========================= */

  effetti: ["confetti", "sparkles"],

  /* =========================
     PULSANTI
     se attivo false non compare
  ========================= */

  pulsanti: {
    whatsapp: {
      attivo: true,
      testo: "Confirmar",
      emoji: "📞"
    },

    maps: {
      attivo: true,
      testo: "Mapa",
      emoji: "📍"
    },

    calendario: {
      attivo: true,
      testo: "Guardar fecha",
      emoji: "📅"
    },

    dresscode: {
      attivo: false,
      // testo: "Dress code",
      // icona: "icons/dresscode.png"
    },

    foto: {
      attivo: true,
      testo: "Fotos",
      emoji: "📸"
    }
  },

    /* =========================
     TEMA GRAFICO
  ========================= */

  tema: {
    colorePrimario: "#f4a7b9",
    coloreSecondario: "#8db7d2",
    coloreTesto: "#7a4f00",

    coloreCard: "rgba(255,255,255,0.76)",
    coloreCardBordo: "rgba(244,167,185,0.45)",

    fontTitolo: "'Great Vibes', cursive",
    fontTesto: "'Poppins', sans-serif",

    grandezzaTitolo: "44px",
    grandezzaNome: "38px"
  },
  
  /*
FONT CONSIGLIATI

Elegante:
'Cinzel', serif

Lusso:
'Cormorant Garamond', serif

Moderno:
'Montserrat', sans-serif

Bambini:
'Quicksand', sans-serif

Principessa:
'Great Vibes', cursive

Romantico:
'Allura', cursive

Matrimonio:
'Alex Brush', cursive
*/

  /* =========================
     WHATSAPP PREVIEW / META
  ========================= */

   meta: {
    title: "Niña o Niño - Jazmin & Fernando",
    description: "Apri l’invito digitale e conferma la presenza",
    image: "https://invitiwow.com/inviti/jazmin-fernando/preview.jpg?v=1",
    url: "https://invitiwow.com/inviti/jazmin-fernando/"
  }
};