
const INVITO_CONFIG = {
  meta: {
    titolo: "Alice e Salvatore | Matrimonio",
    descrizione: "Il nostro matrimonio - 26 giugno 2027",
    preview: "assets/preview.jpg",

    title: "Alice e Salvatore - Ci sposiamo! 🥂",
    description: "Apri il nostro invito e conferma la tua presenza!",
    image: "https://invitiwow.com/inviti/alice-salvatore/preview.jpg?v=1",
    url: "https://invitiwow.com/inviti/alice-salvatore/"
  },

  sposi: {
    nomi: "Alice e Salvatore",
    dataISO: "2027-06-26",
    dataTesto: "Sabato 26 giugno 2027",
    ora: "16:00",
    titolo: "Il nostro matrimonio"
  },

  immagini: {
    copertina: "assets/coppia.png",
    bambino1: "assets/alice-piccola.jpg",
    bambino2: "assets/salvatore-piccolo.jpg",
    cerimonia: "assets/cerimonia.jpg",
    ricevimento: "assets/ricevimento.jpg",
    sfondoAcquerello: "assets/sfondo-acquerello.png"
  },

  introduzione: {
    titolo: "Sì, ci sposiamo!",
    paragrafi: [
      "Ci sono storie che meritano di essere festeggiate con le persone del cuore. La nostra è una di queste.",

      "Con gioia vi invitiamo a condividere il giorno in cui il nostro amore diventerà una promessa per la vita.",

      "Per festeggiare abbiamo scelto un tema che ci rappresenta: colorato, allegro e frizzante... lo Spritz! 🍹",

      "Sarà una giornata piena di sorrisi, brindisi e sfumature vivaci. Se vi fa piacere, lasciatevi ispirare dai colori dell'invito per il vostro abbigliamento: basterà anche un piccolo dettaglio per rendere ancora più speciale l'atmosfera delle nostre nozze.",

      "Qui sotto troverete tutti i dettagli.",

      "Vi aspettiamo per brindare all'amore! 🥂"
    ]
  },

  brindisi: {
    attivo: true,
    casualeAiBordi: false,

    caliceSinistro: "assets/spritz-sinistro.png",
    caliceDestro: "assets/spritz-destro.png",

    intervalloMin: 1000,
    intervalloMax: 2000,
    dimensione: 40,
    coppieContemporanee: 1,

    // Velocità del Cin Cin.
    // 1 = normale, 0.6 = più lento.
    velocita: 0.6,

    // Durata della pausa dopo il contatto dei bicchieri.
    pausaContattoMs: 900,

    // Decorazione del brindisi.
    decorazione: "spritz",
    immagineDecorazione: "assets/spritz-sinistro.png"
  },



transizione: {
    attiva: true,
    tipo: "dissolvenza",
    durataMs: 1200,
    colori: []
},



  cerimonia: {
    attivo: true,
    titolo: "Cerimonia &\nWedding Party",
    nome: "Monferrato Resort",
    data: "Sabato 26 giugno 2027",
    ora: "Ore 16:00",
    cerimonia: "assets/cerimonia.jpg",
    indirizzo: "Cascina Palau, 25 - Casale Popolo (AL)",
    mapsURL: "https://maps.app.goo.gl/kZGUuLNqMEcHwzjg8"
  },

  ricevimento: {
    attivo: false,
    titolo: "Wedding Party",
    nome: "",
    data: "",
    ora: "",
    indirizzo: "",
    mapsURL: ""
  },

  conferma: {
    titolo: "Conferma la partecipazione",
    scadenza: "",

    endpoint: "https://script.google.com/macros/s/AKfycbxNfJIKdJ1Q3ifxZzSxErBIDIPtX2YT7niSRwTUsYkwE9tEEk9BX9DLkUHNrTTRfgJA/exec",

    campi: {
      cognome: true,
      partecipanti: true,
      allergie: true,
      messaggio: true,
      canzone: true
    },

    testoInvia: "Invia conferma"
  },

  dressCode: {
    attivo: true,
    titolo: "Dress code",
    testo: ""
  },

  listaNozze: {
    attiva: true,
    titolo: "Lista nozze",

    testo: "Il regalo più grande sarà avervi con noi per brindare! 🥂 Ma se desiderate contribuire al nostro futuro (o alla nostra scorta personale di Spritz 🍹), potete farlo qui:",

    iban: "XXXXX",
    intestatari: "XXXXX"
  },

  musica: {
    attiva: true,
    file: "assets/musica.mp3",
    etichetta: "Attiva musica",

    // Secondo da cui inizia la riproduzione.
    inizioSecondi: 60,

    // Riproduzione ciclica.
    loop: true
  },

  tema: {
    avorio: "#fffdf9",
    testo: "#39283b",
    viola: "#56314e",
    arancio: "#d57d45",
    pesca: "#f1c9aa",
    lilla: "#d9c7df",
    rosa: "#e9c6c9",
    fontTitolo: "'Great Vibes', cursive",
    fontTesto: "'Montserrat', Arial, sans-serif"
  },

  decorazioni: {
    spritz: true,
    schizzi: true
  }
};
