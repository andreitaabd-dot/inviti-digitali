
const INVITO_CONFIG = {

  /* =========================
     DATI EVENTO
  ========================= */

  tipoEvento: "compleanno",

  nomeFesteggiato: "Enzo",
  eta: "4 años",

  titolo: "¡Una aventura de otro planeta!",
  sottotitolo: "¡Estás invitado a mi cumpleaños!",

  descrizione1: "¡Prepárate para reunir las esferas del dragón!",
  descrizione2: "¡Enzo cumple 4 años!",

  giorno: "02",
  mese: "Enero",
  anno: "2027",
  giornoSettimana: "Sábado",
  ora: "10:00 a. m.",

  testoFinale: "¡Habrá piscina! No olvides traer tu ropa de baño. Confirma tu asistencia hasta el 23 de diciembre de 2026. ¡Te espero para vivir una aventura increíble!",

  /* =========================
     LUOGO / MAPPA
  ========================= */

  luogoNome: "Urb. Bancarios D-8",

  indirizzoMaps: "Urbanización Bancarios D-8, José Luis Bustamante y Rivero, Arequipa, Perú",

  /* =========================
     WHATSAPP
  ========================= */

  whatsappNumero: "393881769329",

  whatsappMessaggio: "¡Hola! Confirmo mi asistencia al cumpleaños de Enzo el sábado 2 de enero a las 10:00 a. m. 🐉🎉",

  /* =========================
     SAVE THE DATE / CALENDARIO
  ========================= */

  calendario: {
    attivo: true,
    titolo: "Cumpleaños de Enzo - 4 años",
    descrizione: "¡Fiesta de Goku con piscina! No olvides traer ropa de baño, toalla y sandalias.",
    inizio: "20270102T100000",
    fine: "20270102T140000"
  },

  /* =========================
     DRESS CODE / PISCINA
  ========================= */

  dresscode: {
    attivo: true,
    titolo: "¡Nos vamos a la piscina! 💦",
    testo: "¡No olvides traer tu ropa de baño, toalla y sandalias! ¡Nos divertiremos muchísimo!",
    immagine: "dresscode.jpg"
  },

  /* =========================
     FOTO / GALLERIA
  ========================= */

  foto: {
    attivo: false,
    titolo: "Fotos de la fiesta",
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
  ========================= */

  introVideo: {
    attivo: false,
    file: ""
  },

  /* =========================
     BUSTA / COVER
  ========================= */

  cover: {
    testoBottoneApri: "¡Abre tu invitación!",

    decorazioneTop: {
      attiva: true,
      immagine: "personaggio.png",
      width: "95px",
      top: "1px",
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
    file: "",
    mostraIconaAudio: false,
    icona: "🔊"
  },

  /* =========================
     EFFETTI ANIMATI
  ========================= */

  effetti: ["confetti", "sparkles"],

  /* =========================
     PULSANTI
     ICONE PERSONALIZZATE
  ========================= */

  pulsanti: {

    whatsapp: {
      attivo: true,
      testo: "Confirmar asistencia",
      icona: "icons/whatsapp.png"
    },

    maps: {
      attivo: true,
      testo: "Cómo llegar",
      icona: "icons/maps.png"
    },

    calendario: {
      attivo: true,
      testo: "Guardar fecha",
      icona: "icons/calendario.png"
    },

    dresscode: {
      attivo: true,
      testo: "¿Qué debo llevar?",
      icona: "icons/dresscode.png"
    },

    foto: {
      attivo: false,
      testo: "Fotos",
      icona: "icons/foto.png"
    }
  },

  /* =========================
     TEMA GOKU
  ========================= */

  tema: {
    colorePrimario: "#F57C00",
    coloreSecondario: "#1E4FC2",
    coloreTesto: "#17213B",

    coloreCard: "rgba(255,255,255,0.88)",
    coloreCardBordo: "rgba(245,124,0,0.65)",

    fontTitolo: "'Montserrat', sans-serif",
    fontTesto: "'Quicksand', sans-serif",

    grandezzaTitolo: "36px",
    grandezzaNome: "40px"
  },

  /* =========================
     WHATSAPP PREVIEW / META
  ========================= */

  meta: {
    title: "¡Enzo cumple 4 años! 🐉",

    description: "¡Una aventura de otro planeta! Te esperamos el sábado 2 de enero a las 10:00 a. m. en Arequipa.",

    image: "https://invitiwow.com/inviti/enzo_4_anni/preview.jpg?v=1",

    url: "https://invitiwow.com/inviti/enzo_4_anni/"
  }

};
