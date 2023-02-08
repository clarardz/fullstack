// for (var i = 50 ; i > 0 ; i--){
//     console.log(i); 
// }


// for(let i = 0 ; i<10; i++){
//     let resultado = 5*i; 
//     console.log(`5*${i}=${resultado}`); 
// }



// let palabra = prompt("Escribe una palabra: ");
// for (let i = 0; i < 10; i++) {
//     document.write(palabra + "<br>");
// }


//   Ejercicio 11: escribe un programa que pida al usuario un número entero positivo(mediante la función prompt) y muestre por pantalla la cuenta atrás desde ese número hasta cero, utilizando comas como separación.

let numero = prompt("Escribe un numero entero positivo: ");
for (let i = numero; i > 0; i--){
    if (i >1){
        document.write(i + ", "); 
    } else { 
    document.write(i );}
}



