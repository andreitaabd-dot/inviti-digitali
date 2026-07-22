const INVITO_CONFIG = {

  /* ==========================================================
     META WHATSAPP / FACEBOOK
     ========================================================== */

  meta: {
    title: "Mis XV Años - Alessia Nahomi Gamboa Castillo",
    description: "Estás invitado a celebrar los XV años de Alessia Nahomi.",
    image: "https://invitiwow.com/storybook/alessia_15/preview.jpg?v=1",
    url: "https://invitiwow.com/storybook/alessia_15/"
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
    occasione: "Mis XV Años",

    giorno: "3",
    mese: "de octubre de",
    anno: "2026",
    giornoSettimana: "Sábado",
    ora: "15:00"
  },

  /* ==========================================================
     WHATSAPP
     ========================================================== */

  whatsapp: {
    numero: "393286412593",
    messaggio: "Hola, confirmo mi asistencia a los XV años de Alessia Nahomi Gamboa Castillo el 3 de octubre.",
    testoPulsante: "Confirmar asistencia"
  },

  /* ==========================================================
     MAPPA
     ========================================================== */

  maps: {
    nomeLuogo: "Smeraldo Club",
    indirizzo: "Via Terni, 25, 20814 Varedo MB",
    link: "https://maps.app.goo.gl/FCpznWX9RDGWR1Mr8",
    testoPulsante: "Ver ubicación"
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

      titolo: "Mis XV Años",
      nome: "Alessia Nahomi Gamboa Castillo",
      frase: "Un sueño, una ilusión y un día inolvidable para celebrar.",

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

      frase: "A nuestra amada hija en tu quinceañera",
      genitori: "",

      testo: "Que ese día marque el inicio de un camino lleno de amor, alegría y éxito. Eres nuestro mayor orgullo y te deseamos toda la felicidad del mundo. Que siempre sigas tus sueños y recuerda que siempre estaremos aquí para ti. Te amamos con todo nuestro corazón.",

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

      titolo: "Falta muy poco",
      dataEvento: "2026-10-03T15:00:00",

      etichette: {
        giorni: "Días",
        ore: "Horas",
        minuti: "Minutos",
        secondi: "Segundos"
      },

      testoConcluso: "¡El gran día ha llegado!",
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

      titolo: "Detalles del Evento",
      testo: "Acompáñanos a celebrar este día tan especial.",

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

      titolo: "Programa",
      testo: "Estos serán algunos de los momentos especiales de la celebración.",

      eventi: [
        {
          ora: "16:30",
          titolo: "Brindis",
          descrizione: "Celebraremos juntos este momento tan especial.",
          icona: "🥂"
        },
        {
          ora: "19:00",
          titolo: "Cena",
          descrizione: "Compartiremos una cena especial con familiares y amigos.",
          icona: "🍽️"
        },
        {
          ora: "20:30",
          titolo: "Hora de la diversión",
          descrizione: "Música, baile y mucha alegría para disfrutar juntos.",
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

      titolo: "Niños Bienvenidos",
      testo: "Los pequeños también forman parte de esta gran celebración.",

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

      titolo: "Confirma tu asistencia",
      testo: "Por favor, confirma tu asistencia hasta el 1 de septiembre.",

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
      frase: "¡Te esperamos para compartir juntos este día inolvidable!",

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
