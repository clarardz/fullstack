// Ejercicio 1 del proyecto: escribe un programa que declare 3 objetos de cada modelo de datos considerado: gestor, cliente, mensaje y transferencia. Los valores de las propiedades de los objetos pueden ser arbitrarios.


let gestor = {
    nombre: "Pedro",
    dinero: 400,
    numCuenta: 87389798,
};
let cliente = {
    nombre: "Eustaquio",
    numCuenta: 83273872,
    saldoDispo: 500,
};
let mensaje = {
    emisor: "Pedro",
    receptor: "Eustaquio",
    mensaje: "hola Eustaquio",
};
let transferencia = {
    emisor: 87389798,
    receptor: 83273872,
    cantidad: 200,

};


let gestor2 = Object.keys(gestor); 
for (const key of gestor2) {
    console.log(key); 
}



let cliente2 = Object.keys(cliente); 
for (const key of cliente2) {
    console.log(key); 
}


let mensaje2 = Object.keys(mensaje); 
for (const key of mensaje2) {
    console.log(key); 
}
