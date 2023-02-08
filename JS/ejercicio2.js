// console.log("Hello World"); 
// let calc = 2 * 3; 
// console.log("El resultado de multiplicar 2*3 es "+ calc ); 

// 4.3 >= 4
// 1 == 2
// 4 < 4
// 2 !== 5
// 5 == '5'
// 5 === '5'
// 5 == 5
// 5 === 5




// if (4.3 >= 4) {
//     console.log(true)
// }


// Ejercicio 2: escribe un programa con cuatro variables de tipo number (a, b, c y d) y uncondicional que imprima por pantalla si la suma de a y b es mayor que la suma de c y d.

// let a = 1; 
// let b = 7; 
// let c = 9;
// let d = 3; 


// if (a + b > c + d) {
//     console.log("La suma de a y b es mayor que la suma de c y d");
//   } else {
//     console.log("La suma de a y b no es mayor que la suma de c y d");
//   }

//   Ejercicio 3: escribe un programa que almacene tres ángulos de un triángulo en variablesde tipo entero (angulo1, angulo2 y angulo3). Crea un condicional que compruebe si esostres ángulos juntos pueden formar un triángulo (los ángulos de un triángulo sumansiempre 180 grados).

// let angulo1 = 50; 
// let angulo2 = 90; 
// let angulo3 = 40; 

// if (angulo1 + angulo2 + angulo3 == 180) {
//     console.log("los ángulos pueden formar un triangulo" )
// } else {
//     console.log("los ángulos NO pueden formar un triangulo tonti")
// }

// Ejercicio 4: escribe un programa con una variable de tipo number (a) y un condicional que evalúe si el entero es par o impar utilizando el operador %.

// let a = 69; 
// if (a % 2 === 0) {
//     console.log("numero par"); 
// } else {
//     console.log("numero impar"); 
// }
// Ejercicio 5: escribe un programa que dado tres números imprima por pantalla cuál es el mayor.

// let a = 9; 
// let b = 99; 
// let c = 9; 


//  if (a > b && a > c) {
//     console.log(a + " a es el número más grande");
// } else if (b > c) {
//     console.log(b + " b es el número más grande");
// } else {
//     console.log(c + " c es el número más grande");
// }

//   Ejercicio 6: ¿cuál es el resultado de ejecutar el siguiente código?

//   const i = 25;
//   if(i == 25) {
//     console.log("a");
//     } else {
//     console.log("b");}


    // Ejercicio 7: ¿cuál es el resultado de ejecutar el siguiente código?
    // const i = 25;

    // if(i == 25) {
    //     console.log("a");
    // } 
    

    // if(i == 24) {
    //     console.log("b");
    // } else {
    //     console.log("c");
    // }


    // if (num1>num2 && num1>num3) {
    //     console. log ("El numl es el mayor");
    //     } else {
    //     if (num2>num3) {
    //     console.log ("El num2 es el mayor");
    //     } else {
    //     console.log("El num3 es el mayor");



    //     if (num1>num2 && num1>num3) {
    //     console.log("El num1 es el mayor");
    //     } else if (num2>num3){
    //          console.log("El num2 es el mayor");
    //     }
    //    else {
    //     console. log ("El num3 es el mayor");}


let hoy = new Date();
let dia = hoy.getDay();

switch (dia) {
  case 0:
    console.log("Hoy es Domingo");
    break;
  case 1:
    console.log("Hoy es Lunes");
    break;
  case 2:
    console.log("Hoy es Martes");
    break;
  case 3:
    console.log("Hoy es Miércoles");
    break;
  case 4:
    console.log("Hoy es Jueves");
    break;
  case 5:
    console.log("Hoy es Viernes");
    break;
  case 6:
    console.log("Hoy es Sábado");
    break;
}



let today = new Date();
let mes = today.getMonth();

switch (mes) {
  case 0:
    console.log("Es Enero");
    break;
  case 1:
    console.log("Es Febrero");
    break;
  case 2:
    console.log("Es Marzo");
    break;
  case 3:
    console.log("Es Abril");
    break;
  case 4:
    console.log("Es Mayo");
   
}
 console.log(dia + " y " + mes); 


