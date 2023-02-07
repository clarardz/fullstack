let a = 23;  
let b = 47; 
let c = 57; 



console.log(a+b+c); 

c = 24; 
let d = a + b + c; 

console.log(a+b+c); 
console.log(d); 


let array1 = ["hola", "papi", "q tal"]; 

console.log(array1.length); // 3 ("hola", "papi", "q tal")
console.log(array1[1].length);  // 4 (p a p i)

let date = new Date (); 
console.log(date); 

date = new Date () .getFullYear(); 
console.log(date)

date = new Date () .getMinutes();  
console.log(date)



date = new Date (date) .getFullYear(date); 
console.log(date)

let numerico = 3; 
let string = "3"; 
let boolean = true; 


console.log(numerico.toString());  // console.log(typeof(numerico.toString())); 
console.log(parseInt(string)); 
console.log(boolean.toString()); 



let x1= 4; 
let y1 = ++x1;
console.log(y1);
console.log(x1);

x1= 4; 
y1 = x1++;
console.log(y1);
console.log(x1);

