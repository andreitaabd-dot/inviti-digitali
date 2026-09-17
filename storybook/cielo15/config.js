const INVITO_CONFIG = {

  /* ==========================================================
     META WHATSAPP / FACEBOOK
     ========================================================== */

  meta: {
    title: "I miei 15 anni - Cielo",
    description: "Sei invitato a condividere con me un giorno davvero speciale.",
    image: "preview.jpg",
    url: "https://invitiwow.com/storybook/cielo15/"
  },


  /* ==========================================================
     TEMA GRAFICO GENERALE
     ========================================================== */

  tema: {
    colorePrimario: "#780f23",
    coloreSecondario: "#d6ad67",
    coloreTesto: "#3b2428",

    coloreCard: "rgba(255,248,239,0.82)",
    coloreCardBordo: "rgba(212,175,110,0.45)",

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

    La musica viene scelta da noi in coordinato
    con il tema Princess elegante romantico bordeaux.
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

  effetti: [
    "sparkles"
  ],


  /* ==========================================================
     DATI GENERALI EVENTO
     ========================================================== */

  evento: {
    nome: "Cielo",
    occasione: "I miei 15 anni",

    giorno: "24",
    mese: "Ottobre",
    anno: "2026",
    giornoSettimana: "Sabato",
    ora: "16:00"
  },


  /* ==========================================================
     WHATSAPP
     ========================================================== */

  whatsapp: {
    numero: "393348190935",

    messaggio:
      "Ciao, confermo la mia presenza ai 15 anni di Cielo.",

    testoPulsante: "Conferma la presenza"
  },


  /* ==========================================================
     CONFERMA PRESENZA
     ========================================================== */

  conferma: {
    dataLimite: "10 ottobre 2026"
  },


  /* ==========================================================
     MAPPA

     MANCANO ANCORA:
     - nome luogo
     - indirizzo
     - link Google Maps
     ========================================================== */

  maps: {
  nomeLuogo: "STOP TIME",
  indirizzo: "Viale Europa, 72, 20047 Cusago MI",

  link: "https://maps.app.goo.gl/omh4mh4ewndAf6yFA",

  testoPulsante: "Vedi posizione"
},


  /* ==========================================================
     TRIVIA - RISULTATI

     Quando avremo creato il Google Apps Script,
     inseriremo il suo URL in endpoint.

     Alla fine del Trivia verranno inviati:
     - nome invitato
     - risposte
     - numero risposte corrette
     - punteggio
     - data e ora

     Cielo potrà vedere tutti i risultati
     direttamente nel Google Sheet.
     ========================================================== */

  triviaRisultati: {
    salvaRisultati: true,

    endpoint: "https://script.google.com/macros/s/AKfycbwC4qJuKtn1DIfOsT2_j_7_45fxDMp7-dma6HUFLtrDvdT1yoLQTmjuzhswg9pYVRFbyQ/exec",

    richiediNome: true,

    testoNome: "Come ti chiami?",

    placeholderNome: "Scrivi il tuo nome",

    messaggioInvio:
      "Invio del risultato...",

    messaggioSalvato:
      "Risultato registrato! 💖",

    messaggioErrore:
      "Non è stato possibile registrare il risultato."
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

      /*
       Foto inventata della quinceañera:
       capelli neri, vista di spalle,
       vestito lungo bordeaux.
      */

      foto: "hero.jpg",

      titolo: "I miei 15 anni",
      nome: "Cielo",

      frase:
        "Ci sono momenti che rimangono per sempre nel cuore.",

      animazione: "fade",

      stile: {
        coloreTitolo: "#d2a65d",
        coloreNome: "#7b1025",
        coloreTesto: "#482b2e",

        ombraTitolo:
          "0 1px 3px rgba(255,255,255,0.9)",

        ombraNome:
          "0 2px 5px rgba(255,255,255,0.85)",

        ombraTesto:
          "0 1px 3px rgba(255,255,255,1)",

        sfondoFrase:
          "rgba(255,248,239,0.72)"
      }
    },


    /* ==========================================
       PERGAMENA / PRESENTAZIONE
       ========================================== */

    presentazione: {
      attivo: true,

      sfondo: "presentazione-bg.jpg",
      card: "pergamena.png",
/*
      frase:
        "Dio mi ha benedetta con una famiglia meravigliosa e oggi, accompagnata dai miei genitori, inizio il capitolo più brillante della mia vita.",

      genitori:
        "Erika & Oswell",

      testo:
        "Lascio alle spalle la mia infanzia con gioia, pronta a dimostrare che posso essere tutto ciò che sogno di diventare.\n\nAbbiamo l'onore di invitarvi a questa splendida celebrazione.",
*/
      animazione: "zoom",

      stile: {
        coloreTitolo: "#7b1025",
        coloreNome: "#7b1025",
        coloreTesto: "#43272b",
        coloreAccento: "#c69b50",

        ombraTitolo:
          "0 1px 3px rgba(255,255,255,0.9)",

        ombraNome:
          "0 1px 3px rgba(255,255,255,0.9)",

        ombraTesto:
          "0 1px 2px rgba(255,255,255,0.9)"
      }
    },


    /* ==========================================
       COUNTDOWN
       ========================================== */

    countdown: {
      attivo: true,

      sfondo: "countdown-bg.jpg",
      card: "countdown-card.png",

      titolo: "Manca sempre meno",

      dataEvento: "2026-10-24T16:00:00",

      etichette: {
        giorni: "Giorni",
        ore: "Ore",
        minuti: "Minuti",
        secondi: "Secondi"
      },

      testoConcluso:
        "Il grande giorno è arrivato! ✨",

      animazione: "fade",

      stile: {
        coloreTitolo: "#7b1025",
        coloreTesto: "#43272b",
        coloreAccento: "#c69b50"
      }
    },


    /* ==========================================
       GALLERIA

       NON UTILIZZATA:
       Cielo non vuole utilizzare fotografie reali.
       ========================================== */

    /*
    gallery: {
      attivo: false,

      sfondo: "gallery-bg.jpg",
      card: "gallery-card.png",

      titolo: "Un po' della mia storia",

      testo:
        "Momenti che porterò sempre nel cuore.",

      foto: [
        "foto1.jpg",
        "foto2.jpg",
        "foto3.jpg",
        "foto4.jpg"
      ],

      animazione: "slide"
    },
    */


    /* ==========================================
       DATA, ORA E LUOGO
       ========================================== */

    eventoInfo: {
      attivo: true,

      sfondo: "evento-bg.jpg",
      card: "evento-card.png",

      titolo: "Dettagli dell'evento",

      testo:
        "Ti aspetto per condividere insieme una giornata indimenticabile.",

      mostraData: true,
      mostraOra: true,
      mostraLuogo: true,
      mostraMappa: true,

      animazione: "fade",

      stile: {
        coloreTitolo: "#7b1025",
        coloreTesto: "#43272b",
        coloreAccento: "#c69b50",

        ombraTitolo:
          "0 1px 3px rgba(255,255,255,0.95)",

        ombraTesto:
          "none",

        sfondoTitolo:
          "rgba(255,248,239,0.76)",

        sfondoTesto:
          "rgba(255,248,239,0.70)"
      }
    },


    /* ==========================================
       PROGRAMMA / ITINERARIO

       Gli orari definitivi devono ancora
       essere comunicati dal cliente.
       ========================================== */

    itinerary: {
      attivo: false,

      sfondo: "itinerary-bg.jpg",
      card: "itinerary-card.png",

      titolo: "Programma",

      testo:
        "Questi saranno alcuni dei momenti speciali della giornata.",

      eventi: [
        

        /*
        ESEMPIO:

        {
          ora: "16:00",
          titolo: "Accoglienza",
          descrizione: "Arrivo e accoglienza degli invitati.",
          icona: "✨"
        },

        {
          ora: "17:00",
          titolo: "Cerimonia",
          descrizione: "Un momento speciale da condividere insieme.",
          icona: "👑"
        },

        {
          ora: "18:00",
          titolo: "Buffet",
          descrizione: "Un momento da trascorrere in compagnia.",
          icona: "🥂"
        },

        {
          ora: "20:00",
          titolo: "Ballo",
          descrizione: "Musica e divertimento.",
          icona: "💃"
        }
        */

      ],

      animazione: "slide",
     

      stile: {
        coloreTitolo: "#7b1025",
        coloreTesto: "#43272b",
        coloreAccento: "#c69b50",

        ombraTitolo:
          "0 1px 3px rgba(255,255,255,0.95)",

        ombraTesto:
          "none",

        sfondoTitolo:
          "rgba(255,248,239,0.76)",

        sfondoTesto:
          "rgba(255,248,239,0.70)"
      }
    },
     


    /* ==========================================
       REGALO
       ========================================== */

    gift: {
      attivo: true,

      sfondo: "gift-bg.jpg",
      card: "gift-card.png",

      titolo: "Un pensiero per me",

      testo:
        "La tua presenza sarà il regalo più bello. Se desideri comunque farmi un pensiero, sarà accolto con grande affetto.",

      // icona: "✉️",

      animazione: "zoom",

      stile: {
        coloreTitolo: "#7b1025",
        coloreTesto: "#43272b",
        coloreAccento: "#c69b50",

        ombraTitolo:
          "0 1px 3px rgba(255,255,255,0.95)",

        ombraTesto:
          "none",

        sfondoTitolo:
          "rgba(255,248,239,0.76)",

        sfondoTesto:
          "rgba(255,248,239,0.70)"
      }
    },


    /* ==========================================
       BAMBINI

       SEZIONE RIMOSSA.
       Al suo posto utilizziamo il Trivia.
       ========================================== */

    
    kids: {
      attivo: false,

      sfondo: "kids-bg.jpg",
      card: "kids-card.png",

      titolo: "Bambini benvenuti",

      testo:
        "Anche i più piccoli sono i benvenuti.",

      animazione: "zoom"
    },
    


    /* ==========================================
       TRIVIA SU CIELO
       ========================================== */

    trivia: {
      attivo: true,

      sfondo: "trivia-bg.jpg",
      card: "trivia-card.png",

      titolo: "Quanto conosci Cielo?",

      testo:
        "Rispondi alle 3 domande e scopri quanto mi conosci! ✨",

      richiediNome: true,

      testoNome:
        "Prima di iniziare, dimmi chi sei 💖",

      placeholderNome:
        "Il tuo nome",

      testoPulsanteInizia:
        "Inizia il Trivia",

      testoPulsanteAvanti:
        "Prossima domanda",

      testoPulsanteFine:
        "Scopri il risultato",

      mostraRispostaCorretta: true,

      domande: [

        /* ======================================
           DOMANDA 1
           Da sostituire con quella di Cielo
           ====================================== */

        {
          domanda: "Qual è il mio piatto preferito?",
          risposte: [
            "La pasta",
            "Riso cinese (Chaufa)",
            "La carne"
          ],
          corretta: 1
        },


        /* ======================================
           DOMANDA 2
           ====================================== */

       {
          domanda: "Qual è la mia materia preferita?",
          risposte: [
            "Spagnolo",
            "Matematica",
            "Filosofia"
          ],
          corretta: 0
        },


        /* ======================================
           DOMANDA 3
           ====================================== */

        {
          domanda: "Qual è la mia stagione preferita?",
          risposte: [
            "Inverno",
            "Primavera",
            "Estate"
          ],
          corretta: 2
        }

      ],


      /* ======================================
         RISULTATO FINALE
         ====================================== */

      risultati: {

        perfetto: {
          minimo: 3,
          titolo: "Mi conosci benissimo! 👑",
          testo:
            "Hai risposto correttamente a tutte le domande!"
        },

        buono: {
          minimo: 2,
          titolo: "Mi conosci davvero bene! 💖",
          testo:
            "Hai quasi fatto centro!"
        },

        base: {
          minimo: 0,
          titolo: "Dobbiamo conoscerci meglio! 😄",
          testo:
            "Alla festa avremo modo di recuperare!"
        }
      },


      /* ======================================
         SALVATAGGIO RISULTATI

         Alla fine del Trivia lo script
         invierà questi dati al Google Sheet:

         - nome
         - domanda 1 / risposta
         - domanda 2 / risposta
         - domanda 3 / risposta
         - punteggio
         - data e ora
         ====================================== */

      salvaRisultati: true,

      animazione: "fade",

      stile: {
        coloreTitolo: "#7b1025",
        coloreTesto: "#43272b",
        coloreAccento: "#c69b50",

        ombraTitolo:
          "0 1px 3px rgba(255,255,255,0.95)",

        sfondoTitolo:
          "rgba(255,248,239,0.78)",

        sfondoTesto:
          "rgba(255,248,239,0.72)"
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

      testo:
        "Abbigliamento elegante nei toni del bordeaux.",

      immagine: "dresscode.jpg",

     // testoPulsante:        "Vedi Dress Code",

      animazione: "fade",

      stile: {
        coloreTitolo: "#7b1025",
        coloreTesto: "#43272b",
        coloreAccento: "#c69b50",

        ombraTitolo:
          "0 1px 3px rgba(255,255,255,0.95)",

        ombraTesto:
          "none",

        sfondoTitolo:
          "rgba(255,248,239,0.76)",

        sfondoTesto:
          "rgba(255,248,239,0.70)"
      }
    },


    /* ==========================================
       CONFERMA WHATSAPP
       ========================================== */

    rsvp: {
      attivo: true,

      sfondo: "rsvp-bg.jpg",
      card: "rsvp-card.png",

      titolo:
        "Conferma la tua presenza",

      testo:
        "Ti chiediamo gentilmente di confermare la presenza entro il 10 ottobre.",

      mostraWhatsapp: true,

      animazione: "zoom",

      stile: {
        coloreTitolo: "#7b1025",
        coloreTesto: "#43272b",
        coloreAccento: "#c69b50",

        sfondoTitolo:
          "rgba(255,248,239,0.76)",

        sfondoTesto:
          "rgba(255,248,239,0.70)"
      }
    },


    /* ==========================================
       FOTO FINALE

       Utilizziamo una fotografia generata:
       ragazza di spalle, capelli neri,
       abito da quinceañera bordeaux.
       ========================================== */

    finale: {
      attivo: true,

      sfondo: "final-bg.jpg",
      card: "final-card.png",

      foto: "",

      titolo: "Cielo",

      frase:
        "Ti aspetto per vivere insieme un giorno indimenticabile! ✨",

      animazione: "fade",

      stile: {
        coloreTitolo: "#d2a65d",
        coloreNome: "#7b1025",
        coloreTesto: "#482b2e",

        ombraTitolo:
          "0 1px 3px rgba(255,255,255,0.9)",

        ombraNome:
          "0 2px 5px rgba(255,255,255,0.85)",

        ombraTesto:
          "0 1px 3px rgba(255,255,255,1)",

        sfondoFrase:
          "rgba(255,248,239,0.72)"
      }
    }

  }

};