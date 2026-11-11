
window.registraSezione("abbonamenti", `
<section class="section" id="abbonamenti" data-group="viaggi">

<style>
#abbonamenti .ab-title {
  font-size:24px;
  color:#09243d;
  margin:35px 0 16px;
}
#abbonamenti .ab-intro {
  color:#536d7d;
  font-size:16px;
  line-height:1.8;
  margin-bottom:25px;
}
#abbonamenti .ab-kicker {
  display:inline-block;
  background:#e8f8f6;
  color:#087f8b;
  padding:7px 13px;
  border-radius:30px;
  font-size:11px;
  font-weight:800;
  letter-spacing:.07em;
  text-transform:uppercase;
}
#abbonamenti .ab-hero {
  display:grid;
  grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);
  gap:22px;
  align-items:center;
  margin-bottom:28px;
}
#abbonamenti .ab-hero > div { min-width:0; }
#abbonamenti .ab-hero .ab-title { margin:14px 0 16px; }
#abbonamenti .ab-hero .ab-intro { margin-bottom:0; }
#abbonamenti .ab-hero img {
  display:block;
  width:100%;
  max-width:100%;
  height:auto;
  object-fit:contain;
  border-radius:18px;
}
#abbonamenti .ab-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:16px;
  margin:22px 0;
}
#abbonamenti .ab-two {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:16px;
  margin:18px 0;
}
#abbonamenti .ab-card {
  border:1px solid #e0ebf0;
  background:#f5f9fc;
  border-radius:20px;
  padding:22px;
  min-width:0;
}
#abbonamenti .ab-card.vip {
  background:#eef7ff;
  border-color:#c9e5fa;
}
#abbonamenti .ab-card.elite {
  background:#fff9eb;
  border-color:#f0dfb5;
}
#abbonamenti .ab-card.turbo {
  background:#f5efff;
  border-color:#e2d1ff;
}
#abbonamenti .ab-card h3 {
  color:#122e49;
  font-size:25px;
  margin:8px 0;
}
#abbonamenti .ab-card p,
#abbonamenti .ab-box p {
  color:#526c7c;
  font-size:13px;
  line-height:1.75;
}
#abbonamenti .ab-price {
  font-size:29px;
  font-weight:800;
  color:#102d47;
  margin:16px 0 3px;
}
#abbonamenti .ab-price small {
  font-size:13px;
  font-weight:500;
}
#abbonamenti .ab-pill {
  display:inline-block;
  font-size:11px;
  font-weight:800;
  border-radius:25px;
  padding:6px 11px;
  background:white;
  color:#31556b;
}
#abbonamenti .ab-metric {
  background:#ffffffb5;
  border-radius:13px;
  padding:13px;
  margin-top:10px;
}
#abbonamenti .ab-metric strong {
  display:block;
  font-size:21px;
  color:#103753;
}
#abbonamenti .ab-metric span {
  display:block;
  font-size:12px;
  color:#607c8d;
  line-height:1.5;
}
#abbonamenti .ab-box {
  background:#f3f8fb;
  border:1px solid #e0ebf0;
  border-radius:17px;
  padding:20px;
}
#abbonamenti .ab-box.green {
  background:#effaf5;
  border-color:#d7efe3;
}
#abbonamenti .ab-box.gold {
  background:#fff9ea;
  border-color:#f3e5c1;
}
#abbonamenti .ab-box.purple {
  background:#f6f0ff;
  border-color:#e5d8fa;
}
#abbonamenti .ab-box h4 {
  margin:9px 0;
  font-size:18px;
  color:#173c57;
}
#abbonamenti .ab-emoji { font-size:29px; }
#abbonamenti .ab-flow {
  display:flex;
  align-items:stretch;
  gap:10px;
  margin:22px 0;
}
#abbonamenti .ab-flow-item {
  flex:1;
  min-width:0;
  border-radius:15px;
  background:#ecf7fa;
  border:1px solid #d5ebf2;
  padding:17px 12px;
  text-align:center;
}
#abbonamenti .ab-flow-item b {
  display:block;
  font-size:15px;
  color:#164b67;
  margin-bottom:8px;
}
#abbonamenti .ab-flow-item span {
  color:#536d7d;
  font-size:12px;
  line-height:1.6;
}
#abbonamenti .ab-flow-arrow {
  flex:0 0 auto;
  align-self:center;
  color:#1299a6;
  font-size:23px;
  font-weight:800;
}
#abbonamenti .ab-services {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:10px;
  margin:20px 0;
}
#abbonamenti .ab-service {
  background:#f3f8fb;
  border:1px solid #e2edf1;
  border-radius:12px;
  padding:16px 11px;
  text-align:center;
  color:#23475d;
  font-weight:650;
  font-size:13px;
  line-height:1.5;
}
#abbonamenti .ab-service span {
  display:block;
  font-size:27px;
  margin-bottom:7px;
}
#abbonamenti .ab-service.extra {
  background:#fff8e8;
  border-color:#f1e4c6;
}
#abbonamenti .ab-highlight {
  font-size:28px;
  font-weight:800;
  color:#087f8b;
}
#abbonamenti .ab-note {
  background:#eaf8f5;
  border-left:4px solid #1aa99a;
  border-radius:10px;
  padding:18px;
  margin:20px 0;
  color:#315b57;
  font-size:13px;
  line-height:1.75;
}
#abbonamenti .ab-warning {
  background:#fff9ea;
  border-left:4px solid #d5a545;
  border-radius:10px;
  padding:17px;
  margin:18px 0;
  color:#735c2f;
  font-size:13px;
  line-height:1.7;
}
#abbonamenti .ab-comparison {
  width:100%;
  overflow-x:auto;
  margin:24px 0;
  border-radius:16px;
  border:1px solid #dce8ef;
}
#abbonamenti .ab-comparison table {
  width:100%;
  min-width:610px;
  border-collapse:collapse;
}
#abbonamenti .ab-comparison th {
  padding:15px 13px;
  background:#123650;
  color:white;
  font-size:13px;
  text-align:center;
}
#abbonamenti .ab-comparison td {
  padding:14px 12px;
  border-bottom:1px solid #e2eaf0;
  color:#36586e;
  font-size:12px;
  text-align:center;
  vertical-align:middle;
}
#abbonamenti .ab-comparison th:first-child,
#abbonamenti .ab-comparison td:first-child {
  text-align:left;
}
#abbonamenti .ab-comparison td:first-child {
  font-weight:750;
  color:#153a54;
  width:28%;
}
#abbonamenti .ab-comparison tr:nth-child(even) td {
  background:#f4f8fb;
}
#abbonamenti .ab-quiz {
  background:#f6f0ff;
  border:1px solid #e7dafb;
  border-radius:17px;
  padding:22px;
  margin:18px 0;
}
#abbonamenti .ab-quiz h4 {
  font-size:17px;
  margin:9px 0 13px;
  color:#253453;
}
#abbonamenti .ab-quiz p {
  color:#5c637e;
  line-height:1.7;
}
#abbonamenti .ab-quiz details {
  background:white;
  border-radius:12px;
  margin-top:13px;
  padding:12px;
}
#abbonamenti .ab-breakdown {
  display:flex;
  gap:5px;
  margin:20px 0 8px;
}
#abbonamenti .ab-breakdown div {
  flex:1;
  text-align:center;
  padding:18px 8px;
  background:#e7f5f8;
  border-radius:12px;
}
#abbonamenti .ab-breakdown div:nth-child(2) {
  background:#fff2d3;
}
#abbonamenti .ab-breakdown div:nth-child(3) {
  background:#ecdcff;
}
#abbonamenti .ab-breakdown b {
  display:block;
  font-size:25px;
  color:#143a57;
}
#abbonamenti .ab-breakdown span {
  display:block;
  font-size:11px;
  color:#607587;
}
#abbonamenti .ab-mini {
  font-size:12px;
  color:#718795;
  line-height:1.65;
}
@media(max-width:850px) {
  #abbonamenti .ab-grid {
    grid-template-columns:1fr;
  }
  #abbonamenti .ab-services {
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
}
@media(max-width:700px) {
  #abbonamenti .ab-hero {
    grid-template-columns:1fr;
  }
}
@media(max-width:600px) {
  #abbonamenti .ab-two {
    grid-template-columns:1fr;
  }
  #abbonamenti .ab-flow {
    flex-direction:column;
  }
  #abbonamenti .ab-flow-arrow {
    transform:rotate(90deg);
  }
  #abbonamenti .ab-title {
    font-size:21px;
  }
}
</style>

<div class="section-head">
  <span class="kicker">Capitolo 02 · Scegli la tua membership</span>
  <h2>Abbonamenti VIP, Elite e Turbo</h2>
  <p>
    Tre livelli, tanti modi di viaggiare.
    Scopri cosa include ogni abbonamento,
    quanti utenti puoi aggiungere
    e come funzionano punti e vantaggi.
  </p>
</div>

<div class="section-body">

<!-- INTRO CON IMMAGINE A DESTRA -->

<div class="ab-hero">
  <div>
    <span class="ab-kicker">Partiamo dalle basi</span>
    <h3 class="ab-title">🎟️ Quale abbonamento scegliere?</h3>
    <p class="ab-intro">
      Travel Advantage offre diversi livelli
      di accesso alla piattaforma.
      Ogni membership permette di prenotare viaggi,
      ma cambiano i servizi disponibili,
      il numero di Utenti Aggiuntivi,
      i Punti Fedeltà e i vantaggi extra.
    </p>
  </div>

  <img
    src="assets/infografica-abbonamenti.png"
    alt="Confronto tra VIP, Elite e Turbo"
    loading="lazy"
  >
</div>

<!-- PANORAMICA DEI PIANI -->

<div class="ab-grid">

  <div class="ab-card vip">
    <span class="ab-pill">🌊 PER INIZIARE</span>
    <h3>VIP</h3>
    <p>
      Perfetto per iniziare a utilizzare
      la piattaforma e per chi
      viaggia occasionalmente.
    </p>

    <div class="ab-price">
      $19.97 <small>/mese</small>
    </div>
    <p>
      Oppure <strong>$99 ogni 6 mesi</strong>,
      con attivazione gratuita.
    </p>

    <div class="ab-metric">
      <strong>9 servizi</strong>
      <span>Servizi viaggio di base</span>
    </div>
    <div class="ab-metric">
      <strong>2 account</strong>
      <span>1 titolare + 1 Utente Aggiuntivo</span>
    </div>
    <div class="ab-metric">
      <strong>20 punti/mese</strong>
      <span>Bloccati fino all'upgrade</span>
    </div>
  </div>

  <div class="ab-card elite">
    <span class="ab-pill">⭐ PIÙ POSSIBILITÀ</span>
    <h3>ELITE</h3>
    <p>
      Per chi viaggia frequentemente
      e vuole sfruttare tutti
      i principali servizi disponibili.
    </p>

    <div class="ab-price">
      $119.97 <small>/mese</small>
    </div>
    <p>
      Più <strong>$120 di attivazione</strong>
      una tantum.
    </p>

    <div class="ab-metric">
      <strong>20 servizi</strong>
      <span>Gamma completa dei servizi viaggio</span>
    </div>
    <div class="ab-metric">
      <strong>5 account</strong>
      <span>1 titolare + 4 Utenti Aggiuntivi</span>
    </div>
    <div class="ab-metric">
      <strong>120 punti/mese</strong>
      <span>Utilizzabili secondo il programma</span>
    </div>
  </div>

  <div class="ab-card turbo">
    <span class="ab-pill">🚀 MASSIMI VANTAGGI</span>
    <h3>TURBO</h3>
    <p>
      Il potenziamento di Elite
      per ricevere più punti,
      maggiore flessibilità e vantaggi extra.
    </p>

    <div class="ab-price">
      $250 <small>una tantum</small>
    </div>
    <p>
      Upgrade aggiuntivo,
      mantenendo il canone Elite
      di <strong>$119.97/mese</strong>.
    </p>

    <div class="ab-metric">
      <strong>20 servizi</strong>
      <span>Tutti i servizi Elite</span>
    </div>
    <div class="ab-metric">
      <strong>5 account</strong>
      <span>4 Utenti Aggiuntivi modificabili ogni 6 mesi</span>
    </div>
    <div class="ab-metric">
      <strong>240 punti/mese</strong>
      <span>+250 punti una tantum all'upgrade</span>
    </div>
  </div>

</div>

<div class="ab-note">
  <strong>💡 Prima cosa da sapere:</strong><br>
  Per utilizzare Travel Advantage basta
  scegliere una membership.
  Non è necessario diventare Ambassador.
  La licenza Ambassador da $99 all'anno
  è separata e serve a chi desidera
  sviluppare l'attività di promozione.
</div>

<!-- UTENTI AGGIUNTIVI -->

<h3 class="ab-title">
  👥 1. Utenti Aggiuntivi: come funzionano?
</h3>

<p class="ab-intro">
  Gli abbonamenti permettono di condividere
  l'accesso alla piattaforma con altre persone.
  Non si creano nuovi abbonamenti VIP o Elite:
  si aggiungono <strong>Utenti Aggiuntivi</strong>,
  chiamati anche Viaggiatori Aggiuntivi.
</p>

<div class="ab-flow">
  <div class="ab-flow-item">
    <b>👤 Titolare</b>
    <span>Attiva la membership Travel Advantage</span>
  </div>
  <div class="ab-flow-arrow">→</div>
  <div class="ab-flow-item">
    <b>➕ Aggiunge utenti</b>
    <span>Assegna gli accessi del proprio piano</span>
  </div>
  <div class="ab-flow-arrow">→</div>
  <div class="ab-flow-item">
    <b>📱 Account indipendenti</b>
    <span>Ogni persona accede e prenota autonomamente</span>
  </div>
</div>

<div class="ab-two">

  <div class="ab-box green">
    <span class="ab-emoji">📲</span>
    <h4>Account personale</h4>
    <p>
      Ogni Utente Aggiuntivo riceve
      un account autonomo con
      <strong>email e password dedicate</strong>.
      Può scaricare l'app e accedere
      dal proprio dispositivo.
    </p>
  </div>

  <div class="ab-box green">
    <span class="ab-emoji">🌍</span>
    <h4>Viaggia in autonomia</h4>
    <p>
      Può cercare e prenotare viaggi
      anche se il titolare si trova
      dall'altra parte del mondo.
      Non devono viaggiare insieme.
    </p>
  </div>

  <div class="ab-box gold">
    <span class="ab-emoji">🏷️</span>
    <h4>Stessi vantaggi di prenotazione</h4>
    <p>
      Gli Utenti Aggiuntivi possono
      usufruire delle tariffe
      e degli sconti riservati
      dalla membership del titolare.
    </p>
  </div>

  <div class="ab-box gold">
    <span class="ab-emoji">💵</span>
    <h4>Crediti al titolare</h4>
    <p>
      Tutti i Crediti Viaggio generati
      dalle prenotazioni degli Utenti Aggiuntivi
      vengono accumulati sul conto
      del <strong>titolare principale</strong>.
    </p>
  </div>

</div>

<div class="ab-warning">
  <strong>⚠️ Non confondere le due figure</strong>
  <br><br>
  <strong>Utente Aggiuntivo:</strong>
  ha un proprio account, accede
  autonomamente e può prenotare da solo.
  <br><br>
  <strong>Ospite semplice:</strong>
  è una persona inserita nella rubrica
  o in una prenotazione, senza un
  account autonomo sulla piattaforma.
</div>

<h3 class="ab-title">
  👨‍👩‍👧‍👦 Quante persone possono viaggiare?
</h3>

<div class="ab-grid">

  <div class="ab-card vip">
    <h3>VIP</h3>
    <div class="ab-highlight">2 account</div>
    <p>1 titolare + 1 Utente Aggiuntivo fisso</p>
    <div class="ab-metric">
      <strong>20 adulti</strong>
      <span>Capienza complessiva teorica</span>
    </div>
    <div class="ab-metric">
      <strong>12 bambini</strong>
      <span>Capienza complessiva teorica</span>
    </div>
  </div>

  <div class="ab-card elite">
    <h3>ELITE</h3>
    <div class="ab-highlight">5 account</div>
    <p>1 titolare + 4 Utenti Aggiuntivi fissi</p>
    <div class="ab-metric">
      <strong>50 adulti</strong>
      <span>Capienza complessiva teorica</span>
    </div>
    <div class="ab-metric">
      <strong>30 bambini</strong>
      <span>Capienza complessiva teorica</span>
    </div>
  </div>

  <div class="ab-card turbo">
    <h3>TURBO</h3>
    <div class="ab-highlight">5 account</div>
    <p>1 titolare + 4 Utenti modificabili</p>
    <div class="ab-metric">
      <strong>50 adulti</strong>
      <span>Capienza complessiva teorica</span>
    </div>
    <div class="ab-metric">
      <strong>30 bambini</strong>
      <span>Capienza complessiva teorica</span>
    </div>
  </div>

</div>

<div class="ab-note">
  <strong>🧮 Da dove arrivano i numeri?</strong>
  <br>
  Ogni account può prenotare
  per un massimo di
  <strong>10 adulti e 6 bambini</strong>.
  <br><br>
  VIP: 2 account × 10 adulti = 20 adulti.
  <br>
  Elite/Turbo: 5 account × 10 adulti = 50 adulti.
  <br><br>
  È la somma della capienza dei singoli account,
  non un'unica prenotazione per tutti.
</div>

<details>
  <summary>🔍 Posso cambiare gli Utenti Aggiuntivi?</summary>
  <div>
    <strong>VIP:</strong> 1 Utente Aggiuntivo fisso,
    non modificabile.
    <br><br>
    <strong>Elite:</strong> 4 Utenti Aggiuntivi fissi,
    non modificabili.
    <br><br>
    <strong>Turbo:</strong> 4 Utenti Aggiuntivi
    modificabili o sostituibili ogni 6 mesi
    tramite Flex Traveler.
  </div>
</details>

<!-- SERVIZI VIP -->

<h3 class="ab-title">🌊 2. Tutti i servizi VIP</h3>

<p class="ab-intro">
  Con VIP puoi accedere a
  <strong>9 servizi</strong>
  per organizzare i tuoi viaggi.
</p>

<div class="ab-services">
  <div class="ab-service"><span>🏨</span>Hotel</div>
  <div class="ab-service"><span>🏝️</span>Resort</div>
  <div class="ab-service"><span>✈️</span>Voli</div>
  <div class="ab-service"><span>🚗</span>Noleggio auto</div>
  <div class="ab-service"><span>🚐</span>Trasferimenti privati</div>
  <div class="ab-service"><span>🎟️</span>Attività ed escursioni</div>
  <div class="ab-service"><span>🛂</span>Visti turistici</div>
  <div class="ab-service"><span>📶</span>eSIM</div>
  <div class="ab-service"><span>🛡️</span>Assicurazioni</div>
</div>

<details>
  <summary>🔍 Quali assicurazioni sono disponibili?</summary>
  <div>
    Sono disponibili soluzioni assicurative
    per esigenze sanitarie e per
    la protezione delle prenotazioni.
    Coperture, massimali ed esclusioni
    dipendono dalla polizza selezionata.
  </div>
</details>

<h3 class="ab-title">🎁 I vantaggi VIP</h3>

<div class="ab-two">

  <div class="ab-box">
    <span class="ab-emoji">⭐</span>
    <h4>20 Punti Fedeltà al mese</h4>
    <p>
      Accumuli 20 punti ogni mese.
      Rimangono bloccati fino a quando
      effettui un upgrade a Elite o Turbo.
    </p>
  </div>

  <div class="ab-box">
    <span class="ab-emoji">🎫</span>
    <h4>Guest Pass VIP</h4>
    <p>
      <strong>Formula mensile:</strong><br>
      15 Guest Pass subito + 3 ogni mese.
      <br><br>
      <strong>Formula semestrale:</strong><br>
      25 Guest Pass subito + 25 ogni 6 mesi.
    </p>
  </div>

</div>

<!-- SERVIZI ELITE -->

<h3 class="ab-title">⭐ 3. Tutti i servizi Elite</h3>

<p class="ab-intro">
  Elite comprende tutti i 9 servizi VIP
  e aggiunge altri 11 servizi,
  raggiungendo <strong>20 servizi complessivi</strong>.
</p>

<span class="ab-kicker">Servizi aggiuntivi Elite</span>

<div class="ab-services">
  <div class="ab-service extra"><span>🚢</span>Crociere</div>
  <div class="ab-service extra"><span>🏡</span>Soggiorni e ville</div>
  <div class="ab-service extra"><span>⚡</span>Promozioni Lampo</div>
  <div class="ab-service extra"><span>🏖️</span>The Club</div>
  <div class="ab-service extra"><span>🌴</span>Life Experience</div>
  <div class="ab-service extra"><span>🚆</span>Treni</div>
  <div class="ab-service extra"><span>🚌</span>Autobus</div>
  <div class="ab-service extra"><span>🛍️</span>Lifestyle Mall</div>
  <div class="ab-service extra"><span>🤖</span>Pianificatore IA</div>
  <div class="ab-service extra"><span>🔎</span>Smart Finder</div>
  <div class="ab-service extra"><span>🎤</span>Biglietti eventi</div>
</div>

<div class="ab-two">

  <div class="ab-box gold">
    <span class="ab-emoji">🏖️</span>
    <h4>The Club</h4>
    <p>
      Resort e soggiorni dedicati
      che permettono di utilizzare
      i Punti Fedeltà secondo
      le condizioni delle singole proposte.
    </p>
  </div>

  <div class="ab-box gold">
    <span class="ab-emoji">🌴</span>
    <h4>Life Experience</h4>
    <p>
      Pacchetti vacanza ed esperienze
      riservate agli abbonati Elite e Turbo,
      con modalità specifiche
      di utilizzo dei punti.
    </p>
  </div>

  <div class="ab-box">
    <span class="ab-emoji">🤖</span>
    <h4>Pianificatore di viaggio IA</h4>
    <p>
      Strumento basato sull'intelligenza
      artificiale per organizzare
      e pianificare i tuoi viaggi.
    </p>
  </div>

  <div class="ab-box">
    <span class="ab-emoji">🔎</span>
    <h4>Smart Finder</h4>
    <p>
      Comparatore che aiuta a confrontare
      le proposte degli hotel
      e a scegliere la soluzione più adatta.
    </p>
  </div>

</div>

<h3 class="ab-title">🎁 I vantaggi Elite</h3>

<div class="ab-grid">

  <div class="ab-card elite">
    <span class="ab-emoji">⭐</span>
    <h3>120 punti</h3>
    <p>
      Ricevi 120 Punti Fedeltà al mese,
      utilizzabili nelle prenotazioni
      ammesse dal programma.
    </p>
  </div>

  <div class="ab-card elite">
    <span class="ab-emoji">🎫</span>
    <h3>50 + 20</h3>
    <p>
      Ricevi 50 Guest Pass subito
      e altri 20 Guest Pass ogni mese.
    </p>
  </div>

  <div class="ab-card elite">
    <span class="ab-emoji">🏝️</span>
    <h3>12 mesi</h3>
    <p>
      Dopo 12 mesi consecutivi,
      si sblocca la possibilità
      di riscattare una vacanza
      The Club o Life Experience
      per 2 persone, secondo
      i requisiti del programma.
    </p>
  </div>

</div>

<div class="ab-note">
  <strong>💡 Come funzionano i punti Elite?</strong>
  <br>
  Ricevi 120 Punti Fedeltà al mese.
  Il numero corrisponde approssimativamente
  al valore della quota mensile di $119.97.
  <br><br>
  Non sono soldi prelevabili:
  possono ridurre il costo
  delle prenotazioni idonee.
</div>

<!-- TURBO -->

<h3 class="ab-title">🚀 4. Turbo: il potenziamento Elite</h3>

<p class="ab-intro">
  Turbo non è un abbonamento separato:
  è un <strong>upgrade di Elite</strong>
  che aggiunge vantaggi extra.
</p>

<div class="ab-flow">
  <div class="ab-flow-item">
    <b>⭐ ELITE</b>
    <span>$119.97 al mese</span>
  </div>
  <div class="ab-flow-arrow">+</div>
  <div class="ab-flow-item">
    <b>🚀 UPGRADE</b>
    <span>$250 una tantum</span>
  </div>
  <div class="ab-flow-arrow">=</div>
  <div class="ab-flow-item">
    <b>💎 TURBO</b>
    <span>Più punti e più vantaggi</span>
  </div>
</div>

<div class="ab-grid">

  <div class="ab-card turbo">
    <span class="ab-emoji">⭐</span>
    <h3>250 punti subito</h3>
    <p>
      All'attivazione dell'upgrade Turbo
      ricevi <strong>250 Punti Fedeltà
      una tantum</strong>.
    </p>
  </div>

  <div class="ab-card turbo">
    <span class="ab-emoji">📈</span>
    <h3>240 punti/mese</h3>
    <p>
      Ogni mese ricevi 240 Punti Fedeltà,
      il doppio dei 120 punti Elite.
    </p>
  </div>

  <div class="ab-card turbo">
    <span class="ab-emoji">🎟️</span>
    <h3>1.500 Guest Pass</h3>
    <p>
      Ricevi subito 1.500 Guest Pass,
      dal valore commerciale
      indicato di $300.
    </p>
  </div>

</div>

<div class="ab-two">

  <div class="ab-box purple">
    <span class="ab-emoji">🔄</span>
    <h4>Flex Traveler</h4>
    <p>
      Puoi modificare o sostituire
      i 4 Utenti Aggiuntivi
      <strong>ogni 6 mesi</strong>.
    </p>
  </div>

  <div class="ab-box purple">
    <span class="ab-emoji">🏨</span>
    <h4>Sconto hotel aggiuntivo</h4>
    <p>
      Fino all'11% di sconto extra
      sugli hotel idonei,
      con un possibile risparmio
      aggiuntivo fino a circa 200 €
      per prenotazione.
    </p>
  </div>

  <div class="ab-box purple">
    <span class="ab-emoji">🏖️</span>
    <h4>Life Experience</h4>
    <p>
      Puoi applicare 100 Punti Fedeltà
      extra alle Life Experience
      per un secondo ospite,
      secondo le condizioni previste.
    </p>
  </div>

  <div class="ab-box purple">
    <span class="ab-emoji">💰</span>
    <h4>Canone invariato</h4>
    <p>
      Dopo l'upgrade una tantum di $250,
      il canone mensile rimane
      quello Elite: <strong>$119.97</strong>.
    </p>
  </div>

</div>

<!-- PUNTI -->

<h3 class="ab-title">⭐ 5. Confrontiamo i Punti Fedeltà</h3>

<div class="ab-breakdown">
  <div><b>20</b><span>VIP / mese</span></div>
  <div><b>120</b><span>Elite / mese</span></div>
  <div><b>240</b><span>Turbo / mese</span></div>
</div>

<div class="ab-two">

  <div class="ab-box">
    <h4>🌊 VIP</h4>
    <p>
      20 punti mensili,
      bloccati fino all'upgrade.
    </p>
  </div>

  <div class="ab-box">
    <h4>⭐ Elite</h4>
    <p>
      120 punti mensili
      utilizzabili nei servizi idonei.
    </p>
  </div>

  <div class="ab-box purple">
    <h4>🚀 Turbo</h4>
    <p>
      240 punti mensili
      più 250 punti una tantum
      all'attivazione dell'upgrade.
    </p>
  </div>

  <div class="ab-box gold">
    <h4>🏝️ Dove si utilizzano?</h4>
    <p>
      Hotel, The Club e Life Experience,
      secondo le regole del programma.
    </p>
  </div>

</div>

<details>
  <summary>🧮 Quanti punti accumulo in 12 mesi?</summary>
  <div>
    <strong>VIP:</strong> 20 × 12 = 240 punti,
    bloccati fino all'upgrade.
    <br><br>
    <strong>Elite:</strong> 120 × 12 = 1.440 punti.
    <br><br>
    <strong>Turbo:</strong> 240 × 12 = 2.880 punti,
    più 250 punti iniziali.
    <br><br>
    <strong>Totale teorico Turbo:
    3.130 punti nel primo anno.</strong>
    <br><br>
    Il calcolo considera 12 accrediti
    consecutivi e nessun utilizzo dei punti.
  </div>
</details>

<!-- GUEST PASS -->

<h3 class="ab-title">🎫 6. Confrontiamo i Guest Pass</h3>

<div class="ab-comparison">
  <table>
    <thead>
      <tr>
        <th>Membership</th>
        <th>Subito</th>
        <th>Successivamente</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>VIP mensile</td>
        <td>15</td>
        <td>+3 ogni mese</td>
      </tr>
      <tr>
        <td>VIP semestrale</td>
        <td>25</td>
        <td>+25 ogni 6 mesi</td>
      </tr>
      <tr>
        <td>Elite</td>
        <td>50</td>
        <td>+20 ogni mese</td>
      </tr>
      <tr>
        <td>Turbo</td>
        <td>1.500</td>
        <td>Benefit dell'upgrade</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ab-note">
  <strong>🎫 A cosa servono i Guest Pass?</strong>
  <br>
  Permettono di condividere con altre persone
  un accesso ospite alle opportunità
  previste dal programma.
  <br><br>
  Un Guest Pass non equivale
  a un Utente Aggiuntivo
  e non crea un account permanente.
  <br><br>
  Modalità di invio, durata e utilizzo
  saranno approfonditi nel capitolo
  dedicato ai Guest Pass.
</div>

<!-- TABELLA COMPLETA -->

<h3 class="ab-title">
  📊 7. Tutti gli abbonamenti a confronto
</h3>

<div class="ab-comparison">
  <table>
    <thead>
      <tr>
        <th>Caratteristica</th>
        <th>VIP</th>
        <th>Elite</th>
        <th>Turbo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Canone mensile</td>
        <td>$19.97</td>
        <td>$119.97</td>
        <td>$119.97</td>
      </tr>
      <tr>
        <td>Formula semestrale</td>
        <td>$99</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>Quota attivazione</td>
        <td>Gratuita con formula semestrale</td>
        <td>$120</td>
        <td>Quota Elite + upgrade</td>
      </tr>
      <tr>
        <td>Upgrade Turbo</td>
        <td>—</td>
        <td>Facoltativo</td>
        <td>$250 una tantum</td>
      </tr>
      <tr>
        <td>Servizi</td>
        <td>9</td>
        <td>20</td>
        <td>20</td>
      </tr>
      <tr>
        <td>Utenti Aggiuntivi</td>
        <td>1</td>
        <td>4</td>
        <td>4</td>
      </tr>
      <tr>
        <td>Utenti modificabili</td>
        <td>No</td>
        <td>No</td>
        <td>Ogni 6 mesi</td>
      </tr>
      <tr>
        <td>Punti al mese</td>
        <td>20</td>
        <td>120</td>
        <td>240</td>
      </tr>
      <tr>
        <td>Punti iniziali extra</td>
        <td>—</td>
        <td>—</td>
        <td>250</td>
      </tr>
      <tr>
        <td>Utilizzo punti</td>
        <td>Bloccato fino all'upgrade</td>
        <td>Sì</td>
        <td>Sì</td>
      </tr>
      <tr>
        <td>The Club / Life Experience</td>
        <td>Non inclusi</td>
        <td>Inclusi</td>
        <td>Inclusi + extra</td>
      </tr>
      <tr>
        <td>Guest Pass iniziali</td>
        <td>15 o 25</td>
        <td>50</td>
        <td>1.500</td>
      </tr>
      <tr>
        <td>Sconto hotel extra</td>
        <td>—</td>
        <td>—</td>
        <td>Fino all'11%</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="ab-mini">
  Tutti i prezzi sono in dollari USA.
  Turbo è un upgrade di Elite:
  non sostituisce il canone mensile.
  I vantaggi e gli sconti sono applicabili
  ai servizi idonei.
</p>

<!-- ESEMPI PRATICI -->

<h3 class="ab-title">🧩 8. Esempi pratici</h3>

<div class="ab-two">

  <div class="ab-box">
    <span class="ab-emoji">👩‍❤️‍👨</span>
    <h4>Una coppia che viaggia ogni tanto</h4>
    <p>
      Vuole prenotare hotel, voli
      e attività senza usare
      i servizi avanzati.
      <br><br>
      <strong>Può partire da VIP.</strong>
    </p>
  </div>

  <div class="ab-box gold">
    <span class="ab-emoji">👨‍👩‍👧‍👦</span>
    <h4>Una famiglia che viaggia spesso</h4>
    <p>
      Vuole condividere l'accesso
      con più familiari e sfruttare
      punti, The Club e Life Experience.
      <br><br>
      <strong>Può valutare Elite.</strong>
    </p>
  </div>

  <div class="ab-box purple">
    <span class="ab-emoji">🌍</span>
    <h4>Chi vuole condividere con persone diverse</h4>
    <p>
      Vuole cambiare gli Utenti Aggiuntivi
      nel tempo e accumulare più punti.
      <br><br>
      <strong>Può valutare Turbo.</strong>
    </p>
  </div>

  <div class="ab-box green">
    <span class="ab-emoji">💻</span>
    <h4>Chi vuole sviluppare un'attività</h4>
    <p>
      Può scegliere la membership
      più adatta ai propri viaggi
      e attivare separatamente
      la licenza Ambassador.
    </p>
  </div>

</div>

<!-- QUIZ -->

<h3 class="ab-title">🧠 9. Mettiti alla prova</h3>

<div class="ab-quiz">
  <span class="ab-kicker">DOMANDA 01</span>
  <h4>
    Un Utente Aggiuntivo può prenotare
    senza il titolare?
  </h4>
  <p>A. No, devono viaggiare insieme</p>
  <p>B. Sì, ha un account indipendente</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Ha email, password e accesso autonomi.
    </div>
  </details>
</div>

<div class="ab-quiz">
  <span class="ab-kicker">DOMANDA 02</span>
  <h4>
    Con VIP posso utilizzare subito
    i 20 punti mensili?
  </h4>
  <p>A. Sì</p>
  <p>B. No, si sbloccano con l'upgrade</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      I punti VIP rimangono bloccati
      fino all'upgrade a Elite o Turbo.
    </div>
  </details>
</div>

<div class="ab-quiz">
  <span class="ab-kicker">DOMANDA 03</span>
  <h4>
    Quale piano permette di cambiare
    gli Utenti Aggiuntivi ogni 6 mesi?
  </h4>
  <p>A. VIP</p>
  <p>B. Elite</p>
  <p>C. Turbo</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>C. Turbo.</strong>
      Grazie alla funzione Flex Traveler.
    </div>
  </details>
</div>

<div class="ab-quiz">
  <span class="ab-kicker">DOMANDA 04</span>
  <h4>
    Se un Utente Aggiuntivo genera
    Crediti Viaggio, chi li riceve?
  </h4>
  <p>A. L'Utente Aggiuntivo</p>
  <p>B. Il titolare principale</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      I Crediti Viaggio si accumulano
      sul conto del titolare principale.
    </div>
  </details>
</div>

<div class="ab-quiz">
  <span class="ab-kicker">DOMANDA 05</span>
  <h4>
    Per utilizzare Travel Advantage
    è obbligatorio pagare
    i $99 della licenza Ambassador?
  </h4>
  <p>A. Sì</p>
  <p>B. No, la licenza è separata</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      La membership permette di viaggiare.
      La licenza Ambassador serve
      per sviluppare l'attività.
    </div>
  </details>
</div>

<!-- RIEPILOGO -->

<h3 class="ab-title">🎯 Il concetto da ricordare</h3>

<div class="ab-grid">

  <div class="ab-card vip">
    <h3>🌊 VIP</h3>
    <p>
      Servizi viaggio di base,
      1 Utente Aggiuntivo
      e 20 punti mensili bloccati.
    </p>
  </div>

  <div class="ab-card elite">
    <h3>⭐ Elite</h3>
    <p>
      20 servizi,
      4 Utenti Aggiuntivi
      e 120 punti mensili utilizzabili.
    </p>
  </div>

  <div class="ab-card turbo">
    <h3>🚀 Turbo</h3>
    <p>
      Tutti i vantaggi Elite,
      240 punti mensili,
      250 punti all'upgrade
      e più flessibilità.
    </p>
  </div>

</div>

</div>
</section>
`);
