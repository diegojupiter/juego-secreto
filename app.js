/* ESTAS VARIABLES, FUERON OPTIMIZADAS EN UNA FUNCIÓN --> asignarTextoElemento();
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/

//UNA BUENA PRÁCTICA ES FINALIZAR LAS FUNCIONES SIEMPRE CON UN "return;"

let numeroSecreto = 0;
let intentos = 0;  
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    /*   Esta forma de escribir el código es más descriptiva pero puede abreviarse en una sola línea de código 
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = ''; //Las comillas sin nada,  es decir, ' ', indican que le espacio esta vacío 
    */

    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    //Si ya sorteamos todos los números posibles 
    if (listaNumerosSorteados == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado está en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja 
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Inicicalzar el número de intentos
    condicionesIniciales();
    //Deshabilitar botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

/* EN UN COMIENZO ASIGNAMOS LOS MSJES Y FUERON LLAMADOS DE ESTA MANERA, AHORA SE INTEGRARON DENTRO DE UNA SOLA FUNCIÓN LLAMADA "reiniciarJuego();"
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');
*/