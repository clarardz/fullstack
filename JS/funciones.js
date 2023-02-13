// function suma(a, b) {
//     console.log(a + b);
// }
// suma(2, 4);
// suma(6, 9);


// const resta = function (a, b) {
//     console.log(a - b)
// }
// resta(7, 3);

// // 

// (function saludar() {
//     console.log("Hola");
// })();

// // this 
// function hacerAlgo(a, b) {

//     this.atr1 = a;
//     this.atr2 = b;
// }
// let objAlgo = new hacerAlgo(3, 5);

// console.log(objAlgo.atr1);
// console.log(objAlgo.atr2);

// // funcion arrow 
// function calc(altura) {
//     return 5 * altura / 2;
// }; // funcion normal 

// const calc1 = (altura) => {
//     return 5 * altura / 2;
// }; // funcion arrow 



// const calc2 = altura => 5 * altura / 2; // funcion arrow simplificada   
// console.log(calc2(5));

// Ejercicio 1: escribir una programa con cuatro funciones de flecha: sumar, restar, multiplicar y dividir (cada una de ellas debe aceptar dos parámetros y devolver el resultado). Posteriormente invocar a las cuatro funciones con valores arbitrarios.

// Ejercicio 2: adaptar el programa del ejercicio anterior simplificando las funciones de flecha eliminando las llaves y el return.

// let sumar = (a, b) => a + b;
// console.log(sumar(5, 5));

// let restar = (a, b) => a - b;
// console.log(restar(4, 2));

// let multiplicar = (a, b) => a * b;
// console.log(multiplicar(2, 4));

// let dividir = (a, b) => a / b;
// console.log(dividir(8, 4));


// Ejercicio 3: adaptar las cuatro funciones del Ejercicio 2 para que reciban un callback que sea invocado dentro de la función con el resultado de la operación. Posteriormente invocar a las cuatro funciones creando una función de callback por separado y pasándola después por parámetro. Utilizar la herramienta de depuración de Chrome (Herramientas de desarrollador --> Source) para comprobar cómo se ejecuta el programa.

// let sumar1 = (a, b, callback) => { callback(a + b); };

// sumar1(1, 2, (resultado) => {
//     console.log(resultado);
// });

// //
// let restar1 = (a, b, callback) => { callback(a - b); };

// restar1(8, 5, (resultado) => {
//     console.log(resultado);
// });

// //
// let multiplicar1 = (a, b, callback) => { callback(a * b); };

// multiplicar1(9, 2, (resultado) => {
//     console.log(resultado);
// });

// //
// let dividir1 = (a, b, callback) => { callback(a / b); };

// dividir1(6, 2, (resultado) => {
//     console.log(resultado);
// });

// setTimeout(() => {
//     console.log("hola");
// }, 2000);


// setTimeout(() => {
//     console.log('Hola'); setTimeout(() => {
//         console.log('Adiós');
//     }, 500);
// }, 1000)

// setTimeout(() => {
//     console.log('Buenas tardes');
// }, 100)
// console.log('Buenos días');


// Ejercicio 5: adaptar las cinco funciones del Ejercicio 4 para que las cuatro funciones invoquen el callback una vez han transcurrido 1 segundo (para la función sumar), 2 segundos (para la función restar), 3 segundos (para la función multiplicar) y 4 segundos para dividir (para la función dividir). Añadir un console.log en la última línea del código del programa. Utilizar la herramienta de depuración de Chrome para comprobar cómo se ejecuta el programa.



let sumar1 = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

let restar1 = (a, b, callback) => {
    setTimeout(() => {
      callback(a - b);
    }, 2000);
  };
  
  let multiplicar1 = (a, b, callback) => {
    setTimeout(() => {
      callback(a * b);
    }, 3000);
  };
  
  let dividir1 = (a, b, callback) => {
    setTimeout(() => {
      callback(a / b);
    }, 4000);
  };

  sumar1(1, 2, (resultado) => { console.log(resultado); });
  restar1(3, 2, (resultado) => { console.log(resultado); });
  multiplicar1(3, 2, (resultado) => { console.log(resultado); });
  dividir1(6, 2, (resultado) => { console.log(resultado); });