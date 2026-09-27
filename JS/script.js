const botonDetalles = document.getElementById("botonDetalles");

const detallesProceso = document.getElementById("detallesProceso");


botonDetalles.addEventListener("click", function () {

    detallesProceso.classList.toggle("activo");


    if (detallesProceso.classList.contains("activo")) {

        botonDetalles.textContent = "OCULTAR DETALLES";

    } else {

        botonDetalles.textContent = "CONOCE LOS DETALLES";

    }

});
/* ========================================
   FORMULARIO DE CONTACTO
======================================== */

const formularioContacto =
    document.getElementById("formularioContacto");

const mensajeFormulario =
    document.getElementById("mensajeFormulario");


formularioContacto.addEventListener("submit", function (event) {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value.trim();

    const telefono =
        document.getElementById("telefono").value.trim();

    const correo =
        document.getElementById("correo").value.trim();

    const mensaje =
        document.getElementById("mensaje").value.trim();


    /* REVISAR CAMPOS VACÍOS */

    if (
        nombre === "" ||
        telefono === "" ||
        correo === "" ||
        mensaje === ""
    ) {

        mensajeFormulario.textContent =
            "Por favor completa todos los campos.";

        return;

    }


    /* REVISAR CORREO */

    if (!correo.includes("@")) {

        mensajeFormulario.textContent =
            "Por favor escribe un correo válido.";

        return;

    }


    /* TODO ESTÁ CORRECTO */

    mensajeFormulario.textContent =
        "¡Gracias! Tu información se ha registrado correctamente.";


    formularioContacto.reset();

});
/* ========================================
   MENÚ MÓVIL
======================================== */

const menuToggle = document.getElementById("menuToggle");

const menu = document.getElementById("menu");


menuToggle.addEventListener("click", function () {

    menu.classList.toggle("activo");

});