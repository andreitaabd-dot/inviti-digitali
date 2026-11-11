
window.registraSezione("garanzie", `
<section class="section" id="garanzie" data-group="viaggi">

<style>
#garanzie .gz-title {
  color:#09243d;
  font-size:24px;
  margin:35px 0 16px;
}
#garanzie .gz-intro {
  color:#536d7d;
  font-size:15px;
  line-height:1.8;
  margin:12px 0 22px;
}
#garanzie .gz-kicker {
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
#garanzie .gz-hero {
  display:grid;
  grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);
  align-items:center;
  gap:24px;
  margin:0 0 30px;
}
#garanzie .gz-hero .gz-title {
  margin:15px 0;
}
#garanzie .gz-hero-art {
  background:linear-gradient(145deg,#092c4e,#117f9a);
  border-radius:22px;
  padding:27px 19px;
  text-align:center;
  color:white;
  overflow:hidden;
}
#garanzie .gz-shield {
  display:flex;
  justify-content:center;
  align-items:center;
  width:108px;
  height:108px;
  background:#ffffff20;
  border:2px solid #ffffff55;
  border-radius:50%;
  margin:0 auto 18px;
  font-size:58px;
}
#garanzie .gz-hero-art h4 {
  color:white;
  font-size:22px;
  margin:10px 0;
}
#garanzie .gz-hero-art p {
  color:#e1f4f7;
  font-size:13px;
  line-height:1.75;
}
#garanzie .gz-hero-stats {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:8px;
  margin-top:19px;
}
#garanzie .gz-hero-stats div {
  background:#ffffff1d;
  border:1px solid #ffffff35;
  border-radius:12px;
  padding:13px 7px;
}
#garanzie .gz-hero-stats b {
  display:block;
  color:#fff2b7;
  font-size:21px;
}
#garanzie .gz-hero-stats span {
  display:block;
  color:#e5f7fa;
  font-size:11px;
  margin-top:6px;
}
#garanzie .gz-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#garanzie .gz-two {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#garanzie .gz-card {
  min-width:0;
  border:1px solid #dfeaf0;
  background:#f4f9fc;
  border-radius:18px;
  padding:22px;
}
#garanzie .gz-card.blue {
  background:#eef7ff;
  border-color:#cfe6fa;
}
#garanzie .gz-card.green {
  background:#effaf5;
  border-color:#d2ece0;
}
#garanzie .gz-card.gold {
  background:#fff8e8;
  border-color:#f1e3bd;
}
#garanzie .gz-card.purple {
  background:#f6f0ff;
  border-color:#e4d8fa;
}
#garanzie .gz-card h4 {
  font-size:18px;
  color:#153953;
  margin:10px 0;
}
#garanzie .gz-card p {
  color:#536d7d;
  font-size:13px;
  line-height:1.8;
  margin:8px 0;
}
#garanzie .gz-icon {
  display:block;
  font-size:30px;
  margin-bottom:9px;
}
#garanzie .gz-number {
  display:block;
  font-size:32px;
  line-height:1.2;
  font-weight:850;
  color:#087f95;
  margin:9px 0;
}
#garanzie .gz-number small {
  font-size:12px;
  font-weight:600;
  color:#708695;
}
#garanzie .gz-pill {
  display:inline-block;
  background:#ffffffc9;
  padding:6px 11px;
  border-radius:25px;
  color:#31566b;
  font-size:11px;
  font-weight:800;
}
#garanzie .gz-note {
  background:#eaf8f5;
  border-left:4px solid #19a998;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  color:#315b57;
  font-size:13px;
  line-height:1.8;
}
#garanzie .gz-warning {
  background:#fff8e9;
  border-left:4px solid #d5a545;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  color:#745d32;
  font-size:13px;
  line-height:1.8;
}
#garanzie .gz-danger {
  background:#fff0f0;
  border-left:4px solid #d85b5b;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  color:#873c3c;
  font-size:13px;
  line-height:1.8;
}
#garanzie .gz-flow {
  display:flex;
  align-items:stretch;
  gap:9px;
  margin:23px 0;
}
#garanzie .gz-flow-item {
  flex:1;
  min-width:0;
  text-align:center;
  border:1px solid #d4e9ef;
  border-radius:14px;
  padding:17px 11px;
  background:#edf8fa;
}
#garanzie .gz-flow-item b {
  display:block;
  font-size:14px;
  color:#164b67;
  margin-bottom:8px;
}
#garanzie .gz-flow-item span {
  color:#536d7d;
  font-size:12px;
  line-height:1.7;
}
#garanzie .gz-arrow {
  color:#1299a6;
  font-size:23px;
  font-weight:800;
  align-self:center;
}
#garanzie .gz-step {
  display:flex;
  align-items:flex-start;
  gap:15px;
  padding:17px 0;
  border-bottom:1px solid #e1eaf0;
}
#garanzie .gz-step:last-child {
  border-bottom:0;
}
#garanzie .gz-step-num {
  width:36px;
  height:36px;
  min-width:36px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#0d7e95;
  color:white;
  font-weight:800;
}
#garanzie .gz-step-content {
  flex:1;
  min-width:0;
}
#garanzie .gz-step-content b {
  color:#153a54;
  font-size:15px;
}
#garanzie .gz-step-content p {
  font-size:13px;
  line-height:1.8;
  color:#536d7d;
  margin:7px 0;
}
#garanzie .gz-table-wrap {
  overflow-x:auto;
  border:1px solid #dce8ef;
  border-radius:15px;
  margin:23px 0;
}
#garanzie .gz-table {
  min-width:550px;
  width:100%;
  border-collapse:collapse;
}
#garanzie .gz-table th {
  background:#123650;
  color:white;
  font-size:13px;
  padding:15px 12px;
  text-align:left;
}
#garanzie .gz-table td {
  font-size:12px;
  line-height:1.75;
  padding:14px 12px;
  color:#36586e;
  border-bottom:1px solid #e2eaf0;
}
#garanzie .gz-table td:first-child {
  font-weight:750;
  color:#153a54;
}
#garanzie .gz-table tr:nth-child(even) td {
  background:#f4f8fb;
}
#garanzie .gz-table tr:last-child td {
  border-bottom:0;
}
#garanzie .gz-price-box {
  background:#f5f9fc;
  border:1px solid #dce8ef;
  border-radius:19px;
  padding:23px;
  margin:20px 0;
}
#garanzie .gz-price-row {
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:15px;
  padding:14px 0;
  border-bottom:1px dashed #d6e4eb;
  color:#48677a;
  font-size:14px;
}
#garanzie .gz-price-row b {
  color:#153a54;
  text-align:right;
}
#garanzie .gz-price-total {
  background:linear-gradient(135deg,#0d7d83,#1da38f);
  border-radius:14px;
  color:white;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:15px;
  padding:19px;
  margin-top:17px;
}
#garanzie .gz-price-total strong {
  color:white;
  font-size:29px;
}
#garanzie .gz-checklist {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:10px;
  margin:20px 0;
}
#garanzie .gz-check {
  background:#effaf5;
  border:1px solid #d2ecdf;
  border-radius:13px;
  padding:15px;
  font-size:13px;
  line-height:1.6;
  color:#315b57;
}
#garanzie .gz-check strong {
  display:block;
  margin-bottom:6px;
  color:#175947;
}
#garanzie .gz-contact {
  background:#f4f9fc;
  border:1px solid #dce8ef;
  border-radius:14px;
  padding:17px;
  margin:10px 0;
}
#garanzie .gz-contact b {
  display:block;
  font-size:15px;
  color:#153a54;
  margin-bottom:6px;
}
#garanzie .gz-contact p {
  color:#536d7d;
  font-size:13px;
  line-height:1.7;
  margin:5px 0;
}
#garanzie .gz-contact a {
  overflow-wrap:anywhere;
  color:#087f95;
  font-weight:750;
}
#garanzie .gz-quiz {
  background:#f6f0ff;
  border:1px solid #e7dafb;
  border-radius:17px;
  padding:22px;
  margin:18px 0;
}
#garanzie .gz-quiz h4 {
  color:#253453;
  font-size:17px;
  margin:10px 0;
}
#garanzie .gz-quiz p {
  color:#5c637e;
  font-size:13px;
  line-height:1.8;
  margin:6px 0;
}
#garanzie .gz-quiz details {
  background:white;
  padding:12px;
  border-radius:12px;
  margin-top:13px;
}
#garanzie .gz-summary {
  background:linear-gradient(135deg,#0c3557,#117d91);
  color:white;
  border-radius:18px;
  padding:25px;
  margin:24px 0;
}
#garanzie .gz-summary h4 {
  color:white;
  font-size:21px;
  margin:0 0 12px;
}
#garanzie .gz-summary p {
  color:#e0f5f6;
  font-size:14px;
  line-height:1.85;
}
@media(max-width:850px) {
  #garanzie .gz-grid {
    grid-template-columns:1fr;
  }
}
@media(max-width:700px) {
  #garanzie .gz-hero,
  #garanzie .gz-two,
  #garanzie .gz-checklist {
    grid-template-columns:1fr;
  }
  #garanzie .gz-flow {
    flex-direction:column;
  }
  #garanzie .gz-arrow {
    transform:rotate(90deg);
  }
}
@media(max-width:600px) {
  #garanzie .gz-title {
    font-size:21px;
  }
  #garanzie .gz-price-total strong {
    font-size:23px;
  }
}
</style>

<!-- INTESTAZIONE -->

<div class="section-head">
  <span class="kicker">
    Capitolo 07 · Viaggia in tranquillità
  </span>
  <h2>Garanzie e rimborsi</h2>
  <p>
    Tutto quello che devi conoscere
    sui rimborsi degli abbonamenti,
    sulla garanzia del miglior prezzo,
    sulle cancellazioni
    e sull'assistenza Travel Advantage.
  </p>
</div>

<div class="section-body">

<!-- INTRODUZIONE -->

<div class="gz-hero">

  <div>
    <span class="gz-kicker">
      Partiamo dalle basi
    </span>

    <h3 class="gz-title">
      🛡️ Quali garanzie hai a disposizione?
    </h3>

    <p class="gz-intro">
      Travel Advantage e MWR Life
      prevedono diverse tutele
      per chi utilizza
      la piattaforma
      e per chi sviluppa
      l'attività come Ambassador.
      <br><br>
      Alcune garanzie riguardano
      gli abbonamenti,
      altre le prenotazioni,
      i pagamenti
      o i servizi di viaggio.
    </p>

    <div class="gz-note">
      <strong>💡 Tre aspetti fondamentali</strong>
      <br>
      ✅ Rimborso iniziale entro 14 giorni.
      <br>
      ✅ Garanzia del 150% sul miglior prezzo hotel.
      <br>
      ✅ Assistenza durante le prenotazioni
      e i viaggi.
    </div>
  </div>

  <div class="gz-hero-art">

    <div class="gz-shield">🛡️</div>

    <h4>Viaggia con più tranquillità</h4>

    <p>
      Conosci i tuoi diritti,
      controlla le condizioni
      e sai a chi rivolgerti
      quando hai bisogno.
    </p>

    <div class="gz-hero-stats">

      <div>
        <b>14</b>
        <span>Giorni di recesso</span>
      </div>

      <div>
        <b>150%</b>
        <span>Garanzia hotel</span>
      </div>

      <div>
        <b>24/7</b>
        <span>Assistenza</span>
      </div>

    </div>

  </div>

</div>

<!-- 14 GIORNI -->

<h3 class="gz-title">
  💳 1. Garanzia di rimborso entro 14 giorni
</h3>

<div class="gz-grid">

  <div class="gz-card green">
    <span class="gz-icon">✅</span>
    <span class="gz-number">100%</span>
    <h4>Rimborso iniziale</h4>
    <p>
      È previsto il rimborso
      integrale dell'importo iniziale
      ammissibile se richiedi
      il recesso entro
      <strong>14 giorni di calendario</strong>
      dall'iscrizione
      o dal primo pagamento.
    </p>
  </div>

  <div class="gz-card blue">
    <span class="gz-icon">📅</span>
    <span class="gz-number">14 giorni</span>
    <h4>Tempo per richiederlo</h4>
    <p>
      Hai 14 giorni di calendario
      per inviare la richiesta
      di recesso.
      <br><br>
      Il periodo non equivale
      a 14 giorni lavorativi.
    </p>
  </div>

  <div class="gz-card gold">
    <span class="gz-icon">↩️</span>
    <span class="gz-number">10 <small>giorni lavorativi</small></span>
    <h4>Tempi di rimborso</h4>
    <p>
      Il rimborso viene effettuato
      entro 10 giorni lavorativi,
      secondo le condizioni
      della procedura di recesso.
    </p>
  </div>

</div>

<div class="gz-two">

  <div class="gz-card blue">
    <span class="gz-icon">✈️</span>
    <h4>Membership Travel Advantage</h4>
    <p>
      La garanzia iniziale
      riguarda gli abbonamenti
      <strong>VIP, Elite e Turbo</strong>,
      secondo le condizioni
      previste per l'attivazione.
    </p>
  </div>

  <div class="gz-card purple">
    <span class="gz-icon">💼</span>
    <h4>Licenza Ambassador MWR Life</h4>
    <p>
      Anche la quota iniziale
      per diventare
      <strong>Lifestyle Ambassador</strong>
      è compresa nella garanzia
      di recesso entro 14 giorni.
    </p>
  </div>

</div>

<h3 class="gz-title">
  📧 Come richiedere il rimborso iniziale
</h3>

<div class="gz-flow">

  <div class="gz-flow-item">
    <b>📅 Controlla la data</b>
    <span>
      Verifica di essere
      entro i 14 giorni
      dall'attivazione.
    </span>
  </div>

  <div class="gz-arrow">→</div>

  <div class="gz-flow-item">
    <b>📧 Invia un'email</b>
    <span>
      Scrivi al supporto
      per richiedere
      il recesso.
    </span>
  </div>

  <div class="gz-arrow">→</div>

  <div class="gz-flow-item">
    <b>✅ Attendi la gestione</b>
    <span>
      La richiesta viene
      verificata e gestita.
    </span>
  </div>

  <div class="gz-arrow">→</div>

  <div class="gz-flow-item">
    <b>↩️ Rimborso</b>
    <span>
      Rimborso secondo
      i tempi previsti.
    </span>
  </div>

</div>

<div class="gz-contact">
  <b>📧 Email per il recesso</b>
  <p>
    <a href="mailto:support@mwrlife.com">
      support@mwrlife.com
    </a>
  </p>
</div>

<div class="gz-card">

  <h4>📝 Esempio di email di recesso</h4>

  <div style="
    background:#ffffff;
    border:1px solid #dce8ef;
    border-radius:12px;
    padding:18px;
    color:#36586e;
    font-size:13px;
    line-height:1.85;
  ">
    <strong>Oggetto:</strong>
    Richiesta di recesso entro 14 giorni
    <br><br>

    Buongiorno,
    <br><br>

    desidero esercitare il diritto
    di recesso relativo
    alla mia iscrizione
    e richiedere il rimborso
    dell'importo versato.
    <br><br>

    Nome e cognome: [Nome]
    <br>
    Email dell'account: [Email]
    <br>
    Tipologia di iscrizione: [Membership / Ambassador]
    <br>
    Data di attivazione: [Data]
    <br><br>

    Chiedo gentilmente
    conferma della ricezione
    e dell'avvio
    della procedura di rimborso.
    <br><br>

    Grazie.
  </div>

</div>

<!-- CANCELLAZIONE ABBONAMENTI -->

<h3 class="gz-title">
  🔄 2. Posso cancellare l'abbonamento quando voglio?
</h3>

<div class="gz-two">

  <div class="gz-card green">
    <span class="gz-icon">✅</span>
    <h4>Nessun vincolo di permanenza</h4>
    <p>
      Trascorsi i primi 14 giorni,
      puoi richiedere
      la sospensione o cancellazione
      della membership
      o della licenza Ambassador
      tramite il supporto,
      secondo le condizioni applicabili.
    </p>
  </div>

  <div class="gz-card gold">
    <span class="gz-icon">💳</span>
    <h4>Mensilità già utilizzate</h4>
    <p>
      Le quote relative
      ai periodi già fruiti
      non vengono rimborsate
      per il semplice fatto
      di aver deciso
      di interrompere l'abbonamento.
    </p>
  </div>

</div>

<div class="gz-warning">
  <strong>📌 Prima di interrompere una membership</strong>
  <br>
  Controlla i Punti Fedeltà accumulati,
  i Crediti Viaggio disponibili
  e le prenotazioni future.
  <br><br>
  La cancellazione
  dell'abbonamento non è
  la stessa cosa della cancellazione
  di una prenotazione hotel.
</div>

<!-- MIGLIOR PREZZO -->

<h3 class="gz-title">
  🏆 3. Garanzia del 150% sul miglior prezzo
</h3>

<div class="gz-card gold">
  <span class="gz-pill">
    🏨 ESCLUSIVA PRENOTAZIONI HOTEL
  </span>

  <span class="gz-number">150%</span>

  <h4>
    Trovi lo stesso hotel a meno?
  </h4>

  <p>
    Se entro <strong>24 ore
    dalla prenotazione</strong>
    trovi la stessa camera
    a un prezzo più basso
    su una piattaforma pubblica,
    puoi richiedere
    la Garanzia del Miglior Prezzo.
    <br><br>
    Se la richiesta
    rispetta tutti i requisiti,
    viene riconosciuto
    il <strong>150% della differenza</strong>
    sotto forma di
    <strong>Crediti Viaggio</strong>.
  </p>

</div>

<!-- ESEMPIO -->

<h3 class="gz-title">
  🧮 Esempio pratico della garanzia
</h3>

<div class="gz-price-box">

  <span class="gz-pill">
    ESEMPIO DI CONFRONTO HOTEL
  </span>

  <div class="gz-price-row">
    <span>🏨 Prezzo Travel Advantage</span>
    <b>500 €</b>
  </div>

  <div class="gz-price-row">
    <span>🔎 Stessa camera su portale pubblico</span>
    <b>450 €</b>
  </div>

  <div class="gz-price-row">
    <span>💰 Differenza di prezzo</span>
    <b>50 €</b>
  </div>

  <div class="gz-price-row">
    <span>🎁 Bonus del 50% sulla differenza</span>
    <b>25 €</b>
  </div>

  <div class="gz-price-total">
    <span>🏆 Valore complessivo del 150%</span>
    <strong>75 €</strong>
  </div>

</div>

<div class="gz-note">
  <strong>💡 Come viene riconosciuto?</strong>
  <br>
  Il beneficio viene accreditato
  sotto forma di Crediti Viaggio,
  non come denaro sul conto bancario.
  <br><br>
  L'esempio è espresso in euro
  per semplicità.
  La procedura ufficiale
  di confronto richiede invece
  di impostare i prezzi in
  <strong>dollari USA</strong>.
</div>

<!-- REQUISITI -->

<h3 class="gz-title">
  📋 4. Tutti i requisiti della garanzia 150%
</h3>

<p class="gz-intro">
  Per presentare una richiesta valida,
  non basta trovare
  genericamente un hotel
  a un prezzo più basso.
  Devi rispettare
  tutte le condizioni di confronto.
</p>

<div class="gz-checklist">

  <div class="gz-check">
    <strong>✅ Entro 24 ore</strong>
    La segnalazione va inviata
    entro 24 ore dalla prenotazione.
  </div>

  <div class="gz-check">
    <strong>✅ Da PC o desktop</strong>
    Effettua la verifica
    utilizzando un computer,
    non uno smartphone.
  </div>

  <div class="gz-check">
    <strong>✅ Prezzi in dollari USA</strong>
    Imposta la valuta
    in USD ($) per il confronto.
  </div>

  <div class="gz-check">
    <strong>✅ Stesso hotel</strong>
    La struttura deve
    essere esattamente la stessa.
  </div>

  <div class="gz-check">
    <strong>✅ Stesse date</strong>
    Check-in e check-out
    devono coincidere.
  </div>

  <div class="gz-check">
    <strong>✅ Stessi ospiti</strong>
    Numero di adulti
    e bambini identico.
  </div>

  <div class="gz-check">
    <strong>✅ Stessa camera</strong>
    Identica tipologia
    di camera e occupazione.
  </div>

  <div class="gz-check">
    <strong>✅ Stesso trattamento</strong>
    Colazione, pasti,
    servizi inclusi
    e condizioni equivalenti.
  </div>

  <div class="gz-check">
    <strong>✅ Tariffa pubblica</strong>
    La tariffa concorrente
    deve essere accessibile
    pubblicamente.
  </div>

  <div class="gz-check">
    <strong>✅ Nessun punto o credito applicato</strong>
    Sulla prenotazione Travel Advantage
    non devono essere stati
    utilizzati Punti Fedeltà
    o Crediti Viaggio.
  </div>

</div>

<h3 class="gz-title">
  🚫 Quali confronti NON sono validi?
</h3>

<div class="gz-grid">

  <div class="gz-card">
    <span class="gz-icon">🏷️</span>
    <h4>Codici sconto personali</h4>
    <p>
      Non sono valide
      tariffe ottenute
      tramite coupon privati
      o codici sconto personali.
    </p>
  </div>

  <div class="gz-card">
    <span class="gz-icon">⭐</span>
    <h4>Programmi fedeltà privati</h4>
    <p>
      Sono escluse
      le tariffe riservate
      a programmi come
      Genius di Booking.
    </p>
  </div>

  <div class="gz-card">
    <span class="gz-icon">👥</span>
    <h4>Tariffe di gruppo</h4>
    <p>
      Non sono valide
      offerte riservate
      a gruppi o categorie
      particolari di clienti.
    </p>
  </div>

  <div class="gz-card">
    <span class="gz-icon">🏨</span>
    <h4>Sito diretto dell'hotel</h4>
    <p>
      Il confronto
      con il sito ufficiale
      dell'hotel non rientra
      nei siti concorrenti
      ammessi dalla garanzia.
    </p>
  </div>

  <div class="gz-card">
    <span class="gz-icon">💵</span>
    <h4>Prenotazioni con punti o crediti</h4>
    <p>
      Se sulla prenotazione
      hai già applicato
      Punti Fedeltà
      o Crediti Viaggio,
      la richiesta non è idonea.
    </p>
  </div>

  <div class="gz-card">
    <span class="gz-icon">📅</span>
    <h4>Condizioni differenti</h4>
    <p>
      Una camera,
      una data o un trattamento
      differente impediscono
      un confronto equivalente.
    </p>
  </div>

</div>

<!-- PROCEDURA -->

<h3 class="gz-title">
  🚀 5. Come richiedere il rimborso del 150%
</h3>

<div class="gz-card">

  <div class="gz-step">
    <div class="gz-step-num">1</div>
    <div class="gz-step-content">
      <b>Accedi al tuo account</b>
      <p>
        Entra in Travel Advantage
        entro 24 ore
        dalla prenotazione hotel.
      </p>
    </div>
  </div>

  <div class="gz-step">
    <div class="gz-step-num">2</div>
    <div class="gz-step-content">
      <b>Apri la prenotazione interessata</b>
      <p>
        Individua nei dettagli
        della prenotazione
        la voce
        "Garanzia del miglior prezzo"
        o "Invia il tuo reclamo".
      </p>
    </div>
  </div>

  <div class="gz-step">
    <div class="gz-step-num">3</div>
    <div class="gz-step-content">
      <b>Prepara il confronto</b>
      <p>
        Dal computer,
        imposta la valuta
        in dollari USA.
        <br><br>
        Verifica che
        la camera e tutte
        le condizioni
        siano identiche.
      </p>
    </div>
  </div>

  <div class="gz-step">
    <div class="gz-step-num">4</div>
    <div class="gz-step-content">
      <b>Compila la richiesta</b>
      <p>
        Seleziona la prenotazione
        e inserisci
        l'URL diretto
        dell'offerta pubblica
        trovata a prezzo inferiore.
      </p>
    </div>
  </div>

  <div class="gz-step">
    <div class="gz-step-num">5</div>
    <div class="gz-step-content">
      <b>Invia entro 24 ore</b>
      <p>
        Controlla i dati
        e invia la segnalazione
        entro il termine previsto.
      </p>
    </div>
  </div>

  <div class="gz-step">
    <div class="gz-step-num">6</div>
    <div class="gz-step-content">
      <b>Attendi la verifica</b>
      <p>
        Il supporto verifica
        la richiesta
        e la corrispondenza
        delle condizioni.
        <br><br>
        In caso di esito positivo,
        viene accreditato
        il valore del 150%
        della differenza
        in Crediti Viaggio.
      </p>
    </div>
  </div>

</div>

<div class="gz-warning">
  <strong>⚠️ Prima di inviare la richiesta</strong>
  <br>
  Controlla soprattutto
  i quattro errori più frequenti:
  <br><br>
  ❌ Verifica effettuata da smartphone.
  <br>
  ❌ Prezzi mostrati in euro
  anziché in dollari USA.
  <br>
  ❌ Tariffa concorrente
  riservata a utenti registrati
  o programmi fedeltà.
  <br>
  ❌ Punti Fedeltà
  o Crediti Viaggio
  già applicati alla prenotazione.
</div>

<!-- CANCELLAZIONI HOTEL -->

<h3 class="gz-title">
  🏨 6. Cancellazioni delle prenotazioni
</h3>

<div class="gz-two">

  <div class="gz-card green">
    <span class="gz-icon">✅</span>
    <h4>Camera con cancellazione gratuita</h4>
    <p>
      Alcune offerte hotel
      prevedono la possibilità
      di annullare
      senza penali
      entro una data precisa.
      <br><br>
      La scadenza è indicata
      nelle condizioni
      della camera.
      <br><br>
      Se annulli nei termini,
      il rimborso segue
      le modalità previste
      dalla prenotazione.
    </p>
  </div>

  <div class="gz-card gold">
    <span class="gz-icon">🔒</span>
    <h4>Camera non rimborsabile</h4>
    <p>
      Alcune tariffe
      non prevedono rimborso
      in caso di cancellazione.
      <br><br>
      Prima di confermare,
      controlla sempre
      la politica di cancellazione
      e l'eventuale possibilità
      di aggiungere una protezione.
    </p>
  </div>

</div>

<div class="gz-note">
  <strong>📌 Dove verifico le condizioni?</strong>
  <br>
  Nella scheda della camera
  e nel riepilogo della prenotazione.
  <br><br>
  Controlla soprattutto
  la data limite,
  l'eventuale penale
  e le condizioni
  applicabili dopo la scadenza.
</div>

<!-- ASSICURAZIONE -->

<h3 class="gz-title">
  🩺 7. Assicurazione sulla prenotazione
</h3>

<div class="gz-card blue">
  <span class="gz-icon">🛡️</span>

  <h4>
    Protezione facoltativa
    contro alcuni imprevisti
  </h4>

  <p>
    Durante il checkout
    puoi valutare
    l'aggiunta di una
    copertura assicurativa
    per proteggere
    la prenotazione.
    <br><br>
    La copertura può permettere
    il rimborso anche
    di alcune tariffe
    originariamente
    non rimborsabili,
    quando l'annullamento
    dipende da eventi
    coperti dalla polizza.
  </p>
</div>

<div class="gz-warning">
  <strong>⚠️ Cosa controllare prima di acquistare</strong>
  <br>
  Verifica sempre
  gli eventi coperti,
  le esclusioni,
  gli eventuali periodi di carenza,
  le franchigie,
  i massimali
  e la procedura
  per richiedere un indennizzo.
  <br><br>
  Una polizza
  non significa automaticamente
  rimborso per qualsiasi motivo.
</div>

<!-- PRENOTAZIONI IN ATTESA -->

<h3 class="gz-title">
  ⏳ 8. Prenotazione hotel "In Attesa"
</h3>

<p class="gz-intro">
  In alcuni casi,
  la camera selezionata
  non viene confermata
  immediatamente.
  <br><br>
  Può succedere
  quando la disponibilità
  mostrata dal fornitore
  non è perfettamente
  sincronizzata
  con l'inventario effettivo.
</p>

<div class="gz-flow">

  <div class="gz-flow-item">
    <b>🏨 Prenoti la camera</b>
    <span>
      Il sistema avvia
      la conferma
      della disponibilità.
    </span>
  </div>

  <div class="gz-arrow">→</div>

  <div class="gz-flow-item">
    <b>⏳ In Attesa</b>
    <span>
      Viene cercata
      una disponibilità
      presso altri fornitori.
    </span>
  </div>

  <div class="gz-arrow">→</div>

  <div class="gz-flow-item">
    <b>⏱️ 30 minuti</b>
    <span>
      Il sistema prosegue
      la ricerca
      entro il periodo previsto.
    </span>
  </div>

  <div class="gz-arrow">→</div>

  <div class="gz-flow-item">
    <b>✅ oppure ↩️</b>
    <span>
      Conferma
      o annullamento
      della transazione.
    </span>
  </div>

</div>

<div class="gz-two">

  <div class="gz-card green">
    <span class="gz-icon">✅</span>
    <h4>Camera trovata</h4>
    <p>
      Se viene trovata
      una disponibilità idonea,
      la prenotazione
      viene confermata.
    </p>
  </div>

  <div class="gz-card gold">
    <span class="gz-icon">↩️</span>
    <h4>Camera non trovata</h4>
    <p>
      Se il sistema
      non riesce a confermarla,
      l'operazione viene annullata
      e viene avviato
      il rimborso
      sulla carta utilizzata.
    </p>
  </div>

</div>

<div class="gz-note">
  <strong>💳 Quanto tempo serve
  per vedere il rimborso?</strong>
  <br>
  L'annullamento e la procedura
  di rimborso possono essere
  avviati immediatamente.
  <br><br>
  La visualizzazione
  dell'importo sulla carta
  può dipendere
  dai tempi tecnici
  della banca
  o del circuito di pagamento.
</div>

<!-- CERTIFICAZIONI -->

<h3 class="gz-title">
  🌍 9. Registrazioni e tutele nel turismo
</h3>

<p class="gz-intro">
  Travel Advantage
  opera nel settore turistico
  attraverso una struttura
  che comprende riferimenti
  professionali,
  registrazioni e coperture
  legate all'attività.
</p>

<div class="gz-grid">

  <div class="gz-card blue">
    <span class="gz-icon">🌐</span>
    <h4>ETOA</h4>
    <p>
      European Tourism Association:
      associazione professionale
      del turismo europeo.
    </p>
  </div>

  <div class="gz-card green">
    <span class="gz-icon">🇫🇷</span>
    <h4>ATOUT France</h4>
    <p>
      Agenzia francese
      che svolge anche funzioni
      di registrazione
      degli operatori
      del settore turistico.
    </p>
  </div>

  <div class="gz-card blue">
    <span class="gz-icon">✈️</span>
    <h4>IATA-TIDS</h4>
    <p>
      Sistema internazionale
      di identificazione
      degli operatori
      e intermediari
      del settore viaggi.
    </p>
  </div>

  <div class="gz-card gold">
    <span class="gz-icon">🔐</span>
    <h4>Fondo di garanzia Allianz</h4>
    <p>
      Copertura collegata
      alle tutele previste
      per l'attività turistica,
      con riferimento
      alla responsabilità civile
      e alle garanzie
      applicabili ai viaggiatori.
      <br><br>
      L'effettiva protezione,
      gli eventi coperti
      e le modalità
      di rimborso o assistenza
      dipendono dalla garanzia
      e dal contratto applicabile.
    </p>
  </div>

</div>

<!-- PUNTI E CREDITI -->

<h3 class="gz-title">
  ⭐ 10. Cosa succede a punti e crediti
  se interrompo l'abbonamento?
</h3>

<div class="gz-two">

  <div class="gz-card green">
    <span class="gz-icon">💵</span>
    <h4>Crediti Viaggio</h4>
    <p>
      I Crediti Viaggio
      sono il cashback accumulato
      nell'account.
      <br><br>
      <strong>Non hanno scadenza</strong>
      e rimangono registrati
      nel saldo del profilo.
      <br><br>
      Le modalità di utilizzo
      dipendono dagli accessi
      disponibili nell'account.
    </p>
  </div>

  <div class="gz-card gold">
    <span class="gz-icon">⭐</span>
    <h4>Punti Fedeltà</h4>
    <p>
      I Punti Fedeltà
      sono collegati
      alla membership.
      <br><br>
      Non sono convertibili
      in denaro contante
      e sono soggetti
      a regole di mantenimento,
      sospensione e perdita.
    </p>
  </div>

</div>

<div class="gz-grid">

  <div class="gz-card">
    <span class="gz-icon">🔒</span>
    <h4>Pagamento non riuscito</h4>
    <p>
      Quando un rinnovo
      non va a buon fine,
      i Punti Fedeltà
      vengono congelati
      durante la sospensione
      dell'account.
    </p>
  </div>

  <div class="gz-card gold">
    <span class="gz-icon">⏳</span>
    <span class="gz-number">180 <small>giorni</small></span>
    <h4>Sospensione prolungata</h4>
    <p>
      Se il mancato pagamento
      o la sospensione
      supera 180 giorni,
      l'abbonamento viene annullato
      e i Punti Fedeltà
      accumulati vengono azzerati.
    </p>
  </div>

  <div class="gz-card">
    <span class="gz-icon">⬇️</span>
    <h4>Downgrade</h4>
    <p>
      Passando da Elite
      a un livello inferiore
      come VIP,
      si perdono
      i Punti Fedeltà
      sbloccati accumulati.
    </p>
  </div>

</div>

<div class="gz-danger">
  <strong>🚨 Attenzione ai punti Life Experience</strong>
  <br>
  Se utilizzi Punti Fedeltà
  per prenotare
  una Life Experience
  e successivamente
  cancelli volontariamente
  la prenotazione,
  i punti riscattati
  <strong>non vengono rimborsati</strong>.
</div>

<div class="gz-warning">
  <strong>📌 Prima di cancellare o fare downgrade</strong>
  <br>
  Controlla il saldo punti,
  le prenotazioni già effettuate,
  le condizioni di annullamento
  e le conseguenze
  sul tuo abbonamento.
</div>

<!-- ASSISTENZA -->

<h3 class="gz-title">
  📞 11. Assistenza clienti 24 ore su 24
</h3>

<div class="gz-card green" style="text-align:center">

  <span class="gz-icon">🌍</span>
  <span class="gz-number">24/7</span>

  <h4>Supporto multilingua</h4>

  <p>
    Servizio di assistenza
    disponibile 24 ore al giorno,
    7 giorni su 7,
    durante tutto l'anno.
  </p>

</div>

<div class="gz-grid">

  <div class="gz-card blue">
    <span class="gz-icon">💬</span>
    <h4>Chat live</h4>
    <p>
      Accedi alla piattaforma
      e seleziona
      l'icona della chat
      nell'angolo
      in basso a destra.
      <br><br>
      È uno dei canali
      più immediati
      per richiedere assistenza.
    </p>
  </div>

  <div class="gz-card green">
    <span class="gz-icon">📱</span>
    <h4>WhatsApp</h4>
    <p>
      Supporto tramite
      messaggi di testo
      al numero internazionale:
      <br><br>
      <strong>
        <a href="https://wa.me/19543618134">
          +1 954-361-8134
        </a>
      </strong>
      <br><br>
      Canale dedicato
      ai messaggi,
      non alle telefonate WhatsApp.
    </p>
  </div>

  <div class="gz-card gold">
    <span class="gz-icon">📧</span>
    <h4>Email e modulo online</h4>
    <p>
      Puoi inviare
      una richiesta scritta
      tramite il modulo
      di assistenza
      disponibile nella piattaforma.
      <br><br>
      Per le richieste
      di recesso:
      <br>
      <a href="mailto:support@mwrlife.com">
        support@mwrlife.com
      </a>
    </p>
  </div>

</div>

<!-- NUMERI -->

<h3 class="gz-title">
  🌍 12. Numeri telefonici internazionali
</h3>

<div class="gz-two">

  <div class="gz-contact">
    <b>🇮🇹 Italia</b>
    <p>
      <a href="tel:+390294755846">
        +39 02 94755 846
      </a>
    </p>
  </div>

  <div class="gz-contact">
    <b>🇫🇷 Francia</b>
    <p>
      <a href="tel:+33276863387">
        +33 27 68 63 387
      </a>
    </p>
  </div>

  <div class="gz-contact">
    <b>🇪🇸 Spagna</b>
    <p>
      <a href="tel:+34951568176">
        +34 95 156 81 76
      </a>
    </p>
  </div>

  <div class="gz-contact">
    <b>🇺🇸 USA / Canada</b>
    <p>
      <a href="tel:+18577632085">
        +1 857 763 2085
      </a>
    </p>
  </div>

</div>

<div class="gz-note">
  <strong>📍 Dove trovo i recapiti?</strong>
  <br>
  Nella piattaforma,
  scorri fino alla sezione
  <strong>Supporto</strong>.
  <br><br>
  Da qui puoi trovare
  i contatti disponibili
  per il tuo Paese
  e le opzioni di assistenza.
</div>

<!-- ASSISTENZA IN VIAGGIO -->

<h3 class="gz-title">
  🧳 13. Supporto prioritario durante il viaggio
</h3>

<div class="gz-card purple">
  <span class="gz-icon">🚨</span>

  <h4>
    Hai un imprevisto mentre sei in viaggio?
  </h4>

  <p>
    Durante i giorni
    del soggiorno
    è prevista una linea
    di assistenza prioritaria
    per i problemi
    legati a una prenotazione
    in corso.
    <br><br>
    Per una gestione più rapida,
    utilizza i recapiti
    indicati nel tuo account
    o nella documentazione
    della prenotazione.
  </p>

</div>

<div class="gz-card">

  <h4>
    📋 Cosa preparare prima
    di contattare il supporto
  </h4>

  <div class="gz-step">
    <div class="gz-step-num">1</div>
    <div class="gz-step-content">
      <b>Numero della prenotazione</b>
      <p>
        Tieni a disposizione
        il codice di conferma
        del viaggio o soggiorno.
      </p>
    </div>
  </div>

  <div class="gz-step">
    <div class="gz-step-num">2</div>
    <div class="gz-step-content">
      <b>Dati dell'intestatario</b>
      <p>
        Nome, cognome
        ed email utilizzata
        per effettuare
        la prenotazione.
      </p>
    </div>
  </div>

  <div class="gz-step">
    <div class="gz-step-num">3</div>
    <div class="gz-step-content">
      <b>Dettagli del soggiorno</b>
      <p>
        Struttura,
        destinazione,
        date di arrivo
        e partenza.
      </p>
    </div>
  </div>

  <div class="gz-step">
    <div class="gz-step-num">4</div>
    <div class="gz-step-content">
      <b>Descrizione del problema</b>
      <p>
        Spiega chiaramente
        cosa è successo
        e allega eventuali
        screenshot o documenti
        utili.
      </p>
    </div>
  </div>

</div>

<!-- TABELLA RIEPILOGATIVA -->

<h3 class="gz-title">
  📊 14. Tutte le garanzie a confronto
</h3>

<div class="gz-table-wrap">

  <table class="gz-table">
    <thead>
      <tr>
        <th>Garanzia</th>
        <th>Quando si applica</th>
        <th>Beneficio</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Recesso iniziale</td>
        <td>Entro 14 giorni</td>
        <td>Rimborso iniziale previsto</td>
      </tr>

      <tr>
        <td>Garanzia miglior prezzo</td>
        <td>
          Segnalazione hotel
          entro 24 ore
        </td>
        <td>
          150% della differenza
          in Crediti Viaggio
        </td>
      </tr>

      <tr>
        <td>Cancellazione gratuita</td>
        <td>
          Entro il termine indicato
          dalla tariffa
        </td>
        <td>
          Rimborso secondo
          le condizioni della camera
        </td>
      </tr>

      <tr>
        <td>Assicurazione prenotazione</td>
        <td>
          Eventi coperti
          dalla polizza acquistata
        </td>
        <td>
          Indennizzo secondo
          le condizioni assicurative
        </td>
      </tr>

      <tr>
        <td>Prenotazione in attesa</td>
        <td>
          Camera non confermata
          dal fornitore
        </td>
        <td>
          Ricerca alternativa
          oppure annullamento
          e rimborso
        </td>
      </tr>

      <tr>
        <td>Fondo di garanzia Allianz</td>
        <td>
          Eventi e situazioni
          coperti dalle garanzie
          applicabili
        </td>
        <td>
          Tutela secondo
          i relativi termini
          contrattuali
        </td>
      </tr>

      <tr>
        <td>Assistenza 24/7</td>
        <td>
          Richieste di supporto
          e problemi di viaggio
        </td>
        <td>
          Assistenza multilingua
        </td>
      </tr>
    </tbody>

  </table>

</div>

<!-- FAQ -->

<h3 class="gz-title">
  ❓ 15. Domande frequenti
</h3>

<details>
  <summary>
    📅 I 14 giorni sono lavorativi
    o di calendario?
  </summary>
  <div>
    Sono <strong>14 giorni di calendario</strong>.
    <br><br>
    Il termine decorre
    dalla data di iscrizione
    o dal primo pagamento,
    secondo le condizioni
    applicabili all'attivazione.
  </div>
</details>

<details>
  <summary>
    💼 La garanzia dei 14 giorni
    vale anche per gli Ambassador?
  </summary>
  <div>
    Sì, la garanzia iniziale
    comprende anche
    la quota di iscrizione
    per la licenza Ambassador,
    secondo le condizioni previste.
  </div>
</details>

<details>
  <summary>
    🏨 Posso chiedere il 150%
    confrontando il sito diretto dell'hotel?
  </summary>
  <div>
    No.
    <br><br>
    La comparazione deve riguardare
    una tariffa pubblica idonea
    disponibile su un portale concorrente.
    Il sito diretto dell'hotel
    è escluso.
  </div>
</details>

<details>
  <summary>
    📱 Posso fare la segnalazione del 150%
    dal telefono?
  </summary>
  <div>
    Il confronto richiesto
    per la garanzia
    va effettuato
    da PC o desktop,
    con la valuta impostata
    in dollari USA.
  </div>
</details>

<details>
  <summary>
    ⭐ Posso usare prima i Punti Fedeltà
    e poi chiedere il 150%?
  </summary>
  <div>
    No.
    <br><br>
    Per poter richiedere
    la garanzia del miglior prezzo,
    sulla prenotazione
    non devono essere stati
    utilizzati Punti Fedeltà
    o Crediti Viaggio.
  </div>
</details>

<details>
  <summary>
    ⏳ Cosa succede
    se la camera resta "In Attesa"?
  </summary>
  <div>
    Il sistema cerca
    per circa 30 minuti
    una disponibilità
    presso altri fornitori.
    <br><br>
    Se la camera
    non viene confermata,
    la transazione viene annullata
    e viene avviato
    il rimborso sulla carta.
  </div>
</details>

<details>
  <summary>
    🌴 Se cancello una Life Experience,
    recupero i Punti Fedeltà utilizzati?
  </summary>
  <div>
    Se cancelli volontariamente
    la prenotazione,
    i punti utilizzati
    per riscattare
    la Life Experience
    non sono rimborsabili.
  </div>
</details>

<details>
  <summary>
    💬 Qual è il modo più rapido
    per contattare l'assistenza?
  </summary>
  <div>
    Puoi accedere
    alla chat live
    direttamente
    dalla piattaforma,
    tramite l'icona
    in basso a destra.
    <br><br>
    Sono disponibili
    anche i canali telefonici,
    WhatsApp ed email.
  </div>
</details>

<!-- QUIZ -->

<h3 class="gz-title">
  🧠 16. Mettiti alla prova
</h3>

<div class="gz-quiz">
  <span class="gz-kicker">DOMANDA 01</span>
  <h4>
    Entro quanti giorni
    posso richiedere
    il rimborso iniziale?
  </h4>

  <p>A. 7 giorni</p>
  <p>B. 14 giorni di calendario</p>
  <p>C. 30 giorni lavorativi</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Entro 14 giorni di calendario.
    </div>
  </details>
</div>

<div class="gz-quiz">
  <span class="gz-kicker">DOMANDA 02</span>
  <h4>
    Entro quanto tempo
    devo segnalare
    una tariffa hotel più bassa
    per la garanzia del 150%?
  </h4>

  <p>A. 24 ore</p>
  <p>B. 7 giorni</p>
  <p>C. 30 giorni</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A.</strong>
      Entro 24 ore
      dalla prenotazione.
    </div>
  </details>
</div>

<div class="gz-quiz">
  <span class="gz-kicker">DOMANDA 03</span>
  <h4>
    In quale valuta
    devo effettuare
    il confronto prezzi?
  </h4>

  <p>A. Euro</p>
  <p>B. Dollari USA</p>
  <p>C. Qualsiasi valuta</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Dollari USA ($).
    </div>
  </details>
</div>

<div class="gz-quiz">
  <span class="gz-kicker">DOMANDA 04</span>
  <h4>
    Se il sito concorrente
    mostra un prezzo Genius,
    posso utilizzarlo
    per chiedere la garanzia?
  </h4>

  <p>A. Sì</p>
  <p>B. No</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Le tariffe riservate
      a programmi fedeltà
      privati sono escluse.
    </div>
  </details>
</div>

<div class="gz-quiz">
  <span class="gz-kicker">DOMANDA 05</span>
  <h4>
    Come viene riconosciuto
    il rimborso del 150%?
  </h4>

  <p>A. In contanti</p>
  <p>B. In Crediti Viaggio</p>
  <p>C. In Punti Fedeltà</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Tramite Crediti Viaggio
      accreditati nell'account.
    </div>
  </details>
</div>

<div class="gz-quiz">
  <span class="gz-kicker">DOMANDA 06</span>
  <h4>
    Cosa succede ai Punti Fedeltà
    dopo oltre 180 giorni
    di sospensione?
  </h4>

  <p>A. Si trasferiscono automaticamente</p>
  <p>B. Rimangono sempre disponibili</p>
  <p>C. Vengono azzerati</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>C.</strong>
      I punti vengono azzerati
      quando l'abbonamento
      viene annullato
      dopo il periodo previsto.
    </div>
  </details>
</div>

<div class="gz-quiz">
  <span class="gz-kicker">DOMANDA 07</span>
  <h4>
    Una prenotazione
    non rimborsabile
    diventa sempre rimborsabile
    acquistando un'assicurazione?
  </h4>

  <p>A. Sì, per qualsiasi motivo</p>
  <p>B. Solo negli eventi coperti dalla polizza</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Il rimborso dipende
      dagli eventi assicurati
      e dalle condizioni
      della copertura.
    </div>
  </details>
</div>

<!-- CONCLUSIONE -->

<h3 class="gz-title">
  🎯 Il concetto da ricordare
</h3>

<div class="gz-summary">

  <h4>🛡️ Conoscere le garanzie fa la differenza</h4>

  <p>
    Puoi richiedere
    il recesso iniziale
    entro 14 giorni,
    utilizzare la garanzia
    del miglior prezzo hotel
    e scegliere
    le prenotazioni
    con le condizioni
    più adatte alle tue esigenze.
    <br><br>
    Per la garanzia del 150%,
    ricorda soprattutto:
    <strong>
      24 ore, PC, dollari USA,
      condizioni identiche
      e nessun punto o credito
      applicato alla prenotazione.
    </strong>
    <br><br>
    In caso di difficoltà,
    puoi rivolgerti
    al supporto multilingua
    disponibile 24 ore su 24.
  </p>

</div>

</div>
</section>
`);
