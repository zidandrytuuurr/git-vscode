let fruits = [
    ["Apel", 10000],
    ["Nanas", 5000],
    ["Pepaya", 7000]
];
console.log(fruits);
console.log(`size : ${fruits.length}`);
console.log(`fruits ke [0] : ${fruits[0]}`);
console.log(`${fruits[1][1]}`);
let total = 0;
let jmlLoop = 0;
for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < fruits[i].length; j++) {
        console.log(`${fruits[i][j]}`);
        if (j == 1) {
            total += fruits[i][j];
            jmlLoop++;
        }
    }
}
console.log(`Rata-rata harga buah : ${total / jmlLoop}`)