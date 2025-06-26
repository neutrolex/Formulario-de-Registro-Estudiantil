const x = []

function agregarx(nombre,edad,carrera){
    if (edad <= 16){
        console.log("No se pudo agregar por ser menor de edad")
        return
    }
    const x = {nombre, edad, carrera}
    x.push(x)
    console.log("Se ha agregado correctamente")   
}

function listax(){
    if (x.length === 0) {
        console.log("No hay datos para mostrar")
    }
    else {
        console.log("No tenemos estudiantes registrados")
        x.forEach((a, i) =>{
            console.log('s{i + 1}. Nombre: ${a.nombre}, Edad: ${a.edad}, Carrera: ${a.carrera}')
        })
    }
}

function filtrarx(carrera){
    const filtrados = x.filter(a => a.carrera === carrera)
    if (filtrados.length === 0) {
        console.log("No hay estudiantes en la carrera ${carrera}")
    } else {
        console.log("Estudiantes en la carrera ${carrera}:")
        filtrados.forEach((a, i) => {
            console.log('${i + 1}. Nombre: ${a.nombre}, Edad: ${a.edad}')
        })
    }
}



