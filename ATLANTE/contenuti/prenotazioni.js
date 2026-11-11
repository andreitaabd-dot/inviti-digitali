
window.registraSezione("prenotazioni", `
<section class="section" id="prenotazioni" data-group="viaggi">

<style>
#prenotazioni .pr-title {
  color:#09243d;
  font-size:24px;
  margin:35px 0 16px;
}
#prenotazioni .pr-intro {
  color:#536d7d;
  font-size:15px;
  line-height:1.8;
  margin:12px 0 22px;
}
#prenotazioni .pr-kicker {
  display:inline-block;
  background:#e8f8f6;
  color:#087f8b;
  border-radius:25px;
  padding:7px 13px;
  font-size:11px;
  font-weight:800;
  letter-spacing:.07em;
  text-transform:uppercase;
}
#prenotazioni .pr-hero {
  display:grid;
  grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);
  gap:24px;
  align-items:center;
  margin:0 0 30px;
}
#prenotazioni .pr-hero .pr-title {
  margin:15px 0;
}
#prenotazioni .pr-hero-art {
  min-width:0;
  background:linear-gradient(145deg,#092c4e,#117f9a);
  border-radius:22px;
  padding:26px 19px;
  color:white;
  text-align:center;
  overflow:hidden;
}
#prenotazioni .pr-hero-art h4 {
  color:white;
  font-size:21px;
  margin:14px 0 8px;
}
#prenotazioni .pr-hero-art p {
  color:#d7f1f6;
  font-size:13px;
  line-height:1.7;
}
#prenotazioni .pr-globe {
  display:flex;
  align-items:center;
  justify-content:center;
  width:112px;
  height:112px;
  margin:0 auto 18px;
  border:2px solid #ffffff68;
  background:radial-gradient(circle at 30% 25%,#61d2e0,#12627e);
  border-radius:50%;
  font-size:64px;
  box-shadow:0 15px 30px #02243c80;
}
#prenotazioni .pr-hero-icons {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:8px;
  margin-top:20px;
}
#prenotazioni .pr-hero-icons div {
  background:#ffffff18;
  border:1px solid #ffffff35;
  border-radius:12px;
  padding:11px 6px;
  font-size:12px;
  line-height:1.5;
}
#prenotazioni .pr-hero-icons span {
  display:block;
  font-size:23px;
  margin-bottom:5px;
}
#prenotazioni .pr-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#prenotazioni .pr-two {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#prenotazioni .pr-card {
  min-width:0;
  background:#f4f9fc;
  border:1px solid #dfebf0;
  border-radius:18px;
  padding:21px;
}
#prenotazioni .pr-card.blue {
  background:#eef7ff;
  border-color:#cde5fa;
}
#prenotazioni .pr-card.green {
  background:#eefaf5;
  border-color:#d3ece1;
}
#prenotazioni .pr-card.gold {
  background:#fff8e8;
  border-color:#f1e2bd;
}
#prenotazioni .pr-card.purple {
  background:#f6f0ff;
  border-color:#e5d8fa;
}
#prenotazioni .pr-card h4 {
  color:#153953;
  font-size:18px;
  margin:9px 0;
}
#prenotazioni .pr-card p {
  color:#536d7d;
  font-size:13px;
  line-height:1.8;
  margin:8px 0;
}
#prenotazioni .pr-icon {
  display:block;
  font-size:30px;
  margin-bottom:8px;
}
#prenotazioni .pr-number {
  font-size:32px;
  font-weight:850;
  color:#087f95;
  line-height:1.25;
}
#prenotazioni .pr-number small {
  font-size:12px;
  font-weight:600;
  color:#698392;
}
#prenotazioni .pr-badge {
  display:inline-block;
  background:#ffffffc7;
  border-radius:25px;
  padding:6px 11px;
  font-size:11px;
  font-weight:800;
  color:#31566b;
}
#prenotazioni .pr-note {
  background:#eaf8f5;
  border-left:4px solid #19a998;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  color:#315b57;
  font-size:13px;
  line-height:1.8;
}
#prenotazioni .pr-warning {
  background:#fff8e9;
  border-left:4px solid #d5a545;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  color:#745d32;
  font-size:13px;
  line-height:1.8;
}
#prenotazioni .pr-danger {
  background:#fff0f0;
  border-left:4px solid #d85b5b;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  color:#873c3c;
  font-size:13px;
  line-height:1.8;
}
#prenotazioni .pr-service-group {
  margin:23px 0;
  border:1px solid #e0ebf0;
  border-radius:19px;
  padding:20px;
  background:#fbfdff;
}
#prenotazioni .pr-service-group h4 {
  color:#103b59;
  font-size:19px;
  margin:0 0 7px;
}
#prenotazioni .pr-service-group > p {
  color:#60798a;
  font-size:13px;
  line-height:1.7;
}
#prenotazioni .pr-service-list {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:12px;
  margin-top:16px;
}
#prenotazioni .pr-service {
  background:#f2f8fb;
  border:1px solid #e0ebf0;
  border-radius:14px;
  padding:16px;
  min-width:0;
}
#prenotazioni .pr-service .pr-service-top {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
  flex-wrap:wrap;
}
#prenotazioni .pr-service h5 {
  color:#163b56;
  font-size:15px;
  margin:9px 0;
}
#prenotazioni .pr-service p {
  color:#536d7d;
  font-size:12px;
  line-height:1.75;
  margin:8px 0;
}
#prenotazioni .pr-tier {
  font-size:10px;
  font-weight:800;
  border-radius:20px;
  padding:5px 9px;
  background:#d9edff;
  color:#125887;
}
#prenotazioni .pr-tier.elite {
  background:#ffefd0;
  color:#896014;
}
#prenotazioni .pr-flow {
  display:flex;
  gap:9px;
  align-items:stretch;
  margin:23px 0;
}
#prenotazioni .pr-flow-item {
  flex:1;
  min-width:0;
  background:#edf8fa;
  border:1px solid #d4e9ef;
  border-radius:14px;
  padding:17px 11px;
  text-align:center;
}
#prenotazioni .pr-flow-item b {
  display:block;
  color:#164b67;
  font-size:14px;
  margin-bottom:7px;
}
#prenotazioni .pr-flow-item span {
  color:#536d7d;
  font-size:12px;
  line-height:1.65;
}
#prenotazioni .pr-arrow {
  align-self:center;
  color:#1299a6;
  font-size:23px;
  font-weight:800;
}
#prenotazioni .pr-step {
  display:flex;
  align-items:flex-start;
  gap:15px;
  padding:17px 0;
  border-bottom:1px solid #e1eaf0;
}
#prenotazioni .pr-step:last-child {
  border-bottom:0;
}
#prenotazioni .pr-step-num {
  display:flex;
  align-items:center;
  justify-content:center;
  width:36px;
  height:36px;
  min-width:36px;
  border-radius:50%;
  color:white;
  background:#0d7e95;
  font-weight:800;
}
#prenotazioni .pr-step-body {
  flex:1;
  min-width:0;
}
#prenotazioni .pr-step-body b {
  color:#153a54;
  font-size:15px;
}
#prenotazioni .pr-step-body p {
  color:#536d7d;
  font-size:13px;
  line-height:1.8;
  margin:7px 0;
}
#prenotazioni .pr-table-wrap {
  overflow-x:auto;
  border:1px solid #dce8ef;
  border-radius:15px;
  margin:22px 0;
}
#prenotazioni .pr-table {
  width:100%;
  border-collapse:collapse;
  min-width:540px;
}
#prenotazioni .pr-table th {
  background:#123650;
  color:white;
  font-size:13px;
  padding:15px 12px;
  text-align:center;
}
#prenotazioni .pr-table td {
  color:#36586e;
  font-size:12px;
  padding:14px 12px;
  line-height:1.6;
  text-align:center;
  border-bottom:1px solid #e2eaf0;
}
#prenotazioni .pr-table th:first-child,
#prenotazioni .pr-table td:first-child {
  text-align:left;
}
#prenotazioni .pr-table td:first-child {
  font-weight:750;
  color:#153a54;
}
#prenotazioni .pr-table tr:nth-child(even) td {
  background:#f4f8fb;
}
#prenotazioni .pr-table tr:last-child td {
  border-bottom:0;
}
#prenotazioni .pr-price-example {
  background:#f6f9fc;
  border:1px solid #dce8ef;
  border-radius:18px;
  padding:22px;
  margin:20px 0;
}
#prenotazioni .pr-price-row {
  display:flex;
  justify-content:space-between;
  gap:15px;
  padding:13px 0;
  color:#48677a;
  border-bottom:1px dashed #d6e4eb;
  font-size:14px;
}
#prenotazioni .pr-price-row b {
  color:#153a54;
}
#prenotazioni .pr-total {
  background:linear-gradient(135deg,#0d7d83,#1da38f);
  color:white;
  border-radius:14px;
  padding:20px;
  margin-top:16px;
  display:flex;
  justify-content:space-between;
  gap:12px;
  align-items:center;
}
#prenotazioni .pr-total strong {
  color:white;
  font-size:27px;
}
#prenotazioni .pr-quiz {
  background:#f6f0ff;
  border:1px solid #e7dafb;
  border-radius:17px;
  padding:22px;
  margin:18px 0;
}
#prenotazioni .pr-quiz h4 {
  color:#253453;
  font-size:17px;
  margin:10px 0;
}
#prenotazioni .pr-quiz p {
  color:#5c637e;
  font-size:13px;
  line-height:1.8;
  margin:6px 0;
}
#prenotazioni .pr-quiz details {
  background:white;
  padding:12px;
  border-radius:12px;
  margin-top:13px;
}
#prenotazioni .pr-summary {
  background:linear-gradient(135deg,#0c3557,#117d91);
  border-radius:18px;
  padding:25px;
  color:white;
  margin:23px 0;
}
#prenotazioni .pr-summary h4 {
  color:white;
  font-size:21px;
  margin:0 0 12px;
}
#prenotazioni .pr-summary p {
  color:#e0f5f6;
  font-size:14px;
  line-height:1.85;
}
@media(max-width:850px) {
  #prenotazioni .pr-grid {
    grid-template-columns:1fr;
  }
}
@media(max-width:700px) {
  #prenotazioni .pr-hero,
  #prenotazioni .pr-two,
  #prenotazioni .pr-service-list {
    grid-template-columns:1fr;
  }
  #prenotazioni .pr-flow {
    flex-direction:column;
  }
  #prenotazioni .pr-arrow {
    transform:rotate(90deg);
  }
}
@media(max-width:600px) {
  #prenotazioni .pr-title {
    font-size:21px;
  }
}
</style>

<!-- INTESTAZIONE -->

<div class="section-head">
  <span class="kicker">
    Capitolo 06 · Organizza i tuoi viaggi
  </span>
  <h2>Prenotazioni e servizi</h2>
  <p>
    Scopri tutti i servizi Travel Advantage,
    come effettuare una prenotazione,
    come utilizzare i vantaggi
    e quali garanzie e forme
    di assistenza sono disponibili.
  </p>
</div>

<div class="section-body">

<!-- INTRODUZIONE -->

<div class="pr-hero">

  <div>
    <span class="pr-kicker">Partiamo dalle basi</span>

    <h3 class="pr-title">
      🌍 Tutto il viaggio in un'unica piattaforma
    </h3>

    <p class="pr-intro">
      <strong>Travel Advantage</strong>
      è una piattaforma privata
      di prenotazione viaggi
      di proprietà di MWR Life.
      <br><br>
      Riunisce
      <strong>20 servizi</strong>
      dedicati a soggiorni,
      trasporti, esperienze,
      protezione del viaggio
      e lifestyle.
      <br><br>
      Permette di cercare e confrontare
      tariffe riservate su un catalogo
      di oltre <strong>2 milioni
      di strutture ricettive</strong>
      nel mondo.
    </p>
  </div>

  <div class="pr-hero-art">
    <div class="pr-globe">🌍</div>

    <h4>Il tuo viaggio, tutto qui</h4>

    <p>
      Dall'hotel al volo,
      dalle escursioni
      alle assicurazioni.
    </p>

    <div class="pr-hero-icons">
      <div><span>🏨</span>Alloggi</div>
      <div><span>✈️</span>Trasporti</div>
      <div><span>🛡️</span>Protezione</div>
      <div><span>🎟️</span>Esperienze</div>
      <div><span>💵</span>Cashback</div>
      <div><span>⭐</span>Punti</div>
    </div>
  </div>

</div>

<!-- NUMERI PRINCIPALI -->

<h3 class="pr-title">
  📊 La piattaforma a colpo d'occhio
</h3>

<div class="pr-grid">

  <div class="pr-card blue">
    <span class="pr-icon">🏨</span>
    <div class="pr-number">2 milioni+</div>
    <h4>Strutture ricettive</h4>
    <p>
      Hotel, B&B, resort
      e altre tipologie
      di alloggio in tutto il mondo.
    </p>
  </div>

  <div class="pr-card green">
    <span class="pr-icon">🧩</span>
    <div class="pr-number">20</div>
    <h4>Servizi disponibili</h4>
    <p>
      Un ecosistema di servizi
      per organizzare il viaggio
      e vivere nuove esperienze.
    </p>
  </div>

  <div class="pr-card gold">
    <span class="pr-icon">🌐</span>
    <div class="pr-number">24/7</div>
    <h4>Assistenza</h4>
    <p>
      Supporto multilingua
      disponibile tutti i giorni
      dell'anno.
    </p>
  </div>

</div>

<!-- CATALOGO -->

<h3 class="pr-title">
  🧭 1. Tutti i 20 servizi Travel Advantage
</h3>

<p class="pr-intro">
  I servizi si dividono
  in quattro categorie.
  <br><br>
  La membership VIP include
  i 9 servizi di base.
  Elite e Turbo permettono
  di accedere alla gamma completa.
</p>

<!-- ALLOGGI -->

<div class="pr-service-group">

  <h4>🏠 Alloggi e soggiorni</h4>
  <p>
    Dalle vacanze brevi
    ai resort di lusso,
    fino alle esperienze
    organizzate per la community.
  </p>

  <div class="pr-service-list">

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🏨</span>
        <span class="pr-tier">VIP + ELITE</span>
      </div>
      <h5>1. Hotel e Resort</h5>
      <p>
        Oltre 2 milioni
        di strutture ricettive,
        dagli ostelli e B&B
        agli hotel a 5 stelle,
        resort e strutture di lusso.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🏡</span>
        <span class="pr-tier elite">ELITE / TURBO</span>
      </div>
      <h5>2. Soggiorni e case vacanza</h5>
      <p>
        Appartamenti, abitazioni
        e case private per soggiorni
        di diversa durata,
        con un funzionamento
        simile alle piattaforme
        di affitti turistici.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🏰</span>
        <span class="pr-tier elite">ELITE / TURBO</span>
      </div>
      <h5>3. Ville di lusso</h5>
      <p>
        Residenze esclusive
        di fascia alta,
        pensate per soggiorni
        di prestigio
        e vacanze particolari.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">⚡</span>
        <span class="pr-tier elite">ELITE / TURBO</span>
      </div>
      <h5>4. Promozioni Lampo</h5>
      <p>
        Offerte speciali
        su 3 strutture selezionate
        a 4 o 5 stelle,
        aggiornate mensilmente.
        <br><br>
        Le offerte riguardano
        settimane e periodi
        prestabiliti.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🏖️</span>
        <span class="pr-tier elite">ELITE / TURBO</span>
      </div>
      <h5>5. The Club</h5>
      <p>
        Una sezione dedicata
        a hotel e resort
        di alta qualità.
        <br><br>
        Consente di applicare
        grandi quantitativi
        di Punti Fedeltà,
        riducendo anche
        significativamente
        il costo del soggiorno.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🌴</span>
        <span class="pr-tier elite">ELITE / TURBO</span>
      </div>
      <h5>6. Life Experience</h5>
      <p>
        Pacchetti vacanza di gruppo
        organizzati per la community.
        <br><br>
        Possono comprendere
        accoglienza VIP,
        trasferimenti privati,
        escursioni e altre attività.
        <br><br>
        Sono riscattabili
        parzialmente o totalmente
        con i Punti Fedeltà
        quando previsto.
      </p>
    </div>

  </div>
</div>

<!-- TRASPORTI -->

<div class="pr-service-group">

  <h4>✈️ Spostamenti e trasporti</h4>
  <p>
    Tutto quello che serve
    per raggiungere una destinazione
    e spostarsi durante la vacanza.
  </p>

  <div class="pr-service-list">

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">✈️</span>
        <span class="pr-tier">VIP + ELITE</span>
      </div>
      <h5>7. Voli</h5>
      <p>
        Voli nazionali
        e internazionali.
        <br><br>
        È possibile confrontare
        le tariffe disponibili,
        anche per business
        e prima classe.
        <br><br>
        I risparmi più interessanti
        possono presentarsi
        su itinerari intercontinentali
        nelle classi superiori.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🚗</span>
        <span class="pr-tier">VIP + ELITE</span>
      </div>
      <h5>8. Noleggio auto</h5>
      <p>
        Possibilità di confrontare
        offerte di autonoleggio
        per il periodo desiderato.
        <br><br>
        <strong>Al ritiro del veicolo
        è richiesta una carta
        di credito intestata
        al guidatore principale.</strong>
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🚐</span>
        <span class="pr-tier">VIP + ELITE</span>
      </div>
      <h5>9. Trasferimenti privati</h5>
      <p>
        Servizi NCC
        con conducente,
        ad esempio
        dall'aeroporto all'hotel
        e viceversa.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🚆</span>
        <span class="pr-tier elite">ELITE / TURBO</span>
      </div>
      <h5>10. Treni e autobus</h5>
      <p>
        Prenotazione di collegamenti
        ferroviari ed extraurbani,
        anche tramite operatori
        come FlixBus ed Eurostar,
        in base alle tratte disponibili.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🚢</span>
        <span class="pr-tier elite">ELITE / TURBO</span>
      </div>
      <h5>11. Crociere</h5>
      <p>
        Crociere e itinerari
        in diverse destinazioni,
        con compagnie
        come MSC Crociere
        e Costa Crociere.
        <br><br>
        È possibile utilizzare
        Punti Fedeltà
        sulle offerte idonee.
      </p>
    </div>

  </div>
</div>

<!-- PROTEZIONE -->

<div class="pr-service-group">

  <h4>🛡️ Sicurezza e protezione del viaggio</h4>
  <p>
    Servizi utili prima
    e durante la partenza.
  </p>

  <div class="pr-service-list">

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">📋</span>
        <span class="pr-tier">VIP + ELITE</span>
      </div>
      <h5>12. Assicurazione sulla prenotazione</h5>
      <p>
        Protezione opzionale
        per alcune prenotazioni,
        anche non rimborsabili,
        in caso di imprevisti
        coperti dalla polizza.
        <br><br>
        Eventuali rimborsi
        dipendono dalle condizioni,
        dalle esclusioni
        e dai massimali previsti.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🏥</span>
        <span class="pr-tier">VIP + ELITE</span>
      </div>
      <h5>13. Assicurazione sanitaria</h5>
      <p>
        Coperture mediche
        dedicate alla salute
        durante il viaggio,
        con caratteristiche
        variabili in base
        alla polizza selezionata.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🛂</span>
        <span class="pr-tier">VIP + ELITE</span>
      </div>
      <h5>14. Visti turistici</h5>
      <p>
        Servizio per la gestione
        e la richiesta
        dei visti necessari
        a entrare nei Paesi
        che li richiedono.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">📱</span>
        <span class="pr-tier">VIP + ELITE</span>
      </div>
      <h5>15. eSIM</h5>
      <p>
        SIM digitale
        per utilizzare
        la connessione dati
        durante i viaggi
        all'estero, con piani
        disponibili per
        diverse destinazioni.
      </p>
    </div>

  </div>
</div>

<!-- ESPERIENZE -->

<div class="pr-service-group">

  <h4>🎯 Esperienze, shopping e intelligenza artificiale</h4>
  <p>
    Strumenti ed esperienze
    per arricchire la vacanza
    e organizzare meglio
    il proprio tempo.
  </p>

  <div class="pr-service-list">

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🎟️</span>
        <span class="pr-tier">VIP + ELITE</span>
      </div>
      <h5>16. Attività ed escursioni</h5>
      <p>
        Tour guidati,
        degustazioni,
        biglietti saltafila,
        attrazioni e altre
        esperienze locali.
        <br><br>
        Possono essere disponibili
        anche tour gratuiti
        in diverse città.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🎤</span>
        <span class="pr-tier elite">ELITE / TURBO</span>
      </div>
      <h5>17. Biglietti per eventi</h5>
      <p>
        Concerti, eventi sportivi,
        spettacoli teatrali
        e festival.
        <br><br>
        Sono disponibili
        offerte tramite
        servizi partner
        come Ticketmaster.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🛍️</span>
        <span class="pr-tier elite">ELITE / TURBO</span>
      </div>
      <h5>18. Lifestyle Mall</h5>
      <p>
        Centro commerciale online
        riservato ai membri
        Elite e Turbo,
        con oltre 3 milioni
        di articoli di marca.
        <br><br>
        Le offerte selezionate
        possono prevedere
        sconti fino all'80%.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🤖</span>
        <span class="pr-tier elite">ELITE / TURBO</span>
      </div>
      <h5>19. Pianificatore di viaggio IA</h5>
      <p>
        Strumento di intelligenza
        artificiale che aiuta
        a generare itinerari
        personalizzati in base
        a budget, interessi,
        destinazione e durata
        della vacanza.
      </p>
    </div>

    <div class="pr-service">
      <div class="pr-service-top">
        <span class="pr-icon">🔎</span>
        <span class="pr-tier elite">ELITE / TURBO</span>
      </div>
      <h5>20. Smart Finder</h5>
      <p>
        Comparatore automatico
        dedicato alla ricerca
        delle offerte alberghiere
        più interessanti
        nei periodi selezionati.
      </p>
    </div>

  </div>
</div>

<!-- VIP ELITE -->

<h3 class="pr-title">
  🎟️ 2. Quali servizi posso prenotare?
</h3>

<div class="pr-two">

  <div class="pr-card blue">
    <span class="pr-icon">🌊</span>
    <h4>Membership VIP</h4>
    <div class="pr-number">9 servizi</div>
    <p>
      Hotel, resort, voli,
      noleggio auto,
      trasferimenti privati,
      attività ed escursioni,
      visti turistici,
      eSIM e assicurazioni.
    </p>
  </div>

  <div class="pr-card gold">
    <span class="pr-icon">⭐</span>
    <h4>Elite e Turbo</h4>
    <div class="pr-number">20 servizi</div>
    <p>
      Tutti i servizi VIP
      e le funzioni aggiuntive:
      crociere, case vacanza,
      ville, Promozioni Lampo,
      The Club, Life Experience,
      treni e autobus,
      eventi, Lifestyle Mall,
      IA e Smart Finder.
    </p>
  </div>

</div>

<div class="pr-note">
  <strong>💡 Come scegliere?</strong>
  <br>
  Se ti interessano soprattutto
  hotel, voli e servizi
  di viaggio tradizionali,
  VIP permette di iniziare
  con una quota più contenuta.
  <br><br>
  Se vuoi anche The Club,
  Life Experience,
  crociere e strumenti avanzati,
  puoi valutare Elite o Turbo.
</div>

<!-- PRENOTAZIONI -->

<h3 class="pr-title">
  🏨 3. Come prenotare un hotel
</h3>

<p class="pr-intro">
  La procedura è simile
  a quella dei normali
  portali di prenotazione,
  con l'aggiunta
  dei vantaggi riservati
  alla tua membership.
</p>

<div class="pr-card">

  <div class="pr-step">
    <div class="pr-step-num">1</div>
    <div class="pr-step-body">
      <b>Accedi a Travel Advantage</b>
      <p>
        Entra nella piattaforma
        con il tuo account
        e apri la sezione Hotel.
      </p>
    </div>
  </div>

  <div class="pr-step">
    <div class="pr-step-num">2</div>
    <div class="pr-step-body">
      <b>Inserisci destinazione e date</b>
      <p>
        Scegli la città,
        la data di arrivo
        e quella di partenza.
      </p>
    </div>
  </div>

  <div class="pr-step">
    <div class="pr-step-num">3</div>
    <div class="pr-step-body">
      <b>Indica le persone e le camere</b>
      <p>
        Seleziona il numero
        di adulti, bambini
        e camere richieste.
      </p>
    </div>
  </div>

  <div class="pr-step">
    <div class="pr-step-num">4</div>
    <div class="pr-step-body">
      <b>Confronta le offerte</b>
      <p>
        Controlla la struttura,
        la tipologia di camera,
        i servizi compresi,
        le condizioni di cancellazione
        e il prezzo totale.
      </p>
    </div>
  </div>

  <div class="pr-step">
    <div class="pr-step-num">5</div>
    <div class="pr-step-body">
      <b>Utilizza i vantaggi disponibili</b>
      <p>
        Se la prenotazione
        lo consente,
        applica Punti Fedeltà
        e Crediti Viaggio.
      </p>
    </div>
  </div>

  <div class="pr-step">
    <div class="pr-step-num">6</div>
    <div class="pr-step-body">
      <b>Completa il pagamento</b>
      <p>
        Scegli il metodo
        di pagamento disponibile
        e conferma la prenotazione.
      </p>
    </div>
  </div>

  <div class="pr-step">
    <div class="pr-step-num">7</div>
    <div class="pr-step-body">
      <b>Controlla la conferma</b>
      <p>
        Verifica lo stato
        della prenotazione
        e conserva il voucher
        e i riferimenti
        necessari per il soggiorno.
      </p>
    </div>
  </div>

</div>

<!-- CAPACITÀ -->

<h3 class="pr-title">
  👨‍👩‍👧‍👦 4. Quante persone posso prenotare?
</h3>

<div class="pr-card green" style="text-align:center">
  <span class="pr-kicker">Per ogni account</span>

  <div class="pr-grid">
    <div>
      <span class="pr-icon">👨‍👩‍👧</span>
      <div class="pr-number">10</div>
      <p>Adulti</p>
    </div>

    <div>
      <span class="pr-icon">🧒</span>
      <div class="pr-number">6</div>
      <p>Bambini</p>
    </div>

    <div>
      <span class="pr-icon">🛏️</span>
      <div class="pr-number">5</div>
      <p>Camere contemporaneamente</p>
    </div>
  </div>
</div>

<div class="pr-table-wrap">
  <table class="pr-table">
    <thead>
      <tr>
        <th>Membership</th>
        <th>Account totali</th>
        <th>Adulti</th>
        <th>Bambini</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>VIP</td>
        <td>2</td>
        <td>20</td>
        <td>12</td>
      </tr>

      <tr>
        <td>Elite</td>
        <td>5</td>
        <td>50</td>
        <td>30</td>
      </tr>

      <tr>
        <td>Turbo</td>
        <td>5</td>
        <td>50</td>
        <td>30</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="pr-note">
  <strong>🧮 Come si calcola?</strong>
  <br>
  Il titolare e ogni Utente Aggiuntivo
  hanno un account autonomo.
  <br><br>
  VIP comprende 2 account totali.
  Elite e Turbo ne comprendono 5.
  <br><br>
  La capienza indicata
  è la somma di quella
  dei singoli account,
  non una prenotazione unica
  per 50 adulti.
</div>

<div class="pr-two">

  <div class="pr-card blue">
    <span class="pr-icon">📱</span>
    <h4>Utenti Aggiuntivi</h4>
    <p>
      Hanno email,
      password e accesso autonomo.
      Possono effettuare
      le proprie prenotazioni
      anche senza viaggiare
      con il titolare.
    </p>
  </div>

  <div class="pr-card gold">
    <span class="pr-icon">👥</span>
    <h4>Ospiti semplici</h4>
    <p>
      Sono persone inserite
      nel profilo o
      nella prenotazione.
      Non hanno un account
      indipendente
      per prenotare.
    </p>
  </div>

</div>

<details>
  <summary>
    🔄 Quale abbonamento permette
    di cambiare gli Utenti Aggiuntivi?
  </summary>
  <div>
    Il piano <strong>Turbo</strong>,
    grazie a Flex Traveler,
    permette di modificare
    o sostituire i quattro
    Utenti Aggiuntivi ogni 6 mesi.
    <br><br>
    Con VIP ed Elite
    gli Utenti Aggiuntivi
    sono fissi.
  </div>
</details>

<!-- PREZZI -->

<h3 class="pr-title">
  💰 5. Come funzionano i prezzi riservati?
</h3>

<div class="pr-flow">

  <div class="pr-flow-item">
    <b>🏨 Fornitori</b>
    <span>
      Hotel, resort
      e fornitori grossisti
      del settore turistico.
    </span>
  </div>

  <div class="pr-arrow">→</div>

  <div class="pr-flow-item">
    <b>✈️ Travel Advantage</b>
    <span>
      Aggrega disponibilità
      e tariffe riservate
      alla membership.
    </span>
  </div>

  <div class="pr-arrow">→</div>

  <div class="pr-flow-item">
    <b>🧳 Abbonato</b>
    <span>
      Confronta le offerte
      e prenota
      il servizio desiderato.
    </span>
  </div>

</div>

<div class="pr-two">

  <div class="pr-card green">
    <span class="pr-icon">🏨</span>
    <h4>Hotel e Resort</h4>
    <p>
      È la categoria
      nella quale si possono
      trovare alcuni
      dei risparmi più elevati.
      <br><br>
      Su specifiche offerte
      la differenza rispetto
      alle tariffe pubbliche
      può superare il 60%.
    </p>
  </div>

  <div class="pr-card blue">
    <span class="pr-icon">✈️</span>
    <h4>Voli e altri servizi</h4>
    <p>
      Per voli, autonoleggi,
      treni e attività,
      i prezzi possono essere
      simili alle tariffe pubbliche.
      <br><br>
      Il vantaggio può derivare
      anche dal cashback
      e dall'utilizzo
      dei Crediti Viaggio.
    </p>
  </div>

</div>

<div class="pr-warning">
  <strong>💡 Come confrontare correttamente i prezzi</strong>
  <br>
  Usa sempre la stessa struttura,
  le stesse date,
  lo stesso numero di ospiti
  e la stessa tipologia di camera.
  <br><br>
  Controlla anche:
  trattamento incluso,
  tasse, condizioni di cancellazione
  e pagamento.
  <br><br>
  Le tariffe riservate
  non garantiscono che
  ogni singola prenotazione
  sia sempre più economica
  di qualsiasi portale pubblico.
</div>

<!-- PAGAMENTI -->

<h3 class="pr-title">
  💳 6. Come posso pagare?
</h3>

<div class="pr-grid">

  <div class="pr-card blue">
    <span class="pr-icon">💳</span>
    <h4>Carte</h4>
    <p>
      Carte di credito
      e di debito
      dei circuiti accettati
      durante il checkout.
    </p>
  </div>

  <div class="pr-card green">
    <span class="pr-icon">📱</span>
    <h4>Apple Pay e Google Pay</h4>
    <p>
      Pagamenti digitali
      dai dispositivi
      compatibili,
      quando disponibili.
    </p>
  </div>

  <div class="pr-card purple">
    <span class="pr-icon">🪙</span>
    <h4>Criptovalute</h4>
    <p>
      Possibilità di pagamento
      tramite USDT e USDC
      nei servizi
      che le supportano.
    </p>
  </div>

  <div class="pr-card gold">
    <span class="pr-icon">🛒</span>
    <h4>Klarna</h4>
    <p>
      Opzioni di pagamento
      rateizzato,
      dove disponibili
      e previa approvazione
      del servizio.
    </p>
  </div>

  <div class="pr-card green">
    <span class="pr-icon">💵</span>
    <h4>Crediti Viaggio</h4>
    <p>
      Puoi utilizzare
      il cashback accumulato
      per ridurre o coprire
      il costo delle
      prenotazioni idonee.
    </p>
  </div>

  <div class="pr-card gold">
    <span class="pr-icon">⭐</span>
    <h4>Punti Fedeltà</h4>
    <p>
      Puoi utilizzarli
      nelle sezioni idonee,
      rispettando i limiti
      previsti per
      ciascun servizio.
    </p>
  </div>

</div>

<div class="pr-note">
  <strong>📌 I metodi possono cambiare</strong>
  <br>
  Non tutte le modalità
  sono necessariamente disponibili
  per ogni servizio,
  Paese o prenotazione.
  <br><br>
  Le opzioni effettivamente
  utilizzabili vengono mostrate
  durante il checkout.
</div>

<!-- PUNTI E CASHBACK -->

<h3 class="pr-title">
  ⭐ 7. Punti Fedeltà e Crediti Viaggio
</h3>

<div class="pr-two">

  <div class="pr-card gold">
    <span class="pr-icon">⭐</span>
    <h4>Punti Fedeltà</h4>
    <p>
      Sono collegati
      alla quota mensile
      dell'abbonamento.
      <br><br>
      Elite riceve
      120 punti al mese.
      Turbo riceve
      240 punti al mese.
      <br><br>
      Per gli hotel
      il limite applicabile
      può arrivare
      fino a 53 $
      per prenotazione.
    </p>
  </div>

  <div class="pr-card green">
    <span class="pr-icon">💵</span>
    <h4>Crediti Viaggio</h4>
    <p>
      Sono il cashback
      accumulato attraverso
      le prenotazioni
      e altre iniziative.
      <br><br>
      Non hanno scadenza
      e possono essere
      utilizzati per coprire
      fino al 100%
      di una prenotazione idonea.
      <br><br>
      <strong>100 CV = 1 $.</strong>
    </p>
  </div>

</div>

<div class="pr-flow">

  <div class="pr-flow-item">
    <b>🏨 Prezzo hotel</b>
    <span>
      Parti dal prezzo
      riservato
      alla tua membership.
    </span>
  </div>

  <div class="pr-arrow">→</div>

  <div class="pr-flow-item">
    <b>⭐ Applichi i punti</b>
    <span>
      Riscatti i punti
      consentiti
      per quella struttura.
    </span>
  </div>

  <div class="pr-arrow">→</div>

  <div class="pr-flow-item">
    <b>💵 Utilizzi i CV</b>
    <span>
      Copri parte
      o tutto il costo
      rimanente.
    </span>
  </div>

</div>

<div class="pr-price-example">
  <span class="pr-badge">
    🧩 ESEMPIO PRATICO
  </span>

  <h4 style="color:#153953;font-size:19px;margin:15px 0">
    Una camera da 209 €
  </h4>

  <div class="pr-price-row">
    <span>Prezzo iniziale</span>
    <b>209,00 €</b>
  </div>

  <div class="pr-price-row">
    <span>Sconto Punti Fedeltà nell'esempio</span>
    <b>-13,00 €</b>
  </div>

  <div class="pr-price-row">
    <span>Importo rimanente</span>
    <b>196,00 €</b>
  </div>

  <div class="pr-price-row">
    <span>Importo coperto con Crediti Viaggio</span>
    <b>196,00 €</b>
  </div>

  <div class="pr-total">
    <span>🎉 Totale da pagare con carta</span>
    <strong>0,00 €</strong>
  </div>
</div>

<div class="pr-note">
  <strong>💡 Come funziona?</strong>
  <br>
  Se hai abbastanza Crediti Viaggio
  e la prenotazione è idonea,
  puoi coprire tutto
  l'importo rimanente.
  <br><br>
  I Crediti Viaggio
  sono valorizzati in dollari:
  se la prenotazione
  è espressa in euro,
  viene applicata
  la conversione del checkout.
</div>

<details>
  <summary>
    🚢 Quanti punti posso usare sulle crociere?
  </summary>
  <div>
    Non c'è un limite fisso
    uguale per tutte le crociere.
    <br><br>
    La quantità applicabile
    varia in base all'itinerario,
    alla durata,
    alla categoria della cabina,
    al valore della prenotazione
    e alle condizioni
    della compagnia partner.
    <br><br>
    Se una crociera mostra
    un limite di 400 punti,
    quel limite riguarda
    la specifica offerta visualizzata.
  </div>
</details>

<!-- GARANZIA PREZZO -->

<h3 class="pr-title">
  🏆 8. Garanzia del 150% sul miglior prezzo
</h3>

<div class="pr-card gold">
  <span class="pr-icon">🏆</span>
  <h4>
    Trovi lo stesso hotel a meno?
  </h4>
  <p>
    Se entro
    <strong>24 ore dalla prenotazione</strong>
    trovi su un portale pubblico
    la stessa camera
    a un prezzo inferiore,
    puoi richiedere
    l'applicazione
    della garanzia
    del miglior prezzo.
    <br><br>
    Quando sono soddisfatti
    tutti i requisiti,
    viene riconosciuto
    il <strong>150% della differenza
    sotto forma di Crediti Viaggio</strong>.
  </p>
</div>

<div class="pr-flow">

  <div class="pr-flow-item">
    <b>🏨 Travel Advantage</b>
    <span>Hotel a 500 €</span>
  </div>

  <div class="pr-arrow">→</div>

  <div class="pr-flow-item">
    <b>🔎 Portale pubblico</b>
    <span>
      Stesso hotel e condizioni
      a 450 €
    </span>
  </div>

  <div class="pr-arrow">→</div>

  <div class="pr-flow-item">
    <b>💵 Garanzia 150%</b>
    <span>
      Differenza 50 €.
      Valore del 150%:
      75 €.
    </span>
  </div>

</div>

<div class="pr-warning">
  <strong>⚠️ Condizioni da rispettare</strong>
  <br>
  Il confronto deve riguardare
  la stessa struttura,
  tipologia di camera,
  date, numero di ospiti,
  trattamento e condizioni
  di prenotazione.
  <br><br>
  La richiesta deve
  rientrare nel termine
  di 24 ore.
  <br><br>
  Il riconoscimento avviene
  in Crediti Viaggio,
  non come rimborso
  in contanti.
</div>

<!-- PRENOTAZIONI IN ATTESA -->

<h3 class="pr-title">
  ⏳ 9. Che cosa significa "In Attesa"?
</h3>

<p class="pr-intro">
  A volte una camera
  selezionata non viene
  confermata immediatamente.
  <br><br>
  Può succedere
  quando la disponibilità
  mostrata dai fornitori
  non è ancora sincronizzata
  con quella effettivamente
  prenotabile.
</p>

<div class="pr-flow">

  <div class="pr-flow-item">
    <b>🏨 Camera selezionata</b>
    <span>
      Avvii la prenotazione.
    </span>
  </div>

  <div class="pr-arrow">→</div>

  <div class="pr-flow-item">
    <b>⏳ Stato "In Attesa"</b>
    <span>
      Il sistema verifica
      la disponibilità
      presso altri fornitori.
    </span>
  </div>

  <div class="pr-arrow">→</div>

  <div class="pr-flow-item">
    <b>✅ oppure ❌</b>
    <span>
      Conferma della camera
      oppure annullamento.
    </span>
  </div>

</div>

<div class="pr-two">

  <div class="pr-card green">
    <span class="pr-icon">✅</span>
    <h4>Se trova la camera</h4>
    <p>
      La prenotazione
      viene confermata
      e puoi utilizzare
      il relativo voucher.
    </p>
  </div>

  <div class="pr-card gold">
    <span class="pr-icon">↩️</span>
    <h4>Se non trova la camera</h4>
    <p>
      Il sistema annulla
      la transazione
      e avvia il riaccredito
      dell'importo sulla carta
      utilizzata.
    </p>
  </div>

</div>

<div class="pr-note">
  <strong>⏱️ Quanto dura la ricerca?</strong>
  <br>
  Il sistema può cercare
  una disponibilità alternativa
  per circa <strong>30 minuti</strong>.
  <br><br>
  Se la prenotazione
  non viene confermata,
  controlla lo stato
  prima di considerarla
  definitivamente acquisita.
  I tempi di visualizzazione
  del riaccredito possono
  dipendere dal circuito
  di pagamento.
</div>

<!-- NOLEGGIO -->

<h3 class="pr-title">
  🚗 10. Attenzione al noleggio auto
</h3>

<div class="pr-card gold">
  <span class="pr-icon">💳</span>
  <h4>
    La carta di credito al ritiro
  </h4>
  <p>
    Per ritirare
    un veicolo prenotato,
    è richiesta
    una <strong>carta di credito
    intestata al conducente principale</strong>.
    <br><br>
    La carta può essere
    utilizzata dall'autonoleggio
    per il deposito cauzionale
    e le verifiche previste.
  </p>
</div>

<div class="pr-warning">
  <strong>⚠️ Non confondere pagamento e ritiro</strong>
  <br>
  Anche se la prenotazione
  è stata pagata online,
  al banco possono essere
  richiesti carta di credito,
  patente valida,
  documento di identità
  ed eventuali altri requisiti.
  <br><br>
  Controlla sempre
  le condizioni
  della compagnia selezionata.
</div>

<!-- PROTEZIONE -->

<h3 class="pr-title">
  🛡️ 11. Protezione e sicurezza
</h3>

<div class="pr-grid">

  <div class="pr-card blue">
    <span class="pr-icon">🌐</span>
    <h4>ETOA</h4>
    <p>
      European Tourism Association,
      realtà professionale
      del settore turistico europeo.
    </p>
  </div>

  <div class="pr-card green">
    <span class="pr-icon">🇫🇷</span>
    <h4>ATOUT France</h4>
    <p>
      Agenzia francese
      per lo sviluppo turistico
      e la registrazione
      degli operatori.
    </p>
  </div>

  <div class="pr-card blue">
    <span class="pr-icon">✈️</span>
    <h4>IATA-TIDS</h4>
    <p>
      Sistema internazionale
      di identificazione
      degli operatori
      del settore viaggi.
    </p>
  </div>

  <div class="pr-card gold">
    <span class="pr-icon">🔐</span>
    <h4>Allianz</h4>
    <p>
      Riferimento al fondo
      di garanzia per le tutele
      applicabili nell'ambito
      dei servizi turistici.
    </p>
  </div>

  <div class="pr-card green">
    <span class="pr-icon">🩺</span>
    <h4>Assicurazione sanitaria</h4>
    <p>
      Soluzioni di copertura
      medica e assistenza
      per imprevisti sanitari
      durante il viaggio.
    </p>
  </div>

  <div class="pr-card purple">
    <span class="pr-icon">📋</span>
    <h4>Protezione prenotazione</h4>
    <p>
      Polizze facoltative
      che possono offrire
      protezione anche
      per alcune prenotazioni
      non rimborsabili,
      nei casi coperti.
    </p>
  </div>

</div>

<div class="pr-note">
  <strong>📌 Prima di partire</strong>
  <br>
  Verifica sempre
  le condizioni contrattuali
  del servizio acquistato
  e le eventuali
  coperture assicurative.
  <br><br>
  Registrazioni professionali,
  associazioni di settore
  e assicurazioni
  hanno funzioni differenti.
</div>

<!-- ASSISTENZA -->

<h3 class="pr-title">
  📞 12. Assistenza Travel Advantage
</h3>

<div class="pr-card green" style="text-align:center">
  <span class="pr-icon">🌍</span>
  <div class="pr-number">24/7</div>
  <h4>Assistenza multilingua</h4>
  <p>
    Supporto disponibile
    24 ore al giorno,
    7 giorni su 7,
    durante tutto l'anno.
  </p>
</div>

<div class="pr-grid">

  <div class="pr-card blue">
    <span class="pr-icon">💬</span>
    <h4>Chat</h4>
    <p>
      Assistenza
      tramite la chat
      presente nella piattaforma.
    </p>
  </div>

  <div class="pr-card green">
    <span class="pr-icon">📧</span>
    <h4>Email</h4>
    <p>
      Possibilità di contattare
      il servizio clienti
      tramite posta elettronica.
    </p>
  </div>

  <div class="pr-card gold">
    <span class="pr-icon">📱</span>
    <h4>WhatsApp e telefono</h4>
    <p>
      Canali di assistenza
      dedicati e numeri
      internazionali,
      secondo le disponibilità.
    </p>
  </div>

</div>

<div class="pr-note">
  <strong>🧳 Prima di contattare l'assistenza</strong>
  <br>
  Tieni a portata di mano
  il numero della prenotazione,
  il nome dell'intestatario,
  le date del viaggio
  e una descrizione chiara
  del problema riscontrato.
</div>

<!-- CONSIGLI PRATICI -->

<h3 class="pr-title">
  🎯 13. Come sfruttare meglio la piattaforma
</h3>

<div class="pr-two">

  <div class="pr-card green">
    <span class="pr-icon">📅</span>
    <h4>Confronta più date</h4>
    <p>
      Se puoi essere flessibile,
      prova periodi diversi.
      Una piccola variazione
      delle date può modificare
      sensibilmente la tariffa.
    </p>
  </div>

  <div class="pr-card blue">
    <span class="pr-icon">🏨</span>
    <h4>Controlla la tipologia di camera</h4>
    <p>
      Prima di confrontare
      due prezzi,
      verifica che la camera
      e il trattamento
      siano equivalenti.
    </p>
  </div>

  <div class="pr-card gold">
    <span class="pr-icon">⭐</span>
    <h4>Verifica i punti disponibili</h4>
    <p>
      Con Elite o Turbo,
      controlla quanti
      Punti Fedeltà
      puoi applicare
      alla prenotazione.
    </p>
  </div>

  <div class="pr-card purple">
    <span class="pr-icon">💵</span>
    <h4>Utilizza il cashback</h4>
    <p>
      I Crediti Viaggio
      possono ridurre
      il saldo finale,
      anche fino a zero
      sulle prenotazioni idonee.
    </p>
  </div>

  <div class="pr-card blue">
    <span class="pr-icon">🎫</span>
    <h4>Condividi con gli Utenti Aggiuntivi</h4>
    <p>
      Gli account aggiuntivi
      possono effettuare
      prenotazioni autonomamente
      e generare Crediti Viaggio
      per il titolare principale.
    </p>
  </div>

  <div class="pr-card green">
    <span class="pr-icon">🔎</span>
    <h4>Controlla tutte le condizioni</h4>
    <p>
      Prima di pagare,
      verifica cancellazione,
      tasse, servizi inclusi,
      conferma e requisiti
      della prenotazione.
    </p>
  </div>

</div>

<!-- DOMANDE FREQUENTI -->

<h3 class="pr-title">
  ❓ 14. Domande frequenti
</h3>

<details>
  <summary>
    🏨 Quanti hotel sono disponibili?
  </summary>
  <div>
    Il catalogo comprende
    oltre 2 milioni
    di strutture ricettive
    nel mondo.
    <br><br>
    La disponibilità effettiva
    dipende dalla destinazione,
    dalle date e dai fornitori.
  </div>
</details>

<details>
  <summary>
    ✈️ I voli costano sempre meno
    rispetto ai siti pubblici?
  </summary>
  <div>
    Non necessariamente.
    <br><br>
    I prezzi possono essere
    simili a quelli
    delle compagnie aeree.
    Il vantaggio può derivare
    anche dai Crediti Viaggio
    o da condizioni specifiche
    della prenotazione.
  </div>
</details>

<details>
  <summary>
    🏨 Qual è il limite
    di camere per prenotazione?
  </summary>
  <div>
    Un singolo account
    permette di prenotare
    fino a 5 camere
    contemporaneamente,
    per un massimo
    di 10 adulti
    e 6 bambini.
  </div>
</details>

<details>
  <summary>
    💵 Quando ricevo il cashback?
  </summary>
  <div>
    I Crediti Viaggio
    generati dalle prenotazioni
    idonee vengono accreditati
    7 giorni dopo la conclusione
    del soggiorno o viaggio.
  </div>
</details>

<details>
  <summary>
    🚗 Posso ritirare
    un'auto senza carta di credito?
  </summary>
  <div>
    La procedura di noleggio
    prevede una carta di credito
    intestata al conducente principale.
    <br><br>
    Prima di prenotare,
    controlla i requisiti
    e le condizioni
    della compagnia.
  </div>
</details>

<details>
  <summary>
    ⏳ La mia prenotazione
    risulta "In Attesa". Che faccio?
  </summary>
  <div>
    Verifica lo stato
    della prenotazione.
    <br><br>
    Il sistema può cercare
    la disponibilità
    presso altri fornitori
    per circa 30 minuti.
    <br><br>
    Se non riesce a confermarla,
    la transazione viene annullata
    e viene avviato
    il riaccredito.
  </div>
</details>

<details>
  <summary>
    🎟️ Posso prenotare una crociera
    con l'abbonamento VIP?
  </summary>
  <div>
    Le crociere fanno parte
    dei servizi aggiuntivi
    disponibili per i membri
    Elite e Turbo.
  </div>
</details>

<details>
  <summary>
    🏝️ Cosa cambia tra
    The Club e Life Experience?
  </summary>
  <div>
    <strong>The Club:</strong>
    sezione dedicata
    a soggiorni selezionati
    in hotel e resort,
    con possibilità
    di applicare
    grandi quantità di punti.
    <br><br>
    <strong>Life Experience:</strong>
    pacchetti vacanza
    ed esperienze di gruppo
    organizzate per la community,
    con attività
    e servizi dedicati.
  </div>
</details>

<!-- QUIZ -->

<h3 class="pr-title">
  🧠 15. Mettiti alla prova
</h3>

<div class="pr-quiz">
  <span class="pr-kicker">DOMANDA 01</span>
  <h4>
    Quanti servizi comprende
    Travel Advantage?
  </h4>
  <p>A. 9 in totale</p>
  <p>B. 20 in totale</p>
  <p>C. 50 in totale</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. 20 servizi.</strong>
      VIP comprende i 9 servizi
      di base, mentre Elite
      e Turbo offrono
      la gamma completa.
    </div>
  </details>
</div>

<div class="pr-quiz">
  <span class="pr-kicker">DOMANDA 02</span>
  <h4>
    Quante camere posso inserire
    in una prenotazione hotel
    con un singolo account?
  </h4>
  <p>A. 2</p>
  <p>B. 5</p>
  <p>C. 10</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. 5 camere.</strong>
      Il limite per account
      è di 10 adulti
      e 6 bambini.
    </div>
  </details>
</div>

<div class="pr-quiz">
  <span class="pr-kicker">DOMANDA 03</span>
  <h4>
    In quali categorie
    si possono trovare
    alcuni degli sconti maggiori?
  </h4>
  <p>A. Principalmente hotel e resort</p>
  <p>B. Sempre nei voli economici</p>
  <p>C. Soltanto nel noleggio auto</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A.</strong>
      Hotel e resort
      sono tra le categorie
      con maggiore potenziale
      di risparmio.
    </div>
  </details>
</div>

<div class="pr-quiz">
  <span class="pr-kicker">DOMANDA 04</span>
  <h4>
    Se trovo una camera
    più economica altrove,
    entro quanto tempo
    devo presentare
    la richiesta per la garanzia 150%?
  </h4>
  <p>A. Entro 24 ore</p>
  <p>B. Entro 7 giorni</p>
  <p>C. Entro un mese</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A. Entro 24 ore.</strong>
      Il confronto deve riguardare
      la stessa camera
      e condizioni equivalenti.
    </div>
  </details>
</div>

<div class="pr-quiz">
  <span class="pr-kicker">DOMANDA 05</span>
  <h4>
    Quanto può durare
    la verifica della disponibilità
    di una prenotazione "In Attesa"?
  </h4>
  <p>A. Circa 30 minuti</p>
  <p>B. 7 giorni</p>
  <p>C. 30 giorni</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A.</strong>
      Il sistema può cercare
      la camera presso
      altri fornitori
      per circa 30 minuti.
    </div>
  </details>
</div>

<div class="pr-quiz">
  <span class="pr-kicker">DOMANDA 06</span>
  <h4>
    Posso combinare
    Punti Fedeltà e Crediti Viaggio
    durante una prenotazione idonea?
  </h4>
  <p>A. Sì</p>
  <p>B. No</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A. Sì.</strong>
      Puoi applicare
      prima i punti consentiti
      e poi utilizzare
      i Crediti Viaggio
      per ridurre il saldo.
    </div>
  </details>
</div>

<div class="pr-quiz">
  <span class="pr-kicker">DOMANDA 07</span>
  <h4>
    Al ritiro di un'auto
    a noleggio,
    quale carta è richiesta?
  </h4>
  <p>A. Una carta qualsiasi</p>
  <p>B. Una carta di credito del conducente principale</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      La carta deve essere
      intestata al guidatore principale.
    </div>
  </details>
</div>

<!-- RIEPILOGO -->

<h3 class="pr-title">
  🎯 Il concetto da ricordare
</h3>

<div class="pr-summary">
  <h4>🌍 Una piattaforma, tante possibilità</h4>

  <p>
    Travel Advantage permette
    di organizzare viaggi
    attraverso un unico portale
    con 20 servizi.
    <br><br>
    Puoi cercare hotel e resort,
    prenotare trasporti,
    organizzare esperienze
    e scegliere servizi
    di protezione del viaggio.
    <br><br>
    I membri Elite e Turbo
    hanno accesso anche
    a The Club,
    Life Experience,
    crociere e strumenti
    avanzati di ricerca.
    <br><br>
    <strong>
      Per sfruttare al meglio
      la piattaforma,
      confronta sempre
      le condizioni complete,
      verifica i vantaggi disponibili
      e conserva la conferma
      della prenotazione.
    </strong>
  </p>
</div>

</div>
</section>
`);
