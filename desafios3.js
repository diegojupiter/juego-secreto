//EJERCICIO 1 Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

//EJERCICIO 2 Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//EJERCICIO 3 Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//EJERCICIO 4 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarLista() {
    console.log(lenguagesDeProgramacion);
}

mostrarLista();

//EJERCICIO 5 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarListaInversa () {
    let listaInversa = lenguagesDeProgramacion.reverse();
    console.log(listaInversa);
}   

mostrarListaInversa();

//EJERCICIO 6 Crea una función que calcule el promedio de los elementos en una lista de números.

let listaDeNumeros = [3, 6, 7, 8];


//EJERCICIO 7 Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
//EJERCICIO 8 Crea una función que devuelva la suma de todos los elementos en una lista.
//EJERCICIO 9 Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
//EJERCICIO 10 Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
//EJERCICIO 11 Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.