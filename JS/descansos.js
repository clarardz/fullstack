// ¿cuántos descansos he hecho hasta ahora?


let break1 = 11; // hago un descanso a las 11 
let break2 = 13; // hago un descanso a la 1  
let ahora = new Date().getHours();  // da la hora actual
let numBreaks;

if (ahora >= break1 && ahora < break2) {
  numbBreaks = 1; 
} else if (ahora >= break2) {
  numbBreaks = 2;
} else {
  numbBreaks = 0;
}

console.log("Son las " + ahora + " así que has hecho " + numbBreaks + " descansos hasta ahora zorri");
