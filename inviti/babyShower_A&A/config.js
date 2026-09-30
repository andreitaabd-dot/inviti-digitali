const INVITO_CONFIG = {

  tipoEvento: "baby_shower",


  /* =========================================================
     EVENTO
  ========================================================= */

  evento: {
    nome: "Liam",
    genitori: "Arturo y Andrea",

    titolo: "BABY SHOWER",

    preTitolo:
      "¡LA DULCE ESPERA ESTÁ POR TERMINAR!",

    testoInvito:
      "Tenemos el honor de invitarte a celebrar la llegada de nuestro pequeño",

    testoFinale:
      "Esperamos compartir contigo este gran momento.",

    testoChiusura:
      "¡No faltes!",

    giorno: "07",
    mese: "Noviembre",
    anno: "2026",
    ora: "18:00"
  },


  /* =========================================================
     COVER / BUSTA
  ========================================================= */

  cover: {
    attivo: true,

    titolo: "BABY SHOWER",
    nome: "Liam",

    testoApri:
      "CLICK PARA ABRIR LA INVITACIÓN",

    sfondo: "bg-page.jpg",

    envelope: "envelope.png",

    decorazione: {
      attiva: true,
      immagine: "envelope-decoration.png"
    },

    effettoApertura: "zoom-fade"
  },


  /* =========================================================
     MUSICA
  ========================================================= */

  musica: {
    attivo: true,

    file: "music.mp3",

    volume: 0.45,

    mostraControllo: true
  },


  /* =========================================================
     1 — BATTITO
  ========================================================= */

  battito: {
    attivo: true,

    file: "heartbeat.mp3",

    mostraPlayer: true,

    pausaMusica: true,

    riprendiMusicaDopo: true
  },


  /* =========================================================
     2 — FRASE INIZIALE
     3 — BABY SHOWER + PERSONAGGIO
     4 — GENITORI
     5 — TESTO INVITO
     6 — NOME BAMBINO
  ========================================================= */

  intro: {
    attivo: true,

    mostraPreTitolo: true,
    mostraTitolo: true,
    mostraGenitori: true,
    mostraTestoInvito: true,
    mostraNome: true,

    /*
     * Immagine usata SOLO nella sezione
     * BABY SHOWER.
     */
    immagine: "hero-baby.png"
  },


  /* =========================================================
     7 — ECOGRAFIA
  ========================================================= */

  ecografia: {
    attivo: true,

    immagine: "ecografia.jpg"
  },


  /* =========================================================
     8 — DATA
  ========================================================= */

  data: {
    attivo: true
  },


  /* =========================================================
     9 — COUNTDOWN
  ========================================================= */

  countdown: {
    attivo: true,

    titolo: "¿Cuánto falta?",

    dataISO: "2026-11-07T18:00:00",

    /*
     * Immagine ESCLUSIVA del countdown.
     */
    immagine: "baby-cloud.png"
  },


  /* =========================================================
     10 — DIRECCIÓN
  ========================================================= */

  luogo: {
    attivo: true,

    titolo: "Dirección",

    indirizzo:
      "Corso Potenza 153/A - 3° piano",

    mapsQuery:
      "Corso Potenza 153/A, Torino",

    testoBottone:
      "VER UBICACIÓN",

    mostraBottone: true,

    /*
     * Immagine ESCLUSIVA della sezione indirizzo.
     */
    immagine: "img_map.png"
  },


  /* =========================================================
     11 — MAPS + REGALOS

     Questa deve avere una SUA immagine,
     diversa da quella della Dirección.
  ========================================================= */

  regali: {
    attivo: true,

    titolo: "Regalos",

    testoBottone:
      "LISTA DE REGALOS",

    /*
     * Immagine del personaggio accanto
     * a Maps / Regalos.
     */
    immagineSezione: "img_regali.png",

    /*
     * Immagine aperta nella modal.
     */
    immagineLista: "regalos.jpg",

    opzioni: [
      {
        attivo: true,
        tipo: "busta",
        testo: "Sobre ✉️"
      },
      {
        attivo: true,
        tipo: "regalo",
        testo: "Regalo 🎁"
      }
    ]
  },


  /* =========================================================
     12 — RSVP

     Ha una SUA immagine.
  ========================================================= */

  rsvp: {
    attivo: true,

    titolo:
      "Confirma tu asistencia",

    /*
     * Immagine ESCLUSIVA della sezione RSVP.
     */
    immagine: "baby-ball.png",

    contatti: [

      {
        attivo: true,

        label: "PAPÁ",

        nome: "Arturo",

        numero: "393444980411",

        testoBottone:
          "CONFIRMA TU ASISTENCIA",

        messaggio:
          "Hola, confirmo mi asistencia al Baby Shower de Liam."
      },

      {
        attivo: true,

        label: "MAMÁ",

        nome: "Andrea",

        numero: "393758838344",

        testoBottone:
          "CONFIRMA TU ASISTENCIA",

        messaggio:
          "Hola, confirmo mi asistencia al Baby Shower de Liam."
      }

    ]
  },


  /* =========================================================
     13 — TESTO FINALE
     14 — COMPOSIZIONE FINALE
     15 — ¡NO FALTES!

     Qui separiamo chiaramente le immagini.
  ========================================================= */

  finale: {
    attivo: true,

    mostraTesto: true,

    mostraImmagine: true,

    mostraChiusura: true,

    /*
     * Drago principale.
     */
    immagineDrago:
      "finale.png",

  },


  /* =========================================================
     CALENDARIO
  ========================================================= */

  calendario: {
    attivo: false,

    titolo:
      "Baby Shower de Liam",

    descrizione:
      "Baby Shower de Liam - Arturo y Andrea",

    inizio:
      "20261107T180000",

    fine:
      "20261107T220000",

    testoBottone:
      "GUARDAR FECHA"
  },


  /* =========================================================
     GALLERIA
  ========================================================= */

  galleria: {
    attivo: false,

    titolo: "Fotos",

    testo:
      "Comparte tus fotos con nosotros",

    link: ""
  },


  /* =========================================================
     EFFETTI
  ========================================================= */

  effetti: {
    attivo: true,

    tipo: "sparkles",

    quantita: 14,

    immagine: "stars.png"
  },


  /* =========================================================
     TEMA
  ========================================================= */

  tema: {

    sfondoPagina:
      "bg-page.jpg",

    coloreSfondoFallback:
      "#eaf7ff",

    colorePrimario:
      "#62b9eb",

    coloreSecondario:
      "#1775b8",

    coloreAccento:
      "#f5a623",

    coloreTesto:
      "#164f82",

    coloreTestoScuro:
      "#30343b",

    coloreBottone:
      "#2da8e8",

    coloreBottoneTesto:
      "#ffffff",

    fontTitolo:
      "'Bangers', cursive",

    fontNome:
      "'Allura', cursive",

    fontTesto:
      "'Montserrat', sans-serif",

    larghezzaMassima:
      "480px"
  },


  /* =========================================================
     META / WHATSAPP
  ========================================================= */

  meta: {

    title:
      "Baby Shower de Liam",

    description:
      "Arturo y Andrea te invitan a celebrar la llegada de Liam",

    image:
      "preview.jpg?v=1",

    url: "https://invitiwow.com/inviti/babyShower_A&A"
  }

};

