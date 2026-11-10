
(() => {
    'use strict';

    const cfg = window.TROPICANA_CONFIG || {};

    // =====================================================
    // 1. DOMANDE FREQUENTI (FAQ)
    // =====================================================

    const questions = [
        'È uno schema piramidale?',
        'Quanto costa in totale?',
        'Quanto tempo devo dedicarci ogni settimana?',
        'Devo essere esperto di social o marketing per iniziare?',
        "C'è una garanzia se non sono soddisfatto?",
        'Posso uscire quando voglio?'
    ];

    const faq = document.querySelector('#faq-list');

    if (faq) {
        questions.forEach((question, index) => {
            const details = document.createElement('details');
            const summary = document.createElement('summary');
            const answer = document.createElement('div');

            summary.textContent = question;
            answer.className = 'faq-answer';

            const content = (cfg.faqAnswers || [])[index];

            if (content) {
                answer.innerHTML = content;
            } else {
                answer.textContent =
                    'Risposta originale da inserire: questa informazione sarà disponibile prima della pubblicazione.';

                answer.classList.add('faq-pending');
            }

            details.append(summary, answer);
            faq.append(details);
        });
    }

    // =====================================================
    // 2. VIDEO
    // =====================================================

    for (const [name, url] of Object.entries(cfg.videos || {})) {
        if (!url) continue;

        const container = document.querySelector(
            `[data-video="${name}"]`
        );

        if (!container) continue;

        container.replaceChildren();

        let player;

        if (/(?:youtube\.com|youtu\.be|vimeo\.com)/i.test(url)) {
            player = document.createElement('iframe');

            let src = url;

            try {
                const parsedUrl = new URL(url);

                if (parsedUrl.hostname.includes('youtu.be')) {
                    src =
                        'https://www.youtube-nocookie.com/embed/' +
                        encodeURIComponent(
                            parsedUrl.pathname.slice(1)
                        );
                } else if (
                    parsedUrl.hostname.includes('youtube.com') &&
                    parsedUrl.searchParams.has('v')
                ) {
                    src =
                        'https://www.youtube-nocookie.com/embed/' +
                        encodeURIComponent(
                            parsedUrl.searchParams.get('v')
                        );
                } else if (
                    parsedUrl.hostname === 'vimeo.com' ||
                    parsedUrl.hostname === 'www.vimeo.com'
                ) {
                    src =
                        'https://player.vimeo.com/video/' +
                        encodeURIComponent(
                            parsedUrl.pathname
                                .split('/')
                                .filter(Boolean)[0]
                        );
                }
            } catch (error) {
                console.warn('URL video non valido:', url, error);
            }

            player.src = src;
            player.title = `Video ${name}`;
            player.loading = 'lazy';

            player.allow =
                'accelerometer; autoplay; clipboard-write; ' +
                'encrypted-media; gyroscope; picture-in-picture';

            player.allowFullscreen = true;
        } else {
            player = document.createElement('video');

            player.src = url;
            player.controls = true;
            player.preload = 'metadata';
        }

        container.append(player);
    }

    // =====================================================
    // 3. FOTO PERSONALE
    // =====================================================

    if (cfg.photoUrl) {
        const portrait = document.querySelector('#portrait');

        if (portrait) {
            portrait.style.backgroundImage =
                `url(${JSON.stringify(cfg.photoUrl).slice(1, -1)})`;

            portrait.replaceChildren();
        }
    }

    // =====================================================
    // 4. FOTO COMMUNITY
    // =====================================================

    if (cfg.communityPhotoUrl) {
        const community = document.querySelector('#community-photo');

        if (community) {
            community.style.backgroundImage =
                `url(${JSON.stringify(cfg.communityPhotoUrl).slice(1, -1)})`;

            community.replaceChildren();
        }
    }

    // =====================================================
    // 5. WHATSAPP
    // =====================================================

    const whatsappNumber =
        cfg.whatsappNumber?.replace(/\D/g, '');

    document.querySelectorAll('[data-whatsapp]').forEach(link => {
        if (whatsappNumber) {
            const message = encodeURIComponent(
                cfg.whatsappMessage || 'Ciao!'
            );

            link.href =
                `https://wa.me/${whatsappNumber}?text=${message}`;

            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        } else {
            link.href = '#contatti';

            link.title =
                'Inserisci il numero WhatsApp nel file config.js';

            link.addEventListener('click', event => {
                event.preventDefault();

                alert(
                    'WhatsApp non è ancora configurato. ' +
                    'Inserisci il numero nel file config.js.'
                );
            });
        }
    });

    // =====================================================
    // 6. LINK DEL FOOTER
    // =====================================================

    const privacy = document.querySelector('#privacy-link');
    const formPrivacy = document.querySelector('#form-privacy-link');
    const terms = document.querySelector('#terms-link');

    // Se esiste un'informativa configurata, collega i link.
    // Gli elementi eventualmente rimossi non causano errori.

    if (cfg.privacyUrl) {
        if (privacy) {
            privacy.href = cfg.privacyUrl;
            privacy.textContent = 'Privacy policy';
        }

        if (formPrivacy) {
            formPrivacy.href = cfg.privacyUrl;
            formPrivacy.target = '_blank';
            formPrivacy.rel = 'noopener';
        }
    }

    if (terms) {
        if (cfg.termsUrl) {
            terms.href = cfg.termsUrl;
            terms.textContent = 'Termini e condizioni';
        } else {
            terms.addEventListener('click', event => {
                event.preventDefault();

                alert(
                    'Termini e condizioni da collegare ' +
                    'nel file config.js.'
                );
            });
        }
    }

    // =====================================================
    // 7. ANNO AUTOMATICO NEL FOOTER
    // =====================================================

    const year = document.querySelector('#year');

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // =====================================================
    // 8. APERTURA E CHIUSURA MODULO
    // =====================================================

    const dialog = document.querySelector('#application-dialog');
    const openButton = document.querySelector('#open-application');
    const closeButton = document.querySelector('#close-application');

    if (dialog) {
        if (openButton) {
            openButton.addEventListener('click', () => {
                dialog.showModal();
            });
        }

        if (closeButton) {
            closeButton.addEventListener('click', () => {
                dialog.close();
            });
        }

        dialog.addEventListener('click', event => {
            if (event.target === dialog) {
                dialog.close();
            }
        });
    }

    // =====================================================
    // 9. INVIO CANDIDATURE
    // =====================================================

    const form = document.querySelector('#application-form');
    const status = document.querySelector('#form-status');
    const submitButton = document.querySelector('#submit-application');

    if (form && status && submitButton) {
        form.addEventListener('submit', async event => {
            event.preventDefault();

            status.className = 'form-status';
            status.textContent = '';

            // Verifica che il servizio sia configurato.
            if (!cfg.applicationEndpoint) {
                status.textContent =
                    'Il servizio di ricezione candidature ' +
                    'non è ancora collegato.';

                status.classList.add('error');
                return;
            }

          
            submitButton.disabled = true;
            status.textContent = 'Invio in corso…';

            const data = Object.fromEntries(
                new FormData(form).entries()
            );

            data.timestamp = new Date().toISOString();

            try {
                const response = await fetch(
                    cfg.applicationEndpoint,
                    {
                        method: 'POST',
                        body: new URLSearchParams({
                            payload: JSON.stringify(data)
                        })
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        `Risposta server: ${response.status}`
                    );
                }

                // Google Apps Script restituisce un JSON.
                // Verifichiamo il risultato effettivo.
                const result = await response.json();

                if (result.success !== true) {
                    throw new Error(
                        result.message ||
                        'Salvataggio non confermato'
                    );
                }

                status.textContent =
                    'Candidatura inviata correttamente. Grazie!';

                status.classList.add('ok');
                form.reset();

            } catch (error) {
                console.error(
                    'Errore invio candidatura:',
                    error
                );

                status.textContent =
                    'Non è stato possibile confermare l’invio. ' +
                    'Verifica prima di riprovare oppure ' +
                    'contattami su WhatsApp.';

                status.classList.add('error');

            } finally {
                submitButton.disabled = false;
            }
        });
    }
})();
