var clara = "guapa"; 
console.log(clara); //  SNIPPET escribe "cl" y pone "console.log()"
document.write(clara); 
var clara = "diosa"; 
document.write(clara); //  SNIPPET escribe "dw" y pone "document.write()"


// --------- PROMPT Y ALERT ----------

let nombre = prompt("Dime tu Nombre"); 
alert("Hola " + nombre); 

// --------- OPERADORES BÁSICOS ----------

let numero1 = 10; 
numero1 += 5;  // -= *= /= %=
document.write(numero1); // mostara 15 

let numero2 = 6; 
let resultado = numero1 + numero2;  
document.write(resultado); // mostara 16 

numero2++; 
resultado = numero2; // mostara 7

let saludo = "Hola Pedro"; 
let pregunta = "¿Cómo estas?"; 
let frase = saludo + pregunta; 
document.write(frase); 

numero1 = 53; 
numero2 = 8; 
frase = "hola" + numero1 + numero2 ; 
document.write(frase);  // no sumara, pondra los numeros como un string (hola538)

// ---------  CONCATENACIÓN (concat)  ----------

frase = numero1.concat(numero2); 
document.write(frase)

let nombre = "clara romero"
let frase2 = "soy " + nombre + " y soy una diosa"; 
// otra forma de concat
nombre = "clara romero"
frase2 = `soy &{nombre} y soy una diosa`; // mejor usar backticks `

// --------- OPERADORES INTERMEDIOS ----------

let num1 = 23; 
let num2 = 13; 
document.write(num1 == num2); // es igual? pondra false
document.write(num1 != num2); // es distinto? pondra true
let text = "23"; 
document.write(num2 === text); // es estrictamente igual? pondra false porque 23 no es "23"
document.write(num2 !== text); // es estrictamente diferente? pondra true porque 23 no es "23" tipo de valor 

let num1 = 12; 
let num2 = 24; 
let afirmacion1 = num1 < num2; 
let afirmacion2 = num1 = num2; 

document.write(afirmacion1 && afirmacion2); // true (si todas son true sale true, si alguna de las dos es false sale false)

document.write(afirmacion1 || afirmacion2); // (or) true (con que una de las dos sea verdadera devuelve true) -- SNIPPET escribe "or" y saldra "||"

document.write(!true); // false -- devuelve lo contrario 

document.write( num1 < num2 || num1 == num2); // true 

// --------- OPERACIONES ----------

let num1 = 12; 
let num2 = 24; 
let num3 = 25; 
let num4 = 92; 
let num5 = 91; 
operacion = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3); 
document.write(operacion) // false

// operacion = (true || true) && (false && true); 
// operacion = (true) && (false); 

// --------- CAMEL CASE ------------

dimeAlgoPorfa // correcto
DimeAlgoPorfa // incorrecto

// --------- CONDICIONALES ------------

if(true){
    alert("hola"); 
}

if (10 < 15) {
    alert("hola"); 
} // si da true se ejecuta 

// ------------------
if (condition) {
    
}
else if (condition) {
    
}
 else {
    
}
// ------------------