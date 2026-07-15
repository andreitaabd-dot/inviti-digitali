const INVITO_CONFIG = {
  /* =========================
     DATI EVENTO
  ========================= */

  tipoEvento: "primo_compleanno",

  nomeFesteggiato: "Davide e Nicolò",
  eta: "1 anno",

  titolo: "Primo Compleanno",
  sottotitolo: "Sei invitato a festeggiare con noi",

  descrizione1: "Con immensa gioia festeggiamo",
  descrizione2: "il primo compleanno di Davide e Nicolò",

  giorno: "5",
  mese: "Settembre",
  anno: "2026",
  giornoSettimana: "Sabato",
  ora: "15:30",

  testoFinale: "Ti aspettiamo per condividere insieme questo giorno speciale.",

  /* =========================
     LUOGO / MAPPA
  ========================= */

  luogoNome: "Sala 2",
  indirizzoMaps: "3° piano - Corso Potenza 153A\nParcheggio al civico 155/A",
  mapsLink: "https://maps.app.goo.gl/JK1BJMpiEMe4W4926",

  /* =========================
     WHATSAPP
  ========================= */

  whatsappNumero: "393881942662",
  whatsappMessaggio: "Ciao! Confermo la mia presenza al primo compleanno di Davide e Nicolò",

  /* =========================
     SAVE THE DATE / CALENDARIO
  ========================= */

 calendario: {
  attivo: true,
  titolo: "Primo Compleanno di Davide e Nicolò",
  descrizione: "Invito digitale - Conferma la tua presenza",
  inizio: "20260905T153000",
  fine: "20260905T193000"
},

  /* =========================
     DRESS CODE
  ========================= */

  dresscode: {
    attivo: false
    /*titolo: "Dress code",
    testo: "vestiti comodi e calzine antiscivolo.",
    immagine: "dresscode.jpg"*/
  },

  /* =========================
     FOTO / GALLERIA
  ========================= */

  foto: {
    attivo: true,
    titolo: "Foto della festa",
    testo: "Carica qui le foto e i video della giornata",
    link: "https://photos.app.goo.gl/aSJdygS6PqMTR13R6"
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
    attivo: false,
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
  colorePrimario: "#37B34A",
  coloreSecondario: "#FFD54A",
  coloreTesto: "#3A3A3A",

  coloreCard: "rgba(255,255,255,0.80)",
  coloreCardBordo: "rgba(84,195,96,0.45)",

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
    image: "https://invitiwow.com/inviti/primo-anno-battesimo/preview.jpg?v=1",
    url: "https://invitiwow.com/inviti/davide-nicolo/"
  }
};