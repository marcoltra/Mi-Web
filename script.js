// Cogemos el botón
const boton = document.getElementById("btn-tema");

// Al abrir la web, si antes elegiste modo claro, lo ponemos
if (localStorage.getItem("tema") === "claro") {
  document.body.classList.add("claro");
  boton.textContent = "[ modo oscuro ]";
}

// Al hacer clic, cambiamos de tema y lo guardamos
boton.addEventListener("click", function () {
  document.body.classList.toggle("claro");

  if (document.body.classList.contains("claro")) {
    localStorage.setItem("tema", "claro");
    boton.textContent = "[ modo oscuro ]";
  } else {
    localStorage.setItem("tema", "oscuro");
    boton.textContent = "[ modo claro ]";
  }
});
// MENÚ RESPONSIVE
const botonMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

// Al pulsar ☰ se abre o se cierra el menú
botonMenu.addEventListener("click", function () {
  menu.classList.toggle("abierto");
});

// Al pulsar un enlace, el menú se cierra solo
const enlaces = menu.querySelectorAll("a");
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    menu.classList.remove("abierto");
  });
});