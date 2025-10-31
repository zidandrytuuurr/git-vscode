const lahan = [
  ["subur", "kering", "subur", "subur"],
  ["kering", "subur", "kering", "kering"],
  ["subur", "subur", "tandus", "subur"],
  ["tandus", "kering", "tandus", "kering"]
];

const cuaca = {
  temperature: 28,
  humidity: 65,
  windSpeed: 10
};

console.log("Data Cuaca:");
console.log("Suhu: " + cuaca.temperature + "°C");
console.log("Kelembapan: " + cuaca.humidity + "%");
console.log("Kecepatan Angin: " + cuaca.windSpeed + " km/h\n");

let suhuCocok = cuaca.temperature >= 20 && cuaca.temperature <= 30;
let kelembapanCocok = cuaca.humidity > 50;
let anginCocok = cuaca.windSpeed < 15;
let cuacaCocok = suhuCocok && kelembapanCocok && anginCocok;

for (let i = 0; i < lahan.length; i++) {
  let jumlahPetak = lahan[i].length;
  let jumlahSubur = 0;
  
  for (let j = 0; j < lahan[i].length; j++) {
    if (lahan[i][j] === "subur") {
      jumlahSubur = jumlahSubur + 1;
    }
  }
  

  let persenSubur = (jumlahSubur / jumlahPetak) * 100;
  
  if (persenSubur < 50) {
    for (let j = 0; j < lahan[i].length; j++) {
      lahan[i][j] = "kering";
    }
  }
}


let totalPetakSubur = 0;
for (let i = 0; i < lahan.length; i++) {
  for (let j = 0; j < lahan[i].length; j++) {
    if (lahan[i][j] === "subur") {
      totalPetakSubur = totalPetakSubur + 1;
    }
  }
}

let petakDitanami = 0;
if (cuacaCocok) {
  petakDitanami = totalPetakSubur;
}

console.log("Total petak subur: " + totalPetakSubur);
console.log("Total petak yang ditanami: " + petakDitanami);

if (!cuacaCocok) {
  console.log("Cuaca tidak cocok untuk bercocok tanam");
}

console.log("\n");