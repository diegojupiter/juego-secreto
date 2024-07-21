//EJERCICIO 1 Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calculoIMC (altura, peso) {
    let imc = peso / (altura*altura);
    return imc;
}

console.log(calculoIMC(171, 75));

//EJERCICIO 2 Crea una función que calcule el valor del factorial de un número pasado como parámetro.

let numero1 = 5;
let resultado1 = calcularFactorial(numero1);
console.log(`El factorial de ${numero1} es ${resultado1}`);

function calcularFactorial(numero1) {
    if (numero1 === 0 || numero1 === 1) {
        return 1;
    } else {
        return numero1 * calcularFactorial(numero1 - 1);
    }
}

//EJERCICIO 3 Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function convertirDolaresAReales (dolares) {
    let cotizacionDolar = 4.80;
    let reales = dolares * cotizacionDolar;
    return reales;
}

//Ejemplo 
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares es R$ ${valorEnReales}`);

//EJERCICIO 4 Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function calcularAreaYPerimetroRectangulo (alto, ancho) {
    let areaRectangulo = alto*ancho;
    let perimetroRectangulo = 2 *(alto+ancho);
    console.log("Area es : " + areaRectangulo);
    console.log("Perímetro es: " + perimetroRectangulo);
}

let alto = 4;
let ancho = 7;
calcularAreaYPerimetroRectangulo(alto, ancho);

//EJERCICIO 5 Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function calcularAreaYPerimetroCircular(radio) {
    let pi = 3.14;
    let area = pi * radio * radio;
    let perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let radio = 4; // en metros
  calcularAreaYPerimetroCircular(radio);
  
  //EJERCICIO 6 Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

  function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero = 7;
  mostrarTablaDeMultiplicar(numero);
  