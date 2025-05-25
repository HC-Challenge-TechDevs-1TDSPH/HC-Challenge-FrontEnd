document.addEventListener("DOMContentLoaded", () => {
  const btnMobile = document.getElementById("btn-mobile");
  const nav = document.getElementById("nav");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    btnMobile.setAttribute("aria-expanded", active);
  }

  if (btnMobile) {
    btnMobile.addEventListener("click", toggleMenu);
    btnMobile.addEventListener("touchstart", toggleMenu);
  }

  const formContato = document.getElementById("form-contato");
  if (formContato) {
    formContato.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs.sendForm("service_ce7qmrw", "template_x01kk7g", this)
        .then(() => {
          document.getElementById("mensagem-feedback").innerText =
            "Mensagem enviada com sucesso!";
          this.reset();
        })
        .catch((error) => {
          document.getElementById("mensagem-feedback").innerText =
            "Erro ao enviar: " + error.text;
        });
    });
  }

  const toggleBtn = document.getElementById("info-toggle");
  const infoExtra = document.getElementById("info-extra");

  if (toggleBtn && infoExtra) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = infoExtra.hasAttribute("hidden");
      if (isHidden) {
        infoExtra.removeAttribute("hidden");
        toggleBtn.textContent = "−";
        toggleBtn.setAttribute("aria-expanded", "true");
      } else {
        infoExtra.setAttribute("hidden", "");
        toggleBtn.textContent = "+";
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
});

// ===== Acessibilidade: Controle de Fonte e Tema =====
function aumentarFonte() {
  const body = document.body;
  let fontSize = parseFloat(getComputedStyle(body).fontSize);
  if (fontSize < 24) body.style.fontSize = (fontSize + 2) + "px";
}

function diminuirFonte() {
  const body = document.body;
  let fontSize = parseFloat(getComputedStyle(body).fontSize);
  if (fontSize > 12) body.style.fontSize = (fontSize - 2) + "px";
}

function alternarTema() {
  document.body.classList.toggle("dark-mode");
}