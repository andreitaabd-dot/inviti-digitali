
window.registraSezione("qualifiche", `
<section class="section" id="qualifiche" data-group="business">

<style>
#qualifiche {
  --qc-ink:#13374e;
  --qc-sub:#536d7d;
  --qc-line:#dce9ef;
}
#qualifiche .qc-title {
  font-size:23px;
  color:var(--qc-ink);
  margin:36px 0 16px;
}
#qualifiche .qc-lead {
  color:var(--qc-sub);
  font-size:14px;
  line-height:1.85;
  margin:12px 0 22px;
}
#qualifiche .qc-hero {
  display:grid;
  grid-template-columns:1.13fr 1fr;
  gap:22px;
  align-items:center;
  margin:18px 0 28px;
}
#qualifiche .qc-hero p {
  font-size:14px;
  line-height:1.85;
  color:var(--qc-sub);
}
#qualifiche .qc-art {
  border-radius:22px;
  padding:27px 20px;
  color:white;
  text-align:center;
  background:linear-gradient(140deg,#103551,#087e8f);
}
#qualifiche .qc-art-emoji {
  font-size:54px;
  margin:12px 0;
}
#qualifiche .qc-art h3 {
  color:white;
  margin:12px 0 6px;
  font-size:22px;
}
#qualifiche .qc-art p {
  color:#def4f4;
  font-size:12px;
}
#qualifiche .qc-art-flow {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:7px;
  margin-top:18px;
}
#qualifiche .qc-art-flow span {
  display:block;
  border:1px solid #ffffff48;
  background:#ffffff19;
  border-radius:10px;
  padding:12px 4px;
  font-size:11px;
}
#qualifiche .qc-two {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:14px;
  margin:18px 0;
}
#qualifiche .qc-three {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:13px;
  margin:18px 0;
}
#qualifiche .qc-card {
  border:1px solid var(--qc-line);
  background:#f4f9fb;
  border-radius:17px;
  padding:19px;
  min-width:0;
}
#qualifiche .qc-card.blue {
  background:#edf7ff;
  border-color:#d1e7f7;
}
#qualifiche .qc-card.green {
  background:#eefaf3;
  border-color:#cfe8da;
}
#qualifiche .qc-card.gold {
  background:#fff8e9;
  border-color:#efe1bd;
}
#qualifiche .qc-card.purple {
  background:#f6f1ff;
  border-color:#e5dafa;
}
#qualifiche .qc-card h4 {
  color:#153a53;
  font-size:17px;
  margin:9px 0;
}
#qualifiche .qc-card p {
  font-size:13px;
  color:var(--qc-sub);
  line-height:1.82;
  margin:8px 0;
}
#qualifiche .qc-icon {
  font-size:29px;
  display:block;
  margin-bottom:6px;
}
#qualifiche .qc-big {
  display:block;
  font-weight:850;
  font-size:28px;
  color:#0c8194;
  margin:10px 0;
}
#qualifiche .qc-big small {
  font-size:12px;
  color:#627e8a;
}
#qualifiche .qc-kicker {
  display:inline-block;
  border-radius:20px;
  background:#e7f7f3;
  color:#087e8d;
  padding:7px 12px;
  font-weight:800;
  font-size:11px;
  letter-spacing:.05em;
}
#qualifiche .qc-note,
#qualifiche .qc-warn {
  font-size:13px;
  line-height:1.85;
  padding:17px 19px;
  margin:18px 0;
  border-radius:11px;
}
#qualifiche .qc-note {
  background:#eaf8f5;
  border-left:4px solid #1aab97;
  color:#305e56;
}
#qualifiche .qc-warn {
  background:#fff8e9;
  border-left:4px solid #d2a345;
  color:#70582d;
}
#qualifiche .qc-scroll {
  overflow-x:auto;
  border:1px solid var(--qc-line);
  border-radius:15px;
  margin:19px 0;
}
#qualifiche .qc-table {
  width:100%;
  border-collapse:collapse;
  min-width:650px;
}
#qualifiche .qc-table th {
  padding:13px 12px;
  background:#123650;
  color:white;
  text-align:left;
  font-size:12px;
}
#qualifiche .qc-table td {
  padding:12px;
  border-bottom:1px solid #e0eaf0;
  color:#365b6b;
  font-size:12px;
  line-height:1.6;
}
#qualifiche .qc-table tr:nth-child(even) td {
  background:#f4f8fa;
}
#qualifiche .qc-table td:first-child {
  font-weight:800;
  color:#153a53;
}
#qualifiche .qc-rank-group {
  border-radius:18px;
  border:1px solid #e0eaf0;
  padding:19px;
  margin:17px 0;
  background:#f8fbfd;
}
#qualifiche .qc-rank-group h4 {
  margin:0 0 12px;
  color:#153a53;
  font-size:17px;
}
#qualifiche .qc-rank {
  display:grid;
  grid-template-columns:minmax(0,1.2fr) minmax(75px,.55fr) minmax(88px,.65fr);
  gap:10px;
  align-items:center;
  padding:12px 5px;
  border-bottom:1px solid #e0ebf0;
}
#qualifiche .qc-rank:last-child {
  border:0;
}
#qualifiche .qc-rank strong {
  display:block;
  color:#173d55;
  font-size:14px;
}
#qualifiche .qc-rank small {
  display:block;
  color:#658090;
  font-size:11px;
  margin-top:3px;
}
#qualifiche .qc-points {
  font-weight:800;
  color:#0b8193;
  text-align:right;
}
#qualifiche .qc-sum {
  font-size:16px;
  font-weight:850;
  color:#0b8193;
  text-align:right;
}
#qualifiche .qc-sum small {
  font-weight:500;
}
#qualifiche .qc-path {
  display:flex;
  gap:8px;
  align-items:stretch;
  margin:20px 0;
}
#qualifiche .qc-node {
  flex:1;
  background:#edf7fa;
  border:1px solid #d4e9ed;
  border-radius:13px;
  padding:15px 10px;
  text-align:center;
}
#qualifiche .qc-node strong {
  display:block;
  color:#114b63;
  font-size:14px;
  margin-bottom:6px;
}
#qualifiche .qc-node span {
  color:#527181;
  font-size:12px;
  line-height:1.65;
}
#qualifiche .qc-arr {
  align-self:center;
  color:#0995a0;
  font-weight:900;
  font-size:20px;
}
#qualifiche .qc-quiz {
  background:#f6f1ff;
  border:1px solid #e7dcf8;
  border-radius:16px;
  margin:15px 0;
  padding:20px;
}
#qualifiche .qc-quiz h4 {
  font-size:16px;
  color:#263c56;
  margin:10px 0;
}
#qualifiche .qc-quiz p {
  font-size:13px;
  color:#56647a;
}
#qualifiche .qc-quiz details {
  background:white;
  border-radius:10px;
  padding:12px;
  margin-top:12px;
}
#qualifiche details summary {
  cursor:pointer;
  font-weight:750;
  color:#21455c;
}
#qualifiche details div {
  font-size:13px;
  line-height:1.8;
  color:#4f687c;
  margin-top:10px;
}
#qualifiche .qc-final {
  padding:24px;
  border-radius:17px;
  background:linear-gradient(140deg,#123b59,#117b8c);
  color:white;
  margin:26px 0;
}
#qualifiche .qc-final h4 {
  color:white;
  font-size:20px;
  margin:0 0 12px;
}
#qualifiche .qc-final p {
  font-size:13px;
  line-height:1.85;
  color:#e5f5f8;
}
@media(max-width:800px) {
  #qualifiche .qc-three {
    grid-template-columns:1fr;
  }
}
@media(max-width:690px) {
  #qualifiche .qc-hero,
  #qualifiche .qc-two {
    grid-template-columns:1fr;
  }
  #qualifiche .qc-path {
    flex-direction:column;
  }
  #qualifiche .qc-arr {
    transform:rotate(90deg);
  }
  #qualifiche .qc-title {
    font-size:21px;
  }
}
</style>

<!-- INTESTAZIONE -->

<div class="section-head">
  <span class="kicker">Capitolo 10 · Opportunità di business</span>
  <h2>Qualifiche e carriera</h2>
  <p>
    Dal primo Silver fino a Black Royal:
    punti, avanzamento, sponsorizzazione,
    Dual Team e gestione della rete.
  </p>
</div>

<div class="section-body">

<!-- INTRODUZIONE -->

<div class="qc-hero">
  <div>
    <span class="qc-kicker">LA CRESCITA NEL TEAM</span>
    <h3 class="qc-title">🏅 Qual è il percorso di carriera?</h3>
    <p>
      In MWR Life ogni livello, chiamato anche
      <strong>rank</strong>, corrisponde a una
      qualifica ottenuta soddisfacendo
      determinate condizioni del piano.
    </p>
    <p>
      La carriera parte da
      <strong>New Ambassador</strong> e prosegue
      attraverso Silver, Gold, Platinum,
      Titanium, Jade e livelli superiori,
      fino a Black Royal.
    </p>
    <p>
      Qui approfondiamo <strong>come si avanza</strong>.
      Le nove forme di remunerazione sono
      spiegate nel capitolo
      <strong>Piano Compensi</strong>.
    </p>
  </div>

  <div class="qc-art">
    <div class="qc-art-emoji">🏆</div>
    <h3>Dall'inizio alla leadership</h3>
    <p>
      Ogni qualifica richiede requisiti
      di rete e attività.
    </p>
    <div class="qc-art-flow">
      <span>🥈<br>Silver</span>
      <span>🥇<br>Gold</span>
      <span>👑<br>Royal</span>
    </div>
  </div>
</div>

<!-- STATI -->

<h3 class="qc-title">
  🔐 1. Attivo e Qualificato: prima dei rank
</h3>

<div class="qc-two">
  <div class="qc-card blue">
    <span class="qc-icon">✅</span>
    <h4>Ambassador Attivo</h4>
    <span class="qc-big">$99 <small>/anno</small></span>
    <p>
      Mantiene in regola la licenza annuale
      Lifestyle Ambassador, oltre alle altre
      eventuali condizioni amministrative.
    </p>
  </div>

  <div class="qc-card green">
    <span class="qc-icon">🎯</span>
    <h4>Ambassador Qualificato</h4>
    <span class="qc-big">3 <small>punti personali</small></span>
    <p>
      Il materiale indica un requisito
      di almeno 3 punti cliente personali.
      La membership personale Elite o Turbo
      attiva viene indicata come possibile
      soddisfacimento del requisito
      attraverso 6 punti di qualifica.
    </p>
  </div>
</div>

<div class="qc-warn">
  <strong>Attivo non significa Qualificato.</strong>
  <br>
  La licenza annuale non dà automaticamente
  diritto a tutti i bonus.
  <br><br>
  Inoltre, essere Qualificato non equivale
  ad avere raggiunto Silver.
</div>

<!-- PUNTI -->

<h3 class="qc-title">
  🧮 2. Quanto vale ogni membership?
</h3>

<div class="qc-three">
  <div class="qc-card blue">
    <span class="qc-icon">🌊</span>
    <h4>VIP</h4>
    <span class="qc-big">1 punto</span>
    <p>
      Punteggio Dual Team
      per una membership VIP idonea.
    </p>
  </div>

  <div class="qc-card gold">
    <span class="qc-icon">⭐</span>
    <h4>Elite</h4>
    <span class="qc-big">6 punti</span>
    <p>
      Punteggio Dual Team
      per una membership Elite idonea.
    </p>
  </div>

  <div class="qc-card green">
    <span class="qc-icon">🚀</span>
    <h4>Turbo</h4>
    <span class="qc-big">6 punti</span>
    <p>
      Punteggio Dual Team
      per una membership Turbo idonea.
    </p>
  </div>
</div>

<div class="qc-note">
  <strong>💡 Attenzione ai tre tipi di punti</strong>
  <br>
  <strong>Punti personali:</strong>
  utilizzati per i requisiti di qualificazione
  dell'Ambassador.
  <br><br>
  <strong>Punti Dual Team:</strong>
  generati dalla produzione idonea
  dell'organizzazione.
  <br><br>
  <strong>Punti Fedeltà:</strong>
  appartengono al programma di viaggio
  e non servono per avanzare di rank.
</div>

<!-- DUE TEAM -->

<h3 class="qc-title">
  🕸️ 3. Team di sponsorizzazione e Dual Team
</h3>

<div class="qc-two">
  <div class="qc-card blue">
    <span class="qc-icon">🤝</span>
    <h4>Team di sponsorizzazione</h4>
    <p>
      Comprende le persone iscritte direttamente
      da te, quelle iscritte dai tuoi diretti
      e tutti i livelli successivi.
      <br><br>
      Serve a identificare
      <strong>chi ha sponsorizzato chi</strong>.
    </p>
  </div>

  <div class="qc-card green">
    <span class="qc-icon">⚖️</span>
    <h4>Dual Team</h4>
    <p>
      È la struttura binaria in cui
      gli Ambassador vengono posizionati
      nella <strong>gamba sinistra</strong>
      oppure nella <strong>gamba destra</strong>.
      <br><br>
      Può comprendere iscritti diretti
      e persone posizionate dalla upline.
    </p>
  </div>
</div>

<div class="qc-card">
  <div style="text-align:center">
    <div style="
      display:inline-block;
      padding:13px 24px;
      background:#123650;
      color:white;
      border-radius:12px;
      font-weight:800;
    ">👤 TU</div>

    <div style="
      font-size:28px;
      color:#0d8193;
      margin:10px 0;
    ">↙ &nbsp;&nbsp;&nbsp;&nbsp; ↘</div>
  </div>

  <div class="qc-two">
    <div class="qc-card blue">
      <span class="qc-icon">⬅️</span>
      <h4>Gamba sinistra</h4>
      <p>
        Membri e produzione
        della struttura sinistra.
      </p>
    </div>

    <div class="qc-card green">
      <span class="qc-icon">➡️</span>
      <h4>Gamba destra</h4>
      <p>
        Membri e produzione
        della struttura destra.
      </p>
    </div>
  </div>
</div>

<div class="qc-note">
  <strong>🌧️ Cos'è lo spillover?</strong>
  <br>
  È il posizionamento nella tua struttura
  binaria di persone inserite
  da un Ambassador della linea superiore.
  <br><br>
  Può contribuire alla produzione
  del Dual Team, ma non equivale
  necessariamente a sponsorizzazione
  personale e non è garantito.
</div>

<!-- BILANCIAMENTO -->

<h3 class="qc-title">
  ⚖️ 4. La regola di bilanciamento
</h3>

<div class="qc-card gold">
  <span class="qc-icon">⚖️</span>
  <h4>La regola del 50%</h4>

  <p>
    Secondo il riepilogo ricevuto,
    dal rank <strong>Platinum</strong>
    in poi è previsto un requisito
    di produzione proveniente
    dal Team di Sponsorizzazione.
    <br><br>
    Almeno il 50% del punteggio
    richiesto deve provenire
    dalla propria organizzazione
    sponsorizzata, distribuita
    su almeno due linee.
    <br><br>
    La parte restante può derivare
    dalla produzione del Dual Team,
    compreso lo spillover ammesso
    dal piano.
  </p>
</div>

<div class="qc-warn">
  <strong>📌 Distinzione importante</strong>
  <br>
  Il 50% di produzione sponsorizzata
  e il bilanciamento tra le due gambe
  sono due aspetti differenti.
  <br><br>
  Per determinare una qualifica
  occorre verificare entrambi
  secondo la versione ufficiale
  del piano applicabile.
</div>

<!-- RANK -->

<h3 class="qc-title">
  🏅 5. Tutte le 19 qualifiche di carriera
</h3>

<p class="qc-lead">
  Questa è la scala completa riportata
  nel materiale ricevuto da Paolo.
  <br><br>
  I punti rappresentano le soglie indicate.
  Gli importi sono i livelli
  di bonus Dual Team previsti
  al soddisfacimento dei requisiti.
</p>

<div class="qc-rank-group">
  <h4>🟢 Fase di avvio</h4>

  <div class="qc-rank">
    <div>
      <strong>🥈 Silver</strong>
      <small>Primo traguardo</small>
    </div>
    <div class="qc-points">18 punti</div>
    <div class="qc-sum">$120<small>/mese</small></div>
  </div>

  <div class="qc-rank">
    <div>
      <strong>🥇 Gold</strong>
      <small>Sviluppo del primo team</small>
    </div>
    <div class="qc-points">72 punti</div>
    <div class="qc-sum">$300<small>/mese</small></div>
  </div>
</div>

<div class="qc-rank-group">
  <h4>🔵 Sviluppo intermedio</h4>

  <div class="qc-rank">
    <div><strong>🏆 Platinum</strong></div>
    <div class="qc-points">175 punti</div>
    <div class="qc-sum">$450<small>/mese</small></div>
  </div>

  <div class="qc-rank">
    <div><strong>💎 Titanium</strong></div>
    <div class="qc-points">350 punti</div>
    <div class="qc-sum">$750<small>/mese</small></div>
  </div>
</div>

<div class="qc-rank-group">
  <h4>🟣 Leadership e Presidential Club</h4>

  <div class="qc-rank">
    <div>
      <strong>💚 Jade</strong>
      <small>Ingresso Presidential Club</small>
    </div>
    <div class="qc-points">700 punti</div>
    <div class="qc-sum">$1.200<small>/mese</small></div>
  </div>

  <div class="qc-rank">
    <div><strong>🤍 Pearl</strong></div>
    <div class="qc-points">1.500 punti</div>
    <div class="qc-sum">$2.400<small>/mese</small></div>
  </div>

  <div class="qc-rank">
    <div><strong>💚 Emerald</strong></div>
    <div class="qc-points">3.000 punti</div>
    <div class="qc-sum">$4.500<small>/mese</small></div>
  </div>
</div>

<div class="qc-rank-group">
  <h4>🟡 Alta leadership e Diamond Club</h4>

  <div class="qc-rank">
    <div><strong>❤️ Ruby</strong></div>
    <div class="qc-points">6.000 punti</div>
    <div class="qc-sum">$9.000<small>/mese</small></div>
  </div>

  <div class="qc-rank">
    <div><strong>💙 Sapphire</strong></div>
    <div class="qc-points">10.000 punti</div>
    <div class="qc-sum">$15.000<small>/mese</small></div>
  </div>

  <div class="qc-rank">
    <div><strong>💎 Diamond</strong></div>
    <div class="qc-points">15.000 punti</div>
    <div class="qc-sum">$22.500<small>/mese</small></div>
  </div>

  <div class="qc-rank">
    <div><strong>💎 Double Diamond</strong></div>
    <div class="qc-points">20.000 punti</div>
    <div class="qc-sum">$30.000<small>/mese</small></div>
  </div>

  <div class="qc-rank">
    <div><strong>💎 Triple Diamond</strong></div>
    <div class="qc-points">30.000 punti</div>
    <div class="qc-sum">$45.000<small>/mese</small></div>
  </div>

  <div class="qc-rank">
    <div><strong>🔷 Blue Diamond</strong></div>
    <div class="qc-points">60.000 punti</div>
    <div class="qc-sum">$60.000<small>/mese</small></div>
  </div>

  <div class="qc-rank">
    <div><strong>🖤 Black Diamond</strong></div>
    <div class="qc-points">120.000 punti</div>
    <div class="qc-sum">$90.000<small>/mese</small></div>
  </div>
</div>

<div class="qc-rank-group">
  <h4>🔴 Top Executive e Royal Club</h4>

  <div class="qc-rank">
    <div><strong>👑 Royal</strong></div>
    <div class="qc-points">200.000 punti</div>
    <div class="qc-sum">$120.000<small>/mese</small></div>
  </div>

  <div class="qc-rank">
    <div><strong>👑 Double Royal</strong></div>
    <div class="qc-points">300.000 punti</div>
    <div class="qc-sum">$150.000<small>/mese</small></div>
  </div>

  <div class="qc-rank">
    <div><strong>👑 Triple Royal</strong></div>
    <div class="qc-points">400.000 punti</div>
    <div class="qc-sum">$225.000<small>/mese</small></div>
  </div>

  <div class="qc-rank">
    <div><strong>🔵 Blue Royal</strong></div>
    <div class="qc-points">500.000 punti</div>
    <div class="qc-sum">$300.000<small>/mese</small></div>
  </div>

  <div class="qc-rank">
    <div><strong>🖤 Black Royal</strong></div>
    <div class="qc-points">700.000 punti</div>
    <div class="qc-sum">$450.000<small>/mese</small></div>
  </div>
</div>

<div class="qc-warn">
  <strong>⚠️ Importi e qualifiche non sono garantiti</strong>
  <br>
  Le soglie e gli importi sono riportati
  sulla base del materiale formativo ricevuto.
  <br><br>
  I bonus devono essere effettivamente maturati
  e possono richiedere qualificazione personale,
  distribuzione della rete, rinnovi
  e condizioni di mantenimento.
</div>

<!-- SILVER -->

<h3 class="qc-title">
  🥈 6. Esempio pratico: il primo Silver
</h3>

<div class="qc-card gold">
  <span class="qc-kicker">ESEMPIO SILVER</span>
  <h4>Tre membership Elite o Turbo</h4>

  <div class="qc-three">
    <div class="qc-card blue">
      <h4>Cliente 1</h4>
      <span class="qc-big">6 punti</span>
    </div>
    <div class="qc-card blue">
      <h4>Cliente 2</h4>
      <span class="qc-big">6 punti</span>
    </div>
    <div class="qc-card blue">
      <h4>Cliente 3</h4>
      <span class="qc-big">6 punti</span>
    </div>
  </div>

  <span class="qc-big">Totale: 18 punti</span>

  <p>
    Tre membership idonee Elite o Turbo
    producono aritmeticamente
    18 punti Dual Team.
    <br><br>
    Nel materiale ricevuto Silver
    è associato a un livello
    di bonus pari a
    <strong>$120 mensili</strong>.
  </p>
</div>

<div class="qc-warn">
  Tre iscrizioni non garantiscono
  automaticamente il bonus Silver.
  <br><br>
  Occorre soddisfare anche
  i requisiti di struttura
  e di qualificazione previsti.
</div>

<!-- GOLD -->

<h3 class="qc-title">
  🥇 7. Esempio pratico: dal Silver al Gold
</h3>

<p class="qc-lead">
  Vediamo l'esempio di duplicazione
  proposto nel materiale di Paolo.
  <br><br>
  L'Ambassador iscrive tre membri
  Elite o Turbo e li aiuta
  a sviluppare a loro volta
  tre membership ciascuno.
</p>

<div class="qc-card green">
  <span class="qc-kicker">ESEMPIO GOLD</span>

  <h4>Il modello "3 che aiutano 3"</h4>

  <div class="qc-path">
    <div class="qc-node">
      <strong>👤 Tu</strong>
      <span>3 diretti</span>
    </div>
    <div class="qc-arr">→</div>
    <div class="qc-node">
      <strong>👥 I tuoi diretti</strong>
      <span>3 nuovi membri ciascuno</span>
    </div>
    <div class="qc-arr">→</div>
    <div class="qc-node">
      <strong>🌱 Nuovi membri</strong>
      <span>9 iscrizioni aggiuntive</span>
    </div>
    <div class="qc-arr">→</div>
    <div class="qc-node">
      <strong>🧮 Totale</strong>
      <span>12 membership</span>
    </div>
  </div>

  <p>
    12 membership Elite o Turbo
    × 6 punti ciascuna
    = <strong>72 punti Dual Team</strong>.
  </p>
</div>

<h3 class="qc-title">
  ⚖️ Esempio di distribuzione nelle due gambe
</h3>

<div class="qc-two">
  <div class="qc-card blue">
    <span class="qc-icon">⬅️</span>
    <h4>Gamba sinistra</h4>
    <span class="qc-big">48 punti</span>
    <p>
      Marco ed Elena,
      con la produzione
      delle rispettive reti,
      generano nell'esempio
      8 membership complessive.
      <br><br>
      8 × 6 = 48 punti.
    </p>
  </div>

  <div class="qc-card green">
    <span class="qc-icon">➡️</span>
    <h4>Gamba destra</h4>
    <span class="qc-big">24 punti</span>
    <p>
      Stefano, con la produzione
      della sua rete,
      genera nell'esempio
      4 membership complessive.
      <br><br>
      4 × 6 = 24 punti.
    </p>
  </div>
</div>

<div class="qc-note">
  <strong>🧮 Totale della simulazione</strong>
  <br>
  48 punti a sinistra
  + 24 punti a destra
  = <strong>72 punti</strong>.
  <br><br>
  Nel piano formativo ricevuto,
  Gold è associato al livello
  di bonus da $300 al mese.
</div>

<div class="qc-warn">
  <strong>📌 Questo esempio non certifica Gold.</strong>
  <br>
  La distribuzione 48/24 illustra
  il funzionamento matematico della rete.
  La qualifica effettiva richiede
  la verifica di tutti i requisiti
  previsti dal piano.
</div>

<!-- PIAZZAMENTO -->

<h3 class="qc-title">
  📍 8. Come si posizionano gli Ambassador?
</h3>

<p class="qc-lead">
  Il posizionamento determina dove
  viene inserito un nuovo Ambassador
  nella struttura Dual Team.
  <br><br>
  Secondo le indicazioni ricevute,
  il processo utilizza una
  <strong>Holding Tank</strong>,
  ossia un'area temporanea di attesa.
</p>

<div class="qc-three">

  <div class="qc-card blue">
    <span class="qc-icon">📦</span>
    <h4>Holding Tank</h4>
    <span class="qc-big">30 <small>giorni</small></span>
    <p>
      Il riepilogo indica
      una finestra iniziale
      per decidere manualmente
      dove posizionare
      il nuovo Ambassador.
    </p>
  </div>

  <div class="qc-card green">
    <span class="qc-icon">🤖</span>
    <h4>Posizionamento automatico</h4>
    <p>
      Se non viene effettuata
      un'azione manuale,
      il sistema viene descritto
      come configurato per
      il posizionamento automatico
      sulla gamba debole.
    </p>
  </div>

  <div class="qc-card gold">
    <span class="qc-icon">↔️</span>
    <h4>Correzione</h4>
    <span class="qc-big">72 <small>ore</small></span>
    <p>
      Il materiale indica
      la possibilità di richiedere
      una modifica del piazzamento
      entro 72 ore,
      una sola volta.
    </p>
  </div>

</div>

<div class="qc-note">
  <strong>👥 E i clienti senza licenza Ambassador?</strong>
  <br>
  Secondo il riepilogo ricevuto,
  i punti generati dai semplici
  clienti Travel Advantage
  vengono assegnati automaticamente
  alla gamba debole.
  <br><br>
  Non è richiesto
  un posizionamento manuale
  del cliente.
</div>

<div class="qc-warn">
  <strong>⚠️ Verifica le regole nel Biz Center.</strong>
  <br>
  Le finestre di 30 giorni
  e 72 ore sono riportate
  nel materiale di Paolo,
  ma vanno confrontate
  con le regole operative
  effettivamente in vigore
  prima di effettuare
  un posizionamento definitivo.
</div>

<!-- SPILLOVER -->

<h3 class="qc-title">
  🌿 9. Spillover e strategia delle linee esterne
</h3>

<div class="qc-two">
  <div class="qc-card green">
    <span class="qc-icon">🌧️</span>
    <h4>Vantaggio potenziale dello spillover</h4>
    <p>
      Se un Ambassador della linea
      superiore posiziona una persona
      nella tua struttura binaria,
      quella produzione può contribuire
      al tuo Dual Team
      secondo le condizioni del piano.
      <br><br>
      Non è però garantita.
    </p>
  </div>

  <div class="qc-card purple">
    <span class="qc-icon">🧭</span>
    <h4>Strategia delle linee esterne</h4>
    <p>
      Paolo suggerisce di sviluppare
      le linee esterne di sinistra
      e di destra per favorire
      la crescita della struttura
      in profondità.
      <br><br>
      È una strategia proposta
      dal team, non un requisito
      universale del rank.
    </p>
  </div>
</div>

<div class="qc-warn">
  <strong>Non esiste un piazzamento ideale per tutti.</strong>
  <br>
  Prima di decidere il ramo
  occorre considerare
  la struttura esistente,
  le regole del sistema
  e gli obiettivi reali
  di ciascun Ambassador.
</div>

<!-- RUOLI -->

<h3 class="qc-title">
  🎓 10. Come cambiano le responsabilità con la carriera?
</h3>

<div class="qc-three">

  <div class="qc-card blue">
    <span class="qc-icon">🌱</span>
    <h4>New Ambassador</h4>
    <p>
      Conosce la piattaforma,
      prepara gli strumenti,
      definisce i primi obiettivi
      e avvia le conversazioni
      con i contatti.
    </p>
  </div>

  <div class="qc-card green">
    <span class="qc-icon">🤝</span>
    <h4>Sponsor</h4>
    <p>
      Accoglie e affianca
      i nuovi membri,
      li orienta nella formazione
      e li supporta
      nei primi appuntamenti.
    </p>
  </div>

  <div class="qc-card gold">
    <span class="qc-icon">🥈</span>
    <h4>Silver</h4>
    <p>
      Sviluppa autonomia
      nella presentazione
      di Travel Advantage,
      nel follow-up e
      nell'accompagnamento
      dei primi clienti.
    </p>
  </div>

  <div class="qc-card purple">
    <span class="qc-icon">🥇</span>
    <h4>Gold</h4>
    <p>
      Inizia a guidare il gruppo,
      ad affiancare gli Ambassador,
      a spiegare il piano compensi
      e a favorire la formazione.
    </p>
  </div>

  <div class="qc-card blue">
    <span class="qc-icon">🏆</span>
    <h4>Rank intermedi</h4>
    <p>
      Rafforza il supporto
      alla squadra,
      la collaborazione
      e la qualità
      della formazione.
    </p>
  </div>

  <div class="qc-card green">
    <span class="qc-icon">👑</span>
    <h4>Leadership avanzata</h4>
    <p>
      Favorisce la crescita
      di nuovi leader,
      il coordinamento
      e lo sviluppo sostenibile
      della community.
    </p>
  </div>

</div>

<div class="qc-note">
  <strong>📚 Ruoli formativi e rank sono diversi.</strong>
  <br>
  Le responsabilità descritte
  sono indicazioni organizzative
  del team, non ulteriori
  requisiti ufficiali
  per ottenere una qualifica.
</div>

<!-- PREMI -->

<h3 class="qc-title">
  🎁 11. Premi e riconoscimenti di carriera
</h3>

<div class="qc-scroll">
  <table class="qc-table">
    <thead>
      <tr>
        <th>Qualifica</th>
        <th>Premio o vantaggio riportato</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Gold</td>
        <td>
          Accesso al Boost Bonus
          Gold, al raggiungimento
          dei requisiti settimanali.
        </td>
      </tr>
      <tr>
        <td>Platinum</td>
        <td>
          $300 di Life Experience,
          Team Trips e accesso
          al Boost Bonus Platinum
          secondo le condizioni.
        </td>
      </tr>
      <tr>
        <td>Jade</td>
        <td>
          Presidential Club,
          Retreat e vacanza per due
          secondo il regolamento.
        </td>
      </tr>
      <tr>
        <td>Ruby</td>
        <td>$5.000 una tantum.</td>
      </tr>
      <tr>
        <td>Diamond</td>
        <td>
          CEO Experience a Miami,
          con soggiorno, voli
          e benefit indicati nel piano.
        </td>
      </tr>
      <tr>
        <td>Triple Diamond</td>
        <td>$25.000 una tantum.</td>
      </tr>
      <tr>
        <td>Black Diamond</td>
        <td>Auto di lusso, alle condizioni previste.</td>
      </tr>
      <tr>
        <td>Royal</td>
        <td>$150.000 una tantum.</td>
      </tr>
      <tr>
        <td>Double Royal</td>
        <td>$200.000 una tantum.</td>
      </tr>
      <tr>
        <td>Triple Royal</td>
        <td>Supercar, secondo il regolamento.</td>
      </tr>
      <tr>
        <td>Blue Royal</td>
        <td>$500.000 una tantum.</td>
      </tr>
      <tr>
        <td>Black Royal</td>
        <td>
          Fino a $1.000.000
          destinati all'acquisto
          di una villa di lusso.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div class="qc-warn">
  <strong>⚠️ Premi soggetti a requisiti.</strong>
  <br>
  I premi di carriera riportati
  non sono automatici.
  Le condizioni di maturazione,
  erogazione e mantenimento
  devono essere verificate
  sul regolamento ufficiale.
</div>

<!-- PRESIDENTIAL -->

<h3 class="qc-title">
  👑 12. Cosa cambia entrando nel Presidential Club?
</h3>

<div class="qc-card purple">
  <span class="qc-icon">👑</span>
  <h4>Il rank Jade</h4>
  <p>
    Secondo il materiale ricevuto,
    Jade rappresenta l'ingresso
    nel Presidential Club.
    <br><br>
    Oltre ai riconoscimenti di carriera,
    gli aventi diritto possono accedere
    al Presidential Bonus,
    collegato al volume
    della gamba debole
    secondo la formula del piano.
  </p>
</div>

<div class="qc-warn">
  <strong>Attenzione al calcolo del 20%.</strong>
  <br>
  Il testo ricevuto parla
  di un bonus pari al 20%
  dei punti della gamba debole.
  <br><br>
  Non è corretto trasformare
  direttamente 400 punti
  in $80 senza conoscere
  la formula ufficiale
  di conversione monetaria.
</div>

<!-- MANTENIMENTO -->

<h3 class="qc-title">
  🔁 13. Come mantenere una qualifica?
</h3>

<div class="qc-path">
  <div class="qc-node">
    <strong>✅ Licenza</strong>
    <span>Stato Attivo</span>
  </div>
  <div class="qc-arr">→</div>
  <div class="qc-node">
    <strong>🎯 Requisiti</strong>
    <span>Stato Qualificato</span>
  </div>
  <div class="qc-arr">→</div>
  <div class="qc-node">
    <strong>👥 Clienti</strong>
    <span>Membership idonee</span>
  </div>
  <div class="qc-arr">→</div>
  <div class="qc-node">
    <strong>🏅 Rank</strong>
    <span>Condizioni del livello</span>
  </div>
</div>

<p class="qc-lead">
  Il materiale ricevuto
  non specifica completamente
  la periodicità della riconferma
  delle qualifiche,
  la gestione dei punti
  in caso di mancato rinnovo
  e l'eventuale distinzione
  tra rank storico
  e rank commissionabile.
  <br><br>
  Questi elementi vanno verificati
  nelle condizioni ufficiali,
  senza considerare una qualifica
  automaticamente permanente.
</p>

<!-- FAQ -->

<h3 class="qc-title">
  ❓ 14. Domande frequenti
</h3>

<details>
  <summary>🥈 Tre Elite o Turbo bastano per Silver?</summary>
  <div>
    Tre membership idonee generano
    18 punti Dual Team.
    <br><br>
    Il rank richiede comunque
    la verifica di tutti
    i requisiti previsti
    dal piano.
  </div>
</details>

<details>
  <summary>🥇 Se i miei tre diretti diventano Silver, io divento Gold?</summary>
  <div>
    Il materiale formativo
    propone questo percorso
    come modello di crescita.
    <br><br>
    La qualifica Gold
    non deve essere considerata
    automatica senza controllare
    la struttura e
    gli altri requisiti.
  </div>
</details>

<details>
  <summary>⚖️ Sponsorizzazione e posizionamento sono la stessa cosa?</summary>
  <div>
    No.
    <br><br>
    La sponsorizzazione indica
    chi ha iscritto direttamente
    un nuovo Ambassador.
    <br><br>
    Il posizionamento indica
    dove viene collocato
    nella struttura Dual Team.
  </div>
</details>

<details>
  <summary>🌧️ Lo spillover è garantito?</summary>
  <div>
    No. Dipende dall'attività
    e dai posizionamenti
    della linea superiore.
    <br><br>
    Non può essere considerato
    una fonte di produzione garantita.
  </div>
</details>

<details>
  <summary>💰 Gold garantisce $300 ogni mese?</summary>
  <div>
    No. Il piano riporta
    un livello di bonus
    da $300 mensili,
    ma deve essere maturato
    secondo tutte le condizioni.
  </div>
</details>

<!-- QUIZ -->

<h3 class="qc-title">
  🧠 15. Mettiti alla prova
</h3>

<div class="qc-quiz">
  <span class="qc-kicker">DOMANDA 01</span>
  <h4>Qual è la differenza tra Team di Sponsorizzazione e Dual Team?</h4>
  <p>A. Nessuna</p>
  <p>B. Uno descrive chi sponsorizza chi, l'altro il posizionamento nella rete</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Sponsorizzazione e posizionamento
      sono due relazioni diverse.
    </div>
  </details>
</div>

<div class="qc-quiz">
  <span class="qc-kicker">DOMANDA 02</span>
  <h4>Quanti punti Dual Team genera una membership Elite?</h4>
  <p>A. 1 punto</p>
  <p>B. 6 punti</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. 6 punti.</strong>
    </div>
  </details>
</div>

<div class="qc-quiz">
  <span class="qc-kicker">DOMANDA 03</span>
  <h4>Da quale rank il materiale indica la regola del 50%?</h4>
  <p>A. Silver</p>
  <p>B. Platinum</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. Platinum.</strong>
      La regola specifica
      va verificata
      nel piano ufficiale.
    </div>
  </details>
</div>

<div class="qc-quiz">
  <span class="qc-kicker">DOMANDA 04</span>
  <h4>Qual è la finestra iniziale indicata per il posizionamento?</h4>
  <p>A. 7 giorni</p>
  <p>B. 30 giorni</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. 30 giorni.</strong>
      È il periodo riportato
      nel materiale ricevuto.
    </div>
  </details>
</div>

<div class="qc-quiz">
  <span class="qc-kicker">DOMANDA 05</span>
  <h4>72 punti totali garantiscono automaticamente Gold?</h4>
  <p>A. Sì</p>
  <p>B. No</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. No.</strong>
      Occorre rispettare
      anche gli altri requisiti.
    </div>
  </details>
</div>

<div class="qc-quiz">
  <span class="qc-kicker">DOMANDA 06</span>
  <h4>400 punti della gamba debole equivalgono automaticamente a $80?</h4>
  <p>A. Sì</p>
  <p>B. No, serve la formula ufficiale</p>
  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Non è possibile convertire
      direttamente i punti in dollari
      senza conoscere il calcolo ufficiale.
    </div>
  </details>
</div>

<!-- CONCLUSIONE -->

<h3 class="qc-title">
  🎯 Il concetto da ricordare
</h3>

<div class="qc-final">
  <h4>🏆 La carriera è un percorso di crescita</h4>

  <p>
    Le qualifiche MWR Life
    rappresentano diversi
    livelli di sviluppo
    dell'organizzazione.
    <br><br>
    Per avanzare è importante
    comprendere il Dual Team,
    i punti, la sponsorizzazione
    e il posizionamento
    della propria rete.
    <br><br>
    <strong>
      Il punteggio complessivo
      non basta da solo
      a dimostrare il rank.
    </strong>
    <br><br>
    La crescita del team
    deve basarsi sulla formazione,
    su clienti realmente interessati
    e sul mantenimento
    delle condizioni previste.
  </p>
</div>

<div class="qc-note">
  <strong>📚 Fonti del capitolo</strong>
  <br>
  Le qualifiche, i punti
  e le informazioni sul Dual Team
  derivano dal riepilogo
  dell'IA di Paolo fornito
  per la formazione.
  <br><br>
  Le indicazioni sui ruoli
  sono riferite al materiale
  formativo del team.
  <br><br>
  Prima di utilizzare
  cifre, premi e requisiti
  come dichiarazioni ufficiali
  occorre confrontarli
  con il piano MWR Life vigente.
</div>

</div>
</section>
`);
