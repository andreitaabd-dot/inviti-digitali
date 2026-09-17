/* ============================================================
   INVITI WOW - TEMPLATE GIORNALE
   script.js
   Versione 1.0
   ============================================================ */

(() => {
  "use strict";

  if (typeof INVITO_CONFIG === "undefined") {
    console.error("INVITO_CONFIG non trovato. Controlla config.js");
    return;
  }

  const C = INVITO_CONFIG;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) =>
    Array.from(root.querySelectorAll(sel));

  const els = {
    loading: $("#loadingScreen"),
    app: $("#newspaperApp"),
    viewer: $("#viewer"),
    book: $("#book"),

    prev: $("#prevBtn"),
    next: $("#nextBtn"),
    indicator: $("#pageIndicator"),

    zoomBtn: $("#zoomBtn"),
    fullscreenBtn: $("#fullscreenBtn"),
    audioBtn: $("#audioBtn"),
    audioIcon: $("#audioIcon"),

    music: $("#bgMusic"),
    musicSource: $("#musicSource"),

    rsvpModal: $("#rsvpModal"),
    rsvpForm: $("#rsvpForm"),
    rsvpFields: $("#rsvpFields"),
    rsvpSubtitle: $("#rsvpSubtitle"),
    rsvpSubmit: $("#rsvpSubmitBtn"),
    rsvpMessage: $("#rsvpMessage"),

    zoomModal: $("#zoomModal"),
    zoomContent: $("#zoomContent"),

    toast: $("#toast")
  };

  const state = {
    pages: [],
    currentIndex: 0,

    mode: "single",

    spreads: [],
    currentSpread: 0,

    musicStarted: false,

    toastTimer: null
  };


  /* ============================================================
     HELPERS
     ============================================================ */

  function esc(value) {

    return String(value ?? "")

      .replaceAll("&", "&amp;")

      .replaceAll("<", "&lt;")

      .replaceAll(">", "&gt;")

      .replaceAll('"', "&quot;")

      .replaceAll("'", "&#039;");
  }


  function safeUrl(value) {

    const v =
      String(value ?? "").trim();

    if (!v) {
      return "";
    }

    try {

      const url =
        new URL(
          v,
          window.location.href
        );

      if (
        url.protocol === "http:" ||
        url.protocol === "https:"
      ) {

        return url.href;

      }

    } catch (error) {

      if (C.debug) {
        console.warn(error);
      }

    }

    return "";
  }


  function htmlText(value) {

    return esc(value)
      .replace(/\n/g, "<br>");

  }


  function isEnabled(obj) {

    return (
      !!obj &&
      obj.attivo !== false
    );

  }


  function targetAttr() {

    return `
      target="_blank"
      rel="noopener noreferrer"
    `;

  }


  function linkHtml(
    text,
    url,
    className = "newspaper-link"
  ) {

    const clean =
      safeUrl(url);

    if (!clean) {

      return `
        <span>
          ${esc(text)}
        </span>
      `;

    }

    return `
      <a
        class="${className}"
        href="${esc(clean)}"
        ${targetAttr()}
      >
        ${esc(text)}
      </a>
    `;

  }


  function showToast(message) {

    if (
      !els.toast ||
      !message
    ) {
      return;
    }

    clearTimeout(
      state.toastTimer
    );

    els.toast.textContent =
      message;

    els.toast.classList
      .remove("hidden");

    state.toastTimer =
      setTimeout(
        () => {

          els.toast.classList
            .add("hidden");

        },
        2200
      );

  }


  function cssVar(
    name,
    value
  ) {

    if (
      value !== undefined &&
      value !== null &&
      value !== ""
    ) {

      document
        .documentElement
        .style
        .setProperty(
          name,
          value
        );

    }

  }


  function setMeta(
    selector,
    attr,
    value
  ) {

    const node =
      $(selector);

    if (
      node &&
      value
    ) {

      node.setAttribute(
        attr,
        value
      );

    }

  }


  function pageShell(
    id,
    extraClass,
    innerHtml
  ) {

    return `

      <section
        class="newspaper-page ${extraClass || ""}"
        data-page-id="${esc(id)}"
      >

        <div class="page-inner">

          ${innerHtml}

        </div>

      </section>

    `;

  }


  /* ============================================================
     META + TEMA
     ============================================================ */

  function applyMetaAndTheme() {

    const meta =
      C.meta || {};

    const tema =
      C.tema || {};


    if (meta.title) {

      document.title =
        meta.title;

    }


    setMeta(
      'meta[property="og:title"]',
      "content",
      meta.title
    );


    setMeta(
      'meta[property="og:description"]',
      "content",
      meta.description
    );


    setMeta(
      'meta[property="og:image"]',
      "content",
      meta.image
    );


    setMeta(
      'meta[property="og:url"]',
      "content",
      meta.url
    );


    setMeta(
      'meta[name="description"]',
      "content",
      meta.description
    );


    cssVar(
      "--viewer-bg",
      tema.coloreSfondoViewer
    );


    cssVar(
      "--paper",
      tema.coloreCarta
    );


    cssVar(
      "--primary",
      tema.colorePrimario
    );


    cssVar(
      "--secondary",
      tema.coloreSecondario
    );


    cssVar(
      "--text",
      tema.coloreTesto
    );


    cssVar(
      "--text-secondary",
      tema.coloreTestoSecondario
    );


    cssVar(
      "--line",
      tema.coloreLinea
    );


    cssVar(
      "--line-light",
      tema.coloreLineaLeggera
    );


    cssVar(
      "--button-bg",
      tema.colorePulsante
    );


    cssVar(
      "--button-text",
      tema.coloreTestoPulsante
    );


    cssVar(
      "--font-newspaper",
      tema.fontTestata
    );


    cssVar(
      "--font-title",
      tema.fontTitolo
    );


    cssVar(
      "--font-body",
      tema.fontTesto
    );


    cssVar(
      "--font-sans",
      tema.fontSans
    );


    cssVar(
      "--font-signature",
      tema.fontFirma
    );


    cssVar(
      "--page-shadow",
      tema.ombraPagina
    );


    cssVar(
      "--page-radius",
      tema.raggioPagina
    );


    const themeMeta =
      $('meta[name="theme-color"]');


    if (
      themeMeta &&
      tema.coloreSfondoViewer
    ) {

      themeMeta.setAttribute(
        "content",
        tema.coloreSfondoViewer
      );

    }

  }


  /* ============================================================
     TESTATA GIORNALE
     ============================================================ */

  function newspaperHeader(
    custom = {}
  ) {

    const testata =
      C.testata || {};


    if (
      testata
        .mostraTestataNellePagineInterne === false &&
      custom.force !== true
    ) {

      return "";

    }


    const nome =
      custom.nomeGiornale ||
      testata.nomeGiornale ||
      "";


    const localita =
      custom.localita ||
      testata.localita ||
      C.evento?.localitaTestata ||
      "";


    const data =
      custom.data ||
      testata.data ||
      C.evento?.dataTestata ||
      "";


    return `

      <header class="newspaper-header">

        <div class="newspaper-header-top">

          <span>
            ${esc(localita)}
          </span>

          <span>
            INVITI WOW
          </span>

          <span>
            ${esc(data)}
          </span>

        </div>


        ${
          nome
            ? `
              <div class="newspaper-name">
                ${esc(nome)}
              </div>
            `
            : ""
        }


        <div class="newspaper-header-bottom">

          <span>
            ${esc(localita)}
          </span>

          <span>
            ${esc(data)}
          </span>

        </div>

      </header>

    `;

  }


  /* ============================================================
     COPERTINA
     ============================================================ */

  function renderCover(
    id,
    p
  ) {

    const header =
      newspaperHeader({

        force: true,

        nomeGiornale:
          p.nomeGiornale,

        localita:
          p.localita,

        data:
          p.data

      });


    const quote =
      p.citazione?.testo

        ? `

          <div class="cover-quote">

            “${htmlText(
              p.citazione.testo
            )}”

            ${
              p.citazione.autore

                ? `
                  <span class="cover-quote-author">
                    — ${esc(
                      p.citazione.autore
                    )}
                  </span>
                `

                : ""
            }

          </div>

        `

        : "";


    const fascia =
      p.fasciaInferiore
        ?.attiva !== false &&
      Array.isArray(
        p.fasciaInferiore?.testi
      )

        ? `

          <div class="cover-footer-band">

            ${
              p
                .fasciaInferiore
                .testi
                .map(
                  testo => `
                    <span>
                      ${esc(testo)}
                    </span>
                  `
                )
                .join("")
            }

          </div>

        `

        : "";


    return pageShell(
      id,
      "page-cover",

      `

        ${
          p.sopraTitolo

            ? `
              <div class="cover-breaking-news">
                ${esc(
                  p.sopraTitolo
                )}
              </div>
            `

            : ""
        }


        ${header}


        <h1 class="cover-title">

          ${esc(p.titolo)}

        </h1>


        ${
          p.sottotitolo

            ? `
              <div class="cover-subtitle">
                ${esc(
                  p.sottotitolo
                )}
              </div>
            `

            : ""
        }


        ${
          p.foto

            ? `
              <img
                class="cover-main-photo"
                src="${esc(p.foto)}"
                alt="${esc(
                  p.altFoto || ""
                )}"
              >
            `

            : ""
        }


        <div class="cover-bottom-grid">

          ${quote}

          <p class="cover-description">

            ${htmlText(
              p.testo
            )}

          </p>

        </div>


        ${fascia}

      `
    );

  }


  /* ============================================================
     PAGINA MATRIMONIO
     ============================================================ */

  function renderMarriage(
    id,
    p
  ) {

    const cerimonia =
      p.cerimonia || {};

    const ricevimento =
      p.ricevimento || {};


    const locations = `

      <div class="location-grid">


        ${
          isEnabled(cerimonia)

            ? `

              <div class="location-card">

                ${
                  cerimonia.foto

                    ? `
                      <img
                        src="${esc(
                          cerimonia.foto
                        )}"
                        alt="${esc(
                          cerimonia.nome ||
                          "Cerimonia"
                        )}"
                      >
                    `

                    : ""
                }


                ${
                  linkHtml(
                    cerimonia.nome ||
                    "Cerimonia",

                    cerimonia.link,

                    "location-name"
                  )
                }


                ${
                  cerimonia
                    .descrizioneLink

                    ? `
                      <div class="location-helper">
                        ${esc(
                          cerimonia
                            .descrizioneLink
                        )}
                      </div>
                    `

                    : ""
                }

              </div>

            `

            : ""
        }


        ${
          isEnabled(ricevimento)

            ? `

              <div class="location-card">

                ${
                  ricevimento.foto

                    ? `
                      <img
                        src="${esc(
                          ricevimento.foto
                        )}"
                        alt="${esc(
                          ricevimento.nome ||
                          "Ricevimento"
                        )}"
                      >
                    `

                    : ""
                }


                ${
                  ricevimento.testoPrima

                    ? `
                      <p class="newspaper-text">
                        ${htmlText(
                          ricevimento
                            .testoPrima
                        )}
                      </p>
                    `

                    : ""
                }


                ${
                  linkHtml(
                    ricevimento.nome ||
                    "Ricevimento",

                    ricevimento.link,

                    "location-name"
                  )
                }


                ${
                  ricevimento
                    .descrizioneLink

                    ? `
                      <div class="location-helper">
                        ${esc(
                          ricevimento
                            .descrizioneLink
                        )}
                      </div>
                    `

                    : ""
                }

              </div>

            `

            : ""
        }

      </div>

    `;


    let info =
      "";


    if (
      p.infoUtili?.attive !== false &&
      Array.isArray(
        p.infoUtili?.colonne
      )
    ) {

      info = `

        <section class="useful-info">

          <h2 class="section-title">

            ${esc(
              p.infoUtili.titolo ||
              "Info utili"
            )}

          </h2>


          <div class="info-columns">

            ${
              p
                .infoUtili
                .colonne
                .map(
                  colonna => `

                    <div class="info-column">

                      <h3>
                        ${esc(
                          colonna.titolo ||
                          ""
                        )}
                      </h3>


                      ${
                        colonna.testo

                          ? `
                            <p>
                              ${htmlText(
                                colonna.testo
                              )}
                            </p>
                          `

                          : ""
                      }


                      <div class="info-links">

                        ${
                          (
                            colonna.links ||
                            []
                          )
                            .map(
                              link =>
                                linkHtml(
                                  link.testo ||
                                  "Apri mappa",

                                  link.url
                                )
                            )
                            .join("")
                        }

                      </div>

                    </div>

                  `
                )
                .join("")
            }

          </div>

        </section>

      `;

    }


    const calendarButton =
      C.calendario
        ?.attivo !== false

        ? `

          <button
            type="button"
            class="rsvp-newspaper-button"
            data-action="calendar"
          >
            ${esc(
              C.calendario
                ?.testoPulsante ||
              "Salva la data"
            )}
          </button>

        `

        : "";


    return pageShell(
      id,
      "page-marriage",

      `

        ${newspaperHeader()}


        <h1 class="page-title">

          ${esc(p.titolo)}

        </h1>


        ${
          p.sottotitolo

            ? `
              <div class="page-subtitle">
                ${esc(
                  p.sottotitolo
                )}
              </div>
            `

            : ""
        }


        ${
          p.introduzione

            ? `
              <p class="newspaper-text wedding-intro">

                ${htmlText(
                  p.introduzione
                )}

              </p>
            `

            : ""
        }


        <div class="wedding-date-box">

          <span class="wedding-date">

            ${esc(
              p.data || ""
            )}

          </span>

          <span class="wedding-time">

            ${esc(
              p.ora || ""
            )}

          </span>

        </div>


        ${locations}

        ${info}

        ${calendarButton}

      `
    );

  }


  /* ============================================================
     TIMELINE
     ============================================================ */

  function renderTimelineSection(
    sezione
  ) {

    return `

      <section class="two-column-section">

        <h2 class="section-title">

          ${esc(
            sezione.titolo ||
            "Timeline"
          )}

        </h2>


        <div class="timeline">

          ${
            (
              sezione.eventi ||
              []
            )
              .map(
                item => `

                  <div class="timeline-item">

                    <div class="timeline-time">

                      ${esc(
                        item.ora ||
                        ""
                      )}

                    </div>


                    <h3 class="timeline-title">

                      ${esc(
                        item.titolo ||
                        ""
                      )}

                    </h3>


                    ${
                      item.descrizione

                        ? `
                          <div class="timeline-description">
                            ${htmlText(
                              item.descrizione
                            )}
                          </div>
                        `

                        : ""
                    }

                  </div>

                `
              )
              .join("")
          }

        </div>

      </section>

    `;

  }


  /* ============================================================
     WEDDING TEAM
     ============================================================ */

  function renderTeamSection(
    sezione
  ) {

    return `

      <section class="two-column-section">

        <h2 class="section-title">

          ${esc(
            sezione.titolo ||
            "Wedding team"
          )}

        </h2>


        <div class="team-list">

          ${
            (
              sezione.gruppi ||
              []
            )
              .map(
                gruppo => `

                  <div class="team-group">

                    <div class="team-role">

                      ${esc(
                        gruppo.ruolo ||
                        ""
                      )}

                    </div>


                    ${
                      (
                        gruppo.nomi ||
                        []
                      )
                        .map(
                          nome => `

                            <p class="team-name">
                              ${esc(nome)}
                            </p>

                          `
                        )
                        .join("")
                    }

                  </div>

                `
              )
              .join("")
          }

        </div>

      </section>

    `;

  }


  /* ============================================================
     PAGINA DUE COLONNE
     ============================================================ */

  function renderTwoColumns(
    id,
    p
  ) {

    const sinistra =
      p.sinistra || {};

    const destra =
      p.destra || {};


    const leftHtml =
      sinistra.tipo === "timeline"

        ? renderTimelineSection(
            sinistra
          )

        : `

          <section class="two-column-section">

            <h2 class="section-title">

              ${esc(
                sinistra.titolo ||
                ""
              )}

            </h2>

            <p class="newspaper-text">

              ${htmlText(
                sinistra.testo ||
                ""
              )}

            </p>

          </section>

        `;


    const rightHtml =
      destra.tipo === "team"

        ? renderTeamSection(
            destra
          )

        : `

          <section class="two-column-section">

            <h2 class="section-title">

              ${esc(
                destra.titolo ||
                ""
              )}

            </h2>

            <p class="newspaper-text">

              ${htmlText(
                destra.testo ||
                ""
              )}

            </p>

          </section>

        `;


    return pageShell(
      id,
      "page-two-columns",

      `

        ${newspaperHeader()}


        <div class="two-column-page">

          ${leftHtml}

          ${rightHtml}

        </div>

      `
    );

  }


  /* ============================================================
     LA NOSTRA STORIA
     ============================================================ */

  function renderStory(
    id,
    p
  ) {

    const breve =
      p.inBreve?.attivo !== false &&
      Array.isArray(
        p.inBreve?.eventi
      )

        ? `

          <section class="story-brief">

            <h2 class="section-title">

              ${esc(
                p.inBreve.titolo ||
                "In breve"
              )}

            </h2>


            <div class="story-events">

              ${
                p
                  .inBreve
                  .eventi
                  .map(
                    evento => `

                      <div class="story-event">

                        <span class="story-event-icon">

                          ${esc(
                            evento.icona ||
                            ""
                          )}

                        </span>


                        <span class="story-event-label">

                          ${esc(
                            evento.etichetta ||
                            ""
                          )}

                        </span>


                        <span class="story-event-value">

                          ${esc(
                            evento.valore ||
                            ""
                          )}

                        </span>

                      </div>

                    `
                  )
                  .join("")
              }

            </div>

          </section>

        `

        : "";


    const capitolo =
      p.nuovoCapitolo
        ?.attivo !== false

        ? `

          <section class="story-bottom-section">

            <h2 class="section-title">

              ${esc(
                p.nuovoCapitolo
                  ?.titolo ||
                ""
              )}

            </h2>


            <p class="newspaper-text">

              ${htmlText(
                p.nuovoCapitolo
                  ?.testo ||
                ""
              )}

            </p>


            ${
              p.nuovoCapitolo
                ?.mostraRsvp !== false &&
              C.rsvp?.attivo !== false

                ? `

                  <button
                    type="button"
                    class="rsvp-newspaper-button"
                    data-action="rsvp"
                  >

                    ${esc(
                      C.rsvp
                        ?.testoPulsante ||
                      "Conferma presenza"
                    )}

                  </button>

                `

                : ""
            }

          </section>

        `

        : "";


    const regalo =
      p.regalo?.attivo !== false

        ? `

          <section class="story-bottom-section gift-box">

            <h2 class="section-title">

              ${esc(
                p.regalo?.titolo ||
                "Gift"
              )}

            </h2>


            <p class="newspaper-text">

              ${htmlText(
                p.regalo?.testo ||
                ""
              )}

            </p>


            ${
              p.regalo
                ?.iban
                ?.attivo !== false &&
              p.regalo
                ?.iban
                ?.iban

                ? `

                  <div
                    class="iban-box"
                    data-copy-iban="${esc(
                      p.regalo
                        .iban
                        .iban
                    )}"
                    data-copy-message="${esc(
                      p.regalo
                        .iban
                        .messaggioCopiato ||
                      "IBAN copiato"
                    )}"
                  >


                    ${
                      p.regalo
                        .iban
                        .intestatario

                        ? `

                          <div class="iban-label">
                            Intestatario
                          </div>

                          <div class="iban-value">
                            ${esc(
                              p.regalo
                                .iban
                                .intestatario
                            )}
                          </div>

                        `

                        : ""
                    }


                    <div
                      class="iban-label"
                      style="margin-top:6px"
                    >
                      IBAN
                    </div>

                    <div class="iban-value">

                      ${esc(
                        p.regalo
                          .iban
                          .iban
                      )}

                    </div>


                    ${
                      p.regalo
                        .iban
                        .causale

                        ? `

                          <div
                            class="iban-label"
                            style="margin-top:6px"
                          >
                            Causale
                          </div>

                          <div class="iban-value">

                            ${esc(
                              p.regalo
                                .iban
                                .causale
                            )}

                          </div>

                        `

                        : ""
                    }

                  </div>

                `

                : ""
            }

          </section>

        `

        : "";


    return pageShell(
      id,
      "page-story",

      `

        ${newspaperHeader()}


        <h1 class="page-title">

          ${esc(p.titolo)}

        </h1>


        <div class="story-layout">

          <div>

            ${
              p.foto

                ? `
                  <img
                    class="story-photo"
                    src="${esc(
                      p.foto
                    )}"
                    alt="${esc(
                      p.altFoto ||
                      ""
                    )}"
                  >
                `

                : ""
            }

          </div>


          <div class="story-copy">

            <p class="newspaper-text drop-cap">

              ${htmlText(
                p.testo
              )}

            </p>

          </div>

        </div>


        ${breve}


        <div class="story-bottom">

          ${capitolo}

          ${regalo}

        </div>

      `
    );

  }


  /* ============================================================
     FOTO FINALE
     ============================================================ */

  function renderFinalPhoto(
    id,
    p
  ) {

    return pageShell(
      id,
      "page-final-photo",

      `

        ${newspaperHeader()}


        <div class="final-quote">

          ${
            p.citazione?.testo

              ? `

                <p class="final-quote-text">

                  “${htmlText(
                    p.citazione
                      .testo
                  )}”

                </p>

              `

              : ""
          }


          ${
            p.citazione?.autore

              ? `

                <div class="final-quote-author">

                  — ${esc(
                    p.citazione
                      .autore
                  )}

                </div>

              `

              : ""
          }

        </div>


        ${
          p.foto

            ? `

              <img
                class="final-photo"
                src="${esc(
                  p.foto
                )}"
                alt="${esc(
                  p.altFoto ||
                  ""
                )}"
              >

            `

            : ""
        }

      `
    );

  }


  /* ============================================================
     RETROCOPERTINA
     ============================================================ */

  function renderBackCover(
    id,
    p
  ) {

    return pageShell(
      id,
      "page-back-cover",

      `

        ${
          p.mostraTestata

            ? newspaperHeader({
                force: true
              })

            : ""
        }


        ${
          p.logo?.attivo !== false &&
          p.logo?.immagine

            ? `

              <img
                class="back-cover-logo"
                src="${esc(
                  p.logo
                    .immagine
                )}"
                alt="${esc(
                  p.logo
                    .alt ||
                  ""
                )}"
              >

            `

            : ""
        }


        ${
          p.testo

            ? `

              <div class="back-cover-text">

                ${htmlText(
                  p.testo
                )}

              </div>

            `

            : ""
        }


        ${
          p.credito?.attivo !== false &&
          p.credito?.testo

            ? `

              <div class="back-cover-credit">

                ${
                  p.credito.link

                    ? linkHtml(
                        p.credito
                          .testo,

                        p.credito
                          .link
                      )

                    : esc(
                        p.credito
                          .testo
                      )
                }

              </div>

            `

            : ""
        }

      `
    );

  }


  /* ============================================================
     DRESS CODE
     ============================================================ */

  function renderDresscode(
    id,
    p
  ) {

    return pageShell(
      id,
      "page-dresscode",

      `

        ${newspaperHeader()}


        <h1 class="page-title">

          ${esc(
            p.titolo ||
            "Dress code"
          )}

        </h1>


        <div class="dresscode-content">

          ${
            p.testo

              ? `

                <div class="page-subtitle">

                  ${esc(
                    p.testo
                  )}

                </div>

              `

              : ""
          }


          ${
            p.immagine

              ? `

                <img
                  class="dresscode-image"
                  src="${esc(
                    p.immagine
                  )}"
                  alt="Dress code"
                >

              `

              : ""
          }

        </div>

      `
    );

  }


  /* ============================================================
     GALLERY
     ============================================================ */

  function renderGallery(
    id,
    p
  ) {

    return pageShell(
      id,
      "page-gallery",

      `

        ${newspaperHeader()}


        <h1 class="page-title">

          ${esc(
            p.titolo ||
            "Gallery"
          )}

        </h1>


        ${
          p.testo

            ? `

              <div class="page-subtitle">

                ${esc(
                  p.testo
                )}

              </div>

            `

            : ""
        }


        <div class="gallery-grid">

          ${
            (
              p.foto ||
              []
            )
              .slice(0, 4)

              .map(
                (
                  src,
                  index
                ) => `

                  <img
                    src="${esc(
                      src
                    )}"
                    alt="Foto ${index + 1}"
                  >

                `
              )

              .join("")
          }

        </div>


        ${
          p.linkAlbum

            ? `

              <div style="margin-top:2%">

                ${
                  linkHtml(
                    "Apri album completo",
                    p.linkAlbum
                  )
                }

              </div>

            `

            : ""
        }

      `
    );

  }


  /* ============================================================
     HOTEL / TRASPORTI / LISTE LINK
     ============================================================ */

  function renderLinkList(
    id,
    p
  ) {

    return pageShell(
      id,
      "page-link-list",

      `

        ${newspaperHeader()}


        <h1 class="page-title">

          ${esc(
            p.titolo ||
            "Informazioni"
          )}

        </h1>


        ${
          p.introduzione

            ? `

              <div class="page-subtitle">

                ${esc(
                  p.introduzione
                )}

              </div>

            `

            : ""
        }


        <div class="link-list">

          ${
            (
              p.elementi ||
              []
            )
              .map(
                item => `

                  <div class="link-list-item">

                    <h2 class="link-list-title">

                      ${esc(
                        item.titolo ||
                        ""
                      )}

                    </h2>


                    ${
                      item.testo

                        ? `

                          <p class="link-list-description">

                            ${htmlText(
                              item.testo
                            )}

                          </p>

                        `

                        : ""
                    }


                    ${
                      item.link

                        ? linkHtml(
                            "Apri",
                            item.link
                          )

                        : ""
                    }

                  </div>

                `
              )

              .join("")
          }

        </div>

      `
    );

  }


  /* ============================================================
     PAGINA GENERICA
     ============================================================ */

  function renderGeneric(
    id,
    p
  ) {

    return pageShell(
      id,
      "page-generic",

      `

        ${newspaperHeader()}


        <h1 class="page-title">

          ${esc(
            p.titolo ||
            id
          )}

        </h1>


        ${
          p.testo

            ? `

              <p class="newspaper-text">

                ${htmlText(
                  p.testo
                )}

              </p>

            `

            : ""
        }

      `
    );

  }


  /* ============================================================
     SELEZIONE TIPO PAGINA
     ============================================================ */

  function renderPage(
    id,
    pagina
  ) {

    switch (
      pagina.tipo
    ) {

      case "copertina":

        return renderCover(
          id,
          pagina
        );


      case "matrimonio":

        return renderMarriage(
          id,
          pagina
        );


      case "due_colonne":

        return renderTwoColumns(
          id,
          pagina
        );


      case "storia":

        return renderStory(
          id,
          pagina
        );


      case "foto_finale":

        return renderFinalPhoto(
          id,
          pagina
        );


      case "retrocopertina":

        return renderBackCover(
          id,
          pagina
        );


      case "dresscode":

        return renderDresscode(
          id,
          pagina
        );


      case "gallery":

        return renderGallery(
          id,
          pagina
        );


      case "lista_link":

        return renderLinkList(
          id,
          pagina
        );


      default:

        return renderGeneric(
          id,
          pagina
        );

    }

  }


  /* ============================================================
     CREA TUTTE LE PAGINE DAL CONFIG
     ============================================================ */

  function buildPages() {

    const ordine =
      Array.isArray(
        C.ordinePagine
      )

        ? C.ordinePagine

        : Object.keys(
            C.pagine ||
            {}
          );


    const pagine =
      C.pagine || {};


    const html =
      [];


    ordine.forEach(
      id => {

        const pagina =
          pagine[id];


        if (
          !pagina ||
          pagina.attivo === false
        ) {

          return;

        }


        html.push(
          renderPage(
            id,
            pagina
          )
        );

      }
    );


    els.book.innerHTML =
      html.join("");


    state.pages =
      $$(".newspaper-page", els.book);


    state.pages.forEach(
      (
        pagina,
        index
      ) => {

        pagina.dataset.index =
          String(index);

      }
    );

  }


  /* ============================================================
     MODALITÀ MOBILE / TABLET / DESKTOP
     ============================================================ */

  function getMode() {

    const width =
      window.innerWidth;


    const breakpoint =
      C.template?.breakpoint ||
      {};


    const mobileMax =
      Number(
        breakpoint.mobileMax ??
        767
      );


    const tabletMax =
      Number(
        breakpoint.tabletMax ??
        1100
      );


    if (
      width <=
      mobileMax
    ) {

      return (
        C.template
          ?.visualizzazione
          ?.mobile ||
        "single"
      );

    }


    if (
      width <=
      tabletMax
    ) {

      return (
        C.template
          ?.visualizzazione
          ?.tablet ||
        "double"
      );

    }


    return (
      C.template
        ?.visualizzazione
        ?.desktop ||
      "double"
    );

  }


  function isCoverIndex(
    index
  ) {

    if (
      index < 0 ||
      index >=
      state.pages.length
    ) {

      return false;

    }


    const id =
      state.pages[
        index
      ].dataset.pageId;


    return (
      id === "copertina" &&
      C.flipbook
        ?.copertinaSingola !== false
    );

  }


  function isBackCoverIndex(
    index
  ) {

    if (
      index < 0 ||
      index >=
      state.pages.length
    ) {

      return false;

    }


    const id =
      state.pages[
        index
      ].dataset.pageId;


    return (
      id === "retrocopertina" &&
      C.flipbook
        ?.retrocopertinaSingola !== false
    );

  }


  /* ============================================================
     CREA LE COPPIE DI PAGINE
     ============================================================ */

  function buildSpreads() {

    const spreads =
      [];


    const numeroPagine =
      state.pages.length;


    if (
      state.mode === "single"
    ) {

      for (
        let i = 0;
        i < numeroPagine;
        i++
      ) {

        spreads.push([
          i
        ]);

      }


      state.spreads =
        spreads;


      return;
    }


    let i =
      0;


    while (
      i <
      numeroPagine
    ) {


      if (
        isCoverIndex(i) ||
        isBackCoverIndex(i)
      ) {

        spreads.push([
          i
        ]);

        i++;

        continue;
      }


      if (
        i + 1 <
          numeroPagine &&
        !isBackCoverIndex(
          i + 1
        )
      ) {

        spreads.push([
          i,
          i + 1
        ]);

        i += 2;

      } else {

        spreads.push([
          i
        ]);

        i++;

      }

    }


    state.spreads =
      spreads;

  }


  function spreadContainingPage(
    pageIndex
  ) {

    const index =
      state.spreads.findIndex(
        spread =>
          spread.includes(
            pageIndex
          )
      );


    return (
      index >= 0
        ? index
        : 0
    );

  }


  function applyMode({
    keepPage = true
  } = {}) {

    const oldPage =
      keepPage
        ? state.currentIndex
        : 0;


    state.mode =
      getMode() === "double"
        ? "double"
        : "single";


    els.book.classList.toggle(
      "double-page",
      state.mode === "double"
    );


    buildSpreads();


    state.currentSpread =
      spreadContainingPage(
        oldPage
      );


    renderSpread(
      false
    );

  }


  /* ============================================================
     MOSTRA PAGINE
     ============================================================ */

  /* ============================================================
   ADATTA L'INTERO GIORNALE ALLO SCHERMO

   Ogni pagina misura realmente 900x1273.
   Qui viene scalato tutto il foglio insieme:
   testi, immagini, spazi, bordi, ecc.
   ============================================================ */

function fitBookToViewport() {

  const viewport =
    document.getElementById("bookViewport");

  if (
    !viewport ||
    !els.book ||
    !state.spreads.length
  ) {
    return;
  }


  const PAGE_WIDTH = 900;
  const PAGE_HEIGHT = 1273;


  const currentSpread =
    state.spreads[state.currentSpread] || [0];


  const visiblePages =
    currentSpread.length;


  /*
     Una pagina:
     900 x 1273

     Due pagine:
     1800 x 1273
  */

  const naturalWidth =
    PAGE_WIDTH * visiblePages;

  const naturalHeight =
    PAGE_HEIGHT;


  /*
     Diamo al book le sue dimensioni REALI.
  */

  els.book.style.width =
    `${naturalWidth}px`;

  els.book.style.height =
    `${naturalHeight}px`;

  els.book.style.minWidth =
    `${naturalWidth}px`;

  els.book.style.minHeight =
    `${naturalHeight}px`;


  /*
     Spazio realmente disponibile
     dentro lo schermo.
  */

  const rect =
    viewport.getBoundingClientRect();


  const margin = 12;


  const availableWidth =
    Math.max(
      1,
      rect.width - margin * 2
    );


  const availableHeight =
    Math.max(
      1,
      rect.height - margin * 2
    );


  /*
     Calcoliamo quanto ridurre il giornale
     mantenendo perfettamente le proporzioni.
  */

  const scaleX =
    availableWidth /
    naturalWidth;


  const scaleY =
    availableHeight /
    naturalHeight;


  let scale =
    Math.min(
      scaleX,
      scaleY
    );


  /*
     Non ingrandiamo oltre il 100%.
     Lo zoom serve apposta per leggere meglio.
  */

  scale =
    Math.min(
      scale,
      1
    );


  /*
     Tutto il giornale viene scalato insieme.
  */

  els.book.style.transform =
    `scale(${scale})`;


  els.book.style.transformOrigin =
    "center center";

}

  function renderSpread(
    animate = true,
    direction = "next"
  ) {

    if (
      !state.pages.length ||
      !state.spreads.length
    ) {

      return;
    }


    state.currentSpread =
      Math.max(
        0,
        Math.min(
          state.currentSpread,
          state.spreads.length - 1
        )
      );


    const visible =
      state.spreads[
        state.currentSpread
      ];


    state.currentIndex =
      visible[0];


    state.pages.forEach(
      pagina => {

        pagina.classList.remove(
          "is-visible",
          "page-left",
          "page-right",
          "page-enter-next",
          "page-enter-prev"
        );

      }
    );


    visible.forEach(
      (
        index,
        posizione
      ) => {

        const pagina =
          state.pages[index];


        if (!pagina) {
          return;
        }


        pagina.classList.add(
          "is-visible"
        );


        if (
          visible.length === 2
        ) {

          pagina.classList.add(

            posizione === 0

              ? "page-left"

              : "page-right"

          );

        }


        if (
          animate &&
          C.flipbook
            ?.animazionePagina !== false
        ) {

          pagina.classList.add(

            direction === "prev"

              ? "page-enter-prev"

              : "page-enter-next"

          );

        }

      }
    );


    els.prev.disabled =
      state.currentSpread <= 0;


    els.next.disabled =
      state.currentSpread >=
      state.spreads.length - 1;


    if (
      C.flipbook
        ?.mostraNumeroPagina
    ) {

      els.indicator.classList
        .remove("hidden");


      if (
        visible.length === 1
      ) {

        els.indicator.textContent =
          `${visible[0] + 1} / ${state.pages.length}`;

      } else {

        els.indicator.textContent =
          `${visible[0] + 1}-${visible[1] + 1} / ${state.pages.length}`;

      }

    }  else {

  els.indicator.classList
    .add("hidden");

}


/*
   Dopo aver deciso quali pagine mostrare,
   ridimensioniamo l'intero giornale.
*/

requestAnimationFrame(
  fitBookToViewport
);



  }


  function nextPage() {

    if (
      state.currentSpread >=
      state.spreads.length - 1
    ) {

      return;
    }


    state.currentSpread++;


    renderSpread(
      true,
      "next"
    );

  }


  function prevPage() {

    if (
      state.currentSpread <= 0
    ) {

      return;
    }


    state.currentSpread--;


    renderSpread(
      true,
      "prev"
    );

  }


  /* ============================================================
     FRECCE + TASTIERA + SWIPE
     ============================================================ */

  function setupNavigation() {

    els.prev.addEventListener(
      "click",
      prevPage
    );


    els.next.addEventListener(
      "click",
      nextPage
    );


    if (
      C.flipbook
        ?.tastiera !== false
    ) {

      document.addEventListener(
        "keydown",
        event => {


          if (
            !els.rsvpModal
              .classList
              .contains("hidden") ||

            !els.zoomModal
              .classList
              .contains("hidden")
          ) {

            return;
          }


          if (
            event.key ===
            "ArrowRight"
          ) {

            nextPage();

          }


          if (
            event.key ===
            "ArrowLeft"
          ) {

            prevPage();

          }


          if (
            event.key ===
            "Escape"
          ) {

            closeRsvp();
            closeZoom();

          }

        }
      );

    }


    if (
      C.flipbook
        ?.swipe !== false
    ) {

      let startX =
        0;

      let startY =
        0;

      let tracking =
        false;


      els.book.addEventListener(
  "touchstart",
  event => {

    /*
       Lo swipe pagina deve funzionare
       SOLO con un dito.

       Due dita saranno riservate
       allo zoom naturale.
    */

    if (
      !event.touches ||
      event.touches.length !== 1
    ) {

      tracking = false;

      return;

    }


          startX =
            event
              .touches[0]
              .clientX;


          startY =
            event
              .touches[0]
              .clientY;


          tracking =
            true;

        },
        {
          passive: true
        }
      );


      els.book.addEventListener(
        "touchend",
        event => {

          if (
            !tracking ||
            !event.changedTouches
              ?.length
          ) {

            return;

          }


          tracking =
            false;


          const dx =
            event
              .changedTouches[0]
              .clientX -
            startX;


          const dy =
            event
              .changedTouches[0]
              .clientY -
            startY;


          if (
            Math.abs(dx) <
            45
          ) {

            return;

          }


          if (
            Math.abs(dx) <=
            Math.abs(dy)
          ) {

            return;

          }


          if (
            dx < 0
          ) {

            nextPage();

          } else {

            prevPage();

          }

        },
        {
          passive: true
        }
      );

    }

  }


  /* ============================================================
     MUSICA
     ============================================================ */

  function setupMusic() {

    const musica =
      C.musica || {};


    if (
      musica.attiva === false ||
      !musica.file
    ) {

      els.audioBtn
        ?.classList
        .add("hidden");

      return;
    }


    els.musicSource.src =
      musica.file;


    els.music.loop =
      musica.loop !== false;


    els.music.volume =
      Math.max(
        0,
        Math.min(
          1,
          Number(
            musica.volume ??
            0.55
          )
        )
      );


    els.music.load();


    updateAudioIcon();


    els.audioBtn.addEventListener(
      "click",

      async () => {

        if (
          els.music.paused
        ) {

          try {

            await els.music.play();

            state.musicStarted =
              true;

          } catch (
            error
          ) {

            if (C.debug) {
              console.warn(error);
            }

          }

        } else {

          els.music.pause();

        }


        updateAudioIcon();

      }
    );


    els.music.addEventListener(
      "play",
      updateAudioIcon
    );


    els.music.addEventListener(
      "pause",
      updateAudioIcon
    );


    if (
      musica
        .avviaDopoPrimaInterazione !== false
    ) {

      const startOnce =
        async () => {

          if (
            state.musicStarted
          ) {

            return;

          }


          try {

            await els.music.play();

            state.musicStarted =
              true;

            updateAudioIcon();

          } catch (
            error
          ) {

            if (C.debug) {
              console.warn(error);
            }

          }

        };


      [
        "pointerdown",
        "touchstart",
        "keydown"
      ]
        .forEach(
          eventName => {

            document.addEventListener(
              eventName,
              startOnce,
              {
                once: true,
                passive: true
              }
            );

          }
        );

    }

  }


  function updateAudioIcon() {

    if (
      !els.audioIcon
    ) {

      return;
    }


    const musica =
      C.musica || {};


    els.audioIcon.textContent =

      els.music.paused

        ? (
            musica.iconaDisattiva ||
            "🔇"
          )

        : (
            musica.iconaAttiva ||
            "🔊"
          );

  }


  /* ============================================================
     FULLSCREEN
     ============================================================ */

  function setupFullscreen() {

    if (
      C.controlli
        ?.fullscreen
        ?.attivo === false
    ) {

      els.fullscreenBtn
        ?.classList
        .add("hidden");

      return;
    }


    els.fullscreenBtn.addEventListener(
      "click",

      async () => {

        try {

          if (
            !document.fullscreenElement
          ) {

            await document
              .documentElement
              .requestFullscreen
              ?.();

          } else {

            await document
              .exitFullscreen
              ?.();

          }

        } catch (
          error
        ) {

          if (C.debug) {
            console.warn(error);
          }

        }

      }
    );

  }


  /* ============================================================
   ZOOM INTERATTIVO
   Rotellina + trascinamento + pinch mobile
   ============================================================ */

const zoomState = {

  naturalWidth: 900,
  naturalHeight: 1273,

  baseScale: 1,
  level: 1,

  x: 0,
  y: 0,

  minLevel: 1,
  maxLevel: 2.5,
  step: 0.25,

  pointers: new Map(),

  dragging: false,

  pinchStartDistance: 0,
  pinchStartLevel: 1,

  pinchWorldX: 0,
  pinchWorldY: 0,

  lastX: 0,
  lastY: 0
};


function clampZoom(
  value,
  min,
  max
) {

  return Math.min(
    max,
    Math.max(
      min,
      value
    )
  );

}


function getZoomStage() {

  return $(
    ".zoom-stage",
    els.zoomContent
  );

}


/* ============================================================
   APPLICA POSIZIONE + ZOOM
   ============================================================ */

function renderZoomTransform() {

  const stage =
    getZoomStage();


  if (!stage) {
    return;
  }


  const scale =
    zoomState.baseScale *
    zoomState.level;


  stage.style.transform =

    `translate(${zoomState.x}px, ${zoomState.y}px) scale(${scale})`;

}


/* ============================================================
   IMPEDISCE DI PERDERE LA PAGINA FUORI DALLO SCHERMO
   ============================================================ */

function constrainZoomPan() {

  const stage =
    getZoomStage();


  if (!stage) {
    return;
  }


  const rect =
    els.zoomContent
      .getBoundingClientRect();


  const scale =
    zoomState.baseScale *
    zoomState.level;


  const scaledWidth =
    zoomState.naturalWidth *
    scale;


  const scaledHeight =
    zoomState.naturalHeight *
    scale;


  const edge =
    24;


  /*
     Se è più piccola dello schermo,
     rimane centrata.
  */

  if (
    scaledWidth <=
    rect.width
  ) {

    zoomState.x =
      (
        rect.width -
        scaledWidth
      ) / 2;

  } else {

    zoomState.x =
      clampZoom(

        zoomState.x,

        rect.width -
          scaledWidth -
          edge,

        edge

      );

  }


  if (
    scaledHeight <=
    rect.height
  ) {

    zoomState.y =
      (
        rect.height -
        scaledHeight
      ) / 2;

  } else {

    zoomState.y =
      clampZoom(

        zoomState.y,

        rect.height -
          scaledHeight -
          edge,

        edge

      );

  }

}


/* ============================================================
   VISTA INIZIALE
   La pagina entra interamente nello schermo
   ============================================================ */

function resetZoomView() {

  const stage =
    getZoomStage();


  if (!stage) {
    return;
  }


  const rect =
    els.zoomContent
      .getBoundingClientRect();


  const margin =
    window.innerWidth <= 767
      ? 18
      : 40;


  zoomState.baseScale =
    Math.min(

      (
        rect.width -
        margin * 2
      ) /
      zoomState.naturalWidth,

      (
        rect.height -
        margin * 2
      ) /
      zoomState.naturalHeight,

      1

    );


  zoomState.level =
    1;


  const scaledWidth =
    zoomState.naturalWidth *
    zoomState.baseScale;


  const scaledHeight =
    zoomState.naturalHeight *
    zoomState.baseScale;


  zoomState.x =
    (
      rect.width -
      scaledWidth
    ) / 2;


  zoomState.y =
    (
      rect.height -
      scaledHeight
    ) / 2;


  renderZoomTransform();

}


/* ============================================================
   ZOOM ATTORNO AL PUNTO DEL MOUSE / DITA
   ============================================================ */

function zoomAtPoint(
  clientX,
  clientY,
  newLevel
) {

  const rect =
    els.zoomContent
      .getBoundingClientRect();


  const localX =
    clientX -
    rect.left;


  const localY =
    clientY -
    rect.top;


  const oldScale =
    zoomState.baseScale *
    zoomState.level;


  /*
     Punto del foglio che si trova
     sotto il mouse.
  */

  const worldX =
    (
      localX -
      zoomState.x
    ) /
    oldScale;


  const worldY =
    (
      localY -
      zoomState.y
    ) /
    oldScale;


  zoomState.level =
    clampZoom(

      newLevel,

      zoomState.minLevel,

      zoomState.maxLevel

    );


  const newScale =
    zoomState.baseScale *
    zoomState.level;


  /*
     Manteniamo quel punto
     sotto il mouse anche dopo lo zoom.
  */

  zoomState.x =
    localX -
    worldX *
    newScale;


  zoomState.y =
    localY -
    worldY *
    newScale;


  constrainZoomPan();

  renderZoomTransform();

}


/* ============================================================
   SETUP ZOOM
   ============================================================ */

function setupZoom() {

  if (
    C.controlli
      ?.zoom
      ?.attivo === false
  ) {

    els.zoomBtn
      ?.classList
      .add("hidden");

    return;

  }


  zoomState.maxLevel =
    Math.max(

      1,

      Number(
        C.controlli
          ?.zoom
          ?.max ??
        2.5
      )

    );


  zoomState.step =
    Math.max(

      0.05,

      Number(
        C.controlli
          ?.zoom
          ?.step ??
        0.25
      )

    );


  /* APERTURA */

  els.zoomBtn.addEventListener(
    "click",
    openZoom
  );

  /* ==========================================================
   ZOOM NATURALE DA PC
   Ctrl + rotellina / pinch trackpad
   ========================================================== */

els.book.addEventListener(
  "wheel",

  event => {

    /*
       Interveniamo solamente sul gesto
       che il browser identifica come zoom.
    */

    if (!event.ctrlKey) {
      return;
    }


    /*
       Se l'utente sta rimpicciolendo
       e siamo ancora nella vista normale,
       non facciamo niente.
    */

    if (event.deltaY >= 0) {
      return;
    }


    event.preventDefault();


    /*
       Se siamo già nello zoom,
       sarà il listener di zoomContent
       a gestire la rotellina.
    */

    if (
      !els.zoomModal
        .classList
        .contains("hidden")
    ) {
      return;
    }


    /*
       Apriamo il nostro zoom.
    */

    openZoom();


    /*
       openZoom deve prima creare lo stage
       e calcolare la dimensione iniziale.
       Poi applichiamo subito un primo
       livello di ingrandimento.
    */

    requestAnimationFrame(
      () => {

        zoomAtPoint(
          event.clientX,
          event.clientY,
          zoomState.level +
          zoomState.step
        );

      }
    );

  },

  {
    passive: false
  }
);

/* ==========================================================
   ZOOM NATURALE MOBILE
   Pinch con due dita sul giornale normale
   ========================================================== */

let normalPinchStartDistance = 0;
let normalPinchOpened = false;


els.book.addEventListener(
  "touchstart",

  event => {

    /*
       Ci interessa solamente il gesto
       con DUE dita.
    */

    if (
      !event.touches ||
      event.touches.length !== 2
    ) {
      return;
    }


    const touch1 =
      event.touches[0];

    const touch2 =
      event.touches[1];


    normalPinchStartDistance =
      Math.hypot(
        touch2.clientX -
        touch1.clientX,

        touch2.clientY -
        touch1.clientY
      );


    normalPinchOpened =
      false;

  },

  {
    passive: true
  }
);


els.book.addEventListener(
  "touchmove",

  event => {

    if (
      !event.touches ||
      event.touches.length !== 2 ||
      !normalPinchStartDistance
    ) {
      return;
    }


    const touch1 =
      event.touches[0];

    const touch2 =
      event.touches[1];


    const currentDistance =
      Math.hypot(
        touch2.clientX -
        touch1.clientX,

        touch2.clientY -
        touch1.clientY
      );


    const ratio =
      currentDistance /
      normalPinchStartDistance;


    /*
       Apriamo lo zoom soltanto quando
       le dita si stanno realmente allargando.

       La piccola soglia evita aperture
       accidentali appena si appoggiano
       due dita.
    */

    if (
      ratio > 1.04 &&
      !normalPinchOpened
    ) {

      event.preventDefault();


      normalPinchOpened =
        true;


      const centerX =
        (
          touch1.clientX +
          touch2.clientX
        ) / 2;


      const centerY =
        (
          touch1.clientY +
          touch2.clientY
        ) / 2;


      openZoom();


      requestAnimationFrame(
        () => {

          zoomAtPoint(
            centerX,
            centerY,
            zoomState.level +
            zoomState.step
          );

        }
      );

    }

  },

  {
    passive: false
  }
);


els.book.addEventListener(
  "touchend",

  event => {

    if (
      !event.touches ||
      event.touches.length < 2
    ) {

      normalPinchStartDistance =
        0;

      normalPinchOpened =
        false;

    }

  },

  {
    passive: true
  }
);


  /* CHIUSURA */

  $$(
    "[data-close-zoom]"
  )
    .forEach(
      element => {

        element.addEventListener(
          "click",
          closeZoom
        );

      }
    );


  /* ==========================================================
     ROTELLINA MOUSE
     ========================================================== */

  els.zoomContent.addEventListener(

    "wheel",

    event => {

      if (
        els.zoomModal
          .classList
          .contains("hidden")
      ) {
        return;
      }


      event.preventDefault();


      const direction =
        event.deltaY < 0
          ? 1
          : -1;


      zoomAtPoint(

        event.clientX,

        event.clientY,

        zoomState.level +
        direction *
        zoomState.step

      );

    },

    {
      passive: false
    }

  );


  /* ==========================================================
     MOUSE / TOUCH - INIZIO
     ========================================================== */

  els.zoomContent.addEventListener(

    "pointerdown",

    event => {

      if (
        els.zoomModal
          .classList
          .contains("hidden")
      ) {
        return;
      }


      /*
         Mouse:
         accettiamo solo il tasto sinistro.
      */

     if (
  event.pointerType === "mouse" &&
  event.button !== 0
) {
  return;
}


/*
   Se abbiamo premuto su qualcosa di cliccabile,
   NON attiviamo il trascinamento.

   In questo modo nello zoom funzionano:
   - link Maps
   - parcheggi
   - RSVP
   - Salva la data
   - IBAN
   - eventuali altri pulsanti
*/

const interactiveElement =
  event.target.closest(
    "a, button, [data-action], [data-copy-iban]"
  );


if (interactiveElement) {
  return;
}


event.preventDefault();


      try {

        els.zoomContent
          .setPointerCapture(
            event.pointerId
          );

      } catch (error) {

        if (C.debug) {
          console.warn(error);
        }

      }


      zoomState
        .pointers
        .set(

          event.pointerId,

          {
            x: event.clientX,
            y: event.clientY
          }

        );


      /* UNA SOLA DITA / MOUSE */

      if (
        zoomState
          .pointers
          .size === 1
      ) {

        zoomState.dragging =
          true;


        zoomState.lastX =
          event.clientX;


        zoomState.lastY =
          event.clientY;


        els.zoomContent
          .classList
          .add("is-dragging");


        getZoomStage()
          ?.classList
          .add("is-dragging");

      }


      /* DUE DITA = PINCH */

      if (
        zoomState
          .pointers
          .size === 2
      ) {

        const points =
          Array.from(
            zoomState
              .pointers
              .values()
          );


        const dx =
          points[1].x -
          points[0].x;


        const dy =
          points[1].y -
          points[0].y;


        zoomState
          .pinchStartDistance =
          Math.hypot(
            dx,
            dy
          );


        zoomState
          .pinchStartLevel =
          zoomState.level;


        const centerX =
          (
            points[0].x +
            points[1].x
          ) / 2;


        const centerY =
          (
            points[0].y +
            points[1].y
          ) / 2;


        const rect =
          els.zoomContent
            .getBoundingClientRect();


        const localX =
          centerX -
          rect.left;


        const localY =
          centerY -
          rect.top;


        const scale =
          zoomState.baseScale *
          zoomState.level;


        zoomState.pinchWorldX =
          (
            localX -
            zoomState.x
          ) /
          scale;


        zoomState.pinchWorldY =
          (
            localY -
            zoomState.y
          ) /
          scale;


        zoomState.dragging =
          false;

      }

    }

  );


  /* ==========================================================
     MOUSE / TOUCH - MOVIMENTO
     ========================================================== */

  els.zoomContent.addEventListener(

    "pointermove",

    event => {

      if (
        !zoomState
          .pointers
          .has(
            event.pointerId
          )
      ) {
        return;
      }


      event.preventDefault();


      zoomState
        .pointers
        .set(

          event.pointerId,

          {
            x: event.clientX,
            y: event.clientY
          }

        );


      /* ======================================================
         PINCH CON DUE DITA
         ====================================================== */

      if (
        zoomState
          .pointers
          .size >= 2
      ) {

        const points =
          Array.from(
            zoomState
              .pointers
              .values()
          )
            .slice(
              0,
              2
            );


        const dx =
          points[1].x -
          points[0].x;


        const dy =
          points[1].y -
          points[0].y;


        const distance =
          Math.hypot(
            dx,
            dy
          );


        if (
          !zoomState
            .pinchStartDistance
        ) {
          return;
        }


        const ratio =
          distance /
          zoomState
            .pinchStartDistance;


        zoomState.level =
          clampZoom(

            zoomState
              .pinchStartLevel *
            ratio,

            zoomState.minLevel,

            zoomState.maxLevel

          );


        const centerX =
          (
            points[0].x +
            points[1].x
          ) / 2;


        const centerY =
          (
            points[0].y +
            points[1].y
          ) / 2;


        const rect =
          els.zoomContent
            .getBoundingClientRect();


        const localX =
          centerX -
          rect.left;


        const localY =
          centerY -
          rect.top;


        const scale =
          zoomState.baseScale *
          zoomState.level;


        zoomState.x =
          localX -
          zoomState
            .pinchWorldX *
          scale;


        zoomState.y =
          localY -
          zoomState
            .pinchWorldY *
          scale;


        constrainZoomPan();

        renderZoomTransform();

        return;

      }


      /* ======================================================
         TRASCINAMENTO CON MANINA
         ====================================================== */

      if (
        !zoomState.dragging
      ) {
        return;
      }


      const dx =
        event.clientX -
        zoomState.lastX;


      const dy =
        event.clientY -
        zoomState.lastY;


      zoomState.x += dx;

      zoomState.y += dy;


      zoomState.lastX =
        event.clientX;


      zoomState.lastY =
        event.clientY;


      constrainZoomPan();

      renderZoomTransform();

    }

  );


  /* ==========================================================
     FINE DRAG / PINCH
     ========================================================== */

  const endPointer =
    event => {

      if (
        !zoomState
          .pointers
          .has(
            event.pointerId
          )
      ) {
        return;
      }


      zoomState
        .pointers
        .delete(
          event.pointerId
        );


      if (
        zoomState
          .pointers
          .size < 2
      ) {

        zoomState
          .pinchStartDistance =
          0;

      }


      /*
         Se rimane un dito,
         può continuare a trascinare.
      */

      if (
        zoomState
          .pointers
          .size === 1
      ) {

        const remaining =
          Array.from(
            zoomState
              .pointers
              .values()
          )[0];


        zoomState.dragging =
          true;


        zoomState.lastX =
          remaining.x;


        zoomState.lastY =
          remaining.y;

      }

      else if (
        zoomState
          .pointers
          .size === 0
      ) {

        zoomState.dragging =
          false;


        els.zoomContent
          .classList
          .remove(
            "is-dragging"
          );


        getZoomStage()
          ?.classList
          .remove(
            "is-dragging"
          );

      }

    };


  els.zoomContent.addEventListener(
    "pointerup",
    endPointer
  );


  els.zoomContent.addEventListener(
    "pointercancel",
    endPointer
  );


  /*
     Se ruoto il telefono
     o cambio dimensione finestra,
     ricentriamo lo zoom.
  */

  window.addEventListener(
    "resize",
    () => {

      if (
        !els.zoomModal
          .classList
          .contains("hidden")
      ) {

        resetZoomView();

      }

    }
  );

}


/* ============================================================
   APRE ZOOM
   ============================================================ */

function openZoom() {

  const visible =
    $$(
      ".newspaper-page.is-visible",
      els.book
    );


  if (
    !visible.length
  ) {
    return;
  }


  els.zoomContent.innerHTML =
    "";


  /*
     Stage = contenitore che
     realmente spostiamo e ingrandiamo.
  */

  const stage =
    document.createElement(
      "div"
    );


  stage.className =
    "zoom-stage";


  visible.forEach(
    pagina => {

      const clone =
        pagina.cloneNode(
          true
        );


      clone.classList.add(
        "is-visible"
      );


      clone.classList.remove(

        "page-enter-next",

        "page-enter-prev",

        "page-left",

        "page-right"

      );


      stage.appendChild(
        clone
      );

    }
  );


  /*
     Se sul PC stiamo guardando
     due pagine, lo zoom comprende entrambe.
  */

  zoomState.naturalWidth =
    900 *
    visible.length;


  zoomState.naturalHeight =
    1273;


  zoomState.pointers.clear();

  zoomState.dragging =
    false;


  els.zoomContent
    .appendChild(
      stage
    );


  els.zoomModal
    .classList
    .remove("hidden");


  document.body
    .classList
    .add("no-scroll");


  /*
     All'apertura:
     pagina intera visibile.
  */

  requestAnimationFrame(
    resetZoomView
  );

}


/* ============================================================
   CHIUDE ZOOM
   ============================================================ */

function closeZoom() {

  if (
    !els.zoomModal
  ) {
    return;
  }


  els.zoomModal
    .classList
    .add("hidden");


  els.zoomContent
    .classList
    .remove(
      "is-dragging"
    );


  els.zoomContent.innerHTML =
    "";


  zoomState
    .pointers
    .clear();


  zoomState.dragging =
    false;


  zoomState
    .pinchStartDistance =
    0;


  zoomState.level =
    1;


  if (
    els.rsvpModal
      .classList
      .contains("hidden")
  ) {

    document.body
      .classList
      .remove("no-scroll");

  }

}

  /* ============================================================
     RSVP
     ============================================================ */

  function setupRsvp() {

    const rsvp =
      C.rsvp || {};


    if (
      rsvp.attivo === false
    ) {

      return;
    }


    els.rsvpSubtitle.textContent =
      rsvp.sottotitolo ||
      "";


    els.rsvpSubmit.textContent =
      rsvp.testoInvio ||
      "Invia conferma";


    buildRsvpFields();


    document.addEventListener(
      "click",

      event => {

        const button =
          event.target.closest(
            '[data-action="rsvp"]'
          );


       if (
  button
) {

  /*
     Se il pulsante RSVP viene premuto
     mentre siamo nello zoom,
     chiudiamo prima lo zoom.
  */

  if (
    !els.zoomModal
      .classList
      .contains("hidden")
  ) {

    closeZoom();

  }


  openRsvp();

}

      }
    );


    $$(
      "[data-close-rsvp]"
    )
      .forEach(
        element => {

          element.addEventListener(
            "click",
            closeRsvp
          );

        }
      );


    els.rsvpForm.addEventListener(
      "submit",
      submitRsvp
    );

  }


  function requiredMark(
    field
  ) {

    return field?.obbligatorio

      ? `
        <span class="required-star">
          *
        </span>
      `

      : "";

  }


  function inputField(
    name,
    field,
    type = "text"
  ) {

    if (
      !field ||
      field.attivo === false
    ) {

      return "";
    }


    return `

      <div class="form-group">

        <label
          class="form-label"
          for="rsvp_${name}"
        >

          ${esc(
            field.label ||
            name
          )}

          ${requiredMark(field)}

        </label>


        <input
          class="form-input"
          id="rsvp_${name}"
          name="${esc(name)}"
          type="${esc(type)}"

          ${
            field.placeholder

              ? `
                placeholder="${esc(
                  field.placeholder
                )}"
              `

              : ""
          }

          ${
            field.obbligatorio

              ? "required"

              : ""
          }
        >

      </div>

    `;

  }


  function numberField(
    name,
    field
  ) {

    if (
      !field ||
      field.attivo === false
    ) {

      return "";
    }


    const min =
      Number.isFinite(
        Number(field.min)
      )

        ? Number(field.min)

        : 0;


    const max =
      field.max === null ||
      field.max === undefined ||
      field.max === ""

        ? ""

        : `
          max="${Number(
            field.max
          )}"
        `;


    const value =
      Number.isFinite(
        Number(
          field.valoreDefault
        )
      )

        ? Number(
            field.valoreDefault
          )

        : min;


    return `

      <div class="form-group">

        <label
          class="form-label"
          for="rsvp_${name}"
        >

          ${esc(
            field.label ||
            name
          )}

          ${requiredMark(field)}

        </label>


        <input
          class="form-input"
          id="rsvp_${name}"
          name="${esc(name)}"
          type="number"

          min="${min}"

          ${max}

          value="${value}"

          ${
            field.obbligatorio

              ? "required"

              : ""
          }
        >

      </div>

    `;

  }


  function textareaField(
    name,
    field
  ) {

    if (
      !field ||
      field.attivo === false
    ) {

      return "";
    }


    return `

      <div class="form-group">

        <label
          class="form-label"
          for="rsvp_${name}"
        >

          ${esc(
            field.label ||
            name
          )}

          ${requiredMark(field)}

        </label>


        <textarea
          class="form-textarea"
          id="rsvp_${name}"
          name="${esc(name)}"

          ${
            field.placeholder

              ? `
                placeholder="${esc(
                  field.placeholder
                )}"
              `

              : ""
          }

          ${
            field.obbligatorio

              ? "required"

              : ""
          }
        ></textarea>

      </div>

    `;

  }


  function participationField(
    field
  ) {

    if (
      !field ||
      field.attivo === false
    ) {

      return "";
    }


    return `

      <div class="form-group">

        <div class="form-label">

          ${esc(
            field.label ||
            "Partecipazione"
          )}

          ${requiredMark(field)}

        </div>


        <div class="radio-group">

          ${
            (
              field.opzioni ||
              []
            )
              .map(
                option => `

                  <label class="radio-option">

                    <input
                      type="radio"

                      name="partecipazione"

                      value="${esc(
                        option.valore
                      )}"

                      ${
                        field.obbligatorio

                          ? "required"

                          : ""
                      }
                    >

                    <span>

                      ${esc(
                        option.testo
                      )}

                    </span>

                  </label>

                `
              )
              .join("")
          }

        </div>

      </div>

    `;

  }


  function buildRsvpFields() {

    const fields =
      C.rsvp?.campi ||
      {};


    const privacy =
      C.rsvp?.privacy ||
      {};


    els.rsvpFields.innerHTML = `


      <div class="form-row">

        ${inputField(
          "nome",
          fields.nome
        )}

        ${inputField(
          "cognome",
          fields.cognome
        )}

      </div>


      ${inputField(
        "telefono",
        fields.telefono,
        "tel"
      )}


      ${participationField(
        fields.partecipazione
      )}


      <div class="form-row">

        ${numberField(
          "adulti",
          fields.adulti
        )}

        ${numberField(
          "bambini",
          fields.bambini
        )}

      </div>


      ${textareaField(
        "allergie",
        fields.allergie
      )}


      ${textareaField(
        "note",
        fields.note
      )}


      ${
        privacy.attiva !== false

          ? `

            <div class="privacy-row">

              <input
                id="rsvp_privacy"
                name="privacy"
                type="checkbox"

                ${
                  privacy.obbligatoria

                    ? "required"

                    : ""
                }
              >


              <label for="rsvp_privacy">

                ${htmlText(
                  privacy.testo ||
                  ""
                )}


                ${
                  privacy.linkPrivacy

                    ? `
                      ${
                        linkHtml(
                          "Privacy",
                          privacy.linkPrivacy
                        )
                      }
                    `

                    : ""
                }

              </label>

            </div>

          `

          : ""
      }

    `;

  }


  function openRsvp() {

    const rsvp =
      C.rsvp || {};


    if (
      rsvp.apertura === "esterno" &&
      rsvp.linkEsterno
    ) {

      const url =
        safeUrl(
          rsvp.linkEsterno
        );


      if (url) {

        window.open(
          url,
          "_blank",
          "noopener,noreferrer"
        );

      }


      return;
    }


    els.rsvpModal.classList
      .remove("hidden");


    document.body.classList
      .add("no-scroll");


    setTimeout(
      () => {

        $(
          "input, select, textarea",
          els.rsvpForm
        )?.focus();

      },
      50
    );

  }


  function closeRsvp() {

    if (
      !els.rsvpModal
    ) {

      return;
    }


    els.rsvpModal.classList
      .add("hidden");


    hideRsvpMessage();


    if (
      els.zoomModal
        .classList
        .contains("hidden")
    ) {

      document.body.classList
        .remove("no-scroll");

    }

  }


  function showRsvpMessage(
    message,
    type
  ) {

    els.rsvpMessage.textContent =
      message;


    els.rsvpMessage.className =
      `rsvp-message ${type || ""}`
        .trim();


    els.rsvpMessage.classList
      .remove("hidden");

  }


  function hideRsvpMessage() {

    els.rsvpMessage.classList
      .add("hidden");


    els.rsvpMessage.textContent =
      "";


    els.rsvpMessage.className =
      "rsvp-message hidden";

  }


  async function submitRsvp(
    event
  ) {

    event.preventDefault();


    hideRsvpMessage();


    if (
      !els.rsvpForm
        .checkValidity()
    ) {

      els.rsvpForm
        .reportValidity();

      return;
    }


    const rsvp =
      C.rsvp || {};


    const endpoint =
      safeUrl(
        rsvp.endpoint
      );


    /*
       Finché non colleghiamo il sistema
       che salverà le conferme, il modulo
       mostra un messaggio invece di
       perdere i dati.
    */

    if (
  !endpoint
) {

  /*
     MODALITÀ DEMO:
     il modulo simula un invio riuscito
     ma NON salva nessun dato.
  */

  if (
    rsvp.modalitaDemo === true
  ) {

    showRsvpMessage(

      rsvp.messaggioSuccesso ||
      "Grazie! La tua risposta è stata registrata.",

      "success"

    );


    els.rsvpForm.reset();

    setDefaultRsvpNumbers();

    return;
  }


  /*
     INVITO REALE:
     se manca l'endpoint mostriamo errore,
     così non perdiamo risposte vere.
  */

  showRsvpMessage(
    "Il modulo non è ancora collegato al salvataggio delle risposte.",
    "error"
  );

  return;
}


    const formData =
      new FormData(
        els.rsvpForm
      );


    const payload =
      Object.fromEntries(
        formData.entries()
      );


    payload.evento =
      C.evento?.nomi ||
      C.meta?.title ||
      "Evento";


    payload.timestamp =
      new Date()
        .toISOString();


    els.rsvpSubmit.disabled =
      true;


    const originalText =
      els.rsvpSubmit.textContent;


    els.rsvpSubmit.textContent =
      rsvp.messaggioInvio ||
      "Invio in corso...";


    try {

      const method =
        String(
          rsvp.metodo ||
          "POST"
        )
          .toUpperCase();


      const response =
        await fetch(
          endpoint,
          {

            method,

            headers: {
              "Content-Type":
                "application/json"
            },

            body:
              JSON.stringify(
                payload
              )

          }
        );


      if (
        !response.ok
      ) {

        throw new Error(
          `HTTP ${response.status}`
        );

      }


      showRsvpMessage(

        rsvp.messaggioSuccesso ||

        "Grazie! La tua risposta è stata registrata.",

        "success"

      );


      els.rsvpForm.reset();


      setDefaultRsvpNumbers();

    } catch (
      error
    ) {

      if (
        C.debug
      ) {

        console.error(
          error
        );

      }


      showRsvpMessage(

        rsvp.messaggioErrore ||

        "Non è stato possibile inviare la risposta. Riprova.",

        "error"

      );

    } finally {

      els.rsvpSubmit.disabled =
        false;


      els.rsvpSubmit.textContent =
        originalText;

    }

  }


  function setDefaultRsvpNumbers() {

    const fields =
      C.rsvp?.campi ||
      {};


    const adults =
      $("#rsvp_adulti");


    const children =
      $("#rsvp_bambini");


    if (
      adults &&
      fields.adulti
    ) {

      adults.value =
        String(
          fields
            .adulti
            .valoreDefault ??
          1
        );

    }


    if (
      children &&
      fields.bambini
    ) {

      children.value =
        String(
          fields
            .bambini
            .valoreDefault ??
          0
        );

    }

  }


  /* ============================================================
     COPIA IBAN
     ============================================================ */

  function setupCopyIban() {

    document.addEventListener(
      "click",

      async event => {

        const box =
          event.target.closest(
            "[data-copy-iban]"
          );


        if (
          !box
        ) {

          return;
        }


        const iban =
          box.dataset
            .copyIban ||
          "";


        if (
          !iban
        ) {

          return;
        }


        try {

          await navigator
            .clipboard
            .writeText(
              iban
            );


          showToast(
            box.dataset
              .copyMessage ||
            "IBAN copiato"
          );

        } catch (
          error
        ) {

          const textarea =
            document.createElement(
              "textarea"
            );


          textarea.value =
            iban;


          textarea.style.position =
            "fixed";


          textarea.style.opacity =
            "0";


          document.body.appendChild(
            textarea
          );


          textarea.select();


          try {

            document.execCommand(
              "copy"
            );

          } catch (
            copyError
          ) {

            if (C.debug) {
              console.warn(copyError);
            }

          }


          textarea.remove();


          showToast(
            box.dataset
              .copyMessage ||
            "IBAN copiato"
          );

        }

      }
    );

  }


  /* ============================================================
     GOOGLE CALENDAR
     ============================================================ */

  function setupCalendar() {

    document.addEventListener(
      "click",

      event => {

        const button =
          event.target.closest(
            '[data-action="calendar"]'
          );


        if (
          !button
        ) {

          return;
        }


        openCalendar();

      }
    );

  }


  function openCalendar() {

    const calendario =
      C.calendario ||
      {};


    if (
      calendario.attivo === false
    ) {

      return;
    }


    const params =
      new URLSearchParams({

        action:
          "TEMPLATE",

        text:
          calendario.titolo ||
          C.evento?.nomi ||
          "Evento",

        dates:
          `${calendario.inizio || ""}/${calendario.fine || ""}`,

        details:
          calendario.descrizione ||
          "",

        location:
          calendario.luogo ||
          ""

      });


    window.open(

      `https://calendar.google.com/calendar/render?${params.toString()}`,

      "_blank",

      "noopener,noreferrer"

    );

  }


  /* ============================================================
     TOOLBAR
     ============================================================ */

  function setupToolbar() {

    if (
      C.controlli
        ?.audio
        ?.attivo === false ||

      C.musica
        ?.attiva === false
    ) {

      els.audioBtn
        ?.classList
        .add("hidden");

    }


    if (
      C.controlli
        ?.zoom
        ?.attivo === false
    ) {

      els.zoomBtn
        ?.classList
        .add("hidden");

    }


    if (
      C.controlli
        ?.fullscreen
        ?.attivo === false
    ) {

      els.fullscreenBtn
        ?.classList
        .add("hidden");

    }


    if (
      C.flipbook
        ?.frecce === false
    ) {

      els.prev
        ?.classList
        .add("hidden");


      els.next
        ?.classList
        .add("hidden");

    }

  }


  /* ============================================================
     IMMAGINI MANCANTI
     ============================================================ */

  function setupImageFallback() {

    document.addEventListener(
      "error",

      event => {

        const image =
          event.target;


        if (
          !(image instanceof HTMLImageElement)
        ) {

          return;
        }


        image.style.background =
          "#e8e8e8";


        image.style.minHeight =
          image.style.minHeight ||
          "80px";


        image.removeAttribute(
          "src"
        );


        image.setAttribute(
          "aria-label",
          "Immagine non disponibile"
        );

      },

      true
    );

  }


  /* ============================================================
     RESIZE
     ============================================================ */

  function setupResize() {

    let timer;


    window.addEventListener(
      "resize",

      () => {

        clearTimeout(
          timer
        );


        timer =
          setTimeout(
            () => {

              applyMode({
                keepPage: true
              });

            },
            120
          );

      }
    );

  }


  /* ============================================================
     AVVIO
     ============================================================ */

  function init() {

    applyMetaAndTheme();

    buildPages();

    setupToolbar();

    setupNavigation();

    setupMusic();

    setupFullscreen();

    setupZoom();

    setupRsvp();

    setupCopyIban();

    setupCalendar();

    setupImageFallback();

    setupResize();


    applyMode({
      keepPage: false
    });


    els.loading
      ?.classList
      .add("hidden");


    els.app
      ?.classList
      .remove("hidden");

  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init,
      {
        once: true
      }
    );

  } else {

    init();

  }

})();