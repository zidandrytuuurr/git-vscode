console.log("=== PERMAINAN TEBAK ANGKA (1-10) ===");

// 1. Angka Rahasia
const angkaRahasia = 7;
let tebakanBenar = false; // Kondisi Awal: Tebakan masih salah

// Simulasi tebakan pengguna (ini adalah input yang akan diuji)
const urutanTebakan = [3, 9, 5, 7]; 
let indexTebakan = 0; // Untuk mengambil tebakan dari array simulasi

// Perulangan WHILE: Akan terus berjalan selama tebakanBenar bernilai FALSE
while (!tebakanBenar) {
    // Ambil tebakan simulasi dari array
    const tebakanPengguna = urutanTebakan[indexTebakan];
    indexTebakan++; // Pindah ke tebakan berikutnya

    // Cek apakah simulasi tebakan sudah habis (jika input riil, ini tidak perlu)
    if (tebakanPengguna === undefined) {
        console.log("Error: Simulasi tebakan habis!");
        break; // Keluar dari loop jika tidak ada lagi tebakan
    }

    console.log(`Percobaan ke-${indexTebakan}: Anda menebak angka ${tebakanPengguna}`);

    // Logika pengujian tebakan
    if (tebakanPengguna === angkaRahasia) {
        // Jika tebakan BENAR, ubah kondisi! Ini akan MENGHENTIKAN perulangan WHILE
        tebakanBenar = true; 
        console.log("SELAMAT! Anda berhasil menebak angka rahasia!");
    } else if (tebakanPengguna < angkaRahasia) {
        console.log("Tebakan Anda terlalu kecil.");
    } else {
        console.log("Tebakan Anda terlalu besar.");
    }
}

console.log("========================================");