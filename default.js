const math = require('./math/arithmatic');
const {cmToMeter} = require('./converter/Distance');

let num1 = 10;
let num2 = 20;
let add = math.add(num1,num2);
console.log(`Hasil Penjumlahan : ${add}`);

let cm = 1000;
let cm_to_meter = cmToMeter(cm);
console.log(`${cm} cm = ${cm_to_meter} meter`);