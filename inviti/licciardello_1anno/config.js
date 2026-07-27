const INVITO_CONFIG = {
  /* =========================
   DATI EVENTO
========================= */

tipoEvento: "primo_compleanno",

nomeFesteggiato: "Christian Leandro Licciardello",
eta: "1 anno",

titolo: "Cumple 1 Año",
sottotitolo: "Sei invitato a festeggiare con noi",

descrizione1: "Con immensa gioia festeggiamo",
descrizione2: "il primo compleanno di Christian Leandro Licciardello",

giorno: "12",
mese: "Agosto",
anno: "2026",
giornoSettimana: "Mercoledì",
ora: "14:00",

testoFinale: "Ti aspettiamo per condividere insieme questo giorno speciale.",

  /* =========================
     LUOGO / MAPPA
  ========================= */

luogoNome: "Festa di Christian Leandro",
indirizzoMaps: "Via del Nicola 80, Airasca",
mapsLink: "https://www.google.com/maps/search/?api=1&query=Via%20del%20Nicola%2080%2C%20Airasca",

  /* =========================
   WHATSAPP
========================= */

whatsappNumero: "393801055113",
whatsappMessaggio: "Ciao! Confermo la mia presenza al primo compleanno di Christian Leandro",

/* =========================
   SAVE THE DATE / CALENDARIO
========================= */

calendario: {
  attivo: true,
  titolo: "Primo Compleanno di Christian Leandro",
  descrizione: "Invito digitale - Conferma la tua presenza",
 inizio: "20260812T140000",
fine: "20260812T180000"
},
/* =========================
   DRESS CODE
========================= */

dresscode: {
  attivo: true,
  titolo: "Porta il costume!",
  testo: "La festa sarà in piscina, quindi ricordati di portare il costume e tutto il necessario per fare il bagno.",
  immagine: "dresscode.jpg"
},

  /* =========================
     FOTO / GALLERIA
  ========================= */

  foto: {
  attivo: true,
  titolo: "Foto della festa",
  testo: "Carica qui le foto e i video della giornata",
  link: "https://photos.app.goo.gl/LEgK6JrkrARZsXei8"
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
    // musica: ""
  },

  /* =========================
     VIDEO INTRO
     se non serve lascia vuoto
  ========================= */

  introVideo: {
    attivo: true,
    file: "intro.mp4"
   
  },

  /* =========================
     BUSTA / COVER
  ========================= */

  cover: {
    testoBottoneApri: "Apri la busta",

    decorazioneTop: {
      attiva: true,
      immagine: "personaggio.png",
      width: "110px",
      top: "10px",
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
    file: "music.mp3",
    mostraIconaAudio: true,
    icona: "🔊"
  },

  /* =========================
     EFFETTI
     disponibili:
     confetti, balloons, sparkles, disco
  ========================= */

  effetti: ["confetti", "sparkles"],

  /* =========================
     PULSANTI
     se attivo false non compare
  ========================= */

pulsanti: {
  whatsapp: {
    attivo: true,
    testo: "Conferma",
    emoji: "📞"
  },

  maps: {
    attivo: true,
    testo: "Mappa",
    emoji: "📍"
  },

  calendario: {
    attivo: true,
    testo: "Salva data",
    emoji: "📅"
  },

  dresscode: {
    attivo: true,
    testo: "Dress code",
     emoji: "🩱"
  },

  foto: {
    attivo: true,
    testo: "Foto",
    emoji: "📸"
  }
},

  /* =========================
   TEMA GRAFICO
========================= */

tema: {
  colorePrimario: "#1769AA",
  coloreSecondario: "#D62828",
  coloreTesto: "#102A43",

  coloreCard: "rgba(255,255,255,0.88)",
  coloreCardBordo: "rgba(23,105,170,0.75)",

  fontTitolo: "'Quicksand', sans-serif",
  fontTesto: "'Quicksand', sans-serif",

  grandezzaTitolo: "40px",
  grandezzaNome: "32px"
},
  
  /*
FONT CONSIGLIATI

Elegante:
'Cinzel', serif

Lusso:
'Cormorant Garamond', serif

Moderno:
'Montserrat', sans-serif

Bambini:
'Quicksand', sans-serif

Principessa:
'Great Vibes', cursive

Romantico:
'Allura', cursive

Matrimonio:
'Alex Brush', cursive
*/

  /* =========================
     WHATSAPP PREVIEW / META
  ========================= */

  meta: {
    title: "Primo Compleanno e Battesimo di Leonardo",
    description: "Apri l’invito digitale e conferma la presenza",
    image: "https://invitiwow.com/inviti/licciardello_1anno/preview.jpg?v=1",
    url: "https://invitiwow.com/inviti/licciardello_1anno/"
  }
};