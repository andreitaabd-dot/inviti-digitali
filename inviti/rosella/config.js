const INVITO_CONFIG = {
  /* =========================
     DATI EVENTO
  ========================= */

tipoEvento: "compleanno",

nomeFesteggiato: "Rosella",
eta: "",

titolo: "",
sottotitolo: "¡Acompáñame a celebrar!",

descrizione1: "Me complace informarte que has sido seleccionado",
descrizione2: "para acompañarme a celebrar mi cumpleaños",

giorno: "21",
mese: "Agosto",
anno: "2026",
giornoSettimana: "Viernes",
ora: "17:00",

testoFinale: "",

  /* =========================
     LUOGO / MAPPA
  ========================= */

   luogoNome: "Sala 1",
  indirizzoMaps: "3° piano - Corso Potenza 153A\nParcheggio al civico 155/A",
  mapsLink: "https://maps.app.goo.gl/JK1BJMpiEMe4W4926",

  /* =========================
     WHATSAPP
  ========================= */

  whatsappNumero: "393270441685",
  whatsappMessaggio: "¡Hola! Confirmo mi asistencia al cumpleaños de Rosella",

  /* =========================
     SAVE THE DATE / CALENDARIO
  ========================= */

 dresscode: {
  attivo: true,
  titolo: "Dress Code",
  testo: "",
  immagine: "dresscode.jpg"
},

/* =========================
   CONTO ALLA ROVESCIA
========================= */

contoRovescia: {
  attivo: true,
  data: "",
  titolo: "Manca poco",
  messaggioFine: "È arrivato il grande giorno!"
},

/* =========================
   FOTO / GALLERIA
========================= */

foto: {
  attivo: true,
  titolo: "Fotos de la fiesta",
  testo: "Sube aquí las fotos y los vídeos de la celebración",
  link: "https://photos.app.goo.gl/6Wd4hJZg6K7rrJBa7"
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

    musica: "music.mp3",

    brindis: "brindis.png"
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
      width: "100px",
      top: "1px",
      left: "50%"
    },

    envelope: {
      immagine: "envelope.png",
      width: "260px"
    }
  },

  /* =========================
     SAVE THE DATE / CALENDARIO
  ========================= */

  calendario: {
  attivo: true,
  titolo: "Cumpleaños de Rosella",
  descrizione: "Invitación digital - Confirma tu asistencia",
  inizio: "20260821T170000",
  fine: "20260821T210000"
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

  /*effetti: [ "sparkles"],*/

  /* =========================
     PULSANTI
     se attivo false non compare
  ========================= */

pulsanti: {
  whatsapp: {
    attivo: true,
    testo: "Confirmar",
    icona: "icons/whatsapp.png"
  },

  maps: {
    attivo: true,
    testo: "Mapa",
    icona: "icons/maps.png"
  },

  calendario: {
    attivo: true,
    testo: "Guardar fecha",
    icona: "icons/calendario.png"
  },

  dresscode: {
    attivo: true,
    testo: "Dress Code",
    icona: "icons/dresscode.png"
  },

  foto: {
    attivo: true,
    testo: "Fotos",
    icona: "icons/foto.png"
  }
},

  /* =========================
     TEMA GRAFICO
  ========================= */

  tema: {
  colorePrimario: "#000000",
  coloreSecondario: "#5a5a5a",
  coloreTesto: "#111111",

  coloreCard: "rgba(255,255,255,0.90)",
  coloreCardBordo: "rgba(0,0,0,0.40)",

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
    image: "https://invitiwow.com/inviti/rosella/preview.jpg?v=1",
    url: "https://invitiwow.com/inviti/rosella/"
  }
};