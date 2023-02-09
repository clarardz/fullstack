//    Ejercicio 8: 
// for (var i = 50 ; i > 0 ; i--){
//     console.log(i); 
// }

//    Ejercicio 9: 
// for(let i = 0 ; i<10; i++){
//     let resultado = 5*i; 
//     console.log(`5*${i}=${resultado}`); 
// }


//    Ejercicio 10: 
// let palabra = prompt("Escribe una palabra: ");
// for (let i = 0; i < 10; i++) {
//     document.write(palabra + "<br>");
// }


//   Ejercicio 11: escribe un programa que pida al usuario un número entero positivo(mediante la función prompt) y muestre por pantalla la cuenta atrás desde ese número hasta cero, utilizando comas como separación.

// let numero = prompt("Escribe un numero entero positivo: ");
// for (let i = numero; i >= 0; i--) {
//     if (i > 0) {
//         document.write(i + ", ");
//     } else {
//         document.write(i);
//     }
// }


// else if (i > 0) {
//     document.write(i + ", ");
// } else {
//     document.write(i);
// }




//    Ejercicio 8 con do while 
// for (var i = 50 ; i > 0 ; i--){
//     console.log(i); 
// }

// let i = 0; 
// while (i <= 50 ) {
//     console.log(i) ; 
//     i++; 
// }


//    Ejercicio 9: 
// for(let i = 0 ; i<10; i++){
//     let resultado = 5*i; 
//     console.log(`5*${i}=${resultado}`); 
// }

// let i = 0; 
// while ( i < 10){
//     document.write("5x" + i + "=" + i*5 + "<br>"); 
//     i++; 
// }

//    Ejercicio 10: 
// let palabra = prompt("Escribe una palabra: ");
// for (let i = 0; i < 10; i++) {
//     document.write(palabra + "<br>");
// }


// let palabra = prompt ("Escribe una palabra: "); 
// let i = 0; 
// while( i < 10 ){
//     document.write(palabra + " "); 
//     i++; 
// }

// ej 11 
//  let numero = prompt("Escribe un numero entero positivo: ");
// for (let i = numero; i >= 0; i--) {
//     if (i > 0) {
//         document.write(i + ", ");
//     } else {
//         document.write(i);
//     }
// }


let i = prompt("Escribe un numero entero positivo: ");

while (i >= 0) {
    if (i > 0) {
        document.write(i + ", ");
    } else {
        document.write(i);
    }
    i--;
}
