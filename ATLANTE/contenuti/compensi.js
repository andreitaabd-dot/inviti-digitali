
window.registraSezione("compensi", `
<section class="section" id="compensi" data-group="business">

<style>
#compensi {
  --pc-ink:#123650;
  --pc-teal:#0d8393;
  --pc-muted:#536d7d;
  --pc-line:#deebf0;
}
#compensi .pc-title {
  font-size:24px;
  color:var(--pc-ink);
  margin:36px 0 16px;
}
#compensi .pc-intro {
  font-size:15px;
  color:var(--pc-muted);
  line-height:1.85;
  margin:12px 0 22px;
}
#compensi .pc-label {
  display:inline-block;
  border-radius:30px;
  padding:7px 13px;
  color:#087f8b;
  background:#e8f8f6;
  font-size:11px;
  font-weight:800;
  letter-spacing:.05em;
}
#compensi .pc-hero {
  display:grid;
  grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);
  align-items:center;
  gap:25px;
  margin:0 0 32px;
}
#compensi .pc-hero .pc-title {
  margin:15px 0;
}
#compensi .pc-art {
  background:linear-gradient(140deg,#092c4e,#148fa0);
  color:white;
  border-radius:22px;
  padding:27px 20px;
  text-align:center;
}
#compensi .pc-art-icon {
  font-size:64px;
  margin:5px auto 15px;
}
#compensi .pc-art h4 {
  color:white;
  font-size:21px;
  margin:8px 0;
}
#compensi .pc-art p {
  color:#ddf5fa;
  font-size:13px;
  line-height:1.7;
}
#compensi .pc-art-grid {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:8px;
  margin-top:19px;
}
#compensi .pc-art-grid div {
  padding:14px 6px;
  border:1px solid #ffffff40;
  border-radius:13px;
  background:#ffffff1b;
}
#compensi .pc-art-grid strong {
  display:block;
  color:#fff0aa;
  font-size:23px;
}
#compensi .pc-art-grid span {
  color:#e0f2fa;
  font-size:11px;
}
#compensi .pc-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#compensi .pc-two {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#compensi .pc-card {
  background:#f4f9fc;
  border:1px solid var(--pc-line);
  border-radius:18px;
  padding:21px;
  min-width:0;
}
#compensi .pc-card.green {
  background:#effaf5;
  border-color:#d3ede0;
}
#compensi .pc-card.gold {
  background:#fff8e9;
  border-color:#f2e3bd;
}
#compensi .pc-card.blue {
  background:#eef7ff;
  border-color:#d0e5f9;
}
#compensi .pc-card.purple {
  background:#f6f0ff;
  border-color:#e5d8fa;
}
#compensi .pc-card h4 {
  font-size:18px;
  color:#153953;
  margin:9px 0 12px;
}
#compensi .pc-card p {
  font-size:13px;
  color:var(--pc-muted);
  line-height:1.8;
  margin:8px 0;
}
#compensi .pc-icon {
  display:block;
  font-size:31px;
  margin-bottom:10px;
}
#compensi .pc-value {
  display:block;
  color:#0b8196;
  font-size:30px;
  font-weight:850;
  line-height:1.25;
  margin:12px 0;
}
#compensi .pc-value small {
  color:#6d8594;
  font-size:12px;
  font-weight:600;
}
#compensi .pc-chip {
  display:inline-block;
  border-radius:25px;
  padding:6px 11px;
  background:#ffffffc9;
  color:#34566b;
  font-size:11px;
  font-weight:800;
}
#compensi .pc-note {
  padding:17px;
  border-left:4px solid #19a998;
  background:#eaf8f5;
  color:#315b57;
  border-radius:11px;
  font-size:13px;
  line-height:1.85;
  margin:20px 0;
}
#compensi .pc-warning {
  padding:17px;
  border-left:4px solid #d6a54b;
  background:#fff8e9;
  color:#735c32;
  border-radius:11px;
  font-size:13px;
  line-height:1.85;
  margin:20px 0;
}
#compensi .pc-flow {
  display:flex;
  align-items:stretch;
  gap:10px;
  margin:23px 0;
}
#compensi .pc-flow-box {
  flex:1;
  min-width:0;
  background:#eff8fa;
  border:1px solid #d7eaf0;
  border-radius:14px;
  padding:17px 12px;
  text-align:center;
}
#compensi .pc-flow-box b {
  display:block;
  color:#164b67;
  font-size:14px;
  margin-bottom:8px;
}
#compensi .pc-flow-box span {
  font-size:12px;
  color:#536d7d;
  line-height:1.7;
}
#compensi .pc-arrow {
  align-self:center;
  color:#139ba7;
  font-size:23px;
  font-weight:800;
}
#compensi .pc-bonus {
  background:#f8fbfd;
  border:1px solid var(--pc-line);
  border-radius:18px;
  padding:22px;
  margin:17px 0;
}
#compensi .pc-bonus-head {
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-between;
  gap:9px;
}
#compensi .pc-bonus h4 {
  color:#153953;
  font-size:19px;
  margin:12px 0;
}
#compensi .pc-bonus p {
  color:var(--pc-muted);
  font-size:13px;
  line-height:1.85;
}
#compensi .pc-tag {
  display:inline-block;
  background:#e0f5e9;
  color:#226e4b;
  border-radius:25px;
  padding:6px 11px;
  font-size:11px;
  font-weight:800;
}
#compensi .pc-tag.residual {
  background:#eee5fc;
  color:#724fa2;
}
#compensi .pc-table-wrap {
  overflow-x:auto;
  border:1px solid #dce8ef;
  border-radius:15px;
  margin:22px 0;
}
#compensi .pc-table {
  width:100%;
  min-width:520px;
  border-collapse:collapse;
}
#compensi .pc-table th {
  background:#123650;
  color:white;
  padding:15px 12px;
  text-align:left;
  font-size:13px;
}
#compensi .pc-table td {
  padding:14px 12px;
  color:#36586e;
  border-bottom:1px solid #e2eaf0;
  font-size:13px;
  line-height:1.7;
}
#compensi .pc-table td:first-child {
  font-weight:750;
  color:#153a54;
}
#compensi .pc-table tr:nth-child(even) td {
  background:#f4f8fb;
}
#compensi .pc-table tr:last-child td {
  border-bottom:0;
}
#compensi .pc-calc {
  border:1px solid var(--pc-line);
  background:#f6f9fc;
  border-radius:18px;
  padding:23px;
  margin:20px 0;
}
#compensi .pc-calc h4 {
  color:#153953;
  font-size:19px;
  margin:8px 0 18px;
}
#compensi .pc-calc-row {
  display:flex;
  justify-content:space-between;
  gap:15px;
  align-items:flex-start;
  padding:14px 0;
  font-size:13px;
  color:#466579;
  border-bottom:1px dashed #d5e5ed;
}
#compensi .pc-calc-row strong {
  color:#153a54;
  text-align:right;
  white-space:nowrap;
}
#compensi .pc-total {
  background:linear-gradient(135deg,#0b7e88,#20a18e);
  border-radius:14px;
  padding:20px;
  margin-top:15px;
  color:white;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
}
#compensi .pc-total b {
  color:white;
  font-size:26px;
}
#compensi .pc-rank {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px;
  border:1px solid #dfeaf0;
  border-radius:15px;
  padding:16px;
  margin:11px 0;
  background:#f8fbfd;
}
#compensi .pc-rank-name {
  flex:1;
  min-width:0;
}
#compensi .pc-rank-name strong {
  display:block;
  font-size:16px;
  color:#153953;
}
#compensi .pc-rank-name span {
  font-size:12px;
  color:#657e8d;
}
#compensi .pc-rank-amount {
  font-size:20px;
  font-weight:850;
  color:#0d8193;
  text-align:right;
  white-space:nowrap;
}
#compensi .pc-rank-amount small {
  display:block;
  font-size:10px;
  color:#718795;
  font-weight:600;
}
#compensi .pc-quiz {
  padding:21px;
  border:1px solid #e7dafb;
  background:#f6f0ff;
  border-radius:17px;
  margin:17px 0;
}
#compensi .pc-quiz h4 {
  color:#253453;
  font-size:17px;
  margin:10px 0;
}
#compensi .pc-quiz p {
  color:#5c637e;
  font-size:13px;
  line-height:1.8;
}
#compensi .pc-quiz details {
  padding:12px;
  background:white;
  border-radius:12px;
  margin-top:12px;
}
#compensi .pc-summary {
  background:linear-gradient(135deg,#0c3557,#117d91);
  border-radius:18px;
  padding:26px;
  margin:25px 0;
}
#compensi .pc-summary h4 {
  color:white;
  font-size:21px;
  margin:0 0 13px;
}
#compensi .pc-summary p {
  color:#e0f5f6;
  font-size:14px;
  line-height:1.85;
}
#compensi details {
  margin:12px 0;
}
#compensi details summary {
  cursor:pointer;
  font-weight:700;
}
#compensi details > div {
  font-size:13px;
  line-height:1.8;
  margin-top:12px;
  color:#536d7d;
}
@media(max-width:850px) {
  #compensi .pc-grid {
    grid-template-columns:1fr;
  }
}
@media(max-width:700px) {
  #compensi .pc-hero,
  #compensi .pc-two {
    grid-template-columns:1fr;
  }
  #compensi .pc-flow {
    flex-direction:column;
  }
  #compensi .pc-arrow {
    transform:rotate(90deg);
  }
}
@media(max-width:600px) {
  #compensi .pc-title {
    font-size:21px;
  }
  #compensi .pc-total b {
    font-size:22px;
  }
  #compensi .pc-rank-amount {
    font-size:17px;
  }
}
</style>

<!-- INTESTAZIONE -->

<div class="section-head">
  <span class="kicker">
    Capitolo 09 · Opportunità di business
  </span>

  <h2>Piano Compensi MWR Life</h2>

  <p>
    Le 9 aree di guadagno,
    le qualifiche di carriera,
    le commissioni e gli esempi
    pratici per comprendere
    il funzionamento
    del piano compensi.
  </p>
</div>

<div class="section-body">

<!-- INTRODUZIONE -->

<div class="pc-hero">

  <div>
    <span class="pc-label">Partiamo dalle basi</span>

    <h3 class="pc-title">
      💰 Come guadagna un Lifestyle Ambassador?
    </h3>

    <p class="pc-intro">
      Il piano compensi MWR Life
      prevede <strong>9 aree
      di remunerazione</strong>.
      <br><br>
      Alcune commissioni
      vengono riconosciute
      per le nuove iscrizioni
      e il raggiungimento
      di obiettivi di produzione.
      <br><br>
      Altre derivano
      dai rinnovi dei clienti
      e dalla produzione
      della propria organizzazione.
    </p>

    <div class="pc-note">
      <strong>💡 Concetto fondamentale</strong>
      <br>
      I bonus dipendono
      dalle membership idonee,
      dai rinnovi,
      dai requisiti di qualifica
      e dall'attività della rete.
      Non sono uno stipendio
      né un reddito garantito.
    </div>

  </div>

  <div class="pc-art">

    <div class="pc-art-icon">💼</div>

    <h4>9 aree di guadagno</h4>

    <p>
      Un piano che combina
      bonus sulle nuove iscrizioni
      e compensi ricorrenti.
    </p>

    <div class="pc-art-grid">
      <div>
        <strong>5</strong>
        <span>Bonus produzione</span>
      </div>
      <div>
        <strong>4</strong>
        <span>Bonus ricorrenti</span>
      </div>
      <div>
        <strong>9</strong>
        <span>Totale bonus</span>
      </div>
    </div>

  </div>

</div>

<!-- REQUISITI -->

<h3 class="pc-title">
  🔐 1. I due requisiti fondamentali
</h3>

<p class="pc-intro">
  Prima di comprendere i bonus
  bisogna conoscere
  la differenza tra
  Ambassador <strong>Attivo</strong>
  e <strong>Qualificato</strong>.
</p>

<div class="pc-two">

  <div class="pc-card blue">
    <span class="pc-icon">✅</span>
    <span class="pc-label">REQUISITO 1</span>
    <h4>Ambassador Attivo</h4>

    <span class="pc-value">
      $99 <small>/anno</small>
    </span>

    <p>
      Mantiene regolare
      il pagamento
      della licenza aziendale
      Lifestyle Ambassador.
    </p>
  </div>

  <div class="pc-card green">
    <span class="pc-icon">🎯</span>
    <span class="pc-label">REQUISITO 2</span>
    <h4>Ambassador Qualificato</h4>

    <span class="pc-value">
      3 <small>punti personali</small>
    </span>

    <p>
      Soddisfa il requisito
      di almeno 3 punti cliente
      personali, oppure
      le condizioni alternative
      previste dal piano.
      <br><br>
      Secondo le regole indicate,
      la membership personale
      Elite o Turbo attiva,
      con valore di 6 punti,
      può soddisfare
      questo requisito.
    </p>
  </div>

</div>

<div class="pc-warning">
  <strong>⚠️ Attivo e Qualificato non sono sinonimi</strong>
  <br>
  Pagare la licenza
  non significa automaticamente
  avere diritto a tutti i bonus.
  <br><br>
  Ogni remunerazione
  può richiedere requisiti
  aggiuntivi di produzione,
  qualifica e mantenimento.
</div>

<!-- PANORAMICA -->

<h3 class="pc-title">
  🧩 2. Le 9 aree del piano compensi
</h3>

<div class="pc-two">

  <div class="pc-card green">
    <span class="pc-icon">🚀</span>
    <h4>5 Bonus di produzione</h4>
    <p>
      1. Member Bonus
      <br>
      2. Fast Start Bonus
      <br>
      3. Builder Bonus
      <br>
      4. Boost Bonus
      <br>
      5. One Time Rank Bonus
    </p>
  </div>

  <div class="pc-card purple">
    <span class="pc-icon">🔄</span>
    <h4>4 Bonus ricorrenti</h4>
    <p>
      6. Dual Team Residual
      <br>
      7. Membership Residual
      <br>
      8. Car Bonus
      <br>
      9. Presidential Bonus
    </p>
  </div>

</div>

<!-- MEMBER BONUS -->

<h3 class="pc-title">
  🚀 3. I bonus di produzione
</h3>

<div class="pc-bonus">

  <div class="pc-bonus-head">
    <span class="pc-chip">01 · MEMBER BONUS</span>
    <span class="pc-tag">PRODUZIONE</span>
  </div>

  <h4>💵 Member Bonus – Commissione diretta</h4>

  <p>
    Commissione una tantum
    prevista per ogni nuova
    membership cliente idonea
    iscritta personalmente.
  </p>

  <div class="pc-grid">

    <div class="pc-card blue">
      <span class="pc-icon">🌊</span>
      <h4>VIP</h4>
      <span class="pc-value">$20</span>
      <p>Per iscrizione idonea</p>
    </div>

    <div class="pc-card green">
      <span class="pc-icon">⭐</span>
      <h4>Elite</h4>
      <span class="pc-value">$40</span>
      <p>Per iscrizione idonea</p>
    </div>

    <div class="pc-card gold">
      <span class="pc-icon">🚀</span>
      <h4>Turbo</h4>
      <span class="pc-value">$80</span>
      <p>Per iscrizione idonea</p>
    </div>

  </div>

  <div class="pc-note">
    <strong>💡 Esempio</strong>
    <br>
    Tre nuove iscrizioni
    Elite idonee genererebbero
    un Member Bonus lordo
    di <strong>3 × $40 = $120</strong>.
  </div>

</div>

<!-- FAST START -->

<div class="pc-bonus">

  <div class="pc-bonus-head">
    <span class="pc-chip">02 · FAST START BONUS</span>
    <span class="pc-tag">PRODUZIONE</span>
  </div>

  <h4>⚡ Fast Start Bonus – Acceleratore iniziale</h4>

  <span class="pc-value">
    Fino a $450
  </span>

  <p>
    Bonus previsto
    nella fase iniziale
    dell'attività.
    <br><br>
    Il primo obiettivo indicato
    consiste nell'iscrivere
    <strong>2 membri Elite o Turbo
    idonei nei primi 14 giorni</strong>,
    con un bonus aggiuntivo
    di $150.
    <br><br>
    Il piano prevede
    possibilità di proroga
    per periodi successivi
    di 7 giorni,
    secondo condizioni specifiche,
    fino a un massimo
    complessivo di $450.
  </p>

  <div class="pc-flow">

    <div class="pc-flow-box">
      <b>📅 Primi 14 giorni</b>
      <span>
        2 iscrizioni idonee
        Elite o Turbo
      </span>
    </div>

    <div class="pc-arrow">→</div>

    <div class="pc-flow-box">
      <b>💰 Primo bonus</b>
      <span>
        $150
        se tutti i requisiti
        sono soddisfatti
      </span>
    </div>

    <div class="pc-arrow">→</div>

    <div class="pc-flow-box">
      <b>⚡ Proroghe</b>
      <span>
        Ulteriori bonus
        secondo le condizioni
        di estensione
      </span>
    </div>

  </div>

  <div class="pc-warning">
    Il Fast Start non viene
    riconosciuto automaticamente
    per qualsiasi coppia
    di iscrizioni.
    Verifica nel piano ufficiale
    le condizioni di idoneità,
    abbinamento e proroga.
  </div>

</div>

<!-- BUILDER -->

<div class="pc-bonus">

  <div class="pc-bonus-head">
    <span class="pc-chip">03 · BUILDER BONUS</span>
    <span class="pc-tag">PRODUZIONE</span>
  </div>

  <h4>🧱 Builder Bonus – Differenza imprenditoriale</h4>

  <span class="pc-value">
    Da $10 a $250
  </span>

  <p>
    Bonus collegato
    alle nuove iscrizioni
    Elite o Turbo idonee
    effettuate nella rete.
    <br><br>
    Può essere calcolato
    per differenza
    tra il livello Builder
    dell'Ambassador
    e quello dell'incaricato
    nella sua organizzazione.
  </p>

  <div class="pc-note">
    <strong>📌 Da ricordare</strong>
    <br>
    Secondo le regole indicate,
    le nuove iscrizioni VIP
    non generano Builder Bonus.
  </div>

</div>

<!-- BOOST -->

<div class="pc-bonus">

  <div class="pc-bonus-head">
    <span class="pc-chip">04 · BOOST BONUS</span>
    <span class="pc-tag">PRODUZIONE</span>
  </div>

  <h4>🚀 Boost Bonus – Premio settimanale</h4>

  <p>
    Bonus aggiuntivo
    legato a specifici volumi
    di produzione settimanali
    distribuiti su almeno
    due linee dell'organizzazione.
  </p>

  <div class="pc-two">

    <div class="pc-card gold">
      <span class="pc-icon">🥇</span>
      <h4>Gold</h4>
      <span class="pc-value">
        $600 <small>/settimana</small>
      </span>
      <p>
        Soglia di riferimento
        indicata:
        <strong>36 punti</strong>
        settimanali,
        con i requisiti
        di distribuzione previsti.
      </p>
    </div>

    <div class="pc-card purple">
      <span class="pc-icon">🏆</span>
      <h4>Platinum</h4>
      <span class="pc-value">
        $1.200 <small>/settimana</small>
      </span>
      <p>
        Soglia di riferimento
        indicata:
        <strong>72 punti</strong>
        settimanali,
        con i requisiti
        di distribuzione previsti.
      </p>
    </div>

  </div>

  <div class="pc-warning">
    Raggiungere Gold
    o Platinum non basta
    per ricevere automaticamente
    questi importi.
    Occorre soddisfare
    tutti i requisiti
    del Boost Bonus
    per la settimana considerata.
  </div>

</div>

<!-- ONE TIME -->

<div class="pc-bonus">

  <div class="pc-bonus-head">
    <span class="pc-chip">05 · ONE TIME RANK BONUS</span>
    <span class="pc-tag">PRODUZIONE</span>
  </div>

  <h4>🏆 One Time Rank Bonus – Premi di carriera</h4>

  <p>
    Premi una tantum
    collegati al raggiungimento
    di determinate qualifiche.
  </p>

  <div class="pc-table-wrap">
    <table class="pc-table">
      <thead>
        <tr>
          <th>Qualifica</th>
          <th>Premio indicato</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>🏆 Platinum</td>
          <td>
            $300 di bonus Life Experience
          </td>
        </tr>
        <tr>
          <td>❤️ Ruby</td>
          <td>
            $5.000 di premio
          </td>
        </tr>
        <tr>
          <td>💎 Diamond</td>
          <td>
            CEO Experience a Miami
          </td>
        </tr>
        <tr>
          <td>👑 Black Royal</td>
          <td>
            Fino a $1.000.000
            per l'acquisto
            di una villa,
            secondo le condizioni
            del piano
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    Questi premi richiedono
    il raggiungimento
    di qualifiche
    e condizioni specifiche.
    Non sono guadagni ordinari
    né automaticamente attribuiti.
  </p>

</div>

<!-- BONUS RICORRENTI -->

<h3 class="pc-title">
  🔄 4. I quattro bonus ricorrenti
</h3>

<!-- DUAL TEAM -->

<div class="pc-bonus">

  <div class="pc-bonus-head">
    <span class="pc-chip">06 · DUAL TEAM RESIDUAL</span>
    <span class="pc-tag residual">RICORRENTE</span>
  </div>

  <h4>⚖️ Dual Team Residual – Il binario</h4>

  <p>
    Il Dual Team è il sistema
    che considera
    la produzione
    delle due strutture
    dell'organizzazione:
    <strong>gamba sinistra
    e gamba destra</strong>.
    <br><br>
    Ogni membership
    idonea genera
    un punteggio di rete.
  </p>

  <div class="pc-two">

    <div class="pc-card blue">
      <span class="pc-icon">🌊</span>
      <h4>Cliente VIP</h4>
      <span class="pc-value">1 punto</span>
      <p>
        Punteggio Dual Team
        attribuito alla membership VIP.
      </p>
    </div>

    <div class="pc-card gold">
      <span class="pc-icon">⭐</span>
      <h4>Cliente Elite / Turbo</h4>
      <span class="pc-value">6 punti</span>
      <p>
        Punteggio Dual Team
        attribuito alle membership
        Elite e Turbo.
      </p>
    </div>

  </div>

  <div class="pc-card" style="text-align:center">

    <div style="
      display:inline-block;
      background:#123650;
      padding:15px 26px;
      color:white;
      border-radius:13px;
      font-weight:800;
    ">
      👤 TU — AMBASSADOR
    </div>

    <div style="
      color:#0b91a1;
      font-size:28px;
      margin:14px 0;
    ">
      ↙ &nbsp;&nbsp;&nbsp;&nbsp; ↘
    </div>

    <div class="pc-two">

      <div class="pc-card blue">
        <span class="pc-icon">👥</span>
        <h4>Gamba sinistra</h4>
        <p>
          Produzione sviluppata
          nella linea sinistra.
        </p>
      </div>

      <div class="pc-card green">
        <span class="pc-icon">👥</span>
        <h4>Gamba destra</h4>
        <p>
          Produzione sviluppata
          nella linea destra.
        </p>
      </div>

    </div>

  </div>

  <div class="pc-note">
    <strong>💡 Gamba forte e gamba debole</strong>
    <br>
    La gamba forte è quella
    con il volume maggiore.
    <br>
    La gamba debole è quella
    con il volume minore.
    <br><br>
    La distribuzione
    della produzione
    nelle due gambe
    è importante
    per le qualifiche
    e i bonus previsti.
  </div>

</div>

<!-- QUALIFICHE -->

<h3 class="pc-title">
  🏅 5. Le qualifiche e i livelli Dual Team
</h3>

<p class="pc-intro">
  Questi sono alcuni
  dei livelli di remunerazione
  indicati nel piano compensi.
  <br><br>
  I punti sono soglie
  di riferimento:
  il loro totale, da solo,
  non dimostra il raggiungimento
  della qualifica.
</p>

<div class="pc-rank">
  <div class="pc-rank-name">
    <strong>🥈 Silver</strong>
    <span>18 punti di riferimento</span>
  </div>
  <div class="pc-rank-amount">
    $120
    <small>livello mensile</small>
  </div>
</div>

<div class="pc-rank">
  <div class="pc-rank-name">
    <strong>🥇 Gold</strong>
    <span>72 punti di riferimento</span>
  </div>
  <div class="pc-rank-amount">
    $300
    <small>livello mensile</small>
  </div>
</div>

<div class="pc-rank">
  <div class="pc-rank-name">
    <strong>🏆 Platinum</strong>
    <span>175 punti di riferimento</span>
  </div>
  <div class="pc-rank-amount">
    $450
    <small>livello mensile</small>
  </div>
</div>

<div class="pc-rank">
  <div class="pc-rank-name">
    <strong>💎 Titanium</strong>
    <span>350 punti di riferimento</span>
  </div>
  <div class="pc-rank-amount">
    $750
    <small>livello mensile</small>
  </div>
</div>

<div class="pc-rank">
  <div class="pc-rank-name">
    <strong>💚 Jade</strong>
    <span>700 punti di riferimento</span>
  </div>
  <div class="pc-rank-amount">
    $1.200
    <small>livello mensile</small>
  </div>
</div>

<div class="pc-rank">
  <div class="pc-rank-name">
    <strong>👑 Black Royal</strong>
    <span>Requisiti avanzati</span>
  </div>
  <div class="pc-rank-amount">
    Fino a $450.000
    <small>livello mensile previsto</small>
  </div>
</div>

<div class="pc-warning">
  <strong>⚠️ Il bonus non è una rendita fissa garantita</strong>
  <br>
  È necessario verificare
  la produzione delle linee,
  la qualificazione,
  i requisiti personali
  e le condizioni
  di mantenimento previste.
  <br><br>
  Una qualifica può cambiare
  e il bonus effettivo
  può variare o non maturare.
</div>

<!-- MEMBERSHIP RESIDUAL -->

<div class="pc-bonus">

  <div class="pc-bonus-head">
    <span class="pc-chip">07 · MEMBERSHIP RESIDUAL</span>
    <span class="pc-tag residual">RICORRENTE</span>
  </div>

  <h4>🔁 Membership Residual – Rinnovi clienti diretti</h4>

  <p>
    Percentuale prevista
    sui rinnovi idonei
    delle membership
    dei clienti personali.
    <br><br>
    La percentuale dipende
    dal numero di clienti
    che soddisfano
    i requisiti del piano.
  </p>

  <div class="pc-table-wrap">
    <table class="pc-table">
      <thead>
        <tr>
          <th>Clienti personali idonei</th>
          <th>Percentuale prevista</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10–25</td>
          <td><strong>10%</strong></td>
        </tr>
        <tr>
          <td>26–50</td>
          <td><strong>15%</strong></td>
        </tr>
        <tr>
          <td>51–100</td>
          <td><strong>20%</strong></td>
        </tr>
        <tr>
          <td>101 o più</td>
          <td><strong>25%</strong></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="pc-note">
    <strong>📌 Attenzione</strong>
    <br>
    La percentuale viene
    applicata secondo
    la base commissionabile
    prevista dal piano,
    non necessariamente
    all'intero prezzo pagato
    dal cliente.
  </div>

</div>

<!-- CAR BONUS -->

<div class="pc-bonus">

  <div class="pc-bonus-head">
    <span class="pc-chip">08 · CAR BONUS</span>
    <span class="pc-tag residual">RICORRENTE</span>
  </div>

  <h4>🚘 Car Bonus – Contributo automobile</h4>

  <span class="pc-value">
    $250–$500 <small>/mese</small>
  </span>

  <p>
    Bonus previsto
    per alcuni Ambassador
    che soddisfano
    determinati requisiti
    di qualifica e produzione.
    <br><br>
    Tra le condizioni indicate:
    <strong>100 punti
    distribuiti su almeno
    3 linee di sponsorizzazione</strong>.
    <br><br>
    L'auto può essere
    di marche come Audi,
    BMW o Mercedes,
    con requisiti relativi
    all'età del veicolo
    e alla presenza
    del logo MWR Life.
  </p>

  <div class="pc-warning">
    Non significa ricevere
    un'automobile gratuita.
    <br>
    È un contributo
    economico subordinato
    a requisiti specifici.
  </div>

</div>

<!-- PRESIDENTIAL BONUS -->

<div class="pc-bonus">

  <div class="pc-bonus-head">
    <span class="pc-chip">09 · PRESIDENTIAL BONUS</span>
    <span class="pc-tag residual">RICORRENTE</span>
  </div>

  <h4>👑 Presidential Bonus</h4>

  <span class="pc-value">20%</span>

  <p>
    Bonus aggiuntivo
    riservato agli aventi diritto
    del Presidential Club,
    a partire dalla qualifica Jade.
    <br><br>
    È collegato al volume
    della gamba debole,
    secondo il metodo
    di calcolo e le condizioni
    previsti dal piano.
    <br><br>
    <strong>
      Il 20% non va interpretato
      automaticamente come
      il 20% del fatturato
      complessivo della rete.
    </strong>
  </p>

</div>

<!-- ESEMPI -->

<h3 class="pc-title">
  🧮 6. Esempi pratici di calcolo
</h3>

<!-- ESEMPIO 1 -->

<div class="pc-calc">

  <span class="pc-label">
    ESEMPIO 01 · PRIME ISCRIZIONI
  </span>

  <h4>🎯 Tre nuovi clienti Turbo in 14 giorni</h4>

  <p class="pc-intro">
    Ipotizziamo che un nuovo Ambassador
    iscriva personalmente
    tre clienti Turbo,
    soddisfacendo le condizioni
    per il primo Fast Start Bonus.
  </p>

  <div class="pc-calc-row">
    <span>3 Member Bonus Turbo</span>
    <strong>3 × $80 = $240</strong>
  </div>

  <div class="pc-calc-row">
    <span>Primo Fast Start Bonus ipotizzato</span>
    <strong>$150</strong>
  </div>

  <div class="pc-calc-row">
    <span>Punti di produzione Dual Team</span>
    <strong>3 × 6 = 18 punti</strong>
  </div>

  <div class="pc-total">
    <span>💰 Bonus iniziali ipotetici</span>
    <b>$390 lordi</b>
  </div>

  <div class="pc-note">
    <strong>🥈 E il Silver da $120 al mese?</strong>
    <br>
    Le tre iscrizioni generano
    18 punti di produzione.
    <br><br>
    Per ricevere il bonus
    Dual Team Silver
    occorre soddisfare
    anche i requisiti
    di struttura, qualifica
    e mantenimento.
    <br><br>
    Non è incluso
    nei $390 iniziali.
  </div>

</div>

<!-- ESEMPIO 2 -->

<div class="pc-calc">

  <span class="pc-label">
    ESEMPIO 02 · BUILDER BONUS
  </span>

  <h4>🧱 Titanium e Silver: il differenziale</h4>

  <p class="pc-intro">
    Immaginiamo che tu sia Titanium
    e che un Ambassador Silver
    nella tua organizzazione
    iscriva un nuovo membro Elite.
  </p>

  <div class="pc-calc-row">
    <span>Livello Builder Titanium nell'esempio</span>
    <strong>$40</strong>
  </div>

  <div class="pc-calc-row">
    <span>Livello Builder Silver nell'esempio</span>
    <strong>$10</strong>
  </div>

  <div class="pc-total">
    <span>🧱 Differenza Builder</span>
    <b>$30</b>
  </div>

  <div class="pc-note">
    <strong>💡 Come funziona?</strong>
    <br>
    Nell'esempio il tuo
    differenziale è
    <strong>$40 − $10 = $30</strong>.
    <br><br>
    L'Ambassador Silver
    può maturare separatamente
    i propri bonus idonei,
    come il Member Bonus
    e il Builder Bonus.
  </div>

</div>

<!-- ESEMPIO 3 -->

<div class="pc-calc">

  <span class="pc-label">
    ESEMPIO 03 · MEMBERSHIP RESIDUAL
  </span>

  <h4>🔁 25 clienti VIP e 6 clienti Elite</h4>

  <p class="pc-intro">
    Ipotizziamo di avere
    31 clienti personali idonei,
    con rinnovi regolari
    e una percentuale
    Membership Residual del 15%.
  </p>

  <div class="pc-calc-row">
    <span>25 VIP × $19,97</span>
    <strong>$499,25</strong>
  </div>

  <div class="pc-calc-row">
    <span>6 Elite × $119,97</span>
    <strong>$719,82</strong>
  </div>

  <div class="pc-calc-row">
    <span>Totale teorico dei canoni</span>
    <strong>$1.219,07</strong>
  </div>

  <div class="pc-calc-row">
    <span>Fascia 26–50 clienti</span>
    <strong>15%</strong>
  </div>

  <div class="pc-total">
    <span>💵 15% del totale nell'esempio</span>
    <b>$182,86</b>
  </div>

  <div class="pc-warning">
    <strong>⚠️ È un calcolo illustrativo</strong>
    <br>
    Il risultato presume
    che l'intero totale
    dei canoni sia commissionabile.
    <br><br>
    Il bonus reale dipende
    dalla base commissionabile
    ufficiale, dai rinnovi idonei
    e dai requisiti previsti.
  </div>

</div>

<!-- ESEMPIO SILVER -->

<h3 class="pc-title">
  🥈 7. Il primo traguardo: Silver
</h3>

<div class="pc-two">

  <div class="pc-card gold">
    <span class="pc-icon">🥈</span>
    <h4>Livello Silver</h4>
    <span class="pc-value">
      $120 <small>/mese</small>
    </span>
    <p>
      È il livello mensile
      di Dual Team Residual
      indicato per Silver,
      quando il relativo bonus
      viene effettivamente maturato.
    </p>
  </div>

  <div class="pc-card blue">
    <span class="pc-icon">⭐</span>
    <h4>Membership Elite</h4>
    <span class="pc-value">
      $119,97 <small>/mese</small>
    </span>
    <p>
      Il costo mensile Elite
      è molto vicino
      al livello bonus
      Silver indicato.
    </p>
  </div>

</div>

<div class="pc-note">
  <strong>🧮 Confronto economico</strong>
  <br>
  $120 − $119,97 = $0,03.
  <br><br>
  Un bonus Silver
  realmente liquidato
  di $120 coprirebbe nominalmente
  la quota mensile Elite
  di $119,97.
  <br><br>
  Non comprende licenza annuale,
  imposte, eventuali trattenute
  e altri costi.
</div>

<div class="pc-warning">
  <strong>⚠️ Silver non rende automaticamente gratuita la membership</strong>
  <br>
  Il bonus deve essere
  realmente maturato
  e può interrompersi
  se non vengono mantenuti
  i requisiti previsti.
  <br><br>
  Tre iscrizioni
  Elite o Turbo
  non garantiscono da sole
  il rank Silver.
</div>

<!-- SIMULAZIONE 500 -->

<h3 class="pc-title">
  💶 8. Simulazione: obiettivo 500 € mensili
</h3>

<p class="pc-intro">
  Vediamo come potrebbe
  comporsi un mese
  con circa 520 dollari
  di commissioni lorde,
  ipotizzando il livello Gold
  e ulteriore produzione personale.
</p>

<div class="pc-calc">

  <span class="pc-label">
    SIMULAZIONE GOLD
  </span>

  <h4>🥇 Gold + bonus diretti + rinnovi</h4>

  <div class="pc-calc-row">
    <span>Dual Team Residual Gold ipotizzato</span>
    <strong>$300</strong>
  </div>

  <div class="pc-calc-row">
    <span>2 nuovi Member Bonus Turbo</span>
    <strong>$160</strong>
  </div>

  <div class="pc-calc-row">
    <span>Membership Residual ipotizzato</span>
    <strong>$60</strong>
  </div>

  <div class="pc-total">
    <span>🎯 Totale del mese ipotizzato</span>
    <b>$520 lordi</b>
  </div>

  <p class="pc-intro">
    Per realizzare
    questo risultato devono
    verificarsi contemporaneamente:
    <br><br>
    ✅ Un bonus Gold
    di $300 effettivamente maturato.
    <br>
    ✅ Due nuove iscrizioni
    Turbo idonee nel mese.
    <br>
    ✅ Rinnovi che generino
    $60 di Membership Residual.
    <br>
    ✅ Mantenimento di tutti
    i requisiti richiesti.
  </p>

</div>

<div class="pc-warning">
  <strong>💱 $520 non equivalgono automaticamente a 500 € netti</strong>
  <br>
  Il totale è espresso
  in dollari USA
  e prima di imposte,
  commissioni, spese
  e conversioni valutarie.
  <br><br>
  Inoltre, i bonus
  sulle nuove iscrizioni
  non si ripetono
  se non vengono acquisiti
  nuovi clienti.
  <br><br>
  Questa simulazione mostra
  una possibile composizione
  delle commissioni,
  non un reddito mensile stabile.
</div>

<!-- SIMULAZIONI AVANZATE -->

<h3 class="pc-title">
  📈 9. Simulazioni per qualifiche superiori
</h3>

<div class="pc-two">

  <div class="pc-card blue">

    <span class="pc-chip">OPZIONE A</span>
    <span class="pc-icon">💎</span>

    <h4>Titanium + Builder Bonus</h4>

    <span class="pc-value">
      $750 <small>livello Dual Team</small>
    </span>

    <p>
      Soglia di riferimento:
      <strong>350 punti</strong>.
      <br><br>
      Se l'Ambassador
      matura $750 di Dual Team
      e ulteriori $250–$300
      di Builder Bonus,
      il totale del mese sarebbe
      <strong>$1.000–$1.050 lordi</strong>.
    </p>

  </div>

  <div class="pc-card green">

    <span class="pc-chip">OPZIONE B</span>
    <span class="pc-icon">💚</span>

    <h4>Jade</h4>

    <span class="pc-value">
      $1.200 <small>livello Dual Team</small>
    </span>

    <p>
      Soglia di riferimento:
      <strong>700 punti</strong>.
      <br><br>
      Il piano indica
      un livello mensile
      di $1.200 per Jade,
      quando sono soddisfatte
      tutte le condizioni
      di remunerazione.
    </p>

  </div>

</div>

<div class="pc-note">
  <strong>🧮 Conversione puramente matematica dei punti</strong>
  <br>
  Supponendo solo membership
  Elite o Turbo da 6 punti:
  <br><br>
  18 punti = 3 membership.
  <br>
  72 punti = 12 membership.
  <br>
  350 punti = almeno 59 membership.
  <br>
  700 punti = almeno 117 membership.
  <br><br>
  Questi numeri
  non garantiscono
  le qualifiche:
  conta anche la distribuzione
  nella rete e ogni requisito
  aggiuntivo del piano.
</div>

<!-- DUPLICAZIONE -->

<h3 class="pc-title">
  🌱 10. Come funziona matematicamente la duplicazione
</h3>

<p class="pc-intro">
  Il modello chiamato
  <strong>"3 che aiutano 3"</strong>
  serve a illustrare
  come una rete potrebbe crescere
  se ogni nuovo Ambassador
  sviluppasse tre contatti
  che diventano membri.
</p>

<div class="pc-flow">

  <div class="pc-flow-box">
    <b>👤 Prima fase</b>
    <span>
      3 nuovi membri
    </span>
  </div>

  <div class="pc-arrow">→</div>

  <div class="pc-flow-box">
    <b>👥 Seconda fase</b>
    <span>
      9 nuovi membri
    </span>
  </div>

  <div class="pc-arrow">→</div>

  <div class="pc-flow-box">
    <b>🌱 Terza fase</b>
    <span>
      27 nuovi membri
    </span>
  </div>

  <div class="pc-arrow">→</div>

  <div class="pc-flow-box">
    <b>🚀 Quarta fase</b>
    <span>
      81 nuovi membri
    </span>
  </div>

</div>

<div class="pc-table-wrap">
  <table class="pc-table">
    <thead>
      <tr>
        <th>Fase teorica</th>
        <th>Nuovi membri</th>
        <th>Totale cumulato</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Prima fase</td>
        <td>3</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Seconda fase</td>
        <td>9</td>
        <td>12</td>
      </tr>
      <tr>
        <td>Terza fase</td>
        <td>27</td>
        <td>39</td>
      </tr>
      <tr>
        <td>Quarta fase</td>
        <td>81</td>
        <td>120</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="pc-warning">
  <strong>⚠️ È un modello matematico, non una previsione di crescita</strong>
  <br>
  Nella realtà non tutti
  i contatti si abbonano,
  non tutti sviluppano
  un'attività e alcuni clienti
  interrompono i rinnovi.
  <br><br>
  Inoltre, i membri totali
  non corrispondono automaticamente
  ai punti commissionabili
  o alle qualifiche.
</div>

<!-- RIEPILOGO -->

<h3 class="pc-title">
  📋 11. Riepilogo dei 9 bonus
</h3>

<div class="pc-table-wrap">
  <table class="pc-table">
    <thead>
      <tr>
        <th>Bonus</th>
        <th>Tipo</th>
        <th>Importo o criterio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Member Bonus</td>
        <td>Produzione</td>
        <td>$20 / $40 / $80</td>
      </tr>
      <tr>
        <td>Fast Start Bonus</td>
        <td>Produzione</td>
        <td>Fino a $450</td>
      </tr>
      <tr>
        <td>Builder Bonus</td>
        <td>Produzione</td>
        <td>Da $10 a $250</td>
      </tr>
      <tr>
        <td>Boost Bonus</td>
        <td>Produzione</td>
        <td>$600 / $1.200 settimanali</td>
      </tr>
      <tr>
        <td>One Time Rank Bonus</td>
        <td>Produzione</td>
        <td>Premi una tantum</td>
      </tr>
      <tr>
        <td>Dual Team Residual</td>
        <td>Ricorrente</td>
        <td>
          Da $120 fino ai livelli
          più elevati del piano
        </td>
      </tr>
      <tr>
        <td>Membership Residual</td>
        <td>Ricorrente</td>
        <td>Dal 10% al 25%</td>
      </tr>
      <tr>
        <td>Car Bonus</td>
        <td>Ricorrente</td>
        <td>$250–$500 mensili</td>
      </tr>
      <tr>
        <td>Presidential Bonus</td>
        <td>Ricorrente</td>
        <td>
          20% secondo il calcolo
          previsto dal piano
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- FAQ -->

<h3 class="pc-title">
  ❓ 12. Domande frequenti
</h3>

<details>
  <summary>
    💳 La licenza Ambassador basta
    per guadagnare tutte le commissioni?
  </summary>
  <div>
    No. La licenza regolare
    mantiene lo stato Attivo,
    ma i bonus possono richiedere
    anche la qualifica
    e specifici requisiti
    di produzione.
  </div>
</details>

<details>
  <summary>
    🥈 Tre iscrizioni Elite o Turbo
    garantiscono Silver?
  </summary>
  <div>
    No. Tre iscrizioni
    corrispondono
    a 18 punti Dual Team,
    ma il raggiungimento
    del rank richiede
    tutte le condizioni
    del piano compensi.
  </div>
</details>

<details>
  <summary>
    💵 Qual è la differenza
    tra Member Bonus
    e Membership Residual?
  </summary>
  <div>
    Il Member Bonus
    è collegato
    alla nuova iscrizione idonea.
    <br><br>
    Il Membership Residual
    riguarda i rinnovi
    dei clienti personali
    e può maturare
    nei periodi successivi.
  </div>
</details>

<details>
  <summary>
    🚗 Con il Car Bonus
    ricevo un'auto gratis?
  </summary>
  <div>
    No. È un contributo economico
    mensile, subordinato
    a requisiti specifici.
    Non equivale
    alla consegna gratuita
    di un veicolo.
  </div>
</details>

<details>
  <summary>
    🔄 I bonus residuali
    sono garantiti per sempre?
  </summary>
  <div>
    No. Dipendono
    dai requisiti del piano,
    dai clienti e dai rinnovi
    idonei, dalla produzione
    e dalle qualifiche mantenute.
  </div>
</details>

<details>
  <summary>
    📈 Posso sapere con certezza
    quanto guadagnerò ogni mese?
  </summary>
  <div>
    No. Si possono costruire
    simulazioni,
    ma il compenso effettivo
    dipende dalle commissioni
    realmente maturate
    e liquidate.
  </div>
</details>

<!-- QUIZ -->

<h3 class="pc-title">
  🧠 13. Mettiti alla prova
</h3>

<div class="pc-quiz">
  <span class="pc-label">DOMANDA 01</span>
  <h4>Quante aree di guadagno prevede il piano?</h4>
  <p>A. 5</p>
  <p>B. 9</p>
  <p>C. 12</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. 9 aree.</strong>
      Cinque di produzione
      e quattro ricorrenti.
    </div>
  </details>
</div>

<div class="pc-quiz">
  <span class="pc-label">DOMANDA 02</span>
  <h4>
    Quanto prevede il Member Bonus
    per una nuova iscrizione Turbo idonea?
  </h4>
  <p>A. $20</p>
  <p>B. $40</p>
  <p>C. $80</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>C. $80.</strong>
    </div>
  </details>
</div>

<div class="pc-quiz">
  <span class="pc-label">DOMANDA 03</span>
  <h4>
    Quanti punti Dual Team
    genera una membership Elite?
  </h4>
  <p>A. 1</p>
  <p>B. 3</p>
  <p>C. 6</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>C. 6 punti.</strong>
    </div>
  </details>
</div>

<div class="pc-quiz">
  <span class="pc-label">DOMANDA 04</span>
  <h4>
    Quale bonus dipende
    dai rinnovi dei clienti personali?
  </h4>
  <p>A. Fast Start Bonus</p>
  <p>B. Membership Residual</p>
  <p>C. One Time Rank Bonus</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. Membership Residual.</strong>
    </div>
  </details>
</div>

<div class="pc-quiz">
  <span class="pc-label">DOMANDA 05</span>
  <h4>
    I 18 punti Dual Team
    garantiscono da soli
    il bonus Silver?
  </h4>
  <p>A. Sì</p>
  <p>B. No, servono anche gli altri requisiti</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Il punteggio totale
      non è l'unica condizione
      di qualificazione.
    </div>
  </details>
</div>

<div class="pc-quiz">
  <span class="pc-label">DOMANDA 06</span>
  <h4>
    Un bonus teorico di $520
    equivale a 500 € netti garantiti?
  </h4>
  <p>A. Sì</p>
  <p>B. No</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. No.</strong>
      Bisogna considerare
      conversione valutaria,
      costi, imposte
      e commissioni
      realmente maturate.
    </div>
  </details>
</div>

<!-- CONCLUSIONE -->

<h3 class="pc-title">
  🎯 Il concetto da ricordare
</h3>

<div class="pc-summary">

  <h4>💰 Il piano compensi premia la produzione idonea</h4>

  <p>
    Il piano MWR Life
    comprende 9 aree di remunerazione,
    suddivise tra bonus
    di produzione
    e bonus ricorrenti.
    <br><br>
    I guadagni possono derivare
    dalle nuove iscrizioni,
    dai rinnovi dei clienti,
    dalla produzione della rete
    e dalle qualifiche raggiunte.
    <br><br>
    <strong>
      Ogni importo è soggetto
      alle condizioni del piano.
      Una simulazione non equivale
      a una promessa
      di guadagno.
    </strong>
    <br><br>
    Prima di presentare
    qualsiasi importo
    a un nuovo Ambassador,
    è importante consultare
    il piano compensi ufficiale
    e le sue eventuali
    condizioni aggiornate.
  </p>

</div>

</div>
</section>
`);
