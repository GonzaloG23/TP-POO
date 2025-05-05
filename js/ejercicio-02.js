const estudiantes = [];
const cantidad = parseInt(prompt("¿Cuántos estudiantes desea ingresar?"));

for (let i=0; i<cantidad;i++){
    let nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
    let nota = parseFloat(prompt(`Ingrese la nota de ${nombre}:`));
    estudiantes.push({ nombre: nombre, nota: nota });
}

function calcularNotaMedia(estudiantes) {
    let suma = 0;
    for (let i = 0; i < estudiantes.length; i++) {
      suma += estudiantes[i].nota;
    }
    return suma / estudiantes.length;
  }
  const promedio = calcularNotaMedia(estudiantes);
  document.writeln(`<h2>Nota media de los estudiantes: ${promedio.toFixed(2)}</h2>`);
