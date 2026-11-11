
window.registraSezione("backoffice", `
<section class="section" id="backoffice" data-group="formazione">

<style>
#backoffice {
  --bo-ink:#133850;
  --bo-muted:#536e7e;
  --bo-line:#dce8ef;
  --bo-teal:#0c8595;
}
#backoffice .bo-title {
  color:var(--bo-ink);
  font-size:23px;
  margin:35px 0 16px;
}
#backoffice .bo-lead {
  color:var(--bo-muted);
  font-size:14px;
  line-height:1.85;
  margin:12px 0 22px;
}
#backoffice .bo-kicker {
  display:inline-block;
  padding:7px 12px;
  border-radius:25px;
  background:#e6f7f3;
  color:#07828b;
  font-weight:800;
  font-size:11px;
  letter-spacing:.04em;
}
#backoffice .bo-hero {
  display:grid;
  grid-template-columns:minmax(0,1.12fr) minmax(0,1fr);
  gap:24px;
  align-items:center;
  margin:18px 0 30px;
}
#backoffice .bo-art {
  color:white;
  background:linear-gradient(145deg,#0d304c,#0e8b9c);
  padding:27px 20px;
  border-radius:22px;
}
#backoffice .bo-art h4 {
  color:white;
  font-size:21px;
  text-align:center;
  margin:12px 0;
}
#backoffice .bo-art p {
  color:#def4f7;
  text-align:center;
  font-size:12px;
  line-height:1.75;
}
#backoffice .bo-screen {
  background:#ffffff19;
  border:1px solid #ffffff55;
  border-radius:16px;
  padding:14px;
  margin:10px 0;
}
#backoffice .bo-screen-top {
  display:flex;
  align-items:center;
  gap:6px;
  border-bottom:1px solid #ffffff3c;
  padding-bottom:12px;
  font-size:12px;
  font-weight:750;
}
#backoffice .bo-dot {
  width:8px;
  height:8px;
  background:#dff5fa;
  border-radius:50%;
  display:inline-block;
}
#backoffice .bo-mini-grid {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:9px;
  margin-top:12px;
}
#backoffice .bo-mini-grid div {
  background:#ffffff23;
  border-radius:11px;
  padding:14px 9px;
  text-align:center;
  font-size:11px;
}
#backoffice .bo-mini-grid b {
  display:block;
  font-size:23px;
  margin-bottom:6px;
}
#backoffice .bo-two {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:15px;
  margin:19px 0;
}
#backoffice .bo-three {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:14px;
  margin:19px 0;
}
#backoffice .bo-card {
  min-width:0;
  background:#f5f9fc;
  border:1px solid var(--bo-line);
  border-radius:17px;
  padding:20px;
}
#backoffice .bo-card.blue {
  background:#edf7ff;
  border-color:#d0e5f7;
}
#backoffice .bo-card.green {
  background:#eefaf4;
  border-color:#d0eadc;
}
#backoffice .bo-card.gold {
  background:#fff8e9;
  border-color:#eee0b8;
}
#backoffice .bo-card.purple {
  background:#f6f0ff;
  border-color:#e6dafa;
}
#backoffice .bo-card h4 {
  font-size:17px;
  color:#153a53;
  margin:9px 0;
}
#backoffice .bo-card p {
  color:var(--bo-muted);
  font-size:13px;
  line-height:1.8;
  margin:8px 0;
}
#backoffice .bo-icon {
  display:block;
  font-size:30px;
  margin:0 0 9px;
}
#backoffice .bo-number {
  display:block;
  font-size:29px;
  font-weight:850;
  color:#0b8395;
  margin:10px 0;
}
#backoffice .bo-number small {
  color:#6a8290;
  font-size:12px;
  font-weight:600;
}
#backoffice .bo-note {
  border-left:4px solid #1ba995;
  border-radius:11px;
  padding:17px;
  color:#315d57;
  background:#eaf8f4;
  font-size:13px;
  line-height:1.85;
  margin:20px 0;
}
#backoffice .bo-warn {
  border-left:4px solid #d8a445;
  border-radius:11px;
  padding:17px;
  color:#735b33;
  background:#fff8e9;
  font-size:13px;
  line-height:1.85;
  margin:20px 0;
}
#backoffice .bo-flow {
  display:flex;
  align-items:stretch;
  gap:9px;
  margin:23px 0;
}
#backoffice .bo-flow-item {
  flex:1;
  min-width:0;
  background:#eff8fa;
  border:1px solid #d6e9ed;
  padding:15px 10px;
  border-radius:13px;
  text-align:center;
}
#backoffice .bo-flow-item strong {
  display:block;
  color:#164d66;
  font-size:14px;
  margin-bottom:7px;
}
#backoffice .bo-flow-item span {
  color:#597482;
  font-size:12px;
  line-height:1.65;
}
#backoffice .bo-arrow {
  font-size:22px;
  color:#0994a5;
  font-weight:800;
  align-self:center;
}
#backoffice .bo-steps {
  border:1px solid var(--bo-line);
  border-radius:17px;
  padding:5px 20px;
  background:#f8fbfd;
  margin:20px 0;
}
#backoffice .bo-step {
  display:flex;
  align-items:flex-start;
  gap:14px;
  padding:18px 0;
  border-bottom:1px solid #e1ebf0;
}
#backoffice .bo-step:last-child {
  border-bottom:0;
}
#backoffice .bo-step-n {
  display:flex;
  align-items:center;
  justify-content:center;
  background:#0c8395;
  color:white;
  border-radius:50%;
  width:36px;
  min-width:36px;
  height:36px;
  font-size:14px;
  font-weight:800;
}
#backoffice .bo-step-body {
  flex:1;
  min-width:0;
}
#backoffice .bo-step-body strong {
  display:block;
  color:#163b54;
  font-size:15px;
}
#backoffice .bo-step-body p {
  color:var(--bo-muted);
  font-size:13px;
  line-height:1.8;
  margin:7px 0;
}
#backoffice .bo-table-wrap {
  overflow-x:auto;
  border:1px solid var(--bo-line);
  border-radius:15px;
  margin:20px 0;
}
#backoffice .bo-table {
  border-collapse:collapse;
  min-width:550px;
  width:100%;
}
#backoffice .bo-table th {
  background:#123650;
  color:white;
  text-align:left;
  font-size:12px;
  padding:14px 12px;
}
#backoffice .bo-table td {
  padding:13px 12px;
  color:#3c5e70;
  border-bottom:1px solid #e1eaf0;
  font-size:12px;
  line-height:1.7;
}
#backoffice .bo-table tr:nth-child(even) td {
  background:#f4f8fb;
}
#backoffice .bo-table tr:last-child td {
  border-bottom:0;
}
#backoffice .bo-table td:first-child {
  color:#153a53;
  font-weight:750;
}
#backoffice .bo-chip {
  display:inline-block;
  border-radius:25px;
  padding:6px 10px;
  background:#e4f7f2;
  color:#087c82;
  font-size:11px;
  font-weight:800;
}
#backoffice .bo-case {
  border:1px solid var(--bo-line);
  border-radius:17px;
  padding:20px;
  margin:17px 0;
  background:#f8fbfd;
}
#backoffice .bo-case h4 {
  font-size:17px;
  color:#153a53;
  margin:10px 0;
}
#backoffice .bo-case p {
  font-size:13px;
  line-height:1.85;
  color:var(--bo-muted);
}
#backoffice .bo-quiz {
  padding:20px;
  margin:16px 0;
  background:#f6f1ff;
  border:1px solid #e7dafa;
  border-radius:17px;
}
#backoffice .bo-quiz h4 {
  color:#263c55;
  font-size:17px;
  margin:10px 0;
}
#backoffice .bo-quiz p {
  color:#59677d;
  font-size:13px;
  line-height:1.8;
}
#backoffice .bo-quiz details {
  background:white;
  border-radius:10px;
  padding:12px;
  margin-top:12px;
}
#backoffice details summary {
  cursor:pointer;
  color:#20465b;
  font-weight:750;
}
#backoffice details > div {
  font-size:13px;
  color:#506b7d;
  line-height:1.8;
  margin-top:11px;
}
#backoffice .bo-final {
  background:linear-gradient(135deg,#0d3655,#117d92);
  padding:25px;
  border-radius:18px;
  color:white;
  margin:25px 0;
}
#backoffice .bo-final h4 {
  color:white;
  margin:0 0 12px;
  font-size:21px;
}
#backoffice .bo-final p {
  color:#e3f5f7;
  font-size:14px;
  line-height:1.85;
}
@media(max-width:820px) {
  #backoffice .bo-three {
    grid-template-columns:1fr;
  }
}
@media(max-width:700px) {
  #backoffice .bo-hero,
  #backoffice .bo-two {
    grid-template-columns:1fr;
  }
  #backoffice .bo-flow {
    flex-direction:column;
  }
  #backoffice .bo-arrow {
    transform:rotate(90deg);
  }
  #backoffice .bo-title {
    font-size:21px;
  }
}
</style>

<!-- INTESTAZIONE -->

<div class="section-head">
  <span class="kicker">
    Capitolo 13 · Strumenti Ambassador
  </span>
  <h2>Back Office e strumenti digitali</h2>
  <p>
    Impara a conoscere Biz Center,
    dashboard, struttura della rete,
    referral link, Holding Tank,
    E-Wallet, Travel Advantage
    e gli strumenti formativi
    della community.
  </p>
</div>

<div class="section-body">

<!-- INTRODUZIONE -->

<div class="bo-hero">
  <div>
    <span class="bo-kicker">IL TUO CENTRO DI CONTROLLO</span>

    <h3 class="bo-title">
      💻 Che cos'è il Back Office?
    </h3>

    <p class="bo-lead">
      Il <strong>Back Office</strong>
      è l'insieme degli strumenti digitali
      che permettono
      a un Lifestyle Ambassador
      di gestire la propria attività.
      <br><br>
      Attraverso questi strumenti
      puoi consultare
      la produzione della rete,
      i link di iscrizione,
      le qualifiche,
      le commissioni
      e le risorse disponibili.
      <br><br>
      L'ecosistema comprende
      strumenti aziendali MWR Life
      e risorse aggiuntive
      della community
      <strong>The Travel Legends</strong>.
    </p>
  </div>

  <div class="bo-art">
    <div class="bo-screen">

      <div class="bo-screen-top">
        <span class="bo-dot"></span>
        <span class="bo-dot"></span>
        <span class="bo-dot"></span>
        &nbsp; MWR LIFE · BIZ CENTER
      </div>

      <div class="bo-mini-grid">
        <div>
          <b>🏅</b>
          Qualifiche
        </div>
        <div>
          <b>👥</b>
          Team
        </div>
        <div>
          <b>🔗</b>
          Referral link
        </div>
        <div>
          <b>💰</b>
          E-Wallet
        </div>
      </div>
    </div>

    <h4>Tutto in un ecosistema</h4>
    <p>
      La grafica rappresenta
      le principali funzioni,
      non una schermata reale.
    </p>
  </div>
</div>

<!-- MAPPA STRUMENTI -->

<h3 class="bo-title">
  🧩 1. Conoscere i quattro ambienti
</h3>

<div class="bo-two">

  <div class="bo-card blue">
    <span class="bo-icon">💼</span>
    <h4>MWR Life Biz Center</h4>
    <p>
      Gestione dell'attività Ambassador:
      produzione, rete,
      qualifiche, link,
      strumenti commerciali
      e posizionamenti disponibili.
    </p>
  </div>

  <div class="bo-card green">
    <span class="bo-icon">💳</span>
    <h4>E-Wallet</h4>
    <p>
      Ambiente dedicato
      alla consultazione
      e alla gestione
      delle commissioni,
      dei pagamenti
      e delle opzioni di prelievo.
    </p>
  </div>

  <div class="bo-card gold">
    <span class="bo-icon">✈️</span>
    <h4>Travel Advantage</h4>
    <p>
      Portale e applicazione
      per cercare servizi di viaggio,
      utilizzare i benefici
      della membership
      e gestire Guest Pass
      e account.
    </p>
  </div>

  <div class="bo-card purple">
    <span class="bo-icon">🎓</span>
    <h4>The Travel Legends</h4>
    <p>
      Ecosistema formativo
      della community:
      accademie, materiale
      promozionale, assistenti IA,
      gruppi e formazione.
    </p>
  </div>

</div>

<div class="bo-note">
  <strong>💡 La differenza fondamentale</strong>
  <br>
  Il Biz Center serve
  a gestire l'attività commerciale.
  <br><br>
  Travel Advantage serve
  a utilizzare il servizio di viaggio.
  <br><br>
  The Travel Legends offre
  supporto formativo aggiuntivo
  e non sostituisce
  i sistemi ufficiali MWR Life.
</div>

<!-- BIZ CENTER -->

<h3 class="bo-title">
  💼 2. MWR Life Biz Center
</h3>

<p class="bo-lead">
  Il Biz Center è la plancia
  di gestione dell'Ambassador.
  <br><br>
  L'accesso ai servizi aziendali
  avviene attraverso i canali
  ufficiali di MWR Life.
  Le funzioni disponibili
  possono dipendere
  dal tipo di account,
  dal Paese e dagli aggiornamenti.
</p>

<div class="bo-card blue">
  <span class="bo-icon">🌐</span>
  <h4>Accesso aziendale</h4>
  <p>
    Sito ufficiale:
    <a href="https://www.mwrlife.com"
       target="_blank"
       rel="noopener noreferrer">
      www.mwrlife.com
    </a>
    <br><br>
    Accedi utilizzando
    le credenziali
    del tuo account MWR Life.
    <br><br>
    Per individuare la sezione
    corretta del Biz Center,
    segui il percorso mostrato
    nell'account o le indicazioni
    ufficiali ricevute.
  </p>
</div>

<!-- DASHBOARD -->

<h3 class="bo-title">
  📊 3. Dashboard: cosa puoi monitorare?
</h3>

<div class="bo-three">

  <div class="bo-card blue">
    <span class="bo-icon">🏅</span>
    <h4>Qualifica attuale</h4>
    <p>
      Verifica il rank mostrato
      dal sistema e gli eventuali
      indicatori di avanzamento.
    </p>
  </div>

  <div class="bo-card green">
    <span class="bo-icon">⚖️</span>
    <h4>Punti Dual Team</h4>
    <p>
      Consulta i punti
      attribuiti alla struttura
      e i dati relativi
      alle gambe della rete.
    </p>
  </div>

  <div class="bo-card gold">
    <span class="bo-icon">🤝</span>
    <h4>Team di Sponsorizzazione</h4>
    <p>
      Controlla la produzione
      collegata alle persone
      che hai sponsorizzato
      e ai livelli successivi.
    </p>
  </div>

  <div class="bo-card purple">
    <span class="bo-icon">📈</span>
    <h4>Progressi di carriera</h4>
    <p>
      Verifica eventuali obiettivi
      e requisiti indicati
      per le qualifiche successive.
    </p>
  </div>

  <div class="bo-card blue">
    <span class="bo-icon">👥</span>
    <h4>Organizzazione</h4>
    <p>
      Consulta la struttura
      disponibile e il posizionamento
      dei membri nel Dual Team.
    </p>
  </div>

  <div class="bo-card green">
    <span class="bo-icon">📋</span>
    <h4>Attività e strumenti</h4>
    <p>
      Accedi alle funzioni
      di gestione previste
      dal tuo profilo
      e ai materiali aziendali.
    </p>
  </div>

</div>

<div class="bo-warn">
  <strong>⚠️ Dashboard e commissioni non sono la stessa cosa.</strong>
  <br>
  La presenza di punti
  o di una qualifica
  non dimostra da sola
  che una commissione
  sia già stata maturata
  o liquidata.
  <br><br>
  Per controllare gli importi
  effettivamente riconosciuti
  occorre consultare
  la relativa sezione finanziaria.
</div>

<!-- DUE RETI -->

<h3 class="bo-title">
  🕸️ 4. Consultare la propria rete
</h3>

<div class="bo-two">

  <div class="bo-card blue">
    <span class="bo-icon">🤝</span>
    <h4>Team di Sponsorizzazione</h4>
    <p>
      Mostra la relazione
      tra Sponsor e persone iscritte.
      <br><br>
      Comprende i diretti
      e i livelli successivi
      della sponsorizzazione.
    </p>
  </div>

  <div class="bo-card green">
    <span class="bo-icon">⚖️</span>
    <h4>Dual Team</h4>
    <p>
      Mostra la struttura binaria,
      articolata in gamba sinistra
      e gamba destra.
      <br><br>
      Può comprendere
      membri posizionati
      dalla linea superiore,
      secondo le regole del sistema.
    </p>
  </div>

</div>

<div class="bo-flow">
  <div class="bo-flow-item">
    <strong>👤 Nuovo membro</strong>
    <span>
      Completa un'iscrizione idonea.
    </span>
  </div>

  <div class="bo-arrow">→</div>

  <div class="bo-flow-item">
    <strong>🤝 Sponsorizzazione</strong>
    <span>
      È collegato
      a chi lo ha iscritto.
    </span>
  </div>

  <div class="bo-arrow">→</div>

  <div class="bo-flow-item">
    <strong>⚖️ Posizionamento</strong>
    <span>
      Viene assegnato
      alla struttura Dual Team.
    </span>
  </div>
</div>

<div class="bo-note">
  <strong>📚 Vuoi approfondire le due strutture?</strong>
  <br>
  Nel capitolo
  <strong>Qualifiche e carriera</strong>
  trovi gli esempi
  di gamba destra,
  gamba sinistra,
  sponsorizzazione
  e spillover.
</div>

<!-- HOLDING TANK -->

<h3 class="bo-title">
  📦 5. Holding Tank: la sacca di attesa
</h3>

<p class="bo-lead">
  La Holding Tank è descritta
  nei materiali formativi
  come un'area temporanea
  per gestire il posizionamento
  dei nuovi Ambassador
  nella struttura binaria.
</p>

<div class="bo-three">

  <div class="bo-card blue">
    <span class="bo-icon">📥</span>
    <h4>Nuovo Ambassador</h4>
    <p>
      Il nuovo membro
      viene inizialmente
      associato all'area
      di attesa del sistema,
      quando prevista.
    </p>
  </div>

  <div class="bo-card green">
    <span class="bo-icon">📍</span>
    <h4>Scelta della gamba</h4>
    <p>
      Il sistema può consentire
      di scegliere manualmente
      il posizionamento
      nella gamba sinistra
      oppure destra.
    </p>
  </div>

  <div class="bo-card gold">
    <span class="bo-icon">⏳</span>
    <h4>Scadenza operativa</h4>
    <p>
      Il materiale formativo
      indica una finestra
      di 30 giorni
      per il posizionamento.
    </p>
  </div>

</div>

<div class="bo-steps">

  <div class="bo-step">
    <div class="bo-step-n">1</div>
    <div class="bo-step-body">
      <strong>Accedi alla gestione della rete</strong>
      <p>
        Cerca nell'account
        la funzione dedicata
        al Dual Team
        o alla Holding Tank.
      </p>
    </div>
  </div>

  <div class="bo-step">
    <div class="bo-step-n">2</div>
    <div class="bo-step-body">
      <strong>Consulta il nuovo Ambassador</strong>
      <p>
        Controlla le informazioni
        disponibili e l'eventuale
        data limite di piazzamento.
      </p>
    </div>
  </div>

  <div class="bo-step">
    <div class="bo-step-n">3</div>
    <div class="bo-step-body">
      <strong>Verifica il posizionamento</strong>
      <p>
        Esamina la struttura
        e, se necessario,
        confrontati con lo Sponsor
        prima di confermare.
      </p>
    </div>
  </div>

  <div class="bo-step">
    <div class="bo-step-n">4</div>
    <div class="bo-step-body">
      <strong>Conferma e ricontrolla</strong>
      <p>
        Completa l'operazione
        soltanto dopo aver compreso
        le conseguenze
        del posizionamento.
      </p>
    </div>
  </div>

</div>

<div class="bo-warn">
  <strong>⚠️ Verifica le scadenze direttamente nel Biz Center.</strong>
  <br>
  Il materiale del team
  indica una finestra
  di 30 giorni.
  <br><br>
  Sono inoltre descritte
  regole di posizionamento
  automatico e possibili
  correzioni entro 72 ore.
  <br><br>
  Queste condizioni
  possono avere limitazioni:
  prima di intervenire
  controlla le istruzioni
  aggiornate del sistema.
</div>

<!-- REFERRAL LINK -->

<h3 class="bo-title">
  🔗 6. Referral Link: i tuoi collegamenti personali
</h3>

<p class="bo-lead">
  I Referral Link
  permettono di collegare
  una nuova iscrizione
  all'Ambassador che
  ha condiviso il collegamento.
</p>

<div class="bo-two">

  <div class="bo-card green">
    <span class="bo-icon">✈️</span>
    <h4>Link cliente Travel Advantage</h4>
    <p>
      Può essere utilizzato
      per indirizzare
      una persona interessata
      alla registrazione
      come cliente
      della piattaforma.
    </p>
  </div>

  <div class="bo-card blue">
    <span class="bo-icon">💼</span>
    <h4>Link opportunità Ambassador</h4>
    <p>
      Può essere utilizzato
      per avviare
      il percorso di iscrizione
      di una persona interessata
      all'attività.
    </p>
  </div>

</div>

<div class="bo-steps">

  <div class="bo-step">
    <div class="bo-step-n">1</div>
    <div class="bo-step-body">
      <strong>Apri la sezione dei link personali</strong>
      <p>
        Individua nel Biz Center
        la funzione dedicata
        agli inviti o ai Referral Link.
      </p>
    </div>
  </div>

  <div class="bo-step">
    <div class="bo-step-n">2</div>
    <div class="bo-step-body">
      <strong>Scegli il collegamento corretto</strong>
      <p>
        Verifica se la persona
        desidera una membership viaggio
        oppure informazioni
        sull'attività Ambassador.
      </p>
    </div>
  </div>

  <div class="bo-step">
    <div class="bo-step-n">3</div>
    <div class="bo-step-body">
      <strong>Controlla il link prima di inviarlo</strong>
      <p>
        Apri il collegamento
        e verifica che porti
        alla pagina prevista.
      </p>
    </div>
  </div>

  <div class="bo-step">
    <div class="bo-step-n">4</div>
    <div class="bo-step-body">
      <strong>Condividilo con consenso</strong>
      <p>
        Invia il link soltanto
        a chi ha espresso
        interesse a riceverlo.
      </p>
    </div>
  </div>

</div>

<div class="bo-note">
  <strong>💡 Un errore da evitare</strong>
  <br>
  Non confondere
  il link personale di registrazione
  con il link di un Guest Pass.
  <br><br>
  Hanno funzioni differenti
  e vanno utilizzati
  in base alle esigenze
  del destinatario.
</div>

<!-- TOKEN -->

<h3 class="bo-title">
  🪙 7. Il sistema Token
</h3>

<div class="bo-card gold">
  <span class="bo-icon">🪙</span>
  <h4>A cosa servono i gettoni?</h4>

  <p>
    Il materiale formativo
    descrive i Token
    come strumenti interni
    che possono essere utilizzati,
    dove consentito,
    per operazioni
    come nuove iscrizioni,
    rinnovi o upgrade.
    <br><br>
    È indicata anche
    la possibilità
    di acquistarli
    o trasferirli
    ad altri account,
    secondo le regole
    della piattaforma.
  </p>
</div>

<div class="bo-flow">
  <div class="bo-flow-item">
    <strong>🪙 Token</strong>
    <span>
      Disponibile
      secondo le condizioni
      dell'account.
    </span>
  </div>

  <div class="bo-arrow">→</div>

  <div class="bo-flow-item">
    <strong>👤 Destinatario</strong>
    <span>
      Cliente o Ambassador
      ammesso dall'operazione.
    </span>
  </div>

  <div class="bo-arrow">→</div>

  <div class="bo-flow-item">
    <strong>💳 Utilizzo</strong>
    <span>
      Pagamento o operazione
      ammessa dal sistema.
    </span>
  </div>
</div>

<div class="bo-warn">
  <strong>⚠️ Token e denaro non vanno confusi.</strong>
  <br>
  Verifica valore,
  condizioni d'uso,
  trasferibilità,
  eventuali limiti
  e rimborsabilità
  prima di acquistare
  o trasferire Token.
  <br><br>
  Non considerarli
  automaticamente convertibili
  in denaro o equivalenti
  a un saldo bancario.
</div>

<!-- BUSINESS HUB -->

<h3 class="bo-title">
  🤖 8. MWR Life Business HUB
</h3>

<p class="bo-lead">
  Il Business HUB è descritto
  come uno strumento opzionale
  per la gestione dei contatti
  e delle attività digitali
  di marketing.
</p>

<div class="bo-card purple">
  <span class="bo-kicker">STRUMENTO OPZIONALE</span>

  <span class="bo-number">
    $14.90 <small>/mese indicati nel materiale</small>
  </span>

  <h4>CRM e marketing integrato</h4>

  <p>
    Il sistema viene descritto
    come una soluzione
    che può riunire
    pagine di presentazione,
    gestione dei potenziali clienti
    e strumenti di automazione.
  </p>
</div>

<div class="bo-three">

  <div class="bo-card blue">
    <span class="bo-icon">🌐</span>
    <h4>Landing Page</h4>
    <p>
      Pagine destinate
      a raccogliere
      manifestazioni di interesse
      o presentare
      un servizio.
    </p>
  </div>

  <div class="bo-card green">
    <span class="bo-icon">🎥</span>
    <h4>Video informativi</h4>
    <p>
      Strumenti per ospitare
      o condividere contenuti
      di presentazione.
    </p>
  </div>

  <div class="bo-card gold">
    <span class="bo-icon">📊</span>
    <h4>Monitoraggio interazioni</h4>
    <p>
      Funzioni descritte
      per seguire
      le interazioni
      dei contatti
      e ricevere notifiche.
    </p>
  </div>

</div>

<div class="bo-note">
  <strong>💡 Che cos'è un CRM?</strong>
  <br>
  CRM significa
  <em>Customer Relationship Management</em>.
  <br><br>
  È uno strumento
  per organizzare
  le relazioni con i contatti,
  registrare attività
  e pianificare
  i successivi appuntamenti.
</div>

<div class="bo-warn">
  <strong>📌 Il Business HUB non è un requisito universale.</strong>
  <br>
  Il prezzo di $14.90/mese
  e le funzionalità elencate
  provengono dal riepilogo formativo.
  <br><br>
  Prima dell'attivazione
  verifica disponibilità,
  prezzo aggiornato,
  condizioni, eventuale prova
  e modalità di disdetta.
</div>

<!-- E WALLET -->

<h3 class="bo-title">
  💰 9. E-Wallet: gestire le commissioni
</h3>

<p class="bo-lead">
  L'E-Wallet è l'ambiente
  finanziario descritto
  per la gestione
  delle commissioni maturate
  dall'attività Ambassador.
</p>

<div class="bo-flow">

  <div class="bo-flow-item">
    <strong>🤝 Produzione</strong>
    <span>
      Operazioni idonee
      previste dal piano.
    </span>
  </div>

  <div class="bo-arrow">→</div>

  <div class="bo-flow-item">
    <strong>🧮 Calcolo</strong>
    <span>
      Applicazione dei requisiti
      e delle commissioni.
    </span>
  </div>

  <div class="bo-arrow">→</div>

  <div class="bo-flow-item">
    <strong>💰 E-Wallet</strong>
    <span>
      Commissioni approvate
      e disponibili.
    </span>
  </div>

  <div class="bo-arrow">→</div>

  <div class="bo-flow-item">
    <strong>🏦 Prelievo</strong>
    <span>
      Modalità disponibili
      per il proprio account.
    </span>
  </div>

</div>

<div class="bo-card green">
  <span class="bo-icon">📅</span>
  <h4>Quando vengono accreditate?</h4>

  <p>
    I materiali indicano
    una cadenza
    di liquidazione settimanale,
    con il <strong>venerdì</strong>
    come giorno di riferimento.
    <br><br>
    Alcune tipologie
    di compenso potrebbero seguire
    cicli di calcolo differenti.
    <br><br>
    Occorre distinguere
    la commissione calcolata,
    quella approvata
    e il saldo effettivamente
    disponibile per il prelievo.
  </p>
</div>

<!-- METODI -->

<h3 class="bo-title">
  💳 10. Le modalità di utilizzo del saldo
</h3>

<div class="bo-three">

  <div class="bo-card blue">
    <span class="bo-icon">🏦</span>
    <h4>Bonifico bancario</h4>
    <p>
      Trasferimento verso
      un conto bancario,
      se disponibile
      per il proprio account.
    </p>
  </div>

  <div class="bo-card green">
    <span class="bo-icon">💳</span>
    <h4>Carta di debito</h4>
    <p>
      Possibile utilizzo
      tramite carta aziendale
      Visa o Mastercard,
      secondo il servizio attivo.
    </p>
  </div>

  <div class="bo-card gold">
    <span class="bo-icon">🎁</span>
    <h4>Gift Card</h4>
    <p>
      Eventuale conversione
      del valore disponibile
      in buoni digitali,
      dove prevista.
    </p>
  </div>

  <div class="bo-card purple">
    <span class="bo-icon">₿</span>
    <h4>Bitcoin</h4>
    <p>
      Opzione in criptovaluta
      riportata dal materiale,
      soggetta alla disponibilità
      del servizio.
    </p>
  </div>

  <div class="bo-card blue">
    <span class="bo-icon">✈️</span>
    <h4>Crediti Viaggio</h4>
    <p>
      Possibile destinazione
      delle commissioni
      a Crediti Viaggio,
      secondo le condizioni
      di conversione.
    </p>
  </div>

  <div class="bo-card green">
    <span class="bo-icon">📋</span>
    <h4>Storico movimenti</h4>
    <p>
      Verifica di accrediti,
      trasferimenti
      e operazioni,
      tramite le funzioni
      disponibili nel portale.
    </p>
  </div>

</div>

<div class="bo-warn">
  <strong>⚠️ Verifica commissioni e disponibilità.</strong>
  <br>
  Non tutte le modalità
  potrebbero essere attive
  in ogni Paese.
  <br><br>
  Possono essere previsti
  costi di trasferimento,
  limiti, identificazione,
  cambio valutario
  e obblighi fiscali.
</div>

<!-- RINNOVI -->

<h3 class="bo-title">
  🔄 11. Rinnovi e protezione delle qualifiche
</h3>

<div class="bo-card gold">
  <span class="bo-icon">🛡️</span>
  <h4>La funzione descritta nei materiali</h4>

  <p>
    Il riepilogo di Paolo
    descrive un possibile
    meccanismo che utilizza
    il saldo E-Wallet
    per predisporre
    Token destinati
    al rinnovo di membership
    e licenza.
    <br><br>
    Viene citato
    un anticipo di
    <strong>60 giorni
    rispetto alla scadenza</strong>.
  </p>
</div>

<div class="bo-warn">
  <strong>⚠️ Non considerare questa funzione una protezione automatica garantita.</strong>
  <br>
  Il materiale non chiarisce
  le condizioni di attivazione,
  i limiti, il consenso richiesto,
  la disponibilità del saldo
  o cosa accada in caso
  di pagamento non riuscito.
  <br><br>
  Controlla sempre
  la data di scadenza
  della membership
  e della licenza
  nell'account ufficiale.
  <br><br>
  Non fare affidamento
  su una conversione automatica
  senza averne verificato
  l'effettiva attivazione.
</div>

<!-- TRAVEL ADVANTAGE -->

<h3 class="bo-title">
  ✈️ 12. La piattaforma Travel Advantage
</h3>

<p class="bo-lead">
  Travel Advantage
  è l'ambiente utilizzato
  dal cliente e dall'Ambassador
  per cercare
  e prenotare
  i servizi di viaggio
  disponibili nella membership.
</p>

<div class="bo-three">

  <div class="bo-card blue">
    <span class="bo-icon">🏨</span>
    <h4>Alloggi</h4>
    <p>
      Ricerca di hotel,
      resort e altri alloggi
      disponibili nel portale.
    </p>
  </div>

  <div class="bo-card green">
    <span class="bo-icon">🚗</span>
    <h4>Trasporti</h4>
    <p>
      Ricerca dei servizi
      di trasporto inclusi
      nelle funzionalità
      del piano attivo.
    </p>
  </div>

  <div class="bo-card gold">
    <span class="bo-icon">🌍</span>
    <h4>Life Experience</h4>
    <p>
      Consultazione
      delle esperienze
      disponibili,
      secondo i requisiti
      di accesso e utilizzo.
    </p>
  </div>

  <div class="bo-card purple">
    <span class="bo-icon">🤖</span>
    <h4>Pianificatore IA</h4>
    <p>
      Funzioni di assistenza
      nella pianificazione,
      quando disponibili
      nella piattaforma.
    </p>
  </div>

  <div class="bo-card blue">
    <span class="bo-icon">🎟️</span>
    <h4>Guest Pass</h4>
    <p>
      Gestione degli inviti
      gratuiti di prova
      secondo il saldo
      e le regole
      della membership.
    </p>
  </div>

  <div class="bo-card green">
    <span class="bo-icon">👤</span>
    <h4>Account personale</h4>
    <p>
      Informazioni
      della membership,
      benefici disponibili
      e impostazioni
      dell'account.
    </p>
  </div>

</div>

<!-- GUEST PASS -->

<h3 class="bo-title">
  🎟️ 13. Come condividere i Guest Pass
</h3>

<div class="bo-three">

  <div class="bo-card blue">
    <span class="bo-icon">🔗</span>
    <h4>Link personalizzato</h4>
    <p>
      Invito digitale
      da condividere
      con una persona
      interessata
      a provare il servizio.
    </p>
  </div>

  <div class="bo-card green">
    <span class="bo-icon">📱</span>
    <h4>QR Code</h4>
    <p>
      Codice utilizzabile
      nei contesti
      in cui è utile
      aprire rapidamente
      la pagina di invito.
    </p>
  </div>

  <div class="bo-card gold">
    <span class="bo-icon">🖨️</span>
    <h4>Formato stampabile</h4>
    <p>
      Invito destinato
      a eventi o attività
      commerciali,
      se la funzione
      è disponibile.
    </p>
  </div>

</div>

<div class="bo-steps">

  <div class="bo-step">
    <div class="bo-step-n">1</div>
    <div class="bo-step-body">
      <strong>Apri la gestione Guest Pass</strong>
      <p>
        Cerca nella piattaforma
        la sezione dedicata
        agli inviti disponibili.
      </p>
    </div>
  </div>

  <div class="bo-step">
    <div class="bo-step-n">2</div>
    <div class="bo-step-body">
      <strong>Verifica la disponibilità</strong>
      <p>
        Controlla quanti inviti
        puoi utilizzare
        e le condizioni applicabili.
      </p>
    </div>
  </div>

  <div class="bo-step">
    <div class="bo-step-n">3</div>
    <div class="bo-step-body">
      <strong>Scegli il formato</strong>
      <p>
        Seleziona link,
        QR Code o formato
        stampabile,
        quando previsto.
      </p>
    </div>
  </div>

  <div class="bo-step">
    <div class="bo-step-n">4</div>
    <div class="bo-step-body">
      <strong>Condividi e chiarisci le condizioni</strong>
      <p>
        Spiega alla persona
        che cosa permette
        di fare il Guest Pass
        e quali sono
        i relativi limiti.
      </p>
    </div>
  </div>

</div>

<div class="bo-note">
  <strong>📚 Dove trovare tutte le regole?</strong>
  <br>
  Il capitolo <strong>Guest Pass</strong>
  approfondisce
  disponibilità, utilizzo,
  prenotazioni consentite
  e differenze rispetto
  alla membership VIP.
</div>

<!-- ACCOUNT VIAGGIO -->

<h3 class="bo-title">
  ⭐ 14. Punti Fedeltà, Crediti Viaggio e account
</h3>

<div class="bo-three">

  <div class="bo-card gold">
    <span class="bo-icon">⭐</span>
    <h4>Punti Fedeltà</h4>
    <p>
      Controlla il saldo
      e i benefici
      accumulati secondo
      il piano di viaggio.
      <br><br>
      Sono diversi
      dai punti Dual Team.
    </p>
  </div>

  <div class="bo-card green">
    <span class="bo-icon">💵</span>
    <h4>Crediti Viaggio</h4>
    <p>
      Controlla il saldo
      utilizzabile per le spese
      idonee secondo
      le condizioni
      della piattaforma.
    </p>
  </div>

  <div class="bo-card blue">
    <span class="bo-icon">👥</span>
    <h4>Viaggiatori aggiuntivi</h4>
    <p>
      Gestisci
      le persone aggiuntive
      ammesse dal piano,
      se la tua membership
      prevede questa funzione.
    </p>
  </div>

</div>

<div class="bo-warn">
  <strong>📌 Tre saldi distinti</strong>
  <br>
  <strong>Punti Dual Team:</strong>
  utilizzati nel sistema
  delle qualifiche
  e dei bonus di rete.
  <br><br>
  <strong>Punti Fedeltà:</strong>
  beneficio legato
  alle prenotazioni
  e alla membership viaggio.
  <br><br>
  <strong>Crediti Viaggio:</strong>
  valore utilizzabile
  per operazioni di viaggio
  secondo le condizioni previste.
</div>

<!-- COMMUNITY -->

<h3 class="bo-title">
  🎓 15. Gli strumenti di The Travel Legends
</h3>

<p class="bo-lead">
  Oltre alle funzioni
  messe a disposizione
  da MWR Life,
  la community The Travel Legends
  propone strumenti formativi
  e materiali di supporto
  per gli Ambassador.
</p>

<div class="bo-three">

  <div class="bo-card blue">
    <span class="bo-icon">📚</span>
    <h4>Networker School</h4>
    <p>
      Videocorsi
      su comunicazione,
      formazione,
      marketing e sviluppo
      dell'attività.
    </p>
  </div>

  <div class="bo-card green">
    <span class="bo-icon">📱</span>
    <h4>Social Academy</h4>
    <p>
      Formazione dedicata
      a Instagram, TikTok,
      Reels, caroselli
      e contenuti digitali.
    </p>
  </div>

  <div class="bo-card purple">
    <span class="bo-icon">🤖</span>
    <h4>Assistente Leggendario IA</h4>
    <p>
      Supporto alla creazione
      di contenuti,
      comunicazioni
      e pianificazione
      di attività.
    </p>
  </div>

  <div class="bo-card gold">
    <span class="bo-icon">🌐</span>
    <h4>Funnel digitali</h4>
    <p>
      Percorsi informativi
      e pagine di presentazione
      destinati a persone
      interessate al progetto.
    </p>
  </div>

  <div class="bo-card blue">
    <span class="bo-icon">🎨</span>
    <h4>Materiali Canva</h4>
    <p>
      Modelli grafici
      per locandine,
      presentazioni,
      eventi e contenuti
      promozionali.
    </p>
  </div>

  <div class="bo-card green">
    <span class="bo-icon">💬</span>
    <h4>Gruppi di supporto</h4>
    <p>
      Canali Telegram,
      gruppi Facebook
      e chat della community
      per formazione
      e confronto.
    </p>
  </div>

</div>

<!-- IA -->

<h3 class="bo-title">
  🤖 16. Come utilizzare l'IA nell'attività
</h3>

<div class="bo-card purple">
  <span class="bo-icon">🧠</span>
  <h4>L'IA come assistente operativo</h4>

  <p>
    Gli strumenti di intelligenza
    artificiale possono aiutarti
    a preparare bozze di contenuti
    e organizzare il lavoro.
    <br><br>
    Tra gli approcci
    descritti nella formazione
    è presente il framework CRISPE,
    utilizzato per formulare
    richieste strutturate.
  </p>
</div>

<div class="bo-two">

  <div class="bo-card blue">
    <h4>📅 Piano editoriale</h4>
    <p>
      Organizzare
      i contenuti da pubblicare
      durante la settimana.
    </p>
  </div>

  <div class="bo-card green">
    <h4>✍️ Didascalie</h4>
    <p>
      Preparare bozze
      di testi per post,
      Reels e storie.
    </p>
  </div>

  <div class="bo-card gold">
    <h4>👤 Bio social</h4>
    <p>
      Migliorare la descrizione
      del profilo
      per renderla
      più chiara.
    </p>
  </div>

  <div class="bo-card purple">
    <h4>💬 Messaggi</h4>
    <p>
      Elaborare esempi
      di comunicazioni
      naturali e pertinenti.
    </p>
  </div>

</div>

<div class="bo-warn">
  <strong>⚠️ Controllo umano necessario.</strong>
  <br>
  Le risposte generate dall'IA
  possono essere inesatte.
  <br><br>
  Verifica sempre
  prezzi, condizioni,
  vantaggi di viaggio
  e informazioni
  sui guadagni.
  <br><br>
  Non condividere
  dati sensibili
  o informazioni personali
  dei contatti
  senza una base appropriata.
</div>

<!-- FUNNEL -->

<h3 class="bo-title">
  🌐 17. Che cos'è un Funnel di marketing?
</h3>

<p class="bo-lead">
  Un Funnel è un percorso
  organizzato che aiuta
  una persona interessata
  a conoscere progressivamente
  un servizio o un'opportunità.
</p>

<div class="bo-flow">

  <div class="bo-flow-item">
    <strong>📱 Contenuto</strong>
    <span>
      Una persona scopre
      un contenuto sui viaggi.
    </span>
  </div>

  <div class="bo-arrow">→</div>

  <div class="bo-flow-item">
    <strong>🌐 Pagina</strong>
    <span>
      Visita una pagina
      informativa.
    </span>
  </div>

  <div class="bo-arrow">→</div>

  <div class="bo-flow-item">
    <strong>🎥 Approfondimento</strong>
    <span>
      Consulta informazioni
      o una presentazione.
    </span>
  </div>

  <div class="bo-arrow">→</div>

  <div class="bo-flow-item">
    <strong>🤝 Contatto</strong>
    <span>
      Chiede informazioni
      se interessata.
    </span>
  </div>

</div>

<div class="bo-note">
  <strong>💡 Automatizzare non significa vendere automaticamente.</strong>
  <br>
  Un Funnel
  può facilitare
  la distribuzione
  delle informazioni,
  ma non garantisce
  iscrizioni o commissioni.
  <br><br>
  È necessario rispettare
  le preferenze delle persone
  e le regole applicabili
  alla raccolta
  dei dati e alle comunicazioni.
</div>

<!-- CRM -->

<h3 class="bo-title">
  🗂️ 18. Organizzare i contatti
</h3>

<div class="bo-card blue">
  <span class="bo-icon">📋</span>
  <h4>Una lista contatti ben organizzata</h4>

  <p>
    L'Ambassador può utilizzare
    un CRM, un foglio di calcolo
    o un altro strumento appropriato
    per seguire le conversazioni
    con le persone interessate.
  </p>
</div>

<div class="bo-table-wrap">
  <table class="bo-table">
    <thead>
      <tr>
        <th>Informazione</th>
        <th>Perché è utile</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nome del contatto</td>
        <td>
          Identificare la persona
          con cui hai parlato.
        </td>
      </tr>
      <tr>
        <td>Interesse</td>
        <td>
          Distinguere viaggi
          e opportunità Ambassador.
        </td>
      </tr>
      <tr>
        <td>Stato conversazione</td>
        <td>
          Capire se il contatto
          ha richiesto informazioni
          o una presentazione.
        </td>
      </tr>
      <tr>
        <td>Prossimo appuntamento</td>
        <td>
          Ricordare gli impegni
          concordati.
        </td>
      </tr>
      <tr>
        <td>Note pertinenti</td>
        <td>
          Conservare informazioni
          necessarie
          alla conversazione,
          nel rispetto della privacy.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div class="bo-note">
  <strong>💡 Il principio fondamentale</strong>
  <br>
  Il CRM non serve
  a inviare più messaggi possibile,
  ma a gestire
  in modo ordinato
  le conversazioni
  con chi ha manifestato
  interesse.
</div>

<!-- ESEMPI -->

<h3 class="bo-title">
  🧪 19. Esempi pratici di utilizzo
</h3>

<div class="bo-case">
  <span class="bo-kicker">ESEMPIO 01 · NUOVO CLIENTE</span>

  <h4>✈️ Una persona vuole abbonarsi a Travel Advantage</h4>

  <div class="bo-flow">
    <div class="bo-flow-item">
      <strong>👤 Interesse</strong>
      <span>
        La persona
        desidera una membership.
      </span>
    </div>
    <div class="bo-arrow">→</div>
    <div class="bo-flow-item">
      <strong>🔗 Link personale</strong>
      <span>
        Condividi
        il collegamento corretto.
      </span>
    </div>
    <div class="bo-arrow">→</div>
    <div class="bo-flow-item">
      <strong>✈️ Account</strong>
      <span>
        Il cliente completa
        il proprio percorso.
      </span>
    </div>
  </div>

  <p>
    L'Ambassador
    può dare informazioni
    sulla membership,
    ma il cliente
    esegue autonomamente
    le operazioni previste
    nella piattaforma.
  </p>
</div>

<div class="bo-case">
  <span class="bo-kicker">ESEMPIO 02 · NUOVO AMBASSADOR</span>

  <h4>💼 Una persona entra nel team</h4>

  <div class="bo-flow">
    <div class="bo-flow-item">
      <strong>🔗 Iscrizione</strong>
      <span>
        Utilizza il percorso
        aziendale corretto.
      </span>
    </div>
    <div class="bo-arrow">→</div>
    <div class="bo-flow-item">
      <strong>📦 Holding Tank</strong>
      <span>
        Controlla il posizionamento,
        quando previsto.
      </span>
    </div>
    <div class="bo-arrow">→</div>
    <div class="bo-flow-item">
      <strong>🎓 Onboarding</strong>
      <span>
        Avvia formazione
        e affiancamento.
      </span>
    </div>
  </div>

  <p>
    Dopo l'iscrizione,
    lo Sponsor accompagna
    il nuovo membro
    nell'accesso agli strumenti
    e nel percorso formativo.
  </p>
</div>

<div class="bo-case">
  <span class="bo-kicker">ESEMPIO 03 · COMMISSIONI</span>

  <h4>💰 Vuoi verificare un bonus</h4>

  <div class="bo-flow">
    <div class="bo-flow-item">
      <strong>📊 Produzione</strong>
      <span>
        Consulta i dati
        del Biz Center.
      </span>
    </div>
    <div class="bo-arrow">→</div>
    <div class="bo-flow-item">
      <strong>📋 Compenso</strong>
      <span>
        Verifica la commissione
        riconosciuta.
      </span>
    </div>
    <div class="bo-arrow">→</div>
    <div class="bo-flow-item">
      <strong>💳 E-Wallet</strong>
      <span>
        Controlla il saldo
        liquidabile.
      </span>
    </div>
  </div>

  <p>
    Un bonus previsto
    dal piano compensi
    non equivale automaticamente
    a un importo disponibile
    per il prelievo.
  </p>
</div>

<!-- SICUREZZA -->

<h3 class="bo-title">
  🔐 20. Sicurezza e buone pratiche
</h3>

<div class="bo-two">

  <div class="bo-card green">
    <span class="bo-icon">✅</span>
    <h4>Cosa fare</h4>
    <p>
      ✅ Utilizzare i portali ufficiali.
      <br>
      ✅ Proteggere le password.
      <br>
      ✅ Verificare i link prima di inviarli.
      <br>
      ✅ Controllare scadenze e pagamenti.
      <br>
      ✅ Conservare soltanto
      i dati necessari.
      <br>
      ✅ Verificare le condizioni
      prima dei trasferimenti.
    </p>
  </div>

  <div class="bo-card gold">
    <span class="bo-icon">🚫</span>
    <h4>Cosa evitare</h4>
    <p>
      ❌ Condividere le credenziali.
      <br>
      ❌ Effettuare pagamenti
      su collegamenti sospetti.
      <br>
      ❌ Trasferire Token
      senza verificare il destinatario.
      <br>
      ❌ Pubblicare schermate
      con dati personali.
      <br>
      ❌ Considerare automatici
      rinnovi o commissioni
      non verificati.
    </p>
  </div>

</div>

<div class="bo-warn">
  <strong>⚠️ Attenzione ai dati finanziari.</strong>
  <br>
  Prima di cambiare
  le coordinate di prelievo,
  trasferire denaro o Token
  o autorizzare pagamenti,
  controlla con attenzione
  i dettagli dell'operazione.
  <br><br>
  In caso di dubbio,
  utilizza i canali
  di assistenza ufficiali.
</div>

<!-- RIEPILOGO -->

<h3 class="bo-title">
  📋 21. Quale strumento usare?
</h3>

<div class="bo-table-wrap">
  <table class="bo-table">
    <thead>
      <tr>
        <th>Devi fare...</th>
        <th>Strumento da consultare</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Controllare il rank</td>
        <td>Biz Center</td>
      </tr>
      <tr>
        <td>Verificare la rete</td>
        <td>Biz Center · Dual Team</td>
      </tr>
      <tr>
        <td>Controllare i nuovi Ambassador in attesa</td>
        <td>Holding Tank, quando disponibile</td>
      </tr>
      <tr>
        <td>Recuperare un link di iscrizione</td>
        <td>Biz Center · Referral Link</td>
      </tr>
      <tr>
        <td>Consultare le commissioni liquidate</td>
        <td>E-Wallet</td>
      </tr>
      <tr>
        <td>Cercare un hotel</td>
        <td>Travel Advantage</td>
      </tr>
      <tr>
        <td>Condividere un Guest Pass</td>
        <td>Travel Advantage · Guest Pass</td>
      </tr>
      <tr>
        <td>Controllare i Punti Fedeltà</td>
        <td>Account Travel Advantage</td>
      </tr>
      <tr>
        <td>Seguire la formazione</td>
        <td>Networker School e community</td>
      </tr>
      <tr>
        <td>Preparare contenuti social</td>
        <td>Social Academy, Canva e strumenti IA</td>
      </tr>
      <tr>
        <td>Organizzare i contatti</td>
        <td>CRM o lista contatti appropriata</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- FAQ -->

<h3 class="bo-title">
  ❓ 22. Domande frequenti
</h3>

<details>
  <summary>💼 Biz Center e Travel Advantage sono la stessa cosa?</summary>
  <div>
    No.
    <br><br>
    Il Biz Center
    è dedicato alla gestione
    dell'attività Ambassador.
    <br><br>
    Travel Advantage
    è la piattaforma
    dei servizi di viaggio.
  </div>
</details>

<details>
  <summary>📦 Devo sempre posizionare manualmente i nuovi Ambassador?</summary>
  <div>
    Dipende dalle regole
    del sistema.
    <br><br>
    Il materiale descrive
    una Holding Tank
    e funzioni di posizionamento
    manuale o automatico.
    <br><br>
    Verifica la situazione
    direttamente nel tuo account.
  </div>
</details>

<details>
  <summary>🔗 Posso usare lo stesso link per clienti e Ambassador?</summary>
  <div>
    Non darlo per scontato.
    <br><br>
    Controlla i collegamenti
    personali disponibili
    e utilizza
    quello appropriato
    alla registrazione richiesta.
  </div>
</details>

<details>
  <summary>🪙 I Token sono denaro prelevabile?</summary>
  <div>
    Non necessariamente.
    <br><br>
    Sono descritti
    come strumenti interni
    per operazioni specifiche.
    <br><br>
    Valore, trasferibilità
    e rimborsabilità
    devono essere verificati
    nelle condizioni applicabili.
  </div>
</details>

<details>
  <summary>🤖 Il Business HUB è obbligatorio?</summary>
  <div>
    Nel materiale viene presentato
    come strumento opzionale.
    <br><br>
    Occorre verificare
    prezzo e condizioni
    prima di attivarlo.
  </div>
</details>

<details>
  <summary>💰 Se raggiungo un rank, il bonus compare subito nell'E-Wallet?</summary>
  <div>
    Non automaticamente.
    <br><br>
    Il bonus deve essere
    maturato e approvato
    secondo i requisiti
    e i cicli di pagamento
    del piano compensi.
  </div>
</details>

<details>
  <summary>🔄 L'E-Wallet rinnova automaticamente la mia membership?</summary>
  <div>
    Il materiale formativo
    cita un meccanismo
    di rinnovo tramite Token,
    ma non chiarisce
    tutte le condizioni.
    <br><br>
    Verifica nell'account
    se la funzione esiste
    ed è attiva.
    <br><br>
    Controlla comunque
    le tue scadenze.
  </div>
</details>

<details>
  <summary>🎓 Dove trovo la formazione della community?</summary>
  <div>
    Tramite i canali
    e le piattaforme
    condivisi dal team,
    come Networker School,
    Social Academy
    e i gruppi di supporto
    ai quali hai accesso.
  </div>
</details>

<!-- QUIZ -->

<h3 class="bo-title">
  🧠 23. Mettiti alla prova
</h3>

<div class="bo-quiz">
  <span class="bo-kicker">DOMANDA 01</span>
  <h4>Quale strumento serve per consultare la propria rete?</h4>
  <p>A. Travel Advantage</p>
  <p>B. Biz Center</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. Biz Center.</strong>
      È l'ambiente dedicato
      alla gestione
      dell'attività Ambassador.
    </div>
  </details>
</div>

<div class="bo-quiz">
  <span class="bo-kicker">DOMANDA 02</span>
  <h4>A cosa serve la Holding Tank?</h4>
  <p>A. A prenotare un hotel</p>
  <p>B. A gestire il posizionamento dei nuovi Ambassador</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Serve alla gestione
      del piazzamento,
      quando prevista.
    </div>
  </details>
</div>

<div class="bo-quiz">
  <span class="bo-kicker">DOMANDA 03</span>
  <h4>Che cos'è un Referral Link?</h4>
  <p>A. Un collegamento personale per una registrazione</p>
  <p>B. Un saldo di Crediti Viaggio</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A.</strong>
      È un collegamento
      collegato all'Ambassador
      per il percorso
      di registrazione previsto.
    </div>
  </details>
</div>

<div class="bo-quiz">
  <span class="bo-kicker">DOMANDA 04</span>
  <h4>Dove controlli le commissioni disponibili?</h4>
  <p>A. E-Wallet</p>
  <p>B. Sezione Guest Pass</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A. E-Wallet.</strong>
    </div>
  </details>
</div>

<div class="bo-quiz">
  <span class="bo-kicker">DOMANDA 05</span>
  <h4>Il Business HUB è descritto come obbligatorio?</h4>
  <p>A. Sì</p>
  <p>B. No, è opzionale</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      È presentato
      come strumento aggiuntivo.
    </div>
  </details>
</div>

<div class="bo-quiz">
  <span class="bo-kicker">DOMANDA 06</span>
  <h4>I punti Dual Team e i Punti Fedeltà sono la stessa cosa?</h4>
  <p>A. Sì</p>
  <p>B. No</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. No.</strong>
      Hanno funzioni differenti.
    </div>
  </details>
</div>

<div class="bo-quiz">
  <span class="bo-kicker">DOMANDA 07</span>
  <h4>Puoi affidarti al rinnovo automatico senza controllare le scadenze?</h4>
  <p>A. Sì</p>
  <p>B. No, devi verificare che la funzione sia effettivamente attiva</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Non bisogna affidarsi
      a funzioni automatiche
      non verificate.
    </div>
  </details>
</div>

<div class="bo-quiz">
  <span class="bo-kicker">DOMANDA 08</span>
  <h4>Quale strumento è dedicato ai videocorsi formativi della community?</h4>
  <p>A. Networker School</p>
  <p>B. Holding Tank</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A. Networker School.</strong>
    </div>
  </details>
</div>

<!-- CONCLUSIONE -->

<h3 class="bo-title">
  🎯 Il concetto da ricordare
</h3>

<div class="bo-final">
  <h4>💻 Ogni strumento ha una funzione precisa</h4>

  <p>
    Il <strong>Biz Center</strong>
    aiuta a gestire
    la rete e l'attività Ambassador.
    <br><br>
    L'<strong>E-Wallet</strong>
    è dedicato alle commissioni
    e alle operazioni finanziarie.
    <br><br>
    <strong>Travel Advantage</strong>
    è la piattaforma dei servizi
    di viaggio e dei benefici
    della membership.
    <br><br>
    <strong>The Travel Legends</strong>
    mette a disposizione
    formazione e strumenti
    di supporto della community.
    <br><br>
    Conoscere questi ambienti
    permette di lavorare
    in modo più organizzato
    e di accompagnare
    correttamente
    i nuovi membri del team.
  </p>
</div>

<div class="bo-note">
  <strong>📚 Informazioni e aggiornamenti</strong>
  <br>
  Questo capitolo utilizza
  il materiale formativo
  condiviso per l'Atlante.
  <br><br>
  Le descrizioni delle funzioni
  non rappresentano
  una guida verificata
  schermata per schermata.
  <br><br>
  Prezzi, interfacce,
  modalità di pagamento,
  Token e regole operative
  possono cambiare.
  Per le operazioni effettive
  fa riferimento
  al portale ufficiale
  e alle condizioni applicabili.
</div>

</div>
</section>
`);
