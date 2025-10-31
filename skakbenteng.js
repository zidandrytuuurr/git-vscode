let papancatur = [
    ["", "R", "", "", ""],
    ["", "", "", "", "*"],
    ["", "", "", "", "*"],
    ["", "", "", "", "*"],
    ["", "", "", "", "*"],
    ["", "B", "", "", ""]
];
//output skak
let barisR = 0;
let kolomR = 0;
let barisB = 0;
let kolomB = 0;
for (let i = 0;i<papancatur.length; i++){
    for (let j = 0; j < papancatur[i].length; j++){
        if (papancatur[i][j] == "R"){
            barisR = i;
            kolomR = j;
        }
        else if (papancatur[i][j] == "B"){
            barisB = i;
            kolomB = j;
        }
    }
}
console.log(`Posisi R:${barisR},${kolomR}`);
console.log(`Posisi B:${barisB},${kolomB}`);
if(barisR>=0 && barisB>=0 && kolomR>=0 && kolomB>=0){
    if (barisB == barisR || kolomB == kolomR)
        console.log("Skak");
}
else {
    console.log("The King is free");
}