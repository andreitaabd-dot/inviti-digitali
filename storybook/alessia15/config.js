const INVITO_CONFIG = {

  /* ==========================================================
     META WHATSAPP / FACEBOOK
     ========================================================== */

  meta: {
    title: "\u200B",
    description: "\u200B",
    image: "https://invitiwow.com/storybook/alessia15/preview.jpg?v=1",
    url: "https://invitiwow.com/storybook/alessia15/"
  },

  /* ==========================================================
     TEMA GRAFICO GENERALE
     Rosa elegante, non eccessivamente rosa, con oro champagne.
     ========================================================== */

  tema: {
    colorePrimario: "#9a536c",
    coloreSecondario: "#c6a15b",
    coloreTesto: "#49363c",

    coloreCard: "rgba(255,250,247,0.82)",
    coloreCardBordo: "rgba(255,255,255,0.38)",

    fontTitolo: "'Cormorant Garamond', serif",
    fontTesto: "'Poppins', sans-serif",

    grandezzaTitolo: "52px",
    grandezzaNome: "38px"
  },

  /* ==========================================================
     VIDEO INTRO
     ========================================================== */

  intro: {
    attivo: true,
    video: "intro.mp4",
    mostraFlashFinale: true
  },

  /* ==========================================================
     MUSICA
     ========================================================== */

  musica: {
    attiva: true,
    file: "music.mp3",
    mostraIconaAudio: true,
    iconaAttiva: "🔊",
    iconaDisattiva: "🔇"
  },

  /* ==========================================================
     EFFETTI
     Nessuna farfalla. Solo punti luce delicati.
     ========================================================== */

  effetti: [
    "sparkles"
  ],

  /* ==========================================================
     DATI GENERALI EVENTO
     ========================================================== */

 evento: {
  nome: "Alessia Nahomi Gamboa Castillo",
  occasione: "I miei 15 anni",

  giorno: "3",
  mese: "ottobre",
  anno: "2026",
  giornoSettimana: "Sabato",
  ora: "15:00"
},

  /* ==========================================================
     WHATSAPP
     ========================================================== */

  whatsapp: {
    numero: "393286412593",
   messaggio: "Ciao, confermo la mia presenza alla festa per i 15 anni di Alessia Nahomi Gamboa Castillo il 3 ottobre.",
  testoPulsante: "Conferma la presenza"
  },

  /* ==========================================================
     MAPPA
     ========================================================== */

  maps: {
    nomeLuogo: "Smeraldo Club",
    indirizzo: "Via Terni, 25, 20814 Varedo MB",
    link: "https://maps.app.goo.gl/FCpznWX9RDGWR1Mr8",
    testoPulsante: "Vedi la posizione"
  },

  /* ==========================================================
     MODULI
     ========================================================== */

  moduli: {

    /* ==========================================
       FOTO PRINCIPALE
       ========================================== */

    hero: {
      attivo: true,

      sfondo: "hero-bg.jpg",
      card: "hero-card.png",
      foto: "hero.jpg",

     titolo: "I miei 15 anni",
nome: "Alessia Nahomi Gamboa Castillo",
frase: "Un sogno, un’emozione e un giorno indimenticabile da celebrare.",

      animazione: "fade",

      stile: {
        coloreTitolo: "#c6a15b",
        coloreNome: "#914f67",
        coloreTesto: "#49363c",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.9)",
        ombraNome: "0 2px 5px rgba(255,255,255,0.85)",
        ombraTesto: "0 1px 3px rgba(255,255,255,1)",

        sfondoFrase: "rgba(255,250,247,0.76)"
      }
    },

    /* ==========================================
       DEDICA
       ========================================== */

    presentazione: {
      attivo: true,

      sfondo: "presentazione-bg.jpg",
      card: "pergamena.png",

      frase: "Alla nostra amata figlia, nel giorno dei tuoi 15 anni",
      genitori: "",

      testo: "Che questo giorno segni l’inizio di un cammino pieno d’amore, gioia e successi. Sei il nostro orgoglio più grande e ti auguriamo tutta la felicità del mondo. Continua sempre a seguire i tuoi sogni e ricorda che saremo sempre qui per te. Ti amiamo con tutto il cuore.",
      animazione: "zoom",

      stile: {
        coloreTitolo: "#914f67",
        coloreNome: "#914f67",
        coloreTesto: "#49363c",
        coloreAccento: "#c6a15b",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.9)",
        ombraTesto: "0 1px 2px rgba(255,255,255,0.8)"
      }
    },

    /* ==========================================
       COUNTDOWN
       ========================================== */

   countdown: {
    attivo: true,

    sfondo: "countdown-bg.jpg",
    card: "countdown-card.png",

    titolo: "Manca pochissimo",
    dataEvento: "2026-10-03T15:00:00",

    etichette: {
      giorni: "Giorni",
      ore: "Ore",
      minuti: "Minuti",
      secondi: "Secondi"
    },

    testoConcluso: "Il grande giorno è arrivato!",
    animazione: "fade"
  },

    /* ==========================================
       GALLERIA DISATTIVATA SU RICHIESTA
       ========================================== */

    gallery: {
      attivo: false,

      sfondo: "gallery-bg.jpg",
      card: "gallery-card.png",

      titolo: "Un poco de mi historia",
      testo: "Momentos que guardo para siempre en mi corazón.",

      foto: [],
      animazione: "slide"
    },

    /* ==========================================
       DATA, ORA E LUOGO
       ========================================== */

    eventoInfo: {
      attivo: true,

      sfondo: "evento-bg.jpg",
      card: "evento-card.png",

      titolo: "Dettagli dell'evento",
      testo: "Festeggia con noi questo giorno così speciale.",

      mostraData: true,
      mostraOra: true,
      mostraLuogo: true,
      mostraMappa: true,

      animazione: "fade",

      stile: {
        coloreTitolo: "#914f67",
        coloreTesto: "#49363c",
        coloreAccento: "#c6a15b",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.95)",
        ombraTesto: "none",

        sfondoTitolo: "rgba(255,250,247,0.80)",
        sfondoTesto: "rgba(255,250,247,0.74)"
      }
    },

    /* ==========================================
       ITINERARIO
       ========================================== */

    itinerary: {
      attivo: true,

      sfondo: "itinerary-bg.jpg",
      card: "itinerary-card.png",

      titolo: "Programma",
      testo: "Questi saranno alcuni dei momenti speciali della festa.",

      eventi: [
        {
          ora: "16:30",
          titolo: "Brindisi",
          descrizione: "Festeggeremo insieme questo momento così speciale.",
          icona: "🥂"
        },
        {
          ora: "19:00",
          titolo: "Cena",
          descrizione: "Condivideremo una cena speciale con familiari e amici.",
          icona: "🍽️"
        },
        {
          ora: "20:30",
          titolo: "È ora di divertirsi",
          descrizione: "Musica, balli e tanta allegria da vivere insieme.",
          icona: "🎉"
        }
      ],

      animazione: "slide",

      stile: {
        coloreTitolo: "#914f67",
        coloreTesto: "#49363c",
        coloreAccento: "#c6a15b",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.95)",
        ombraTesto: "none",

        sfondoTitolo: "rgba(255,250,247,0.80)",
        sfondoTesto: "rgba(255,250,247,0.74)"
      }
    },

    /* ==========================================
       LLUVIA DE SOBRES DISATTIVATA SU RICHIESTA
       ========================================== */

    gift: {
      attivo: false,

      sfondo: "gift-bg.jpg",
      card: "gift-card.png",

      titolo: "Lluvia de Sobres",
      testo: "",
      animazione: "zoom"
    },

    /* ==========================================
       BAMBINI
       ========================================== */

    kids: {
      attivo: true,

      sfondo: "kids-bg.jpg",
      card: "kids-card.png",

     titolo: "Bambini benvenuti",
      testo: "Anche i più piccoli fanno parte di questa grande festa.",

      animazione: "zoom",

      stile: {
        coloreTitolo: "#914f67",
        coloreTesto: "#49363c",
        coloreAccento: "#c6a15b",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.95)",
        ombraTesto: "none",

        sfondoTitolo: "rgba(255,250,247,0.80)",
        sfondoTesto: "rgba(255,250,247,0.74)"
      }
    },

    /* ==========================================
       DRESS CODE
       ========================================== */

    dresscode: {
      attivo: true,

      sfondo: "dresscode-bg.jpg",
      card: "dresscode-card.png",

      titolo: "",
      testo: "",

      immagine: "dresscode.jpg",
      mostraPulsante: false,
      testoPulsante: "Ver Dress Code",

      animazione: "fade",

      stile: {
        coloreTitolo: "#914f67",
        coloreTesto: "#49363c",
        coloreAccento: "#c6a15b",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.95)",
        ombraTesto: "none",

        sfondoTitolo: "rgba(255,250,247,0.80)",
        sfondoTesto: "rgba(255,250,247,0.74)"
      }
    },

    /* ==========================================
       CONFERMA WHATSAPP
       ========================================== */

    rsvp: {
      attivo: true,

      sfondo: "rsvp-bg.jpg",
      card: "rsvp-card.png",

     titolo: "Conferma la tua presenza",
testo: "Per favore, conferma la tua presenza entro il 1° settembre.",
      mostraWhatsapp: true,
      animazione: "zoom"
    },

    /* ==========================================
       FOTO FINALE
       ========================================== */

    finale: {
      attivo: true,

      sfondo: "final-bg.jpg",
      card: "final-card.png",
      foto: "finale.jpg",

     titolo: "Alessia Nahomi",
      frase: "Ti aspettiamo per condividere insieme questo giorno indimenticabile!",

      animazione: "fade",

      stile: {
        coloreTitolo: "#c6a15b",
        coloreNome: "#914f67",
        coloreTesto: "#49363c",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.9)",
        ombraNome: "0 2px 5px rgba(255,255,255,0.85)",
        ombraTesto: "0 1px 3px rgba(255,255,255,1)",

        sfondoFrase: "rgba(255,250,247,0.76)"
      }
    }

  }

};
