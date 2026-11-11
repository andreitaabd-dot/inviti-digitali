
window.registraSezione("piattaforma", `
<section class="section" id="piattaforma" data-group="viaggi">

  <style>
    #piattaforma .eco-intro {
      display: grid;
      grid-template-columns: 1.15fr 1fr;
      gap: 22px;
      align-items: center;
      margin-bottom: 28px;
    }

    #piattaforma .eco-intro img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 420px;
  object-fit: contain;
  object-position: center;
  border-radius: 18px;
}

    #piattaforma .eco-intro p {
      color: #536d7d;
      line-height: 1.75;
    }

    #piattaforma .eco-eyebrow {
      display: inline-block;
      color: #087f8b;
      background: #e8f8f6;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: .09em;
      text-transform: uppercase;
      border-radius: 30px;
      padding: 7px 12px;
    }

    #piattaforma .eco-title {
      font-size: 25px;
      color: #09243d;
      margin: 26px 0 15px;
    }

    #piattaforma .eco-small {
      color: #718795;
      font-size: 12px;
      line-height: 1.6;
    }

    #piattaforma .eco-flow {
      background: linear-gradient(145deg, #09243d, #0b5a77);
      border-radius: 22px;
      padding: 28px 20px;
      color: white;
      margin: 25px 0;
      text-align: center;
    }

    #piattaforma .eco-node {
      border: 1px solid #ffffff55;
      background: #ffffff15;
      border-radius: 17px;
      padding: 19px;
      max-width: 430px;
      margin: auto;
    }

    #piattaforma .eco-node strong {
      display: block;
      font-size: 22px;
      margin-bottom: 7px;
    }

    #piattaforma .eco-node span {
      display: block;
      color: #d6edf4;
      font-size: 13px;
      line-height: 1.6;
    }

    #piattaforma .eco-node.travel {
      background: #ffffff;
      color: #09243d;
    }

    #piattaforma .eco-node.travel span {
      color: #536d7d;
    }

    #piattaforma .eco-arrow {
      padding: 13px;
      font-size: 23px;
      color: #92e7e1;
    }

    #piattaforma .eco-branches {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      max-width: 530px;
      margin: 16px auto 0;
    }

    #piattaforma .eco-branch {
      background: #ffffff14;
      border: 1px solid #ffffff35;
      border-radius: 15px;
      padding: 17px 12px;
    }

    #piattaforma .eco-branch b {
      display: block;
      font-size: 17px;
      margin-bottom: 6px;
    }

    #piattaforma .eco-branch span {
      font-size: 12px;
      line-height: 1.6;
      color: #d6edf4;
    }

    #piattaforma .eco-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      margin: 18px 0;
    }

    #piattaforma .eco-card {
      padding: 22px;
      background: #f2f8fb;
      border: 1px solid #e0edf3;
      border-radius: 17px;
    }

    #piattaforma .eco-card.blue {
      background: #eef7ff;
    }

    #piattaforma .eco-card.gold {
      background: #fff8e8;
      border-color: #f7e5b5;
    }

    #piattaforma .eco-card.green {
      background: #ecf9f8;
    }

    #piattaforma .eco-card .emoji {
      font-size: 29px;
      margin-bottom: 12px;
    }

    #piattaforma .eco-card h4 {
      font-size: 18px;
      margin: 0 0 9px;
    }

    #piattaforma .eco-card p {
      margin: 0;
      color: #526c7c;
      font-size: 13px;
      line-height: 1.7;
    }

    #piattaforma .eco-stat {
      font-family: Outfit, sans-serif;
      font-size: 30px;
      font-weight: 800;
      color: #0878b9;
      margin-bottom: 6px;
    }

    #piattaforma .eco-label {
      display: inline-block;
      border-radius: 20px;
      padding: 5px 10px;
      background: #e8f8f6;
      color: #087f8b;
      font-weight: 800;
      font-size: 11px;
      margin-bottom: 10px;
    }

    #piattaforma .eco-chain {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      gap: 8px;
      margin: 20px 0;
    }

    #piattaforma .eco-chain > div {
      flex: 1;
      min-width: 0;
      padding: 17px 10px;
      border-radius: 14px;
      background: #eef7fa;
      text-align: center;
      font-size: 13px;
      line-height: 1.55;
    }

    #piattaforma .eco-chain b {
      display: block;
      margin-bottom: 5px;
      color: #0c526f;
    }

    #piattaforma .eco-chain .eco-separator {
      flex: 0 0 auto;
      align-self: center;
      padding: 0;
      background: transparent;
      color: #1594a1;
      font-weight: bold;
      font-size: 23px;
    }

    #piattaforma .eco-quiz {
      background: #f6f1ff;
      border: 1px solid #e8defd;
      border-radius: 18px;
      padding: 22px;
      margin: 20px 0;
    }

    #piattaforma .eco-quiz h4 {
      margin: 0 0 12px;
      font-size: 18px;
    }

    #piattaforma .eco-quiz details {
      margin-top: 13px;
      background: #fff;
    }

    #piattaforma .eco-answer {
      color: #315b4d;
    }

    #piattaforma .eco-placeholder {
      background: repeating-linear-gradient(
        -45deg,
        #f4f8fa,
        #f4f8fa 12px,
        #edf3f6 12px,
        #edf3f6 24px
      );
      border: 2px dashed #bdd2dd;
      border-radius: 18px;
      min-height: 170px;
      padding: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 9px;
      text-align: center;
      margin: 18px 0;
    }

    #piattaforma .eco-placeholder span {
      font-size: 38px;
    }

    #piattaforma .eco-placeholder strong {
      color: #31556b;
    }

    #piattaforma .eco-placeholder small {
      color: #718795;
    }

    #piattaforma .eco-note {
      margin-top: 22px;
      padding: 16px 19px;
      background: #f8fbfc;
      border: 1px solid #e1ebf0;
      border-radius: 13px;
      color: #647e8d;
      font-size: 12px;
      line-height: 1.75;
    }

    @media (max-width: 700px) {
      #piattaforma .eco-intro,
      #piattaforma .eco-grid {
        grid-template-columns: 1fr;
      }

      #piattaforma .eco-chain {
        flex-direction: column;
      }

      #piattaforma .eco-chain .eco-separator {
        transform: rotate(90deg);
      }

      #piattaforma .eco-flow {
        padding: 20px 13px;
      }

      #piattaforma .eco-branches {
        grid-template-columns: 1fr;
      }
    }
  </style>

  <div class="section-head">
    <span class="kicker">Capitolo 01 · Le fondamenta</span>
    <h2>MWR Life e Travel Advantage</h2>
    <p>
      Due nomi, un unico ecosistema. Scopri chi gestisce
      il progetto, come funziona il servizio viaggi e
      quale ruolo svolgono clienti e Ambassador.
    </p>
  </div>

  <div class="section-body">

    <!-- INTRODUZIONE -->

    <div class="eco-intro">
      <div>
        <span class="eco-eyebrow">Partiamo dalle basi</span>
        <h3 style="font-size:27px;margin:14px 0">
          Qual è la differenza?
        </h3>
        <p>
          <strong>MWR Life</strong> è l'azienda madre:
          gestisce l'infrastruttura commerciale,
          amministrativa e l'opportunità di business.
        </p>
        <p>
          <strong>Travel Advantage</strong> è il servizio
          concreto che permette ai clienti di cercare
          e prenotare viaggi attraverso una piattaforma
          privata riservata agli abbonati.
        </p>
      </div>

      <img src="assets/intro-ecosistema.webp"
           alt="Viaggi e destinazioni Travel Advantage"
           loading="lazy">
    </div>

    <!-- MAPPA DELL'ECOSISTEMA -->

    <h3 class="eco-title">🧭 La mappa dell'ecosistema</h3>

    <div class="eco-flow">

      <div class="eco-node">
        <strong>🏢 MWR LIFE</strong>
        <span>
          Azienda madre · Proprietà della piattaforma<br>
          Struttura commerciale · Piano compensi
        </span>
      </div>

      <div class="eco-arrow">↓</div>

      <div class="eco-node travel">
        <strong>✈️ TRAVEL ADVANTAGE</strong>
        <span>
          Piattaforma privata per prenotare viaggi,
          riservata ai membri con abbonamento.
        </span>
      </div>

      <div class="eco-arrow">↓</div>

      <div class="eco-branches">

        <div class="eco-branch">
          <b>🧳 CLIENTE</b>
          <span>
            Utilizza i servizi viaggio
            e i vantaggi della membership.
          </span>
        </div>

        <div class="eco-branch">
          <b>🤝 AMBASSADOR</b>
          <span>
            Promuove gli abbonamenti e
            sviluppa un'attività autonoma.
          </span>
        </div>

      </div>
    </div>

    <!-- IMMAGINE DA CREARE -->

 <div style="
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px auto;
">
  <img
    src="assets/infografica-ecosistema.webp"
    alt="Ecosistema MWR Life e Travel Advantage"
    loading="lazy"
    style="
      display: block;
      width: 100%;
      max-width: 1100px;
      height: auto;
      object-fit: contain;
      border-radius: 18px;
    "
  >
</div>

    <!-- MWR LIFE -->

    <h3 class="eco-title">🏢 1. Conosciamo MWR Life</h3>

    <div class="eco-grid">

      <div class="eco-card blue">
        <div class="emoji">📅</div>
        <div class="eco-stat">2013</div>
        <h4>La nascita</h4>
        <p>
          MWR Life è stata fondata da
          <strong>Yoni Ashurov</strong>.
          Opera nel settore del network marketing,
          chiamato anche marketing referenziale.
        </p>
      </div>

      <div class="eco-card green">
        <div class="emoji">🌍</div>
        <div class="eco-stat">150+</div>
        <h4>Presenza internazionale</h4>
        <p>
          Secondo le informazioni aziendali
          fornite, MWR Life è attiva in oltre
          150 Paesi, operando nel quadro
          delle normative applicabili.
        </p>
      </div>

      <div class="eco-card">
        <div class="emoji">🧩</div>
        <h4>Il suo ruolo</h4>
        <p>
          È la società proprietaria di
          Travel Advantage e gestisce la struttura
          commerciale e amministrativa
          dell'ecosistema.
        </p>
      </div>

      <div class="eco-card gold">
        <div class="emoji">💼</div>
        <div class="eco-stat">$99</div>
        <h4>Licenza Ambassador</h4>
        <p>
          Chi desidera promuovere il servizio
          come attività può attivare la licenza
          <strong>Lifestyle Ambassador</strong>,
          dal costo indicato di
          <strong>99 dollari all'anno</strong>.
        </p>
      </div>

    </div>

    <details>
      <summary>🔍 Che cosa significa network marketing?</summary>
      <div>
        È un modello di distribuzione basato
        sulla promozione e sulla relazione
        diretta con i clienti, anziché
        affidarsi esclusivamente ai
        tradizionali canali pubblicitari.
        <br><br>
        Nel modello MWR Life descritto,
        la componente economica deve essere
        collegata agli abbonamenti e
        ai relativi rinnovi, non al semplice
        ingresso di nuove persone.
      </div>
    </details>

    <details>
      <summary>💰 Come funziona il piano compensi?</summary>
      <div>
        Il piano viene presentato come
        <strong>meritocratico</strong> ed è
        organizzato in <strong>9 aree di guadagno</strong>.
        <br><br>
        La remunerazione è collegata
        all'attivazione e al rinnovo
        degli abbonamenti VIP, Elite e Turbo.
        <br><br>
        <strong>Non sono previste commissioni
        per il semplice reclutamento.</strong>
        <br><br>
        Le singole aree, le condizioni
        e i requisiti saranno spiegati
        nel capitolo dedicato al piano compensi.
      </div>
    </details>

    <div class="fact caution">
      <strong>⚠️ Da ricordare</strong><br>
      Diventare Ambassador non garantisce
      automaticamente un guadagno.
      I compensi dipendono dalle attività
      effettivamente svolte e dal rispetto
      delle condizioni del piano.
    </div>

    <!-- TRAVEL ADVANTAGE -->

    <h3 class="eco-title">✈️ 2. Conosciamo Travel Advantage</h3>

    <div class="eco-grid">

      <div class="eco-card blue">
        <div class="emoji">🗺️</div>
        <h4>Che cos'è?</h4>
        <p>
          Una piattaforma privata di
          prenotazione viaggi, classificabile
          come <strong>Online Travel Agency (OTA)</strong>.
          È riservata agli utenti con
          una membership.
        </p>
      </div>

      <div class="eco-card">
        <div class="emoji">🏛️</div>
        <div class="eco-stat">2017</div>
        <h4>Ingresso in MWR Life</h4>
        <p>
          Secondo il materiale fornito,
          MWR Life ha acquisito Travel Advantage
          nel 2017. La piattaforma
          viene indicata come registrata
          in Europa.
        </p>
      </div>

    </div>

    <h3 class="eco-title">🔄 Come funziona il modello commerciale?</h3>

    <div class="eco-chain">
      <div>
        <b>🏨 Fornitori</b>
        Hotel, resort e grossisti del settore turistico
      </div>

      <div class="eco-separator">→</div>

      <div>
        <b>✈️ Travel Advantage</b>
        Accesso a tariffe riservate e servizi di viaggio
      </div>

      <div class="eco-separator">→</div>

      <div>
        <b>🧳 Abbonato</b>
        Ricerca, confronta e prenota
      </div>
    </div>

    <div class="fact">
      <strong>💡 L'idea alla base del modello</strong><br>
      Travel Advantage dichiara di utilizzare
      rapporti con fornitori grossisti
      (<em>wholesalers</em>) e un accesso
      tramite membership, riducendo
      alcune componenti di costo tipiche
      della distribuzione pubblica.
      <br><br>
      L'obiettivo è proporre tariffe competitive
      rispetto a piattaforme pubbliche
      come Booking.com o Expedia.
      Il risparmio effettivo va però verificato
      per ogni prenotazione, confrontando
      condizioni equivalenti.
    </div>

    <!-- MEMBERSHIP -->

    <h3 class="eco-title">🎟️ 3. Le tre membership</h3>

    <div class="tiles">

      <div class="tile blue">
        <span class="eco-label">Livello 1</span>
        <h3>VIP</h3>
        <p>
          Membership privata con quota
          di abbonamento mensile e accesso
          ai servizi previsti dal piano.
        </p>
      </div>

      <div class="tile gold">
        <span class="eco-label">Livello 2</span>
        <h3>Elite</h3>
        <p>
          Membership con condizioni e
          benefici specifici del livello Elite.
        </p>
      </div>

      <div class="tile purple">
        <span class="eco-label">Livello 3</span>
        <h3>Turbo</h3>
        <p>
          Membership con vantaggi dedicati,
          incluso il meccanismo potenziato
          dei punti fedeltà descritto
          nel materiale formativo.
        </p>
      </div>

    </div>

    <p class="eco-small">
      Prezzi, caratteristiche e differenze
      operative saranno approfonditi
      nel Capitolo 2 — Abbonamenti VIP,
      Elite e Turbo.
    </p>

    <!-- PUNTI E CREDITI -->

    <h3 class="eco-title">🎁 4. I vantaggi legati ai viaggi</h3>

    <div class="eco-grid">

      <div class="eco-card green">
        <div class="emoji">⭐</div>
        <h4>Punti fedeltà</h4>
        <p>
          Il sistema descritto prevede
          l'attribuzione di punti collegati
          alla quota mensile.
          <br><br>
          Il valore
          riconosciuto è equivalente al 100% della quota,
          o fino al doppio nel livello Turbo.
          <br><br>
          I punti sono utilizzabili
          secondo le regole del programma
          per hotel, resort
          <strong>The Club</strong> e pacchetti
          <strong>Life Experience</strong>.
        </p>
      </div>

      <div class="eco-card gold">
        <div class="emoji">💵</div>
        <h4>Crediti viaggio</h4>
        <p>
          Un meccanismo di ritorno
          economico presentato come
          <strong>cashback in dollari</strong>,
          generato dalle prenotazioni
          idonee.
          <br><br>
          Può riguardare voli, alloggi,
          trasporti e attività.
          <br><br>
          Secondo il materiale fornito,
          i crediti non hanno scadenza.
          Utilizzo e disponibilità
          restano soggetti alle regole
          del programma.
        </p>
      </div>

    </div>

    <div class="fact caution">
      <strong>⭐ Punti e 💵 crediti non sono la stessa cosa.</strong>
      <br>
      I punti fanno parte del programma
      fedeltà e hanno modalità d'utilizzo
      specifiche. I crediti viaggio
      derivano dalle prenotazioni idonee.
      Nessuno dei due deve essere confuso
      con denaro liberamente prelevabile.
    </div>

    
<!-- GARANZIE -->

<h3 class="eco-title">🛡️ 5. Sicurezza e garanzie</h3>

<p style="line-height:1.75;color:#536d7d">
  Viaggiare in tranquillità significa anche sapere
  quali tutele sono disponibili. Travel Advantage
  offre due garanzie importanti: una sull'abbonamento
  e una sul prezzo delle prenotazioni.
</p>

<div class="eco-grid">

  <div class="eco-card green">
    <div class="emoji">✅</div>
    <div class="eco-stat">14 giorni</div>
    <h4>Garanzia soddisfatti o rimborsati</h4>
    <p>
      Hai attivato un abbonamento Travel Advantage
      e hai cambiato idea?
      <br><br>
      Entro i primi <strong>14 giorni</strong>
      puoi richiedere il
      <strong>rimborso integrale dell'abbonamento</strong>,
      per qualsiasi motivo.
      <br><br>
      Questa garanzia vale per gli abbonamenti,
      <strong>sia che tu voglia semplicemente viaggiare,
      sia che tu decida di sviluppare l'attività
      come Ambassador.</strong>
      <br><br>
      Nessuna domanda, nessuna trattenuta e
      nessuna telefonata per convincerti a restare.
    </p>
  </div>

  <div class="eco-card gold">
    <div class="emoji">🏆</div>
    <div class="eco-stat">150%</div>
    <h4>Garanzia del miglior prezzo</h4>
    <p>
      Hai prenotato un hotel su Travel Advantage
      e trovi la stessa struttura, per le stesse
      date e alle stesse condizioni, a un prezzo
      più basso su un portale pubblico?
      <br><br>
      Per le prenotazioni che rispettano
      le condizioni della garanzia,
      Travel Advantage riconosce
      <strong>il 150% della differenza</strong>:
      il rimborso della differenza di prezzo
      più un bonus aggiuntivo del 50%
      sulla stessa differenza.
    </p>
  </div>

</div>

<h3 class="eco-title">💡 Esempio pratico: garanzia 150%</h3>

<div class="eco-chain">

  <div>
    <b>✈️ Travel Advantage</b>
    Hotel prenotato a
    <strong>500 €</strong>
  </div>

  <div class="eco-separator">→</div>

  <div>
    <b>🔎 Portale pubblico</b>
    Stesso hotel e condizioni
    a <strong>450 €</strong>
  </div>

  <div class="eco-separator">→</div>

  <div>
    <b>🎁 Garanzia 150%</b>
    Differenza 50 € + bonus 25 €
    = <strong>75 €</strong>
  </div>

</div>

<div class="fact">
  <strong>🎯 Cosa significa?</strong><br>
  Nell'esempio, la differenza di prezzo è di 50 €.
  La garanzia del 150% prevede un riconoscimento
  complessivo di <strong>75 €</strong>, se la
  prenotazione soddisfa tutti i requisiti previsti.
</div>

<h3 class="eco-title">🌍 Riferimenti e tutele nel turismo</h3>

<p style="line-height:1.75;color:#536d7d">
  Travel Advantage opera nel settore turistico
  europeo e presenta i seguenti riferimenti
  professionali e di tutela.
</p>

<div class="eco-grid">

  <div class="eco-card">
    <div class="emoji">🌐</div>
    <h4>ETOA</h4>
    <p>
      European Tourism Association:
      associazione professionale
      del settore turistico europeo.
    </p>
  </div>

  <div class="eco-card blue">
    <div class="emoji">🇫🇷</div>
    <h4>ATOUT France</h4>
    <p>
      Agenzia francese per lo sviluppo turistico,
      con funzioni di registrazione
      degli operatori turistici.
    </p>
  </div>

  <div class="eco-card green">
    <div class="emoji">✈️</div>
    <h4>IATA-TIDS</h4>
    <p>
      Sistema internazionale di identificazione
      degli operatori e intermediari
      del settore viaggi.
    </p>
  </div>

  <div class="eco-card gold">
    <div class="emoji">🔐</div>
    <h4>Allianz</h4>
    <p>
      Fondo di garanzia indicato
      per le tutele previste
      nell'ambito dei servizi turistici.
    </p>
  </div>

</div>

<h3 class="eco-title">🧠 Mettiti alla prova</h3>

<div class="eco-quiz">
  <span class="eco-label">DOMANDA</span>
  <h4>
    Se attivo solamente l'abbonamento Travel Advantage,
    senza diventare Ambassador, ho comunque
    la garanzia dei 14 giorni?
  </h4>

  <p>A. No, vale solo per chi sviluppa l'attività</p>
  <p>B. Sì, riguarda gli abbonamenti Travel Advantage</p>

  <details>
    <summary>👀 Scopri la risposta</summary>
    <div class="eco-answer">
      ✅ <strong>B. Esatto!</strong><br>
      La garanzia riguarda l'abbonamento,
      indipendentemente dalla scelta
      di diventare Ambassador.
    </div>
  </details>
</div>

<!-- SINERGIA -->


    <h3 class="eco-title">🤝 6. Perché lavorano insieme?</h3>

    <div class="eco-chain">
      <div>
        <b>🏢 MWR Life</b>
        Gestisce l'azienda e la rete commerciale
      </div>

      <div class="eco-separator">+</div>

      <div>
        <b>✈️ Travel Advantage</b>
        Offre un servizio turistico concreto
      </div>

      <div class="eco-separator">=</div>

      <div>
        <b>🌍 Ecosistema</b>
        Utilizzo personale e promozione del servizio
      </div>
    </div>

    <div class="quote">
      «Travel Advantage è il servizio.
      MWR Life è l'azienda che lo sostiene
      e ne organizza la promozione.»
    </div>

    <div class="eco-grid">

      <div class="eco-card blue">
        <div class="emoji">🧳</div>
        <h4>Se vuoi viaggiare</h4>
        <p>
          Puoi utilizzare la piattaforma
          come cliente, scegliendo
          l'abbonamento adatto alle tue
          esigenze e prenotando i servizi
          disponibili.
        </p>
      </div>

      <div class="eco-card gold">
        <div class="emoji">🚀</div>
        <h4>Se vuoi sviluppare un'attività</h4>
        <p>
          Puoi valutare anche il ruolo
          di Lifestyle Ambassador:
          promuovi gli abbonamenti
          e puoi maturare compensi
          secondo il piano e i requisiti
          previsti.
        </p>
      </div>

    </div>

    <details>
      <summary>📌 Che cosa significa costruire un'attività autonoma?</summary>
      <div>
        L'Ambassador può dedicarsi
        alla promozione del servizio
        e allo sviluppo della propria
        attività commerciale.
        <br><br>
        Il potenziale di continuità
        dei compensi dipende da clienti
        attivi, rinnovi e condizioni
        del piano. Non costituisce
        una rendita automatica,
        garantita o indipendente
        da qualsiasi attività.
      </div>
    </details>

    <!-- QUIZ -->

    <h3 class="eco-title">🧠 7. Mettiti alla prova</h3>

    <div class="eco-quiz">
      <span class="eco-label">DOMANDA 01</span>
      <h4>Chi possiede Travel Advantage?</h4>
      <p>A. Gli Ambassador</p>
      <p>B. MWR Life</p>
      <p>C. I clienti VIP</p>

      <details>
        <summary>👀 Scopri la risposta</summary>
        <div class="eco-answer">
          ✅ <strong>B. MWR Life.</strong><br>
          È la società madre proprietaria
          della piattaforma.
        </div>
      </details>
    </div>

    <div class="eco-quiz">
      <span class="eco-label">DOMANDA 02</span>
      <h4>
        Per prenotare una vacanza
        bisogna diventare Ambassador?
      </h4>
      <p>A. Sì, sempre</p>
      <p>B. No, si può essere semplicemente clienti</p>

      <details>
        <summary>👀 Scopri la risposta</summary>
        <div class="eco-answer">
          ✅ <strong>B.</strong><br>
          Il cliente utilizza la piattaforma
          tramite membership senza dover
          attivare la licenza Ambassador.
        </div>
      </details>
    </div>

    <div class="eco-quiz">
      <span class="eco-label">DOMANDA 03</span>
      <h4>
        Un Ambassador riceve compensi
        semplicemente perché fa entrare
        una nuova persona?
      </h4>
      <p>A. Sì</p>
      <p>B. No, i compensi sono legati agli abbonamenti</p>

      <details>
        <summary>👀 Scopri la risposta</summary>
        <div class="eco-answer">
          ✅ <strong>B.</strong><br>
          Il modello descritto collega
          i compensi all'attivazione
          e al rinnovo delle membership,
          non al semplice reclutamento.
        </div>
      </details>
    </div>

    <div class="eco-quiz">
      <span class="eco-label">DOMANDA 04</span>
      <h4>
        Punti fedeltà e crediti viaggio
        sono la stessa cosa?
      </h4>
      <p>A. Sì</p>
      <p>B. No, hanno meccanismi diversi</p>

      <details>
        <summary>👀 Scopri la risposta</summary>
        <div class="eco-answer">
          ✅ <strong>B.</strong><br>
          I punti sono collegati
          al programma fedeltà;
          i crediti viaggio derivano
          dalle prenotazioni idonee.
        </div>
      </details>
    </div>

    <!-- RIEPILOGO -->

    <h3 class="eco-title">🎯 Il concetto da ricordare</h3>

    <div class="fact">
      <strong>MWR Life = azienda e opportunità commerciale.</strong>
      <br>
      <strong>Travel Advantage = piattaforma e servizi viaggio.</strong>
      <br><br>
      Il cliente utilizza il servizio.
      L'Ambassador può promuoverlo
      come attività, secondo le regole
      del piano compensi.
    </div>

    <div class="eco-note">
      <strong>Nota per l'Atlante del Team:</strong>
      capitolo formativo basato sulle
      informazioni fornite per il progetto.
      Costi, benefici, qualifiche,
      registrazioni, coperture e condizioni
      economiche devono essere confrontati
      con la documentazione ufficiale
      vigente prima dell'utilizzo pubblico.
      Questo materiale non costituisce
      una comunicazione ufficiale di
      MWR Life o Travel Advantage.
    </div>

  </div>
</section>
`);
