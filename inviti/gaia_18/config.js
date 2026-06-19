const INVITO_CONFIG = {
  /* =========================
     DATI EVENTO
  ========================= */

  tipoEvento: "diciottesimo",

  nomeFesteggiato: "Gaia",
  eta: "18 anni",

  titolo: "18 anni Gaia",
  sottotitolo: "Sei invitato a festeggiare con noi",

  descrizione1: "Ti aspettiamo per festeggiare insieme",
  descrizione2: "i 18 anni di Gaia",

  giorno: "4",
  mese: "Luglio",
  anno: "2026",
  giornoSettimana: "Sabato",
  ora: "17:00",

  testoFinale: "Ti aspettiamo per condividere insieme una giornata speciale.\nÈ gradita la conferma della presenza.",

  /* =========================
     LUOGO / MAPPA
  ========================= */

  luogoNome: "Festa di Gaia",
  indirizzoMaps: "SP1, 6, 33020 Verzegnis UD",

  /* =========================
     WHATSAPP
  ========================= */

  whatsappNumero: "393484029675",
  whatsappMessaggio: "Ciao! Confermo la mia presenza ai 18 anni di Gaia",

  /* =========================
     SAVE THE DATE / CALENDARIO
  ========================= */

  calendario: {
    attivo: true,
    titolo: "18 anni di Gaia",
    descrizione: "Invito digitale - Conferma la tua presenza",
    inizio: "20260704T170000",
    fine: "20260704T235900"
  },

  /* =========================
     DRESS CODE
  ========================= */

  dresscode: {
    attivo: true,
    titolo: "Info per la notte",
    testo: "Nel locale è possibile dormire, ma ognuno dovrà organizzarsi autonomamente portando materassino, sacco a pelo, cuscino, lenzuola o tutto il necessario per il pernottamento.",
    immagine: "dresscode.jpg"
  },

  /* =========================
     FOTO / GALLERIA
  ========================= */

  foto: {
    attivo: false,
    titolo: "Foto della festa",
    testo: "Carica qui le foto e i video della giornata",
    link: ""
    // link: "https://photos.app.goo.gl/Bnc2MG4pUXZQEjURA"
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
      width: "120px",
      top: "0px",
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
    testo: "Conferma",
    emoji: "📞"
  },

  maps: {
    attivo: true,
    testo: "Mappa",
    emoji: "📍"
  },

  calendario: {
    attivo: true,
    testo: "Salva data",
    emoji: "📅"
  },

  dresscode: {
    attivo: true,
    testo: "Info notte",
    icona: "icons/dresscode.png"
  },

  foto: {
    attivo: false,
    testo: "Foto",
    emoji: "📸"
  }
},

  /* =========================
     TEMA GRAFICO
  ========================= */

  tema: {
    colorePrimario: "#5b1a7a",
    coloreSecondario: "#d4af37",
    coloreTesto: "#3f2548",

    coloreCard: "rgba(255,255,255,0.72)",
    coloreCardBordo: "rgba(212,175,55,0.55)",

    fontTitolo: "'Cormorant Garamond', serif",
    fontTesto: "'Poppins', sans-serif",

    grandezzaTitolo: "42px",
    grandezzaNome: "34px"
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
    title: "18 anni Gaia",
    description: "Apri l’invito digitale e conferma la presenza",
    image: "https://invitiwow.com/inviti/gaia_18/preview.jpg?v=1",
    url: "https://invitiwow.com/inviti/gaia_18/"
  }
};