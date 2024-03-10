class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, fechaNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.fechaNacimiento = fechaNacimiento;
  }

  mostrarGeneracion() {
    const añoActual = new Date().getFullYear();
    const edad = añoActual - this.fechaNacimiento;

    if (edad <= 25) {
      return "Generación Z";
    } else if (edad <= 45) {
      return "Generación Y";
    } else if (edad <= 65) {
      return "Generación X";
    } else if (edad <= 85) {
      return "Baby Boomer";
    } else {
      return "Silent generación";
    }
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}, Sexo: ${this.sexo}, Peso: ${this.peso}, Altura: ${this.altura}, Año de Nacimiento: ${this.fechaNacimiento}`;
  }
}

document
  .getElementById("personaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const dni = document.getElementById("dni").value;
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const fechaNacimiento = parseInt(
      document.getElementById("añoNacimiento").value
    );

    const persona = new Persona(
      nombre,
      edad,
      dni,
      sexo,
      peso,
      altura,
      fechaNacimiento
    );

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `
    <ul class="mt-4">
        <li>Nombre: ${persona.nombre}</li>
        <li>Edad: ${persona.edad}</li>
        <li>DNI: ${persona.dni}</li>
        <li>Sexo: ${persona.sexo}</li>
        <li>Peso (kg):${persona.peso}</li>
        <li>Altura (cm): ${persona.altura}</li>
        <li>Fecha de nacimiento: ${persona.fechaNacimiento}</li>
    </ul>

    <button id="btnMostrarGeneracion" class="btn-danger btn mt-4">Mostrar Generación</button>
    <button id="btnMostrarMayorDeEdad" class="btn-danger btn my-4">Es Mayor de Edad</button>
    `;

    document
      .getElementById("btnMostrarGeneracion")
      .addEventListener("click", function () {
        alert(persona.mostrarGeneracion());
      });

    document
      .getElementById("btnMostrarMayorDeEdad")
      .addEventListener("click", function () {
        if (persona.esMayorDeEdad()) {
          alert("La persona es mayor de edad.");
        } else {
          alert("La persona no es mayor de edad.");
        }
      });
  });
