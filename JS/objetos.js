const Person = function (name) {
    this.name = name || '';
    const lastname = 'Romero';
    const myName = this.name;
    const fullName = () => {
        return myName + ' ' + lastname;
    };
    this.introduce = () => {
        return 'Hola, mi nombre es ' + fullName();
    };
};
console.log(this.introduce)
const clara = new Person('Clara');
console.log(clara.name);
console.log(clara.introduce()); // Hola, mi nombre es Clara Romero 


// ---- OPCION 1   función clásica sin function ----

const objeto1 = {
    nombre: 'Alejandro',
    mostrarNombre() {
        console.log(this.nombre);
    }
}
objeto1.mostrarNombre(); // Alejandro 

// ---- OPCION 2  función clásica con function ----

const objeto2 = {
    nombre: 'Alejandro',
    mostrarNombre: function () {
        console.log(this.nombre);
    }
}
objeto2.mostrarNombre(); // Alejandro 

// ---- OPCION 3 funcion flecha  ----

const objeto3 = {
    nombre: 'Alejandro',
    mostrarNombre: () => {
        console.log(this.nombre);
    }
}
objeto3.mostrarNombre();// undefined