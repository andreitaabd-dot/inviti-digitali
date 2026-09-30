(() => {

  /* =========================================================
     CONFIG + FUNZIONI BASE
  ========================================================= */

  const C =
    window.INVITO_CONFIG ||
    (typeof INVITO_CONFIG !== 'undefined' ? INVITO_CONFIG : null);

  if (!C) {
    console.error('INVITO_CONFIG non trovato.');
    return;
  }

  const $ = (s, root = document) => root.querySelector(s);

  const esc = s =>
    String(s ?? '').replace(/[&<>'"]/g, c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[c]));

  const img = (src, cls = '', alt = '') =>
    src
      ? `<img src="${esc(src)}"
                    class="${cls}"
                    alt="${esc(alt)}"
                    onerror="this.style.display='none'">`
      : '';

  const activeDeco = pos =>
    C.decorazioni?.attivo
      ? (C.decorazioni.immagini || [])
        .filter(x => x.attivo && x.posizione === pos)
        .map(x => img(x.file, `decor ${pos}`, ''))
        .join('')
      : '';


  /* =========================================================
     META
  ========================================================= */

  document.title = C.meta?.title || 'Invitación';

  const metas = {
    '#meta-description': C.meta?.description,
    '#og-title': C.meta?.title,
    '#og-description': C.meta?.description,
    '#og-image': C.meta?.image,
    '#og-url': C.meta?.url
  };

  Object.entries(metas).forEach(([selector, value]) => {

    const element = $(selector);

    if (element && value) {
      element.setAttribute('content', value);
    }
  });


  /* =========================================================
     TEMA
  ========================================================= */

  const t = C.tema || {};

  document.documentElement.style.setProperty(
    '--bg',
    t.coloreSfondoFallback || '#eaf7ff'
  );

  document.documentElement.style.setProperty(
    '--text',
    t.coloreTesto || '#164f82'
  );

  document.documentElement.style.setProperty(
    '--dark',
    t.coloreTestoScuro || '#30343b'
  );

  document.documentElement.style.setProperty(
    '--button',
    t.coloreBottone || '#2da8e8'
  );

  document.documentElement.style.setProperty(
    '--button-text',
    t.coloreBottoneTesto || '#ffffff'
  );

  document.documentElement.style.setProperty(
    '--page-image',
    t.sfondoPagina
      ? `url('${t.sfondoPagina}')`
      : 'none'
  );


  const e = C.evento || {};

  let html = '<main class="invite-shell">';


  /* =========================================================
     COVER / BUSTA
     QUESTA È LA STRUTTURA ORIGINALE DEL MODELLO
     NON MODIFICARE
  ========================================================= */

  if (C.cover?.attivo) {

    const cv = C.cover;

    html += `
            <section
                class="cover"
                id="cover"
                style="background-image:url('${esc(cv.sfondo || '')}')"
            >
                <div class="cover-inner">

                    <h1 class="cover-title">
                        ${esc(cv.titolo || e.titolo)}
                    </h1>

                    <div class="cover-name">
                        ${esc(cv.nome || e.nome)}
                    </div>

                    <button
                        class="envelope-wrap"
                        id="openInvite"
                        aria-label="Abrir invitación"
                    >
                        ${cv.decorazione?.attiva
        ? img(
          cv.decorazione.immagine,
          'cover-character',
          ''
        )
        : ''
      }

                        ${img(
        cv.envelope,
        'envelope',
        'Sobre'
      )}
                    </button>

                    <div class="open-text">
                        ${esc(
        cv.testoApri ||
        'ABRIR INVITACIÓN'
      )}
                    </div>

                </div>
            </section>
        `;
  }


  /* =========================================================
     CONTENUTO INVITO
  ========================================================= */

  html += '<div class="invite-content">';


  /* =========================================================
     1 — BATTITO
     SENZA TESTO SOPRA
  ========================================================= */

  if (C.battito?.attivo) {

    html += `
            <section class="section heartbeat reference-heartbeat">

                ${C.battito.mostraPlayer
        ? `
                            <audio
                                id="heartbeatAudio"
                                class="heartbeat-player"
                                controls
                                preload="metadata"
                                src="${esc(C.battito.file)}"
                            ></audio>
                        `
        : ''
      }

            </section>
        `;
  }


  /* =========================================================
     2 — LA DULCE ESPERA...
  ========================================================= */

  if (C.intro?.attivo) {

    html += `
            <section class="section reference-pretitle">

                <div class="copy pre-title">
                    ${esc(e.preTitolo)}
                </div>

            </section>
        `;
  }


  /* =========================================================
     3 — IMMAGINE + BABY SHOWER
  ========================================================= */

  if (C.intro?.attivo) {

    html += `
            <section class="section reference-babyshower">

                <div class="reference-two-columns">

                    <div class="reference-image-side">
                        ${img(
      C.intro.immagine,
      'reference-baby-image',
      ''
    )}
                    </div>

                    <div class="reference-title-side">

                        <div class="reference-baby-word">
                            BABY
                        </div>

                        <div class="reference-shower-word">
                            SHOWER
                        </div>

                    </div>

                </div>

            </section>
        `;
  }


  /* =========================================================
     4 — NOMI GENITORI
  ========================================================= */

  if (
    C.intro?.attivo &&
    C.intro?.mostraGenitori
  ) {

    html += `
            <section class="section reference-parents">

                <div class="parents">
                    ${esc(e.genitori)}
                </div>

            </section>
        `;
  }


  /* =========================================================
     5 — FRASE INVITO
  ========================================================= */

  if (
    C.intro?.attivo &&
    C.intro?.mostraTestoInvito
  ) {

    html += `
            <section class="section reference-invitation-text">

                <p class="copy">
                    ${esc(e.testoInvito)}
                </p>

            </section>
        `;
  }


  /* =========================================================
     6 — LIAM
  ========================================================= */

  if (C.intro?.attivo) {

    html += `
            <section class="section reference-name">

                <div class="baby-name">
                    ${esc(e.nome)}
                </div>

            </section>
        `;
  }


  /* =========================================================
     7 — ECOGRAFIA
     La cliente fornirà ecografia.jpg

     Se il file ancora non esiste, viene semplicemente nascosto
     grazie all'onerror.
  ========================================================= */

  if (C.ecografia?.attivo && C.ecografia?.immagine) {

    html += `
        <section class="section reference-ultrasound">

            ${img(
      C.ecografia.immagine,
      'ultrasound-image',
      'Ecografía'
    )}

        </section>
    `;
  }


  /* =========================================================
     8 — DATA
  ========================================================= */

  html += `
        <section class="section date-section reference-date">

            <div class="reference-date-grid">

                <div class="reference-date-left">

                    <div class="date-time">
                        ${esc(e.ora)}
                    </div>

                </div>

                <div class="reference-date-center">

                    <div class="date-big">
                        ${esc(e.giorno)}
                    </div>

                </div>

                <div class="reference-date-right">

                    <div class="date-month">
                        ${esc(e.mese)}
                    </div>

                    <div class="date-year">
                        ${esc(e.anno)}
                    </div>

                </div>

            </div>

        </section>
    `;


  /* =========================================================
     9 — IMMAGINE + COUNTDOWN
  ========================================================= */

  if (C.countdown?.attivo) {

    html += `
            <section class="section reference-countdown">

                <div class="reference-two-columns">

                    <div class="reference-image-side">

                        ${img(
      C.countdown.immagine,
      'reference-countdown-image',
      ''
    )}

                    </div>

                    <div class="reference-countdown-side">

                        <h2>
                            ${esc(C.countdown.titolo)}
                        </h2>

                        <div
                            class="countdown-grid"
                            id="countdown"
                        >

                            <div class="countdown-item">
                                <strong data-u="d">0</strong>
                                <span>Días</span>
                            </div>

                            <div class="countdown-item">
                                <strong data-u="h">0</strong>
                                <span>Horas</span>
                            </div>

                            <div class="countdown-item">
                                <strong data-u="m">0</strong>
                                <span>Min</span>
                            </div>

                            <div class="countdown-item">
                                <strong data-u="s">0</strong>
                                <span>Seg</span>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        `;
  }


  /* =========================================================
     10 — DIRECCIÓN + IMMAGINE
  ========================================================= */

  if (C.luogo?.attivo) {

    const l = C.luogo;

    html += `
            <section class="section location reference-location">

                <div class="reference-two-columns">

                    <div class="reference-location-text">

                        <h2>
                            ${esc(l.titolo)}
                        </h2>

                        <p class="copy">
                            ${esc(l.indirizzo)}
                        </p>

                    </div>

                    <div class="reference-image-side">

                        ${img(
       C.luogo.immagine,
      'reference-location-image',
      ''
    )}

                    </div>

                </div>

            </section>
        `;
  }


  /* =========================================================
     11 — IMMAGINE +
     VER UBICACIÓN
     REGALOS
     LISTA DE REGALOS
  ========================================================= */

  if (
    C.luogo?.attivo ||
    C.regali?.attivo
  ) {

    let map = '';

    if (C.luogo?.attivo) {

      map =
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          C.luogo.mapsQuery ||
          C.luogo.indirizzo ||
          ''
        )
        }`;
    }

    html += `
            <section class="section reference-actions">

                <div class="reference-two-columns">

                    <div class="reference-image-side">

                        ${img(
      C.regali.immagineSezione,
      'reference-actions-image',
      ''
    )}

                    </div>

                    <div class="reference-actions-side">
        `;


    if (
      C.luogo?.attivo &&
      C.luogo?.mostraBottone
    ) {

      html += `
                <a
                    class="btn reference-map-button"
                    target="_blank"
                    rel="noopener"
                    href="${map}"
                >
                    ${esc(
        C.luogo.testoBottone ||
        'VER UBICACIÓN'
      )}
                </a>
            `;
    }


    if (C.regali?.attivo) {

      html += `
                <h2 class="reference-gifts-title">
                    ${esc(
        C.regali.titolo ||
        'Regalos'
      )}
                </h2>
            `;

      /*
       * Per questo invito il cliente ha indicato
       * "Busta o regalos".
       *
       * Se in futuro viene inserito un link in una delle
       * opzioni, il pulsante lo aprirà.
       */

      if (C.regali.immagineLista) {

    html += `
        <button
            type="button"
            class="btn reference-gift-button"
            id="openGiftModal"
        >
            ${esc(
                C.regali.testoBottone ||
                'LISTA DE REGALOS'
            )}
        </button>
    `;
}
    }


    html += `
                    </div>

                </div>

            </section>
        `;
  }


  /* =========================================================
     12 — RSVP SINISTRA + IMMAGINE DESTRA
  ========================================================= */

  if (C.rsvp?.attivo) {

    const contacts =
      (C.rsvp.contatti || [])
        .filter(x => x.attivo);

    html += `
            <section class="section rsvp reference-rsvp">

                <div class="reference-two-columns">

                    <div class="reference-rsvp-side">

                        <h2>
                            ${esc(C.rsvp.titolo)}
                        </h2>

                        <div class="rsvp-list">
        `;


    contacts.forEach(x => {

      const numero =
        String(x.numero || '')
          .replace(/\D/g, '');

      const wa =
        `https://wa.me/${numero}?text=${encodeURIComponent(
          x.messaggio || ''
        )
        }`;

      html += `
                <div class="contact-card">

                    <div class="contact-label">
                        ${esc(x.label)}
                    </div>

                    <a
                        class="btn"
                        href="${wa}"
                        target="_blank"
                        rel="noopener"
                    >
                        ${esc(
        x.testoBottone ||
        'CONFIRMA TU ASISTENCIA'
      )}
                    </a>

                </div>
            `;
    });


    html += `
                        </div>

                    </div>

                    <div class="reference-image-side">

                        ${img(
       C.rsvp.immagine,
      'reference-rsvp-image',
      ''
    )}

                    </div>

                </div>

            </section>
        `;
  }


  /* =========================================================
     CALENDARIO
     Resta configurabile.
     Se attivo viene inserito dopo RSVP.
  ========================================================= */

  if (C.calendario?.attivo) {

    const c = C.calendario;

    const googleCalendar =
      `https://calendar.google.com/calendar/render` +
      `?action=TEMPLATE` +
      `&text=${encodeURIComponent(c.titolo || '')}` +
      `&dates=${encodeURIComponent(
        c.inizio + '/' + c.fine
      )}` +
      `&details=${encodeURIComponent(
        c.descrizione || ''
      )}`;

    html += `
            <section class="section calendar-section">

                <a
                    class="btn"
                    target="_blank"
                    rel="noopener"
                    href="${googleCalendar}"
                >
                    ${esc(c.testoBottone)}
                </a>

            </section>
        `;
  }


  /* =========================================================
     GALLERIA
     Resta configurabile.
  ========================================================= */

  if (C.galleria?.attivo) {

    html += `
            <section class="section gallery-section">

                <h2>
                    ${esc(C.galleria.titolo)}
                </h2>

                <p class="copy">
                    ${esc(C.galleria.testo)}
                </p>

                ${C.galleria.link
        ? `
                            <a
                                class="btn"
                                href="${esc(C.galleria.link)}"
                                target="_blank"
                                rel="noopener"
                            >
                                VER FOTOS
                            </a>
                        `
        : ''
      }

            </section>
        `;
  }


  /* =========================================================
     13 — FRASE FINALE
  ========================================================= */

  html += `
        <section class="section reference-final-text">

            <p class="copy">
                ${esc(e.testoFinale)}
            </p>

        </section>
    `;


  /* =========================================================
     14 — IMMAGINE FINALE
     Drago + bambino sovrapposti
  ========================================================= */

  html += `
        <section class="section reference-final-image">

            <div class="final-art">

                ${img(
    C.finale?.immagineDrago,
    'final-dragon',
    ''
  )}

                ${img(
      C.finale?.immagineDecorazione,
    'final-baby',
    ''
  )}

            </div>

        </section>
    `;


  /* =========================================================
     15 — ¡NO FALTES!
  ========================================================= */

  html += `
        <section class="section reference-no-faltes">

            <div class="no-faltes-text">
                ¡No faltes!
            </div>

        </section>
    `;


  /* =========================================================
     CHIUSURA CONTENUTO
  ========================================================= */

  html += '</div>';

  /* =========================================================
   MODAL LISTA REGALOS
========================================================= */

if (
    C.regali?.attivo &&
    C.regali?.immagineLista
) {

    html += `
        <div
            class="gift-modal"
            id="giftModal"
            aria-hidden="true"
        >
            <div class="gift-modal-backdrop"></div>

            <div
                class="gift-modal-content"
                role="dialog"
                aria-modal="true"
                aria-label="Lista de regalos"
            >

                <button
                    type="button"
                    class="gift-modal-close"
                    id="closeGiftModal"
                    aria-label="Cerrar"
                >
                    ×
                </button>

                ${img(
                    C.regali.immagineLista,
                    'gift-modal-image',
                    'Lista de regalos'
                )}

            </div>
        </div>
    `;
}


  /* =========================================================
     MUSICA
  ========================================================= */

  if (C.musica?.attivo) {

    html += `
            <audio
                id="bgMusic"
                loop
                preload="auto"
                src="${esc(C.musica.file)}"
            ></audio>
        `;

    if (C.musica.mostraControllo) {

      html += `
                <button
                    id="musicToggle"
                    class="music-toggle"
                    aria-label="Música"
                >
                    ♫
                </button>
            `;
    }
  }


  html += '</main>';


  /* =========================================================
     INSERIMENTO NELLA PAGINA
  ========================================================= */

  const app = $('#app');

  if (!app) {
    console.error('#app non trovato.');
    return;
  }

  app.innerHTML = html;

  /* =========================================================
   APERTURA / CHIUSURA MODAL REGALOS
========================================================= */

const giftModal = $('#giftModal');
const openGiftModal = $('#openGiftModal');
const closeGiftModal = $('#closeGiftModal');

function apriGiftModal() {

    if (!giftModal) return;

    giftModal.classList.add('active');
    giftModal.setAttribute('aria-hidden', 'false');

    document.body.classList.add('modal-open');
}

function chiudiGiftModal() {

    if (!giftModal) return;

    giftModal.classList.remove('active');
    giftModal.setAttribute('aria-hidden', 'true');

    document.body.classList.remove('modal-open');
}

openGiftModal?.addEventListener(
    'click',
    apriGiftModal
);

closeGiftModal?.addEventListener(
    'click',
    chiudiGiftModal
);

giftModal
    ?.querySelector('.gift-modal-backdrop')
    ?.addEventListener(
        'click',
        chiudiGiftModal
    );

document.addEventListener(
    'keydown',
    event => {

        if (
            event.key === 'Escape' &&
            giftModal?.classList.contains('active')
        ) {
            chiudiGiftModal();
        }
    }
);


  /* =========================================================
     AUDIO
  ========================================================= */

  const music = $('#bgMusic');
  const heart = $('#heartbeatAudio');

  let musicWasPlaying = false;


  if (music) {

    music.volume =
      Math.max(
        0,
        Math.min(
          1,
          Number(
            C.musica?.volume ?? 0.45
          )
        )
      );
  }


  const startMusic = () => {

    if (!music) return;

    music.play().catch(() => { });
  };


  /* =========================================================
     APERTURA BUSTA
     LOGICA ORIGINALE
  ========================================================= */

  $('#openInvite')?.addEventListener(
    'click',
    () => {

      const cover = $('#cover');

      cover?.classList.add('open');

      startMusic();

      setTimeout(
        () => {
          cover?.remove();
        },
        750
      );
    }
  );


  /*
   * Se in un altro invito la cover è disattivata,
   * il contenuto resta comunque utilizzabile.
   */
  if (!C.cover?.attivo) {
    startMusic();
  }


  /* =========================================================
     CONTROLLO MUSICA
  ========================================================= */

  $('#musicToggle')?.addEventListener(
    'click',
    () => {

      if (!music) return;

      if (music.paused) {

        music
          .play()
          .catch(() => { });

      } else {

        music.pause();
      }
    }
  );


  /* =========================================================
     BATTITO:
     PLAY = pausa musica
     PAUSA/FINE = riprende musica
  ========================================================= */

  if (heart) {

    heart.addEventListener(
      'play',
      () => {

        if (
          music &&
          C.battito?.pausaMusica
        ) {

          musicWasPlaying =
            !music.paused;

          if (musicWasPlaying) {
            music.pause();
          }
        }
      }
    );


    const resumeMusic = () => {

      if (
        music &&
        C.battito?.riprendiMusicaDopo &&
        musicWasPlaying
      ) {

        music
          .play()
          .catch(() => { });
      }

      musicWasPlaying = false;
    };


    heart.addEventListener(
      'pause',
      () => {

        if (
          heart.currentTime > 0 &&
          !heart.ended
        ) {
          resumeMusic();
        }
      }
    );


    heart.addEventListener(
      'ended',
      resumeMusic
    );
  }


  /* =========================================================
     COUNTDOWN
  ========================================================= */

  if (
    C.countdown?.attivo &&
    C.countdown?.dataISO
  ) {

    const target =
      new Date(
        C.countdown.dataISO
      ).getTime();


    const tick = () => {

      let difference =
        Math.max(
          0,
          target - Date.now()
        );


      const days =
        Math.floor(
          difference / 86400000
        );

      difference %= 86400000;


      const hours =
        Math.floor(
          difference / 3600000
        );

      difference %= 3600000;


      const minutes =
        Math.floor(
          difference / 60000
        );


      const seconds =
        Math.floor(
          (difference % 60000) / 1000
        );


      [
        ['d', days],
        ['h', hours],
        ['m', minutes],
        ['s', seconds]

      ].forEach(([unit, value]) => {

        const node =
          document.querySelector(
            `[data-u="${unit}"]`
          );

        if (node) {

          node.textContent =
            String(value)
              .padStart(2, '0');
        }
      });
    };


    tick();

    setInterval(
      tick,
      1000
    );
  }


  /* =========================================================
     EFFETTI
  ========================================================= */

  if (
    C.effetti?.attivo &&
    C.effetti?.tipo === 'sparkles'
  ) {

    for (
      let i = 0;
      i < (C.effetti.quantita || 10);
      i++
    ) {

      const sparkle =
        document.createElement('span');

      sparkle.className = 'sparkle';

      sparkle.textContent = '✦';

      sparkle.style.left =
        (Math.random() * 96) + 'vw';

      sparkle.style.top =
        (Math.random() * 96) + 'vh';

      sparkle.style.animationDelay =
        (Math.random() * 4) + 's';

      document.body.appendChild(
        sparkle
      );
    }
  }


  /* =========================================================
     COVER RESPONSIVE
     IMPORTANTE:
     TUTTA LA BUSTA DEVE ENTRARE IN UNA SOLA SCHERMATA.

     QUESTA È LA FUNZIONE CHE AVEVAMO GIÀ SISTEMATO.
  ========================================================= */

  function adattaCover() {

    const cover =
      document.querySelector('.cover');

    const inner =
      document.querySelector('.cover-inner');


    if (!cover || !inner) {
      return;
    }


    /*
     * Azzera temporaneamente la scala
     * per misurare le dimensioni reali.
     */
    inner.style.transform = 'scale(1)';


    const margine = 20;


    const spazioLarghezza =
      window.innerWidth -
      (margine * 2);


    const spazioAltezza =
      window.innerHeight -
      (margine * 2);


    const larghezzaReale =
      inner.scrollWidth;


    const altezzaReale =
      inner.scrollHeight;


    if (
      !larghezzaReale ||
      !altezzaReale
    ) {
      return;
    }


    const scalaX =
      spazioLarghezza /
      larghezzaReale;


    const scalaY =
      spazioAltezza /
      altezzaReale;


    /*
     * Non ingrandiamo mai.
     * Riduciamo solo se necessario.
     */
    const scala =
      Math.min(
        1,
        scalaX,
        scalaY
      );


    inner.style.transform =
      `scale(${scala})`;
  }


  /* =========================================================
     RICALCOLO COVER
  ========================================================= */

  adattaCover();


  window.addEventListener(
    'load',
    () => {

      adattaCover();

      /*
       * Secondo controllo dopo caricamento
       * font e immagini.
       */
      setTimeout(
        adattaCover,
        150
      );
    }
  );


  window.addEventListener(
    'resize',
    adattaCover
  );


  window.addEventListener(
    'orientationchange',
    () => {

      setTimeout(
        adattaCover,
        150
      );
    }
  );


  /*
   * Se le immagini della cover vengono caricate
   * dopo lo script, ricalcoliamo la scala.
   */
  document
    .querySelectorAll('.cover img')
    .forEach(image => {

      if (!image.complete) {

        image.addEventListener(
          'load',
          adattaCover,
          { once: true }
        );
      }
    });


  /*
   * Anche il caricamento dei font può cambiare
   * l'altezza della cover.
   */
  if (document.fonts?.ready) {

    document.fonts.ready.then(
      () => {
        adattaCover();
      }
    );
  }

})();