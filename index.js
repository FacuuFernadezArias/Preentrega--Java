// Pedir nombre y apellido al usuario
var nombre = prompt("Ingresa tu nombre:");
var apellido = prompt("Ingresa tu apellido:");

// Verificar si se han dejado en blanco los campos de nombre y apellido
while (nombre === "" || apellido === "") {
  alert("Por favor, completa todos los campos.");
  nombre = prompt("Ingresa tu nombre:");
  apellido = prompt("Ingresa tu apellido:");
}

// Pedir el año de nacimiento al usuario
var añoNacimiento = parseInt(prompt("Ingresa tu año de nacimiento:"));

// Verificar si se ha dejado en blanco el campo de año de nacimiento
while (!añoNacimiento) {
  alert("Por favor, completa todos los campos.");
  añoNacimiento = parseInt(prompt("Ingresa tu año de nacimiento:"));
}

// Obtener el año actual
var añoActual = new Date().getFullYear();

// Calcular la edad
var edad = añoActual - añoNacimiento;

// Mostrar la edad al usuario
alert("Tu edad es: " + edad + " años");

// Verificar si la edad es mayor o igual a 18 años
if (edad >= 18) {
  alert("¡Bienvenido al baile, " + nombre + " " + apellido + "!");
} else {
  alert("Lo siento, " + nombre + " " + apellido + ". Debes tener al menos 18 años para ingresar al baile.");

  // Pedir nuevamente el año de nacimiento hasta que se ingrese una edad válida
  while (edad < 18) {
    añoNacimiento = parseInt(prompt("Ingresa tu año de nacimiento nuevamente:"));

    // Verificar si se ha dejado en blanco el campo de año de nacimiento
    while (!añoNacimiento) {
      alert("Por favor, completa todos los campos.");
      añoNacimiento = parseInt(prompt("Ingresa tu año de nacimiento nuevamente:"));
    }

    edad = añoActual - añoNacimiento;

    // Mostrar la edad al usuario
    alert("Tu edad es: " + edad + " años");

    if (edad >= 18) {
      alert("¡Bienvenido al baile, " + nombre + " " + apellido + "!");
      break;
    } else {
      alert("Lo siento, " + nombre + " " + apellido + ". Aún no tienes la edad suficiente para ingresar al baile.");
    }
  }
}

// Preguntar al usuario la cantidad de entradas deseadas
var cantidadEntradas = parseInt(prompt("¿Cuántas entradas deseas?"));

// Verificar si se ha dejado en blanco el campo de cantidad de entradas
while (!cantidadEntradas) {
  alert("Por favor, ingresa un valor válido.");
  cantidadEntradas = parseInt(prompt("¿Cuántas entradas deseas?"));
}

alert("Has solicitado " + cantidadEntradas + " entradas. ¡Disfruta del baile!");