
window.registraSezione("crediti", `
<section class="section" id="crediti" data-group="viaggi">

<style>
#crediti .tc-title {
  color:#09243d;
  font-size:24px;
  margin:34px 0 16px;
}
#crediti .tc-intro {
  color:#536d7d;
  font-size:15px;
  line-height:1.85;
  margin:12px 0 22px;
}
#crediti .tc-label {
  display:inline-block;
  padding:7px 13px;
  background:#e8f8f6;
  color:#087f8b;
  font-size:11px;
  font-weight:800;
  letter-spacing:.06em;
  text-transform:uppercase;
  border-radius:25px;
}
#crediti .tc-hero {
  display:grid;
  grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);
  align-items:center;
  gap:24px;
  margin:0 0 30px;
}
#crediti .tc-hero .tc-title {
  margin:14px 0;
}
#crediti .tc-graphic {
  background:linear-gradient(145deg,#083454,#138f9f);
  border-radius:22px;
  padding:25px 18px;
  color:white;
  text-align:center;
  overflow:hidden;
}
#crediti .tc-graphic .tc-coin {
  width:100px;
  height:100px;
  border-radius:50%;
  margin:5px auto 15px;
  background:linear-gradient(135deg,#ffeaa1,#ffbb42);
  border:6px solid #efad34;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:46px;
  box-shadow:0 12px 25px #001d2c50;
}
#crediti .tc-graphic h4 {
  color:white;
  font-size:23px;
  margin:8px 0;
}
#crediti .tc-graphic p {
  color:#d6f3fa;
  font-size:13px;
  line-height:1.7;
}
#crediti .tc-graphic-flow {
  display:flex;
  gap:6px;
  align-items:center;
  margin-top:18px;
}
#crediti .tc-graphic-flow div {
  flex:1;
  padding:11px 5px;
  background:#ffffff21;
  border:1px solid #ffffff45;
  border-radius:12px;
  font-size:12px;
  font-weight:700;
}
#crediti .tc-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#crediti .tc-two {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#crediti .tc-card {
  min-width:0;
  background:#f4f9fc;
  border:1px solid #dfebf0;
  border-radius:18px;
  padding:22px;
}
#crediti .tc-card.green {
  background:#effaf5;
  border-color:#d4ede0;
}
#crediti .tc-card.gold {
  background:#fff8e8;
  border-color:#f1e3bd;
}
#crediti .tc-card.blue {
  background:#eef7ff;
  border-color:#cfe6fb;
}
#crediti .tc-card.purple {
  background:#f6f0ff;
  border-color:#e5d8fa;
}
#crediti .tc-card h4 {
  font-size:18px;
  color:#153953;
  margin:9px 0;
}
#crediti .tc-card p {
  color:#536d7d;
  font-size:13px;
  line-height:1.8;
  margin:8px 0;
}
#crediti .tc-icon {
  display:block;
  font-size:30px;
  margin-bottom:8px;
}
#crediti .tc-number {
  font-size:32px;
  font-weight:850;
  color:#087c95;
  line-height:1.2;
}
#crediti .tc-number small {
  font-size:12px;
  font-weight:600;
  color:#69818f;
}
#crediti .tc-note {
  background:#eaf8f5;
  border-left:4px solid #19a998;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  font-size:13px;
  line-height:1.8;
  color:#315b57;
}
#crediti .tc-warning {
  background:#fff8e9;
  border-left:4px solid #d6a54b;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  font-size:13px;
  line-height:1.8;
  color:#765e30;
}
#crediti .tc-flow {
  display:flex;
  align-items:stretch;
  gap:10px;
  margin:24px 0;
}
#crediti .tc-flow-box {
  flex:1;
  min-width:0;
  background:#eff8fa;
  border:1px solid #d5eaf0;
  border-radius:15px;
  padding:17px 12px;
  text-align:center;
}
#crediti .tc-flow-box strong {
  display:block;
  color:#164b67;
  font-size:15px;
  margin-bottom:7px;
}
#crediti .tc-flow-box span {
  color:#536d7d;
  font-size:12px;
  line-height:1.65;
}
#crediti .tc-arrow {
  align-self:center;
  color:#1399a6;
  font-size:23px;
  font-weight:800;
}
#crediti .tc-table-wrap {
  overflow-x:auto;
  border:1px solid #dce8ef;
  border-radius:15px;
  margin:22px 0;
}
#crediti .tc-table {
  width:100%;
  border-collapse:collapse;
  min-width:480px;
}
#crediti .tc-table th {
  background:#123650;
  color:white;
  font-size:13px;
  text-align:left;
  padding:15px 13px;
}
#crediti .tc-table td {
  padding:14px 13px;
  border-bottom:1px solid #e2eaf0;
  color:#36586e;
  font-size:13px;
  line-height:1.6;
}
#crediti .tc-table tr:nth-child(even) td {
  background:#f4f8fb;
}
#crediti .tc-table tr:last-child td {
  border-bottom:0;
}
#crediti .tc-table td:first-child {
  font-weight:750;
  color:#153a54;
}
#crediti .tc-badge {
  display:inline-block;
  padding:6px 11px;
  background:#ffffffbd;
  border-radius:25px;
  color:#31566b;
  font-size:11px;
  font-weight:800;
}
#crediti .tc-checkout {
  background:#f5f9fc;
  border:1px solid #dce8ef;
  border-radius:20px;
  padding:24px;
  margin:23px 0;
}
#crediti .tc-checkout h4 {
  color:#153953;
  font-size:20px;
  margin:0 0 18px;
}
#crediti .tc-receipt-row {
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:14px;
  padding:14px 0;
  border-bottom:1px dashed #d6e4eb;
  color:#48677a;
  font-size:14px;
  line-height:1.5;
}
#crediti .tc-receipt-row strong {
  color:#153a54;
  text-align:right;
  white-space:nowrap;
}
#crediti .tc-receipt-row:last-child {
  border-bottom:0;
}
#crediti .tc-receipt-total {
  margin-top:16px;
  border-radius:14px;
  background:linear-gradient(135deg,#0d7d83,#1da38f);
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  padding:21px;
  color:white;
}
#crediti .tc-receipt-total b {
  font-size:32px;
  color:white;
}
#crediti .tc-comparison {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#crediti .tc-versus {
  border-radius:18px;
  padding:22px;
  background:#fff8e8;
  border:1px solid #f1e3bd;
}
#crediti .tc-versus:last-child {
  background:#ecf8f6;
  border-color:#cfe9e4;
}
#crediti .tc-versus h4 {
  color:#163b56;
  margin:0 0 12px;
  font-size:19px;
}
#crediti .tc-versus p {
  color:#536d7d;
  font-size:13px;
  line-height:1.8;
}
#crediti .tc-quiz {
  background:#f6f0ff;
  border:1px solid #e7dafb;
  border-radius:17px;
  padding:22px;
  margin:18px 0;
}
#crediti .tc-quiz h4 {
  color:#253453;
  margin:10px 0;
  font-size:17px;
}
#crediti .tc-quiz p {
  color:#5c637e;
  font-size:13px;
  line-height:1.8;
  margin:6px 0;
}
#crediti .tc-quiz details {
  margin-top:13px;
  background:white;
  border-radius:12px;
  padding:12px;
}
#crediti .tc-summary {
  background:linear-gradient(135deg,#0c3557,#117d91);
  color:white;
  padding:25px;
  border-radius:18px;
  margin:23px 0;
}
#crediti .tc-summary h4 {
  color:white;
  margin:0 0 12px;
  font-size:21px;
}
#crediti .tc-summary p {
  color:#e0f5f6;
  line-height:1.85;
  font-size:14px;
}
@media(max-width:850px) {
  #crediti .tc-grid {
    grid-template-columns:1fr;
  }
}
@media(max-width:700px) {
  #crediti .tc-hero,
  #crediti .tc-two,
  #crediti .tc-comparison {
    grid-template-columns:1fr;
  }
  #crediti .tc-flow {
    flex-direction:column;
  }
  #crediti .tc-arrow {
    transform:rotate(90deg);
  }
}
@media(max-width:600px) {
  #crediti .tc-title {
    font-size:21px;
  }
  #crediti .tc-receipt-total b {
    font-size:26px;
  }
}
</style>

<!-- INTESTAZIONE -->

<div class="section-head">
  <span class="kicker">
    Capitolo 04 · Cashback sui viaggi
  </span>
  <h2>Crediti Viaggio</h2>
  <p>
    Il cashback di Travel Advantage.
    Scopri come accumulare Crediti Viaggio,
    quanto valgono e come utilizzarli
    per ridurre il costo delle vacanze.
  </p>
</div>

<div class="section-body">

<!-- INTRODUZIONE -->

<div class="tc-hero">
  <div>
    <span class="tc-label">Partiamo dalle basi</span>
    <h3 class="tc-title">
      💵 Che cosa sono i Crediti Viaggio?
    </h3>
    <p class="tc-intro">
      I <strong>Crediti Viaggio</strong>,
      chiamati anche Travel Credits,
      sono il sistema di cashback
      di Travel Advantage.
      <br><br>
      Ogni volta che prenoti un servizio
      di viaggio idoneo, puoi accumulare
      crediti da utilizzare per pagare
      le prenotazioni successive.
    </p>
    <div class="tc-note">
      <strong>💡 Il vantaggio principale</strong>
      <br>
      I crediti sono cumulabili,
      non hanno scadenza e possono
      coprire fino al 100%
      di una prenotazione idonea.
    </div>
  </div>

  <div class="tc-graphic">
    <div class="tc-coin">💵</div>
    <h4>Viaggia e accumula</h4>
    <p>
      Ogni prenotazione può contribuire
      al risparmio sul prossimo viaggio.
    </p>

    <div class="tc-graphic-flow">
      <div>✈️<br>Prenota</div>
      <div>→</div>
      <div>💰<br>Accumula</div>
      <div>→</div>
      <div>🏝️<br>Risparmia</div>
    </div>
  </div>
</div>

<!-- VALORE DEI CREDITI -->

<h3 class="tc-title">
  💱 1. Quanto valgono i Crediti Viaggio?
</h3>

<div class="tc-card green" style="text-align:center">
  <span class="tc-label">Conversione dei crediti</span>
  <div class="tc-number" style="font-size:38px;margin:17px 0">
    100 CV = 1 $
  </div>
  <p>
    Ogni 100 Crediti Viaggio
    corrispondono a un dollaro USA.
  </p>
</div>

<div class="tc-grid">

  <div class="tc-card blue">
    <span class="tc-icon">💵</span>
    <div class="tc-number">1.000 CV</div>
    <h4>= 10 $</h4>
    <p>Un primo importo accumulato.</p>
  </div>

  <div class="tc-card green">
    <span class="tc-icon">💰</span>
    <div class="tc-number">10.000 CV</div>
    <h4>= 100 $</h4>
    <p>Un credito più consistente per viaggiare.</p>
  </div>

  <div class="tc-card gold">
    <span class="tc-icon">🏝️</span>
    <div class="tc-number">25.000 CV</div>
    <h4>= 250 $</h4>
    <p>Da utilizzare per prenotazioni idonee.</p>
  </div>

</div>

<div class="tc-two">

  <div class="tc-card green">
    <span class="tc-icon">♾️</span>
    <h4>Senza scadenza</h4>
    <p>
      I Crediti Viaggio non hanno
      una data di scadenza
      e si possono accumulare
      nel tempo nel proprio account.
    </p>
  </div>

  <div class="tc-card blue">
    <span class="tc-icon">💳</span>
    <h4>Fino al 100%</h4>
    <p>
      Possono essere utilizzati
      come credito digitale
      per pagare anche l'intero
      importo di una prenotazione idonea.
    </p>
  </div>

  <div class="tc-card gold">
    <span class="tc-icon">🔄</span>
    <h4>Acquisto e trasferimento</h4>
    <p>
      I Crediti Viaggio possono
      essere acquistati e trasferiti
      ad altri membri della piattaforma,
      attraverso le funzionalità previste.
    </p>
  </div>

  <div class="tc-card purple">
    <span class="tc-icon">🏦</span>
    <h4>Non prelevabili</h4>
    <p>
      Non possono essere convertiti
      in un bonifico bancario
      o prelevati in contanti.
      Sono destinati all'utilizzo
      all'interno della piattaforma.
    </p>
  </div>

</div>

<div class="tc-warning">
  <strong>💱 Dollari ed euro</strong>
  <br>
  Il valore dei crediti è espresso
  in dollari USA.
  Quando la prenotazione è mostrata
  in euro, il valore applicato
  dipende dalla conversione
  utilizzata nel checkout.
</div>

<!-- ACCUMULO -->

<h3 class="tc-title">
  🎁 2. Come si accumulano?
</h3>

<p class="tc-intro">
  Esistono diverse possibilità
  per ottenere Crediti Viaggio:
  non soltanto prenotando vacanze,
  ma anche condividendo
  la piattaforma e partecipando
  alle iniziative disponibili.
</p>

<div class="tc-grid">

  <div class="tc-card blue">
    <span class="tc-badge">01 · PRENOTAZIONI</span>
    <span class="tc-icon">✈️</span>
    <h4>Prenotazioni personali</h4>
    <p>
      Prenotando hotel, voli,
      treni, auto a noleggio,
      attività e altri servizi
      di viaggio idonei
      puoi ricevere cashback
      sotto forma di Crediti Viaggio.
      <br><br>
      Il cashback viene accreditato
      <strong>7 giorni dopo
      la conclusione del viaggio
      o soggiorno</strong>.
    </p>
  </div>

  <div class="tc-card green">
    <span class="tc-badge">02 · CONDIVISIONE</span>
    <span class="tc-icon">👥</span>
    <h4>Utenti Aggiuntivi</h4>
    <p>
      Quando un Utente Aggiuntivo
      effettua una prenotazione,
      i Crediti Viaggio generati
      vengono accreditati
      sul conto del
      <strong>titolare principale</strong>.
      <br><br>
      L'Utente Aggiuntivo
      può prenotare autonomamente,
      ma il cashback confluisce
      nel saldo del titolare.
    </p>
  </div>

  <div class="tc-card gold">
    <span class="tc-badge">03 · GUEST PASS</span>
    <span class="tc-icon">🎟️</span>
    <h4>Conversione Guest Pass</h4>
    <p>
      Quando regali un Guest Pass
      e la persona che lo riceve
      decide di attivare
      un abbonamento a pagamento,
      puoi ricevere un premio
      in Crediti Viaggio.
      <br><br>
      Gli importi previsti sono
      <strong>20 $, 40 $ oppure 80 $</strong>,
      a seconda della membership attivata.
    </p>
  </div>

  <div class="tc-card blue">
    <span class="tc-badge">04 · GARANZIA</span>
    <span class="tc-icon">🏆</span>
    <h4>Garanzia del 150%</h4>
    <p>
      Se trovi la stessa camera
      d'hotel a un prezzo inferiore
      su un sito pubblico
      e la richiesta soddisfa
      i requisiti della garanzia,
      l'importo riconosciuto
      viene accreditato
      sotto forma di
      <strong>Crediti Viaggio</strong>.
    </p>
  </div>

  <div class="tc-card purple">
    <span class="tc-badge">05 · SOCIAL</span>
    <span class="tc-icon">🎬</span>
    <h4>Travel Stories Contest</h4>
    <p>
      Puoi partecipare ai concorsi
      dedicati ai video di viaggio
      pubblicando un Reel
      di <strong>30–60 secondi</strong>
      su Instagram o TikTok,
      taggando gli account ufficiali.
      <br><br>
      I premi previsti includono
      <strong>10.000 CV settimanali</strong>
      e <strong>20.000 CV mensili</strong>.
      Si tratta di premi del concorso,
      non di accrediti automatici.
    </p>
  </div>

  <div class="tc-card gold">
    <span class="tc-badge">06 · AMBASSADOR</span>
    <span class="tc-icon">💼</span>
    <h4>Commissioni Ambassador</h4>
    <p>
      Gli Ambassador MWR Life
      possono scegliere
      di ricevere le proprie
      commissioni commerciali
      in Crediti Viaggio
      all'interno dell'Ewallet,
      secondo le opzioni
      disponibili per l'account.
    </p>
  </div>

</div>

<!-- TEMPI CASHBACK -->

<h3 class="tc-title">
  ⏳ 3. Quando arrivano i crediti?
</h3>

<div class="tc-flow">

  <div class="tc-flow-box">
    <strong>📱 Prenoti</strong>
    <span>
      Acquisti un servizio
      sulla piattaforma.
    </span>
  </div>

  <div class="tc-arrow">→</div>

  <div class="tc-flow-box">
    <strong>🏖️ Viaggi</strong>
    <span>
      Completi il soggiorno
      o il viaggio.
    </span>
  </div>

  <div class="tc-arrow">→</div>

  <div class="tc-flow-box">
    <strong>📅 Passano 7 giorni</strong>
    <span>
      Si conclude il periodo
      previsto per l'accredito.
    </span>
  </div>

  <div class="tc-arrow">→</div>

  <div class="tc-flow-box">
    <strong>💰 Ricevi i CV</strong>
    <span>
      Il cashback viene
      accreditato nel saldo.
    </span>
  </div>

</div>

<div class="tc-note">
  <strong>💡 Esempio</strong>
  <br>
  Prenoti un hotel a novembre
  per una vacanza che termina
  il 15 dicembre.
  <br><br>
  I Crediti Viaggio generati
  dalla prenotazione vengono
  accreditati 7 giorni dopo
  la fine del soggiorno,
  quindi il 22 dicembre,
  secondo il normale meccanismo
  di accredito.
</div>

<!-- GUEST PASS -->

<h3 class="tc-title">
  🎟️ 4. Crediti Viaggio con i Guest Pass
</h3>

<div class="tc-flow">

  <div class="tc-flow-box">
    <strong>🎁 Regali un pass</strong>
    <span>
      Inviti una persona
      a conoscere Travel Advantage.
    </span>
  </div>

  <div class="tc-arrow">→</div>

  <div class="tc-flow-box">
    <strong>👤 La persona prova</strong>
    <span>
      Utilizza l'accesso
      ospite disponibile.
    </span>
  </div>

  <div class="tc-arrow">→</div>

  <div class="tc-flow-box">
    <strong>⭐ Si abbona</strong>
    <span>
      Attiva una membership
      a pagamento.
    </span>
  </div>

  <div class="tc-arrow">→</div>

  <div class="tc-flow-box">
    <strong>💵 Ricevi crediti</strong>
    <span>
      Ottieni il premio
      previsto per la conversione.
    </span>
  </div>

</div>

<div class="tc-grid">

  <div class="tc-card green">
    <span class="tc-icon">🎫</span>
    <div class="tc-number">20 $</div>
    <p>
      Uno degli importi previsti
      per la conversione
      di un Guest Pass.
    </p>
  </div>

  <div class="tc-card green">
    <span class="tc-icon">🎫</span>
    <div class="tc-number">40 $</div>
    <p>
      Premio previsto
      per un diverso livello
      di membership attivata.
    </p>
  </div>

  <div class="tc-card green">
    <span class="tc-icon">🎫</span>
    <div class="tc-number">80 $</div>
    <p>
      Premio previsto
      per una delle membership
      che danno accesso
      al beneficio maggiore.
    </p>
  </div>

</div>

<div class="tc-note">
  <strong>🎯 Da ricordare</strong>
  <br>
  L'importo del premio dipende
  dall'abbonamento scelto
  dalla persona invitata.
  Il semplice invio di un Guest Pass
  non genera automaticamente
  il premio di conversione.
</div>

<!-- TRASFERIMENTI -->

<h3 class="tc-title">
  🔄 5. Posso trasferire i Crediti Viaggio?
</h3>

<div class="tc-two">

  <div class="tc-card green">
    <span class="tc-icon">✅</span>
    <h4>Sì, a un altro membro</h4>
    <p>
      I Crediti Viaggio
      possono essere trasferiti
      ad altri membri
      di Travel Advantage
      attraverso le funzionalità
      previste dalla piattaforma.
    </p>
  </div>

  <div class="tc-card blue">
    <span class="tc-icon">🛒</span>
    <h4>Possono essere acquistati</h4>
    <p>
      È prevista anche
      la possibilità
      di acquistare
      Crediti Viaggio,
      secondo le condizioni
      disponibili nel proprio account.
    </p>
  </div>

</div>

<div class="tc-warning">
  <strong>⚠️ Una distinzione importante</strong>
  <br>
  I Crediti Viaggio possono essere
  trasferiti ad altri membri.
  <br><br>
  I Punti Fedeltà, invece,
  appartengono esclusivamente
  al titolare e non sono trasferibili.
</div>

<!-- PUNTI VS CREDITI -->

<h3 class="tc-title">
  ⚖️ 6. Punti Fedeltà e Crediti Viaggio:
  qual è la differenza?
</h3>

<div class="tc-comparison">

  <div class="tc-versus">
    <span class="tc-icon">⭐</span>
    <h4>Punti Fedeltà</h4>
    <p>
      Sono collegati
      al tuo abbonamento mensile.
    </p>
    <p>
      <strong>Come li ottieni?</strong>
      <br>
      Attraverso gli accrediti
      della membership VIP,
      Elite o Turbo.
    </p>
    <p>
      <strong>Quanto puoi usare?</strong>
      <br>
      Dipende dal servizio.
      Per gli hotel, ad esempio,
      il limite può arrivare
      fino a 53 $ a prenotazione.
    </p>
    <p>
      <strong>Puoi trasferirli?</strong>
      <br>
      No.
    </p>
  </div>

  <div class="tc-versus">
    <span class="tc-icon">💵</span>
    <h4>Crediti Viaggio</h4>
    <p>
      Sono collegati al cashback,
      ai premi e alle altre
      modalità di accumulo.
    </p>
    <p>
      <strong>Come li ottieni?</strong>
      <br>
      Prenotazioni, Guest Pass,
      garanzie, contest
      e altre attività previste.
    </p>
    <p>
      <strong>Quanto puoi usare?</strong>
      <br>
      Fino al 100%
      di una prenotazione idonea,
      nei limiti del saldo disponibile.
    </p>
    <p>
      <strong>Puoi trasferirli?</strong>
      <br>
      Sì, ad altri membri.
    </p>
  </div>

</div>

<div class="tc-table-wrap">
  <table class="tc-table">
    <thead>
      <tr>
        <th>Caratteristica</th>
        <th>Punti Fedeltà</th>
        <th>Crediti Viaggio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Origine</td>
        <td>Abbonamento</td>
        <td>Cashback e premi</td>
      </tr>
      <tr>
        <td>Valore</td>
        <td>1 PF = 1 $</td>
        <td>100 CV = 1 $</td>
      </tr>
      <tr>
        <td>Utilizzo</td>
        <td>Limiti per servizio</td>
        <td>Fino al 100%</td>
      </tr>
      <tr>
        <td>Hotel</td>
        <td>Fino a 53 $ di sconto</td>
        <td>Fino al saldo disponibile</td>
      </tr>
      <tr>
        <td>Trasferibili</td>
        <td>No</td>
        <td>Sì</td>
      </tr>
      <tr>
        <td>Prelevabili in denaro</td>
        <td>No</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Scadenza</td>
        <td>Legati allo stato della membership</td>
        <td>Senza scadenza</td>
      </tr>
      <tr>
        <td>Possono combinarsi?</td>
        <td>Sì</td>
        <td>Sì</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- ESEMPIO CHECKOUT -->

<h3 class="tc-title">
  🧮 7. Esempio pratico:
  come pagare 0 € un hotel
</h3>

<p class="tc-intro">
  Immagina di prenotare
  una camera d'albergo
  su Travel Advantage
  al prezzo riservato
  di <strong>209,00 €</strong>.
  <br><br>
  Nel tuo account
  hai Punti Fedeltà disponibili
  e un saldo di
  <strong>23.193 Crediti Viaggio</strong>.
</p>

<div class="tc-flow">

  <div class="tc-flow-box">
    <strong>🏨 Hotel</strong>
    <span>
      Prezzo iniziale
      <br>
      <strong>209,00 €</strong>
    </span>
  </div>

  <div class="tc-arrow">→</div>

  <div class="tc-flow-box">
    <strong>⭐ Punti Fedeltà</strong>
    <span>
      Applichi 13 punti.
      <br>
      Nell'esempio: -13 €
    </span>
  </div>

  <div class="tc-arrow">→</div>

  <div class="tc-flow-box">
    <strong>💵 Crediti Viaggio</strong>
    <span>
      Copri il saldo
      residuo con i CV.
    </span>
  </div>

  <div class="tc-arrow">→</div>

  <div class="tc-flow-box">
    <strong>🎉 Totale</strong>
    <span>
      Carta di pagamento:
      <br>
      <strong>0,00 €</strong>
    </span>
  </div>

</div>

<div class="tc-checkout">

  <h4>🧾 Riepilogo della prenotazione</h4>

  <div class="tc-receipt-row">
    <span>🏨 Prezzo iniziale hotel</span>
    <strong>209,00 €</strong>
  </div>

  <div class="tc-receipt-row">
    <span>⭐ Punti Fedeltà utilizzati</span>
    <strong>13 punti</strong>
  </div>

  <div class="tc-receipt-row">
    <span>💶 Sconto punti nell'esempio</span>
    <strong>-13,00 €</strong>
  </div>

  <div class="tc-receipt-row">
    <span>📉 Importo rimanente</span>
    <strong>196,00 €</strong>
  </div>

  <div class="tc-receipt-row">
    <span>💵 Saldo Crediti Viaggio disponibile</span>
    <strong>23.193 CV</strong>
  </div>

  <div class="tc-receipt-row">
    <span>✅ Importo residuo coperto con i CV</span>
    <strong>196,00 €</strong>
  </div>

  <div class="tc-receipt-total">
    <span>
      <strong>🎉 Totale da pagare con carta</strong>
    </span>
    <b>0,00 €</b>
  </div>

</div>

<div class="tc-note">
  <strong>💡 Come funziona il checkout?</strong>
  <br>
  Prima utilizzi i Punti Fedeltà
  entro il limite consentito
  dalla prenotazione.
  <br><br>
  Poi puoi usare i Crediti Viaggio
  per coprire il costo rimanente,
  fino ad arrivare a zero.
  <br><br>
  Il saldo di 23.193 CV
  corrisponde a 231,93 dollari:
  la quantità esatta di CV
  utilizzata per coprire 196 €
  dipende dal cambio applicato.
</div>

<!-- CASHBACK SU PRENOTAZIONE A ZERO -->

<h3 class="tc-title">
  🔁 8. E se pago 0 €,
  ricevo comunque cashback?
</h3>

<div class="tc-card green" style="text-align:center">

  <span class="tc-icon">🎉</span>

  <div class="tc-number">
    +258 CV
  </div>

  <h4>
    Nuovo cashback
    sulla prenotazione dell'esempio
  </h4>

  <p>
    Anche quando il costo
    della prenotazione
    viene completamente coperto
    usando Punti Fedeltà
    e Crediti Viaggio,
    può essere riconosciuto
    un nuovo cashback.
    <br><br>
    Nell'esempio vengono generati
    <strong>258 nuovi Crediti Viaggio</strong>,
    da accreditare
    <strong>7 giorni dopo
    la conclusione del soggiorno</strong>.
  </p>

</div>

<div class="tc-flow">

  <div class="tc-flow-box">
    <strong>💳 Paghi 0 €</strong>
    <span>
      Utilizzi punti
      e Crediti Viaggio.
    </span>
  </div>

  <div class="tc-arrow">→</div>

  <div class="tc-flow-box">
    <strong>🏨 Completi il soggiorno</strong>
    <span>
      Il viaggio si conclude
      regolarmente.
    </span>
  </div>

  <div class="tc-arrow">→</div>

  <div class="tc-flow-box">
    <strong>💰 Ricevi 258 CV</strong>
    <span>
      Nuovo cashback
      nell'esempio.
    </span>
  </div>

</div>

<div class="tc-note">
  <strong>⭐ Il vantaggio del cashback ricorrente</strong>
  <br>
  Puoi utilizzare crediti accumulati
  per una prenotazione e,
  quando il servizio lo prevede,
  ricevere nuovi crediti
  da usare per i prossimi viaggi.
  <br><br>
  L'importo del cashback
  varia in base alla prenotazione.
</div>

<!-- DOMANDE FREQUENTI -->

<h3 class="tc-title">
  ❓ 9. Domande frequenti
</h3>

<details>
  <summary>
    💵 Posso farmi accreditare i CV sul conto bancario?
  </summary>
  <div>
    No. I Crediti Viaggio
    non possono essere prelevati
    come denaro contante.
    Possono essere utilizzati
    all'interno di Travel Advantage.
  </div>
</details>

<details>
  <summary>
    📅 I Crediti Viaggio scadono?
  </summary>
  <div>
    No. I Crediti Viaggio
    sono cumulabili
    e non hanno una data di scadenza.
  </div>
</details>

<details>
  <summary>
    👥 Chi riceve i crediti
    delle prenotazioni degli Utenti Aggiuntivi?
  </summary>
  <div>
    Il titolare principale
    dell'abbonamento.
    Gli Utenti Aggiuntivi
    possono prenotare autonomamente,
    ma il cashback generato
    viene accreditato
    sul saldo principale.
  </div>
</details>

<details>
  <summary>
    ⏰ Ricevo i crediti
    appena prenoto l'hotel?
  </summary>
  <div>
    No. Il cashback delle prenotazioni
    viene accreditato 7 giorni
    dopo la conclusione
    del soggiorno o viaggio.
  </div>
</details>

<details>
  <summary>
    🎟️ Basta regalare un Guest Pass
    per ricevere il premio?
  </summary>
  <div>
    No. Il premio di conversione
    è collegato all'attivazione
    di un abbonamento a pagamento
    da parte della persona invitata.
  </div>
</details>

<details>
  <summary>
    🔄 Posso regalare Crediti Viaggio
    a un altro membro?
  </summary>
  <div>
    È possibile trasferire
    Crediti Viaggio
    ad altri membri
    tramite le funzionalità
    disponibili sulla piattaforma.
  </div>
</details>

<!-- QUIZ -->

<h3 class="tc-title">
  🧠 10. Mettiti alla prova
</h3>

<div class="tc-quiz">
  <span class="tc-label">DOMANDA 01</span>
  <h4>Quanto valgono 10.000 Crediti Viaggio?</h4>
  <p>A. 10 $</p>
  <p>B. 100 $</p>
  <p>C. 1.000 $</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. 100 $.</strong>
      Il rapporto è 100 CV = 1 $.
    </div>
  </details>
</div>

<div class="tc-quiz">
  <span class="tc-label">DOMANDA 02</span>
  <h4>
    Dopo quanti giorni dal termine
    del soggiorno arrivano i CV?
  </h4>
  <p>A. Immediatamente</p>
  <p>B. Dopo 7 giorni</p>
  <p>C. Dopo 30 giorni</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. Dopo 7 giorni.</strong>
      L'accredito avviene
      dopo la conclusione
      del soggiorno o viaggio.
    </div>
  </details>
</div>

<div class="tc-quiz">
  <span class="tc-label">DOMANDA 03</span>
  <h4>
    Posso usare i Crediti Viaggio
    per pagare il 100%
    di una prenotazione idonea?
  </h4>
  <p>A. Sì, se il saldo è sufficiente</p>
  <p>B. No, massimo il 10%</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A.</strong>
      I Crediti Viaggio
      possono coprire
      anche l'intero importo.
    </div>
  </details>
</div>

<div class="tc-quiz">
  <span class="tc-label">DOMANDA 04</span>
  <h4>
    I Crediti Viaggio
    sono trasferibili?
  </h4>
  <p>A. No, mai</p>
  <p>B. Sì, ad altri membri</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      A differenza dei Punti Fedeltà,
      i Crediti Viaggio
      possono essere trasferiti.
    </div>
  </details>
</div>

<div class="tc-quiz">
  <span class="tc-label">DOMANDA 05</span>
  <h4>
    Chi riceve il cashback
    generato da un Utente Aggiuntivo?
  </h4>
  <p>A. L'Utente Aggiuntivo</p>
  <p>B. Il titolare principale</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Tutti i CV generati
      dagli Utenti Aggiuntivi
      sono accreditati
      al titolare principale.
    </div>
  </details>
</div>

<div class="tc-quiz">
  <span class="tc-label">DOMANDA 06</span>
  <h4>
    Se pago una prenotazione
    interamente con punti e CV,
    posso ricevere un nuovo cashback?
  </h4>
  <p>A. Sì, se la prenotazione lo prevede</p>
  <p>B. No, non è mai possibile</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A.</strong>
      Nell'esempio della prenotazione
      pagata a 0 € vengono
      riconosciuti 258 nuovi CV
      dopo il soggiorno.
    </div>
  </details>
</div>

<!-- RIEPILOGO -->

<h3 class="tc-title">
  🎯 Il concetto da ricordare
</h3>

<div class="tc-summary">

  <h4>
    💰 I Crediti Viaggio
    premiano i tuoi viaggi
  </h4>

  <p>
    Ogni 100 CV equivalgono a 1 $.
    <br><br>
    Puoi accumularli con prenotazioni,
    Utenti Aggiuntivi, Guest Pass,
    garanzie, contest e altre
    opportunità previste.
    <br><br>
    Non hanno scadenza,
    possono essere trasferiti
    ad altri membri e,
    se il saldo è sufficiente,
    possono coprire fino
    al 100% di una prenotazione idonea.
    <br><br>
    <strong>
      La cosa più interessante?
      Puoi combinare
      Punti Fedeltà e Crediti Viaggio
      per ridurre il costo
      della tua prossima vacanza,
      anche fino a zero.
    </strong>
  </p>

</div>

</div>
</section>
`);
