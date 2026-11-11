
window.registraSezione("ambassador", `
<section class="section" id="ambassador" data-group="business">

<style>
#ambassador .am-title {
  color:#09243d;
  font-size:24px;
  margin:34px 0 16px;
}
#ambassador .am-intro {
  color:#536d7d;
  font-size:15px;
  line-height:1.8;
  margin:12px 0 22px;
}
#ambassador .am-kicker {
  display:inline-block;
  padding:7px 13px;
  border-radius:25px;
  background:#e8f8f6;
  color:#087f8b;
  font-size:11px;
  font-weight:800;
  letter-spacing:.07em;
  text-transform:uppercase;
}
#ambassador .am-hero {
  display:grid;
  grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);
  gap:24px;
  align-items:center;
  margin-bottom:30px;
}
#ambassador .am-hero .am-title {
  margin:15px 0;
}
#ambassador .am-art {
  background:linear-gradient(145deg,#092c4e,#117f9a);
  color:white;
  border-radius:22px;
  padding:28px 19px;
  text-align:center;
  overflow:hidden;
}
#ambassador .am-art-main {
  width:110px;
  height:110px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0 auto 20px;
  border-radius:50%;
  background:#ffffff1c;
  border:2px solid #ffffff45;
  font-size:60px;
}
#ambassador .am-art h4 {
  color:white;
  font-size:22px;
  margin:10px 0;
}
#ambassador .am-art p {
  color:#dff5fa;
  font-size:13px;
  line-height:1.7;
}
#ambassador .am-art-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:7px;
  margin-top:20px;
}
#ambassador .am-art-grid div {
  background:#ffffff20;
  border:1px solid #ffffff35;
  border-radius:11px;
  padding:13px 5px;
  color:white;
  font-size:11px;
  line-height:1.6;
}
#ambassador .am-art-grid span {
  display:block;
  font-size:23px;
}
#ambassador .am-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#ambassador .am-two {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#ambassador .am-card {
  min-width:0;
  border:1px solid #dfebf0;
  background:#f4f9fc;
  border-radius:18px;
  padding:22px;
}
#ambassador .am-card.blue {
  background:#eef7ff;
  border-color:#cce5fa;
}
#ambassador .am-card.green {
  background:#eefaf5;
  border-color:#d2ecdf;
}
#ambassador .am-card.gold {
  background:#fff8e8;
  border-color:#f1e2bd;
}
#ambassador .am-card.purple {
  background:#f6f0ff;
  border-color:#e4d8fa;
}
#ambassador .am-card h4 {
  color:#153953;
  font-size:18px;
  margin:10px 0;
}
#ambassador .am-card p {
  color:#536d7d;
  font-size:13px;
  line-height:1.8;
  margin:8px 0;
}
#ambassador .am-icon {
  display:block;
  font-size:30px;
  margin-bottom:8px;
}
#ambassador .am-number {
  display:block;
  color:#087f95;
  font-size:31px;
  font-weight:850;
  margin:10px 0;
  line-height:1.2;
}
#ambassador .am-number small {
  font-size:12px;
  color:#718795;
  font-weight:600;
}
#ambassador .am-pill {
  display:inline-block;
  background:#ffffffc5;
  color:#31566b;
  border-radius:25px;
  padding:6px 11px;
  font-size:11px;
  font-weight:800;
}
#ambassador .am-note {
  background:#eaf8f5;
  border-left:4px solid #19a998;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  color:#315b57;
  font-size:13px;
  line-height:1.8;
}
#ambassador .am-warning {
  background:#fff8e9;
  border-left:4px solid #d5a545;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  color:#745d32;
  font-size:13px;
  line-height:1.8;
}
#ambassador .am-flow {
  display:flex;
  align-items:stretch;
  gap:9px;
  margin:23px 0;
}
#ambassador .am-flow-item {
  flex:1;
  min-width:0;
  text-align:center;
  padding:17px 11px;
  background:#edf8fa;
  border:1px solid #d4e9ef;
  border-radius:14px;
}
#ambassador .am-flow-item b {
  display:block;
  color:#164b67;
  font-size:14px;
  margin-bottom:8px;
}
#ambassador .am-flow-item span {
  display:block;
  color:#536d7d;
  font-size:12px;
  line-height:1.65;
}
#ambassador .am-arrow {
  color:#1299a6;
  font-size:23px;
  font-weight:800;
  align-self:center;
}
#ambassador .am-bonus {
  border:1px solid #dfeaf0;
  background:#f8fbfd;
  border-radius:16px;
  padding:20px;
  margin:14px 0;
}
#ambassador .am-bonus-head {
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  gap:9px;
}
#ambassador .am-bonus h4 {
  color:#153953;
  font-size:18px;
  margin:9px 0;
}
#ambassador .am-bonus p {
  color:#536d7d;
  font-size:13px;
  line-height:1.8;
  margin:8px 0;
}
#ambassador .am-bonus-value {
  display:inline-block;
  font-size:22px;
  font-weight:850;
  color:#0c8294;
  margin:9px 0;
}
#ambassador .am-tag {
  border-radius:25px;
  padding:6px 11px;
  font-size:11px;
  font-weight:800;
  background:#ddf3eb;
  color:#266e52;
}
#ambassador .am-tag.residual {
  background:#eee5fc;
  color:#6e4997;
}
#ambassador .am-table-wrap {
  overflow-x:auto;
  border:1px solid #dce8ef;
  border-radius:15px;
  margin:23px 0;
}
#ambassador .am-table {
  min-width:540px;
  width:100%;
  border-collapse:collapse;
}
#ambassador .am-table th {
  background:#123650;
  color:white;
  padding:15px 12px;
  font-size:13px;
  text-align:left;
}
#ambassador .am-table td {
  padding:14px 12px;
  font-size:12px;
  line-height:1.7;
  border-bottom:1px solid #e2eaf0;
  color:#36586e;
}
#ambassador .am-table td:first-child {
  color:#153a54;
  font-weight:750;
}
#ambassador .am-table tr:nth-child(even) td {
  background:#f4f8fb;
}
#ambassador .am-table tr:last-child td {
  border-bottom:0;
}
#ambassador .am-step {
  display:flex;
  align-items:flex-start;
  gap:15px;
  border-bottom:1px solid #e1eaf0;
  padding:17px 0;
}
#ambassador .am-step:last-child { border-bottom:0; }
#ambassador .am-step-num {
  background:#0d7e95;
  color:white;
  width:36px;
  height:36px;
  min-width:36px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:800;
}
#ambassador .am-step-body {
  flex:1;
  min-width:0;
}
#ambassador .am-step-body b {
  color:#153a54;
  font-size:15px;
}
#ambassador .am-step-body p {
  color:#536d7d;
  font-size:13px;
  line-height:1.8;
  margin:7px 0;
}
#ambassador .am-quiz {
  background:#f6f0ff;
  border:1px solid #e7dafb;
  border-radius:17px;
  padding:22px;
  margin:18px 0;
}
#ambassador .am-quiz h4 {
  color:#253453;
  font-size:17px;
  margin:10px 0;
}
#ambassador .am-quiz p {
  color:#5c637e;
  font-size:13px;
  line-height:1.8;
  margin:6px 0;
}
#ambassador .am-quiz details {
  background:white;
  padding:12px;
  border-radius:12px;
  margin-top:13px;
}
#ambassador .am-summary {
  background:linear-gradient(135deg,#0c3557,#117d91);
  color:white;
  border-radius:18px;
  padding:25px;
  margin:24px 0;
}
#ambassador .am-summary h4 {
  color:white;
  font-size:21px;
  margin:0 0 12px;
}
#ambassador .am-summary p {
  color:#e0f5f6;
  font-size:14px;
  line-height:1.85;
}
@media(max-width:850px) {
  #ambassador .am-grid { grid-template-columns:1fr; }
}
@media(max-width:700px) {
  #ambassador .am-hero,
  #ambassador .am-two {
    grid-template-columns:1fr;
  }
  #ambassador .am-flow {
    flex-direction:column;
  }
  #ambassador .am-arrow {
    transform:rotate(90deg);
  }
}
@media(max-width:600px) {
  #ambassador .am-title { font-size:21px; }
}
</style>

<!-- INTESTAZIONE -->

<div class="section-head">
  <span class="kicker">
    Capitolo 08 · Opportunità di business
  </span>
  <h2>Lifestyle Ambassador</h2>
  <p>
    Scopri il ruolo dell'Ambassador MWR Life,
    come funziona l'attività,
    quali sono le 9 aree del piano compensi
    e come iniziare a costruire
    una rete di clienti.
  </p>
</div>

<div class="section-body">

<!-- INTRODUZIONE -->

<div class="am-hero">

  <div>
    <span class="am-kicker">Partiamo dalle basi</span>

    <h3 class="am-title">
      💼 Chi è un Lifestyle Ambassador?
    </h3>

    <p class="am-intro">
      Un <strong>Lifestyle Ambassador</strong>
      è un incaricato indipendente
      che promuove i vantaggi
      di Travel Advantage
      e fa conoscere
      l'opportunità di business
      di <strong>MWR Life</strong>.
      <br><br>
      MWR Life, fondata nel 2013,
      è l'azienda che gestisce
      l'ecosistema di viaggio
      Travel Advantage.
      <br><br>
      L'attività si basa
      sul passaparola,
      sulla presentazione
      della piattaforma
      e sullo sviluppo
      di una rete di clienti.
    </p>
  </div>

  <div class="am-art">

    <div class="am-art-main">🌍</div>

    <h4>Condividi il mondo dei viaggi</h4>

    <p>
      Fai conoscere un servizio,
      aiuta le persone a comprenderlo
      e sviluppa la tua attività.
    </p>

    <div class="am-art-grid">
      <div><span>✈️</span>Viaggi</div>
      <div><span>🤝</span>Relazioni</div>
      <div><span>💼</span>Business</div>
    </div>

  </div>

</div>

<!-- RUOLO -->

<h3 class="am-title">
  🌍 1. Che cosa fa concretamente?
</h3>

<div class="am-grid">

  <div class="am-card green">
    <span class="am-icon">📱</span>
    <h4>Presenta la piattaforma</h4>
    <p>
      Fa conoscere Travel Advantage
      ad amici, conoscenti
      e persone interessate
      a viaggiare.
    </p>
  </div>

  <div class="am-card blue">
    <span class="am-icon">🎟️</span>
    <h4>Condivide Guest Pass</h4>
    <p>
      Può regalare accessi
      gratuiti di prova,
      permettendo alle persone
      di confrontare
      le tariffe hotel.
    </p>
  </div>

  <div class="am-card gold">
    <span class="am-icon">🤝</span>
    <h4>Costruisce relazioni</h4>
    <p>
      Segue i propri contatti,
      risponde alle domande
      e presenta l'opportunità
      a chi desidera
      approfondirla.
    </p>
  </div>

</div>

<div class="am-two">

  <div class="am-card green">
    <span class="am-icon">✅</span>
    <h4>Di cosa si occupa</h4>
    <p>
      ✅ Promuove le membership.
      <br>
      ✅ Fa conoscere i vantaggi di viaggio.
      <br>
      ✅ Presenta l'opportunità Ambassador.
      <br>
      ✅ Offre supporto informativo ai contatti.
      <br>
      ✅ Può formare e affiancare il proprio team.
    </p>
  </div>

  <div class="am-card gold">
    <span class="am-icon">🚫</span>
    <h4>Di cosa non si occupa</h4>
    <p>
      ❌ Non vende direttamente pacchetti turistici.
      <br>
      ❌ Non opera come agenzia di viaggi.
      <br>
      ❌ Non emette biglietti o voucher.
      <br>
      ❌ Non gestisce i pagamenti delle prenotazioni.
      <br>
      ❌ Non sostituisce l'assistenza clienti ufficiale.
    </p>
  </div>

</div>

<div class="am-note">
  <strong>💡 La distinzione fondamentale</strong>
  <br>
  L'Ambassador promuove
  l'accesso alla piattaforma.
  <br><br>
  Il cliente sceglie
  la propria membership
  e prenota autonomamente
  su Travel Advantage.
  <br><br>
  Per questioni relative
  alle prenotazioni,
  può contattare
  l'assistenza ufficiale
  della piattaforma.
</div>

<!-- TIPOLOGIA DI ATTIVITÀ -->

<h3 class="am-title">
  🧩 2. Come funziona il modello di business?
</h3>

<div class="am-flow">

  <div class="am-flow-item">
    <b>📣 Presentazione</b>
    <span>
      Fai conoscere
      Travel Advantage
      e i suoi vantaggi.
    </span>
  </div>

  <div class="am-arrow">→</div>

  <div class="am-flow-item">
    <b>👤 Nuovo cliente</b>
    <span>
      Una persona sceglie
      di attivare
      una membership.
    </span>
  </div>

  <div class="am-arrow">→</div>

  <div class="am-flow-item">
    <b>💳 Abbonamento</b>
    <span>
      Il cliente utilizza
      la piattaforma
      e può rinnovare
      la membership.
    </span>
  </div>

  <div class="am-arrow">→</div>

  <div class="am-flow-item">
    <b>💰 Commissioni</b>
    <span>
      L'Ambassador può
      maturare i compensi
      previsti dal piano.
    </span>
  </div>

</div>

<div class="am-card blue">
  <span class="am-icon">🤝</span>
  <h4>Network marketing e clienti reali</h4>
  <p>
    Il modello comprende
    commissioni sulle membership
    e bonus collegati
    all'attività della rete.
    <br><br>
    I compensi dipendono
    dalle vendite idonee,
    dai rinnovi, dalle qualifiche
    e dai volumi previsti
    dal piano compensi.
    <br><br>
    <strong>
      Il semplice inserimento
      di una persona nel team
      non equivale automaticamente
      a un guadagno.
    </strong>
  </p>
</div>

<div class="am-warning">
  <strong>⚠️ Un'attività indipendente comporta responsabilità</strong>
  <br>
  L'Ambassador può organizzare
  autonomamente il proprio tempo,
  ma non ha uno stipendio garantito.
  <br><br>
  Deve considerare
  i costi di iscrizione,
  le eventuali spese operative,
  la gestione fiscale
  e il rischio di non recuperare
  quanto investito.
  <br><br>
  I risultati dipendono
  dall'attività effettivamente svolta
  e non sono uguali per tutti.
</div>

<!-- COSTI -->

<h3 class="am-title">
  💳 3. Quanto costa diventare Ambassador?
</h3>

<div class="am-two">

  <div class="am-card green">
    <span class="am-pill">LICENZA BUSINESS</span>
    <span class="am-number">
      $99 <small>/anno</small>
    </span>
    <h4>Licenza Lifestyle Ambassador</h4>
    <p>
      Quota annuale
      per attivare
      l'attività commerciale
      e accedere agli strumenti
      di gestione e back office.
    </p>
  </div>

  <div class="am-card gold">
    <span class="am-pill">MEMBERSHIP VIAGGIO</span>
    <span class="am-number">
      Da $19.97 <small>/mese</small>
    </span>
    <h4>Abbonamento Travel Advantage</h4>
    <p>
      La membership personale
      permette di conoscere
      e utilizzare
      i servizi della piattaforma.
      <br><br>
      Elite e Turbo sono
      le opzioni comunemente
      associate allo sviluppo
      dell'attività;
      l'ammissibilità del piano VIP
      dipende dalle regole
      applicabili al Paese.
    </p>
  </div>

</div>

<div class="am-note">
  <strong>📌 Due cose diverse</strong>
  <br>
  La licenza Ambassador
  e l'abbonamento viaggio
  sono due prodotti distinti.
  <br><br>
  La licenza riguarda
  l'attività commerciale.
  <br>
  La membership riguarda
  l'utilizzo della piattaforma
  di prenotazione.
</div>

<div class="am-card blue">
  <span class="am-icon">🛡️</span>
  <h4>Garanzia iniziale di 14 giorni</h4>
  <p>
    È prevista una garanzia
    di rimborso iniziale
    entro 14 giorni di calendario,
    secondo le condizioni
    di iscrizione.
    <br><br>
    Per le richieste di recesso:
    <strong>support@mwrlife.com</strong>.
  </p>
</div>

<!-- PIANO COMPENSI -->

<h3 class="am-title">
  💰 4. Le 9 aree del piano compensi
</h3>

<p class="am-intro">
  Il piano compensi MWR Life
  prevede <strong>9 tipologie
  di bonus</strong>.
  <br><br>
  Alcuni sono collegati
  alle nuove iscrizioni
  e al raggiungimento
  di obiettivi.
  Altri sono calcolati
  sulla produzione ricorrente
  dell'organizzazione.
</p>

<div class="am-two">

  <div class="am-card green">
    <span class="am-icon">🚀</span>
    <h4>Bonus di produzione</h4>
    <p>
      Riconosciuti
      al verificarsi
      di iscrizioni,
      volumi o qualifiche
      previsti dal piano.
      <br><br>
      Non sono necessariamente
      compensi ricorrenti.
    </p>
  </div>

  <div class="am-card purple">
    <span class="am-icon">🔄</span>
    <h4>Bonus ricorrenti</h4>
    <p>
      Collegati ai rinnovi
      dei clienti e alla produzione
      dell'organizzazione,
      purché siano mantenuti
      i requisiti necessari.
      <br><br>
      Possono variare
      oppure interrompersi.
    </p>
  </div>

</div>

<!-- BONUS PRODUZIONE -->

<h3 class="am-title">
  🚀 5. I 5 bonus di produzione
</h3>

<div class="am-bonus">
  <div class="am-bonus-head">
    <span class="am-pill">01 · MEMBER BONUS</span>
    <span class="am-tag">PRODUZIONE</span>
  </div>

  <h4>💵 Member Bonus</h4>
  <span class="am-bonus-value">
    $20 / $40 / $80
  </span>

  <p>
    Commissione diretta
    prevista per l'attivazione
    di un nuovo cliente personale
    con membership idonea.
    <br><br>
    <strong>VIP:</strong> $20.
    <br>
    <strong>Elite:</strong> $40.
    <br>
    <strong>Turbo:</strong> $80.
    <br><br>
    Gli importi sono soggetti
    alle condizioni del piano compensi.
  </p>
</div>

<div class="am-bonus">
  <div class="am-bonus-head">
    <span class="am-pill">02 · FAST START BONUS</span>
    <span class="am-tag">PRODUZIONE</span>
  </div>

  <h4>⚡ Fast Start Bonus</h4>
  <span class="am-bonus-value">
    Fino a $450
  </span>

  <p>
    Bonus acceleratore
    previsto durante
    i <strong>primi 21 giorni</strong>
    di attività.
    <br><br>
    È collegato
    all'iscrizione di coppie
    di membri Elite o Turbo
    e al raggiungimento
    dei requisiti previsti.
  </p>
</div>

<div class="am-bonus">
  <div class="am-bonus-head">
    <span class="am-pill">03 · BUILDER BONUS</span>
    <span class="am-tag">PRODUZIONE</span>
  </div>

  <h4>🧱 Builder Bonus</h4>
  <span class="am-bonus-value">
    Da $10 a $250
  </span>

  <p>
    Commissione aggiuntiva
    sulle nuove iscrizioni
    nell'organizzazione.
    <br><br>
    Dipende dai differenziali
    di qualifica previsti
    dal piano compensi
    e dalle condizioni
    della specifica iscrizione.
  </p>
</div>

<div class="am-bonus">
  <div class="am-bonus-head">
    <span class="am-pill">04 · BOOST BONUS</span>
    <span class="am-tag">PRODUZIONE</span>
  </div>

  <h4>📈 Boost Bonus</h4>
  <span class="am-bonus-value">
    $600 / $1.200
  </span>

  <p>
    Bonus settimanale
    legato al raggiungimento
    di specifici volumi
    di produzione
    su almeno due linee.
    <br><br>
    È previsto
    per determinate qualifiche,
    tra cui Gold e Platinum,
    al soddisfacimento
    di tutti i requisiti.
  </p>
</div>

<div class="am-bonus">
  <div class="am-bonus-head">
    <span class="am-pill">05 · RANK BONUS</span>
    <span class="am-tag">PRODUZIONE</span>
  </div>

  <h4>🏆 One Time Rank Bonus</h4>
  <span class="am-bonus-value">
    Premi una tantum
  </span>

  <p>
    Premi economici
    o esperienziali previsti
    al raggiungimento
    di determinate qualifiche.
  </p>

  <div class="am-table-wrap">
    <table class="am-table">
      <thead>
        <tr>
          <th>Qualifica</th>
          <th>Esempio di premio previsto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Platinum</td>
          <td>$300 di bonus Life Experience</td>
        </tr>
        <tr>
          <td>Ruby</td>
          <td>$5.000 di premio</td>
        </tr>
        <tr>
          <td>Diamond</td>
          <td>CEO Experience a Miami</td>
        </tr>
        <tr>
          <td>Black Royal</td>
          <td>
            Premio fino a $1.000.000
            destinato all'acquisto
            di una villa,
            alle condizioni del piano
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    Le qualifiche più elevate
    prevedono requisiti
    di produzione importanti.
    I premi non sono automatici
    e non rappresentano
    risultati ordinari.
  </p>
</div>

<!-- BONUS RESIDUALI -->

<h3 class="am-title">
  🔄 6. I 4 bonus ricorrenti
</h3>

<div class="am-bonus">
  <div class="am-bonus-head">
    <span class="am-pill">06 · MEMBERSHIP RESIDUAL</span>
    <span class="am-tag residual">RICORRENTE</span>
  </div>

  <h4>🔁 Membership Residual</h4>
  <span class="am-bonus-value">
    Dal 10% al 25%
  </span>

  <p>
    Percentuale riconosciuta
    sui rinnovi delle membership
    dei clienti personali,
    in base alle qualifiche
    e alle regole del piano.
    <br><br>
    Il compenso dipende
    dai rinnovi effettivamente
    idonei e dai requisiti
    mantenuti dall'Ambassador.
  </p>
</div>

<div class="am-bonus">
  <div class="am-bonus-head">
    <span class="am-pill">07 · DUAL TEAM RESIDUAL</span>
    <span class="am-tag residual">RICORRENTE</span>
  </div>

  <h4>⚖️ Dual Team Residual</h4>
  <span class="am-bonus-value">
    Da $120 a $450.000 / mese
  </span>

  <p>
    Bonus legato
    alla produzione
    di due strutture
    dell'organizzazione:
    <strong>gamba sinistra
    e gamba destra</strong>.
    <br><br>
    Le iscrizioni attribuiscono
    punti alla rete.
    Le qualifiche e i volumi
    determinano l'eventuale
    bonus ottenibile.
    <br><br>
    Gli importi della tabella
    compensi rappresentano
    livelli previsti dal piano,
    non un reddito garantito.
  </p>
</div>

<div class="am-bonus">
  <div class="am-bonus-head">
    <span class="am-pill">08 · CAR BONUS</span>
    <span class="am-tag residual">RICORRENTE</span>
  </div>

  <h4>🚘 Car Bonus</h4>
  <span class="am-bonus-value">
    Da $250 a $500 / mese
  </span>

  <p>
    Bonus mensile previsto
    per determinate qualifiche,
    finalizzato a contribuire
    ai costi di un'automobile
    come Audi, BMW o Mercedes.
    <br><br>
    Richiede il mantenimento
    dei requisiti stabiliti.
    Non equivale
    alla consegna gratuita
    di un'automobile.
  </p>
</div>

<div class="am-bonus">
  <div class="am-bonus-head">
    <span class="am-pill">09 · PRESIDENTIAL BONUS</span>
    <span class="am-tag residual">RICORRENTE</span>
  </div>

  <h4>👑 Presidential Bonus</h4>
  <span class="am-bonus-value">
    20%
  </span>

  <p>
    Bonus aggiuntivo
    collegato al volume
    della gamba debole
    per gli aventi diritto
    del Presidential Club,
    a partire dalla qualifica Jade.
    <br><br>
    Il calcolo dipende
    dal volume commissionabile
    e dalle regole
    di attribuzione del bonus.
  </p>
</div>

<div class="am-warning">
  <strong>⚠️ Come leggere gli importi del piano compensi</strong>
  <br>
  Le cifre indicano bonus potenzialmente
  raggiungibili al verificarsi
  di precise condizioni.
  <br><br>
  Non rappresentano
  lo stipendio medio
  di un Ambassador,
  né un risultato garantito.
  <br><br>
  Prima di utilizzarle
  nelle presentazioni pubbliche,
  occorre verificare
  la versione ufficiale
  del piano compensi
  e le regole sui claim di reddito.
</div>

<!-- PUNTEGGIO -->

<h3 class="am-title">
  🧮 7. Come funzionano i punti della rete?
</h3>

<p class="am-intro">
  Le iscrizioni dei clienti
  contribuiscono alla produzione
  dell'organizzazione
  attraverso un punteggio.
  <br><br>
  Questi punti sono diversi
  dai <strong>Punti Fedeltà</strong>
  utilizzati per prenotare viaggi.
</p>

<div class="am-two">

  <div class="am-card blue">
    <span class="am-pill">CLIENTE VIP</span>
    <span class="am-number">1 punto</span>
    <p>
      Una membership VIP
      contribuisce con 1 punto
      al punteggio Dual Team,
      secondo le regole del piano.
    </p>
  </div>

  <div class="am-card gold">
    <span class="am-pill">CLIENTE ELITE / TURBO</span>
    <span class="am-number">6 punti</span>
    <p>
      Una membership
      Elite o Turbo
      contribuisce con 6 punti
      al punteggio Dual Team.
    </p>
  </div>

</div>

<div class="am-flow">

  <div class="am-flow-item">
    <b>👥 Clienti</b>
    <span>
      Attivano e mantengono
      membership idonee.
    </span>
  </div>

  <div class="am-arrow">→</div>

  <div class="am-flow-item">
    <b>🧮 Punti di rete</b>
    <span>
      La produzione genera
      il punteggio previsto.
    </span>
  </div>

  <div class="am-arrow">→</div>

  <div class="am-flow-item">
    <b>⚖️ Due linee</b>
    <span>
      I volumi sono organizzati
      nella struttura Dual Team.
    </span>
  </div>

  <div class="am-arrow">→</div>

  <div class="am-flow-item">
    <b>🏆 Qualifica</b>
    <span>
      I requisiti determinano
      l'eventuale bonus maturato.
    </span>
  </div>

</div>

<div class="am-note">
  <strong>💡 Attenzione ai diversi tipi di punti</strong>
  <br>
  <strong>Punti Fedeltà:</strong>
  servono per ridurre
  i costi dei viaggi.
  <br><br>
  <strong>Punti di rete:</strong>
  servono per i calcoli
  delle qualifiche
  e dei bonus commerciali.
  <br><br>
  Non sono la stessa cosa
  e non hanno
  la stessa funzione.
</div>

<!-- QUALIFICHE -->

<h3 class="am-title">
  🏅 8. Attivo, Qualificato e Silver
</h3>

<div class="am-grid">

  <div class="am-card blue">
    <span class="am-icon">✅</span>
    <h4>Ambassador Attivo</h4>
    <p>
      Mantiene regolare
      la propria licenza
      Ambassador annuale.
      <br><br>
      La quota prevista
      è di <strong>$99 all'anno</strong>.
    </p>
  </div>

  <div class="am-card green">
    <span class="am-icon">🎯</span>
    <h4>Ambassador Qualificato</h4>
    <p>
      Soddisfa i requisiti
      previsti dal piano,
      tra cui il raggiungimento
      di <strong>3 punti
      cliente personali</strong>
      o le condizioni alternative
      ammesse per la qualificazione.
    </p>
  </div>

  <div class="am-card gold">
    <span class="am-icon">🥈</span>
    <h4>Qualifica Silver</h4>
    <p>
      È uno dei primi
      traguardi della carriera.
      <br><br>
      Nel piano è associato
      a un livello di bonus
      Dual Team Residual
      da <strong>$120 mensili</strong>,
      quando sono rispettati
      i requisiti richiesti.
    </p>
  </div>

</div>

<!-- ESEMPIO SILVER -->

<h3 class="am-title">
  🥈 9. Il primo obiettivo: Silver
</h3>

<p class="am-intro">
  La qualifica Silver
  è un primo obiettivo
  utile per comprendere
  il funzionamento
  del piano compensi.
</p>

<div class="am-card gold">

  <span class="am-pill">
    ESEMPIO DI PRODUZIONE
  </span>

  <h4>
    Tre clienti Elite o Turbo
  </h4>

  <div class="am-flow">

    <div class="am-flow-item">
      <b>👤 Cliente 1</b>
      <span>6 punti</span>
    </div>

    <div class="am-arrow">+</div>

    <div class="am-flow-item">
      <b>👤 Cliente 2</b>
      <span>6 punti</span>
    </div>

    <div class="am-arrow">+</div>

    <div class="am-flow-item">
      <b>👤 Cliente 3</b>
      <span>6 punti</span>
    </div>

    <div class="am-arrow">=</div>

    <div class="am-flow-item">
      <b>🧮 Totale</b>
      <span>18 punti</span>
    </div>

  </div>

  <p>
    Tre iscrizioni Elite o Turbo
    corrispondono a
    <strong>18 punti di produzione</strong>.
    <br><br>
    Questo esempio mostra
    il calcolo dei punti,
    ma per ottenere
    effettivamente Silver
    bisogna rispettare
    anche la distribuzione
    richiesta nella struttura,
    lo stato di qualificazione
    e le condizioni
    del piano compensi.
  </p>

</div>

<div class="am-two">

  <div class="am-card green">
    <span class="am-icon">💰</span>
    <span class="am-number">
      $120 <small>/mese</small>
    </span>
    <h4>Livello residual Silver</h4>
    <p>
      Il piano prevede
      questo livello
      di compenso
      al soddisfacimento
      dei requisiti.
      <br><br>
      Non è un pagamento
      automatico per il solo fatto
      di aver iscritto tre persone.
    </p>
  </div>

  <div class="am-card blue">
    <span class="am-icon">⭐</span>
    <span class="am-number">
      $119.97 <small>/mese</small>
    </span>
    <h4>Canone Elite</h4>
    <p>
      La quota mensile Elite
      è $119.97.
      <br><br>
      Un bonus Silver
      effettivamente maturato
      di $120 coprirebbe
      quasi esattamente
      quel costo nominale,
      prima di eventuali
      imposte, trattenute
      e altri costi.
    </p>
  </div>

</div>

<div class="am-warning">
  <strong>⚠️ Silver non significa abbonamento gratuito</strong>
  <br>
  Il compenso da $120
  deve essere realmente maturato
  e può dipendere
  dal mantenimento
  della qualifica,
  della produzione
  e dei requisiti previsti.
  <br><br>
  Non è corretto presentare
  l'abbonamento Elite
  come automaticamente gratuito
  dopo tre iscrizioni.
</div>

<!-- ORGANIZZAZIONE -->

<h3 class="am-title">
  ⚖️ 10. Che cosa sono le due gambe?
</h3>

<div class="am-card">

  <p>
    Il sistema Dual Team
    suddivide l'organizzazione
    in due strutture:
    <strong>sinistra e destra</strong>.
  </p>

  <div style="
    text-align:center;
    padding:15px 0;
  ">

    <div style="
      display:inline-block;
      background:#123650;
      color:white;
      border-radius:13px;
      padding:15px 28px;
      font-weight:800;
    ">
      👤 TU — AMBASSADOR
    </div>

    <div style="
      display:flex;
      justify-content:center;
      font-size:27px;
      color:#0b91a1;
      margin:10px 0;
    ">
      ↙ &nbsp;&nbsp;&nbsp;&nbsp; ↘
    </div>

    <div class="am-two" style="margin:0">

      <div class="am-card blue">
        <span class="am-icon">👥</span>
        <h4>Gamba sinistra</h4>
        <p>
          Produzione e punti
          generati dalla
          struttura sinistra.
        </p>
      </div>

      <div class="am-card green">
        <span class="am-icon">👥</span>
        <h4>Gamba destra</h4>
        <p>
          Produzione e punti
          generati dalla
          struttura destra.
        </p>
      </div>

    </div>

  </div>

</div>

<div class="am-note">
  <strong>💡 Gamba forte e gamba debole</strong>
  <br>
  La gamba forte è quella
  con il volume maggiore.
  <br><br>
  La gamba debole è quella
  con il volume minore.
  <br><br>
  Il piano Dual Team
  utilizza queste strutture
  per determinati calcoli
  di qualifica e remunerazione.
  Le regole complete
  vanno sempre consultate
  nel piano compensi ufficiale.
</div>

<!-- PAGAMENTI -->

<h3 class="am-title">
  💳 11. Quando e come vengono pagate le commissioni?
</h3>

<div class="am-card green">
  <span class="am-icon">📅</span>
  <span class="am-number">Venerdì</span>
  <h4>Accredito settimanale previsto</h4>
  <p>
    Le commissioni maturate
    e liquidabili vengono
    normalmente accreditate
    nell'Ewallet aziendale
    secondo il calendario
    dei pagamenti previsto.
  </p>
</div>

<div class="am-grid">

  <div class="am-card blue">
    <span class="am-icon">🏦</span>
    <h4>Bonifico bancario</h4>
    <p>
      Trasferimento
      delle commissioni
      tramite bonifico,
      quando disponibile.
    </p>
  </div>

  <div class="am-card green">
    <span class="am-icon">💳</span>
    <h4>Carta aziendale</h4>
    <p>
      Possibilità di utilizzare
      una carta di debito
      Visa o Mastercard,
      secondo le opzioni
      del proprio account.
    </p>
  </div>

  <div class="am-card gold">
    <span class="am-icon">💵</span>
    <h4>Crediti Viaggio</h4>
    <p>
      Possibilità di destinare
      commissioni a Crediti Viaggio
      per utilizzare il valore
      all'interno della piattaforma.
    </p>
  </div>

  <div class="am-card purple">
    <span class="am-icon">₿</span>
    <h4>Bitcoin</h4>
    <p>
      Opzione di pagamento
      in criptovaluta,
      se disponibile
      per il proprio Paese
      e account.
    </p>
  </div>

</div>

<div class="am-warning">
  <strong>📌 Attenzione agli importi ricevuti</strong>
  <br>
  Il totale disponibile
  può essere diverso
  dal bonus lordo previsto
  a causa di commissioni,
  trattenute, conversioni
  e obblighi fiscali.
  <br><br>
  Il trattamento fiscale
  dipende dal Paese
  e dalla situazione
  personale dell'Ambassador.
</div>

<!-- FORMAZIONE -->

<h3 class="am-title">
  🎓 12. Formazione e supporto della community
</h3>

<p class="am-intro">
  Chi inizia non deve
  necessariamente conoscere
  già il settore turistico
  o avere esperienza
  nel marketing.
  <br><br>
  La community
  <strong>The Travel Legends</strong>
  mette a disposizione
  strumenti formativi
  e momenti di affiancamento
  per imparare a presentare
  l'attività in modo corretto.
</p>

<div class="am-grid">

  <div class="am-card blue">
    <span class="am-icon">📱</span>
    <h4>Social e digital marketing</h4>
    <p>
      Strategie per presentare
      Travel Advantage
      attraverso Instagram,
      TikTok, WhatsApp
      e altri canali digitali.
    </p>
  </div>

  <div class="am-card green">
    <span class="am-icon">🤖</span>
    <h4>Intelligenza artificiale</h4>
    <p>
      Strumenti per organizzare
      idee, contenuti,
      comunicazioni
      e attività quotidiane.
    </p>
  </div>

  <div class="am-card gold">
    <span class="am-icon">💬</span>
    <h4>Script e comunicazione</h4>
    <p>
      Esempi di messaggi
      e percorsi di conversazione
      per incuriosire le persone
      senza essere insistenti.
    </p>
  </div>

  <div class="am-card purple">
    <span class="am-icon">🎥</span>
    <h4>Webinar e presentazioni</h4>
    <p>
      Incontri online
      per approfondire
      la piattaforma,
      le membership
      e l'opportunità Ambassador.
    </p>
  </div>

  <div class="am-card blue">
    <span class="am-icon">📞</span>
    <h4>Chiamate a 3</h4>
    <p>
      Le 3-Way Call
      permettono di coinvolgere
      uno Sponsor
      o un membro esperto
      quando un contatto
      desidera approfondire.
    </p>
  </div>

  <div class="am-card green">
    <span class="am-icon">🤝</span>
    <h4>Affiancamento</h4>
    <p>
      Supporto per i primi passi:
      conoscere il prodotto,
      usare la piattaforma,
      parlare con i contatti
      e seguire la formazione.
    </p>
  </div>

</div>

<!-- PRIMI PASSI -->

<h3 class="am-title">
  🚀 13. Come iniziare in modo semplice
</h3>

<div class="am-card">

  <div class="am-step">
    <div class="am-step-num">1</div>
    <div class="am-step-body">
      <b>Conosci Travel Advantage</b>
      <p>
        Impara come funzionano
        membership, Guest Pass,
        Punti Fedeltà,
        Crediti Viaggio
        e prenotazioni.
      </p>
    </div>
  </div>

  <div class="am-step">
    <div class="am-step-num">2</div>
    <div class="am-step-body">
      <b>Comprendi il piano compensi</b>
      <p>
        Distingui i bonus diretti,
        quelli ricorrenti
        e i requisiti
        di qualificazione.
      </p>
    </div>
  </div>

  <div class="am-step">
    <div class="am-step-num">3</div>
    <div class="am-step-body">
      <b>Prepara la lista contatti</b>
      <p>
        Organizza persone
        che conosci,
        interessi di viaggio
        e conversazioni,
        rispettando la privacy.
      </p>
    </div>
  </div>

  <div class="am-step">
    <div class="am-step-num">4</div>
    <div class="am-step-body">
      <b>Inizia dalle conversazioni</b>
      <p>
        Chiedi alle persone
        se amano viaggiare,
        ascolta le loro esigenze
        e condividi informazioni
        solo quando sono interessate.
      </p>
    </div>
  </div>

  <div class="am-step">
    <div class="am-step-num">5</div>
    <div class="am-step-body">
      <b>Utilizza Guest Pass e presentazioni</b>
      <p>
        Fai conoscere
        la piattaforma gratuitamente
        oppure proponi
        una presentazione
        a chi desidera approfondire.
      </p>
    </div>
  </div>

  <div class="am-step">
    <div class="am-step-num">6</div>
    <div class="am-step-body">
      <b>Segui formazione e affiancamento</b>
      <p>
        Mantieni una routine
        sostenibile,
        confrontati con lo Sponsor
        e verifica i risultati
        senza creare pressioni.
      </p>
    </div>
  </div>

</div>

<!-- COSA NON PROMETTERE -->

<h3 class="am-title">
  🗣️ 14. Come presentare correttamente l'opportunità
</h3>

<div class="am-two">

  <div class="am-card green">
    <span class="am-icon">✅</span>
    <h4>Comunicazione corretta</h4>
    <p>
      ✅ Attività indipendente.
      <br>
      ✅ Flessibilità di organizzazione.
      <br>
      ✅ Possibilità di maturare commissioni.
      <br>
      ✅ Formazione disponibile.
      <br>
      ✅ Bonus soggetti a requisiti.
      <br>
      ✅ Costi di iscrizione dichiarati.
    </p>
  </div>

  <div class="am-card gold">
    <span class="am-icon">🚫</span>
    <h4>Promesse da evitare</h4>
    <p>
      ❌ Guadagni automatici o garantiti.
      <br>
      ❌ Rischio economico zero.
      <br>
      ❌ Abbonamento gratis dopo tre clienti.
      <br>
      ❌ Auto regalata dall'azienda.
      <br>
      ❌ Rendita passiva senza lavoro.
      <br>
      ❌ Guadagni senza condizioni.
    </p>
  </div>

</div>

<div class="am-note">
  <strong>💡 Come raccontarlo in modo naturale</strong>
  <br>
  "Sto sviluppando un'attività
  indipendente legata al mondo
  dei viaggi.
  <br><br>
  Faccio conoscere una piattaforma
  con tariffe riservate
  e, quando le persone scelgono
  di abbonarsi, posso maturare
  commissioni secondo il piano
  dell'azienda.
  <br><br>
  Se ti incuriosisce,
  posso spiegarti meglio
  come funziona."
</div>


<!-- PIANO OPERATIVO 30 GIORNI -->

<h3 class="am-title">
  🚀 Piano operativo: i primi 30 giorni
</h3>

<p class="am-intro">
  Il primo mese è dedicato a costruire
  le basi della tua attività:
  conoscere la piattaforma,
  organizzare i contatti,
  iniziare le conversazioni
  e accompagnare i primi clienti.
  <br><br>
  <strong>Obiettivo: lavorare verso
  la qualifica Silver</strong>,
  rispettando i requisiti
  di produzione e struttura
  del piano compensi.
</p>

<div class="am-card gold">
  <span class="am-pill">🎯 OBIETTIVO SILVER</span>

  <h4>Il primo traguardo</h4>

  <div class="am-grid">

    <div class="am-card blue" style="text-align:center">
      <span class="am-icon">👥</span>
      <span class="am-number">3</span>
      <p>Clienti Elite o Turbo come obiettivo iniziale</p>
    </div>

    <div class="am-card green" style="text-align:center">
      <span class="am-icon">🧮</span>
      <span class="am-number">18</span>
      <p>Punti Dual Team generati dalle 3 iscrizioni</p>
    </div>

    <div class="am-card gold" style="text-align:center">
      <span class="am-icon">💰</span>
      <span class="am-number">$120 <small>/mese</small></span>
      <p>Livello residual previsto per Silver, se maturato</p>
    </div>

  </div>

  <p>
    Il piano Silver prevede
    un livello di compenso residuale
    da 120 $ mensili.
    È un importo simile
    al canone Elite di 119,97 $.
    <br><br>
    Il bonus non è automatico:
    occorre rispettare
    tutti i requisiti
    e mantenerli nel tempo.
  </p>
</div>

<!-- SETTIMANA 1 -->

<h3 class="am-title">
  🗓️ Settimana 1 – Preparazione e formazione
</h3>

<div class="am-card blue">
  <span class="am-pill">GIORNI 1–7</span>
  <h4>Prepara le basi della tua attività</h4>

  <p>
    Prima di iniziare a invitare,
    organizza il tuo tempo,
    conosci il prodotto
    e prepara gli strumenti
    che utilizzerai ogni giorno.
  </p>

  <div class="am-two">

    <div class="am-card">
      <span class="am-icon">⏰</span>
      <h4>Scegli il tuo ritmo</h4>
      <p>
        <strong>Starter:</strong> 1 ora al giorno.
        <br>
        <strong>Pro:</strong> 3 ore al giorno.
        <br>
        <strong>Legend:</strong> 6 o più ore al giorno.
        <br><br>
        Scegli una disponibilità
        sostenibile e inserisci
        gli orari in agenda.
      </p>
    </div>

    <div class="am-card">
      <span class="am-icon">📱</span>
      <h4>Configura gli strumenti</h4>
      <p>
        Prepara WhatsApp Business,
        organizza i profili social
        e installa gli strumenti
        utilizzati dal team:
        Travel Advantage,
        Biz Center MWR Life
        e Telegram.
      </p>
    </div>

    <div class="am-card">
      <span class="am-icon">🤝</span>
      <h4>Allineati con lo Sponsor</h4>
      <p>
        Confrontati sugli obiettivi
        dei primi 30 e 90 giorni,
        sulle presentazioni disponibili
        e sul supporto
        per le prime conversazioni.
      </p>
    </div>

    <div class="am-card">
      <span class="am-icon">🗂️</span>
      <h4>Prepara la Lista Contatti</h4>
      <p>
        Scrivi le persone
        che conosci
        e organizza la lista
        in base al rapporto,
        agli interessi
        e alle eventuali
        conversazioni già avviate.
      </p>
    </div>

  </div>

  <details>
    <summary>✅ Checklist della settimana 1</summary>
    <div>
      <label><input type="checkbox"> Ho scelto il mio profilo orario</label>
      <br>
      <label><input type="checkbox"> Ho organizzato la mia agenda</label>
      <br>
      <label><input type="checkbox"> Ho configurato gli strumenti</label>
      <br>
      <label><input type="checkbox"> Ho parlato con il mio Sponsor</label>
      <br>
      <label><input type="checkbox"> Ho iniziato la Lista Contatti</label>
      <br>
      <label><input type="checkbox"> Ho studiato i servizi Travel Advantage</label>
    </div>
  </details>
</div>

<!-- SETTIMANA 2 -->

<h3 class="am-title">
  🚀 Settimana 2 – Inviti e presentazioni
</h3>

<div class="am-card green">
  <span class="am-pill">GIORNI 8–14</span>
  <h4>Inizia le prime conversazioni</h4>

  <p>
    Ora puoi iniziare a far conoscere
    Travel Advantage alle persone
    che potrebbero essere interessate
    ai viaggi o all'opportunità.
  </p>

  <div class="am-two">

    <div class="am-card">
      <span class="am-icon">💬</span>
      <h4>2–3 inviti al giorno</h4>
      <p>
        Come ritmo indicativo,
        puoi contattare
        2–3 persone al giorno.
        <br><br>
        L'obiettivo non è inviare
        messaggi in massa,
        ma aprire conversazioni
        personali e pertinenti.
      </p>
    </div>

    <div class="am-card">
      <span class="am-icon">📞</span>
      <h4>Organizza le chiamate a 3</h4>
      <p>
        Nei primi appuntamenti
        puoi coinvolgere
        il tuo Sponsor.
        <br><br>
        Tu presenti la persona
        e la sua esigenza,
        mentre lo Sponsor
        ti aiuta a spiegare
        la piattaforma e l'attività.
      </p>
    </div>

    <div class="am-card">
      <span class="am-icon">🎥</span>
      <h4>Utilizza i webinar</h4>
      <p>
        Invita le persone interessate
        alle presentazioni online
        e agli incontri
        organizzati dal team.
      </p>
    </div>

    <div class="am-card">
      <span class="am-icon">📅</span>
      <h4>Segna i prossimi passi</h4>
      <p>
        Aggiorna la Lista Contatti
        con gli inviti effettuati,
        le risposte ricevute
        e gli eventuali appuntamenti.
      </p>
    </div>

  </div>

  <div class="am-note">
    <strong>💡 Come iniziare una conversazione</strong>
    <br><br>
    "Ciao! 😊 Sto conoscendo
    una piattaforma legata
    al mondo dei viaggi
    e ho pensato a te.
    <br><br>
    Ti piace organizzare
    weekend e vacanze?
    Se ti incuriosisce,
    ti racconto meglio."
  </div>

  <details>
    <summary>✅ Checklist della settimana 2</summary>
    <div>
      <label><input type="checkbox"> Ho iniziato gli inviti personali</label>
      <br>
      <label><input type="checkbox"> Ho aggiornato la Lista Contatti</label>
      <br>
      <label><input type="checkbox"> Ho partecipato a una presentazione</label>
      <br>
      <label><input type="checkbox"> Ho organizzato una chiamata con lo Sponsor</label>
      <br>
      <label><input type="checkbox"> Ho registrato i contatti interessati</label>
    </div>
  </details>
</div>

<!-- SETTIMANA 3 -->

<h3 class="am-title">
  🔄 Settimana 3 – Follow-up e primi clienti
</h3>

<div class="am-card gold">
  <span class="am-pill">GIORNI 15–21</span>
  <h4>Trasforma l'interesse in una scelta consapevole</h4>

  <p>
    Questa settimana è dedicata
    ad approfondire le conversazioni
    già avviate, rispondere
    ai dubbi e aiutare le persone
    realmente interessate.
  </p>

  <div class="am-two">

    <div class="am-card">
      <span class="am-icon">📩</span>
      <h4>Follow-up entro 24–48 ore</h4>
      <p>
        Dopo una presentazione,
        puoi scrivere alla persona
        per conoscere
        le sue impressioni.
        <br><br>
        Un buon modo
        per iniziare è chiedere:
        <strong>"Cosa ti è piaciuto di più?"</strong>
      </p>
    </div>

    <div class="am-card">
      <span class="am-icon">🤝</span>
      <h4>Gestione dei dubbi</h4>
      <p>
        Ascolta le domande
        su prezzi, abbonamenti,
        utilizzo della piattaforma
        e opportunità di business.
        <br><br>
        Se non conosci una risposta,
        approfondiscila
        insieme allo Sponsor.
      </p>
    </div>

    <div class="am-card">
      <span class="am-icon">👥</span>
      <h4>Prime 1–2 iscrizioni</h4>
      <p>
        Come obiettivo operativo,
        puoi puntare
        ad accompagnare
        i primi 1–2 clienti
        interessati all'iscrizione.
        <br><br>
        La scelta della membership
        deve essere adatta
        alle loro esigenze.
      </p>
    </div>

    <div class="am-card">
      <span class="am-icon">⚡</span>
      <h4>Finestra Fast Start</h4>
      <p>
        Nei primi 21 giorni
        possono essere disponibili
        bonus acceleratori
        fino a 450 $.
        <br><br>
        Il riconoscimento
        dipende dalle combinazioni
        di iscrizioni e dai requisiti
        previsti dal piano.
      </p>
    </div>

  </div>

  <div class="am-note">
    <strong>💬 Esempio di follow-up</strong>
    <br><br>
    "Ciao! 😊 Hai avuto modo
    di ripensare alla presentazione?
    <br><br>
    Sono curiosa di sapere
    cosa ti ha colpito di più
    e se hai qualche domanda.
    Così possiamo approfondire
    soltanto quello
    che ti interessa."
  </div>

  <details>
    <summary>✅ Checklist della settimana 3</summary>
    <div>
      <label><input type="checkbox"> Ho ricontattato le persone interessate</label>
      <br>
      <label><input type="checkbox"> Ho risposto ai dubbi principali</label>
      <br>
      <label><input type="checkbox"> Ho coinvolto lo Sponsor quando necessario</label>
      <br>
      <label><input type="checkbox"> Ho verificato le condizioni Fast Start</label>
      <br>
      <label><input type="checkbox"> Ho accompagnato le eventuali prime iscrizioni</label>
    </div>
  </details>
</div>

<!-- SETTIMANA 4 -->

<h3 class="am-title">
  🏆 Settimana 4 – Obiettivo Silver e duplicazione
</h3>

<div class="am-card purple">
  <span class="am-pill">GIORNI 22–30</span>
  <h4>Consolida i risultati e aiuta i nuovi membri</h4>

  <p>
    Nell'ultima settimana
    si verifica il lavoro svolto,
    si continua a seguire
    i contatti interessati
    e si iniziano ad affiancare
    le persone entrate nel team.
  </p>

  <div class="am-two">

    <div class="am-card">
      <span class="am-icon">🥈</span>
      <h4>Lavora verso Silver</h4>
      <p>
        L'obiettivo iniziale
        è raggiungere
        tre iscrizioni idonee
        Elite o Turbo,
        pari a 18 punti Dual Team.
        <br><br>
        Verifica con lo Sponsor
        il posizionamento nella rete
        e gli altri requisiti
        necessari per la qualifica.
      </p>
    </div>

    <div class="am-card">
      <span class="am-icon">🎓</span>
      <h4>Avvia la duplicazione</h4>
      <p>
        Se sono entrati
        nuovi Ambassador,
        aiutali a seguire
        questo stesso percorso.
        <br><br>
        Parti dalla formazione,
        dagli strumenti
        e dalla Lista Contatti.
      </p>
    </div>

    <div class="am-card">
      <span class="am-icon">📊</span>
      <h4>Analizza i risultati</h4>
      <p>
        Controlla quanti inviti
        hai effettuato,
        quante persone
        hanno partecipato
        alle presentazioni
        e quali domande
        ricorrono più spesso.
      </p>
    </div>

    <div class="am-card">
      <span class="am-icon">📅</span>
      <h4>Pianifica i prossimi 30 giorni</h4>
      <p>
        Confrontati con lo Sponsor,
        definisci il nuovo obiettivo
        e mantieni un ritmo
        che puoi sostenere
        anche nel lungo periodo.
      </p>
    </div>

  </div>

  <details>
    <summary>✅ Checklist della settimana 4</summary>
    <div>
      <label><input type="checkbox"> Ho verificato il punteggio raggiunto</label>
      <br>
      <label><input type="checkbox"> Ho controllato i requisiti Silver</label>
      <br>
      <label><input type="checkbox"> Ho aggiornato tutti i contatti</label>
      <br>
      <label><input type="checkbox"> Ho aiutato i nuovi membri del team</label>
      <br>
      <label><input type="checkbox"> Ho definito il piano del mese successivo</label>
    </div>
  </details>
</div>

<!-- DUPLICAZIONE -->

<h3 class="am-title">
  🌱 Il passo successivo: duplicazione e Gold
</h3>

<div class="am-flow">

  <div class="am-flow-item">
    <b>👤 Tu inizi</b>
    <span>
      Impari il sistema
      e lavori verso Silver.
    </span>
  </div>

  <div class="am-arrow">→</div>

  <div class="am-flow-item">
    <b>🤝 Aiuti il team</b>
    <span>
      Affianchi i nuovi
      Ambassador nel loro
      percorso iniziale.
    </span>
  </div>

  <div class="am-arrow">→</div>

  <div class="am-flow-item">
    <b>🥈 Nuovi Silver</b>
    <span>
      I membri del team
      sviluppano i propri
      clienti e qualifiche.
    </span>
  </div>

  <div class="am-arrow">→</div>

  <div class="am-flow-item">
    <b>🥇 Obiettivo Gold</b>
    <span>
      Verifichi i requisiti
      necessari per passare
      alla qualifica successiva.
    </span>
  </div>

</div>

<div class="am-card gold">
  <span class="am-icon">🥇</span>
  <h4>Il traguardo Gold</h4>

  <p>
    Dopo Silver,
    il passo successivo
    è sviluppare
    un'organizzazione
    in cui anche altri membri
    raggiungano le proprie qualifiche.
    <br><br>
    Il piano associa a Gold
    un livello residuale
    da <strong>300 $ mensili</strong>,
    al verificarsi
    delle condizioni richieste.
    <br><br>
    Avere tre diretti
    che diventano Silver
    può rappresentare
    un obiettivo di sviluppo
    della struttura,
    ma il passaggio a Gold
    non va considerato automatico
    senza verificare
    i requisiti ufficiali.
  </p>
</div>

<!-- RIEPILOGO 30 GIORNI -->

<h3 class="am-title">
  📋 Il piano dei 30 giorni in sintesi
</h3>

<div class="am-table-wrap">
  <table class="am-table">
    <thead>
      <tr>
        <th>Periodo</th>
        <th>Obiettivo</th>
        <th>Attività principali</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Settimana 1</td>
        <td>Preparazione</td>
        <td>
          Formazione, strumenti,
          agenda e Lista Contatti
        </td>
      </tr>

      <tr>
        <td>Settimana 2</td>
        <td>Prime conversazioni</td>
        <td>
          2–3 inviti al giorno,
          webinar e chiamate a 3
        </td>
      </tr>

      <tr>
        <td>Settimana 3</td>
        <td>Primi clienti</td>
        <td>
          Follow-up, gestione dubbi,
          eventuali iscrizioni
          e verifica Fast Start
        </td>
      </tr>

      <tr>
        <td>Settimana 4</td>
        <td>Silver e duplicazione</td>
        <td>
          Verifica qualifiche,
          affiancamento del team
          e pianificazione
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div class="am-note">
  <strong>🎯 Il principio da ricordare</strong>
  <br>
  Il piano dei 30 giorni
  è una guida operativa,
  non una promessa
  di raggiungere Silver
  entro il primo mese.
  <br><br>
  L'obiettivo è imparare
  un metodo semplice,
  ripetibile e sostenibile,
  che ogni nuovo Ambassador
  possa adattare
  al proprio tempo
  e alla propria esperienza.
</div>


<!-- FAQ -->

<h3 class="am-title">
  ❓ 15. Domande frequenti
</h3>

<details>
  <summary>
    ✈️ Devo vendere direttamente i viaggi?
  </summary>
  <div>
    No.
    L'Ambassador promuove
    la piattaforma e le membership.
    <br><br>
    I clienti cercano
    e prenotano autonomamente
    i servizi di viaggio.
  </div>
</details>

<details>
  <summary>
    💳 La licenza Ambassador
    è inclusa nell'abbonamento Elite?
  </summary>
  <div>
    No.
    <br><br>
    La licenza Ambassador
    da $99 all'anno
    è separata dalla membership
    Travel Advantage.
  </div>
</details>

<details>
  <summary>
    💵 Ricevo una commissione
    semplicemente invitando una persona?
  </summary>
  <div>
    No.
    <br><br>
    Le commissioni
    sono collegate
    a operazioni idonee,
    come l'attivazione
    di membership
    secondo il piano compensi.
  </div>
</details>

<details>
  <summary>
    🥈 Basta iscrivere tre clienti Elite
    per ricevere $120 ogni mese?
  </summary>
  <div>
    Non automaticamente.
    <br><br>
    Tre iscrizioni Elite o Turbo
    corrispondono a 18 punti
    di produzione.
    <br><br>
    Per maturare
    il bonus previsto
    per Silver,
    bisogna anche rispettare
    i requisiti di qualifica,
    di struttura
    e di produzione richiesti.
  </div>
</details>

<details>
  <summary>
    📅 Le commissioni vengono
    pagate tutti i venerdì?
  </summary>
  <div>
    È previsto
    un calendario settimanale
    di liquidazione.
    <br><br>
    I pagamenti riguardano
    commissioni effettivamente
    maturate, approvate
    e liquidabili.
  </div>
</details>

<details>
  <summary>
    🤝 Posso svolgere l'attività
    senza esperienza nel marketing?
  </summary>
  <div>
    Sì, l'esperienza precedente
    non è necessariamente
    un requisito.
    <br><br>
    È comunque importante
    seguire la formazione,
    conoscere il prodotto
    e imparare a comunicare
    correttamente.
  </div>
</details>

<!-- QUIZ -->

<h3 class="am-title">
  🧠 16. Mettiti alla prova
</h3>

<div class="am-quiz">
  <span class="am-kicker">DOMANDA 01</span>
  <h4>
    L'Ambassador vende direttamente
    pacchetti vacanza?
  </h4>
  <p>A. Sì</p>
  <p>B. No, promuove la piattaforma</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      I clienti prenotano
      autonomamente
      su Travel Advantage.
    </div>
  </details>
</div>

<div class="am-quiz">
  <span class="am-kicker">DOMANDA 02</span>
  <h4>
    Quanto costa
    la licenza annuale
    Ambassador?
  </h4>
  <p>A. $19.97</p>
  <p>B. $99</p>
  <p>C. $250</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. $99 all'anno.</strong>
      La licenza è separata
      dalla membership viaggio.
    </div>
  </details>
</div>

<div class="am-quiz">
  <span class="am-kicker">DOMANDA 03</span>
  <h4>
    Quale bonus riguarda
    i rinnovi delle membership
    dei clienti personali?
  </h4>
  <p>A. Membership Residual</p>
  <p>B. Car Bonus</p>
  <p>C. Fast Start Bonus</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A.</strong>
      Membership Residual.
    </div>
  </details>
</div>

<div class="am-quiz">
  <span class="am-kicker">DOMANDA 04</span>
  <h4>
    Quanti punti Dual Team
    attribuisce una membership Elite?
  </h4>
  <p>A. 1 punto</p>
  <p>B. 3 punti</p>
  <p>C. 6 punti</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>C. 6 punti.</strong>
    </div>
  </details>
</div>

<div class="am-quiz">
  <span class="am-kicker">DOMANDA 05</span>
  <h4>
    Silver garantisce
    automaticamente $120
    ogni mese per sempre?
  </h4>
  <p>A. Sì</p>
  <p>B. No, il bonus dipende dai requisiti</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Bisogna mantenere
      le condizioni previste
      dal piano compensi.
    </div>
  </details>
</div>

<div class="am-quiz">
  <span class="am-kicker">DOMANDA 06</span>
  <h4>
    Qual è la funzione
    delle chiamate a 3?
  </h4>
  <p>A. Prenotare i viaggi per i clienti</p>
  <p>B. Coinvolgere lo Sponsor in una presentazione</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Le 3-Way Call
      permettono di ricevere
      supporto e affiancamento
      durante un approfondimento.
    </div>
  </details>
</div>

<div class="am-quiz">
  <span class="am-kicker">DOMANDA 07</span>
  <h4>
    Le commissioni del piano compensi
    sono un reddito garantito?
  </h4>
  <p>A. Sì</p>
  <p>B. No, dipendono dai risultati e dalle condizioni</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Sono compensi potenziali
      soggetti a specifici requisiti.
    </div>
  </details>
</div>

<!-- CONCLUSIONE -->

<h3 class="am-title">
  🎯 Il concetto da ricordare
</h3>

<div class="am-summary">

  <h4>
    💼 L'Ambassador fa conoscere
    Travel Advantage
  </h4>

  <p>
    È un'attività indipendente
    legata alla promozione
    delle membership
    e allo sviluppo
    di una rete di clienti.
    <br><br>
    Il piano compensi
    comprende 9 tipologie
    di bonus,
    tra compensi diretti,
    ricorrenti e premi
    di qualifica.
    <br><br>
    Le commissioni
    devono essere realmente maturate
    e i risultati
    non sono garantiti.
    <br><br>
    <strong>
      Il primo obiettivo
      è conoscere bene
      la piattaforma,
      imparare a presentarla
      correttamente
      e costruire relazioni
      basate sulla fiducia.
    </strong>
  </p>

</div>

</div>
</section>
`);
