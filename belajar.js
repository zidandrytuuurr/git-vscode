let nama = "deandry";
let umur = "20";
let kelas = "24J"

let mahasiswa ={
    "nama" : "deandry",
    "umur" : "20",
    "kelas" : "24J",
    "hobi": "basket",
    "info" : function(){
    console.log(`nama : ${this.nama}`);
    console.log(`umur : ${this.umur}`);
    }
};

console.log (mahasiswa);
console.log (mahasiswa ["nama"]);
console.log (mahasiswa ["umur"]);
console.log (mahasiswa ["hobi"]);
console.log (mahasiswa)
mahasiswa.info ();