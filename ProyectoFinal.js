const precioBase = 2000
const edad18 = 0.10
const edad25 = 0.20
const edad50 = 0.30
const hijosRecargo = precioBase * 0.20
const propiedades = precioBase * 0.35
const salario = 0.05

var recargo = 0

function main() {

  while (true) {
    const nombre = prompt("Ingrese su nombre, por favor")
    if (nombre.toUpperCase() == "SALIR") {
      return;
    }
    var edad = prompt("Ingrese su edad, por favor.", "Ingrese solamente numeros")
    if (edad.toUpperCase() == "SALIR") {
      return;
    } else if (isNaN(parseInt(edad))) {
      while (isNaN(parseInt(edad))) {
        if (edad.toUpperCase() == "SALIR") {
          return;
        } else {
          edad = prompt("Ingrese su edad, por favor.", "Ingrese solamente numeros")
        }
      }
    }
    if (edad < 18) {
      alert("no califica por que es menor de edad");
      return;
    } else if (edad >= 18 && edad <= 24) {
      recargo = precioBase * edad18;
    } else if (edad >= 25 && edad <= 49) {
      recargo = precioBase * edad25;
    } else {
      recargo = precioBase * edad50;
    }
    const casado = prompt("¿Esta casado/a actualmente?", "Si/No")
    if (casado.toUpperCase() == "SALIR") {
      return;
    }
    if (casado.toUpperCase() == "SI") {
      var edadConyuge = prompt("¿Que edad tiene su conyuge?")
      if (edadConyuge.toUpperCase() == "SALIR") {
        return;
      } else if (isNaN(parseInt(edadConyuge))) {
        while (isNaN(parseInt(edadConyuge))) {
          if (edadConyuge.toUpperCase() == "SALIR") {
            return;
          }
          edadConyuge = prompt("¿Que edad tiene su conyuge?")
        }
      }
      if (edadConyuge >= 18 && edadConyuge <= 24) {
        recargo = recargo + (edad18 * precioBase);
      } else if (edadConyuge >= 25 && edadConyuge <= 49) {
        recargo = recargo + (edad25 * precioBase);
      } else {
        recargo = recargo + (edad50 * precioBase);
      }
    } else {}
    const hijos = prompt("Tiene hijos", "Si/No")
    if (hijos.toUpperCase() == "SALIR") {
      return;
    }
    if (hijos.toUpperCase() == "SI") {
      var cantidadDeHijos = prompt("¿Cuantos hijos tiene?")
      if (cantidadDeHijos.toUpperCase() == "SALIR") {
        return;
      } else if (isNaN(parseInt(cantidadDeHijos))) {
        while (isNaN(parseInt(cantidadDeHijos))) {
          if (cantidadDeHijos.toUpperCase() == "SALIR") {
            return;
          }
          cantidadDeHijos = prompt("¿Cuantos hijos tiene?")
        }
      }
      recargo = recargo + (hijosRecargo * cantidadDeHijos)
    }
    var propiedades1 = prompt("¿Cuantas propiedades tiene?")
    if (propiedades1.toUpperCase() == "SALIR") {
      return;
    } else if (isNaN(parseInt(propiedades1))) {
      while (isNaN(parseInt(propiedades1))) {
        if (propiedades1.toUpperCase() == "SALIR") {
          return;
        }
        propiedades1 = prompt("¿Cuantas propiedades tiene?")
      }
    }
    if (propiedades1 >= 1) {
      recargo = recargo + (propiedades * propiedades1)
    }
    var salario1 = prompt("¿Cual es su salario mensual?")
    if (salario1.toUpperCase() == "SALIR") {
      return;
    } else if (isNaN(parseInt(salario1))) {
      while (isNaN(parseInt(salario1))) {
        if (salario1.toUpperCase() == "SALIR") {
          return;
        }
        salario1 = prompt("¿Cual es su salario mensual?")
      }
    }
    if (salario1 > 0) {
      recargo = recargo + (salario * salario1)
    }
    alert("Para el asegurado: " + nombre)
    alert("El recargo total sera de: " + recargo)
    alert("El precio total sera de: " + (recargo + precioBase))
  }
  return;
}

main();