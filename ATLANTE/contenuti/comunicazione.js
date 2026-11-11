
window.registraSezione("comunicazione", `
<section class="section" id="comunicazione" data-group="formazione">

<style>
#comunicazione {
  --cm-ink:#123650;
  --cm-muted:#536d7d;
  --cm-line:#dfebf0;
}
#comunicazione .cm-title {
  font-size:23px;
  color:var(--cm-ink);
  margin:36px 0 16px;
}
#comunicazione .cm-lead {
  color:var(--cm-muted);
  font-size:14px;
  line-height:1.85;
  margin:12px 0 22px;
}
#comunicazione .cm-hero {
  display:grid;
  grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);
  gap:23px;
  align-items:center;
  margin:18px 0 30px;
}
#comunicazione .cm-art {
  border-radius:22px;
  padding:28px 19px;
  text-align:center;
  background:linear-gradient(140deg,#102e52,#0a8998);
  color:white;
}
#comunicazione .cm-art-icon {
  font-size:62px;
  margin:12px auto;
}
#comunicazione .cm-art h4 {
  color:white;
  font-size:22px;
  margin:10px 0;
}
#comunicazione .cm-art p {
  font-size:13px;
  line-height:1.8;
  color:#e1f6f8;
}
#comunicazione .cm-art-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:8px;
  margin-top:20px;
}
#comunicazione .cm-art-grid div {
  background:#ffffff22;
  border:1px solid #ffffff42;
  border-radius:12px;
  padding:14px 5px;
  font-size:11px;
  color:white;
}
#comunicazione .cm-art-grid span {
  display:block;
  font-size:24px;
  margin-bottom:7px;
}
#comunicazione .cm-kicker {
  display:inline-block;
  background:#e4f6f2;
  border-radius:30px;
  padding:7px 12px;
  color:#087d86;
  font-size:11px;
  font-weight:800;
  letter-spacing:.04em;
}
#comunicazione .cm-two {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#comunicazione .cm-three {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:14px;
  margin:20px 0;
}
#comunicazione .cm-card {
  border:1px solid var(--cm-line);
  background:#f5f9fc;
  padding:21px;
  border-radius:17px;
  min-width:0;
}
#comunicazione .cm-card.blue {
  background:#edf7ff;
  border-color:#d0e5f7;
}
#comunicazione .cm-card.green {
  background:#eefaf4;
  border-color:#d1eadc;
}
#comunicazione .cm-card.gold {
  background:#fff8e9;
  border-color:#f0e1bc;
}
#comunicazione .cm-card.purple {
  background:#f6f0ff;
  border-color:#e6dafa;
}
#comunicazione .cm-card h4 {
  font-size:17px;
  color:#153953;
  margin:9px 0;
}
#comunicazione .cm-card p {
  color:var(--cm-muted);
  font-size:13px;
  line-height:1.85;
  margin:8px 0;
}
#comunicazione .cm-icon {
  display:block;
  font-size:30px;
  margin:0 0 9px;
}
#comunicazione .cm-note {
  background:#eaf8f5;
  color:#315d56;
  border-left:4px solid #1aab96;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  font-size:13px;
  line-height:1.85;
}
#comunicazione .cm-warning {
  background:#fff8e9;
  color:#745c31;
  border-left:4px solid #d5a545;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  font-size:13px;
  line-height:1.85;
}
#comunicazione .cm-flow {
  display:flex;
  align-items:stretch;
  gap:9px;
  margin:24px 0;
}
#comunicazione .cm-flow-item {
  flex:1;
  min-width:0;
  background:#eff8fa;
  border:1px solid #d8ebef;
  border-radius:14px;
  padding:16px 11px;
  text-align:center;
}
#comunicazione .cm-flow-item strong {
  display:block;
  font-size:14px;
  color:#164b67;
  margin-bottom:8px;
}
#comunicazione .cm-flow-item span {
  display:block;
  font-size:12px;
  color:#597482;
  line-height:1.65;
}
#comunicazione .cm-arrow {
  align-self:center;
  font-size:23px;
  color:#0f9aaa;
  font-weight:800;
}
#comunicazione .cm-script {
  border:1px solid #dbe9f0;
  background:#f8fbfd;
  border-radius:17px;
  padding:21px;
  margin:16px 0;
}
#comunicazione .cm-script h4 {
  font-size:17px;
  color:#163b55;
  margin:12px 0;
}
#comunicazione .cm-script blockquote {
  margin:12px 0;
  background:white;
  border-left:4px solid #13a2a4;
  border-radius:9px;
  padding:16px;
  font-size:14px;
  line-height:1.85;
  color:#375a6c;
}
#comunicazione .cm-script p {
  font-size:13px;
  color:#597283;
  line-height:1.8;
}
#comunicazione .cm-step {
  display:flex;
  align-items:flex-start;
  gap:14px;
  padding:17px 0;
  border-bottom:1px solid #e0eaf0;
}
#comunicazione .cm-step:last-child {
  border-bottom:none;
}
#comunicazione .cm-step-number {
  display:flex;
  align-items:center;
  justify-content:center;
  flex:0 0 37px;
  height:37px;
  border-radius:50%;
  background:#0c8497;
  color:white;
  font-weight:800;
}
#comunicazione .cm-step strong {
  color:#163b55;
  font-size:15px;
}
#comunicazione .cm-step p {
  margin:7px 0 0;
  font-size:13px;
  color:#536d7d;
  line-height:1.8;
}
#comunicazione .cm-bar {
  display:flex;
  height:24px;
  overflow:hidden;
  border-radius:30px;
  margin:20px 0 9px;
}
#comunicazione .cm-bar-70 {
  flex:70;
  background:#15a68b;
}
#comunicazione .cm-bar-20 {
  flex:20;
  background:#4195d1;
}
#comunicazione .cm-bar-10 {
  flex:10;
  background:#d6a146;
}
#comunicazione .cm-number {
  display:block;
  font-size:30px;
  font-weight:850;
  color:#0a8096;
  margin:10px 0;
}
#comunicazione .cm-table-wrap {
  overflow-x:auto;
  margin:20px 0;
  border:1px solid #dce8ef;
  border-radius:14px;
}
#comunicazione .cm-table {
  width:100%;
  min-width:570px;
  border-collapse:collapse;
}
#comunicazione .cm-table th {
  background:#123650;
  color:white;
  text-align:left;
  font-size:12px;
  padding:14px 12px;
}
#comunicazione .cm-table td {
  color:#3b5d70;
  padding:14px 12px;
  font-size:12px;
  line-height:1.7;
  border-bottom:1px solid #e2eaf0;
}
#comunicazione .cm-table tr:nth-child(even) td {
  background:#f4f8fb;
}
#comunicazione .cm-table tr:last-child td {
  border-bottom:0;
}
#comunicazione .cm-quiz {
  background:#f6f1ff;
  border:1px solid #e7daf9;
  border-radius:17px;
  padding:21px;
  margin:16px 0;
}
#comunicazione .cm-quiz h4 {
  font-size:17px;
  color:#263953;
  margin:10px 0;
}
#comunicazione .cm-quiz p {
  color:#5b657d;
  font-size:13px;
  line-height:1.8;
}
#comunicazione .cm-quiz details {
  background:white;
  padding:12px;
  border-radius:11px;
  margin-top:13px;
}
#comunicazione details summary {
  cursor:pointer;
  font-weight:750;
  color:#21475f;
}
#comunicazione details div {
  margin-top:10px;
  font-size:13px;
  color:#536d7d;
  line-height:1.8;
}
#comunicazione .cm-final {
  background:linear-gradient(135deg,#0e3556,#117f91);
  color:white;
  border-radius:18px;
  padding:25px;
  margin:25px 0;
}
#comunicazione .cm-final h4 {
  color:white;
  font-size:21px;
  margin:0 0 12px;
}
#comunicazione .cm-final p {
  color:#e1f5f7;
  line-height:1.85;
  font-size:14px;
}
@media(max-width:800px) {
  #comunicazione .cm-three {
    grid-template-columns:1fr;
  }
}
@media(max-width:700px) {
  #comunicazione .cm-hero,
  #comunicazione .cm-two {
    grid-template-columns:1fr;
  }
  #comunicazione .cm-flow {
    flex-direction:column;
  }
  #comunicazione .cm-arrow {
    transform:rotate(90deg);
  }
  #comunicazione .cm-title {
    font-size:21px;
  }
}
</style>

<!-- INTESTAZIONE -->

<div class="section-head">
  <span class="kicker">
    Capitolo 11 · Formazione Ambassador
  </span>
  <h2>Condivisione e comunicazione</h2>
  <p>
    Impara a parlare di Travel Advantage
    con naturalezza, creare interesse,
    proporre strumenti informativi
    e utilizzare social e chiamate a tre.
  </p>
</div>

<div class="section-body">

<!-- INTRODUZIONE -->

<div class="cm-hero">

  <div>
    <span class="cm-kicker">
      LA BASE DELLA CONDIVISIONE
    </span>

    <h3 class="cm-title">
      💬 Non convincere: crea una conversazione
    </h3>

    <p class="cm-lead">
      Nel metodo formativo
      <strong>The Travel Legends</strong>,
      la comunicazione è uno
      degli strumenti principali
      dell'attività Ambassador.
      <br><br>
      L'obiettivo non è convincere
      chiunque a iscriversi,
      ma capire se Travel Advantage
      possa essere interessante
      per una determinata persona.
      <br><br>
      Il principio è semplice:
      <strong>ascolta, fai domande,
      condividi informazioni pertinenti
      e rispetta la scelta dell'altra persona.</strong>
    </p>
  </div>

  <div class="cm-art">
    <div class="cm-art-icon">💬</div>
    <h4>Condividere, non inseguire</h4>
    <p>
      Una buona conversazione
      nasce dall'ascolto
      e dalla curiosità reciproca.
    </p>

    <div class="cm-art-grid">
      <div><span>👂</span>Ascolta</div>
      <div><span>❓</span>Domanda</div>
      <div><span>🤝</span>Condividi</div>
    </div>
  </div>

</div>

<!-- PRINCIPI -->

<h3 class="cm-title">
  🧭 1. I tre principi della comunicazione
</h3>

<div class="cm-three">

  <div class="cm-card blue">
    <span class="cm-icon">👂</span>
    <h4>Chi domanda comanda</h4>
    <p>
      È il principio formativo
      che invita a fare domande
      e ascoltare le risposte,
      invece di parlare
      continuamente del prodotto.
      <br><br>
      Le domande servono
      a comprendere,
      non a controllare
      la conversazione.
    </p>
  </div>

  <div class="cm-card green">
    <span class="cm-icon">🎥</span>
    <h4>Proponi uno strumento</h4>
    <p>
      Il primo messaggio
      non deve contenere
      un'intera presentazione.
      <br><br>
      Puoi proporre
      un video, un webinar,
      un Travel Party
      o una chiamata a tre
      per approfondire.
    </p>
  </div>

  <div class="cm-card gold">
    <span class="cm-icon">🦁</span>
    <h4>Cuore di leone, pelle d'agnello</h4>
    <p>
      Nel metodo del team
      questa espressione descrive
      fiducia in ciò che si propone,
      accompagnata da un tono
      calmo, gentile e rilassato.
      <br><br>
      Sicurezza senza arroganza
      e senza pressione.
    </p>
  </div>

</div>

<div class="cm-note">
  <strong>💡 Sorting: che cosa significa?</strong>
  <br>
  È il processo di capire
  quali persone siano realmente
  interessate a conoscere
  la piattaforma o l'attività.
  <br><br>
  Non tutti devono diventare clienti
  o Ambassador.
  <br><br>
  Un "no" è una risposta valida
  e va rispettata.
</div>

<!-- OBIETTIVO PRIMO CONTATTO -->

<h3 class="cm-title">
  🎯 2. Qual è il vero obiettivo del primo contatto?
</h3>

<div class="cm-flow">

  <div class="cm-flow-item">
    <strong>👋 Saluto</strong>
    <span>
      Apri la conversazione
      in modo personale.
    </span>
  </div>

  <div class="cm-arrow">→</div>

  <div class="cm-flow-item">
    <strong>❓ Interesse</strong>
    <span>
      Scopri se la persona
      ama viaggiare.
    </span>
  </div>

  <div class="cm-arrow">→</div>

  <div class="cm-flow-item">
    <strong>💡 Curiosità</strong>
    <span>
      Presenta brevemente
      ciò che potrebbe interessarla.
    </span>
  </div>

  <div class="cm-arrow">→</div>

  <div class="cm-flow-item">
    <strong>🎥 Approfondimento</strong>
    <span>
      Proponi uno strumento
      informativo, se desiderato.
    </span>
  </div>

</div>

<div class="cm-two">

  <div class="cm-card green">
    <span class="cm-icon">✅</span>
    <h4>Che cosa fare</h4>
    <p>
      ✅ Fare una domanda semplice.
      <br>
      ✅ Ascoltare la risposta.
      <br>
      ✅ Capire l'interesse reale.
      <br>
      ✅ Chiedere il permesso
      prima di inviare informazioni.
      <br>
      ✅ Dare risposte sincere.
    </p>
  </div>

  <div class="cm-card gold">
    <span class="cm-icon">🚫</span>
    <h4>Che cosa evitare</h4>
    <p>
      ❌ Inviare messaggi identici a tutti.
      <br>
      ❌ Insistere dopo un rifiuto.
      <br>
      ❌ Inviare link non richiesti.
      <br>
      ❌ Fare promesse di guadagno.
      <br>
      ❌ Nascondere informazioni
      quando vengono richieste.
    </p>
  </div>

</div>

<!-- TRE DOMANDE -->

<h3 class="cm-title">
  ❓ 3. Le tre domande d'ingaggio
</h3>

<p class="cm-lead">
  Il materiale formativo di Paolo
  propone una sequenza
  di tre domande per capire
  l'interesse della persona.
  <br><br>
  Possono essere utilizzate
  come traccia, senza trasformarle
  in un interrogatorio.
</p>

<div class="cm-card">

  <div class="cm-step">
    <div class="cm-step-number">1</div>
    <div>
      <strong>Ti piace viaggiare?</strong>
      <p>
        È una domanda semplice
        per iniziare a parlare
        di un interesse comune.
      </p>
    </div>
  </div>

  <div class="cm-step">
    <div class="cm-step-number">2</div>
    <div>
      <strong>
        Ti piacerebbe viaggiare risparmiando?
      </strong>
      <p>
        Serve a capire
        se la persona è interessata
        a confrontare alternative
        per i propri viaggi.
      </p>
    </div>
  </div>

  <div class="cm-step">
    <div class="cm-step-number">3</div>
    <div>
      <strong>
        E se ci fosse un modo
        per viaggiare, risparmiare
        e avere anche un'opportunità
        di guadagno, ti interesserebbe
        conoscerlo?
      </strong>
      <p>
        Introduce la possibilità
        di approfondire anche
        l'attività Ambassador,
        senza promettere
        risultati economici.
      </p>
    </div>
  </div>

</div>

<div class="cm-warning">
  <strong>⚠️ Non devi ottenere tre "sì" a tutti i costi.</strong>
  <br>
  La sequenza è una tecnica
  di conversazione, non una regola.
  <br><br>
  Se una persona è interessata
  soltanto ai viaggi,
  non è necessario proporle
  l'opportunità di business.
  <br><br>
  Se chiede direttamente
  prezzi o informazioni,
  rispondi in modo trasparente
  invece di rimandare
  obbligatoriamente a un video.
</div>

<!-- INVITO -->

<h3 class="cm-title">
  🎥 4. La formula d'invito "Go Pro"
</h3>

<p class="cm-lead">
  Una volta capito
  che la persona è interessata,
  puoi proporre un approfondimento
  senza inviarlo automaticamente.
</p>

<div class="cm-script">
  <span class="cm-kicker">FORMULA D'INVITO</span>

  <h4>La domanda proposta dal metodo</h4>

  <blockquote>
    "Se io ti mandassi un breve video
    oppure ti invitassi
    a una presentazione
    di 20–30 minuti
    che spiega come funziona,
    tu lo guarderesti
    o ti collegheresti?"
  </blockquote>

  <p>
    In questo modo
    lasci alla persona
    la possibilità di decidere
    se ricevere informazioni.
  </p>
</div>

<div class="cm-two">

  <div class="cm-card green">
    <h4>✅ Se risponde sì</h4>
    <p>
      Chiedi quale formato preferisce:
      video, webinar o chiamata.
      <br><br>
      Condividi il materiale
      concordato e stabilisci,
      se desiderato,
      quando risentirvi.
    </p>
  </div>

  <div class="cm-card gold">
    <h4>🤝 Se risponde no</h4>
    <p>
      Rispetta la risposta.
      <br><br>
      Puoi semplicemente dire:
      "Nessun problema,
      grazie comunque!"
      <br><br>
      Non occorre cercare
      di convincerla.
    </p>
  </div>

</div>

<!-- TIPI DI INTERESSE -->

<h3 class="cm-title">
  ✈️ 5. Capire che cosa interessa davvero
</h3>

<div class="cm-two">

  <div class="cm-card blue">
    <span class="cm-icon">🏖️</span>
    <h4>Interesse per i viaggi</h4>
    <p>
      La persona vorrebbe
      viaggiare, confrontare prezzi
      oppure conoscere
      le condizioni della piattaforma.
      <br><br>
      Puoi approfondire
      le membership
      o proporre un Guest Pass
      quando appropriato.
    </p>
  </div>

  <div class="cm-card purple">
    <span class="cm-icon">💼</span>
    <h4>Interesse per l'attività</h4>
    <p>
      La persona vuole conoscere
      l'opportunità Ambassador.
      <br><br>
      Puoi proporre
      una presentazione
      sul funzionamento dell'attività,
      spiegando correttamente
      costi, impegno e condizioni.
    </p>
  </div>

</div>

<div class="cm-note">
  <strong>💡 Non tutte le persone cercano la stessa cosa.</strong>
  <br>
  Una persona che ama viaggiare
  non è necessariamente interessata
  a sviluppare una rete commerciale.
  <br><br>
  La conversazione deve seguire
  il suo interesse,
  non un percorso obbligato.
</div>

<!-- SCRIPT PRATICI -->

<h3 class="cm-title">
  💬 6. Esempi di primi messaggi
</h3>

<p class="cm-lead">
  I seguenti messaggi sono
  esempi pratici adattati
  ai principi del team.
  Non sono script ufficiali
  da ripetere parola per parola.
</p>

<div class="cm-script">
  <span class="cm-kicker">ESEMPIO 01 · AMICO O CONOSCENTE</span>
  <h4>Una conversazione semplice</h4>

  <blockquote>
    "Ciao! 😊
    Ti volevo chiedere una cosa:
    a te piace viaggiare?
    <br><br>
    Sto conoscendo
    una piattaforma di viaggi
    e mi è venuto in mente
    di chiedertelo."
  </blockquote>

  <p>
    Obiettivo:
    capire se il tema interessa,
    senza inviare subito
    tutte le informazioni.
  </p>
</div>

<div class="cm-script">
  <span class="cm-kicker">ESEMPIO 02 · PERSONA INTERESSATA AI VIAGGI</span>
  <h4>Proporre un approfondimento</h4>

  <blockquote>
    "Interessante! 😊
    Io utilizzo una piattaforma
    che permette di cercare
    hotel e altri servizi di viaggio
    con tariffe riservate.
    <br><br>
    Se ti va,
    posso mostrarti
    come funziona."
  </blockquote>

  <p>
    Obiettivo:
    proporre informazioni
    pertinenti alla persona.
  </p>
</div>

<div class="cm-script">
  <span class="cm-kicker">ESEMPIO 03 · INTERESSE PER UN'ENTRATA EXTRA</span>
  <h4>Presentare l'opportunità</h4>

  <blockquote>
    "Ciao! 😊
    Ho visto che ti interessano
    le opportunità
    di attività da casa.
    <br><br>
    Sto sviluppando
    un'attività indipendente
    collegata al mondo
    dei viaggi.
    <br><br>
    Se è un settore
    che ti incuriosisce,
    ti posso mandare
    una presentazione
    per capire meglio
    come funziona."
  </blockquote>

  <p>
    Obiettivo:
    dichiarare la natura
    dell'attività senza fare
    promesse di reddito.
  </p>
</div>

<div class="cm-script">
  <span class="cm-kicker">ESEMPIO 04 · CONTATTO DA SOCIAL</span>
  <h4>Partire da un'interazione reale</h4>

  <blockquote>
    "Ciao! 😊
    Ho visto il tuo contenuto
    sul viaggio a [destinazione].
    Mi ha colpito molto!
    <br><br>
    Ti piace organizzare
    spesso weekend e vacanze?"
  </blockquote>

  <p>
    Da utilizzare soltanto
    se hai realmente visto
    quel contenuto.
    <br><br>
    I complimenti devono
    essere sinceri
    e non un pretesto artificiale
    per proporre il business.
  </p>
</div>

<!-- CHIAMATA A TRE -->

<h3 class="cm-title">
  📞 7. Le chiamate a tre: 3-Way Call
</h3>

<p class="cm-lead">
  La 3-Way Call è una conversazione
  a cui partecipano
  tre persone:
  il nuovo contatto,
  l'Ambassador e uno Sponsor
  o membro più esperto.
  <br><br>
  È uno strumento
  di affiancamento
  particolarmente utile
  durante i primi appuntamenti.
</p>

<div class="cm-three">

  <div class="cm-card blue">
    <span class="cm-icon">🤝</span>
    <h4>Tu</h4>
    <p>
      Conosci la persona,
      hai avviato la conversazione
      e puoi spiegare
      quali sono i suoi interessi.
    </p>
  </div>

  <div class="cm-card green">
    <span class="cm-icon">🎓</span>
    <h4>Lo Sponsor</h4>
    <p>
      Conosce meglio
      il funzionamento del servizio
      e può aiutare a chiarire
      domande specifiche.
    </p>
  </div>

  <div class="cm-card gold">
    <span class="cm-icon">👤</span>
    <h4>Il contatto</h4>
    <p>
      Può fare domande,
      approfondire
      e decidere liberamente
      se il servizio o l'attività
      sono adatti alle sue esigenze.
    </p>
  </div>

</div>

<h3 class="cm-title">
  🤝 Il triangolo della fiducia
</h3>

<div class="cm-flow">

  <div class="cm-flow-item">
    <strong>👤 Contatto</strong>
    <span>
      È interessato
      e desidera informazioni.
    </span>
  </div>

  <div class="cm-arrow">↔</div>

  <div class="cm-flow-item">
    <strong>🤝 Ambassador</strong>
    <span>
      Presenta le persone
      e facilita il dialogo.
    </span>
  </div>

  <div class="cm-arrow">↔</div>

  <div class="cm-flow-item">
    <strong>🎓 Sponsor</strong>
    <span>
      Condivide esperienza
      e risponde alle domande.
    </span>
  </div>

</div>

<div class="cm-script">
  <span class="cm-kicker">PRESENTAZIONE DELLO SPONSOR</span>
  <h4>Come introdurre una chiamata a tre</h4>

  <blockquote>
    "Ciao [Nome], ti presento
    [Nome Sponsor].
    <br><br>
    È una persona del nostro team
    che conosce bene
    Travel Advantage
    e può aiutarci
    a chiarire le tue domande.
    <br><br>
    Possiamo dedicare
    qualche minuto
    a capire insieme
    quello che ti interessa."
  </blockquote>

  <p>
    È preferibile utilizzare
    descrizioni vere
    dell'esperienza dello Sponsor,
    evitando risultati inventati
    o frasi che creino
    pressione sulla persona.
  </p>
</div>

<h3 class="cm-title">
  📝 Come comportarti durante la chiamata
</h3>

<div class="cm-card">

  <div class="cm-step">
    <div class="cm-step-number">1</div>
    <div>
      <strong>Prima della chiamata</strong>
      <p>
        Spiega al contatto
        chi parteciperà,
        quale argomento
        verrà approfondito
        e chiedi se è d'accordo.
      </p>
    </div>
  </div>

  <div class="cm-step">
    <div class="cm-step-number">2</div>
    <div>
      <strong>Presenta le persone</strong>
      <p>
        Fai una breve introduzione
        e condividi con lo Sponsor
        il tema principale
        della conversazione.
      </p>
    </div>
  </div>

  <div class="cm-step">
    <div class="cm-step-number">3</div>
    <div>
      <strong>Lascia spazio all'esperto</strong>
      <p>
        Nel metodo del team
        si consiglia di ascoltare
        e prendere appunti,
        evitando di interrompere
        continuamente lo Sponsor.
      </p>
    </div>
  </div>

  <div class="cm-step">
    <div class="cm-step-number">4</div>
    <div>
      <strong>Concludi senza pressione</strong>
      <p>
        Chiedi se il contatto
        ha altre domande
        e se desidera
        un ulteriore approfondimento.
      </p>
    </div>
  </div>

</div>

<div class="cm-warning">
  <strong>⚠️ Lo Sponsor non deve essere usato come leva di pressione.</strong>
  <br>
  Evita frasi come
  "ha un'agenda pienissima"
  oppure "ho ottenuto
  un appuntamento eccezionale"
  se non corrispondono alla realtà.
  <br><br>
  L'autorevolezza viene
  dalla competenza dimostrata,
  non dall'urgenza artificiale.
</div>

<!-- SOCIAL -->

<h3 class="cm-title">
  📱 8. Come comunicare sui social
</h3>

<p class="cm-lead">
  Il metodo del team
  suggerisce una suddivisione
  dei contenuti chiamata
  <strong>Content Mix 70 / 20 / 10</strong>.
  <br><br>
  È una proporzione orientativa
  per non trasformare
  il proprio profilo
  in una sequenza continua
  di offerte commerciali.
</p>

<div class="cm-bar">
  <div class="cm-bar-70"></div>
  <div class="cm-bar-20"></div>
  <div class="cm-bar-10"></div>
</div>

<div class="cm-three">

  <div class="cm-card green">
    <span class="cm-number">70%</span>
    <h4>🌍 Valore e ispirazione</h4>
    <p>
      Mete da scoprire,
      consigli di viaggio,
      idee weekend,
      esperienze personali
      e contenuti utili.
      <br><br>
      L'obiettivo è offrire
      qualcosa di interessante
      anche a chi non diventerà cliente.
    </p>
  </div>

  <div class="cm-card blue">
    <span class="cm-number">20%</span>
    <h4>🤝 Community e connessione</h4>
    <p>
      Dietro le quinte,
      formazione,
      eventi,
      esperienze nella community
      e il proprio percorso.
      <br><br>
      L'obiettivo è mostrare
      il lato umano
      dell'attività.
    </p>
  </div>

  <div class="cm-card gold">
    <span class="cm-number">10%</span>
    <h4>💼 Business e inviti</h4>
    <p>
      Presentazioni,
      opportunità Ambassador,
      spiegazioni sui servizi
      e inviti a informarsi.
      <br><br>
      L'obiettivo è offrire
      una possibilità
      a chi desidera approfondire.
    </p>
  </div>

</div>

<div class="cm-note">
  <strong>🧮 Esempio su 10 contenuti</strong>
  <br>
  7 contenuti di viaggio e valore.
  <br>
  2 contenuti personali o di community.
  <br>
  1 contenuto dedicato al business.
  <br><br>
  È una guida editoriale del team,
  non una regola obbligatoria
  della piattaforma social.
</div>

<!-- PERSONAL BRAND -->

<h3 class="cm-title">
  🌱 9. Le tre C del Personal Brand
</h3>

<div class="cm-three">

  <div class="cm-card purple">
    <span class="cm-icon">🌱</span>
    <h4>Change</h4>
    <p>
      Raccontare
      quello che stai imparando
      e come cambia
      il tuo approccio
      ai viaggi o all'attività.
    </p>
  </div>

  <div class="cm-card blue">
    <span class="cm-icon">📚</span>
    <h4>Commitment</h4>
    <p>
      Mostrare impegno:
      formazione, studio,
      partecipazione agli eventi
      e costruzione
      di nuove competenze.
    </p>
  </div>

  <div class="cm-card green">
    <span class="cm-icon">📅</span>
    <h4>Consistency</h4>
    <p>
      Comunicare con costanza,
      mantenendo uno stile
      riconoscibile e sostenibile,
      senza dover pubblicare
      continuamente.
    </p>
  </div>

</div>

<div class="cm-warning">
  <strong>📌 Mostra esperienze reali.</strong>
  <br>
  Non presentare come tuoi
  viaggi, risultati economici
  o testimonianze
  che non ti appartengono.
  <br><br>
  Se utilizzi esempi
  di altre persone,
  chiariscine il contesto
  e rispetta il loro consenso.
</div>

<!-- DM -->

<h3 class="cm-title">
  💌 10. I messaggi privati sui social
</h3>

<p class="cm-lead">
  Nei DM di Instagram,
  TikTok e altre piattaforme
  è importante instaurare
  una conversazione autentica
  prima di proporre materiale
  informativo.
</p>

<div class="cm-two">

  <div class="cm-card green">
    <span class="cm-icon">✅</span>
    <h4>Buone pratiche</h4>
    <p>
      ✅ Interagisci con contenuti reali.
      <br>
      ✅ Fai domande pertinenti.
      <br>
      ✅ Personalizza il messaggio.
      <br>
      ✅ Chiedi il consenso
      prima di mandare un link.
      <br>
      ✅ Rispetta chi non è interessato.
    </p>
  </div>

  <div class="cm-card gold">
    <span class="cm-icon">🚫</span>
    <h4>Comportamenti da evitare</h4>
    <p>
      ❌ Link inviati a freddo.
      <br>
      ❌ Copia e incolla indiscriminato.
      <br>
      ❌ Complimenti finti.
      <br>
      ❌ Messaggi ripetuti
      dopo un rifiuto.
      <br>
      ❌ Promesse di guadagni
      o vantaggi non verificati.
    </p>
  </div>

</div>

<div class="cm-script">
  <span class="cm-kicker">ESEMPIO DM</span>
  <h4>Chiedere il permesso prima di inviare</h4>

  <blockquote>
    "Se ti interessa,
    posso mandarti
    una breve presentazione
    che spiega come funziona
    Travel Advantage.
    <br><br>
    Ti andrebbe di guardarla?"
  </blockquote>
</div>

<!-- APPROCCIO PER CANALE -->

<h3 class="cm-title">
  📲 11. Quale canale utilizzare?
</h3>

<div class="cm-table-wrap">
  <table class="cm-table">
    <thead>
      <tr>
        <th>Canale</th>
        <th>Come utilizzarlo</th>
        <th>Cosa evitare</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>WhatsApp</td>
        <td>
          Conversazioni personali,
          appuntamenti e follow-up
          concordati.
        </td>
        <td>
          Messaggi promozionali
          ripetitivi o non richiesti.
        </td>
      </tr>
      <tr>
        <td>Instagram</td>
        <td>
          Storie, contenuti utili,
          esperienze e dialoghi
          con persone interessate.
        </td>
        <td>
          DM commerciali inviati
          in massa.
        </td>
      </tr>
      <tr>
        <td>TikTok</td>
        <td>
          Video su mete,
          consigli e curiosità
          legate ai viaggi.
        </td>
        <td>
          Contenuti basati
          su promesse economiche
          non dimostrate.
        </td>
      </tr>
      <tr>
        <td>Webinar</td>
        <td>
          Presentazioni approfondite
          per persone che desiderano
          maggiori informazioni.
        </td>
        <td>
          Invitare persone
          senza spiegare
          l'argomento dell'incontro.
        </td>
      </tr>
      <tr>
        <td>Travel Party</td>
        <td>
          Incontri dedicati
          alla presentazione
          della piattaforma
          e della community.
        </td>
        <td>
          Creare pressioni
          per iscrizioni immediate.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- SITUAZIONI -->

<h3 class="cm-title">
  🗣️ 12. Situazioni frequenti nella conversazione
</h3>

<details>
  <summary>
    ❓ "Quanto costa?"
  </summary>
  <div>
    Rispondi con informazioni corrette
    sui piani disponibili
    oppure chiarisci quale servizio
    desidera conoscere.
    <br><br>
    Se non conosci un dettaglio,
    controllalo prima di rispondere.
    Non è necessario
    nascondere il prezzo
    per ottenere un appuntamento.
  </div>
</details>

<details>
  <summary>
    💼 "È network marketing?"
  </summary>
  <div>
    Sì, MWR Life propone
    un'attività indipendente
    che comprende
    la promozione delle membership
    e lo sviluppo di una rete.
    <br><br>
    Per comprendere i compensi
    bisogna esaminare
    il piano ufficiale
    e i relativi requisiti.
  </div>
</details>

<details>
  <summary>
    ⏰ "Non ho tempo."
  </summary>
  <div>
    Rispetta la situazione.
    <br><br>
    Puoi chiedere se preferisce
    ricevere informazioni
    in un altro momento,
    ma senza insistere.
  </div>
</details>

<details>
  <summary>
    🤔 "Non so se fa per me."
  </summary>
  <div>
    Puoi chiedere
    quale aspetto la rende incerta
    e offrire le informazioni
    che mancano.
    <br><br>
    La decisione finale
    spetta alla persona.
  </div>
</details>

<details>
  <summary>
    🚫 "Non mi interessa."
  </summary>
  <div>
    Ringrazia e chiudi
    la conversazione
    in modo cordiale.
    <br><br>
    Non inserire
    ulteriori messaggi promozionali
    senza un nuovo interesse
    espresso dalla persona.
  </div>
</details>


<!-- SIMULAZIONE PRATICA COMPLETA -->

<h3 class="cm-title">
  🎭 Simulazione pratica: dal primo invito alla chiamata a tre
</h3>

<p class="cm-lead">
  Vediamo una conversazione reale simulata
  tra un'Ambassador e una persona conosciuta.
  <br><br>
  L'obiettivo è imparare ad aprire il dialogo,
  proporre una presentazione, concordare un
  follow-up e coinvolgere lo Sponsor
  quando la persona desidera approfondire.
</p>

<div class="cm-note">
  <strong>🎯 Obiettivo dell'esercitazione</strong>
  <br>
  Non memorizzare frasi perfette,
  ma imparare a gestire la conversazione
  con naturalezza, ascolto e trasparenza.
</div>

<h3 class="cm-title">
  📞 Fase 1 – Il primo contatto
</h3>

<div class="cm-script">
  <span class="cm-kicker">SCENARIO 1 · PRIMA CHIAMATA</span>
  <h4>Aprire la conversazione</h4>

  <p><strong>👩 Ambassador:</strong></p>
  <blockquote>
    "Ciao! Sai che ho conosciuto
    una piattaforma di viaggi
    davvero interessante
    e ho pensato proprio a te?"
  </blockquote>

  <p><strong>👤 Contatto:</strong></p>
  <blockquote>
    "Davvero? È tipo Booking
    o Tripadvisor?
    Di che cosa si tratta?"
  </blockquote>

  <p><strong>👩 Ambassador:</strong></p>
  <blockquote>
    "È una piattaforma che permette
    di accedere a tariffe riservate
    su hotel e altri servizi di viaggio.
    <br><br>
    Mi ha incuriosita perché
    in alcune prenotazioni
    si possono trovare
    prezzi convenienti.
    <br><br>
    Ti piacerebbe saperne di più?"
  </blockquote>
</div>

<div class="cm-note">
  <strong>💡 Cosa impariamo?</strong>
  <br>
  Parti da un interesse comune
  e spiega brevemente il beneficio.
  <br><br>
  Evita di promettere che ogni viaggio
  costerà necessariamente meno:
  il risparmio dipende dalla prenotazione
  e dalle condizioni dell'offerta.
</div>

<h3 class="cm-title">
  🎥 Fase 2 – Proporre il video
</h3>

<div class="cm-script">
  <span class="cm-kicker">SCENARIO 2 · INTERESSE INIZIALE</span>
  <h4>La formula d'invito</h4>

  <p><strong>👤 Contatto:</strong></p>
  <blockquote>
    "Sembra interessante!
    Ma come funziona?
    Bisogna pagare un abbonamento?"
  </blockquote>

  <p><strong>👩 Ambassador:</strong></p>
  <blockquote>
    "Sì, ci sono diversi tipi
    di abbonamento, con servizi
    e costi differenti.
    <br><br>
    Per mostrarti tutto
    in modo più chiaro
    ho un breve video
    che spiega la piattaforma.
    <br><br>
    Ti andrebbe di guardarlo?"
  </blockquote>

  <p><strong>👤 Contatto:</strong></p>
  <blockquote>
    "Sì, mandamelo pure!
    Quanto dura?"
  </blockquote>

  <p><strong>👩 Ambassador:</strong></p>
  <blockquote>
    "In realtà sono due video
    di circa 10 minuti ciascuno:
    uno spiega la parte viaggi
    e l'altro l'opportunità di business.
    <br><br>
    Se preferisci puoi guardare
    soltanto quello che ti interessa.
    <br><br>
    Che ne dici se ci sentiamo
    martedì alle 10 oppure
    mercoledì alle 18,
    così mi racconti
    cosa ne pensi?"
  </blockquote>

  <p><strong>👤 Contatto:</strong></p>
  <blockquote>
    "Va bene martedì alle 10!
    Mandami i link su WhatsApp."
  </blockquote>
</div>

<div class="cm-card green">
  <span class="cm-icon">✅</span>
  <h4>Tre cose fatte bene</h4>
  <p>
    <strong>1. Hai proposto uno strumento:</strong>
    il video permette alla persona
    di approfondire con calma.
    <br><br>
    <strong>2. Hai indicato la durata:</strong>
    la persona sa quanto tempo occorre.
    <br><br>
    <strong>3. Hai concordato un follow-up:</strong>
    proponendo due orari concreti
    senza imporre un appuntamento.
  </p>
</div>

<div class="cm-warning">
  <strong>📌 Trasparenza sui costi</strong>
  <br>
  Il video è uno strumento utile,
  ma non deve essere utilizzato
  per evitare domande dirette.
  <br><br>
  Se una persona desidera conoscere
  subito il prezzo della membership,
  è corretto comunicarlo
  e poi proporre un approfondimento.
</div>

<h3 class="cm-title">
  📩 Fase 3 – Il promemoria prima dell'appuntamento
</h3>

<p class="cm-lead">
  L'appuntamento è fissato
  per martedì alle 10.
  <br><br>
  Se concordato,
  puoi inviare un breve promemoria
  circa 15 minuti prima.
</p>

<div class="cm-script">
  <span class="cm-kicker">MESSAGGIO WHATSAPP · ORE 09:45</span>

  <h4>Promemoria amichevole</h4>

  <blockquote>
    "Ciao! 👋
    Confermi che ci sentiamo alle 10?
    <br><br>
    Sei riuscito a guardare i video?
    Così possiamo concentrarci
    sulle cose che ti interessano
    e sulle tue domande.
    <br><br>
    A tra poco! 😊"
  </blockquote>
</div>

<div class="cm-two">

  <div class="cm-card green">
    <span class="cm-icon">✅</span>
    <h4>Scenario A – Ha visto i video</h4>

    <p>
      La persona conferma
      di averli guardati.
      <br><br>
      Puoi chiamare all'orario concordato
      e iniziare chiedendo
      quale aspetto le sia sembrato
      più interessante.
    </p>
  </div>

  <div class="cm-card gold">
    <span class="cm-icon">📅</span>
    <h4>Scenario B – Non li ha ancora visti</h4>

    <p>
      Non è necessario rimproverarla
      o insistere.
      <br><br>
      Puoi proporre di risentirvi
      quando avrà avuto il tempo
      di guardarli.
    </p>
  </div>

</div>

<div class="cm-script">
  <span class="cm-kicker">ESEMPIO · VIDEO NON ANCORA VISTI</span>

  <blockquote>
    "Nessun problema! 😊
    Guardali quando hai un momento.
    <br><br>
    Se ti fa comodo,
    possiamo risentirci
    domani oppure più avanti,
    quando avrai avuto tempo."
  </blockquote>
</div>

<h3 class="cm-title">
  💬 Fase 4 – Il follow-up dopo i video
</h3>

<div class="cm-script">
  <span class="cm-kicker">SCENARIO 3 · SECONDA CHIAMATA</span>
  <h4>Scoprire che cosa ha colpito la persona</h4>

  <p><strong>👩 Ambassador:</strong></p>
  <blockquote>
    "Ciao! 😊
    Allora, sei riuscito
    a vedere entrambi i video?
    <br><br>
    Quale parte ti è piaciuta di più?
    C'è qualcosa che vorresti
    approfondire?"
  </blockquote>

  <p><strong>👤 Contatto:</strong></p>
  <blockquote>
    "La parte sui risparmi
    degli hotel mi è piaciuta molto.
    <br><br>
    Però sui guadagni
    sono un po' scettico.
    Mi sembra troppo bello
    per essere vero."
  </blockquote>
</div>

<div class="cm-note">
  <strong>💡 La domanda utile</strong>
  <br>
  "Che cosa ti è piaciuto di più?"
  aiuta a individuare
  gli aspetti positivi percepiti.
  <br><br>
  È importante lasciare spazio
  anche a critiche, dubbi
  e aspetti che non convincono.
</div>

<h3 class="cm-title">
  🤝 Fase 5 – Rispondere allo scetticismo
</h3>

<div class="cm-script">
  <span class="cm-kicker">SCENARIO 4 · OBIETTIVI E DUBBI</span>
  <h4>Raccontare la propria esperienza</h4>

  <p><strong>👩 Ambassador:</strong></p>
  <blockquote>
    "Ti capisco,
    perché anche io ero scettica
    quando ho conosciuto
    questa piattaforma. 😊
    <br><br>
    Infatti l'ho utilizzata
    personalmente per mesi,
    prima di iniziare
    a sviluppare la parte business.
    <br><br>
    Se non avessi provato
    il servizio in prima persona,
    non mi sentirei
    di proporlo ad altre persone.
    <br><br>
    Quando qualcosa ci piace,
    spesso viene spontaneo
    condividerlo."
  </blockquote>

  <p><strong>👤 Contatto:</strong></p>
  <blockquote>
    "Detta così ha più senso!
    <br><br>
    Mi rassicura sapere
    che tu l'abbia utilizzata
    personalmente.
    <br><br>
    Ma se volessi capire
    come iniziare,
    che cosa dovrei fare?"
  </blockquote>
</div>

<div class="cm-card blue">
  <span class="cm-icon">🧠</span>
  <h4>La tecnica Feel – Felt – Found</h4>

  <p>
    Questo approccio aiuta
    a rispondere a un dubbio
    attraverso l'empatia
    e l'esperienza personale.
    <br><br>
    <strong>Feel:</strong>
    riconosci il dubbio.
    <br>
    <strong>Felt:</strong>
    racconti di avere provato
    una sensazione simile,
    se è vero.
    <br>
    <strong>Found:</strong>
    spieghi che cosa hai scoperto
    attraverso la tua esperienza.
  </p>
</div>

<div class="cm-warning">
  <strong>⚠️ Racconta soltanto esperienze vere.</strong>
  <br>
  Non è necessario dire
  di aver utilizzato la piattaforma
  per mesi se non è così.
  <br><br>
  Inoltre, aver avuto
  una buona esperienza di viaggio
  non dimostra che l'attività
  garantisca guadagni.
  I compensi dipendono
  dal piano e dai risultati reali.
</div>

<h3 class="cm-title">
  📞 Fase 6 – Proporre la chiamata a tre
</h3>

<div class="cm-script">
  <span class="cm-kicker">SCENARIO 5 · PASSAGGIO ALLO SPONSOR</span>
  <h4>Coinvolgere una persona più esperta</h4>

  <p><strong>👩 Ambassador:</strong></p>
  <blockquote>
    "Per capire bene
    come funzionano i primi passi,
    ti propongo una breve videochiamata
    insieme ad Alessia,
    la persona del team
    con cui collaboro.
    <br><br>
    Conosce molto bene
    l'organizzazione
    e può aiutarci a chiarire
    le tue domande
    su costi, formazione
    e funzionamento dell'attività.
    <br><br>
    Ti andrebbe bene
    domani alle 18
    oppure un altro momento?"
  </blockquote>

  <p><strong>👤 Contatto:</strong></p>
  <blockquote>
    "Sì, domani alle 18
    va benissimo!
    Così approfondiamo
    anche la parte business."
  </blockquote>

  <p><strong>👩 Ambassador:</strong></p>
  <blockquote>
    "Perfetto! 😊
    Allora ci sentiamo
    domani alle 18.
    <br><br>
    Se nel frattempo
    ti vengono altre domande,
    segnatele pure,
    così le affrontiamo insieme."
  </blockquote>
</div>

<div class="cm-note">
  <strong>💡 Perché funziona la chiamata a tre?</strong>
  <br>
  Tu conosci la persona
  e hai costruito una relazione.
  <br><br>
  Lo Sponsor contribuisce
  con esperienza e conoscenza
  del sistema.
  <br><br>
  La persona interessata
  può approfondire
  senza sentirsi obbligata
  a prendere una decisione immediata.
</div>

<h3 class="cm-title">
  🗺️ Il flusso completo della conversazione
</h3>

<div class="cm-flow">

  <div class="cm-flow-item">
    <strong>👋 Invito</strong>
    <span>
      Apri il dialogo
      e scopri l'interesse.
    </span>
  </div>

  <div class="cm-arrow">→</div>

  <div class="cm-flow-item">
    <strong>🎥 Video</strong>
    <span>
      Proponi materiale
      informativo concordato.
    </span>
  </div>

  <div class="cm-arrow">→</div>

  <div class="cm-flow-item">
    <strong>📅 Follow-up</strong>
    <span>
      Risentitevi
      all'orario concordato.
    </span>
  </div>

  <div class="cm-arrow">→</div>

  <div class="cm-flow-item">
    <strong>🤝 Chiamata a 3</strong>
    <span>
      Approfondite insieme
      allo Sponsor.
    </span>
  </div>

</div>

<h3 class="cm-title">
  ✅ Le 7 cose da ricordare
</h3>

<div class="cm-card green">
  <p>
    ✅ Inizia con una conversazione naturale.
    <br><br>
    ✅ Descrivi i vantaggi senza esagerare.
    <br><br>
    ✅ Chiedi il permesso prima di inviare i video.
    <br><br>
    ✅ Dichiara durata e argomento del materiale.
    <br><br>
    ✅ Concorda un follow-up senza imporlo.
    <br><br>
    ✅ Rispondi ai dubbi con empatia e informazioni vere.
    <br><br>
    ✅ Coinvolgi lo Sponsor quando serve un approfondimento.
  </p>
</div>

<!-- QUIZ SULLA SIMULAZIONE -->

<h3 class="cm-title">
  🧠 Verifica finale: cosa hai imparato?
</h3>

<div class="cm-quiz">
  <span class="cm-kicker">DOMANDA PRATICA 01</span>
  <h4>
    Il contatto chiede quanto costa
    Travel Advantage. Che cosa fai?
  </h4>

  <p>A. Evito sempre di rispondere</p>
  <p>B. Rispondo in modo trasparente e posso proporre un video</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Il video aiuta a spiegare
      il servizio, ma non deve
      sostituire la trasparenza.
    </div>
  </details>
</div>

<div class="cm-quiz">
  <span class="cm-kicker">DOMANDA PRATICA 02</span>
  <h4>
    Il contatto non ha visto i video.
    Come ti comporti?
  </h4>

  <p>A. Lo rimprovero e insisto</p>
  <p>B. Propongo di risentirci quando sarà disponibile</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      La disponibilità della persona
      va rispettata.
    </div>
  </details>
</div>

<div class="cm-quiz">
  <span class="cm-kicker">DOMANDA PRATICA 03</span>
  <h4>
    La persona è scettica sui guadagni.
    Qual è la risposta migliore?
  </h4>

  <p>A. Prometterle che guadagnerà sicuramente</p>
  <p>B. Ascoltare il dubbio e chiarire come funziona il piano</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Non bisogna promettere
      risultati economici garantiti.
    </div>
  </details>
</div>

<div class="cm-quiz">
  <span class="cm-kicker">DOMANDA PRATICA 04</span>
  <h4>
    Quando è utile una chiamata a tre?
  </h4>

  <p>A. Quando la persona desidera approfondire con qualcuno di esperto</p>
  <p>B. Per obbligarla a iscriversi</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A.</strong>
      Serve a chiarire
      e ad affiancare,
      non a fare pressione.
    </div>
  </details>
</div>


<!-- CHECKLIST -->

<h3 class="cm-title">
  ✅ 13. Checklist prima di inviare un messaggio
</h3>

<div class="cm-card">
  <p>
    Usa queste domande
    come controllo personale
    prima di contattare qualcuno.
  </p>

  <p>
    ☐ Ho un motivo reale per scrivere?
    <br><br>
    ☐ Il messaggio è personale?
    <br><br>
    ☐ Ho evitato promesse esagerate?
    <br><br>
    ☐ Sto chiedendo, anziché presumere,
    che la persona sia interessata?
    <br><br>
    ☐ Ho chiesto il permesso
    prima di inviare materiale?
    <br><br>
    ☐ Sono pronto a rispettare
    un eventuale rifiuto?
  </p>
</div>

<!-- QUIZ -->

<h3 class="cm-title">
  🧠 14. Mettiti alla prova
</h3>

<div class="cm-quiz">
  <span class="cm-kicker">DOMANDA 01</span>
  <h4>Qual è l'obiettivo del primo messaggio?</h4>
  <p>A. Spiegare tutto il piano compensi</p>
  <p>B. Capire l'interesse e aprire una conversazione</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Il primo messaggio serve
      ad aprire un dialogo.
    </div>
  </details>
</div>

<div class="cm-quiz">
  <span class="cm-kicker">DOMANDA 02</span>
  <h4>Che cosa significa "Chi domanda comanda"?</h4>
  <p>A. Fare domande per forzare una risposta</p>
  <p>B. Ascoltare e comprendere la persona</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Fare domande utili
      e ascoltare le risposte.
    </div>
  </details>
</div>

<div class="cm-quiz">
  <span class="cm-kicker">DOMANDA 03</span>
  <h4>Che cosa indica il Content Mix 70/20/10?</h4>
  <p>A. Una suddivisione orientativa dei contenuti social</p>
  <p>B. Una formula per calcolare le commissioni</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A.</strong>
      70% valore, 20% community
      e 10% business.
    </div>
  </details>
</div>

<div class="cm-quiz">
  <span class="cm-kicker">DOMANDA 04</span>
  <h4>A cosa serve una 3-Way Call?</h4>
  <p>A. A coinvolgere uno Sponsor per approfondire</p>
  <p>B. A obbligare un contatto a iscriversi</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A.</strong>
      È uno strumento
      di affiancamento
      e chiarimento.
    </div>
  </details>
</div>

<div class="cm-quiz">
  <span class="cm-kicker">DOMANDA 05</span>
  <h4>Cosa devi fare prima di inviare un link in DM?</h4>
  <p>A. Inviarlo immediatamente</p>
  <p>B. Chiedere se la persona desidera riceverlo</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Il consenso alla ricezione
      del materiale è importante.
    </div>
  </details>
</div>

<div class="cm-quiz">
  <span class="cm-kicker">DOMANDA 06</span>
  <h4>Cosa fare se una persona dice che non è interessata?</h4>
  <p>A. Insistere con altri messaggi</p>
  <p>B. Rispettare la sua risposta</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Un rifiuto va rispettato.
    </div>
  </details>
</div>

<!-- CONCLUSIONE -->

<h3 class="cm-title">
  🎯 Il concetto da ricordare
</h3>

<div class="cm-final">

  <h4>🤝 La fiducia viene prima della presentazione</h4>

  <p>
    Condividere Travel Advantage
    significa parlare con le persone,
    ascoltare le loro esigenze
    e offrire informazioni utili.
    <br><br>
    Le domande, i video,
    i webinar, i social
    e le chiamate a tre
    sono strumenti di supporto.
    <br><br>
    <strong>
      Non devi convincere tutti:
      devi comunicare in modo chiaro
      con chi desidera conoscere
      il servizio o l'opportunità.
    </strong>
  </p>

</div>

<div class="cm-note">
  <strong>📚 Fonte formativa</strong>
  <br>
  Questo capitolo riprende
  i principi e le tecniche
  condivisi nel materiale
  The Travel Legends
  fornito dall'IA di Paolo.
  <br><br>
  Gli esempi di messaggi
  sono adattamenti formativi.
  Le regole di comunicazione
  del team non sostituiscono
  le condizioni ufficiali
  di MWR Life
  o le norme applicabili.
</div>

</div>
</section>
`);
