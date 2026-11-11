
window.registraSezione("guest", `
<section class="section" id="guest" data-group="viaggi">

<style>
#guest .gp-title {
  font-size:24px;
  color:#09243d;
  margin:35px 0 16px;
}
#guest .gp-intro {
  color:#536d7d;
  font-size:15px;
  line-height:1.8;
  margin:12px 0 22px;
}
#guest .gp-kicker {
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
#guest .gp-hero {
  display:grid;
  grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);
  gap:24px;
  align-items:center;
  margin-bottom:30px;
}
#guest .gp-hero .gp-title { margin:15px 0; }
#guest .gp-art {
  background:linear-gradient(135deg,#073652,#128da1);
  border-radius:22px;
  padding:26px 20px;
  color:white;
  text-align:center;
  overflow:hidden;
}
#guest .gp-ticket {
  max-width:270px;
  margin:5px auto 20px;
  background:linear-gradient(145deg,#ffffff,#e5f7fb);
  border-radius:17px;
  padding:25px 15px;
  color:#12405c;
  border:2px dashed #a6d5dc;
  box-shadow:0 15px 26px #03243b55;
  transform:rotate(-3deg);
}
#guest .gp-ticket .big {
  display:block;
  font-size:43px;
  margin-bottom:8px;
}
#guest .gp-ticket strong {
  display:block;
  font-size:23px;
  letter-spacing:.06em;
}
#guest .gp-ticket small {
  display:block;
  color:#618595;
  font-size:12px;
  margin-top:10px;
}
#guest .gp-art p {
  color:#def6f8;
  font-size:13px;
  line-height:1.8;
}
#guest .gp-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#guest .gp-two {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:15px;
  margin:20px 0;
}
#guest .gp-card {
  background:#f4f9fc;
  border:1px solid #e0ebf0;
  border-radius:18px;
  padding:21px;
  min-width:0;
}
#guest .gp-card.blue {
  background:#eef7ff;
  border-color:#cfe5f7;
}
#guest .gp-card.green {
  background:#eefaf5;
  border-color:#d0ecde;
}
#guest .gp-card.gold {
  background:#fff8e8;
  border-color:#f1e2bc;
}
#guest .gp-card.purple {
  background:#f6f0ff;
  border-color:#e4d8fa;
}
#guest .gp-card h4 {
  color:#173a55;
  font-size:18px;
  margin:9px 0;
}
#guest .gp-card p {
  color:#526d7e;
  font-size:13px;
  line-height:1.8;
  margin:8px 0;
}
#guest .gp-icon {
  font-size:31px;
  display:block;
  margin-bottom:10px;
}
#guest .gp-number {
  font-size:31px;
  font-weight:850;
  color:#147e9c;
  line-height:1.3;
}
#guest .gp-number small {
  font-size:12px;
  font-weight:600;
  color:#718795;
}
#guest .gp-pill {
  display:inline-block;
  background:#ffffffba;
  border-radius:22px;
  padding:6px 11px;
  font-size:11px;
  font-weight:800;
  color:#31566d;
}
#guest .gp-flow {
  display:flex;
  gap:9px;
  align-items:stretch;
  margin:23px 0;
}
#guest .gp-flow-item {
  flex:1;
  min-width:0;
  padding:17px 12px;
  background:#ecf7fa;
  border:1px solid #d4e9ef;
  border-radius:14px;
  text-align:center;
}
#guest .gp-flow-item b {
  display:block;
  font-size:14px;
  color:#164b67;
  margin-bottom:8px;
}
#guest .gp-flow-item span {
  font-size:12px;
  line-height:1.7;
  color:#567282;
}
#guest .gp-arrow {
  align-self:center;
  color:#1299a6;
  font-size:23px;
  font-weight:800;
}
#guest .gp-note {
  background:#eaf8f5;
  border-left:4px solid #19a998;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  color:#315b57;
  font-size:13px;
  line-height:1.8;
}
#guest .gp-warning {
  background:#fff8e9;
  border-left:4px solid #d5a545;
  border-radius:11px;
  padding:18px;
  margin:20px 0;
  color:#745d32;
  font-size:13px;
  line-height:1.8;
}
#guest .gp-comparison {
  overflow-x:auto;
  border:1px solid #dce8ef;
  border-radius:15px;
  margin:23px 0;
}
#guest .gp-comparison table {
  width:100%;
  min-width:560px;
  border-collapse:collapse;
}
#guest .gp-comparison th {
  background:#123650;
  color:white;
  font-size:13px;
  text-align:center;
  padding:15px 12px;
}
#guest .gp-comparison td {
  padding:14px 12px;
  border-bottom:1px solid #e2eaf0;
  color:#36586e;
  font-size:12px;
  text-align:center;
  line-height:1.6;
}
#guest .gp-comparison td:first-child,
#guest .gp-comparison th:first-child {
  text-align:left;
}
#guest .gp-comparison td:first-child {
  font-weight:750;
  color:#153a54;
}
#guest .gp-comparison tr:nth-child(even) td {
  background:#f4f8fb;
}
#guest .gp-comparison tr:last-child td {
  border-bottom:0;
}
#guest .gp-script {
  border-radius:17px;
  border:1px solid #dce8ef;
  padding:22px;
  background:#f5f9fc;
  margin:20px 0;
}
#guest .gp-script h4 {
  font-size:18px;
  color:#173a55;
  margin:7px 0 12px;
}
#guest .gp-message {
  background:white;
  border-left:4px solid #20a58d;
  border-radius:13px;
  padding:19px;
  color:#31536b;
  line-height:1.85;
  font-size:14px;
  white-space:pre-line;
}
#guest .gp-copy {
  display:inline-flex;
  align-items:center;
  gap:7px;
  background:#0d7f87;
  color:white;
  border:0;
  border-radius:25px;
  padding:10px 17px;
  font-size:12px;
  font-weight:750;
  cursor:pointer;
  margin-top:14px;
}
#guest .gp-copy:hover { background:#075d65; }
#guest .gp-step {
  display:flex;
  gap:15px;
  padding:17px 0;
  border-bottom:1px solid #e1eaf0;
  align-items:flex-start;
}
#guest .gp-step:last-child { border-bottom:0; }
#guest .gp-step-num {
  width:35px;
  height:35px;
  min-width:35px;
  border-radius:50%;
  background:#0d7e95;
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:800;
}
#guest .gp-step-content {
  flex:1;
  min-width:0;
}
#guest .gp-step-content b {
  color:#153a54;
  font-size:15px;
}
#guest .gp-step-content p {
  color:#536d7d;
  font-size:13px;
  line-height:1.8;
  margin:6px 0;
}
#guest .gp-quiz {
  background:#f6f0ff;
  border:1px solid #e7dafb;
  border-radius:17px;
  padding:22px;
  margin:18px 0;
}
#guest .gp-quiz h4 {
  font-size:17px;
  color:#253453;
  margin:10px 0;
}
#guest .gp-quiz p {
  color:#5c637e;
  line-height:1.8;
  font-size:13px;
  margin:6px 0;
}
#guest .gp-quiz details {
  background:white;
  border-radius:12px;
  padding:12px;
  margin-top:13px;
}
#guest .gp-summary {
  background:linear-gradient(135deg,#0c3557,#117d91);
  border-radius:18px;
  padding:25px;
  margin:23px 0;
  color:white;
}
#guest .gp-summary h4 {
  color:white;
  font-size:21px;
  margin:0 0 12px;
}
#guest .gp-summary p {
  color:#e0f5f6;
  line-height:1.85;
  font-size:14px;
}
@media(max-width:850px) {
  #guest .gp-grid {
    grid-template-columns:1fr;
  }
}
@media(max-width:700px) {
  #guest .gp-hero,
  #guest .gp-two {
    grid-template-columns:1fr;
  }
  #guest .gp-flow {
    flex-direction:column;
  }
  #guest .gp-arrow {
    transform:rotate(90deg);
  }
}
@media(max-width:600px) {
  #guest .gp-title { font-size:21px; }
}
</style>

<!-- INTESTAZIONE -->

<div class="section-head">
  <span class="kicker">
    Capitolo 05 · Condividi i vantaggi
  </span>
  <h2>Guest Pass</h2>
  <p>
    Il pass gratuito per far conoscere
    Travel Advantage.
    Scopri come funziona,
    come regalarlo e come può
    generare Crediti Viaggio
    o commissioni.
  </p>
</div>

<div class="section-body">

<!-- INTRODUZIONE -->

<div class="gp-hero">

  <div>
    <span class="gp-kicker">Partiamo dalle basi</span>
    <h3 class="gp-title">
      🎁 Che cos'è un Guest Pass?
    </h3>
    <p class="gp-intro">
      Il <strong>Guest Pass</strong>
      è un pass di accesso gratuito
      a Travel Advantage,
      pensato per permettere
      ad amici e conoscenti
      di scoprire la piattaforma
      e provare le tariffe
      riservate sugli hotel.
      <br><br>
      Non serve attivare
      un abbonamento a pagamento
      per ricevere il pass.
    </p>

    <div class="gp-note">
      <strong>🎉 Tre vantaggi immediati</strong>
      <br>
      ✅ Completamente gratuito.
      <br>
      ✅ Nessuna carta di credito richiesta.
      <br>
      ✅ Account ospite senza scadenza.
    </div>
  </div>

  <div class="gp-art">
    <div class="gp-ticket">
      <span class="big">🎟️</span>
      <strong>GUEST PASS</strong>
      <small>TRAVEL ADVANTAGE</small>
      <hr style="border:0;border-top:1px dashed #9cbcc6;margin:17px 0">
      <div style="font-size:28px;font-weight:850;color:#0d8892">
        GRATIS
      </div>
      <small>Il tuo accesso al mondo dei viaggi</small>
    </div>

    <p>
      🎁 Regala il pass<br>
      🔎 Scopri le tariffe hotel<br>
      🏨 Prenota il tuo primo soggiorno
    </p>
  </div>

</div>

<!-- CARATTERISTICHE -->

<h3 class="gp-title">
  🌍 1. Che cosa può fare un ospite?
</h3>

<div class="gp-grid">

  <div class="gp-card green">
    <span class="gp-icon">♾️</span>
    <h4>Accesso gratuito a vita</h4>
    <p>
      L'attivazione è gratuita,
      non richiede carta di credito
      e l'account ospite
      non ha una scadenza temporale.
    </p>
  </div>

  <div class="gp-card blue">
    <span class="gp-icon">🏷️</span>
    <h4>Tariffe hotel riservate</h4>
    <p>
      L'ospite può vedere
      le stesse tariffe hotel
      disponibili ai membri
      VIP ed Elite.
      <br><br>
      Non sono inclusi
      gli sconti aggiuntivi Turbo
      e l'utilizzo dei Punti Fedeltà.
    </p>
  </div>

  <div class="gp-card gold">
    <span class="gp-icon">🏨</span>
    <h4>Una prenotazione</h4>
    <p>
      Il pass permette
      di effettuare
      <strong>1 sola prenotazione
      hotel per un massimo
      di 2 notti</strong>.
      <br><br>
      Le altre categorie
      possono essere esplorate,
      ma non prenotate
      con il solo Guest Pass.
    </p>
  </div>

</div>

<div class="gp-warning">
  <strong>⚠️ Gratis non significa soggiorno gratuito</strong>
  <br>
  Il Guest Pass permette
  di accedere gratuitamente
  alle tariffe riservate.
  Il costo della camera
  rimane a carico dell'ospite.
</div>

<!-- LIMITI -->


<!-- CONFRONTO GUEST PASS E VIP -->

<h3 class="gp-title">
  ⚖️ Guest Pass e VIP: gli sconti sono uguali?
</h3>

<div class="gp-note">
  <strong>✅ Sì! Le tariffe base degli hotel sono le stesse.</strong>
  <br><br>
  Con un Guest Pass puoi visualizzare
  le stesse tariffe hotel riservate
  ai membri VIP ed Elite.
  <br><br>
  La differenza non è nello sconto base,
  ma nella libertà di utilizzo
  e nei servizi disponibili.
  Non sono inclusi gli extra sconti Turbo.
</div>

<div class="gp-comparison">
  <table>
    <thead>
      <tr>
        <th>Caratteristica</th>
        <th>🎁 Guest Pass</th>
        <th>🌊 VIP</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Sconti base sugli hotel</td>
        <td>✅ Uguali</td>
        <td>✅ Uguali</td>
      </tr>
      <tr>
        <td>Prenotazioni hotel</td>
        <td>1 sola</td>
        <td>Illimitate</td>
      </tr>
      <tr>
        <td>Durata soggiorno</td>
        <td>Massimo 2 notti</td>
        <td>Senza limite Guest Pass</td>
      </tr>
      <tr>
        <td>Servizi prenotabili</td>
        <td>Solo hotel</td>
        <td>9 servizi</td>
      </tr>
      <tr>
        <td>Utenti Aggiuntivi</td>
        <td>0</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Punti Fedeltà</td>
        <td>Non previsti</td>
        <td>20 al mese, bloccati</td>
      </tr>
      <tr>
        <td>Costo</td>
        <td>Gratuito</td>
        <td>$19.97 al mese</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="gp-card green">
  <span class="gp-icon">🏨</span>
  <h4>🧩 Esempio pratico</h4>
  <p>
    Un hotel offre una camera
    a <strong>150 €</strong> sulla piattaforma,
    con le stesse date e condizioni.
    <br><br>
    Il titolare di un Guest Pass
    e un abbonato VIP
    vedono la stessa tariffa base.
    <br><br>
    La differenza è che il Guest Pass
    permette una sola prenotazione
    fino a 2 notti, mentre VIP
    permette di prenotare nuovamente
    e di utilizzare anche gli altri
    servizi inclusi nella membership.
  </p>
</div>


<h3 class="gp-title">
  🔒 2. I limiti del Guest Pass
</h3>

<div class="gp-two">

  <div class="gp-card green">
    <span class="gp-icon">✅</span>
    <h4>Che cosa è consentito?</h4>
    <p>
      ✅ Registrarsi gratuitamente.
      <br>
      ✅ Consultare le tariffe hotel.
      <br>
      ✅ Confrontare i prezzi.
      <br>
      ✅ Effettuare una prenotazione
      hotel fino a 2 notti.
    </p>
  </div>

  <div class="gp-card">
    <span class="gp-icon">🚫</span>
    <h4>Che cosa non è incluso?</h4>
    <p>
      ❌ Più di una prenotazione.
      <br>
      ❌ Soggiorni oltre 2 notti.
      <br>
      ❌ Prenotazione delle altre
      categorie di servizi.
      <br>
      ❌ Extra sconto Turbo.
      <br>
      ❌ Utilizzo dei Punti Fedeltà.
    </p>
  </div>

</div>

<!-- BLOCCO TRE NOTTI -->

<h3 class="gp-title">
  🔓 3. Che cosa succede se cerco 3 notti?
</h3>

<p class="gp-intro">
  Il limite delle 2 notti
  permette all'ospite
  di provare il servizio.
  Se desidera prenotare
  un soggiorno più lungo,
  può valutare il passaggio
  a una membership a pagamento.
</p>

<div class="gp-flow">

  <div class="gp-flow-item">
    <b>🔎 Ricerca hotel</b>
    <span>
      L'ospite cerca
      un soggiorno
      di 3 o più notti.
    </span>
  </div>

  <div class="gp-arrow">→</div>

  <div class="gp-flow-item">
    <b>🔒 Limite Guest Pass</b>
    <span>
      La piattaforma
      segnala che la durata
      supera il limite gratuito.
    </span>
  </div>

  <div class="gp-arrow">→</div>

  <div class="gp-flow-item">
    <b>💡 Proposta di upgrade</b>
    <span>
      Viene mostrata
      la possibilità
      di attivare VIP
      per sbloccare
      la prenotazione.
    </span>
  </div>

</div>

<div class="gp-card gold">

  <span class="gp-pill">🧩 ESEMPIO PRATICO</span>

  <h4>
    Un weekend lungo di 3 notti
  </h4>

  <p>
    Una persona cerca un hotel
    per 3 notti.
    Il Guest Pass permette
    di prenotarne al massimo 2.
    <br><br>
    La piattaforma può mostrare
    un messaggio con il risparmio
    potenziale ottenibile
    attivando VIP.
    <br><br>
    Per esempio:
    <strong>115 € di risparmio
    potenziale</strong> su una ricerca,
    con possibilità di attivare
    VIP da <strong>19,97 $ al mese</strong>.
  </p>

</div>

<div class="gp-note">
  <strong>🎯 Perché è utile?</strong>
  <br>
  L'ospite può confrontare
  il prezzo del soggiorno
  e il costo della membership
  prima di scegliere se abbonarsi.
  <br><br>
  Il risparmio mostrato
  dipende dalla ricerca:
  non tutte le prenotazioni
  garantiscono lo stesso vantaggio.
</div>

<!-- PREMI -->

<h3 class="gp-title">
  💰 4. Come si ottengono Crediti Viaggio
  o commissioni?
</h3>

<p class="gp-intro">
  Quando una persona
  che ha ricevuto il Guest Pass
  decide di attivare
  una membership a pagamento,
  può generare un premio
  per chi le ha regalato il pass.
  <br><br>
  Il tipo di premio dipende
  dal ruolo del mittente.
</p>

<div class="gp-two">

  <div class="gp-card green">
    <span class="gp-icon">🧳</span>
    <h4>Se sei un cliente Travel Advantage</h4>
    <p>
      Puoi ricevere
      <strong>20 $, 40 $ oppure 80 $
      in Crediti Viaggio</strong>,
      a seconda dell'abbonamento
      attivato dalla persona invitata.
      <br><br>
      I crediti vengono
      aggiunti al tuo saldo
      e possono essere utilizzati
      per i tuoi viaggi.
    </p>
  </div>

  <div class="gp-card gold">
    <span class="gp-icon">💼</span>
    <h4>Se sei un Ambassador</h4>
    <p>
      La conversione può generare
      una <strong>commissione diretta
      di 20 $, 40 $ oppure 80 $</strong>,
      chiamata Member Bonus.
      <br><br>
      Inoltre, viene riconosciuto
      <strong>1 o 6 punto
      per le qualifiche di rete</strong>,
      secondo le regole
      del piano compensi.
    </p>
  </div>

</div>

<div class="gp-grid">

  <div class="gp-card green" style="text-align:center">
    <span class="gp-icon">💵</span>
    <div class="gp-number">20 $</div>
    <p>Premio di conversione previsto</p>
  </div>

  <div class="gp-card green" style="text-align:center">
    <span class="gp-icon">💵</span>
    <div class="gp-number">40 $</div>
    <p>Premio di conversione previsto</p>
  </div>

  <div class="gp-card green" style="text-align:center">
    <span class="gp-icon">💵</span>
    <div class="gp-number">80 $</div>
    <p>Premio di conversione previsto</p>
  </div>

</div>

<div class="gp-warning">
  <strong>⚠️ Quando si genera il premio?</strong>
  <br>
  Non basta inviare un pass
  e non basta che la persona
  crei un account gratuito.
  <br><br>
  Il premio è collegato
  alla conversione in
  un abbonamento a pagamento,
  con le condizioni previste
  dal programma.
  <br><br>
  L'importo dipende
  dalla membership scelta.
</div>

<!-- DOTAZIONI -->

<h3 class="gp-title">
  🎟️ 5. Quanti Guest Pass ricevo?
</h3>

<div class="gp-comparison">
  <table>
    <thead>
      <tr>
        <th>Abbonamento</th>
        <th>Subito</th>
        <th>Rinnovi</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>VIP mensile</td>
        <td>15 pass</td>
        <td>+3 ogni mese</td>
      </tr>

      <tr>
        <td>VIP semestrale</td>
        <td>25 pass</td>
        <td>+25 ogni 6 mesi</td>
      </tr>

      <tr>
        <td>Elite</td>
        <td>50 pass</td>
        <td>+20 ogni mese</td>
      </tr>

      <tr>
        <td>Elite Turbo</td>
        <td>1.500 pass</td>
        <td>+20 ogni mese</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="gp-two">

  <div class="gp-card green">
    <span class="gp-icon">🏨</span>
    <h4>Bonus prenotazione hotel</h4>
    <div class="gp-number">+3 pass</div>
    <p>
      Ogni prenotazione hotel
      effettuata da un membro
      VIP, Elite o Turbo
      genera automaticamente
      <strong>3 Guest Pass extra</strong>.
    </p>
  </div>

  <div class="gp-card purple">
    <span class="gp-icon">🚀</span>
    <h4>Bonus Turbo</h4>
    <div class="gp-number">1.500 pass</div>
    <p>
      L'upgrade Turbo
      riconosce una dotazione
      iniziale di 1.500 pass,
      dal valore commerciale
      indicato di <strong>300 $</strong>.
    </p>
  </div>

</div>

<details>
  <summary>
    🛒 Posso acquistare altri Guest Pass?
  </summary>
  <div>
    Sono previsti pacchetti
    aggiuntivi per attività
    e campagne di distribuzione.
    <br><br>
    Un esempio di pacchetto
    è <strong>500 Guest Pass
    a 99 $</strong>.
    <br><br>
    È una possibilità
    da valutare soprattutto
    quando si prevede
    di distribuirne molti,
    ad esempio attraverso
    attività commerciali.
  </div>
</details>

<!-- DISTRIBUZIONE -->

<h3 class="gp-title">
  📲 6. Come regalo un Guest Pass?
</h3>

<div class="gp-grid">

  <div class="gp-card blue">
    <span class="gp-icon">🔗</span>
    <h4>Link personale</h4>
    <p>
      Puoi condividere
      il tuo link di invito
      tramite WhatsApp,
      messaggio privato
      o altri canali.
      <br><br>
      Il collegamento porta
      alla pagina di registrazione
      dell'ospite, con il video
      di presentazione previsto.
    </p>
  </div>

  <div class="gp-card green">
    <span class="gp-icon">📱</span>
    <h4>QR Code</h4>
    <p>
      Dall'app mobile,
      attraverso la funzione
      <strong>Invita Membro</strong>,
      puoi mostrare un QR Code.
      <br><br>
      La persona lo scansiona
      con il telefono
      e accede alla procedura
      di attivazione del pass.
    </p>
  </div>

  <div class="gp-card gold">
    <span class="gp-icon">🎫</span>
    <h4>Voucher cartaceo</h4>
    <p>
      Puoi stampare
      un pass in formato PDF
      e consegnarlo a mano.
      <br><br>
      Ogni voucher contiene
      un codice univoco
      da riscattare
      sul portale
      <strong>guestmember.com</strong>.
    </p>
  </div>

</div>

<div class="gp-note">
  <strong>📌 Qual è la modalità migliore?</strong>
  <br>
  Con amici e conoscenti,
  WhatsApp è comodo perché
  permette di accompagnare
  il link con un messaggio personale.
  <br><br>
  Per negozi e attività commerciali,
  QR Code e voucher cartacei
  permettono una distribuzione
  più semplice.
</div>

<!-- ATTIVAZIONE -->

<h3 class="gp-title">
  🔐 7. Come si attiva il pass?
</h3>

<div class="gp-card">

  <div class="gp-step">
    <div class="gp-step-num">1</div>
    <div class="gp-step-content">
      <b>Ricevi il link, il QR Code o il voucher</b>
      <p>
        La persona apre
        la pagina di attivazione
        collegata al pass.
      </p>
    </div>
  </div>

  <div class="gp-step">
    <div class="gp-step-num">2</div>
    <div class="gp-step-content">
      <b>Inserisce i dati richiesti</b>
      <p>
        Completa la registrazione
        gratuita con la propria email.
        Non è richiesta
        una carta di credito.
      </p>
    </div>
  </div>

  <div class="gp-step">
    <div class="gp-step-num">3</div>
    <div class="gp-step-content">
      <b>Verifica l'email</b>
      <p>
        Se viene inviato
        un codice OTP,
        lo inserisce
        nella schermata di conferma.
      </p>
    </div>
  </div>

  <div class="gp-step">
    <div class="gp-step-num">4</div>
    <div class="gp-step-content">
      <b>Accede alla piattaforma</b>
      <p>
        Una volta completata
        la registrazione,
        può esplorare le tariffe
        e utilizzare il proprio
        accesso ospite.
      </p>
    </div>
  </div>

</div>

<div class="gp-warning">
  <strong>🛠️ Problema frequente con l'OTP</strong>
  <br>
  Se il sistema presenta
  più caselle per il codice,
  prova a copiare
  l'intero OTP ricevuto via email
  e incollarlo direttamente
  nella prima casella.
  <br><br>
  Se non funziona,
  verifica che il codice
  non sia scaduto
  e richiedine uno nuovo.
</div>

<!-- MARKETING -->

<h3 class="gp-title">
  🎯 8. Strategie per distribuire i pass
</h3>

<div class="gp-grid">

  <div class="gp-card blue">
    <span class="gp-icon">🎁</span>
    <h4>Regalo spontaneo</h4>
    <p>
      Regala il pass
      a persone che conosci
      e che amano viaggiare.
      <br><br>
      Presentalo come
      una possibilità gratuita
      di confrontare
      le tariffe degli hotel.
    </p>
  </div>

  <div class="gp-card green">
    <span class="gp-icon">✈️</span>
    <h4>Viaggio imminente</h4>
    <p>
      Quando una persona
      sta organizzando
      un weekend,
      puoi proporle
      il Guest Pass
      per verificare
      le tariffe prima
      di prenotare.
    </p>
  </div>

  <div class="gp-card gold">
    <span class="gp-icon">🤝</span>
    <h4>Alternativa all'abbonamento</h4>
    <p>
      Una persona non vuole
      attivare una membership?
      <br><br>
      Puoi offrirle
      il Guest Pass
      per conoscere
      il servizio gratuitamente,
      senza obbligo di acquisto.
    </p>
  </div>

</div>

<!-- B2B -->

<h3 class="gp-title">
  🏪 9. Guest Pass nelle attività commerciali
</h3>

<p class="gp-intro">
  I Guest Pass possono essere utilizzati
  anche da negozi e attività locali
  come iniziativa promozionale
  o regalo ai propri clienti.
</p>

<div class="gp-two">

  <div class="gp-card gold">
    <span class="gp-icon">💇</span>
    <h4>Parrucchieri e centri estetici</h4>
    <p>
      Il negozio può regalare
      un Guest Pass
      ai clienti che raggiungono
      una determinata spesa.
      <br><br>
      <strong>Esempio:</strong>
      spendi 100 €
      o acquista 3 trattamenti
      e ricevi un pass
      gratuito per accedere
      alle tariffe hotel riservate.
    </p>
  </div>

  <div class="gp-card blue">
    <span class="gp-icon">🏡</span>
    <h4>B&B e strutture ricettive</h4>
    <p>
      Un B&B può posizionare
      un cartello con QR Code
      sul comodino, alla reception
      o nell'area comune.
      <br><br>
      Gli ospiti possono
      scansionarlo e attivare
      il proprio Guest Pass
      gratuitamente.
    </p>
  </div>

  <div class="gp-card green">
    <span class="gp-icon">🛍️</span>
    <h4>Boutique e negozi</h4>
    <p>
      Il pass può essere
      consegnato come omaggio
      dopo una spesa minima
      oppure insieme
      a un acquisto speciale.
      <br><br>
      Non richiede
      di abbassare direttamente
      il prezzo dei prodotti.
    </p>
  </div>

  <div class="gp-card purple">
    <span class="gp-icon">🏋️</span>
    <h4>Palestre e altre attività</h4>
    <p>
      I pass possono diventare
      un regalo per nuovi iscritti,
      clienti abituali
      o partecipanti
      a iniziative promozionali.
    </p>
  </div>

</div>

<div class="gp-note">
  <strong>💡 Esempio di cartello con QR Code</strong>
  <br><br>
  <strong>
    🎁 Un regalo per il tuo prossimo weekend!
  </strong>
  <br>
  Scansiona il QR Code
  e attiva gratuitamente
  il tuo Guest Pass Travel Advantage.
  <br><br>
  Potrai confrontare
  tariffe hotel riservate
  e prenotare un soggiorno
  fino a 2 notti.
  Nessuna carta di credito
  richiesta per attivare il pass.
</div>

<!-- BUSINESS -->

<h3 class="gp-title">
  📊 10. Esempio di campagna con 500 pass
</h3>

<div class="gp-grid">

  <div class="gp-card blue" style="text-align:center">
    <span class="gp-icon">🎟️</span>
    <div class="gp-number">500</div>
    <h4>Guest Pass</h4>
    <p>
      Quantità di pass
      acquistata per la campagna.
    </p>
  </div>

  <div class="gp-card gold" style="text-align:center">
    <span class="gp-icon">💳</span>
    <div class="gp-number">99 $</div>
    <h4>Costo del pacchetto</h4>
    <p>
      Esempio di costo
      per 500 pass aggiuntivi.
    </p>
  </div>

  <div class="gp-card green" style="text-align:center">
    <span class="gp-icon">📈</span>
    <div class="gp-number">1%</div>
    <h4>Conversione ipotetica</h4>
    <p>
      5 persone su 500
      attivano una membership.
    </p>
  </div>

</div>

<div class="gp-card green">
  <h4>🧮 Facciamo i conti</h4>
  <p>
    Se 5 persone effettuano
    una conversione
    che riconosce 20 $
    ciascuna:
    <br><br>
    <strong>5 × 20 $ = 100 $</strong>
    <br><br>
    Rispetto a un costo
    di acquisto di 99 $,
    il premio lordo ipotetico
    è superiore di 1 $.
  </p>
</div>

<div class="gp-warning">
  <strong>⚠️ Come valutare questo esempio</strong>
  <br>
  È una simulazione matematica,
  non una previsione di guadagno.
  <br><br>
  Non comprende altri costi,
  eventuali imposte,
  mancati utilizzi dei pass
  o condizioni specifiche
  per il riconoscimento dei premi.
  Le conversioni non sono garantite.
</div>

<!-- CRM -->

<h3 class="gp-title">
  🗂️ 11. Come gestire i contatti Guest Pass
</h3>

<p class="gp-intro">
  Il Guest Pass è utile anche
  per costruire nel tempo
  una rete di persone
  interessate ai viaggi.
  <br><br>
  Quando un pass viene attivato,
  il sistema può inviare
  una notifica email
  e registrare nome
  ed email del contatto
  nel pannello aziendale.
</p>

<div class="gp-flow">

  <div class="gp-flow-item">
    <b>🎟️ Attivazione</b>
    <span>
      Il contatto
      attiva il Guest Pass.
    </span>
  </div>

  <div class="gp-arrow">→</div>

  <div class="gp-flow-item">
    <b>📩 Notifica</b>
    <span>
      Ricevi l'avviso
      e trovi il contatto
      nel pannello.
    </span>
  </div>

  <div class="gp-arrow">→</div>

  <div class="gp-flow-item">
    <b>🤝 Supporto</b>
    <span>
      Aiuti la persona
      a conoscere
      il servizio.
    </span>
  </div>

  <div class="gp-arrow">→</div>

  <div class="gp-flow-item">
    <b>📅 Follow-up</b>
    <span>
      Mantieni il contatto
      quando è utile
      e desiderato.
    </span>
  </div>

</div>

<div class="gp-card">

  <div class="gp-step">
    <div class="gp-step-num">1</div>
    <div class="gp-step-content">
      <b>Benvenuto entro 24–48 ore</b>
      <p>
        Verifica che la persona
        abbia completato
        correttamente la registrazione.
        Offri aiuto
        per effettuare
        le prime ricerche.
      </p>
    </div>
  </div>

  <div class="gp-step">
    <div class="gp-step-num">2</div>
    <div class="gp-step-content">
      <b>Capire le esigenze</b>
      <p>
        Se la persona è interessata,
        chiedile che tipo
        di viaggi organizza,
        quali destinazioni preferisce
        e se ha partenze in programma.
      </p>
    </div>
  </div>

  <div class="gp-step">
    <div class="gp-step-num">3</div>
    <div class="gp-step-content">
      <b>Follow-up ogni 2–3 mesi</b>
      <p>
        Con chi desidera
        ricevere aggiornamenti,
        puoi ricontattarti
        prima dei ponti,
        delle vacanze estive
        o delle festività natalizie.
      </p>
    </div>
  </div>

  <div class="gp-step">
    <div class="gp-step-num">4</div>
    <div class="gp-step-content">
      <b>Aiuto nell'eventuale upgrade</b>
      <p>
        Se la persona vuole
        prenotare più di 2 notti
        e ti chiede informazioni,
        puoi confrontare con lei
        il costo della membership
        e il risparmio disponibile.
      </p>
    </div>
  </div>

</div>

<div class="gp-warning">
  <strong>🔐 Rispetta sempre la privacy</strong>
  <br>
  La registrazione di un Guest Pass
  non significa automaticamente
  che la persona desideri ricevere
  messaggi promozionali periodici.
  <br><br>
  Usa i contatti secondo
  le autorizzazioni disponibili,
  chiedi il consenso quando necessario
  e rispetta sempre
  la volontà di non essere ricontattati.
</div>

<!-- SCRIPT -->

<h3 class="gp-title">
  💬 12. Messaggi pronti da inviare
</h3>

<p class="gp-intro">
  Il modo migliore di regalare
  un Guest Pass è proporlo
  con naturalezza,
  lasciando alla persona
  la possibilità di scegliere.
  <br><br>
  Ecco tre messaggi
  da personalizzare
  in base alla situazione.
</p>

<div class="gp-script">

  <span class="gp-pill">💚 MESSAGGIO 01</span>
  <h4>Il regalo spontaneo</h4>

  <div class="gp-message" id="gp-msg-1">Ciao [Nome]! 👋

So che ti piace viaggiare e fare qualche weekend fuori.

Ho a disposizione dei pass regalo per accedere a una piattaforma privata di viaggi con tariffe riservate sugli hotel.

Il pass è gratuito, non richiede una carta di credito e non ti impegna a fare un abbonamento.

Ho pensato a te! 😊

Ti va se ti mando il link per attivarlo?</div>

  <button class="gp-copy" type="button"
    onclick="navigator.clipboard.writeText(document.getElementById('gp-msg-1').innerText)">
    📋 Copia messaggio
  </button>

  <details>
    <summary>💡 Quando usarlo?</summary>
    <div>
      Con amici e conoscenti
      che amano viaggiare,
      senza che abbiano
      necessariamente
      una partenza programmata.
    </div>
  </details>

</div>

<div class="gp-script">

  <span class="gp-pill">✈️ MESSAGGIO 02</span>
  <h4>Il viaggio imminente</h4>

  <div class="gp-message" id="gp-msg-2">Ehi [Nome]! 😊

Ho visto che stai organizzando un viaggio a [Destinazione]!

Ho un pass gratuito per una piattaforma privata di prenotazione hotel.

Ti permette di confrontare le tariffe riservate e fare una prenotazione fino a 2 notti, senza dover attivare un abbonamento.

Se vuoi, ti mando il link e controlli se trovi qualcosa di conveniente per il tuo viaggio. ✈️</div>

  <button class="gp-copy" type="button"
    onclick="navigator.clipboard.writeText(document.getElementById('gp-msg-2').innerText)">
    📋 Copia messaggio
  </button>

  <details>
    <summary>💡 Quando usarlo?</summary>
    <div>
      Quando sai che una persona
      sta organizzando un weekend,
      ha pubblicato una storia
      su una partenza
      oppure ti ha parlato
      di un viaggio imminente.
    </div>
  </details>

</div>

<div class="gp-script">

  <span class="gp-pill">🤝 MESSAGGIO 03</span>
  <h4>Il test e l'opinione</h4>

  <div class="gp-message" id="gp-msg-3">Ciao [Nome]! 😊

Ti posso chiedere un piccolo favore?

Sto facendo conoscere una piattaforma privata di viaggi e mi piacerebbe sapere che cosa ne pensi.

Ho un pass gratuito che permette di confrontare le tariffe degli hotel e fare una prenotazione fino a 2 notti.

Ti andrebbe di provarlo e dirmi sinceramente se trovi prezzi interessanti rispetto ai siti che usi normalmente?

Se ti va ti mando il link, senza impegno! 😊</div>

  <button class="gp-copy" type="button"
    onclick="navigator.clipboard.writeText(document.getElementById('gp-msg-3').innerText)">
    📋 Copia messaggio
  </button>

  <details>
    <summary>💡 Quando usarlo?</summary>
    <div>
      Con una persona di cui
      apprezzi il parere,
      quando vuoi ricevere
      un'opinione sincera
      sulle tariffe
      e sull'esperienza di utilizzo.
    </div>
  </details>

</div>

<!-- REGOLE DI COMUNICAZIONE -->

<h3 class="gp-title">
  🗣️ 13. Le 3 regole per proporre bene un pass
</h3>

<div class="gp-grid">

  <div class="gp-card green">
    <span class="gp-icon">✋</span>
    <h4>1. Chiedi prima il permesso</h4>
    <p>
      Non inviare subito
      il link nel primo messaggio.
      <br><br>
      Prima spiega brevemente
      di che cosa si tratta
      e chiedi se la persona
      desidera riceverlo.
    </p>
  </div>

  <div class="gp-card blue">
    <span class="gp-icon">🔎</span>
    <h4>2. Spiega i limiti</h4>
    <p>
      Ricorda sempre
      che il pass permette
      una sola prenotazione hotel
      per un massimo di 2 notti.
      <br><br>
      La registrazione è gratuita,
      mentre il soggiorno
      è a pagamento.
    </p>
  </div>

  <div class="gp-card gold">
    <span class="gp-icon">🤝</span>
    <h4>3. Offri supporto</h4>
    <p>
      Aiuta la persona
      se incontra difficoltà
      nell'attivazione,
      nella verifica OTP
      o nella prima ricerca.
      <br><br>
      Non insistere
      se non è interessata.
    </p>
  </div>

</div>

<!-- ESEMPI DI FOLLOW-UP -->

<h3 class="gp-title">
  📅 14. Esempi di follow-up
</h3>

<details>
  <summary>👋 Messaggio di benvenuto</summary>
  <div>
    Ciao [Nome]! 😊
    <br><br>
    Volevo sapere se sei riuscito
    ad attivare il Guest Pass
    e ad accedere alla piattaforma.
    <br><br>
    Se hai qualche dubbio
    sulle ricerche degli hotel,
    scrivimi pure!
  </div>
</details>

<details>
  <summary>🌷 Messaggio prima di un ponte festivo</summary>
  <div>
    Ciao [Nome]! 😊
    <br><br>
    Tra poco c'è un ponte festivo
    e mi sono ricordata
    che avevi attivato
    il Guest Pass Travel Advantage.
    <br><br>
    Se stai organizzando
    un weekend,
    puoi dare un'occhiata
    alle tariffe degli hotel.
  </div>
</details>

<details>
  <summary>🏖️ Messaggio prima delle vacanze</summary>
  <div>
    Ciao [Nome]! ☀️
    <br><br>
    Come va?
    Volevo ricordarti
    che il tuo Guest Pass
    Travel Advantage
    è ancora attivo.
    <br><br>
    Se hai in programma
    un weekend fuori,
    puoi usarlo per confrontare
    le tariffe degli hotel.
  </div>
</details>

<details>
  <summary>🏨 Messaggio quando servono più di 2 notti</summary>
  <div>
    Ciao [Nome]! 😊
    <br><br>
    Con il Guest Pass
    puoi prenotare fino a 2 notti.
    <br><br>
    Se vuoi soggiornare più a lungo,
    possiamo confrontare il risparmio
    disponibile con il costo
    dell'abbonamento VIP.
    <br><br>
    Così puoi decidere
    se ti conviene davvero attivarlo.
  </div>
</details>

<!-- QUIZ -->

<h3 class="gp-title">
  🧠 15. Mettiti alla prova
</h3>

<div class="gp-quiz">
  <span class="gp-kicker">DOMANDA 01</span>
  <h4>
    Per attivare un Guest Pass
    bisogna inserire la carta di credito?
  </h4>
  <p>A. Sì</p>
  <p>B. No</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. No.</strong>
      L'attivazione è gratuita
      e non richiede una carta di credito.
    </div>
  </details>
</div>

<div class="gp-quiz">
  <span class="gp-kicker">DOMANDA 02</span>
  <h4>
    Quante notti posso prenotare
    con un Guest Pass?
  </h4>
  <p>A. Massimo 2 notti</p>
  <p>B. Massimo 7 notti</p>
  <p>C. Senza limiti</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>A.</strong>
      Una sola prenotazione hotel
      per un massimo di 2 notti.
    </div>
  </details>
</div>

<div class="gp-quiz">
  <span class="gp-kicker">DOMANDA 03</span>
  <h4>
    Un cliente VIP può ricevere
    Crediti Viaggio regalando Guest Pass?
  </h4>
  <p>A. No, soltanto gli Ambassador</p>
  <p>B. Sì, quando avviene una conversione idonea</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Può ricevere
      20 $, 40 $ o 80 $
      in Crediti Viaggio,
      a seconda della membership attivata.
    </div>
  </details>
</div>

<div class="gp-quiz">
  <span class="gp-kicker">DOMANDA 04</span>
  <h4>
    Quanti Guest Pass extra
    genera una prenotazione hotel
    di un membro?
  </h4>
  <p>A. 1</p>
  <p>B. 3</p>
  <p>C. 10</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B. 3 Guest Pass.</strong>
    </div>
  </details>
</div>

<div class="gp-quiz">
  <span class="gp-kicker">DOMANDA 05</span>
  <h4>
    Quale abbonamento
    offre 1.500 Guest Pass iniziali?
  </h4>
  <p>A. VIP</p>
  <p>B. Elite</p>
  <p>C. Turbo</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>C. Turbo.</strong>
      Include 1.500 pass iniziali
      e 20 pass ogni mese.
    </div>
  </details>
</div>

<div class="gp-quiz">
  <span class="gp-kicker">DOMANDA 06</span>
  <h4>
    Basta inviare un Guest Pass
    per ricevere una commissione?
  </h4>
  <p>A. Sì</p>
  <p>B. No, serve una conversione idonea</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      Il premio è collegato
      all'attivazione
      della membership a pagamento.
    </div>
  </details>
</div>

<div class="gp-quiz">
  <span class="gp-kicker">DOMANDA 07</span>
  <h4>
    Un Guest Pass permette
    di utilizzare l'extra sconto Turbo?
  </h4>
  <p>A. Sì</p>
  <p>B. No</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div>
      ✅ <strong>B.</strong>
      L'ospite vede le tariffe hotel
      riservate dei livelli VIP ed Elite,
      ma non riceve
      l'extra sconto Turbo.
    </div>
  </details>
</div>

<!-- RIEPILOGO -->

<h3 class="gp-title">
  🎯 Il concetto da ricordare
</h3>

<div class="gp-summary">
  <h4>🎁 Il Guest Pass è un regalo utile</h4>

  <p>
    Permette a una persona
    di conoscere Travel Advantage
    gratuitamente,
    senza carta di credito
    e senza obbligo
    di sottoscrivere
    una membership.
    <br><br>
    L'ospite può prenotare
    un soggiorno hotel
    fino a 2 notti.
    <br><br>
    Se successivamente
    sceglie un abbonamento
    a pagamento,
    può generare
    Crediti Viaggio
    per un cliente
    oppure commissioni
    per un Ambassador.
    <br><br>
    <strong>
      Il modo migliore
      di distribuirlo è semplice:
      offrire un vantaggio reale,
      spiegare chiaramente i limiti
      e lasciare la persona
      libera di scegliere.
    </strong>
  </p>
</div>

</div>
</section>
`);
