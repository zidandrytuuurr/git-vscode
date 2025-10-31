let nama = "Robi";
let address = "Cisaat";
let ortu = "Sayuri";

let mahasiswa = {
  "nama": "Robi",
  "alamat": "Cisaat",
  "age": 24,
  "tinggi": 165.7,
  "status": false,
  "hobi": ["sepakbola", "Renang"],
  "info": function() {
    console.log(`Nama : ${this.nama}`);
    console.log(`Alamat : ${this.alamat}`);
  }
};

console.log(mahasiswa);
console.log(mahasiswa["nama"]);
console.log(mahasiswa["hobi"]);
mahasiswa["prodi"] = "Informatika";
console.log(mahasiswa);
mahasiswa.info();