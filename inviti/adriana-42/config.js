
const INVITO_CONFIG = {

  /* =========================
     DATOS DEL EVENTO
  ========================= */

  tipoEvento: "cumpleanos",

  nomeFesteggiato: "Adriana",
  eta: "42 años",

  titolo: "¡Adris celebra sus 42 años!",
  //sottotitolo: "¡Estás invitado a celebrar conmigo!",

  //descrizione1: "Con mucha alegría quiero compartir contigo",
  //descrizione2: "una noche especial llena de música, risas y diversión.",

  giorno: "24",
  mese: "Octubre",
  anno: "2026",
  giornoSettimana: "Sábado",
  ora: "8:00 p. m.",

  testoFinale: "¡Te espero!",

  /* =========================
     LUGAR / MAPA
  ========================= */

  luogoNome: "Patio de la abu Paty",
  indirizzoMaps: "La Gruta 305, Selva Alegre, Cercado, Arequipa, Perú",

  /* =========================
     WHATSAPP
  ========================= */

  whatsappNumero: "51989339190",

  whatsappMessaggio: "¡Hola, Adriana! Confirmo mi asistencia a tu cumpleaños de 42 años el sábado 24 de octubre a las 8:00 p. m. ¡Nos vemos!",

  /* =========================
     GUARDAR FECHA / CALENDARIO
  ========================= */

  calendario: {
    attivo: true,
    titolo: "Cumpleaños 42 de Adriana",
    descrizione: "Celebración en La casa del Abu Paty.",
    inizio: "20261024T200000",

    // Fin provisional: no tenemos la hora de finalización.
    fine: "20261024T235900"
  },

  /* =========================
     DRESS CODE - DESACTIVADO
  ========================= */

  dresscode: {
    attivo: false,
    titolo: "Código de vestimenta",
    testo: "",
    immagine: "dresscode.jpg"
  },

  /* =========================
     FOTOS / GALERÍA - DESACTIVADO
  ========================= */

  foto: {
    attivo: false,
    titolo: "Fotos de la fiesta",
    testo: "Comparte tus fotos y videos de nuestra celebración",
    link: ""
  },

  /* =========================
     IMÁGENES Y ARCHIVOS
  ========================= */

  immagini: {
    sfondoCover: "bg-cover.jpg",
    sfondoInvito: "bg-invito.jpg",
    envelope: "envelope.png",
    decorazioneTop: "personaggio.png",
    preview: "preview.jpg",
    musica: "music.mp3"

    // musica: "" // Para invitaciones sin música.
  },

  /* =========================
     VIDEO INTRO PREMIUM
  ========================= */

  introVideo: {
    attivo: false,
   // file: "intro.mp4"

    // file: "" // Para invitaciones sin video.
  },

  /* =========================
     PORTADA / SOBRE
  ========================= */

  cover: {
    testoBottoneApri: "Abrir invitación",

    decorazioneTop: {
      attiva: true,
      immagine: "personaggio.png",
      width: "150px",
      top: "1px",
      left: "50%"
    },

    envelope: {
      immagine: "envelope.png",
      width: "260px"
    }
  },

  /* =========================
     MÚSICA
  ========================= */

  musica: {
    attiva: true,
    file: "music.mp3",
    mostraIconaAudio: true,
    icona: "🔊"

    // La indicación de audio usa texto en script.js.
    // No admite PNG directamente.
  },

  /* =========================
     EFECTOS ANIMADOS
  ========================= */

  effetti: ["confetti", "sparkles"],

  // Altre opzioni disponibili:
  // effetti: ["balloons"],
  // effetti: ["disco"],
  // effetti: [], // Sin efectos.

  /* =========================
     BOTONES / ICONOS PNG
  ========================= */

  pulsanti: {

    whatsapp: {
      attivo: true,
      testo: "Confirmar asistencia",
      icona: "icons/conferma.png"
      // emoji: "📞"
    },

    maps: {
      attivo: true,
      testo: "Cómo llegar",
      icona: "icons/mappa.png"
      // emoji: "📍"
    },

    calendario: {
      attivo: true,
      testo: "Guardar fecha",
      icona: "icons/calendario.png"
      // emoji: "📅"
    },

    dresscode: {
      attivo: false,
      testo: "Código de vestimenta",
      icona: "icons/dresscode.png"
    },

    foto: {
      attivo: false,
      testo: "Fotos",
      icona: "icons/foto.png"
      // emoji: "📸"
    }
  },

  /* =========================
     TEMA GRÁFICO
     ROJO / BLANCO / NEGRO
  ========================= */

  tema: {
    colorePrimario: "#C8142F",
    coloreSecondario: "#181818",
    coloreTesto: "#32131A",

    coloreCard: "rgba(255,255,255,0.93)",
    coloreCardBordo: "rgba(200,20,47,0.65)",

    fontTitolo: "'Cormorant Garamond', serif",
    fontTesto: "'Poppins', sans-serif",

    grandezzaTitolo: "42px",
    grandezzaNome: "34px"
  },

  /*
     FONT ALTERNATIVI

     Elegante: 'Cinzel', serif
     Lusso: 'Cormorant Garamond', serif
     Moderno: 'Montserrat', sans-serif
     Bambini: 'Quicksand', sans-serif
     Principessa: 'Great Vibes', cursive
     Romantico: 'Allura', cursive
     Matrimonio: 'Alex Brush', cursive
  */

  /* =========================
     WHATSAPP PREVIEW / META
  ========================= */

  meta: {
    title: "¡Adriana!",
    description: "Sábado 24 de octubre, 8:00 p. m. ¡Abre tu invitación y confirma tu asistencia!",
    image: "https://invitiwow.com/inviti/adriana-42/preview.jpg?v=1",
    url: "https://invitiwow.com/inviti/adriana-42/"
  }
};
