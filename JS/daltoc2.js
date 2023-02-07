
// ------ for / continue / break --------

// 1 declaración e inicialización 
// 2 condición 
// 3 aumento o decremeto 

for (let i = 0; i < 6 ; i++){
    console.log(i); 
} // 0 - 5


for (let a = 6; a >= 0 ; a--){
    console.log(a); 
} //  6 - 0  


for (let a = 0; a <20 ; a++){
    if(a==12){
        break; 
    }
    console.log(a); 
} // 0 - 11  


for (let a = 0; a <20 ; a++){
    if(a==12){
        continue; 
    }
    console.log(a);
} // 0 - 19 y se salta el 12  

// --------- for in / for of  -----------


let animales = ["gato", "perro", "pinguino"]; 

for (animal in animales) {
    console.log(animal); 
} // 0 1 2 

for (animal in animales) {
    console.log(animales[animal]); 
} //gato perro pinguino


for (animal of animales) {
    console.log(animal); 
} //gato perro pinguino


//los dos recorren en array, el IN guarda el indice y el OF el valor de la posicion 

// --------- label  -----------

array1 = ["maria", "josefa", "roberta"]; 
array2 = ["pedro", "marcelo" array1]; 

for (let array in array2) {
    if (array ==2) {
        for (let array of array1){
            console.log(array)
        }
    
    }
}