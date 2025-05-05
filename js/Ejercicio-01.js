const nombre = prompt("Ingrese nombre");
const edad = prompt("Ingrese edad");
const primerHobbie = prompt("Ingrese hobbie");

const persona = {
  nombre: nombre,
  edad: edad,
  hobbies: [primerHobbie,],
};

function agregarHobbie(persona, nuevoHobbie) {
  persona.hobbies.push(nuevoHobbie);
}

const nuevoHobbie = prompt("Ingrese un nuevo hobbie:");
agregarHobbie(persona, nuevoHobbie);

document.writeln(`<h2>Hobbies de ${persona.nombre}:</h2>`);
document.writeln("<ul>");
for (let i = 0; i < persona.hobbies.length; i++) {
  document.writeln(`<li>${persona.hobbies[i]}</li>`);
}
document.writeln("</ul>");
