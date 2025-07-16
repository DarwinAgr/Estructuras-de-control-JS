//////////////////////////////////
//////////////////////////////////
//          EJERCICIO 1         //
//////////////////////////////////
//////////////////////////////////
function mayorDeEdad(pEdad) {
    pEdad >= 18 ? console.log("Es mayor de Edad") : console.log("Es menor de edad");
}

mayorDeEdad(19);
mayorDeEdad(11);
mayorDeEdad(18);






//////////////////////////////////
//////////////////////////////////
//          EJERCICIO 2         //
//////////////////////////////////
//////////////////////////////////
class Alumno {
    constructor(nombre, carnet, examen, tareas, asistencia, investigacion) {
        this.nombre = nombre;
        this.carnet = carnet;
        this.examen = examen;
        this.tareas = tareas;
        this.asistencia = asistencia;
        this.investigacion = investigacion;
    }

    calcularNotaFinal() {
        const notaFinal = (this.examen * 0.20) +
            (this.tareas * 0.40) +
            (this.asistencia * 0.10) +
            (this.investigacion * 0.30);

        console.log("Datos del Alumno.");
        console.log("Nombre: " + this.nombre);
        console.log("Carnet: " + this.carnet);
        console.log("Nota Final: " + notaFinal.toFixed(2));
    }
}

const alumno1 = new Alumno("Darwin Noe", "AT202500", 9.2, 8.5, 10, 7.8);
alumno1.calcularNotaFinal();





//////////////////////////////////
//////////////////////////////////
//          EJERCICIO 3         //
//////////////////////////////////
//////////////////////////////////
class Empleado {
    constructor(nombre, salario, categoria) {
        this.nombre = nombre;
        this.salario = salario;
        this.categoria = categoria.toUpperCase();
        this.aumento = this.calcularAumento();
    }

    calcularAumento() {
        let porcentaje = 0;

        switch (this.categoria) {
            case 'A':
                porcentaje = 0.15;
                break;
            case 'B':
                porcentaje = 0.30;
                break;
            case 'C':
                porcentaje = 0.10;
                break;
            case 'D':
                porcentaje = 0.20;
                break;
            default:
                console.log("Categoría inválida");
                return 0;
        }

        return this.salario * porcentaje;
    }

    mostrarDatos() {
        const nuevoSalario = this.salario + this.aumento;

        console.log("Datos del Empleado:");
        console.log("Nombre: " + this.nombre);
        console.log("Categoría: " + this.categoria);
        console.log("Salario Base: $" + this.salario);
        console.log("Aumento: $" + this.aumento);
        console.log("-----------------------");
        console.log("Nuevo Salario: $" + nuevoSalario);
    }
}

const empleado = new Empleado("Darwin", 400.00, "b");
empleado.mostrarDatos();







//////////////////////////////////
//////////////////////////////////
//          EJERCICIO 4         //
//////////////////////////////////
//////////////////////////////////
function numeroMayor() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let mayor = 0;

    if (num1 === num2) {
        document.getElementById('txtResultado').value = "Ambos son iguales";
    } else {
        mayor = num1 > num2 ? num1 : num2;
        document.getElementById('txtResultado').value = mayor;
    }
}








//////////////////////////////////
//////////////////////////////////
//          EJERCICIO 5         //
//////////////////////////////////
//////////////////////////////////
function calcularDescuento() {
    const auto = document.getElementById("auto").value;
    let descuento = 0;
    switch (auto) {
        case "FORD FIESTA":
            descuento = 5;
            break;
        case "FORD FOCUS":
            descuento = 10;
            break;
        case "FORD ESCAPE":
            descuento = 20;
            break;
        default:
            alert("Seleccione un auto");
            return console.log('Debe seleccionar un auto');
    }

    document.getElementById("txtAuto").value = auto;
    document.getElementById("txtDescuento").value = descuento + "%";
}










//////////////////////////////////
//////////////////////////////////
//        EJERCICIO   6         //
//////////////////////////////////
//////////////////////////////////
function DescuentoDeViaje(ptoOrigen, ptoDestino) {
    let descuento = 0;
    if (ptoOrigen.toLowerCase() === "ciudad de palma") {
        switch (ptoDestino.toLowerCase()) {
            case "la costa del sol":
                descuento = 5;
                break
            case "panchimalco":
                descuento = 10;
                break
            case "puerto el triunfo":
                descuento = 15;
                break
            default:
                descuento = 0;
        }
    }

    console.log(`Viaje de: "${ptoOrigen}".    Hacia: "${ptoDestino}". `);
    console.log(`Descuento: ${descuento}%`)
    return descuento;
}

DescuentoDeViaje("Ciudad de Palma", "pAnchimalco")









//////////////////////////////////
//////////////////////////////////
//        EJERCICIO   7         //
//////////////////////////////////
//////////////////////////////////
function procesarNumeros() {
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaDePares = 0;

    for (let i = 1; i <= 10; i++) {
        let entrada = prompt(`Ingrese el número ${i} de 10:`);
        let numero = parseInt(entrada);

        if (numero > 0) positivos++;
        else if (numero < 0) negativos++;

        if (numero % 15 === 0) multiplosDe15++;
        if (numero % 2 === 0) sumaDePares += numero;
    }

    document.getElementById("totalNegativos").textContent = negativos;
    document.getElementById("totalPositivos").textContent = positivos;
    document.getElementById("totalMultiplos").textContent = multiplosDe15;
    document.getElementById("sumaDePares").textContent = sumaDePares;
}




//////////////////////////////////
//////////////////////////////////
//        EJERCICIO   8         //
//////////////////////////////////
//////////////////////////////////
function tablaMultiplicar(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} × ${i} = ${num * i}`);
    }
}

tablaMultiplicar(3);





//////////////////////////////////
//////////////////////////////////
//        EJERCICIO   9         //
//////////////////////////////////
//////////////////////////////////
function convertirTemp() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    let fahrenheit = (1.8 * celsius) + 32;

    let msj = '';

    document.getElementById("fahrenheit").value = fahrenheit;
    if (fahrenheit >= 14 && fahrenheit < 32) {
        msj = 'Temperatura baja'
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        msj = 'Temperatura adecuada'
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        msj = 'Temperatura alta'
    } else {
        msj = 'Temperatura desconocida'
    }

    document.getElementById('msj').hidden = false;
    document.getElementById('msj').textContent = msj;
}







//////////////////////////////////
//////////////////////////////////
//        EJERCICIO   9         //
//////////////////////////////////
//////////////////////////////////
let edades = [];

function agregarEdad() {
    const valor = parseInt(document.getElementById("edadInput").value);

    if (edades.length >= 22) {
        alert("No se aceptan mas edades.");
        return;
    }

    let turno = "";
    if (edades.length < 5) turno = "Mañana";
    else if (edades.length < 11) turno = "Tarde";
    else turno = "Noche";

    edades.push({ edad: valor, turno });

    const tabla = document.getElementById("tablaEdades");
    const fila = document.createElement("tr");
    fila.innerHTML = `
    <td>${edades.length}</td>
    <td>${valor}</td>
    <td>${turno}</td>
  `;

    tabla.appendChild(fila);

    document.getElementById("edadInput").value = "";
    document.getElementById("edadInput").focus();
}

function calcularPromedios() {
    if (edades.length < 22) {
        alert("Debe ingresar las 22 edades antes de calcular.");
        return;
    }

    let sumaM = 0, sumaT = 0, sumaN = 0;
    let countM = 0, countT = 0, countN = 0;

    edades.forEach(e => {
        if (e.turno === "Mañana") {
            sumaM += e.edad;
            countM++;
        } else if (e.turno === "Tarde") {
            sumaT += e.edad;
            countT++;
        } else if (e.turno === "Noche") {
            sumaN += e.edad;
            countN++;
        }
    });

    const promM = sumaM / countM;
    const promT = sumaT / countT;
    const promN = sumaN / countN;

    // Determinar cuál es mayor
    let mensaje = "";
    if (promM > promT && promM > promN) mensaje = "El turno con mayor promedio es: Mañana";
    else if (promT > promM && promT > promN) mensaje = "El turno con mayor promedio es: Tarde";
    else if (promN > promM && promN > promT) mensaje = "El turno con mayor promedio es: Noche";
    else mensaje = "Hay un empate entre turnos.";

    // Mostrar resultados
    document.getElementById("resultados").innerHTML = `
    <p><strong>Promedio Mañana:</strong> ${promM}</p>
    <p><strong>Promedio Tarde:</strong> ${promT}</p>
    <p><strong>Promedio Noche:</strong> ${promN}</p>
    <div class="alert alert-info mt-3">${mensaje}</div>
  `;
}
