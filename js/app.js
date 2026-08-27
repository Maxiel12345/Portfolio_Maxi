//animacion para la aparicion de secciones
const secciones = document.querySelectorAll("section");
const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("mostrar");
    }
  });
});

secciones.forEach((seccion) => {
  observer.observe(seccion);
});


//rastreo el boton del menu y el nav
const btnMenu = document.getElementById("btn-menu");
const nav = document.querySelector(".Navegacion");

//le agrego la clase nav abierto y si hay otro click, se lo quito
btnMenu.addEventListener("click", () => {
  nav.classList.toggle("nav-abierto");
});

// cerrar al hacer click en un link (mejora UX en mobile)
links.forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("nav-abierto"));
});


//envio de mensajes a mi email
emailjs.init("e9VFOZ871p2nhLFVC");

const form = document.getElementById("form");
const btn = document.getElementById("btn-submit");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  btn.disabled = true;
  btn.textContent = "Enviando...";

  emailjs
    .sendForm("service_wpbpq1c", "template_9dsp94d", this)
    .then(() => {
      alert("¡Correo enviado con éxito!");
      form.reset();
    })
    .catch((err) => {
      alert("Error al enviar el correo. Por favor intenta de nuevo.");
      console.error("EmailJS Error:", err);
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = "Enviar";
    });
});
