
window.registraSezione("onboarding", `
<section class="section" id="onboarding" data-group="formazione">

<style>
#onboarding {
  --ob-ink:#143950;
  --ob-muted:#536d7c;
  --ob-line:#dce9ef;
  --ob-teal:#0b8997;
}
#onboarding .ob-title {
  font-size:23px;
  color:var(--ob-ink);
  margin:36px 0 16px;
}
#onboarding .ob-lead {
  font-size:14px;
  line-height:1.85;
  color:var(--ob-muted);
  margin:12px 0 22px;
}
#onboarding .ob-label {
  display:inline-block;
  padding:7px 12px;
  border-radius:24px;
  font-size:11px;
  letter-spacing:.04em;
  font-weight:800;
  background:#e5f7f3;
  color:#087d88;
}
#onboarding .ob-hero {
  display:grid;
  grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);
  gap:24px;
  align-items:center;
  margin:15px 0 30px;
}
#onboarding .ob-hero-art {
  padding:27px 20px;
  border-radius:22px;
  text-align:center;
  color:white;
  background:linear-gradient(145deg,#103651,#128b9b);
}
#onboarding .ob-hero-art h4 {
  color:white;
  font-size:22px;
  margin:10px 0;
}
#onboarding .ob-hero-art p {
  font-size:13px;
  color:#e0f5f8;
  line-height:1.75;
}
#onboarding .ob-hero-emoji {
  font-size:57px;
  margin:9px 0;
}
#onboarding .ob-hero-steps {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:7px;
  margin-top:20px;
}
#onboarding .ob-hero-steps div {
  border:1px solid #ffffff45;
  background:#ffffff1e;
  border-radius:12px;
  padding:12px 6px;
  font-size:11px;
  color:white;
}
#onboarding .ob-hero-steps b {
  display:block;
  color:#ffefb1;
  font-size:21px;
}
#onboarding .ob-two {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#onboarding .ob-three {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:14px;
  margin:20px 0;
}
#onboarding .ob-card {
  background:#f5f9fc;
  border:1px solid var(--ob-line);
  border-radius:18px;
  padding:21px;
  min-width:0;
}
#onboarding .ob-card.blue {
  background:#eef7ff;
  border-color:#d2e6f8;
}
#onboarding .ob-card.green {
  background:#effaf4;
  border-color:#d2eadd;
}
#onboarding .ob-card.gold {
  background:#fff8e9;
  border-color:#efe2bc;
}
#onboarding .ob-card.purple {
  background:#f6f1ff;
  border-color:#e5dafa;
}
#onboarding .ob-card h4 {
  font-size:17px;
  margin:9px 0;
  color:#153a53;
}
#onboarding .ob-card p {
  font-size:13px;
  color:var(--ob-muted);
  line-height:1.82;
  margin:8px 0;
}
#onboarding .ob-icon {
  display:block;
  font-size:29px;
  margin-bottom:8px;
}
#onboarding .ob-big {
  display:block;
  color:#0b8495;
  font-size:29px;
  font-weight:850;
  margin:10px 0;
}
#onboarding .ob-big small {
  font-size:12px;
  color:#688291;
  font-weight:600;
}
#onboarding .ob-note {
  background:#eaf8f4;
  border-left:4px solid #17a894;
  padding:18px;
  border-radius:11px;
  color:#345d55;
  font-size:13px;
  line-height:1.85;
  margin:20px 0;
}
#onboarding .ob-warn {
  background:#fff8e9;
  border-left:4px solid #d8a545;
  padding:18px;
  border-radius:11px;
  color:#715a31;
  font-size:13px;
  line-height:1.85;
  margin:20px 0;
}
#onboarding .ob-steps {
  padding:5px 20px;
  background:#f8fbfd;
  border:1px solid var(--ob-line);
  border-radius:17px;
  margin:20px 0;
}
#onboarding .ob-step {
  display:flex;
  align-items:flex-start;
  gap:15px;
  padding:19px 0;
  border-bottom:1px solid #deebf0;
}
#onboarding .ob-step:last-child {
  border-bottom:0;
}
#onboarding .ob-step-num {
  display:flex;
  align-items:center;
  justify-content:center;
  width:37px;
  height:37px;
  min-width:37px;
  border-radius:50%;
  background:#0e8999;
  color:white;
  font-weight:800;
}
#onboarding .ob-step-body {
  flex:1;
  min-width:0;
}
#onboarding .ob-step-body strong {
  font-size:15px;
  color:#153a53;
}
#onboarding .ob-step-body p {
  font-size:13px;
  color:var(--ob-muted);
  line-height:1.8;
  margin:7px 0;
}
#onboarding .ob-flow {
  display:flex;
  gap:9px;
  align-items:stretch;
  margin:21px 0;
}
#onboarding .ob-flow-item {
  flex:1;
  min-width:0;
  text-align:center;
  border-radius:14px;
  border:1px solid #d7eaf0;
  background:#eff8fa;
  padding:16px 10px;
}
#onboarding .ob-flow-item strong {
  display:block;
  color:#184d64;
  font-size:14px;
  margin-bottom:8px;
}
#onboarding .ob-flow-item span {
  font-size:12px;
  color:#577484;
  line-height:1.65;
}
#onboarding .ob-arrow {
  align-self:center;
  font-size:22px;
  color:#0c99a6;
  font-weight:800;
}
#onboarding .ob-schedule {
  border:1px solid #dce9ee;
  border-radius:17px;
  overflow:hidden;
  margin:20px 0;
}
#onboarding .ob-schedule-head {
  background:#123650;
  color:white;
  padding:17px 20px;
}
#onboarding .ob-schedule-head strong {
  font-size:17px;
  color:white;
}
#onboarding .ob-schedule-head p {
  color:#dceaf3;
  font-size:12px;
  line-height:1.7;
  margin:7px 0 0;
}
#onboarding .ob-day {
  display:grid;
  grid-template-columns:110px minmax(0,1fr);
  gap:16px;
  padding:16px 20px;
  border-top:1px solid #e1eaf0;
  background:white;
}
#onboarding .ob-day:nth-child(odd) {
  background:#f7fafc;
}
#onboarding .ob-day-name {
  color:#153a53;
  font-size:14px;
  font-weight:800;
}
#onboarding .ob-event {
  display:flex;
  align-items:flex-start;
  gap:11px;
  margin:0 0 12px;
}
#onboarding .ob-event:last-child {
  margin-bottom:0;
}
#onboarding .ob-time {
  flex:0 0 58px;
  color:#078597;
  font-size:14px;
  font-weight:850;
  white-space:nowrap;
}
#onboarding .ob-event-info {
  flex:1;
  min-width:0;
}
#onboarding .ob-event-info strong {
  display:block;
  font-size:13px;
  color:#244b60;
  margin-bottom:4px;
}
#onboarding .ob-event-info span {
  color:#637e8d;
  font-size:11px;
  line-height:1.65;
}
#onboarding .ob-tag {
  display:inline-block;
  font-size:10px;
  font-weight:800;
  color:#266a50;
  background:#dff4e9;
  padding:4px 8px;
  border-radius:20px;
}
#onboarding .ob-tag.training {
  color:#674d99;
  background:#eee6fb;
}
#onboarding .ob-tag.company {
  color:#33658d;
  background:#e2f0fc;
}
#onboarding .ob-academy {
  border:1px solid var(--ob-line);
  background:#f8fbfd;
  border-radius:15px;
  padding:19px;
  margin:13px 0;
}
#onboarding .ob-academy h4 {
  font-size:17px;
  color:#143950;
  margin:7px 0;
}
#onboarding .ob-academy p {
  font-size:13px;
  color:var(--ob-muted);
  line-height:1.85;
}
#onboarding .ob-week {
  border-radius:18px;
  border:1px solid #dce9ef;
  background:#f8fbfd;
  padding:22px;
  margin:20px 0;
}
#onboarding .ob-week h4 {
  font-size:19px;
  color:#153a53;
  margin:11px 0;
}
#onboarding .ob-week p {
  font-size:13px;
  color:#536d7d;
  line-height:1.82;
}
#onboarding .ob-week ul {
  padding-left:20px;
  color:#496779;
  font-size:13px;
  line-height:1.9;
}
#onboarding .ob-week details {
  background:white;
  border:1px solid #e0ebef;
  border-radius:12px;
  padding:14px;
  margin-top:15px;
}
#onboarding .ob-week label {
  display:block;
  margin:10px 0;
  font-size:13px;
  color:#496779;
  line-height:1.6;
}
#onboarding .ob-week input {
  margin-right:6px;
  accent-color:#0b8997;
}
#onboarding .ob-table-wrap {
  overflow-x:auto;
  border:1px solid var(--ob-line);
  border-radius:15px;
  margin:21px 0;
}
#onboarding .ob-table {
  width:100%;
  min-width:530px;
  border-collapse:collapse;
}
#onboarding .ob-table th {
  background:#123650;
  color:white;
  font-size:12px;
  text-align:left;
  padding:14px 12px;
}
#onboarding .ob-table td {
  padding:13px 12px;
  border-bottom:1px solid #e1eaf0;
  font-size:12px;
  line-height:1.7;
  color:#3d5f70;
}
#onboarding .ob-table tr:nth-child(even) td {
  background:#f4f8fa;
}
#onboarding .ob-table tr:last-child td {
  border-bottom:0;
}
#onboarding .ob-table td:first-child {
  font-weight:800;
  color:#153a53;
}
#onboarding .ob-quiz {
  background:#f6f1ff;
  border:1px solid #e7dbf9;
  border-radius:16px;
  padding:21px;
  margin:16px 0;
}
#onboarding .ob-quiz h4 {
  font-size:16px;
  color:#273c56;
  margin:11px 0;
}
#onboarding .ob-quiz p {
  font-size:13px;
  line-height:1.8;
  color:#586780;
}
#onboarding .ob-quiz details {
  background:white;
  border-radius:10px;
  padding:13px;
  margin-top:12px;
}
#onboarding details summary {
  cursor:pointer;
  color:#25475e;
  font-weight:750;
}
#onboarding details > div {
  color:#536d7d;
  font-size:13px;
  line-height:1.8;
  margin-top:11px;
}
#onboarding .ob-final {
  background:linear-gradient(135deg,#0d3656,#128394);
  padding:25px;
  border-radius:18px;
  color:white;
  margin:25px 0;
}
#onboarding .ob-final h4 {
  color:white;
  margin:0 0 12px;
  font-size:21px;
}
#onboarding .ob-final p {
  color:#e1f6f8;
  font-size:14px;
  line-height:1.85;
}
@media(max-width:850px) {
  #onboarding .ob-three {
    grid-template-columns:1fr;
  }
}
@media(max-width:700px) {
  #onboarding .ob-hero,
  #onboarding .ob-two {
    grid-template-columns:1fr;
  }
  #onboarding .ob-flow {
    flex-direction:column;
  }
  #onboarding .ob-arrow {
    transform:rotate(90deg);
  }
  #onboarding .ob-day {
    grid-template-columns:1fr;
    gap:9px;
  }
  #onboarding .ob-title {
    font-size:21px;
  }
}
</style>

<!-- INTESTAZIONE -->

<div class="section-head">
  <span class="kicker">
    Capitolo 12 · Formazione Ambassador
  </span>

  <h2>Formazione e onboarding</h2>

  <p>
    Il percorso per accogliere
    e accompagnare ogni nuovo Ambassador:
    primi passi, strumenti, accademie,
    calendario delle call e piano
    di avviamento dei primi 30 giorni.
  </p>
</div>

<div class="section-body">

<!-- INTRO -->

<div class="ob-hero">
  <div>
    <span class="ob-label">IL PERCORSO DEL NUOVO AMBASSADOR</span>

    <h3 class="ob-title">
      🎓 Dall'iscrizione all'autonomia
    </h3>

    <p class="ob-lead">
      Entrare in MWR Life non significa
      dover sapere già tutto
      sui viaggi, sui social
      o sul network marketing.
      <br><br>
      La formazione di
      <strong>The Travel Legends</strong>
      nasce per accompagnare
      ogni nuovo Lifestyle Ambassador
      nella conoscenza della piattaforma,
      degli strumenti e delle attività
      quotidiane.
      <br><br>
      Il percorso unisce
      <strong>studio, pratica e affiancamento</strong>,
      con il supporto dello Sponsor
      e della community.
    </p>
  </div>

  <div class="ob-hero-art">
    <div class="ob-hero-emoji">🎓</div>

    <h4>Impara. Applica. Condividi.</h4>

    <p>
      Un metodo pensato
      per accompagnare
      ogni nuova persona
      passo dopo passo.
    </p>

    <div class="ob-hero-steps">
      <div><b>48h</b>Avviamento</div>
      <div><b>30</b>Giorni iniziali</div>
      <div><b>90</b>Giorni di visione</div>
    </div>
  </div>
</div>

<!-- OBIETTIVI -->

<h3 class="ob-title">
  🎯 1. A cosa serve l'onboarding?
</h3>

<div class="ob-three">
  <div class="ob-card blue">
    <span class="ob-icon">🧭</span>
    <h4>Dare una direzione</h4>
    <p>
      Aiutare il nuovo Ambassador
      a comprendere che cosa
      ha scelto di fare,
      come funziona il progetto
      e quali sono i primi passi.
    </p>
  </div>

  <div class="ob-card green">
    <span class="ob-icon">📚</span>
    <h4>Fornire strumenti</h4>
    <p>
      Mostrare dove trovare
      manuali, formazione,
      calendari, presentazioni
      e supporto operativo.
    </p>
  </div>

  <div class="ob-card gold">
    <span class="ob-icon">🤝</span>
    <h4>Costruire autonomia</h4>
    <p>
      Insegnare alla persona
      a utilizzare Travel Advantage,
      comunicare correttamente
      e gestire i propri contatti.
    </p>
  </div>
</div>

<div class="ob-note">
  <strong>💡 La formazione non finisce dopo l'iscrizione.</strong>
  <br>
  L'onboarding serve a partire,
  mentre le call settimanali,
  gli strumenti e l'affiancamento
  permettono di continuare
  a sviluppare competenze nel tempo.
</div>

<!-- PRIME 48 ORE -->

<h3 class="ob-title">
  ⏱️ 2. I primi passi entro 48 ore
</h3>

<p class="ob-lead">
  Il metodo formativo del team
  propone di completare
  l'avviamento iniziale
  entro le prime 48 ore
  dall'iscrizione,
  compatibilmente con
  la disponibilità delle persone.
</p>

<div class="ob-steps">

  <div class="ob-step">
    <div class="ob-step-num">1</div>
    <div class="ob-step-body">
      <strong>Benvenuto e accessi</strong>
      <p>
        Verifica che il nuovo membro
        possa accedere alla piattaforma
        Travel Advantage e agli strumenti
        previsti dal proprio account.
        <br><br>
        Accertati che sappia dove trovare
        le informazioni di assistenza.
      </p>
    </div>
  </div>

  <div class="ob-step">
    <div class="ob-step-num">2</div>
    <div class="ob-step-body">
      <strong>Ingresso nella community</strong>
      <p>
        Condividi, quando appropriato,
        gli inviti ai gruppi
        Telegram e WhatsApp,
        al gruppo Facebook
        e alle piattaforme
        formative disponibili.
        <br><br>
        Prima di aggiungere
        una persona a un gruppo,
        chiedi il suo consenso.
      </p>
    </div>
  </div>

  <div class="ob-step">
    <div class="ob-step-num">3</div>
    <div class="ob-step-body">
      <strong>Prima chiamata con lo Sponsor</strong>
      <p>
        Organizza una chiamata
        individuale di avviamento
        per conoscere gli obiettivi,
        chiarire le prime domande
        e mostrare il percorso formativo.
      </p>
    </div>
  </div>

  <div class="ob-step">
    <div class="ob-step-num">4</div>
    <div class="ob-step-body">
      <strong>Scelta del tempo disponibile</strong>
      <p>
        Aiuta il nuovo Ambassador
        a individuare un ritmo
        realistico che possa
        mantenere nel tempo.
      </p>
    </div>
  </div>

  <div class="ob-step">
    <div class="ob-step-num">5</div>
    <div class="ob-step-body">
      <strong>Primi obiettivi e formazione</strong>
      <p>
        Concorda cosa studiare,
        quali strumenti configurare
        e quali attività iniziare
        durante la prima settimana.
      </p>
    </div>
  </div>

</div>

<!-- CHIAMATA AVVIAMENTO -->

<h3 class="ob-title">
  📞 3. La prima chiamata di avviamento
</h3>

<div class="ob-card green">
  <span class="ob-label">CHIAMATA 1-TO-1</span>
  <h4>Una conversazione per conoscersi</h4>

  <p>
    Questa chiamata non deve
    essere un esame
    o una spiegazione infinita.
    <br><br>
    Serve per capire
    le esigenze del nuovo membro
    e aiutarlo a organizzare
    l'inizio dell'attività.
  </p>

  <div class="ob-steps">

    <div class="ob-step">
      <div class="ob-step-num">1</div>
      <div class="ob-step-body">
        <strong>Conoscere la persona</strong>
        <p>
          Chiedi perché ha deciso
          di iniziare e quale parte
          del progetto la interessa
          maggiormente.
        </p>
      </div>
    </div>

    <div class="ob-step">
      <div class="ob-step-num">2</div>
      <div class="ob-step-body">
        <strong>Comprendere gli obiettivi</strong>
        <p>
          Può voler utilizzare
          i vantaggi di viaggio,
          sviluppare una seconda attività
          oppure approfondire
          il progetto gradualmente.
        </p>
      </div>
    </div>

    <div class="ob-step">
      <div class="ob-step-num">3</div>
      <div class="ob-step-body">
        <strong>Definire il tempo disponibile</strong>
        <p>
          Individuate insieme
          gli orari dedicabili
          alla formazione
          e alle attività pratiche.
        </p>
      </div>
    </div>

    <div class="ob-step">
      <div class="ob-step-num">4</div>
      <div class="ob-step-body">
        <strong>Mostrare dove studiare</strong>
        <p>
          Presenta i manuali,
          le accademie,
          il calendario degli incontri
          e i contatti di supporto.
        </p>
      </div>
    </div>

    <div class="ob-step">
      <div class="ob-step-num">5</div>
      <div class="ob-step-body">
        <strong>Concordare il primo passo</strong>
        <p>
          Scegliete un'attività
          concreta da completare
          e un momento
          in cui confrontarvi
          sui progressi.
        </p>
      </div>
    </div>

  </div>
</div>

<div class="ob-note">
  <strong>💬 Esempi di domande per lo Sponsor</strong>
  <br><br>
  "Che cosa ti ha incuriosito
  di più di questa opportunità?"
  <br><br>
  "Quanto tempo pensi di poter
  dedicare ogni settimana?"
  <br><br>
  "Ti trovi più a tuo agio
  parlando con le persone
  oppure creando contenuti social?"
  <br><br>
  "Qual è la prima cosa
  che vorresti imparare?"
</div>

<!-- PROFILI ORARI -->

<h3 class="ob-title">
  ⏰ 4. Scegliere il proprio ritmo
</h3>

<p class="ob-lead">
  The Travel Legends propone
  tre profili orientativi
  per organizzare il tempo.
  <br><br>
  Non rappresentano
  qualifiche MWR Life
  e non determinano
  guadagni automatici.
</p>

<div class="ob-three">

  <div class="ob-card blue">
    <span class="ob-label">STARTER</span>
    <span class="ob-icon">🌱</span>
    <span class="ob-big">1h <small>/giorno</small></span>
    <h4>Iniziare gradualmente</h4>
    <p>
      Per chi desidera
      affiancare l'attività
      agli impegni familiari
      o lavorativi.
      <br><br>
      Focus su formazione,
      organizzazione
      e poche azioni mirate.
    </p>
  </div>

  <div class="ob-card green">
    <span class="ob-label">PRO</span>
    <span class="ob-icon">🚀</span>
    <span class="ob-big">3h <small>/giorno</small></span>
    <h4>Attività strutturata</h4>
    <p>
      Per chi può dedicare
      più tempo alla formazione,
      ai contatti, ai contenuti
      e all'affiancamento.
      <br><br>
      Il ritmo richiede
      una pianificazione costante.
    </p>
  </div>

  <div class="ob-card gold">
    <span class="ob-label">LEGEND / FULL-TIME</span>
    <span class="ob-icon">🏆</span>
    <span class="ob-big">6h+ <small>/giorno</small></span>
    <h4>Impegno intensivo</h4>
    <p>
      Per chi sceglie
      di dedicare
      una parte importante
      della giornata
      allo sviluppo dell'attività.
      <br><br>
      Più ore non garantiscono
      un determinato rank
      o reddito.
    </p>
  </div>

</div>

<div class="ob-warn">
  <strong>⚠️ Il profilo è una scelta personale.</strong>
  <br>
  Non è necessario dedicare
  sei ore al giorno per essere
  un buon Ambassador.
  <br><br>
  Il ritmo deve essere
  compatibile con la propria vita,
  senza promesse di reddito
  legate al numero di ore.
</div>

<!-- MODALITA -->

<h3 class="ob-title">
  🌍 5. Scegliere come sviluppare l'attività
</h3>

<div class="ob-three">
  <div class="ob-card blue">
    <span class="ob-icon">☕</span>
    <h4>Offline</h4>
    <p>
      Conversazioni personali,
      incontri individuali,
      passaparola,
      Travel Party
      e presentazioni dal vivo.
    </p>
  </div>

  <div class="ob-card purple">
    <span class="ob-icon">📱</span>
    <h4>Online</h4>
    <p>
      Contenuti sui social,
      messaggi personali,
      webinar, video
      e strumenti digitali
      di comunicazione.
    </p>
  </div>

  <div class="ob-card green">
    <span class="ob-icon">🔄</span>
    <h4>Ibrido</h4>
    <p>
      Combina relazioni
      personali e strumenti online,
      scegliendo i canali
      più adatti alla persona.
    </p>
  </div>
</div>

<div class="ob-note">
  <strong>💡 Non esiste un'unica strada.</strong>
  <br>
  Chi ama parlare con le persone
  può preferire gli incontri.
  <br><br>
  Chi si trova a proprio agio
  con i contenuti digitali
  può sviluppare maggiormente
  la comunicazione online.
  <br><br>
  È possibile cambiare metodo
  nel tempo.
</div>

<!-- STRUMENTI -->

<h3 class="ob-title">
  🧰 6. Gli strumenti da conoscere
</h3>

<div class="ob-three">

  <div class="ob-card blue">
    <span class="ob-icon">✈️</span>
    <h4>Travel Advantage</h4>
    <p>
      La piattaforma di viaggio:
      membership, ricerca hotel,
      servizi e prenotazioni.
    </p>
  </div>

  <div class="ob-card green">
    <span class="ob-icon">💼</span>
    <h4>Biz Center MWR Life</h4>
    <p>
      Area di gestione
      dell'attività Ambassador
      e degli strumenti aziendali
      disponibili per l'account.
    </p>
  </div>

  <div class="ob-card gold">
    <span class="ob-icon">💬</span>
    <h4>WhatsApp Business</h4>
    <p>
      Per organizzare
      le conversazioni,
      gli appuntamenti
      e i contatti che hanno
      manifestato interesse.
    </p>
  </div>

  <div class="ob-card purple">
    <span class="ob-icon">✈️</span>
    <h4>Telegram</h4>
    <p>
      Canali e gruppi
      della community,
      comunicazioni formative
      e aggiornamenti.
    </p>
  </div>

  <div class="ob-card blue">
    <span class="ob-icon">👥</span>
    <h4>Gruppo Facebook</h4>
    <p>
      Spazio della community
      per contenuti,
      condivisione di esperienze
      e materiali disponibili.
    </p>
  </div>

  <div class="ob-card green">
    <span class="ob-icon">📚</span>
    <h4>Networker School</h4>
    <p>
      Percorso didattico
      per apprendere metodo,
      comunicazione,
      marketing e organizzazione.
    </p>
  </div>

</div>

<div class="ob-note">
  <strong>📌 Accessi e collegamenti</strong>
  <br>
  Gli accessi a gruppi
  e accademie devono essere
  forniti dallo Sponsor
  o dagli amministratori
  della community.
  <br><br>
  Alcuni strumenti o corsi
  possono richiedere
  autorizzazioni specifiche.
</div>

<!-- ACCADEMIE -->

<h3 class="ob-title">
  🎓 7. Le accademie e la formazione disponibile
</h3>

<div class="ob-academy">
  <span class="ob-label">FORMAZIONE GENERALE</span>
  <h4>📚 Centro di Formazione Privato e Networker School</h4>
  <p>
    Percorsi che accompagnano
    il nuovo Ambassador
    nell'apprendimento
    delle basi dell'attività:
    comunicazione, mentalità
    imprenditoriale, marketing,
    organizzazione e presentazione
    dell'opportunità.
  </p>
</div>

<div class="ob-academy">
  <span class="ob-label">FORMAZIONE SOCIAL</span>
  <h4>📱 Social Academy</h4>
  <p>
    Percorso dedicato
    a Instagram, TikTok
    e personal branding.
    <br><br>
    Può comprendere
    ottimizzazione dei profili,
    idee di contenuti,
    storytelling,
    comunicazione della community
    e pianificazione editoriale.
  </p>
</div>

<div class="ob-academy">
  <span class="ob-label">APPROFONDIMENTO DIGITALE</span>
  <h4>💻 Digital Wealth Academy (DWA)</h4>
  <p>
    Percorso avanzato
    di marketing digitale
    citato nei materiali
    della community.
    <br><br>
    Il livello di accesso,
    le condizioni e i contenuti
    vanno verificati
    con il team.
  </p>
</div>

<div class="ob-academy">
  <span class="ob-label">INTELLIGENZA ARTIFICIALE</span>
  <h4>🤖 Assistente Leggendario e guida IA</h4>
  <p>
    Strumenti e modelli
    di richiesta per aiutare
    a preparare bio social,
    piani editoriali,
    didascalie e bozze
    di comunicazione.
    <br><br>
    Tra i framework citati
    è presente CRISPE,
    utilizzabile per strutturare
    richieste più complete
    agli assistenti IA.
  </p>
</div>

<div class="ob-warn">
  <strong>⚠️ L'intelligenza artificiale è un supporto.</strong>
  <br>
  Prima di condividere
  prezzi, condizioni,
  requisiti o guadagni,
  verifica sempre i dati.
  <br><br>
  Non inserire dati personali
  dei contatti in strumenti IA
  senza una base appropriata
  e le necessarie garanzie.
</div>

<!-- MANUALI -->

<h3 class="ob-title">
  📖 8. I manuali e le guide operative
</h3>

<div class="ob-table-wrap">
  <table class="ob-table">
    <thead>
      <tr>
        <th>Materiale</th>
        <th>A cosa serve</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Manuale Operativo Avviamento</td>
        <td>
          Organizzare i primi passi
          del nuovo Ambassador.
        </td>
      </tr>
      <tr>
        <td>Guida Totale MWR Life</td>
        <td>
          Approfondire il funzionamento
          generale del progetto.
        </td>
      </tr>
      <tr>
        <td>Framework Piano Editoriale</td>
        <td>
          Pianificare i contenuti
          da pubblicare sui social.
        </td>
      </tr>
      <tr>
        <td>Guida Guest Pass</td>
        <td>
          Comprendere l'accesso gratuito
          di prova e la condivisione.
        </td>
      </tr>
      <tr>
        <td>Gestione delle Obiezioni</td>
        <td>
          Imparare a rispondere
          a domande e perplessità.
        </td>
      </tr>
      <tr>
        <td>Guida Follow-up</td>
        <td>
          Accompagnare le persone
          che hanno richiesto
          informazioni.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ob-note">
  <strong>📚 Come utilizzare l'Atlante</strong>
  <br>
  Questo sito può diventare
  il punto di partenza
  per ogni nuovo membro:
  raccoglie i concetti principali
  in capitoli consultabili
  in qualsiasi momento.
  <br><br>
  I manuali originali
  restano il riferimento
  per verificare
  le regole operative aggiornate.
</div>

<!-- CALENDARIO PRESENTAZIONI -->

<h3 class="ob-title">
  📣 9. Le presentazioni pubbliche
</h3>

<p class="ob-lead">
  Le presentazioni pubbliche
  servono a far conoscere
  Travel Advantage
  e l'opportunità Ambassador
  alle persone interessate.
  <br><br>
  Possono essere utilizzate
  per invitare i prospect
  senza dover svolgere
  personalmente tutta
  la presentazione.
</p>

<div class="ob-schedule">

  <div class="ob-schedule-head">
    <strong>📅 Presentazioni per prospect</strong>
    <p>
      Calendario riportato
      nei tuoi appunti.
      Orari italiani.
    </p>
  </div>

  <div class="ob-day">
    <div class="ob-day-name">Lunedì</div>
    <div class="ob-event">
      <div class="ob-time">21:15</div>
      <div class="ob-event-info">
        <strong>Presentazione Paolo / Simone</strong>
        <span class="ob-tag">PUBBLICA</span>
      </div>
    </div>
  </div>

  <div class="ob-day">
    <div class="ob-day-name">Martedì</div>
    <div class="ob-event">
      <div class="ob-time">20:30</div>
      <div class="ob-event-info">
        <strong>Presentazione Team Italia</strong>
        <span class="ob-tag">PUBBLICA</span>
      </div>
    </div>
  </div>

  <div class="ob-day">
    <div class="ob-day-name">Mercoledì</div>
    <div class="ob-event">
      <div class="ob-event-info">
        <strong>Nessuna presentazione pubblica indicata</strong>
        <span>
          Nei tuoi appunti non è previsto
          un appuntamento pubblico fisso.
        </span>
      </div>
    </div>
  </div>

  <div class="ob-day">
    <div class="ob-day-name">Giovedì</div>
    <div class="ob-event">
      <div class="ob-time">20:30</div>
      <div class="ob-event-info">
        <strong>Presentazione Team Italia</strong>
        <span class="ob-tag">PUBBLICA</span>
      </div>
    </div>
  </div>

  <div class="ob-day">
    <div class="ob-day-name">Venerdì</div>
    <div class="ob-event">
      <div class="ob-time">21:15</div>
      <div class="ob-event-info">
        <strong>Presentazione Paolo / Simone</strong>
        <span class="ob-tag">PUBBLICA</span>
      </div>
    </div>
  </div>

</div>

<div class="ob-note">
  <strong>🎯 Come utilizzare queste presentazioni</strong>
  <br>
  Quando una persona
  manifesta interesse,
  puoi proporle
  una delle presentazioni
  disponibili e condividere
  il collegamento corretto.
  <br><br>
  È preferibile confermare
  giorno e orario
  prima di inviare l'invito.
</div>

<!-- CALENDARIO COMPLETO -->

<h3 class="ob-title">
  🗓️ 10. Calendario completo delle call settimanali
</h3>

<p class="ob-lead">
  Oltre alle presentazioni pubbliche,
  sono previste formazioni
  dedicate agli Ambassador
  e incontri aziendali.
  <br><br>
  Di seguito trovi
  tutti gli appuntamenti
  riportati nei tuoi appunti,
  distinti per tipologia.
</p>

<div class="ob-schedule">

  <div class="ob-schedule-head">
    <strong>📅 Call settimanali del team</strong>
    <p>
      Orari italiani · calendario
      da confermare periodicamente
      con gli organizzatori.
    </p>
  </div>

  <!-- LUNEDI -->

  <div class="ob-day">
    <div class="ob-day-name">Lunedì</div>
    <div>

      <div class="ob-event">
        <div class="ob-time">21:00</div>
        <div class="ob-event-info">
          <strong>Formazione Team Italia</strong>
          <span class="ob-tag training">FORMAZIONE</span>
        </div>
      </div>

      <div class="ob-event">
        <div class="ob-time">21:15</div>
        <div class="ob-event-info">
          <strong>Presentazione Paolo / Simone</strong>
          <span class="ob-tag">PUBBLICA</span>
        </div>
      </div>

    </div>
  </div>

  <!-- MARTEDI -->

  <div class="ob-day">
    <div class="ob-day-name">Martedì</div>
    <div>

      <div class="ob-event">
        <div class="ob-time">18:30</div>
        <div class="ob-event-info">
          <strong>CEO Call</strong>
          <span class="ob-tag company">AZIENDALE</span>
        </div>
      </div>

      <div class="ob-event">
        <div class="ob-time">20:30</div>
        <div class="ob-event-info">
          <strong>Presentazione Team Italia</strong>
          <span class="ob-tag">PUBBLICA</span>
        </div>
      </div>

    </div>
  </div>

  <!-- MERCOLEDI -->

  <div class="ob-day">
    <div class="ob-day-name">Mercoledì</div>
    <div class="ob-event">
      <div class="ob-time">21:00</div>
      <div class="ob-event-info">
        <strong>Formazione The Travel Legends</strong>
        <span class="ob-tag training">FORMAZIONE</span>
      </div>
    </div>
  </div>

  <!-- GIOVEDI -->

  <div class="ob-day">
    <div class="ob-day-name">Giovedì</div>
    <div>

      <div class="ob-event">
        <div class="ob-time">20:30</div>
        <div class="ob-event-info">
          <strong>Presentazione Team Italia</strong>
          <span class="ob-tag">PUBBLICA</span>
        </div>
      </div>

      <div class="ob-event">
        <div class="ob-time">20:30</div>
        <div class="ob-event-info">
          <strong>Formazione Team Tropicana</strong>
          <span class="ob-tag training">FORMAZIONE</span>
        </div>
      </div>

    </div>
  </div>

  <!-- VENERDI -->

  <div class="ob-day">
    <div class="ob-day-name">Venerdì</div>
    <div class="ob-event">
      <div class="ob-time">21:15</div>
      <div class="ob-event-info">
        <strong>Presentazione Paolo / Simone</strong>
        <span class="ob-tag">PUBBLICA</span>
      </div>
    </div>
  </div>

</div>

<div class="ob-warn">
  <strong>⚠️ Attenzione agli appuntamenti sovrapposti</strong>
  <br>
  <strong>Lunedì:</strong>
  la formazione Team Italia
  inizia alle 21:00,
  mentre la presentazione Paolo / Simone
  è prevista alle 21:15.
  <br><br>
  <strong>Giovedì:</strong>
  presentazione Team Italia
  e formazione Team Tropicana
  sono entrambe indicate
  alle 20:30.
  <br><br>
  Verifica con il team
  quale appuntamento seguire,
  se gli incontri siano alternativi
  o se uno degli orari
  debba essere corretto.
</div>

<!-- COME USARE CALL -->

<h3 class="ob-title">
  🎥 11. Come partecipare alle call nel modo giusto
</h3>

<div class="ob-two">

  <div class="ob-card blue">
    <span class="ob-icon">📣</span>
    <h4>Presentazione pubblica</h4>
    <p>
      È pensata per le persone
      che desiderano conoscere
      la piattaforma o il business.
      <br><br>
      L'Ambassador può partecipare
      insieme al proprio contatto,
      per poi confrontarsi
      sulle informazioni ricevute.
    </p>
  </div>

  <div class="ob-card green">
    <span class="ob-icon">📚</span>
    <h4>Formazione interna</h4>
    <p>
      È dedicata allo sviluppo
      delle competenze:
      prodotto, comunicazione,
      marketing, organizzazione
      e supporto del team.
      <br><br>
      Il nuovo membro può
      prendere appunti
      e approfondire le domande
      con lo Sponsor.
    </p>
  </div>

</div>

<div class="ob-steps">

  <div class="ob-step">
    <div class="ob-step-num">1</div>
    <div class="ob-step-body">
      <strong>Prima della call</strong>
      <p>
        Verifica orario,
        collegamento, argomento
        e tipologia di incontro.
        <br><br>
        Se inviti un prospect,
        spiegagli chiaramente
        a cosa parteciperà.
      </p>
    </div>
  </div>

  <div class="ob-step">
    <div class="ob-step-num">2</div>
    <div class="ob-step-body">
      <strong>Durante la call</strong>
      <p>
        Ascolta, prendi appunti
        e annota i punti
        che desideri approfondire.
      </p>
    </div>
  </div>

  <div class="ob-step">
    <div class="ob-step-num">3</div>
    <div class="ob-step-body">
      <strong>Dopo la call</strong>
      <p>
        Se era una formazione,
        individua un'azione pratica
        da mettere in atto.
        <br><br>
        Se era una presentazione,
        puoi chiedere al prospect
        quali aspetti desidera
        approfondire, senza pressione.
      </p>
    </div>
  </div>

</div>

<!-- AFFIANCAMENTO -->

<h3 class="ob-title">
  🤝 12. Il supporto dello Sponsor e le chiamate a 3
</h3>

<div class="ob-flow">

  <div class="ob-flow-item">
    <strong>👩 Nuovo Ambassador</strong>
    <span>
      Avvia una conversazione
      e conosce il contatto.
    </span>
  </div>

  <div class="ob-arrow">→</div>

  <div class="ob-flow-item">
    <strong>🎓 Sponsor</strong>
    <span>
      Contribuisce con esperienza
      e conoscenza del progetto.
    </span>
  </div>

  <div class="ob-arrow">→</div>

  <div class="ob-flow-item">
    <strong>💬 Chiamata a 3</strong>
    <span>
      Il contatto approfondisce
      e pone le proprie domande.
    </span>
  </div>

</div>

<div class="ob-card purple">
  <span class="ob-icon">📞</span>
  <h4>Imparare sul campo</h4>
  <p>
    Durante le prime settimane,
    il nuovo Ambassador
    può partecipare
    a chiamate a tre
    con lo Sponsor.
    <br><br>
    È un metodo di apprendimento
    pratico: osserva,
    prende appunti
    e acquisisce gradualmente
    sicurezza.
    <br><br>
    Non è obbligatorio
    fare ogni chiamata
    con lo Sponsor,
    ma è consigliabile
    chiedere supporto
    quando non si conosce
    bene un argomento.
  </p>
</div>

<!-- EVENTI -->

<h3 class="ob-title">
  🌍 13. Eventi dal vivo e convention
</h3>

<div class="ob-three">

  <div class="ob-card blue">
    <span class="ob-icon">☕</span>
    <h4>Travel Party</h4>
    <p>
      Incontri informali
      per conoscere
      Travel Advantage
      e parlare
      con altre persone
      interessate ai viaggi.
    </p>
  </div>

  <div class="ob-card green">
    <span class="ob-icon">🎤</span>
    <h4>Travel Opportunity Meeting</h4>
    <p>
      Presentazioni organizzate
      sul territorio
      per approfondire
      la piattaforma
      e l'opportunità Ambassador.
    </p>
  </div>

  <div class="ob-card gold">
    <span class="ob-icon">🏟️</span>
    <h4>Convention e Builders Bootcamp</h4>
    <p>
      Eventi nazionali
      o internazionali
      dedicati a formazione,
      confronto e sviluppo
      della community.
    </p>
  </div>

</div>

<div class="ob-note">
  <strong>📅 Gli eventi dal vivo non hanno un orario fisso.</strong>
  <br>
  Date, sedi,
  modalità di partecipazione
  e costi eventuali
  devono essere verificati
  negli annunci ufficiali
  degli organizzatori.
</div>

<!-- ROADMAP -->

<h3 class="ob-title">
  🚀 14. La roadmap dei primi 30 giorni
</h3>

<p class="ob-lead">
  Il primo mese è diviso
  in quattro settimane,
  ognuna con un obiettivo
  formativo e operativo.
  <br><br>
  È un percorso orientativo:
  può essere adattato
  alla disponibilità
  di ogni nuovo membro.
</p>

<!-- SETTIMANA 1 -->

<div class="ob-week">

  <span class="ob-label">SETTIMANA 1 · GIORNI 1–7</span>
  <h4>🌱 Setup e immersione</h4>

  <p>
    La prima settimana
    serve a conoscere il progetto
    e preparare gli strumenti.
  </p>

  <ul>
    <li>Completare la prima chiamata con lo Sponsor.</li>
    <li>Configurare gli accessi a Travel Advantage e Biz Center.</li>
    <li>Conoscere i gruppi e le piattaforme formative.</li>
    <li>Scegliere un ritmo Starter, Pro o Legend.</li>
    <li>Iniziare a studiare i capitoli fondamentali dell'Atlante.</li>
    <li>Preparare la prima Lista Contatti.</li>
  </ul>

  <details>
    <summary>✅ Checklist settimana 1</summary>
    <div>
      <label><input type="checkbox"> Prima chiamata con Sponsor</label>
      <label><input type="checkbox"> Accessi verificati</label>
      <label><input type="checkbox"> Gruppi formativi conosciuti</label>
      <label><input type="checkbox"> Profilo orario scelto</label>
      <label><input type="checkbox"> Lista Contatti iniziata</label>
    </div>
  </details>

</div>

<!-- SETTIMANA 2 -->

<div class="ob-week">

  <span class="ob-label">SETTIMANA 2 · GIORNI 8–14</span>
  <h4>💬 Primi inviti e pratica</h4>

  <p>
    L'obiettivo è iniziare
    a utilizzare concretamente
    ciò che si è studiato.
  </p>

  <ul>
    <li>Imparare il metodo di condivisione e comunicazione.</li>
    <li>Avviare conversazioni con persone potenzialmente interessate.</li>
    <li>Proporre presentazioni pubbliche, video o Guest Pass quando pertinenti.</li>
    <li>Partecipare a una call formativa del team.</li>
    <li>Osservare una chiamata a tre con lo Sponsor.</li>
    <li>Aggiornare la Lista Contatti.</li>
  </ul>

  <details>
    <summary>✅ Checklist settimana 2</summary>
    <div>
      <label><input type="checkbox"> Metodo di invito studiato</label>
      <label><input type="checkbox"> Prime conversazioni avviate</label>
      <label><input type="checkbox"> Presentazione seguita</label>
      <label><input type="checkbox"> Chiamata a 3 osservata</label>
      <label><input type="checkbox"> Lista Contatti aggiornata</label>
    </div>
  </details>

</div>

<!-- SETTIMANA 3 -->

<div class="ob-week">

  <span class="ob-label">SETTIMANA 3 · GIORNI 15–21</span>
  <h4>🔄 Follow-up e approfondimento</h4>

  <p>
    Questa settimana
    è dedicata a seguire
    le conversazioni già avviate
    e migliorare la comunicazione.
  </p>

  <ul>
    <li>Ricontattare le persone che desiderano approfondire.</li>
    <li>Ascoltare dubbi e domande sui servizi.</li>
    <li>Studiare la gestione delle obiezioni.</li>
    <li>Affiancarsi allo Sponsor quando necessario.</li>
    <li>Accompagnare eventuali prime iscrizioni in modo corretto.</li>
    <li>Verificare le condizioni di eventuali bonus iniziali.</li>
  </ul>

  <details>
    <summary>✅ Checklist settimana 3</summary>
    <div>
      <label><input type="checkbox"> Follow-up effettuati con consenso</label>
      <label><input type="checkbox"> Domande principali approfondite</label>
      <label><input type="checkbox"> Formazione sulle obiezioni seguita</label>
      <label><input type="checkbox"> Eventuali iscrizioni accompagnate</label>
      <label><input type="checkbox"> Confronto con Sponsor completato</label>
    </div>
  </details>

</div>

<!-- SETTIMANA 4 -->

<div class="ob-week">

  <span class="ob-label">SETTIMANA 4 · GIORNI 22–30</span>
  <h4>🏅 Verifica degli obiettivi e duplicazione</h4>

  <p>
    Nell'ultima settimana
    si valutano le attività svolte,
    le competenze sviluppate
    e i prossimi obiettivi.
  </p>

  <ul>
    <li>Verificare i progressi con lo Sponsor.</li>
    <li>Controllare le eventuali qualifiche raggiunte.</li>
    <li>Continuare a seguire i clienti e i contatti interessati.</li>
    <li>Affiancare eventuali nuovi Ambassador.</li>
    <li>Mostrare ai nuovi membri il percorso formativo.</li>
    <li>Preparare il piano dei 30 giorni successivi.</li>
  </ul>

  <details>
    <summary>✅ Checklist settimana 4</summary>
    <div>
      <label><input type="checkbox"> Progressi verificati</label>
      <label><input type="checkbox"> Qualifiche controllate</label>
      <label><input type="checkbox"> Nuovi membri affiancati, se presenti</label>
      <label><input type="checkbox"> Prossimi obiettivi concordati</label>
      <label><input type="checkbox"> Nuovo calendario personale preparato</label>
    </div>
  </details>

</div>

<div class="ob-warn">
  <strong>🥈 L'obiettivo Silver non è un risultato automatico.</strong>
  <br>
  Il piano operativo può prevedere
  di lavorare verso le prime
  tre iscrizioni idonee,
  ma non garantisce
  il raggiungimento del rank Silver
  o l'erogazione di $120 mensili.
  <br><br>
  La qualifica dipende
  da tutti i requisiti
  ufficiali del piano compensi.
</div>

<!-- RIEPILOGO ROADMAP -->

<h3 class="ob-title">
  📋 15. Il primo mese in una tabella
</h3>

<div class="ob-table-wrap">
  <table class="ob-table">
    <thead>
      <tr>
        <th>Periodo</th>
        <th>Focus</th>
        <th>Risultato operativo atteso</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Settimana 1</td>
        <td>Onboarding</td>
        <td>
          Accessi, strumenti,
          formazione iniziale
          e organizzazione.
        </td>
      </tr>
      <tr>
        <td>Settimana 2</td>
        <td>Condivisione</td>
        <td>
          Prime conversazioni,
          presentazioni e call a 3.
        </td>
      </tr>
      <tr>
        <td>Settimana 3</td>
        <td>Follow-up</td>
        <td>
          Approfondimenti,
          gestione domande
          ed eventuali iscrizioni.
        </td>
      </tr>
      <tr>
        <td>Settimana 4</td>
        <td>Crescita</td>
        <td>
          Verifica risultati,
          affiancamento
          e piano successivo.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- DUPLICAZIONE -->

<h3 class="ob-title">
  🌱 16. Che cosa significa duplicare la formazione?
</h3>

<div class="ob-flow">

  <div class="ob-flow-item">
    <strong>🎓 Tu impari</strong>
    <span>
      Segui la formazione,
      osservi e fai pratica.
    </span>
  </div>

  <div class="ob-arrow">→</div>

  <div class="ob-flow-item">
    <strong>🤝 Tu applichi</strong>
    <span>
      Utilizzi gli strumenti
      nelle attività quotidiane.
    </span>
  </div>

  <div class="ob-arrow">→</div>

  <div class="ob-flow-item">
    <strong>👥 Tu insegni</strong>
    <span>
      Accompagni un nuovo membro
      nello stesso percorso.
    </span>
  </div>

</div>

<div class="ob-note">
  <strong>💡 L'obiettivo della duplicazione</strong>
  <br>
  Non è insegnare alle persone
  a ripetere a memoria
  delle frasi.
  <br><br>
  È offrire un metodo chiaro,
  replicabile e comprensibile
  che le aiuti a sviluppare
  autonomia e competenze.
</div>

<!-- FAQ -->

<h3 class="ob-title">
  ❓ 17. Domande frequenti
</h3>

<details>
  <summary>⏱️ Devo fare la prima chiamata entro 48 ore?</summary>
  <div>
    È l'obiettivo organizzativo
    proposto dal team.
    <br><br>
    Se non è possibile,
    si può concordare
    il primo momento utile.
  </div>
</details>

<details>
  <summary>📚 Devo seguire tutte le accademie contemporaneamente?</summary>
  <div>
    No. È preferibile partire
    dalle basi e scegliere
    i percorsi più adatti
    alle proprie esigenze.
  </div>
</details>

<details>
  <summary>📱 Devo usare obbligatoriamente i social?</summary>
  <div>
    No. Il percorso può essere
    offline, online o ibrido,
    secondo i canali scelti.
  </div>
</details>

<details>
  <summary>🎥 Posso invitare un prospect a una formazione interna?</summary>
  <div>
    In generale è meglio distinguere
    le presentazioni pubbliche
    dagli incontri riservati
    agli Ambassador.
    <br><br>
    Verifica con l'organizzatore
    se un incontro è aperto
    agli ospiti esterni.
  </div>
</details>

<details>
  <summary>🤝 Devo sempre fare una chiamata a tre?</summary>
  <div>
    No. È uno strumento
    utile per imparare
    e chiarire le domande
    insieme a uno Sponsor,
    non un obbligo
    in ogni conversazione.
  </div>
</details>

<details>
  <summary>🏅 Devo raggiungere Silver entro 30 giorni?</summary>
  <div>
    No. È un possibile
    obiettivo operativo,
    non una condizione
    necessaria per completare
    la formazione iniziale.
  </div>
</details>

<!-- QUIZ -->

<h3 class="ob-title">
  🧠 18. Mettiti alla prova
</h3>

<div class="ob-quiz">
  <span class="ob-label">DOMANDA 01</span>
  <h4>Qual è l'obiettivo della prima chiamata di avviamento?</h4>
  <p>A. Mettere pressione per iscrivere subito clienti</p>
  <p>B. Conoscersi e organizzare i primi passi</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Serve a conoscere gli obiettivi,
      chiarire le domande
      e avviare la formazione.
    </div>
  </details>
</div>

<div class="ob-quiz">
  <span class="ob-label">DOMANDA 02</span>
  <h4>Quante ore al giorno prevede il profilo Starter?</h4>
  <p>A. 1 ora</p>
  <p>B. 3 ore</p>
  <p>C. 6 ore</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A. 1 ora.</strong>
      È un profilo orientativo
      proposto dal team.
    </div>
  </details>
</div>

<div class="ob-quiz">
  <span class="ob-label">DOMANDA 03</span>
  <h4>Quando è prevista la formazione The Travel Legends?</h4>
  <p>A. Lunedì alle 18:30</p>
  <p>B. Mercoledì alle 21:00</p>
  <p>C. Venerdì alle 20:00</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Mercoledì alle 21:00,
      secondo il calendario
      riportato negli appunti.
    </div>
  </details>
</div>

<div class="ob-quiz">
  <span class="ob-label">DOMANDA 04</span>
  <h4>Quali incontri sono pensati per invitare i prospect?</h4>
  <p>A. Le presentazioni pubbliche</p>
  <p>B. Tutte le call interne indistintamente</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A.</strong>
      Le presentazioni pubbliche
      sono dedicate alle persone
      interessate a conoscere
      la piattaforma e l'attività.
    </div>
  </details>
</div>

<div class="ob-quiz">
  <span class="ob-label">DOMANDA 05</span>
  <h4>A cosa serve la Social Academy?</h4>
  <p>A. A sviluppare comunicazione e contenuti social</p>
  <p>B. A calcolare i punti Dual Team</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A.</strong>
      Si concentra su social,
      personal branding
      e contenuti digitali.
    </div>
  </details>
</div>

<div class="ob-quiz">
  <span class="ob-label">DOMANDA 06</span>
  <h4>La roadmap dei 30 giorni garantisce Silver?</h4>
  <p>A. Sì</p>
  <p>B. No</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      È una guida operativa;
      i risultati dipendono
      dalle attività
      e dai requisiti effettivi.
    </div>
  </details>
</div>

<!-- CONCLUSIONE -->

<h3 class="ob-title">
  🎯 Il concetto da ricordare
</h3>

<div class="ob-final">

  <h4>🎓 Formazione, pratica e affiancamento</h4>

  <p>
    L'onboarding serve
    a dare al nuovo Ambassador
    strumenti e sicurezza
    per muovere i primi passi.
    <br><br>
    Il percorso comincia
    dalla prima chiamata
    con lo Sponsor,
    prosegue attraverso
    accademie, manuali
    e call settimanali
    e si consolida
    con la pratica.
    <br><br>
    <strong>
      Un buon sistema formativo
      deve essere semplice
      da capire e replicare,
      affinché ogni nuovo membro
      possa sviluppare
      autonomia nel tempo.
    </strong>
  </p>

</div>

<div class="ob-note">
  <strong>📚 Fonti e aggiornamento del calendario</strong>
  <br>
  Gli orari settimanali
  sono stati ricavati
  dagli appunti del team
  condivisi per questo capitolo.
  <br><br>
  Il percorso formativo,
  i profili di impegno
  e le accademie
  sono descritti sulla base
  del materiale fornito
  da The Travel Legends.
  <br><br>
  Gli appuntamenti possono cambiare:
  prima di invitare qualcuno
  occorre verificare
  il calendario aggiornato.
</div>

</div>
</section>
`);
