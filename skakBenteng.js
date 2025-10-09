let papanCatur = [
    ["*","R","*","*","*"]
    ["*","*","*","*","*"]
    ["*","*","*","*","*"]
    ["*","*","*","*","*"]
    ["*","*","*","*","*"]
    ["*","B","*","*","*"]
]

//Output SKAK
let barisR = 0
let kolomR = 0

let barisB = 0
let kolomB = 0

for(let i=0;i<papanCatur.length;i++){
    for (let j=0;j<papanCatur.length;j++){
        if (papanCatur[i][j]=="R"){
            barisR = i
            kolomB = j
        }
        else if(papanCatur[i][j]=="B"){
            barisB = i
            barisR = j
        }
    }
}

console.log(`POSISI R:$(barisR),${kolomR}`);
console.log(`POSISI B:$(barisB),${kolomB}`);