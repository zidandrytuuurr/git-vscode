// PROGRAM 1: Bilangan Prima Setelah Input
console.log("=== PROGRAM 1 ===");
let n = 13;
n = n + 1;

while (true) {
  let prima = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      prima = false;
      break;
    }
  }
  if (prima) {
    console.log(n);
    break;
  }
  n = n + 1;
}

console.log("\n=== PROGRAM 2 ===");
let awal = 1;
let akhir = 12;

let jumlah = 0;
let bilPrima = [];

for (let num = awal; num <= akhir; num++) {
  let prima = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prima = false;
      break;
    }
  }
  if (prima && num > 1) {
    jumlah = jumlah + num;
    bilPrima.push(num);
  }
}

console.log(bilPrima.join(" + ") + " = " + jumlah);