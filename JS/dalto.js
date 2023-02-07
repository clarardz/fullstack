
setTimeout(function() {
    alert(/*...*/);
}, 100);


dineroCofla = prompt("¿Cuánto dinero tienes Cofla?");
dineroRoberto = prompt("¿Cuánto dinero tienes Roberto?");
dineroPedro = prompt("¿Cuánto dinero tienes Pedro?");




// DINERO COFLA

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, compra una tarrina pequeña");
    alert("y te sobran " + (dineroCofla - 0.6));
}
else if (dineroCofla > 1 && dineroCofla < 1.6) {
    alert("Cofla, compra una tarrina mediana");
    alert("y te sobran " + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla, dcompra una tarrina grande");
    alert("y te sobran " + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla, compra un helado de sandwich "); alert("y te sobran " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla, compra un magnum XL");
    alert("y te sobran " + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9) {
    alert("Cofla, compra un kilo de helado");
    alert("y te sobran " + (dineroCofla - 2.9));
}
else {
    alert("lo siento, Cofla,  pobre de mierda, no te llega para ningún helado")
}

// DINERO ROBERTO

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, compra una tarrina pequeña")
}
else if (dineroRoberto > 1 && dineroRoberto < 1.6) {
    alert("Roberto, compra una tarrina mediana")
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto, compra una tarrina grande")
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto, compra un helado de sandwich ")
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto, compra un magnum XL")
}
else if (dineroRoberto >= 2.9) {
    alert("Roberto, compra un kilo de helado")
}
else {
    alert("lo siento, Roberto, pobre de mierda, no te llega para ningún helado")
}

// DINERO PEDRO

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, compra una tarrina pequeña")
}
else if (dineroPedro > 1 && dineroPedro < 1.6) {
    alert("Pedro, compra una tarrina mediana")
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, compra una tarrina grande")
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, compra un helado de sandwich ")
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, compra un magnum XL")
}
else if (dineroPedro >= 2.9) {
    alert("Pedro, compra un kilo de helado")
}
else {
    alert("lo siento, Pedro, pobre de mierda, no te llega para ningún helado")
}
dineroCofla = parseInt(dineroCofla); // convierte a numero entero
