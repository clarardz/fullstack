// Ejercicio 1: escribe un programa que dado dos string compruebe si los dos primeros caracteres son iguales

// let text1 = "clara"
// let text2 = "carla"

// if (text1.slice(0, 2) === text2.slice(0, 2)) {
//     console.log("Son iguales");
// }
// else {
//     console.log("Son diferentes");
// }

// Ejercicio 2: escribe un programa que dado dos string compruebe si los dos primeros caracteres y los dos últimos son iguales.

// let text1= "clara"
// let text2= "carla"

// if (text1.slice(0,2) === text2.slice(0,2) ){
//  console.log("Los dos primeros son iguales"); 
// }
// else {
//     console.log("Los dos primeros son diferentes"); 
// }

// if (text1.slice(-2) === text2.slice(-2)){
//     console.log("Los dos ultimos son iguales"); 
//    }
//    else {
//        console.log("Los dos ultimos son diferentes"); 
//    }

// ----------- replace --------------------

// let str = 'Eres idiota';
// console.log(str.replace('idiota', 'muy majo'));



//   Ejercicio 3: escribe un programa que compruebe que el substring "abc" existe en un string dado, pero no puede encontrarse ni al comienzo, ni al final.


// let frase = 'Hola me abc llamo abc';
// let abc = "abc"

// let principio = frase.slice(0,3); 
// let final = frase.slice(-3); 


//  if (principio == abc){
//     console.log("Existe pero esta al principio asi que no es valido"); 
// }
// else if (final == abc ){
//     console.log("Existe pero esta al final asi que no es valido");
// }
// else if (frase.indexOf(abc) == -1){
//     console.log("no Existe"); 
// } else{
//     console.log("existe"); 
// }



// if (frase.slice(0, 3) == abc && frase.slice(-3) == abc ) {
//     console.log("abc se encuentra al principio y al final")
// } else if (frase.slice(-3) == abc) {
//     console.log("abc se encuentra al final")
// }
// else if (frase.slice(0, 3) == abc ){
//     console.log("abc se encuentra al principio")
// }
// else {
//     console.log("abc no se encuentra ni al principio ni al final")
// }




// Ejercicio 4: escribe un programa que dado un string y una determinado posición,compruebe que el carácter anterior y el posterior son iguales o no.

let texto = "carro"; 
let posicion = 2;


let anterior = texto.charAt(posicion - 1);

let posterior = texto.charAt(posicion +1);




// Ejercicio 5: escribe un programa que muestre por pantalla la posición de la segunda y tercera ocurrencia del carácter 'a' en un string dado.

