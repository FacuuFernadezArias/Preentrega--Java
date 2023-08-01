// Pedir nombre y apellido al usuario
let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");

// Verificar si se han dejado en blanco los campos de nombre y apellido
while (nombre === "" || apellido === "") {
  alert("Por favor, completa todos los campos.");
  nombre = prompt("Ingresa tu nombre:");
  apellido = prompt("Ingresa tu apellido:");
}

// Pedir el año de nacimiento al usuario
let añoNacimiento = parseInt(prompt("Ingresa tu año de nacimiento:"));

// Verificar si se ha dejado en blanco el campo de año de nacimiento
while (!añoNacimiento) {
  alert("Por favor, completa todos los campos.");
  añoNacimiento = parseInt(prompt("Ingresa tu año de nacimiento:"));
}

// Obtener el año actual
const añoActual = new Date().getFullYear();

// Calcular la edad
let edad = añoActual - añoNacimiento;

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

// Mostrar el menú y procesar las opciones del usuario
let opcion;
do {
  opcion = parseInt(prompt(
    "Menú de opciones:\n" +
    "1. Comprar entradas\n" +
    "2. Comprar entradas VIP\n" +
    "3. Cancelar\n" +
    "Ingresa el número de la opción que deseas:"
  ));

  switch (opcion) {
    case 1:
      // Preguntar al usuario la cantidad de entradas deseadas
      let cantidadEntradas = parseInt(prompt("¿Cuántas entradas deseas comprar?"));

      // Verificar si se ha dejado en blanco el campo de cantidad de entradas
      while (!cantidadEntradas) {
        alert("Por favor, ingresa un valor válido.");
        cantidadEntradas = parseInt(prompt("¿Cuántas entradas deseas comprar?"));
      }

      if (cantidadEntradas > 1) {
        // Si se compran más de 1 entrada, solicitamos los datos de los usuarios adicionales
        let usuariosAdicionales = cantidadEntradas - 1;
        for (let i = 0; i < usuariosAdicionales; i++) {
          let nombreUsuario = prompt("Ingresa el nombre del usuario adicional #" + (i + 1) + ":");
          let apellidoUsuario = prompt("Ingresa el apellido del usuario adicional #" + (i + 1) + ":");
          let añoNacimientoUsuario = parseInt(prompt("Ingresa el año de nacimiento del usuario adicional #" + (i + 1) + ":"));

          while (!añoNacimientoUsuario) {
            alert("Por favor, completa todos los campos.");
            añoNacimientoUsuario = parseInt(prompt("Ingresa el año de nacimiento del usuario adicional #" + (i + 1) + ":"));
          }

          let edadUsuario = añoActual - añoNacimientoUsuario;

          // Verificar si el usuario adicional es mayor de edad
          if (edadUsuario >= 18) {
            alert("¡Usuario adicional" + (i + 1) + " es mayor de edad! Puede ingresar al baile.");
          } else {
            alert("Lo siento, " + nombreUsuario + " " + apellidoUsuario + ". No es mayor de edad y no puede ingresar al baile.");
            cantidadEntradas--; 
          }
        }
      }

      alert("Has solicitado " + cantidadEntradas + " entradas. ¡Disfruta del baile!");
      break;

    case 2:
      // Código para comprar entradas VIP
      alert("Has seleccionado la opción de comprar entradas VIP. Próximamente disponible.");
      break;

    case 3:
      // Opción para cancelar
      alert("Has seleccionado la opción de cancelar. ¡Hasta pronto!");
      break;

    default:
      alert("Opción inválida. Por favor, selecciona una opción válida del menú.");
  }
} while (opcion !== 3);
