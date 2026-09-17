/* ============================================================
   INVITI WOW - TEMPLATE GIORNALE
   Configurazione completa
   Versione: 1.0.0

   Per creare un nuovo invito si modificano SOLO:
   - config.js
   - immagini
   - musica

   Non devono essere modificati:
   - index.html
   - style.css
   - script.js
   ============================================================ */

const INVITO_CONFIG = {

  /* ==========================================================
     TEMPLATE
     ========================================================== */

  template: {
    tipo: "giornale",
    versione: "1.0.0",
    lingua: "it",

    visualizzazione: {
      mobile: "single",
      tablet: "double",
      desktop: "double"
    },

    breakpoint: {
      mobileMax: 767,
      tabletMax: 1100
    }
  },


  /* ==========================================================
     META / ANTEPRIMA WHATSAPP
     ========================================================== */

  meta: {
    title: "Elisa & Danilo - Il nostro matrimonio",
    description: "Sfoglia il nostro invito di matrimonio",

    image:
      "https://invitiwow.com/inviti/GIORNALE_a&r/preview.jpg?v=1",

    url:
      "https://invitiwow.com/inviti/GIORNALE_a&r/"
  },


  /* ==========================================================
     DATI GENERALI EVENTO
     ========================================================== */

  evento: {
    tipo: "matrimonio",

    sposa: "Elisa",
    sposo: "Danilo",

    nomi: "Elisa & Danilo",

    titolo: "Il Matrimonio",

    sottotitolo:
      "Felicemente sposi!",

    giornoSettimana:
      "Giovedì",

    giorno:
      "23",

    mese:
      "Luglio",

    anno:
      "2026",

    oraCerimonia:
      "16:00",

    dataOraISO:
      "2026-07-23T16:00:00",

    localitaTestata:
      "Cividale Mantovano",

    dataTestata:
      "Giovedì, 23 Luglio 2026"
  },


  /* ==========================================================
     TESTATA DEL GIORNALE
     ========================================================== */

  testata: {

    nomeGiornale:
      "Gazzetta di Mantova",

    sopraTitolo:
      "ULTIMA NOTIZIA",

    mostraNomeGiornaleInCopertina:
      true,

    mostraTestataNellePagineInterne:
      true,

    localita:
      "Cividale Mantovano",

    data:
      "Giovedì, 23 Luglio 2026"
  },


  /* ==========================================================
     TEMA GRAFICO
     ========================================================== */

  tema: {

    coloreCarta:
      "#fffefb",

    coloreSfondoViewer:
      "#eeeeee",

    colorePrimario:
      "#748d70",

    coloreSecondario:
      "#b578cc",

    coloreTesto:
      "#1d1d1d",

    coloreTestoSecondario:
      "#555555",

    coloreLinea:
      "#8ca087",

    coloreLineaLeggera:
      "#d8d8d8",

    colorePulsante:
      "#b578cc",

    coloreTestoPulsante:
      "#ffffff",

    fontTestata:
      "'UnifrakturMaguntia', 'Times New Roman', serif",

    fontTitolo:
      "'Cormorant Garamond', Georgia, serif",

    fontTesto:
      "Georgia, 'Times New Roman', serif",

    fontSans:
      "'Montserrat', Arial, sans-serif",

    fontFirma:
      "'Allura', cursive",

    ombraPagina:
      "0 10px 35px rgba(0,0,0,0.18)",

    raggioPagina:
      "0px",

    pagina: {
      larghezza: 900,
      altezza: 1273,
      rapporto: "900/1273"
    }
  },


  /* ==========================================================
     SFOGLIATORE
     ========================================================== */

  flipbook: {

    attivo: true,

    animazionePagina:
      true,

    durataAnimazioneMs:
      650,

    swipe:
      true,

    tastiera:
      true,

    frecce:
      true,

    navigazioneBordi:
      true,

    bloccaSwipeVerticaleDuranteSfoglio:
      false,

    mostraNumeroPagina:
      false,

    copertinaSingola:
      true,

    retrocopertinaSingola:
      true
  },


  /* ==========================================================
     CONTROLLI VIEWER
     ========================================================== */

  controlli: {

    zoom: {
      attivo: true,
      min: 1,
      max: 2.5,
      step: 0.25
    },

    fullscreen: {
      attivo: true
    },

    audio: {
      attivo: true
    }
  },


  /* ==========================================================
     MUSICA
     ========================================================== */

  musica: {

    attiva:
      true,

    file:
      "music.mp3",

    avviaDopoPrimaInterazione:
      true,

    loop:
      true,

    volume:
      0.55,

    mostraIconaAudio:
      true,

    iconaAttiva:
      "🔊",

    iconaDisattiva:
      "🔇"
  },


  /* ==========================================================
     EFFETTI
     ========================================================== */

  effetti: [],


  /* ==========================================================
     IMMAGINI
     ========================================================== */

  immagini: {

    preview:
      "preview.jpg",

    copertina:
      "cover.jpg",

    chiesa:
      "chiesa.jpg",

    location:
      "location.jpg",

    storia:
      "storia.jpg",

    finale:
      "finale.jpg",

    logoFinale:
      "logo.png"
  },


  /* ==========================================================
     LINK GLOBALI
     ========================================================== */

  links: {

    chiesa:
      "https://maps.google.com/?q=Chiesa+San+Marco+Evangelista",

    location:
      "https://maps.google.com/?q=Villa+dei+Mulini",

    parcheggioChiesa1:
      "https://maps.google.com/",

    parcheggioChiesa2:
      "https://maps.google.com/",

    parcheggioChiesa3:
      "https://maps.google.com/",

    parcheggioVilla:
      "https://maps.google.com/",

    hotel:
      "",

    listaNozze:
      "",

    gallery:
      ""
  },


  /* ==========================================================
     RSVP SEMPLICE

     STESSO MODULO PER TUTTI GLI INVITATI.

     Nessun limite sul numero di persone.
     Nessun controllo invitati.
     Nessun controllo duplicati.
     ========================================================== */

  rsvp: {

    attivo:
      true,

        modalitaDemo: true,

    tipo:
      "semplice",

    /*
      modal   = modulo aperto dentro l'invito
      pagina  = pagina dedicata dentro il giornale
      esterno = apre un link esterno
    */
    apertura:
      "modal",

    titolo:
      "Conferma la tua presenza",

    sottotitolo:
      "Compila il modulo entro il 30 maggio 2026",

    dataLimite:
      "30 maggio 2026",

    /*
      Inserire successivamente qui
      l'URL che salverà le risposte.
    */
    endpoint:
      "",

    metodo:
      "POST",

    linkEsterno:
      "",

    testoPulsante:
      "Clicca qui per confermare",

    testoInvio:
      "Invia conferma",

    messaggioInvio:
      "Invio in corso...",

    messaggioSuccesso:
      "Grazie! La tua risposta è stata registrata.",

    messaggioErrore:
      "Non è stato possibile inviare la risposta. Riprova tra poco.",


    campi: {

      nome: {

        attivo:
          true,

        obbligatorio:
          true,

        label:
          "Nome",

        placeholder:
          "Il tuo nome"
      },


      cognome: {

        attivo:
          true,

        obbligatorio:
          true,

        label:
          "Cognome",

        placeholder:
          "Il tuo cognome"
      },


      telefono: {

        attivo:
          true,

        obbligatorio:
          false,

        label:
          "Telefono",

        placeholder:
          "Numero di telefono"
      },


      partecipazione: {

        attivo:
          true,

        obbligatorio:
          true,

        label:
          "Conferma partecipazione",

        opzioni: [

          {
            valore: "si",
            testo: "Sì"
          },

          {
            valore: "no",
            testo: "No"
          }

        ]
      },


      adulti: {

        attivo:
          true,

        obbligatorio:
          true,

        label:
          "Numero totale adulti",

        min:
          0,

        /*
          null = nessun limite massimo.
        */
        max:
          null,

        valoreDefault:
          1
      },


      bambini: {

        attivo:
          true,

        obbligatorio:
          true,

        label:
          "Numero totale bambini",

        min:
          0,

        max:
          null,

        valoreDefault:
          0
      },


      allergie: {

        attivo:
          true,

        obbligatorio:
          false,

        label:
          "Allergie ed intolleranze alimentari",

        placeholder:
          "Scrivi qui eventuali allergie o intolleranze"
      },


      note: {

        attivo:
          true,

        obbligatorio:
          false,

        label:
          "Note",

        placeholder:
          "Eventuali comunicazioni per gli sposi"
      }

    },


    privacy: {

      attiva:
        false,

      obbligatoria:
        true,

      testo:
        "Acconsento al trattamento dei dati inseriti esclusivamente per la gestione della partecipazione all'evento.",

      linkPrivacy:
        ""
    }

  },


  /* ==========================================================
     CALENDARIO
     ========================================================== */

  calendario: {

    attivo:
      true,

    titolo:
      "Matrimonio Elisa & Danilo",

    descrizione:
      "Matrimonio di Elisa e Danilo",

    luogo:
      "Chiesa San Marco Evangelista",

    inizio:
      "20260723T160000",

    fine:
      "20260724T010000",

    testoPulsante:
      "Salva la data"
  },


  /* ==========================================================
     ORDINE DELLE PAGINE

     Per cambiare ordine basta spostare gli ID.
     Una pagina con attivo:false viene ignorata.
     ========================================================== */

  ordinePagine: [

    "copertina",

    "matrimonio",

    "timelineTeam",

    "storia",

    "fotoFinale",

    "retrocopertina"

  ],


  /* ==========================================================
     PAGINE
     ========================================================== */

  pagine: {


    /* ========================================================
       PAGINA 1
       COPERTINA
       ======================================================== */

    copertina: {

      attivo:
        true,

      tipo:
        "copertina",

      sopraTitolo:
        "ULTIMA NOTIZIA",

      nomeGiornale:
        "Gazzetta di Mantova",

      localita:
        "Cividale Mantovano",

      data:
        "Giovedì, 23 Luglio 2026",

      titolo:
        "ELISA & DANILO",

      sottotitolo:
        "Felicemente sposi!",

      foto:
        "cover.jpg",

      altFoto:
        "Elisa e Danilo",


      citazione: {

        testo:
          "E l'amore che cambia: le cose ordinarie quando si fanno con amore, diventano straordinarie.",

        autore:
          "Papa Francesco"

      },


      testo:
        "Ebbene sì, quando le cose si fanno con amore, tutto può diventare straordinario, proprio come la nostra storia. Ed è per questo che, nel giorno del nostro matrimonio, ci piacerebbe rivivere i nostri ricordi e le nostre emozioni circondati dalle persone che contano di più per noi.",


      fasciaInferiore: {

        attiva:
          true,

        testi: [

          "IL GRANDE GIORNO",

          "♥",

          "IL GRANDE GIORNO",

          "♥",

          "IL GRANDE GIORNO"

        ]

      }

    },


    /* ========================================================
       PAGINA 2
       MATRIMONIO
       ======================================================== */

    matrimonio: {

      attivo:
        true,

      tipo:
        "matrimonio",

      titolo:
        "IL MATRIMONIO",

      sottotitolo:
        "Un giorno che ricorderemo per sempre...",

      introduzione:
        "Il nostro grande giorno si avvicina e non vediamo l'ora di condividerlo con voi! Ecco tutte le informazioni utili per accompagnarci in questa meravigliosa avventura:",

      data:
        "Giovedì 23 Luglio 2026",

      ora:
        "16:00",


      cerimonia: {

        attiva:
          true,

        nome:
          "Chiesa San Marco Evangelista",

        descrizioneLink:
          "clicca sul nome per aprire la location",

        foto:
          "chiesa.jpg",

        link:
          "https://maps.google.com/?q=Chiesa+San+Marco+Evangelista",

        apriNuovaScheda:
          true

      },


      ricevimento: {

        attivo:
          true,

        testoPrima:
          "Terminata la cerimonia seguiranno i festeggiamenti presso",

        nome:
          "Villa dei Mulini",

        descrizioneLink:
          "clicca sul nome per aprire la location",

        foto:
          "location.jpg",

        link:
          "https://maps.google.com/?q=Villa+dei+Mulini",

        apriNuovaScheda:
          true

      },


      infoUtili: {

        attive:
          true,

        titolo:
          "INFO UTILI",


        colonne: [


          {

            titolo:
              "Parcheggio Chiesa",

            testo:
              "La chiesa di S. Marco si trova in una zona chiusa al traffico, al centro di questo meraviglioso borgo. Alle due estremità del borgo ci sono due zone di parcheggio; per comodità e numero di posti, vi consigliamo i parcheggi n. 1 e 2:",


            links: [

              {

                testo:
                  "posizione parcheggio n.1",

                url:
                  "https://maps.google.com/"

              },


              {

                testo:
                  "posizione parcheggio n.2",

                url:
                  "https://maps.google.com/"

              },


              {

                testo:
                  "posizione parcheggio n.3",

                url:
                  "https://maps.google.com/"

              }

            ]

          },


          {

            titolo:
              "Parcheggio Villa",

            testo:
              "Arrivati a Villa dei Mulini, proseguite per 200 metri e sulla destra troverete il parcheggio a voi dedicato:",


            links: [

              {

                testo:
                  "posizione parcheggio villa",

                url:
                  "https://maps.google.com/"

              }

            ]

          }

        ]

      }

    },


    /* ========================================================
       PAGINA 3
       TIMELINE + WEDDING TEAM
       ======================================================== */

    timelineTeam: {

      attivo:
        true,

      tipo:
        "due_colonne",


      sinistra: {

        tipo:
          "timeline",

        titolo:
          "WEDDING TIMELINE",


        eventi: [


          {

            ora:
              "16:00",

            titolo:
              "Cerimonia",

            descrizione:
              ""

          },


          {

            ora:
              "18:00",

            titolo:
              "Arrivo ospiti in location",

            descrizione:
              ""

          },


          {

            ora:
              "18:15",

            titolo:
              "Aperitivo di benvenuto",

            descrizione:
              ""

          },


          {

            ora:
              "20:00",

            titolo:
              "Inizio cena",

            descrizione:
              ""

          },


          {

            ora:
              "22:30",

            titolo:
              "Taglio torta",

            descrizione:
              ""

          },


          {

            ora:
              "23:00-01:00",

            titolo:
              "Open bar e party",

            descrizione:
              ""

          }

        ]

      },


      destra: {

        tipo:
          "team",

        titolo:
          "WEDDING TEAM",


        gruppi: [


          {

            ruolo:
              "GENITORI DELLA SPOSA",

            nomi: [
              "Aurora e Antonio"
            ]

          },


          {

            ruolo:
              "GENITORI DELLO SPOSO",

            nomi: [
              "Caterina e Nicolò"
            ]

          },


          {

            ruolo:
              "TESTIMONI DELLA SPOSA",

            nomi: [
              "Arianna",
              "Roberta"
            ]

          },


          {

            ruolo:
              "TESTIMONI DELLO SPOSO",

            nomi: [
              "Valentina",
              "Mariapaola e Ciriaco"
            ]

          },


          {

            ruolo:
              "DAMIGELLE",

            nomi: [
              "Nicole e le sue amiche"
            ]

          },


          {

            ruolo:
              "CELEBRANTE",

            nomi: [
              "Don Michele"
            ]

          },


          {

            ruolo:
              "PAGGETTI",

            nomi: [
              "Alessandro",
              "Ginevra",
              "Mattia"
            ]

          }

        ]

      }

    },


    /* ========================================================
       PAGINA 4
       STORIA + RSVP + GIFT
       ======================================================== */

    storia: {

      attivo:
        true,

      tipo:
        "storia",

      titolo:
        "LA NOSTRA STORIA",

      foto:
        "storia.jpg",

      altFoto:
        "La nostra storia",

      testo:
        "La nostra storia è frutto del destino, proprio come accade nelle favole: durante la mia vacanza in Egitto, grazie ad una escursione decisa all'ultimo momento per incontrare nuovi e vecchi amici, Mariapaola e Ciriaco, conosco Roberta e la sua famiglia, amici e vicini di casa di Elisa. Al rientro in Italia, durante un pranzo a Mantova, Roberta mi parla di lei e da quel momento, dopo un messaggio e una telefonata, le nostre vite venivano stravolte a nostra insaputa. Notti trascorse al telefono come due adolescenti, weekend sempre in viaggio tra Pordenone e Mantova, l'incontro con Nicole e... Eccoci qua. Oggi siamo una meravigliosa famiglia, uniti e felici come una fiaba a lieto fine, ed è per questo che abbiamo deciso di unirci in matrimonio, proprio come le avevo promesso nel mio primo messaggio.",


      inBreve: {

        attivo:
          true,

        titolo:
          "IN BREVE",


        eventi: [


          {

            icona:
              "📱",

            etichetta:
              "LA NOSTRA PRIMA TELEFONATA",

            valore:
              "15 Gennaio 2023"

          },


          {

            icona:
              "💞",

            etichetta:
              "IL PRIMO INCONTRO",

            valore:
              "21 Gennaio 2023"

          },


          {

            icona:
              "💍",

            etichetta:
              "LA PROPOSTA",

            valore:
              "8 Luglio 2024"

          }

        ]

      },


      nuovoCapitolo: {

        attivo:
          true,

        titolo:
          "UN NUOVO CAPITOLO",

        testo:
          "Il nostro prossimo capitolo inizia con voi al nostro matrimonio. Confermate qui, gentilmente, la vostra presenza al nostro matrimonio entro il 30 maggio 2026.",

        mostraRsvp:
          true

      },


      regalo: {

        attivo:
          true,

        titolo:
          "GIFT",

        testo:
          "La vostra presenza sarà per noi il dono più bello, ma se desiderate farci un regalo, potete contribuire alla nostra nuova vita insieme.",


        iban: {

          attivo:
            true,

          intestatario:
            "Danilo Guccione",

          iban:
            "IT86Z0200832974001846697684",

          causale:
            "Contributo Regalo Nozze Elisa e Danilo",

          copiaAlClick:
            true,

          messaggioCopiato:
            "IBAN copiato"

        }

      }

    },


    /* ========================================================
       PAGINA 5
       FOTO FINALE
       ======================================================== */

    fotoFinale: {

      attivo:
        true,

      tipo:
        "foto_finale",


      citazione: {

        testo:
          "Amore è soltanto una parola, fino al momento in cui arriva qualcuno a darle un senso.",

        autore:
          "Paulo Coelho"

      },


      foto:
        "finale.jpg",

      altFoto:
        "Una foto speciale"

    },


    /* ========================================================
       PAGINA 6
       RETROCOPERTINA
       ======================================================== */

    retrocopertina: {

      attivo:
        true,

      tipo:
        "retrocopertina",

      mostraTestata:
        true,


      logo: {

        attivo:
          true,

        immagine:
          "logo.png",

        alt:
          "Logo"

      },


      testo:
        "",


      credito: {

        attivo:
          false,

        testo:
          "Invito digitale realizzato da Inviti WOW",

        link:
          "https://invitiwow.com"

      }

    },


    /* ========================================================
       PAGINA OPZIONALE
       DRESS CODE
       ======================================================== */

    dresscode: {

      attivo:
        false,

      tipo:
        "dresscode",

      titolo:
        "DRESS CODE",

      testo:
        "Elegante",

      immagine:
        "dresscode.jpg"

    },


    /* ========================================================
       PAGINA OPZIONALE
       GALLERY
       ======================================================== */

    gallery: {

      attivo:
        false,

      tipo:
        "gallery",

      titolo:
        "LE NOSTRE FOTO",

      testo:
        "Alcuni momenti della nostra storia.",


      foto: [

        "gallery-1.jpg",

        "gallery-2.jpg",

        "gallery-3.jpg",

        "gallery-4.jpg"

      ],


      linkAlbum:
        ""

    },


    /* ========================================================
       PAGINA OPZIONALE
       HOTEL
       ======================================================== */

    hotel: {

      attivo:
        false,

      tipo:
        "lista_link",

      titolo:
        "DOVE DORMIRE",

      introduzione:
        "Alcune strutture consigliate per chi arriva da fuori.",


      elementi: [

        {

          titolo:
            "Hotel 1",

          testo:
            "Descrizione facoltativa",

          link:
            ""

        }

      ]

    },


    /* ========================================================
       PAGINA OPZIONALE
       TRASPORTI
       ======================================================== */

    trasporti: {

      attivo:
        false,

      tipo:
        "lista_link",

      titolo:
        "TRASPORTI",

      introduzione:
        "Informazioni utili per gli spostamenti.",

      elementi: []

    }

  },


  /* ==========================================================
     AZIONI GLOBALI
     ========================================================== */

  azioni: {

    rsvp: {

      attiva:
        true,

      testo:
        "Conferma presenza",

      icona:
        "✓"

    },


    calendario: {

      attiva:
        true,

      testo:
        "Salva data",

      icona:
        "📅"

    },


    gallery: {

      attiva:
        false,

      testo:
        "Foto",

      icona:
        "📷",

      link:
        ""

    }

  },


  /* ==========================================================
     ACCESSIBILITÀ
     ========================================================== */

  accessibilita: {

    focusVisibile:
      true,

    riduciAnimazioniSeRichiestoDalSistema:
      true,

    altImmaginiObbligatorio:
      true

  },


  /* ==========================================================
     DEBUG
     ========================================================== */

  debug:
    false

};