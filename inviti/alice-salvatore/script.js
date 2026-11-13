
(() => {
    'use strict';

    const c = INVITO_CONFIG;
    const $ = s => document.querySelector(s);

    // SFONDO ACQUERELLO
    if (c.immagini.sfondoAcquerello) {
        const invito = $('.invito');

        invito.style.backgroundImage =
            `url("${c.immagini.sfondoAcquerello}")`;
        invito.style.backgroundSize = '100% auto';
        invito.style.backgroundRepeat = 'repeat-y';
        invito.style.backgroundPosition = 'center top';
        invito.style.setProperty(
            '--invito-bg',
            `url("${c.immagini.sfondoAcquerello}")`
        );
    }

    // TESTI E COLORI
    const set = (s, t) => {
        const el = $(s);
        if (el) el.textContent = t || '';
    };

    const css = {
        avorio: '--avorio',
        testo: '--testo',
        viola: '--viola',
        arancio: '--arancio',
        pesca: '--pesca',
        lilla: '--lilla',
        rosa: '--rosa',
        fontTitolo: '--fontTitolo',
        fontTesto: '--fontTesto'
    };

    Object.entries(css).forEach(([k, v]) => {
        if (c.tema[k]) {
            $('.invito').style.setProperty(v, c.tema[k]);
        }
    });

    document.title =
        c.meta.titolo || c.meta.title || c.sposi.nomi;

    set('#nomi', c.sposi.nomi);
    set('#data', c.sposi.dataTesto);
    set('#intro-title', c.introduzione.titolo);

    (c.introduzione.paragrafi || []).forEach(t => {
        const p = document.createElement('p');
        p.textContent = t;
        $('#intro-paragraphs').append(p);
    });

    // IMMAGINI
    document.querySelectorAll('[data-image]').forEach(el => {
        const key = el.dataset.image;
        const src = c.immagini[key];

        if (!src) return;

        const im = new Image();
        im.alt = key;
        im.loading = 'eager';

        im.onload = () => {
            el.appendChild(im);
            el.classList.add('has-image');
        };

        im.onerror = () => {
            console.error('Impossibile caricare:', src);
        };

        im.src = src;
    });

    // CERIMONIA E RICEVIMENTO
    for (const id of ['cerimonia', 'ricevimento']) {
        const sezione = $('#' + id);
        const dati = c[id];

        if (dati.attivo === false) {
            sezione.hidden = true;
            continue;
        }

        const parent = $('#' + id + ' .venue-copy');
        parent.replaceChildren();

        const h = document.createElement('h2');
        h.textContent = dati.titolo;
        parent.append(h);

        for (const val of [
            dati.nome,
            dati.data,
            dati.ora,
            dati.indirizzo
        ]) {
            if (val) {
                const p = document.createElement('p');
                p.textContent = val;
                parent.append(p);
            }
        }

        if (dati.mapsURL) {
            const a = document.createElement('a');
            a.href = dati.mapsURL;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = 'Apri su Google Maps';
            parent.append(a);
        }
    }

    // CONFERME RSVP
    set('#rsvp-title', c.conferma.titolo);

    set(
        '#rsvp-deadline',
        c.conferma.scadenza
            ? `Confermare entro il ${c.conferma.scadenza}`
            : ''
    );

    for (const [name, enabled] of
        Object.entries(c.conferma.campi)) {

        const el = document.querySelector(
            `[data-field="${name}"]`
        );

        if (el) el.hidden = !enabled;
    }

    set('#send', c.conferma.testoInvia);

    // DRESS CODE E LISTA NOZZE
    for (const [key, id] of [
        ['dressCode', 'dress-code'],
        ['listaNozze', 'lista-nozze']
    ]) {
        const data = c[key];
        const section = $('#' + id);

        section.hidden = !data.attiva;

        section.querySelector('h2').textContent =
            data.titolo;

        section.querySelector('p').textContent =
            data.testo || '';

        if (key === 'listaNozze') {
            const iban = section.querySelector('.iban');

            if (iban) {
                iban.replaceChildren();

                if (data.iban) {
                    const p = document.createElement('p');
                    p.textContent = `IBAN: ${data.iban}`;
                    iban.append(p);
                }

                if (data.intestatari) {
                    const p = document.createElement('p');
                    p.textContent =
                        `Intestatario: ${data.intestatari}`;
                    iban.append(p);
                }
            }
        }
    }

    // INVIO RISPOSTE A GOOGLE SHEETS
    // Manteniamo il funzionamento esistente.
    const form = $('#rsvp-form');
    const status = $('#form-status');
    const send = $('#send');

    form.addEventListener('submit', async e => {
        e.preventDefault();

        if (!c.conferma.endpoint) {
            status.textContent =
                'Modulo non ancora configurato.';
            return;
        }

        const payload = new URLSearchParams(
            new FormData(form)
        );

        payload.set('evento', c.sposi.nomi);
        payload.set('inviatoIl', new Date().toISOString());

        send.disabled = true;
        status.textContent = 'Invio in corso…';

        try {
            await fetch(c.conferma.endpoint, {
                method: 'POST',
                mode: 'no-cors',
                body: payload
            });

            status.textContent =
                'Richiesta inviata. La conferma sarà registrata dagli sposi.';

            form.reset();

        } catch (errore) {
            console.error(errore);

            status.textContent =
                'Impossibile inviare la richiesta. Riprova.';

        } finally {
            send.disabled = false;
        }
    });

    // CONFIGURAZIONE BRINDISI E TRANSIZIONE
    const opening = $('#opening');
    const toast = $('#toast-intro');
    const invite = $('#invito');

    const brindisiConfig = c.brindisi || {};
    const transizioneConfig = c.transizione || {};

    const velocitaBrindisi = Math.max(
        0.1,
        Number(brindisiConfig.velocita) || 1
    );

    const pausaBrindisi = Math.max(
        0,
        Number(brindisiConfig.pausaContattoMs) || 0
    );

    const durataTransizione =
        transizioneConfig.attiva === false
            ? 0
            : Math.max(
                0,
                Number(transizioneConfig.durataMs) || 0
            );

    const durataBaseBrindisi = 1900;

    const durataBrindisi = Math.round(
        durataBaseBrindisi / velocitaBrindisi
        + pausaBrindisi
    );

    const durataApertura =
        durataBrindisi + durataTransizione;

    toast.style.setProperty(
        '--brindisi-durata',
        `${durataBrindisi}ms`
    );

    toast.style.setProperty(
        '--brindisi-velocita',
        String(velocitaBrindisi)
    );

    toast.style.setProperty(
        '--brindisi-pausa',
        `${pausaBrindisi}ms`
    );

    toast.style.setProperty(
        '--transizione-durata',
        `${durataTransizione}ms`
    );

    toast.dataset.transizione =
        transizioneConfig.attiva === false
            ? 'nessuna'
            : (transizioneConfig.tipo || 'nessuna');

    (transizioneConfig.colori || []).forEach(
        (colore, indice) => {
            toast.style.setProperty(
                `--transizione-colore-${indice + 1}`,
                colore
            );
        }
    );

    // CALICI SPRITZ CONFIGURABILI
    if (
        brindisiConfig.caliceSinistro &&
        brindisiConfig.caliceDestro
    ) {
        const calici = toast.querySelectorAll('img');

        if (calici.length >= 2) {
            calici[0].src = brindisiConfig.caliceSinistro;
            calici[1].src = brindisiConfig.caliceDestro;
        }
    }

    // MUSICA DAL RITORNELLO
    const audio = $('#audio');
    const audioBtn = $('#audio-toggle');
    const audioHint = $('#tapAudioHint');

    const musicEnabled = Boolean(
        c.musica?.attiva && c.musica?.file
    );

    const inizioMusica = Math.max(
        0,
        Number(c.musica?.inizioSecondi) || 0
    );

    function posizionaMusica() {
        if (!musicEnabled) return;

        const limite = Number.isFinite(audio.duration)
            ? Math.max(0, audio.duration - 0.1)
            : inizioMusica;

        audio.currentTime = Math.min(
            inizioMusica,
            limite
        );
    }

    if (musicEnabled) {
        audio.src = c.musica.file;
        audio.preload = 'auto';

        // Loop gestito manualmente per ripartire
        // sempre dal ritornello.
        audio.loop = false;

        audio.addEventListener(
            'loadedmetadata',
            posizionaMusica
        );

        audio.addEventListener('ended', () => {
            if (c.musica.loop !== false) {
                posizionaMusica();
                audio.play().catch(() => {});
            }
        });

        audioBtn.hidden = false;
        audioHint.hidden = false;

        audio.addEventListener('playing', () => {
            audioHint.hidden = true;
            audioBtn.textContent = '❚❚';
        });

        audio.addEventListener('pause', () => {
            audioBtn.textContent = '♫';
        });

        audio.addEventListener('error', () => {
            audioHint.hidden = true;
            audioBtn.hidden = true;

            console.warn(
                'File musica non disponibile:',
                c.musica.file
            );
        });

        audioBtn.addEventListener('click', async () => {
            if (audio.paused) {
                try {
                    await audio.play();
                } catch (e) {
                    console.warn(
                        'Musica non avviata:',
                        e
                    );
                }
            } else {
                audio.pause();
            }
        });
    }

    // APERTURA BUSTA → CIN CIN → TRANSIZIONE → INVITO
    let openingStarted = false;

    function openInvitation() {
        if (openingStarted) return;
        openingStarted = true;

        $('#open-envelope').disabled = true;
        $('#open-cta').disabled = true;

        // Avvio musica al clic dell'utente
        if (musicEnabled) {
            if (audio.readyState >= 1) {
                posizionaMusica();
            }

            audio.play().catch(() => {
                audioHint.hidden = false;
            });
        }

        // Avvio brindisi
        toast.classList.add('active');
        opening.classList.add('is-hidden');

        // Transizione dopo il brindisi
        setTimeout(() => {
            if (durataTransizione > 0) {
                toast.classList.add('in-transizione');
            }
        }, durataBrindisi);

        // Visualizzazione invito
        setTimeout(() => {
            toast.classList.remove(
                'active',
                'in-transizione'
            );

            invite.scrollIntoView({
                behavior: 'instant',
                block: 'start'
            });

            document.body.style.overflow = '';

        }, durataApertura);
    }

    $('#open-envelope').addEventListener(
        'click',
        openInvitation
    );

    $('#open-cta').addEventListener(
        'click',
        openInvitation
    );

    document.body.style.overflow = 'hidden';

    // BRINDISI SPRITZ CASUALI AI BORDI
    if (
        c.brindisi?.casualeAiBordi === true &&
        c.brindisi?.attivo &&
        !window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches
    ) {
        const cfg = c.brindisi;

        const numeroCoppie = Math.min(
            3,
            Math.max(
                1,
                cfg.coppieContemporanee ?? 3
            )
        );

        const durata = Math.round(
            3000 / velocitaBrindisi + pausaBrindisi
        );

        function creaCoppia() {
            const el = document.createElement('div');

            el.className =
                'spritz-brindisi spritz-ai-bordi';

            el.setAttribute('aria-hidden', 'true');

            el.style.setProperty(
                '--spritz-size',
                `${cfg.dimensione ?? 40}px`
            );

            const sinistro = document.createElement('img');
            sinistro.className =
                'spritz-calice spritz-sinistro';
            sinistro.src = cfg.caliceSinistro;
            sinistro.alt = '';

            const destro = document.createElement('img');
            destro.className =
                'spritz-calice spritz-destro';
            destro.src = cfg.caliceDestro;
            destro.alt = '';

            el.append(sinistro, destro);
            document.body.appendChild(el);

            return el;
        }

        function posizioneCasuale(indice) {
            const invito = $('.invito');
            const rect = invito.getBoundingClientRect();

            const larghezza = 95;
            const altezza = 90;

            const aSinistra = indice % 2 === 0;

            const x = aSinistra
                ? rect.left + larghezza / 2 + 5
                : rect.right - larghezza / 2 - 5;

            const margineY = altezza / 2 + 15;

            const spazioY = Math.max(
                0,
                window.innerHeight - margineY * 2
            );

            const fascia = spazioY / numeroCoppie;

            const minimo =
                margineY + indice * fascia;

            const massimo =
                margineY + (indice + 1) * fascia;

            const y =
                minimo +
                Math.random() * (massimo - minimo);

            return { x, y };
        }

        function programma(el, indice) {
            const minimo = Math.max(
                500,
                cfg.intervalloMin ?? 1000
            );

            const massimo = Math.max(
                minimo,
                cfg.intervalloMax ?? 2000
            );

            const attesa =
                minimo +
                Math.random() * (massimo - minimo);

            setTimeout(
                () => mostra(el, indice),
                attesa
            );
        }

        function mostra(el, indice) {
            if (document.hidden) {
                programma(el, indice);
                return;
            }

            const { x, y } =
                posizioneCasuale(indice);

            el.style.left = `${x}px`;
            el.style.top = `${y}px`;

            el.style.setProperty(
                '--brindisi-durata',
                `${durata}ms`
            );

            el.classList.remove('attivo');
            void el.offsetWidth;
            el.classList.add('attivo');

            setTimeout(() => {
                el.classList.remove('attivo');
                programma(el, indice);
            }, durata);
        }

        for (let i = 0; i < numeroCoppie; i++) {
            const el = creaCoppia();

            setTimeout(
                () => mostra(el, i),
                i * 350
            );
        }
    }
})();
