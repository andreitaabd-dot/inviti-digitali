
const INVITO_CONFIG = {

  /* =========================
     DATI EVENTO
  ========================= */

  tipoEvento: "compleanno",

  nomeFesteggiato: "Sofia",
  eta: "4 anni",

  titolo: "Il magico compleanno di Sofia",
  sottotitolo: "Un'avventura nel regno di ghiaccio",

  descrizione1: "Sei invitato a festeggiare",
  descrizione2: "i 4 anni di Sofia",

  giorno: "28",
  mese: "Novembre",
  anno: "2026",
  giornoSettimana: "Sabato",
  ora: "15:30 - 18:00",

  testoFinale: "Ti aspettiamo per vivere insieme un pomeriggio magico tra neve, sorrisi e tanta allegria!",


  /* =========================
     LUOGO / MAPPA
  ========================= */

  luogoNome: "Baby Gym",
  indirizzoMaps: "Via Vespucci 36",


  /* =========================
     WHATSAPP
  ========================= */

  whatsappNumero: "393489142079",

  whatsappMessaggio:
    "Ciao! Confermo la mia presenza al compleanno di Sofia!",


  /* =========================
     SAVE THE DATE / CALENDARIO
  ========================= */

  calendario: {
    attivo: true,

    titolo: "4° Compleanno di Sofia",

    descrizione: "Festa di compleanno di Sofia presso Baby Gym, Via Vespucci 36",

    inizio: "20261128T153000",
    fine: "20261128T180000"
  },


  /* =========================
     DRESS CODE
     NON UTILIZZATO
  ========================= */

  dresscode: {
    attivo: true,

    titolo: "Dress code",
     testo: "Non dimenticate le calze antiscivolo!",
    immagine: "dresscode.jpg"
  },


  /* =========================
     FOTO / GALLERIA
     NON UTILIZZATA
  ========================= */

  foto: {
    attivo: false,

    // titolo: "Foto della festa",
    // testo: "",
    // link: ""
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
  },


  /* =========================
     VIDEO INTRO
     NON UTILIZZATO
  ========================= */

  introVideo: {
    attivo: true,

    file: "intro.mp4"
  },


  /* =========================
     BUSTA / COVER
  ========================= */

  cover: {

    testoBottoneApri: "Apri la busta",

    decorazioneTop: {
      attiva: true,
      immagine: "personaggio.png",

      width: "130px",
      top: "1px",
      left: "50%"
    },

    envelope: {
      immagine: "envelope.png",
      width: "290px"
    }
  },


  /* =========================
     MUSICA
     NON UTILIZZATA
  ========================= */

  musica: {
    attiva: false,

    // file: "music.mp3",
    // mostraIconaAudio: true,
    // icona: "🔊"
  },


  /* =========================
     EFFETTI ANIMATI

     Disponibili:
     confetti
     balloons
     sparkles
     disco
  ========================= */

  effetti: [ "snow",
    "sparkles"

    // "confetti",
    // "balloons",
    // "disco"
  ],


  /* =========================
     PULSANTI
  ========================= */


  pulsanti: {
    whatsapp: {
      attivo: true,
      testo: "Conferma",
      icona: "icons/conferma.png"
    },

    maps: {
      attivo: true,
      testo: "Mappa",
      icona: "icons/mappa.png"
    },

    calendario: {
      attivo: true,
      testo: "Salva data",
      icona: "icons/calendario.png"
    },

    dresscode: {
      attivo: true,
      testo: "Dress code",
      icona: "icons/dresscode.png"
    },

    foto: {
      attivo: false
      // testo: "Foto",
      // emoji: "📸"
    }
  },



  /* =========================
     TEMA GRAFICO
     FROZEN / REGNO DI GHIACCIO
  ========================= */


  tema: {

    colorePrimario: "#365C87",
    coloreSecondario: "#5279B0",
    coloreTesto: "#244A72",

    coloreCard: "rgba(255,255,255,0.82)",
    coloreCardBordo: "rgba(125,170,220,0.75)",

    fontTitolo: "'Cinzel', serif",
    fontTesto: "'Quicksand', sans-serif",

    grandezzaTitolo: "34px",
    grandezzaNome: "36px"
  },



  /* =========================
     FONT ALTERNATIVI

     Principessa:
     'Great Vibes', cursive

     Elegante:
     'Cinzel', serif

     Bambini:
     'Quicksand', sans-serif

     Fiabesco:
     'Cormorant Garamond', serif
  ========================= */


  /* =========================
     WHATSAPP PREVIEW / META
  ========================= */

  meta: {

    title: "Sofia - 4 anni ❄️",

    description:
      "Sei invitato al magico compleanno di Sofia! Sabato 28 Novembre, dalle 15:30 alle 18:00.",

    image:
      "https://invitiwow.com/inviti/sofia-frozen-4-anni/preview.jpg?v=1",

    url:
      "https://invitiwow.com/inviti/sofia-frozen-4-anni/"
  }

};
