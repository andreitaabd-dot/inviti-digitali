
window.registraSezione("faq", `
<section class="section" id="faq" data-group="formazione">
<style>
#faq{--a:#0a8194;--ink:#153b52;--muted:#587181;--line:#dce9ee}
#faq .av-intro{font-size:14px;line-height:1.85;color:var(--muted)}
#faq .av-nav{display:flex;flex-wrap:wrap;gap:8px;margin:20px 0}
#faq .av-nav a{background:#e8f5f6;border-radius:20px;padding:8px 12px;color:#11677b;text-decoration:none;font-size:12px;font-weight:750}
#faq .av-panel{border:1px solid var(--line);border-radius:18px;padding:22px;margin:23px 0;background:#fbfdfe}
#faq .av-panel h3{color:var(--ink);font-size:21px;margin:0 0 10px}
#faq .av-panel h4{color:var(--ink);font-size:16px;margin:20px 0 10px}
#faq .av-panel p,#faq .av-panel li{font-size:13px;line-height:1.85;color:var(--muted)}
#faq .av-tag{display:inline-block;background:#e5f7f3;color:#087984;padding:7px 11px;border-radius:25px;font-size:11px;font-weight:850;margin-bottom:13px}
#faq .av-alert{background:#fff8e9;border-left:4px solid #d3a044;border-radius:9px;padding:14px 16px;font-size:13px;line-height:1.8;color:#775b29;margin:16px 0}
#faq .av-help{background:#eaf7f4;border-left:4px solid #16a393;border-radius:9px;padding:14px 16px;font-size:13px;line-height:1.8;color:#315b56;margin:16px 0}
#faq .av-check{display:flex;align-items:flex-start;gap:11px;padding:11px 12px;border:1px solid #e4edf0;background:white;border-radius:10px;margin:8px 0;cursor:pointer;font-size:13px;line-height:1.7;color:#345a6b}
#faq .av-check input{width:17px;height:17px;flex:none;margin-top:3px;accent-color:var(--a)}
#faq .av-check:has(input:checked){background:#eef9f5;border-color:#bfe2d6}
#faq .av-check:has(input:checked) span{text-decoration:line-through;opacity:.68}
#faq .av-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:17px 0}
#faq .av-field{display:flex;flex-direction:column;gap:6px;font-size:12px;color:#33566a;font-weight:700}
#faq .av-field input,#faq .av-field textarea,#faq .av-field select{width:100%;min-width:0;border:1px solid #cbdfe6;border-radius:9px;padding:11px;background:white;color:#153a52;font:inherit;font-weight:400;box-sizing:border-box}
#faq .av-field textarea{min-height:76px;resize:vertical}
#faq .av-field.full{grid-column:1/-1}
#faq .av-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:15px 0}
#faq .av-card{border:1px solid var(--line);border-radius:13px;padding:15px;background:#f2f8fb}
#faq .av-card strong{display:block;color:var(--ink);margin-bottom:8px;font-size:14px}
#faq .av-card p{margin:0}
#faq .av-links{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px;margin:16px 0}
#faq .av-links a{display:flex;align-items:center;gap:9px;border:1px solid #cee5e9;background:#eef8f9;border-radius:11px;padding:12px;text-decoration:none;color:#116477;font-weight:750;font-size:12px;line-height:1.5}
#faq .av-links a:hover{background:#ddf1f3}
#faq .av-script{background:white;border-left:4px solid #1596a5;border-radius:10px;padding:16px;margin:14px 0;color:#365f71;font-size:14px;line-height:1.85}
#faq .av-script strong{display:block;color:#164158;margin-bottom:8px}
#faq .av-table{width:100%;border-collapse:collapse;min-width:490px}
#faq .av-table th{background:#123950;color:white;padding:11px;text-align:left;font-size:12px}
#faq .av-table td{padding:11px;border-bottom:1px solid #e1eaf0;font-size:12px;line-height:1.65;color:#426476;vertical-align:top}
#faq .av-scroll{overflow-x:auto;border:1px solid #dce9ef;border-radius:12px;margin:15px 0}
#faq .av-days{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:5px;margin:15px 0}
#faq .av-days div{background:#eef6f9;border-radius:7px;padding:8px 3px;text-align:center;font-size:11px;color:#395f72}
#faq .av-days input{width:100%;max-width:95px;padding:6px 2px;text-align:center;border:1px solid #c7e0e7;border-radius:6px;box-sizing:border-box}
#faq .av-progress{height:13px;background:#e1edf1;border-radius:20px;overflow:hidden;margin:10px 0}
#faq .av-progress-bar{height:100%;background:linear-gradient(90deg,#159e92,#087d94);width:0;transition:width .2s}
#faq .av-progress-label{font-size:13px;color:#35566a;font-weight:800}
#faq .av-actions{display:flex;gap:9px;flex-wrap:wrap;margin:20px 0}
#faq .av-btn{background:#123d56;color:white;border:0;border-radius:10px;padding:11px 15px;font-size:12px;font-weight:800;cursor:pointer}
#faq .av-btn.secondary{background:#eaf1f5;color:#254c62}
#faq .av-sub{font-size:12px;color:#708795;line-height:1.7}
#faq .av-final{background:linear-gradient(135deg,#113a56,#0c8796);color:white;padding:24px;border-radius:18px;margin:24px 0}
#faq .av-final h3{color:white;margin:0 0 10px}
#faq .av-final p{color:#e1f4f7;line-height:1.85;font-size:13px}
@media(max-width:720px){
#faq .av-fields,#faq .av-links{grid-template-columns:1fr}
#faq .av-grid{grid-template-columns:1fr}
#faq .av-panel{padding:16px}
#faq .av-days{grid-template-columns:repeat(4,minmax(0,1fr))}
}
</style>

<div class="section-head">
  <span class="kicker">Capitolo 14 · Manuale pratico dello Sponsor</span>
  <h2>Avviare un nuovo Ambassador</h2>
  <p>Una guida da eseguire passo dopo passo: accoglienza, configurazione, piano personale, primi contatti e affiancamento.</p>
</div>

<div class="section-body">

<p class="av-intro">
  Hai appena iscritto una nuova persona?
  <strong>Apri questa pagina insieme a lei.</strong>
  Partite dal primo blocco, completate le attività,
  compilate i campi e spuntate le caselle.
  Il percorso segue le parti operative del
  Manuale Operativo The Travel Legends di ottobre 2026.
</p>

<div class="av-help">
  <strong>📌 Come usare questa guida</strong>
  <br>
  1. Lo Sponsor apre il capitolo durante la chiamata.
  <br>
  2. Il nuovo Ambassador esegue i passaggi sul suo account.
  <br>
  3. Compilate insieme obiettivi e agenda.
  <br>
  4. Spuntate le attività completate.
  <br>
  5. Riprendete da dove siete arrivati al prossimo incontro.
</div>

<div class="av-panel">
  <span class="av-tag">IL TUO PERCORSO</span>
  <h3>📊 Avanzamento della guida</h3>
  <div class="av-progress"><div class="av-progress-bar" id="av-progress-bar"></div></div>
  <div class="av-progress-label" id="av-progress-label">0 attività completate</div>
  <p class="av-sub">Le spunte e le note vengono salvate nel browser di questo dispositivo. Non sono sincronizzate con altri dispositivi.</p>
  <div class="av-actions">
    <button type="button" class="av-btn" onclick="window.print()">🖨️ Stampa la guida</button>
    <button type="button" class="av-btn secondary" onclick="window.avviaTeamReset()">↺ Azzera la scheda</button>
  </div>
</div>

<nav class="av-nav" aria-label="Passaggi di avviamento">
  <a href="#av-01">01 · Benvenuto</a>
  <a href="#av-02">02 · Prima chiamata</a>
  <a href="#av-03">03 · Obiettivi</a>
  <a href="#av-04">04 · Setup</a>
  <a href="#av-05">05 · Link</a>
  <a href="#av-06">06 · Eventi</a>
  <a href="#av-07">07 · Contatti</a>
  <a href="#av-08">08 · Primi inviti</a>
  <a href="#av-09">09 · Check 7 giorni</a>
  <a href="#av-10">10 · Primi 30 giorni</a>
</nav>

<!-- PASSO 1 -->

<div class="av-panel" id="av-01">
  <span class="av-tag">PASSO 01 · APPENA SI ISCRIVE</span>
  <h3>👋 Accogli il nuovo membro</h3>
  <p>Apri WhatsApp e invia questo messaggio personalizzandolo con il nome.</p>

  <div class="av-script">
    <strong>📱 Messaggio di benvenuto</strong>
    Ciao [Nome]! 😊 Benvenuto/a nel team!
    Sono felice che iniziamo questo percorso insieme.
    <br><br>
    Ti accompagnerò nei primi passaggi, così
    conoscerai gli strumenti e il metodo di lavoro.
    <br><br>
    Come prima cosa organizziamo una breve
    chiamata di avviamento per impostare tutto.
    Quando sei disponibile?
  </div>

  <div class="av-fields">
    <label class="av-field">Nome nuovo Ambassador
      <input data-av-field="nome" placeholder="Nome e cognome">
    </label>
    <label class="av-field">Data iscrizione
      <input data-av-field="iscrizione" type="date">
    </label>
    <label class="av-field">Nome Sponsor
      <input data-av-field="sponsor" placeholder="Nome Sponsor">
    </label>
    <label class="av-field">Prima chiamata
      <input data-av-field="prima-call" type="datetime-local">
    </label>
  </div>

  <h4>✅ Da completare</h4>
  <label class="av-check"><input type="checkbox" data-av-check="p1a"><span>Ho inviato il messaggio di benvenuto.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p1b"><span>Abbiamo fissato la prima chiamata.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p1c"><span>Abbiamo verificato che l'iscrizione sia andata a buon fine.</span></label>
</div>

<!-- PASSO 2 -->

<div class="av-panel" id="av-02">
  <span class="av-tag">PASSO 02 · DURANTE LA PRIMA CHIAMATA</span>
  <h3>🧭 Compila il profilo operativo</h3>

  <p>
    Questa è la Parte 1 del manuale di Paolo.
    Non iniziare facendo uno spiegone sui bonus:
    prima conosci la persona e il tempo che ha a disposizione.
  </p>

  <h4>A. Scegliete il profilo orario</h4>
  <div class="av-fields">
    <label class="av-field full">Profilo di impegno
      <select data-av-field="profilo">
        <option value="">Seleziona...</option>
        <option>STARTER · 1 ora al giorno</option>
        <option>PRO · 3 ore al giorno</option>
        <option>LEGEND / FULL-TIME · 6+ ore al giorno</option>
      </select>
    </label>
  </div>

  <h4>B. Compilate gli orari reali</h4>
  <p>Scrivete le fasce orarie disponibili, ad esempio 20:00–21:00.</p>

  <div class="av-days">
    <div>Lun<input data-av-field="ora-lun" placeholder="Orario"></div>
    <div>Mar<input data-av-field="ora-mar" placeholder="Orario"></div>
    <div>Mer<input data-av-field="ora-mer" placeholder="Orario"></div>
    <div>Gio<input data-av-field="ora-gio" placeholder="Orario"></div>
    <div>Ven<input data-av-field="ora-ven" placeholder="Orario"></div>
    <div>Sab<input data-av-field="ora-sab" placeholder="Orario"></div>
    <div>Dom<input data-av-field="ora-dom" placeholder="Orario"></div>
  </div>

  <h4>C. Scegliete la strada operativa</h4>
  <div class="av-fields">
    <label class="av-field full">Modalità preferita
      <select data-av-field="strada">
        <option value="">Seleziona...</option>
        <option>OFFLINE · Contatti personali ed eventi</option>
        <option>ONLINE · Social e strumenti digitali</option>
        <option>IBRIDA · Online + Offline</option>
      </select>
    </label>
  </div>

  <h4>D. Compilate la mappa mentale</h4>
  <div class="av-fields">
    <label class="av-field full">Quali sono i tuoi 3 punti di forza?
      <textarea data-av-field="forze" placeholder="Es. organizzazione, relazioni, creatività..."></textarea>
    </label>
    <label class="av-field full">Quali sono le tue paure o difficoltà?
      <textarea data-av-field="paure" placeholder="Es. parlare con persone nuove, usare i social..."></textarea>
    </label>
    <label class="av-field full">Cosa hai imparato dalle esperienze passate?
      <textarea data-av-field="esperienze" placeholder="Una lezione utile per questa attività..."></textarea>
    </label>
  </div>

  <label class="av-check"><input type="checkbox" data-av-check="p2a"><span>Profilo orario scelto e calendario compilato.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p2b"><span>Modalità Offline, Online o Ibrida scelta.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p2c"><span>Mappa mentale compilata insieme.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p2d"><span>Abbiamo parlato dei timori iniziali e del supporto disponibile.</span></label>
</div>

<!-- PASSO 3 -->

<div class="av-panel" id="av-03">
  <span class="av-tag">PASSO 03 · PRIMA CHIAMATA</span>
  <h3>🎯 Scrivete gli obiettivi</h3>
  <p>Segui la Parte 2 del manuale: Vision a tre mesi e a un anno, poi pianificazione delle azioni.</p>

  <div class="av-fields">
    <label class="av-field full">Obiettivo a 90 giorni
      <textarea data-av-field="obiettivo-90" placeholder="Cosa vorresti aver imparato o realizzato entro 3 mesi?"></textarea>
    </label>
    <label class="av-field full">Obiettivo a un anno
      <textarea data-av-field="obiettivo-anno" placeholder="Qual è il tuo traguardo a lungo termine?"></textarea>
    </label>
    <label class="av-field">Inviti settimanali desiderati
      <input data-av-field="inviti-settimana" type="number" min="0" placeholder="Es. 5">
    </label>
    <label class="av-field">Prima data di verifica
      <input data-av-field="verifica-obiettivi" type="date">
    </label>
  </div>

  <div class="av-help">
    <strong>📘 Dal manuale: la regola 10–5–2–1</strong>
    <br>
    Paolo la presenta come esempio di pianificazione:
    10 inviti, 5 presentazioni viste,
    2 approfondimenti, 1 nuova iscrizione.
    Non è una percentuale garantita e i risultati reali possono variare.
  </div>

  <label class="av-check"><input type="checkbox" data-av-check="p3a"><span>Obiettivi a 90 giorni scritti.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p3b"><span>Obiettivi a un anno scritti.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p3c"><span>Definito un ritmo realistico di attività.</span></label>
</div>

<!-- PASSO 4 -->

<div class="av-panel" id="av-04">
  <span class="av-tag">PASSO 04 · SETUP OPERATIVO</span>
  <h3>📱 Configurate gli strumenti</h3>
  <p>Segui la Parte 3 del manuale e verifica ogni configurazione sul dispositivo del nuovo Ambassador.</p>

  <h4>WhatsApp Business</h4>
  <label class="av-check"><input type="checkbox" data-av-check="p4a"><span>WhatsApp Business installato o già configurato.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p4b"><span>Foto profilo chiara e riconoscibile.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p4c"><span>Descrizione dell'attività inserita.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p4d"><span>Contatto email o metodo di contatto verificato.</span></label>

  <h4>Instagram / Facebook / TikTok</h4>
  <label class="av-check"><input type="checkbox" data-av-check="p4e"><span>Scelto il social da utilizzare inizialmente.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p4f"><span>Foto profilo aggiornata.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p4g"><span>Bio in 3 righe: chi sono, chi aiuto, cosa faccio.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p4h"><span>Inserito un link appropriato in bio, se necessario.</span></label>

  <h4>Accessi aziendali e meeting</h4>
  <label class="av-check"><input type="checkbox" data-av-check="p4i"><span>Accesso Travel Advantage verificato.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p4j"><span>Accesso MWR Life / Biz Center verificato.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p4k"><span>Zoom o altro strumento di videoconferenza disponibile.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p4l"><span>Telegram installato, se necessario per il gruppo.</span></label>

  <div class="av-alert">
    Non chiedere password al nuovo membro.
    Le operazioni sull'account personale
    devono essere eseguite dal titolare.
  </div>
</div>

<!-- PASSO 5 -->

<div class="av-panel" id="av-05">
  <span class="av-tag">PASSO 05 · CASSETTA DEGLI ATTREZZI</span>
  <h3>🔗 Aprite insieme i link del manuale</h3>

  <p>
    Questi sono i collegamenti estratti
    direttamente dal PDF originale di Paolo.
    Alcuni richiedono accesso o autorizzazione.
  </p>

  <h4>🎓 The Travel Legends</h4>
  <div class="av-links">
    <a href="https://t.me/+dguZ8aXJyio1OGJk" target="_blank" rel="noopener noreferrer">💬 Gruppo Telegram ↗</a>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf5pNWQC-08cG4rFCuPTjVAz1dNsvv78Pz6LgJ0svN5zlJ54g/viewform" target="_blank" rel="noopener noreferrer">🤖 Richiesta Assistente Leggendario IA ↗</a>
    <a href="https://www.thetravellegends.com/networker-school" target="_blank" rel="noopener noreferrer">📚 Networker School ↗</a>
    <a href="https://drive.google.com/file/d/1Aby5ZeVbrvw9nEwA_a_GDoewQgveH1hJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">📄 Guida Totale MWR Life ↗</a>
  </div>

  <h4>✈️ Travel Advantage</h4>
  <div class="av-links">
    <a href="https://www.traveladvantage.com/home" target="_blank" rel="noopener noreferrer">🏨 Piattaforma prenotazioni ↗</a>
    <a href="https://www.facebook.com/groups/275428722997111" target="_blank" rel="noopener noreferrer">👥 Gruppo Facebook testimonianze ↗</a>
    <a href="https://mwrlifecontent-pro.s3.amazonaws.com/PDF-and-other-files/travelstories-IT.pdf" target="_blank" rel="noopener noreferrer">🌍 Contest Travel Stories ↗</a>
    <a href="https://mwrlifecontent-pro.s3.amazonaws.com/PDF-and-other-files/LoyaltyPoints-IT.pdf?v=26.01.02" target="_blank" rel="noopener noreferrer">⭐ Programma Punti Fedeltà ↗</a>
  </div>

  <h4>💼 MWR Life</h4>
  <div class="av-links">
    <a href="https://www.mwrlife.com/" target="_blank" rel="noopener noreferrer">💻 MWR Life / Back Office ↗</a>
    <a href="https://canva.link/oean74xzjyd01zi" target="_blank" rel="noopener noreferrer">🎨 Modello presentazione unificata ↗</a>
    <a href="https://mwrlife.online/" target="_blank" rel="noopener noreferrer">🎥 Presentazione online ↗</a>
    <a href="https://mwrlife.globalewallet.com/MemberLogin.aspx?ReturnUrl=%2F" target="_blank" rel="noopener noreferrer">💰 Accesso E-Wallet ↗</a>
    <a href="https://hub.mwrlife.com/" target="_blank" rel="noopener noreferrer">📊 MWR Life HUB ↗</a>
  </div>

  <div class="av-alert">
    I link sono quelli presenti nel manuale di ottobre 2026.
    Non ho verificato che ogni pagina sia ancora attiva
    o che tutti gli accessi siano inclusi nella membership.
    Controllali prima di condividerli con i nuovi membri.
  </div>

  <label class="av-check"><input type="checkbox" data-av-check="p5a"><span>Ingresso nel gruppo Telegram effettuato con consenso.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p5b"><span>Accesso Networker School controllato.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p5c"><span>Manuale o Guida Totale MWR Life condivisa.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p5d"><span>Il nuovo membro sa trovare le piattaforme aziendali.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p5e"><span>Ha ricevuto i link delle risorse effettivamente necessarie.</span></label>
</div>

<!-- PASSO 6 -->

<div class="av-panel" id="av-06">
  <span class="av-tag">PASSO 06 · ORGANIZZA L'AGENDA</span>
  <h3>📅 Fissate gli appuntamenti reali</h3>
  <p>Il manuale richiede di mettere per iscritto evento di inaugurazione, primo grande evento e check con lo Sponsor.</p>

  <div class="av-fields">
    <label class="av-field">Evento di inaugurazione
      <input data-av-field="evento-inizio" type="datetime-local">
    </label>
    <label class="av-field">Modalità / luogo
      <input data-av-field="evento-luogo" placeholder="Zoom, dal vivo, città...">
    </label>
    <label class="av-field">Primo grande evento
      <input data-av-field="evento-grande" placeholder="Nome evento">
    </label>
    <label class="av-field">Data evento
      <input data-av-field="evento-data" type="date">
    </label>
    <label class="av-field">Primo check con Sponsor
      <input data-av-field="check-7" type="datetime-local">
    </label>
    <label class="av-field">Prossima call formativa
      <input data-av-field="call-team" type="datetime-local">
    </label>
  </div>

  <h4>Appuntamenti settimanali dei tuoi appunti</h4>
  <div class="av-scroll">
    <table class="av-table">
      <thead><tr><th>Giorno</th><th>Ora</th><th>Appuntamento</th></tr></thead>
      <tbody>
        <tr><td>Lunedì</td><td>21:00 / 21:15</td><td>Formazione Team Italia / Presentazione Paolo-Simone</td></tr>
        <tr><td>Martedì</td><td>18:30 / 20:30</td><td>CEO Call / Presentazione Team Italia</td></tr>
        <tr><td>Mercoledì</td><td>21:00</td><td>Formazione The Travel Legends</td></tr>
        <tr><td>Giovedì</td><td>20:30</td><td>Presentazione Team Italia / Formazione Team Tropicana</td></tr>
        <tr><td>Venerdì</td><td>21:15</td><td>Presentazione Paolo-Simone</td></tr>
      </tbody>
    </table>
  </div>

  <p class="av-sub">
    I tuoi appunti sono utilizzati per gli orari.
    Le sovrapposizioni di lunedì e giovedì
    vanno chiarite con gli organizzatori.
  </p>

  <label class="av-check"><input type="checkbox" data-av-check="p6a"><span>Evento di inaugurazione fissato o scelta la data da concordare.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p6b"><span>Prima formazione selezionata.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p6c"><span>Check con Sponsor fissato entro la prima settimana, se possibile.</span></label>
</div>

<!-- PASSO 7 -->

<div class="av-panel" id="av-07">
  <span class="av-tag">PASSO 07 · PARTE 5 DEL MANUALE</span>
  <h3>🗂️ Preparare storia e Lista Contatti</h3>

  <h4>A. Scrivete la storia personale in 4 parti</h4>
  <div class="av-fields">
    <label class="av-field full">1. Chi sono e cosa faccio?
      <textarea data-av-field="storia-1"></textarea>
    </label>
    <label class="av-field full">2. Cosa cercavo o cosa mi mancava?
      <textarea data-av-field="storia-2"></textarea>
    </label>
    <label class="av-field full">3. Come ho conosciuto Travel Advantage e perché l'ho scelta?
      <textarea data-av-field="storia-3"></textarea>
    </label>
    <label class="av-field full">4. Qual è la mia visione per il futuro?
      <textarea data-av-field="storia-4"></textarea>
    </label>
  </div>

  <h4>B. Iniziate la lista delle 60 persone</h4>
  <p>
    Nel manuale Paolo propone quattro gruppi da 15:
    <strong>Famiglia, Lavoro, Hobby e Professionisti</strong>.
    L'obiettivo è organizzare contatti pertinenti,
    non inviare messaggi indiscriminati.
  </p>

  <div class="av-grid">
    <div class="av-card">
      <strong>👨‍👩‍👧 Famiglia</strong>
      <p>Target del manuale: 15 nominativi.</p>
    </div>
    <div class="av-card">
      <strong>💼 Lavoro</strong>
      <p>Target del manuale: 15 nominativi.</p>
    </div>
    <div class="av-card">
      <strong>🎨 Hobby</strong>
      <p>Target del manuale: 15 nominativi.</p>
    </div>
  </div>
  <div class="av-card">
    <strong>🤝 Professionisti</strong>
    <p>Target del manuale: 15 nominativi.</p>
  </div>

  <div class="av-fields">
    <label class="av-field">Contatti famiglia
      <input data-av-field="contatti-famiglia" type="number" min="0" max="15" placeholder="0">
    </label>
    <label class="av-field">Contatti lavoro
      <input data-av-field="contatti-lavoro" type="number" min="0" max="15" placeholder="0">
    </label>
    <label class="av-field">Contatti hobby
      <input data-av-field="contatti-hobby" type="number" min="0" max="15" placeholder="0">
    </label>
    <label class="av-field">Contatti professionisti
      <input data-av-field="contatti-professionisti" type="number" min="0" max="15" placeholder="0">
    </label>
  </div>

  <div class="av-help">
    <strong>📌 Profilazione dal manuale</strong>
    <br>
    + = contatto potenzialmente molto interessato.
    <br>
    = = interesse da conoscere.
    <br>
    - = interesse non evidente.
    <br><br>
    Sono valutazioni orientative, non giudizi sulle persone.
    Utilizzate un foglio contatti o un CRM appropriato
    e rispettate le preferenze dei destinatari.
  </div>

  <label class="av-check"><input type="checkbox" data-av-check="p7a"><span>Storia personale scritta nelle quattro parti.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p7b"><span>Preparata una versione breve della storia (circa 30 secondi).</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p7c"><span>Lista Contatti avviata e suddivisa nelle quattro categorie.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p7d"><span>Valutato con lo Sponsor come utilizzare correttamente la lista.</span></label>
</div>

<!-- PASSO 8 -->

<div class="av-panel" id="av-08">
  <span class="av-tag">PASSO 08 · INIZIA LA PRATICA</span>
  <h3>💬 Prime conversazioni con lo Sponsor</h3>

  <p>
    Paolo propone di iniziare con
    <strong>tre contatti</strong>, utilizzando
    il supporto dello Sponsor.
    Le persone devono essere realmente disponibili
    a parlare dell'argomento.
  </p>

  <div class="av-script">
    <strong>Esempio di invito</strong>
    Ciao! 😊 Ho conosciuto una piattaforma
    dedicata ai viaggi e ho pensato a te.
    <br><br>
    Visto che ti piace viaggiare,
    ti andrebbe di sapere come funziona?
  </div>

  <div class="av-fields">
    <label class="av-field">Prime conversazioni avviate
      <input data-av-field="primi-inviti" type="number" min="0" placeholder="Es. 3">
    </label>
    <label class="av-field">Presentazioni concordate
      <input data-av-field="presentazioni" type="number" min="0" placeholder="Es. 1">
    </label>
    <label class="av-field full">Domande emerse
      <textarea data-av-field="domande-contatti" placeholder="Annota le domande a cui cercare risposta con lo Sponsor, senza dati sensibili dei contatti."></textarea>
    </label>
  </div>

  <label class="av-check"><input type="checkbox" data-av-check="p8a"><span>Abbiamo provato insieme un messaggio d'invito.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p8b"><span>Il nuovo Ambassador ha avviato le prime conversazioni.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p8c"><span>Abbiamo individuato una presentazione pubblica adatta.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p8d"><span>Abbiamo spiegato come funziona una chiamata a tre.</span></label>
</div>

<!-- PASSO 9 -->

<div class="av-panel" id="av-09">
  <span class="av-tag">PASSO 09 · ENTRO 7 GIORNI</span>
  <h3>📞 Primo check con lo Sponsor</h3>

  <p>
    Il manuale richiede una chiamata di allineamento.
    Apri questa scheda e verifica insieme i punti completati.
  </p>

  <h4>Domande da fare durante il check</h4>
  <div class="av-script">
    1. Hai trovato tutti gli strumenti?
    <br>
    2. Hai avuto difficoltà con Travel Advantage o Biz Center?
    <br>
    3. Sei riuscito a organizzare i tuoi orari?
    <br>
    4. Hai preparato la storia personale e la Lista Contatti?
    <br>
    5. Quali domande sono emerse nelle conversazioni?
    <br>
    6. Qual è il prossimo passo concreto che possiamo fissare?
  </div>

  <div class="av-fields">
    <label class="av-field full">Difficoltà da risolvere
      <textarea data-av-field="difficolta-check"></textarea>
    </label>
    <label class="av-field full">Prossima attività concordata
      <textarea data-av-field="prossima-attivita"></textarea>
    </label>
    <label class="av-field">Data prossimo check
      <input data-av-field="prossimo-check" type="datetime-local">
    </label>
  </div>

  <label class="av-check"><input type="checkbox" data-av-check="p9a"><span>Chiamata di allineamento svolta.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p9b"><span>Problemi iniziali verificati.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p9c"><span>Attività della settimana successiva concordate.</span></label>
</div>

<!-- PASSO 10 -->

<div class="av-panel" id="av-10">
  <span class="av-tag">PASSO 10 · PERCORSO 30 GIORNI</span>
  <h3>🚀 Segui l'avanzamento del primo mese</h3>

  <div class="av-card">
    <strong>🌱 Settimana 1 — Onboarding e setup</strong>
    <p>Accessi, profilo operativo, obiettivi, strumenti e agenda.</p>
  </div>
  <label class="av-check"><input type="checkbox" data-av-check="p10a"><span>Settimana 1: attività iniziali verificate.</span></label>

  <div class="av-card">
    <strong>💬 Settimana 2 — Primi inviti</strong>
    <p>Conversazioni, presentazioni e primi appuntamenti affiancati.</p>
  </div>
  <label class="av-check"><input type="checkbox" data-av-check="p10b"><span>Settimana 2: prime azioni pratiche svolte.</span></label>

  <div class="av-card">
    <strong>🔄 Settimana 3 — Follow-up</strong>
    <p>Approfondimenti, gestione delle domande ed eventuali prime iscrizioni.</p>
  </div>
  <label class="av-check"><input type="checkbox" data-av-check="p10c"><span>Settimana 3: follow-up e attività esaminate.</span></label>

  <div class="av-card">
    <strong>🏅 Settimana 4 — Qualifiche e duplicazione</strong>
    <p>Controllo dei requisiti del rank, affiancamento degli eventuali nuovi iscritti e piano del mese successivo.</p>
  </div>
  <label class="av-check"><input type="checkbox" data-av-check="p10d"><span>Settimana 4: risultati verificati e nuovo piano preparato.</span></label>

  <h4>Riepilogo finale</h4>
  <div class="av-fields">
    <label class="av-field">Presentazioni effettuate
      <input data-av-field="tot-presentazioni" type="number" min="0">
    </label>
    <label class="av-field">Nuovi clienti
      <input data-av-field="tot-clienti" type="number" min="0">
    </label>
    <label class="av-field">Nuovi Ambassador
      <input data-av-field="tot-ambassador" type="number" min="0">
    </label>
    <label class="av-field">Qualifica verificata nel Biz Center
      <input data-av-field="rank" placeholder="Rank effettivo">
    </label>
    <label class="av-field full">Prossimi obiettivi
      <textarea data-av-field="mese-successivo"></textarea>
    </label>
  </div>

  <div class="av-alert">
    <strong>Il focus Silver nel manuale è un obiettivo operativo.</strong>
    <br>
    Tre iscritti o il completamento dei 30 giorni
    non garantiscono automaticamente il rank
    o un compenso mensile.
    Verificate sempre tutti i requisiti nel piano vigente.
  </div>

  <label class="av-check"><input type="checkbox" data-av-check="p10e"><span>Abbiamo controllato i risultati effettivi nel Biz Center.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p10f"><span>Abbiamo fissato il piano dei prossimi 30 giorni.</span></label>
  <label class="av-check"><input type="checkbox" data-av-check="p10g"><span>Il nuovo Ambassador sa dove trovare questa stessa guida per affiancare altre persone.</span></label>
</div>

<div class="av-final">
  <h3>🤝 Hai completato il percorso di avviamento</h3>
  <p>
    Adesso il nuovo Ambassador conosce
    gli strumenti principali, ha definito
    il proprio percorso, ha iniziato
    a fare pratica e sa a chi rivolgersi
    per ricevere supporto.
    <br><br>
    <strong>Il prossimo obiettivo è consolidare
    l'autonomia e continuare la formazione.</strong>
  </p>
</div>

<p class="av-sub">
  Fonte: Manuale Operativo The Travel Legends, ottobre 2026.
  La struttura di questa pagina è stata adattata
  per l'utilizzo pratico da parte dello Sponsor.
  I link derivano dai collegamenti presenti nel PDF originale.
</p>

</div>
</section>
`);

(function () {
  const storageKey = "atlante-avviamento-v1";
  let currentSection = null;

  function readSaved() {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "{}");
    } catch (e) {
      return {};
    }
  }

  function saveData() {
    if (!currentSection || !currentSection.isConnected) return;
    const result = {};

    currentSection.querySelectorAll("[data-av-check]").forEach(el => {
      result["check:" + el.dataset.avCheck] = el.checked;
    });

    currentSection.querySelectorAll("[data-av-field]").forEach(el => {
      result["field:" + el.dataset.avField] = el.value;
    });

    try {
      localStorage.setItem(storageKey, JSON.stringify(result));
    } catch (e) {
      // La pagina resta utilizzabile anche senza salvataggio.
    }
  }

  function updateProgress() {
    if (!currentSection || !currentSection.isConnected) return;
    const checks = Array.from(
      currentSection.querySelectorAll("[data-av-check]")
    );
    const completed = checks.filter(el => el.checked).length;
    const total = checks.length;
    const percent = total ? Math.round(completed / total * 100) : 0;

    const bar = currentSection.querySelector("#av-progress-bar");
    const label = currentSection.querySelector("#av-progress-label");

    if (bar) bar.style.width = percent + "%";
    if (label) {
      label.textContent =
        completed + " attività completate su " + total +
        " · " + percent + "%";
    }
  }

  function initialize() {
    const section = document.querySelector("#faq");
    if (!section || section === currentSection) return;
    currentSection = section;

    const saved = readSaved();

    section.querySelectorAll("[data-av-check]").forEach(el => {
      el.checked = saved["check:" + el.dataset.avCheck] === true;
    });

    section.querySelectorAll("[data-av-field]").forEach(el => {
      const value = saved["field:" + el.dataset.avField];
      if (typeof value === "string") el.value = value;
    });

    section.addEventListener("input", () => {
      saveData();
      updateProgress();
    });

    section.addEventListener("change", () => {
      saveData();
      updateProgress();
    });

    updateProgress();
  }

  window.avviaTeamReset = function () {
    if (!confirm("Vuoi cancellare spunte e note di questa scheda?")) {
      return;
    }

    try {
      localStorage.removeItem(storageKey);
    } catch (e) {}

    if (currentSection) {
      currentSection.querySelectorAll("[data-av-check]").forEach(el => {
        el.checked = false;
      });
      currentSection.querySelectorAll("[data-av-field]").forEach(el => {
        el.value = "";
      });
    }

    updateProgress();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }

  const observer = new MutationObserver(initialize);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
