const estudiantes = [];

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");
    const filtro = document.getElementById("filtrocarrera");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        registrarEstudiante();
    });
    filtro.addEventListener("change", () => {
        filtrarPorCarrera();
    });
    mostrarEstudiantes(estudiantes);
});

function registrarEstudiante() {
    const nombre = document.getElementById("nombre").value.trim();
    const edad = parseFloat(document.getElementById("edad").value);
    const carrera = document.getElementById("carrera").value;
    const mensaje = document.getElementById("mensaje");

    if (!nombre || !edad || !carrera) {
        mensaje.innerText = "Rellene todos los campos";
        mensaje.style.color = "red";
        return;
    }
    if (edad <= 16) {
        mensaje.innerText = "Edad no válida";
        mensaje.style.color = "red";
        return;
    }
    estudiantes.push({ nombre, edad, carrera });
    mensaje.innerText = "Estudiante registrado correctamente";
    mensaje.style.color = "green";

    document.getElementById("registroForm").reset();
    mostrarEstudiantes(estudiantes);
}

function mostrarEstudiantes(lista) {
    const tbody = document.querySelector("#tablaEstudiantes tbody");
    tbody.innerHTML = "";
    lista.forEach((estudiante, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.edad}</td>
            <td>${estudiante.carrera}</td>
        `;
    });
}

function filtrarPorCarrera() {
    const filtro = document.getElementById("filtrocarrera").value;
    const estudiantesFiltrados = filtro === "todos"
        ? estudiantes
        : estudiantes.filter(estudiante => estudiante.carrera === filtro);
    mostrarEstudiantes(estudiantesFiltrados);
}