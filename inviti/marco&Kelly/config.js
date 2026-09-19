const INVITO_CONFIG = {

  /* =========================
     DATI EVENTO
  ========================= */

  tipoEvento: "matrimonio",

  nomeFesteggiato: "Marco & Kelly",
  eta: "",

  titolo: "Il nostro matrimonio",
  sottotitolo: "Siamo felici di condividere con voi questo giorno speciale",

  descrizione1: "Con immensa gioia",
  descrizione2: "Marco & Kelly",

  giorno: "26",
  mese: "Settembre",
  anno: "2026",
  giornoSettimana: "Sabato",
  ora: "10:30",

  testoFinale: "Dopo la cerimonia saremo felici di festeggiare insieme a voi presso il Ristorante La Campana alle ore 12:30.",


  /* =========================
     LUOGO CERIMONIA / MAPPA
  ========================= */

  luogoNome: "Comune di Pianezza",
  indirizzoMaps: "https://maps.app.goo.gl/dTi8njr8qvXMdxux6",


  /* =========================
     RICEVIMENTO
  ========================= */

  ricevimento: {
    attivo: true,
    titolo: "Ricevimento",
    ora: "12:30",
    luogoNome: "Ristorante La Campana",
    indirizzoMaps: "https://maps.app.goo.gl/1oc8kfxkcTruRuw4A"
  },


  /* =========================
     WHATSAPP
  ========================= */

  whatsappNumero: "393801055113",

  whatsappMessaggio:
    "Ciao Marco e Kelly! Confermo la mia presenza al vostro matrimonio del 26 settembre 2026.",


  /* =========================
     SAVE THE DATE / CALENDARIO
  ========================= */

  calendario: {
    attivo: true,

    titolo: "Matrimonio di Marco & Kelly",

    descrizione:
      "Matrimonio di Marco Licciardello e Kelly Faviola Rivera Castillo. Cerimonia civile alle ore 10:30 presso il Comune di Pianezza. A seguire ricevimento presso il Ristorante La Campana alle ore 12:30.",

    inizio: "20260926T103000",
    fine: "20260926T180000"
  },


  /* =========================
     DRESS CODE
     NON UTILIZZATO
  ========================= */

  dresscode: {
    attivo: false,
    titolo: "",
    testo: "",
    immagine: ""
  },


  /* =========================
     FOTO / GALLERIA
     NON UTILIZZATA
  ========================= */

  foto: {
    attivo: false,
    titolo: "",
    testo: "",
    link: ""
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
     DISATTIVATO
  ========================= */

  introVideo: {
    attivo: false,
    file: ""
  },


  /* =========================
     BUSTA / COVER
  ========================= */

  cover: {

    testoBottoneApri: "Apri l'invito",

    decorazioneTop: {
      attiva: true,
      immagine: "personaggio.png",
      width: "130px",
      top: "1px",
      left: "50%"
    },

    envelope: {
      immagine: "envelope.png",
      width: "280px"
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
  ========================= */

  effetti: ["sparkles"],


  /* =========================
     PULSANTI

     SOLO:
     - CONFERMA
     - INDIRIZZO
     - SALVA LA DATA
  ========================= */

  pulsanti: {

  whatsapp: {
    attivo: true,
    testo: "Conferma",
    icona: "icons/conferma.png"
  },

  maps: {
    attivo: true,
    testo: "Indirizzo",
    icona: "icons/indirizzo.png"
  },

  calendario: {
    attivo: true,
    testo: "Salva la data",
    icona: "icons/calendario.png"
  },

  dresscode: {
    attivo: false,
    testo: "Dress code",
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
     MATRIMONIO AVORIO / ORO
  ========================= */

  tema: {

    colorePrimario: "#c6a15b",

    coloreSecondario: "#d4af37",

    coloreTesto: "#5b4636",

    coloreCard: "rgba(255, 250, 240, 0.72)",

    coloreCardBordo: "rgba(212, 175, 55, 0.55)",

   fontTitolo: "'Cormorant Garamond', serif",
fontTesto: "'Cormorant Garamond', serif",

    grandezzaTitolo: "42px",

    grandezzaNome: "34px"
  },


  /* =========================
     WHATSAPP PREVIEW / META
  ========================= */

  meta: {

    title: "Marco & Kelly • Ci sposiamo!",

    description:
      "26 settembre 2026 • Apri il nostro invito di matrimonio",

    image:
      "https://invitiwow.com/inviti/marco&Kelly/preview.jpg?v=1",

    url:
      "https://invitiwow.com/inviti/marco&Kelly/"
  }
};