const INVITO_CONFIG = {

  /* =========================
     DATI EVENTO
  ========================= */

  tipoEvento: "diciottesimo",

  nomeFesteggiato: "Simone",
  eta: "18 anni",

  titolo: "I 18 anni di Simone",
  sottotitolo: "Sei invitato a una festa esclusiva",

  descrizione1: "Un giorno speciale merita una festa indimenticabile",
  descrizione2: "Ti aspetto per festeggiare i miei 18 anni",

  giorno: "12",
  mese: "Dicembre",
  anno: "2026",
  giornoSettimana: "Sabato",
  ora: "12:30",

  testoFinale: "Non puoi mancare! Ti aspetto.",


  /* =========================
     LUOGO / MAPPA
  ========================= */

  luogoNome: "Ristorante Corte degli Ulivi",

  indirizzoMaps: "Strada Cascina Speranza 3, La Mandria, Chivasso",

  // Link Google Maps fornito dal cliente:
  // https://maps.app.goo.gl/mZUCDgDoZ3FUXSgZ9


  /* =========================
     WHATSAPP
  ========================= */

  whatsappNumero: "393398025209",

  whatsappMessaggio:
    "Ciao Simone! 🥂 Confermo la mia presenza alla festa per i tuoi 18 anni del 12 dicembre! 🎉",


  /* =========================
     SAVE THE DATE / CALENDARIO
  ========================= */

  calendario: {
    attivo: true,

    titolo: "I 18 anni di Simone",

    descrizione: "Festa per il diciottesimo compleanno di Simone",

    inizio: "20261212T123000",

    // Fine tecnica: 1 ora dopo
    fine: "20261212T133000"
  },


  /* =========================
     DRESS CODE
  ========================= */

  dresscode: {
    attivo: true,

    titolo: "Dress Code",

    // Da personalizzare quando il cliente
    // comunica il dress code richiesto.
    testo: "",

    immagine: "dresscode.jpg"
  },


  /* =========================
     FOTO / GALLERIA
     NON UTILIZZATA
  ========================= */

  /*
  foto: {
    attivo: false,
    titolo: "Foto della festa",
    testo: "Carica qui le foto e i video della giornata",
    link: ""
  },
  */


  /* =========================
     IMMAGINI
     NOMI ORIGINALI DEL TEMPLATE
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
     VIDEO INTRO PREMIUM
  ========================= */

  introVideo: {
    attivo: true,
    file: "intro.mp4"
  },


  /* =========================
     BUSTA / COVER
  ========================= */

  cover: {

    testoBottoneApri: "Apri il tuo invito",

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

  // Altri effetti disponibili:
  // "confetti"
  // "balloons"
  // "disco"


  /* =========================
     PULSANTI PERSONALIZZATI

     Le immagini si trovano
     nella cartella icons
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
      testo: "Dress Code",
      icona: "icons/dresscode.png"
    }

    /*
    foto: {
      attivo: false,
      testo: "Foto",
      emoji: "📸"
    }
    */
  },


  /* =========================
     TEMA GRAFICO
     CHAMPAGNE LUXURY
  ========================= */

 tema: {
    colorePrimario: "#D6BE86",
    coloreSecondario: "#F2E4C5",
    coloreTesto: "#FFF8EB",
    coloreCard: "rgba(0,0,0,0.78)",
    coloreCardBordo: "rgba(184,155,94,0.65)",

    fontTitolo: "'Cinzel', serif",
    fontTesto: "'Poppins', sans-serif",

    grandezzaTitolo: "38px",
    grandezzaNome: "36px"
},


  /* =========================
     WHATSAPP PREVIEW / META

     Aggiornare gli URL quando
     viene pubblicato l'invito.
  ========================= */

  meta: {

    title: "I 18 anni di Simone",

    description:
      "12 dicembre 2026 alle 12:30 - Sei invitato a festeggiare!",

    image:
      "https://invitiwow.com/inviti/simone_18/preview.jpg?v=1",

    url:
      "https://invitiwow.com/inviti/simone_18/"
  }

};

