const formulario = document.getElementById("registroForm");
const tabla = document.querySelector("#tablaEstudiantes tbody");
const mensaje = document.getElementById("mensaje");
const filtroCarrera = document.getElementById("filtrocarrera");

// Función POST: guardar en localStorage
function postEstudiante(estudiante) {
    let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    estudiantes.push(estudiante);
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}

// Función GET: recuperar datos filtrados o todos
function getEstudiantes(carrera = "todos") {
    let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    if (carrera !== "todos") {
        estudiantes = estudiantes.filter(e => e.carrera === carrera);
    }
    return estudiantes;
}

// Función para actualizar la tabla
function mostrarEstudiantes(carrera = "todos") {
    const lista = getEstudiantes(carrera);
    tabla.innerHTML = "";
    lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
    lista.forEach((e, i) => {
    const fila = `
        <tr>
        <td>${i + 1}</td>
        <td>${e.nombre}</td>
        <td>${e.edad}</td>
        <td>${e.carrera}</td>
        </tr>
    `;
    tabla.innerHTML += fila;
        });
}

// Evento: al registrar estudiante
formulario.addEventListener("submit", e => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const carrera = document.getElementById("carrera").value;

    if (edad <= 16) {
    mensaje.textContent = "⚠️ La edad debe ser mayor a 16.";
    return;
    }

    const estudiante = { nombre, edad, carrera };
    postEstudiante(estudiante);
    mensaje.textContent = "";
    formulario.reset();
    mostrarEstudiantes(filtroCarrera.value);
});

// Evento: al filtrar por carrera
filtroCarrera.addEventListener("change", () => {
    mostrarEstudiantes(filtroCarrera.value);
});

// Mostrar al iniciar
mostrarEstudiantes();