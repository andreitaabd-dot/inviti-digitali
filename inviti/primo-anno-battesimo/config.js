const INVITO_CONFIG = {
  /* =========================
     DATI EVENTO
  ========================= */

  tipoEvento: "primo_anno_battesimo",

  nomeFesteggiato: "Leonardo",
  eta: "1 anno",

  titolo: "Primo Compleanno e Battesimo",
  sottotitolo: "Sei invitato a festeggiare con noi",

  descrizione1: "Con immensa gioia festeggiamo",
  descrizione2: "il primo anno e il Battesimo di Leonardo",

  giorno: "15",
  mese: "Agosto",
  anno: "2026",
  giornoSettimana: "Sabato",
  ora: "16:30",

  testoFinale: "Ti aspettiamo per condividere insieme questo giorno speciale.",

  /* =========================
     LUOGO / MAPPA
  ========================= */

  luogoNome: "Ristorante Il Giardino",
  indirizzoMaps: "Via Roma 10, Torino",

  /* =========================
     WHATSAPP
  ========================= */

  whatsappNumero: "393881769329",
  whatsappMessaggio: "Ciao! Confermo la mia presenza al primo compleanno e Battesimo di Leonardo",

  /* =========================
     SAVE THE DATE / CALENDARIO
  ========================= */

  calendario: {
    attivo: true,
    titolo: "Primo Compleanno e Battesimo di Leonardo",
    descrizione: "Invito digitale - Conferma la tua presenza",
    inizio: "20260815T163000",
    fine: "20260815T203000"
  },

  /* =========================
     DRESS CODE
  ========================= */

  dresscode: {
    attivo: true,
    titolo: "Dress code",
    testo: "vestiti comodi e calzine antiscivolo.",
    immagine: "dresscode.jpg"
  },

  /* =========================
     FOTO / GALLERIA
  ========================= */

  foto: {
    attivo: true,
    titolo: "Foto della festa",
    testo: "Carica qui le foto e i video della giornata",
    link: "https://photos.app.goo.gl/Bnc2MG4pUXZQEjURA"
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
    attivo: false,
    //file: "intro.mp4"
     file: ""
  },

  /* =========================
     BUSTA / COVER
  ========================= */

  cover: {
    testoBottoneApri: "Apri la busta",

    decorazioneTop: {
      attiva: true,
      immagine: "personaggio.png",
      width: "180px",
      top: "35px",
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
    icona: "icons/dresscode.png"
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
    colorePrimario: "#8db7d2",
    coloreSecondario: "#d4af37",
    coloreTesto: "#3f3527",

    coloreCard: "rgba(255,255,255,0.72)",
    coloreCardBordo: "rgba(212,175,55,0.55)",

    fontTitolo: "'Cormorant Garamond', serif",
    fontTesto: "'Poppins', sans-serif",

    grandezzaTitolo: "42px",
    grandezzaNome: "34px"
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
    image: "https://invitiwow.com/inviti/primo-anno-battesimo/preview.jpg?v=1",
    url: "https://invitiwow.com/inviti/primo-anno-battesimo/"
  }
};