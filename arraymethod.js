let data = [10,20,30,40,50]

console.log("array awal", data);

//menanbahkan data di akhir array
data.push(100)
console.log("tambah 100 di akhir", data);

//menghapus data di akhir array
data.pop()
console.log("hapus data di akhir", data);

//menambahkan data di awal array
data.unshift(0)
console.log("tambah 5 di awal", data);

//menghapus data di awal array
data.shift()
console.log("hapus data di awal", data);

//menghapus data di tengah array
data.splice(2,1)
console.log("hapus data index ke 2", data);

//menambahkan data di tengah array
data.splice(2,0,25)
console.log("tambah 25 di index ke 2", data);