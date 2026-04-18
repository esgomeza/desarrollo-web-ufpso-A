const formulario = document.getElementById("formulario");
const entrada = document.getElementById("entradaTarea");
const lista = document.getElementById("listaTareas");
const contadorTexto = document.getElementById("textoContador");

let cantidad = 0;

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    if (entrada.value === "") {
        return;
    }

    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = entrada.value;

    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar";

    botonBorrar.addEventListener("click", function() {
        nuevaTarea.remove();
        cantidad--;
        actualizarContador();
    });

    nuevaTarea.appendChild(botonBorrar);
    lista.appendChild(nuevaTarea);

    cantidad++;
    actualizarContador();

    entrada.value = "";
});

function actualizarContador() {
    contadorTexto.textContent = "Tareas pendientes: " + cantidad;
}