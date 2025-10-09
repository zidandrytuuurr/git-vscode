let baris = 6
let kolom = 5

let resultB =[]
let rerultK =[]

for(let i=1;i<=baris;i++){
    for(let j=1;j<=kolom;j++){
        if(i==j){
            resultK.push(1)
        }
        else{
            resultK.push(0)
        }
    }
    resultB.push(resultK)
}

console.log(resultB);