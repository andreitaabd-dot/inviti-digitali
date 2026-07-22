const INVITO_CONFIG = {

  /* ==========================================================
     META WHATSAPP / FACEBOOK
     ========================================================== */

  meta: {
    title: "Mis XV Años - Valentina",
    description: "Estás invitado a celebrar conmigo este día tan especial.",
    image: "https://invitiwow.com/storybook/valentina15/preview.jpg?v=1",
    url: "https://invitiwow.com/storybook/15-annos/"
  },

  /* ==========================================================
     TEMA GRAFICO GENERALE
     ========================================================== */

  tema: {
    colorePrimario: "#7c3a63",
    coloreSecondario: "#d8b86d",
    coloreTesto: "#3c2d2f",

    coloreCard: "rgba(255,255,255,0.78)",
    coloreCardBordo: "rgba(255,255,255,0.30)",

    fontTitolo: "'Cormorant Garamond', serif",
    fontTesto: "'Poppins', sans-serif",

    grandezzaTitolo: "52px",
    grandezzaNome: "38px"
  },

  /* ==========================================================
     VIDEO INTRO
     Libro che si apre
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
     Valori disponibili:
     sparkles, confetti, balloons, disco
     ========================================================== */

 

  /* ==========================================================
     DATI GENERALI EVENTO
     ========================================================== */

  evento: {
    nome: "Valentina",
    occasione: "Mis XV Años",

    giorno: "18",
    mese: "Octubre",
    anno: "2026",
    giornoSettimana: "Sábado",
    ora: "7:00 PM"
  },

  /* ==========================================================
     WHATSAPP
     ========================================================== */

  whatsapp: {
    numero: "393881769329",
    messaggio: "Hola, confirmo mi asistencia a los XV años de Valentina.",
    testoPulsante: "Confirmar asistencia"
  },

  /* ==========================================================
     MAPPA
     ========================================================== */

  maps: {
    nomeLuogo: "Salón Bella Luna",
    indirizzo: "Av. Los Pinos 456, Lima",
    link: "https://maps.app.goo.gl/Z6o7ThZQSSUMgUdy6",
    testoPulsante: "Ver ubicación"
  },

  /* ==========================================================
     MODULI
     Ogni modulo può essere attivato o disattivato.
     Ogni modulo ha:
     - sfondo: riempie tutta la sezione
     - card: sfondo interno del contenuto
     - animazione: effetto quando entra nello schermo
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
      nome: "Valentina",
      frase: "Hay momentos que permanecen para siempre en el corazón.",

      animazione: "fade",

       stile: {
        coloreTitolo: "#c89b3c",
        coloreNome: "#7b285c",
        coloreTesto: "#452c32",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.9)",
        ombraNome: "0 2px 5px rgba(255,255,255,0.85)",
        ombraTesto: "0 1px 3px rgba(255,255,255,1)",

        sfondoFrase: "rgba(255,255,255,0.72)"
      }
    },

    /* ==========================================
       PERGAMENA / PRESENTAZIONE
       ========================================== */

    presentazione: {
      attivo: true,

      sfondo: "presentazione-bg.jpg",
      card: "pergamena.png",

      frase: "Con la bendición de Dios y el amor de nuestra familia...",

      genitori: "Carlos Ramírez y MAria Lozada",

      testo: "Tenemos el honor de invitarlos a celebrar los XV años de nuestra querida hija Valentina.",

      animazione: "zoom"
    },

    /* ==========================================
       COUNTDOWN
       ========================================================== */

    countdown: {
      attivo: true,

      sfondo: "countdown-bg.jpg",
      card: "countdown-card.png",

      titolo: "Falta muy poco",

      dataEvento: "2026-10-18T19:00:00",

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
       GALLERIA
       Massimo 4 foto
       ========================================== */

    gallery: {
      attivo: true,

      sfondo: "gallery-bg.jpg",
      card: "gallery-card.png",

      titolo: "Un poco de mi historia",
      testo: "Momentos que guardo para siempre en mi corazón.",

      foto: [
        "foto1.jpg",
        "foto2.jpg",
        "foto3.jpg",
        "foto4.jpg"
      ],

      animazione: "slide",

      stile: {
        coloreTitolo: "#6b4631",
        coloreTesto: "#3f2f2b",
        coloreAccento: "#b88a37",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.95)",
        ombraTesto: "none",

        sfondoTitolo: "rgba(255,255,255,0.78)",
        sfondoTesto: "rgba(255,255,255,0.72)"
      }
    },

    /* ==========================================
       DATA, ORA E LUOGO
       ========================================== */

    eventoInfo: {
      attivo: true,

      sfondo: "evento-bg.jpg",
      card: "evento-card.png",

      titolo: "Detalles del Evento",
      testo: "Acompáñanos a celebrar una noche inolvidable.",

      mostraData: true,
      mostraOra: true,
      mostraLuogo: true,
      mostraMappa: true,

      animazione: "fade",

      stile: {
        coloreTitolo: "#6b4631",
        coloreTesto: "#3f2f2b",
        coloreAccento: "#b88a37",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.95)",
        ombraTesto: "none",

        sfondoTitolo: "rgba(255,255,255,0.78)",
        sfondoTesto: "rgba(255,255,255,0.72)"
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
      testo: "Estos serán algunos de los momentos especiales de la noche.",

      eventi: [
        {
          ora: "7:00 PM",
          titolo: "Recepción",
          descrizione: "Bienvenida de los invitados.",
          icona: "✨"
        },
        {
          ora: "8:00 PM",
          titolo: "Cena",
          descrizione: "Compartiremos juntos una cena especial.",
          icona: "🍽️"
        },
        {
          ora: "9:30 PM",
          titolo: "Vals",
          descrizione: "El momento más esperado de la noche.",
          icona: "💃"
        },
        {
          ora: "10:30 PM",
          titolo: "Hora Loca",
          descrizione: "Música, baile y mucha diversión.",
          icona: "🎉"
        },
        {
          ora: "11:30 PM",
          titolo: "Torta",
          descrizione: "Brindis y corte de la torta.",
          icona: "🎂"
        }
      ],

      animazione: "slide",

       stile: {
        coloreTitolo: "#6b4631",
        coloreTesto: "#3f2f2b",
        coloreAccento: "#b88a37",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.95)",
        ombraTesto: "none",

        sfondoTitolo: "rgba(255,255,255,0.78)",
        sfondoTesto: "rgba(255,255,255,0.72)"
      }
    },

    /* ==========================================
       REGALO
       ========================================== */

    gift: {
      attivo: true,

      sfondo: "gift-bg.jpg",
      card: "gift-card.png",

      titolo: "Lluvia de Sobres",

      testo: "Tu presencia será nuestro mejor regalo, pero si deseas tener un detalle con Valentina, tendremos una lluvia de sobres.",

      //icona: "✉️",

      animazione: "zoom",

     stile: {
        coloreTitolo: "#6b4631",
        coloreTesto: "#3f2f2b",
        coloreAccento: "#b88a37",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.95)",
        ombraTesto: "none",

        sfondoTitolo: "rgba(255,255,255,0.78)",
        sfondoTesto: "rgba(255,255,255,0.72)"
      }
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

      //icona: "🧸",

      animazione: "zoom",

       stile: {
        coloreTitolo: "#6b4631",
        coloreTesto: "#3f2f2b",
        coloreAccento: "#b88a37",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.95)",
        ombraTesto: "none",

        sfondoTitolo: "rgba(255,255,255,0.78)",
        sfondoTesto: "rgba(255,255,255,0.72)"
      }
    },

    /* ==========================================
       DRESS CODE
       ========================================== */

    dresscode: {
      attivo: true,

      sfondo: "dresscode-bg.jpg",
      card: "dresscode-card.png",

      titolo: "Dress Code",

      testo: "Vestimenta elegante. Evitar el color rosa, ya que será exclusivo para la quinceañera.",

      immagine: "dresscode.jpg",

      testoPulsante: "Ver Dress Code",

      animazione: "fade",

      stile: {
        coloreTitolo: "#6b4631",
        coloreTesto: "#3f2f2b",
        coloreAccento: "#b88a37",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.95)",
        ombraTesto: "none",

        sfondoTitolo: "rgba(255,255,255,0.78)",
        sfondoTesto: "rgba(255,255,255,0.72)"
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

      testo: "Por favor confirma tu asistencia antes del 10 de octubre.",

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

      titolo: "Valentina",

      frase: "¡Te esperamos para vivir juntos una noche inolvidable!",

      animazione: "fade",

      stile: {
        coloreTitolo: "#c89b3c",
        coloreNome: "#7b285c",
        coloreTesto: "#452c32",

        ombraTitolo: "0 1px 3px rgba(255,255,255,0.9)",
        ombraNome: "0 2px 5px rgba(255,255,255,0.85)",
        ombraTesto: "0 1px 3px rgba(255,255,255,1)",

        sfondoFrase: "rgba(255,255,255,0.72)"
      }
    }

  }

};