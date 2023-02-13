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

// let texto = "carambola"; 
// let posicion = 2;

// let anterior = texto.charAt(posicion - 1);
// // console.log(anterior)
// let posterior = texto.charAt(posicion +1);
// // console.log(posicion)

// if(posterior == anterior)
// {
// console.log("son iguales"); 
// }
// else{console.log("no son iguales"); }


// Ejercicio 5: escribe un programa que muestre por pantalla la posición de la segunda y tercera ocurrencia del carácter 'a' en un string dado.

// let palabra = "patatas";
// let caracter ="a"; 
// let primera = palabra.indexOf(caracter); 
// let segunda = palabra.indexOf(caracter, primera+1); 
// let tercera = palabra.indexOf(caracter, segunda+1); 

// console.log(primera); 
// console.log(segunda);
// console.log(tercera);

// Ejercicio 6: escribe un programa que devuelva si un string es palíndromo (se escribe igual hacia delante y hacia detrás). Ejemplo: "sometemos".

// let palindromo = "sometemos";
// let inverso = "";

// for (let i = palindromo.length - 1; i >= 0; i--) {
//     inverso += palindromo.charAt(i);

// }
// if (palindromo== inverso){
//     console.log("La palabra "+ palindromo + " es un palindromo"); 
// }
// else {

// console.log("La palabra "+ palindromo + " no es un palindromo"); 
// }
// console.log(inverso)

let coches = ["coche1", "coche2", "coche3"];
for (coche of coches) {
    console.log(coche);
}


let programas = ["html", "css", "js"];

console.log(programas.pop()); // quita js 
console.log(programas.push("Phyton")); // 3 
console.log(programas.shift()); // quita html 
console.log(programas.unshift("C++")); // 3 

console.log(programas);

const frutas3 = ['Banana', 'Orange', 'Apple'];
// ["Apple"]
console.log(frutas3.splice(2, 1, 'Lemon', 'Kiwi'));
// ['Banana", "Orange", "Lemon", "Kiwi"]
console.log(frutas3);


let colores = ["rojo", "azul", "verde", "ambar"];
console.log(colores.splice(1, 2, "rosa", "lila"));
console.log(colores);

console.table(colores);

// Ejercicio 1: escribe un programa que genere un array de 6 valores de tipo number y seanmostrados en pantalla utilizando un bucle for clásico y un bucle for...of

let edad = [10, 18, 21, 25, 30, 40];
for (let i = 0; i < edad.length; i++) {
    console.log(edad[i]);

}

for (edades of edad) {
    console.log(edades);
}
// Ejercicio 2 : escribe un programa que almacene los nombres de tres colores en un array ylos muestre por pantalla mediante un bucle for...of

colores = ["rojo", "verde", "azul"];
for (color of colores) {
    console.log(color);
}

// Ejercicio 3: escribe un programa con un array que almacene los nombres de tres colores.A continuación, crea otro array vacío e inserta en él todos los elementos del primer arraymediante un for...of y el método push.

array2 = [];
for (color of colores) {
    array2.push(color);
}
console.log(array2);

// Ejercicio 4: escribe un programa que dado dos arrays, devuelva el número de elementos que son iguales
let array = ["rojo", "amarillo", "azul"];
let array1 = ["rojo", "verde", "amarillo"];

let contador= 0 ; 


for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < array1.length; k++) {
        if (array[i] == array1[k]) {
            contador++;
        }
    }
}
console.log(contador); 