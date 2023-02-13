// Ejercicio 1: escribe un programa que liste el nombre de las propiedades del siguiente objeto utilizando las dos formas comentadas con anterioridad: { name : "David Rayy", sclass : "VI", rollno : 12 }

// opcion 1 con object.keys 

let obj = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

let claves = Object.keys(obj);
console.log(claves);

for (let key of claves) {

    console.log(key);

    console.log(obj[key]);
}

// opcion 2 con for in 

for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}

// Ejercicio 2: escribe un programa que declare el siguiente objeto: { x: 1, y: 2 }. A continuación, elimina la propiedad x y añade una propiedad nueva z con valor 5.


let obj2 = {
    x: 1,
    y: 2,
}
delete obj2.x;
obj2[z] = 5;
console.log(obj2);


// Ejercicio 3: escribe un programa que declare dos objetos: { x: 1, y: 2, z: 3 } y { a: 1, y: 2, z: 1 }. A continuación, comprueba qué nombres de propiedades son coincidentes y cuáles son también coincidentes en valor.

let obj_1 = { x: 1, y: 2, z: 3 };
let obj_2 = { a: 1, y: 2, z: 1 };

let keys1 = Object.keys(obj_1); // [x ,y ,z ]
let keys2 = Object.keys(obj_2);

for (let i = 0; i < keys1.length; i++) {
    for (let j = 0; j < keys2.length; j++) {
        if (keys1[i] == keys2[j]) {
            console.log(La key del obj_1: "${keys1[i]}" en la pos[${ i }]es igual a la key del obj_2: "${keys2[j]}" en la pos[${ j }]);
        }

    }
}

