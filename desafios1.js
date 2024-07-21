//EJERCICIO 1 Crear una función que muestre "¡Hola, mundo!" en la consola.

function saludo () {
    console.log('¡Hola Mundo!');
}

saludo();

//EJERCICIO 2 Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function nombreDeUsuario (nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

nombreDeUsuario('Diego');

//EJERCICIO 3 Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function dobleNumero (numero) {
    return numero *2; 
}

let resultado1 = dobleNumero(8);
console.log(resultado1);

//EJERCICIO 4 Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio (num1, num2, num3) {
    return (num1+num2+num3) /2;
}

let resultado2 = promedio(4,5,7);
console.log(resultado2);

//EJERCICIO 5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function numMayor (n1, n2 ) {
    //uso de operador ternario, es decir, abreviar en una sola linea de codigo el IF - ELSE
    return n1 > n2 ? n1 : n2;
}

let resultado3 = numMayor(9, 6);
console.log(resultado3);

//EJERCICIO 6 Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function cuadrado(number) {
    return number*number;
}

let resultado4 = cuadrado(4);
console.log(resultado4);