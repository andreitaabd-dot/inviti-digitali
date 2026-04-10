const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const invite = document.getElementById("invite");
const music = document.getElementById("bgMusic");

document.getElementById("titolo").textContent = INVITO_CONFIG.titolo;
document.getElementById("sottotitolo").textContent = INVITO_CONFIG.sottotitolo;
document.getElementById("desc1").textContent = INVITO_CONFIG.descrizione1;
document.getElementById("desc2").textContent = INVITO_CONFIG.descrizione2;
document.getElementById("mese").textContent = INVITO_CONFIG.mese;
document.getElementById("giorno").textContent = INVITO_CONFIG.giorno;
document.getElementById("anno").textContent = INVITO_CONFIG.anno;
document.getElementById("giornoSettimana").textContent = INVITO_CONFIG.giornoSettimana;
document.getElementById("ora").textContent = INVITO_CONFIG.ora;
document.getElementById("testoFinale").textContent = INVITO_CONFIG.testoFinale;

const messaggioWhatsapp = encodeURIComponent(INVITO_CONFIG.whatsappMessaggio);
document.getElementById("btnWhatsapp").href =
  `https://wa.me/${INVITO_CONFIG.whatsappNumero}?text=${messaggioWhatsapp}`;

document.getElementById("btnMaps").href =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(INVITO_CONFIG.indirizzoMaps)}`;

openBtn.addEventListener("click", () => {
  cover.classList.add("fade-out");

  setTimeout(() => {
    cover.classList.add("hidden");
    invite.classList.remove("hidden");
    invite.classList.add("fade-in");

    if (music) {
      music.play().catch(() => {
        console.log("Autoplay bloccato dal dispositivo");
      });
    }
  }, 1100);
});