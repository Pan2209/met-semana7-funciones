'use strict'

function printAsAnAlert() {
    alert("¡Hola, esta es la función sin parámetros ni valor de retorno!");
}
printAsAnAlert(); // Llama a la función



function printAnAlertOfASum(a, b) {
    alert('La suma de ' + a + ' y ' + b + "es : " (a + b)+ "Esta es la funcion con parametros pero sin retorno");
}
printAnAlertOfASum(3, 5); // Llama a la función con argumentos 3 y 5



function getCurrentDate() {
    return new Date();
}
const fechaActual = getCurrentDate();
alert('La fecha actual es: ' +fechaActual);
// Esta es la funcion sin parametros pero con retorno




function prinAnAlertOfAMultiplication(a, b) {
    return a * b;
}
const resultado = prinAnAlertOfAMultiplication(4, 7);
alert('El resultado de la multiplicación es:' + resultado);
// Esta es la funcion con parametros y retorno
