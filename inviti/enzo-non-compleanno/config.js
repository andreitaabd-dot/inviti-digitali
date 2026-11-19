
const INVITO_CONFIG = {

  /* =========================
     DATI EVENTO
  ========================= */

  tipoEvento: "compleanno",

  nomeFesteggiato: "Enzo",
  eta: "4 anni",

   titolo: "Il NON compleanno di Enzo",
  sottotitolo: "Il mio compleanno è il 2 gennaio... ma festeggiamo prima!",

  descrizione1: "volerò in Perù per festeggiare con tutta la mia famiglia! ❤️ Ma non potevo partire senza festeggiare anche con i miei amici della materna! ",
  descrizione2: "Preparati per il mio SUPER NON compleanno!",

  giorno: "22",
  mese: "Dicembre",
  anno: "2026",
  giornoSettimana: "Martedì",
  ora: "Quando siamo a scuola",

  testoFinale: "Vi aspetto per il mio NON compleanno! 💚💜 Sarà una festa piena di divertimento e super energia!",

  /* =========================
     LUOGO / MAPPA
  ========================= */

  luogoNome: "Baby Jungle",

  indirizzoMaps: "Baby Jungle, Torino, Italia",

  /* =========================
     WHATSAPP
     CONFERMA NON NECESSARIA
  ========================= */

  whatsappNumero: "",

  whatsappMessaggio: "",

  /* =========================
     SAVE THE DATE / CALENDARIO
  ========================= */

  calendario: {
    attivo: true,
    titolo: "Il NON compleanno di Enzo! 💚",
    descrizione: "Festeggiamo insieme il NON compleanno di Enzo alla materna! Una festa speciale a tema Hulk!",
    inizio: "20261222",
    fine: "20261223"
  },

  /* =========================
     NOTA SPECIALE PER I GIALLI
     EX DRESS CODE
  ========================= */

  dresscode: {
    attivo: true,
    titolo: "💛 Per i miei amici Gialli!",

    //testo: "Quest'anno è stato bellissimo giocare, ridere e crescere insieme a voi! 💛 Anche se presto Leoni e Zebre non saranno più tutti nella stessa scuola, resterete sempre i miei amici! ❤️ Ci vediamo al parco per giocare ancora insieme! Mamma e papà saranno felici di organizzarci, quindi scriveteci quando volete! 🥰 Un abbraccio, Enzo 💛",

    immagine: "dresscode.jpg"
  },

  /* =========================
     FOTO / GALLERIA
  ========================= */

  foto: {
    attivo: false,
    titolo: "",
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

    musica: "musica.mp3"
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
    testoBottoneApri: "💚 Apri il tuo invito!",

    decorazioneTop: {
      attiva: true,
      immagine: "personaggio.png",
      width: "180px",
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
      attivo: false,
      testo: "",
      icona: "icons/whatsapp.png"
    },

    maps: {
      attivo: true,
      testo: "Dove festeggiamo?",
      icona: "icons/maps.png"
    },

    calendario: {
      attivo: true,
      testo: "Salva la data",
      icona: "icons/calendario.png"
    },

    dresscode: {
      attivo: true,
      testo: "💛 Per i miei amici Gialli",
      icona: "icons/dresscode.png"
    },

    foto: {
      attivo: false,
      testo: "",
      icona: "icons/foto.png"
    }
  },

  /* =========================
     TEMA HULK
  ========================= */

  tema: {
    colorePrimario: "#65D800",
    coloreSecondario: "#7513A8",
    coloreTesto: "#263418",

    coloreCard: "rgba(255,255,255,0.90)",
    coloreCardBordo: "rgba(117,19,168,0.75)",

    fontTitolo: "'Montserrat', sans-serif",
    fontTesto: "'Quicksand', sans-serif",

    grandezzaTitolo: "36px",
    grandezzaNome: "40px"
  },

  /* =========================
     WHATSAPP PREVIEW / META
  ========================= */

  meta: {
    title: "💚 Il NON compleanno di Enzo!",

    description: "Quest'anno festeggio prima di partire per il Perù! Una festa SUPER speciale con i miei amici Gialli! 💚💜",

    image: "https://invitiwow.com/inviti/enzo_non_compleanno/preview.jpg?v=1",

    url: "https://invitiwow.com/inviti/enzo_non_compleanno/"
  }

};
