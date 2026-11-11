
window.registraSezione("punti", `
<section class="section" id="punti" data-group="viaggi">

<style>
#punti .lp-title {
  font-size:24px;
  color:#09243d;
  margin:34px 0 16px;
}
#punti .lp-intro {
  font-size:16px;
  line-height:1.8;
  color:#536d7d;
  margin:12px 0 22px;
}
#punti .lp-kicker {
  display:inline-block;
  background:#e8f8f6;
  color:#087f8b;
  font-size:11px;
  font-weight:800;
  letter-spacing:.08em;
  text-transform:uppercase;
  border-radius:30px;
  padding:8px 13px;
}
#punti .lp-hero {
  display:grid;
  grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);
  gap:24px;
  align-items:center;
  margin-bottom:30px;
}
#punti .lp-hero .lp-title {
  margin:15px 0;
}
#punti .lp-hero-art {
  min-width:0;
  background:linear-gradient(145deg,#082f55,#0d85a7);
  border-radius:22px;
  padding:26px 18px;
  text-align:center;
  position:relative;
  overflow:hidden;
  color:white;
}
#punti .lp-hero-art:before {
  content:"";
  position:absolute;
  width:180px;
  height:180px;
  background:#ffffff14;
  border-radius:50%;
  top:-90px;
  right:-60px;
}
#punti .lp-hero-art:after {
  content:"";
  position:absolute;
  width:130px;
  height:130px;
  background:#ffffff12;
  border-radius:50%;
  bottom:-65px;
  left:-30px;
}
#punti .lp-coin {
  width:104px;
  height:104px;
  margin:0 auto 20px;
  border-radius:50%;
  background:linear-gradient(135deg,#fff7aa,#f5b739);
  border:7px solid #e6a22b;
  box-shadow:0 12px 26px #031d3540;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#98600a;
  font-size:49px;
  position:relative;
  z-index:1;
}
#punti .lp-hero-art h4 {
  color:white;
  font-size:22px;
  margin:0 0 7px;
  position:relative;
  z-index:1;
}
#punti .lp-hero-art p {
  color:#d5f3fb;
  font-size:13px;
  line-height:1.7;
  margin:0 0 19px;
  position:relative;
  z-index:1;
}
#punti .lp-mini-steps {
  display:flex;
  justify-content:center;
  gap:8px;
  align-items:center;
  position:relative;
  z-index:1;
}
#punti .lp-mini-steps span {
  background:#ffffff1f;
  border:1px solid #ffffff50;
  border-radius:10px;
  padding:10px 8px;
  font-size:11px;
  font-weight:700;
  flex:1;
}
#punti .lp-mini-steps b {
  color:#ffe38e;
}
#punti .lp-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#punti .lp-two {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#punti .lp-card {
  border:1px solid #dcebf1;
  background:#f4f9fc;
  border-radius:18px;
  padding:22px;
  min-width:0;
}
#punti .lp-card.vip {
  background:#eef7ff;
  border-color:#cbe6fa;
}
#punti .lp-card.elite {
  background:#fff8e9;
  border-color:#f4e4bd;
}
#punti .lp-card.turbo {
  background:#f5efff;
  border-color:#e5d4ff;
}
#punti .lp-card.green {
  background:#eefaf6;
  border-color:#d1eee3;
}
#punti .lp-card h4 {
  color:#153853;
  font-size:18px;
  margin:10px 0;
}
#punti .lp-card p {
  color:#536c7b;
  font-size:13px;
  line-height:1.75;
  margin:8px 0;
}
#punti .lp-icon {
  font-size:30px;
  display:block;
  margin-bottom:9px;
}
#punti .lp-number {
  font-size:34px;
  font-weight:850;
  color:#123853;
  line-height:1.1;
  margin:12px 0;
}
#punti .lp-number small {
  font-size:12px;
  font-weight:600;
  color:#6b8391;
}
#punti .lp-pill {
  display:inline-block;
  background:#ffffffcc;
  color:#31556b;
  border-radius:25px;
  padding:6px 11px;
  font-size:11px;
  font-weight:800;
}
#punti .lp-note {
  background:#eaf8f5;
  border-left:4px solid #18a89a;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  color:#315b57;
  font-size:13px;
  line-height:1.8;
}
#punti .lp-warning {
  background:#fff8e8;
  border-left:4px solid #d5a545;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  color:#73592d;
  font-size:13px;
  line-height:1.8;
}
#punti .lp-danger {
  background:#fff0f0;
  border:1px solid #f4cccc;
  border-left:4px solid #d85b5b;
  border-radius:12px;
  padding:19px;
  margin:20px 0;
  color:#873c3c;
  line-height:1.8;
  font-size:13px;
}
#punti .lp-flow {
  display:flex;
  align-items:stretch;
  gap:10px;
  margin:23px 0;
}
#punti .lp-flow-item {
  flex:1;
  min-width:0;
  border:1px solid #d5eaf0;
  border-radius:15px;
  background:#edf8fa;
  padding:17px 12px;
  text-align:center;
}
#punti .lp-flow-item b {
  display:block;
  font-size:15px;
  color:#164b67;
  margin-bottom:8px;
}
#punti .lp-flow-item span {
  font-size:12px;
  color:#567282;
  line-height:1.6;
}
#punti .lp-arrow {
  align-self:center;
  font-weight:900;
  font-size:23px;
  color:#1299a6;
}
#punti .lp-destinations {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:14px;
  margin:20px 0;
}
#punti .lp-destination {
  background:#f5f9fc;
  border:1px solid #e0ebf0;
  border-radius:16px;
  padding:18px;
}
#punti .lp-destination h4 {
  color:#163b56;
  font-size:17px;
  margin:8px 0;
}
#punti .lp-destination p {
  font-size:13px;
  color:#536d7d;
  line-height:1.75;
  margin:7px 0;
}
#punti .lp-status {
  display:inline-block;
  padding:5px 10px;
  border-radius:25px;
  font-weight:800;
  font-size:11px;
}
#punti .lp-status.yes {
  background:#ddf6e7;
  color:#206b43;
}
#punti .lp-status.no {
  background:#ffe6e6;
  color:#ab4141;
}
#punti .lp-bar {
  background:#eaf0f4;
  border-radius:30px;
  overflow:hidden;
  height:17px;
  margin:12px 0;
}
#punti .lp-bar span {
  height:100%;
  display:block;
  border-radius:30px;
  background:linear-gradient(90deg,#1b9eb6,#48c6a9);
}
#punti .lp-timeline {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:12px;
  margin:22px 0;
}
#punti .lp-time {
  background:#f3f8fb;
  border:1px solid #e0ebf0;
  padding:17px;
  border-radius:14px;
  text-align:center;
}
#punti .lp-time strong {
  display:block;
  font-size:22px;
  color:#164b67;
  margin-bottom:9px;
}
#punti .lp-time p {
  font-size:12px;
  color:#536d7d;
  line-height:1.6;
  margin:0;
}
#punti .lp-time.red {
  background:#fff0f0;
  border-color:#f4cccc;
}
#punti .lp-time.red strong {
  color:#b44b4b;
}
#punti .lp-table-wrap {
  overflow-x:auto;
  border:1px solid #dce8ef;
  border-radius:15px;
  margin:23px 0;
}
#punti .lp-table {
  width:100%;
  min-width:570px;
  border-collapse:collapse;
}
#punti .lp-table th {
  background:#123650;
  color:white;
  padding:15px 12px;
  text-align:center;
  font-size:13px;
}
#punti .lp-table td {
  padding:14px 12px;
  text-align:center;
  font-size:12px;
  color:#36586e;
  border-bottom:1px solid #e2eaf0;
}
#punti .lp-table th:first-child,
#punti .lp-table td:first-child {
  text-align:left;
}
#punti .lp-table td:first-child {
  font-weight:750;
  color:#153a54;
}
#punti .lp-table tr:nth-child(even) td {
  background:#f4f8fb;
}
#punti .lp-table tr:last-child td {
  border-bottom:0;
}
#punti .lp-quiz {
  background:#f6f0ff;
  border:1px solid #e7dafb;
  border-radius:17px;
  padding:22px;
  margin:18px 0;
}
#punti .lp-quiz h4 {
  font-size:17px;
  color:#253453;
  margin:10px 0;
}
#punti .lp-quiz p {
  font-size:13px;
  color:#5c637e;
  line-height:1.8;
  margin:6px 0;
}
#punti .lp-quiz details {
  margin-top:14px;
  background:white;
  border-radius:12px;
  padding:12px;
}
#punti .lp-summary {
  background:linear-gradient(135deg,#0c3557,#117d91);
  color:white;
  border-radius:18px;
  padding:25px;
  margin:25px 0 5px;
}
#punti .lp-summary h4 {
  color:white;
  font-size:21px;
  margin:0 0 12px;
}
#punti .lp-summary p {
  color:#e0f5f6;
  font-size:14px;
  line-height:1.85;
  margin:0;
}
@media(max-width:850px) {
  #punti .lp-grid {
    grid-template-columns:1fr;
  }
}
@media(max-width:700px) {
  #punti .lp-hero {
    grid-template-columns:1fr;
  }
  #punti .lp-flow {
    flex-direction:column;
  }
  #punti .lp-arrow {
    transform:rotate(90deg);
  }
}
@media(max-width:600px) {
  #punti .lp-two,
  #punti .lp-destinations,
  #punti .lp-timeline {
    grid-template-columns:1fr;
  }
  #punti .lp-title {
    font-size:21px;
  }
}
</style>

<!-- INTESTAZIONE -->

<div class="section-head">
  <span class="kicker">
    Capitolo 03 · Il programma fedeltà
  </span>
  <h2>Punti Fedeltà</h2>
  <p>
    Accumula punti con il tuo abbonamento
    e utilizzali per ridurre il costo
    dei tuoi viaggi.
    Scopri come guadagnarli,
    dove spenderli e come conservarli.
  </p>
</div>

<div class="section-body">

<!-- INTRODUZIONE -->

<div class="lp-hero">

  <div>
    <span class="lp-kicker">Partiamo dalle basi</span>

    <h3 class="lp-title">
      ⭐ Che cosa sono i Punti Fedeltà?
    </h3>

    <p class="lp-intro">
      I <strong>Punti Fedeltà</strong>,
      chiamati anche Loyalty Points,
      sono il programma fedeltà
      di Travel Advantage.
      <br><br>
      Attraverso l'abbonamento
      accumuli un controvalore digitale
      da utilizzare per ridurre
      il costo di viaggi
      e servizi selezionati.
    </p>

    <div class="lp-note">
      <strong>💡 Da ricordare</strong><br>
      I punti non sono denaro contante:
      non puoi prelevarli,
      convertirli in soldi
      o trasferirli ad altre persone.
    </div>
  </div>

  <!-- INFOGRAFICA REALIZZATA IN CSS -->

  <div class="lp-hero-art">

    <div class="lp-coin">★</div>

    <h4>I tuoi viaggi valgono punti</h4>

    <p>
      Il tuo abbonamento
      ti premia mese dopo mese.
    </p>

    <div class="lp-mini-steps">
      <span>💳<br>Abbonamento</span>
      <b>→</b>
      <span>⭐<br>Punti</span>
      <b>→</b>
      <span>🏝️<br>Viaggi</span>
    </div>

  </div>

</div>

<!-- ACCUMULO -->

<h3 class="lp-title">
  💳 1. Quanti punti ricevo ogni mese?
</h3>

<div class="lp-grid">

  <div class="lp-card vip">
    <span class="lp-pill">🌊 VIP</span>
    <div class="lp-number">
      20 <small>punti/mese</small>
    </div>

    <p>
      Con l'abbonamento
      <strong>VIP da $19.97 al mese</strong>
      accumuli 20 Punti Fedeltà
      per ogni mese.
    </p>

    <span class="lp-status no">
      🔒 PUNTI BLOCCATI
    </span>

    <p>
      Puoi accumularli,
      ma per utilizzarli
      devi effettuare
      un upgrade a Elite o Turbo.
    </p>
  </div>

  <div class="lp-card elite">
    <span class="lp-pill">⭐ ELITE</span>
    <div class="lp-number">
      120 <small>punti/mese</small>
    </div>

    <p>
      Con l'abbonamento
      <strong>Elite da $119.97 al mese</strong>
      ricevi:
      <br><br>
      <strong>120 punti all'iscrizione</strong>
      e altri 120 a ogni
      rinnovo mensile.
    </p>

    <span class="lp-status yes">
      🔓 PUNTI SBLOCCATI
    </span>

    <p>
      I punti sono disponibili
      per gli utilizzi previsti
      dalla piattaforma,
      con membership attiva.
    </p>
  </div>

  <div class="lp-card turbo">
    <span class="lp-pill">🚀 TURBO</span>
    <div class="lp-number">
      240 <small>punti/mese</small>
    </div>

    <p>
      Con l'upgrade Turbo
      da <strong>$250 una tantum</strong>
      continui a pagare il canone
      Elite da $119.97 al mese.
    </p>

    <span class="lp-status yes">
      🔓 PUNTI SBLOCCATI
    </span>

    <p>
      Ricevi <strong>250 punti
      all'attivazione dell'upgrade</strong>
      e <strong>240 punti mensili</strong>.
    </p>
  </div>

</div>

<div class="lp-note">
  <strong>⭐ La differenza più importante</strong>
  <br>
  VIP permette di accumulare punti
  che restano bloccati.
  Elite permette di utilizzare
  i punti sbloccati.
  Turbo raddoppia l'accredito
  mensile di Elite e aggiunge
  250 punti all'attivazione dell'upgrade.
</div>

<!-- SCHEMA DEI PUNTI -->

<h3 class="lp-title">
  📊 Il confronto a colpo d'occhio
</h3>

<div class="lp-two">

  <div class="lp-card">
    <h4>🌊 VIP — 20 punti</h4>
    <div class="lp-bar">
      <span style="width:8.33%"></span>
    </div>

    <h4>⭐ Elite — 120 punti</h4>
    <div class="lp-bar">
      <span style="width:50%"></span>
    </div>

    <h4>🚀 Turbo — 240 punti</h4>
    <div class="lp-bar">
      <span style="width:100%"></span>
    </div>

    <p>
      Confronto degli accrediti mensili,
      senza considerare
      i bonus una tantum.
    </p>
  </div>

  <div class="lp-card green">
    <span class="lp-icon">🎁</span>
    <h4>Il bonus Turbo</h4>

    <div class="lp-number">
      +250 <small>punti una tantum</small>
    </div>

    <p>
      Oltre ai 240 punti mensili,
      l'attivazione Turbo
      riconosce 250 punti
      aggiuntivi una sola volta.
    </p>
  </div>

</div>

<!-- ESEMPI -->

<h3 class="lp-title">
  🧮 2. Esempio: quanti punti accumulo?
</h3>

<div class="lp-table-wrap">
  <table class="lp-table">
    <thead>
      <tr>
        <th>Periodo</th>
        <th>VIP</th>
        <th>Elite</th>
        <th>Turbo</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Primo accredito</td>
        <td>20</td>
        <td>120</td>
        <td>250 bonus upgrade + accrediti mensili</td>
      </tr>

      <tr>
        <td>3 accrediti mensili</td>
        <td>60</td>
        <td>360</td>
        <td>720 + 250</td>
      </tr>

      <tr>
        <td>6 accrediti mensili</td>
        <td>120</td>
        <td>720</td>
        <td>1.440 + 250</td>
      </tr>

      <tr>
        <td>12 accrediti mensili</td>
        <td>240</td>
        <td>1.440</td>
        <td>2.880 + 250</td>
      </tr>

    </tbody>
  </table>
</div>

<div class="lp-note">
  <strong>💡 Come leggere l'esempio</strong>
  <br>
  I conteggi ipotizzano accrediti
  regolari per il periodo indicato,
  senza utilizzare punti.
  <br><br>
  Per Turbo è incluso separatamente
  il bonus una tantum di 250 punti.
  I calcoli non includono
  eventuali punti Elite accumulati
  prima dell'upgrade.
</div>

<!-- DOVE UTILIZZARLI -->

<h3 class="lp-title">
  🏝️ 3. Dove posso utilizzare i punti?
</h3>

<p class="lp-intro">
  I membri Elite e Turbo
  possono utilizzare i punti sbloccati
  in diverse sezioni
  di Travel Advantage.
  Il numero di punti applicabili
  cambia in base al servizio
  e alla prenotazione.
</p>

<div class="lp-destinations">

  <div class="lp-destination">
    <span class="lp-icon">🏨</span>
    <h4>Hotel e Resort</h4>
    <span class="lp-status yes">✅ DISPONIBILI</span>
    <p>
      Puoi utilizzare i punti
      per ridurre il prezzo
      di hotel e resort idonei.
      <br><br>
      Lo sconto massimo previsto
      è fino a <strong>$53
      per singola prenotazione</strong>,
      circa 45 € come valore indicativo.
    </p>
  </div>

  <div class="lp-destination">
    <span class="lp-icon">🌴</span>
    <h4>Life Experience</h4>
    <span class="lp-status yes">✅ DISPONIBILI</span>
    <p>
      I punti permettono
      di ridurre significativamente
      il prezzo dei pacchetti
      vacanza di gruppo
      della community.
      <br><br>
      Con Turbo puoi applicare
      fino a <strong>100 punti extra</strong>
      per un secondo ospite,
      dove previsto.
    </p>
  </div>

  <div class="lp-destination">
    <span class="lp-icon">🏖️</span>
    <h4>The Club</h4>
    <span class="lp-status yes">✅ DISPONIBILI</span>
    <p>
      Puoi utilizzare
      quantitativi elevati
      di Punti Fedeltà
      per ridurre il costo
      di soggiorni in hotel
      e resort selezionati,
      nelle destinazioni
      e date disponibili.
    </p>
  </div>

  <div class="lp-destination">
    <span class="lp-icon">🛍️</span>
    <h4>Lifestyle Mall</h4>
    <span class="lp-status yes">✅ DISPONIBILI</span>
    <p>
      Puoi usare i punti
      per acquistare articoli
      idonei all'interno
      del centro commerciale
      Lifestyle Mall.
    </p>
  </div>


<div class="lp-destination">
  <span class="lp-icon">🚢</span>
  <h4>Crociere</h4>
  <span class="lp-status yes">✅ DISPONIBILI</span>

  <p>
    Puoi utilizzare i Punti Fedeltà
    per ridurre il costo delle crociere
    disponibili sulla piattaforma.
    <br><br>
    <strong>Non esiste un limite fisso
    di 400 punti per tutte le crociere.</strong>
    Il numero di punti utilizzabili
    varia in base a:
  </p>

  <ul>
    <li>🗺️ Itinerario e destinazione</li>
    <li>📅 Durata della crociera</li>
    <li>🛏️ Tipologia di cabina</li>
    <li>🚢 Condizioni della compagnia partner
      (es. MSC o Costa Crociere)</li>
    <li>💰 Valore complessivo della prenotazione</li>
  </ul>

  <div style="
    background:#eaf8f5;
    border-radius:12px;
    padding:14px;
    margin-top:15px;
    color:#315b57;
    font-size:13px;
    line-height:1.7;
  ">
    <strong>💡 Esempio pratico</strong>
    <br>
    Se per una crociera la piattaforma
    indica che puoi utilizzare
    <strong>400 Punti Fedeltà</strong>,
    significa che quello è il limite
    calcolato per quella specifica
    prenotazione.
    <br><br>
    Un'altra crociera potrebbe
    consentire di utilizzare
    un numero maggiore o minore di punti.
  </div>

</div>


  <div class="lp-destination">
    <span class="lp-icon">🎯</span>
    <h4>Come scelgo quanti punti usare?</h4>
    <p>
      Durante una prenotazione idonea,
      la piattaforma mostra
      le possibilità di utilizzo
      dei punti disponibili.
      <br><br>
      Il limite dipende
      dalla tipologia
      del servizio e
      dalle condizioni dell'offerta.
    </p>
  </div>

</div>

<!-- ESCLUSIONI -->

<h3 class="lp-title">
  🚫 4. Dove NON posso usare i punti?
</h3>

<div class="lp-two">

  <div class="lp-card">
    <span class="lp-icon">🚗</span>
    <h4>Noleggio auto</h4>
    <span class="lp-status no">
      ❌ NON UTILIZZABILI
    </span>
    <p>
      I Punti Fedeltà
      non possono essere
      applicati al servizio
      di noleggio auto.
    </p>
  </div>

  <div class="lp-card">
    <span class="lp-icon">⚡</span>
    <h4>Promozioni Lampo</h4>
    <span class="lp-status no">
      ❌ NON UTILIZZABILI
    </span>
    <p>
      Le promozioni lampo
      non consentono
      di applicare
      i Punti Fedeltà.
    </p>
  </div>

</div>

<div class="lp-warning">
  <strong>⚠️ Attenzione</strong>
  <br>
  Avere punti disponibili
  non significa poterli
  utilizzare per qualsiasi
  prodotto o prenotazione.
  Ogni servizio può prevedere
  limiti specifici.
</div>

<!-- BENEFICIO 12 MESI -->

<h3 class="lp-title">
  🎁 5. Il beneficio dei 12 mesi
</h3>

<div class="lp-card elite">

  <span class="lp-pill">
    🏝️ BENEFICIO ELITE E TURBO
  </span>

  <h4 style="font-size:22px">
    Una vacanza per 2 persone
    utilizzando i tuoi punti
  </h4>

  <p>
    Mantenendo attivo
    un abbonamento Elite o Turbo
    per <strong>12 mesi consecutivi</strong>,
    puoi sbloccare la possibilità
    di utilizzare i Punti Fedeltà
    accumulati per coprire
    <strong>fino al 100% del costo
    di una vacanza Life Experience
    o The Club per 2 persone</strong>.
  </p>

</div>

<div class="lp-flow">

  <div class="lp-flow-item">
    <b>⭐ 1. Attiva Elite o Turbo</b>
    <span>
      Accumuli punti
      con l'abbonamento.
    </span>
  </div>

  <div class="lp-arrow">→</div>

  <div class="lp-flow-item">
    <b>📅 2. Mantieni 12 mesi</b>
    <span>
      La membership rimane
      attiva per 12 mesi consecutivi.
    </span>
  </div>

  <div class="lp-arrow">→</div>

  <div class="lp-flow-item">
    <b>🏝️ 3. Riscatta la vacanza</b>
    <span>
      Utilizzi i punti per
      le proposte idonee,
      fino al 100%.
    </span>
  </div>

</div>

<div class="lp-warning">
  <strong>💡 Che cosa significa fino al 100%?</strong>
  <br>
  Puoi arrivare a coprire
  interamente con i punti
  il costo idoneo
  della vacanza prevista.
  <br><br>
  Il beneficio non significa
  che ogni viaggio sia
  automaticamente gratuito:
  dipende dalla disponibilità,
  dai punti richiesti
  e dalle condizioni
  della proposta selezionata.
</div>

<details>
  <summary>
    🔍 Il beneficio dei 12 mesi
    si applica anche a VIP?
  </summary>
  <div>
    No. Il beneficio è previsto
    per gli abbonati
    <strong>Elite e Turbo</strong>
    che mantengono
    la membership attiva
    per 12 mesi consecutivi.
  </div>
</details>

<!-- ACCOUNT ATTIVO -->

<h3 class="lp-title">
  🔐 6. Come conservare i Punti Fedeltà
</h3>

<p class="lp-intro">
  I punti sono collegati
  alla tua membership.
  Per utilizzarli,
  l'abbonamento deve
  risultare <strong>Attivo</strong>.
</p>

<div class="lp-two">

  <div class="lp-card green">
    <span class="lp-icon">✅</span>
    <h4>Account attivo</h4>
    <p>
      Puoi utilizzare
      i punti sbloccati
      nelle sezioni
      e prenotazioni idonee.
    </p>
  </div>

  <div class="lp-card">
    <span class="lp-icon">🔒</span>
    <h4>Pagamento non riuscito</h4>
    <p>
      Se un pagamento
      mensile non va a buon fine,
      l'account viene bloccato
      e i Punti Fedeltà
      rimangono congelati
      fino alla ripresa
      della fatturazione.
    </p>
  </div>

</div>

<!-- 180 GIORNI -->

<h3 class="lp-title">
  ⏳ 7. Che cosa succede dopo 180 giorni?
</h3>

<div class="lp-timeline">

  <div class="lp-time">
    <strong>✅ Attivo</strong>
    <p>
      Membership regolare.
      Punti utilizzabili
      secondo il livello.
    </p>
  </div>

  <div class="lp-time">
    <strong>🔒 Sospeso</strong>
    <p>
      Pagamento non riuscito.
      Punti congelati
      temporaneamente.
    </p>
  </div>

  <div class="lp-time red">
    <strong>180 giorni</strong>
    <p>
      Superato questo periodo
      di sospensione,
      abbonamento annullato
      e punti azzerati.
    </p>
  </div>

</div>

<div class="lp-danger">
  <strong>
    🚨 Attenzione: puoi perdere tutti i punti
  </strong>
  <br><br>
  Se la sospensione
  o il mancato pagamento
  supera i <strong>180 giorni</strong>,
  l'abbonamento viene annullato
  e <strong>tutti i Punti Fedeltà
  accumulati vengono azzerati
  definitivamente</strong>.
</div>

<!-- DOWNGRADE -->

<h3 class="lp-title">
  ⬇️ 8. Cosa succede se cambio abbonamento?
</h3>

<div class="lp-two">

  <div class="lp-card green">
    <span class="lp-icon">⬆️</span>
    <h4>Upgrade da VIP a Elite</h4>
    <p>
      Passando da VIP a Elite,
      i punti VIP precedentemente
      bloccati diventano
      utilizzabili secondo
      le condizioni del programma.
    </p>
  </div>

  <div class="lp-card">
    <span class="lp-icon">⬇️</span>
    <h4>Downgrade da Elite a VIP</h4>
    <p>
      Passare a un livello
      inferiore comporta
      la <strong>perdita immediata
      dei punti sbloccati accumulati</strong>.
    </p>
  </div>

</div>

<div class="lp-danger">
  <strong>
    ⚠️ Prima di effettuare un downgrade
  </strong>
  <br>
  Controlla sempre
  i tuoi Punti Fedeltà.
  Il passaggio a un livello
  inferiore può comportare
  la perdita definitiva
  del saldo sbloccato.
</div>

<!-- TITOLARITÀ -->

<h3 class="lp-title">
  👤 9. A chi appartengono i punti?
</h3>

<div class="lp-flow">

  <div class="lp-flow-item">
    <b>👤 Titolare principale</b>
    <span>
      È il proprietario
      dei Punti Fedeltà
      dell'abbonamento.
    </span>
  </div>

  <div class="lp-arrow">→</div>

  <div class="lp-flow-item">
    <b>⭐ Saldo punti</b>
    <span>
      Rimane collegato
      all'account principale.
    </span>
  </div>

  <div class="lp-arrow">→</div>

  <div class="lp-flow-item">
    <b>🔒 Non trasferibili</b>
    <span>
      Non è possibile
      trasferire i punti
      a un altro account.
    </span>
  </div>

</div>

<div class="lp-note">
  <strong>💡 Ricorda</strong>
  <br>
  I Punti Fedeltà appartengono
  esclusivamente al titolare
  principale dell'account.
  Non possono essere ceduti
  o trasferiti
  ad altre persone.
</div>

<!-- RIEPILOGO -->

<h3 class="lp-title">
  📋 10. Le regole in un colpo d'occhio
</h3>

<div class="lp-table-wrap">
  <table class="lp-table">
    <thead>
      <tr>
        <th>Regola</th>
        <th>Come funziona</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>VIP</td>
        <td>20 punti/mese, bloccati</td>
      </tr>

      <tr>
        <td>Elite</td>
        <td>
          120 punti iniziali
          e 120 per rinnovo mensile
        </td>
      </tr>

      <tr>
        <td>Turbo</td>
        <td>
          250 punti all'upgrade,
          240 punti/mese
        </td>
      </tr>

      <tr>
        <td>Prelievo in contanti</td>
        <td>Non consentito</td>
      </tr>

      <tr>
        <td>Hotel e Resort</td>
        <td>
          Fino a $53 di sconto
          per prenotazione idonea
        </td>
      </tr>

      <tr>
        <td>Life Experience</td>
        <td>Utilizzabili</td>
      </tr>

      <tr>
        <td>The Club</td>
        <td>Utilizzabili</td>
      </tr>

      <tr>
        <td>Lifestyle Mall</td>
        <td>Utilizzabili</td>
      </tr>

      <tr>
        <td>Crociere</td>
        <td>Utilizzabili</td>
      </tr>

      <tr>
        <td>Noleggio auto</td>
        <td>Non utilizzabili</td>
      </tr>

      <tr>
        <td>Promozioni Lampo</td>
        <td>Non utilizzabili</td>
      </tr>

      <tr>
        <td>Account sospeso</td>
        <td>Punti congelati</td>
      </tr>

      <tr>
        <td>Sospensione oltre 180 giorni</td>
        <td>Punti azzerati</td>
      </tr>

      <tr>
        <td>Downgrade</td>
        <td>Perdita dei punti sbloccati</td>
      </tr>

      <tr>
        <td>Trasferimento ad altri account</td>
        <td>Non consentito</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- QUIZ -->

<h3 class="lp-title">
  🧠 11. Mettiti alla prova
</h3>

<div class="lp-quiz">
  <span class="lp-kicker">DOMANDA 01</span>
  <h4>
    Ho un abbonamento VIP.
    Posso usare subito i 20 punti mensili?
  </h4>

  <p>A. Sì, per qualsiasi hotel</p>
  <p>B. No, devo effettuare un upgrade</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Con VIP i punti si accumulano,
      ma restano bloccati
      fino all'upgrade a Elite o Turbo.
    </div>
  </details>
</div>

<div class="lp-quiz">
  <span class="lp-kicker">DOMANDA 02</span>
  <h4>
    Quanto ricevo ogni mese
    con un abbonamento Turbo?
  </h4>

  <p>A. 120 punti</p>
  <p>B. 240 punti</p>
  <p>C. 250 punti ogni mese</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. 240 punti.</strong>
      I 250 punti sono un bonus
      una tantum all'attivazione
      dell'upgrade Turbo.
    </div>
  </details>
</div>

<div class="lp-quiz">
  <span class="lp-kicker">DOMANDA 03</span>
  <h4>
    Posso utilizzare i punti
    per noleggiare un'auto?
  </h4>

  <p>A. Sì</p>
  <p>B. No</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      I Punti Fedeltà non sono
      utilizzabili per il noleggio auto.
    </div>
  </details>
</div>

<div class="lp-quiz">
  <span class="lp-kicker">DOMANDA 04</span>
  <h4>
    Dopo quanti mesi consecutivi
    Elite o Turbo posso sbloccare
    il beneficio della vacanza per 2?
  </h4>

  <p>A. 6 mesi</p>
  <p>B. 12 mesi</p>
  <p>C. 24 mesi</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. 12 mesi.</strong>
      Si sblocca la possibilità
      di coprire fino al 100%
      di una vacanza idonea
      The Club o Life Experience
      per 2 persone utilizzando i punti.
    </div>
  </details>
</div>

<div class="lp-quiz">
  <span class="lp-kicker">DOMANDA 05</span>
  <h4>
    Se il pagamento dell'abbonamento
    non va a buon fine,
    che cosa succede ai punti?
  </h4>

  <p>A. Vengono subito cancellati</p>
  <p>B. Rimangono congelati</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      I punti restano congelati
      durante la sospensione.
      Se questa supera 180 giorni,
      vengono azzerati.
    </div>
  </details>
</div>

<div class="lp-quiz">
  <span class="lp-kicker">DOMANDA 06</span>
  <h4>
    Passo da Elite a VIP.
    Mantengo tutti i punti sbloccati?
  </h4>

  <p>A. Sì, sempre</p>
  <p>B. No, perdo i punti sbloccati accumulati</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Il downgrade comporta
      la perdita immediata
      dei punti sbloccati accumulati.
    </div>
  </details>
</div>

<!-- CONCLUSIONE -->

<h3 class="lp-title">
  🎯 Il concetto da ricordare
</h3>

<div class="lp-summary">
  <h4>⭐ I punti premiano la continuità</h4>
  <p>
    Con VIP accumuli punti bloccati.
    Con Elite li puoi utilizzare
    e con Turbo ne ricevi il doppio
    ogni mese, più un bonus iniziale.
    <br><br>
    Puoi usarli per ridurre
    il costo di viaggi e servizi
    idonei, ma non prelevarli
    come denaro contante.
    <br><br>
    <strong>
      Mantieni attivo l'abbonamento
      e controlla sempre le regole
      prima di sospenderlo
      o passare a un livello inferiore.
    </strong>
  </p>
</div>

</div>
</section>
`);
