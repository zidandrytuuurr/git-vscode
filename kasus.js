console.log("=== SIMULASI BUNGA TABUNGAN ===");

// 1. Variabel Input Awal
let saldoAwal = 1000000;
const bungaPerBulan = 0.02; // 2%
const totalBulan = 6;

let saldoSaatIni = saldoAwal;

console.log(`Saldo Awal: Rp ${saldoSaatIni.toLocaleString('id-ID')}`);
console.log(`Periode: ${totalBulan} bulan | Bunga: ${bungaPerBulan * 100}% per bulan`);
console.log("------------------------------------------");

// Perulangan FOR: Mengulang dari bulan ke-1 hingga totalBulan
for (let bulan = 1; bulan <= totalBulan; bulan++) {
    // A. Hitung nilai bunga bulan ini
    let bungaDidapat = saldoSaatIni * bungaPerBulan;

    // B. Tambahkan bunga ke saldo saat ini
    saldoSaatIni += bungaDidapat;

    // Tampilkan rincian setiap iterasi
    console.log(
        `Bulan ke-${bulan}: Bunga (+Rp ${Math.round(bungaDidapat).toLocaleString('id-ID')}) | Saldo Akhir: Rp ${Math.round(saldoSaatIni).toLocaleString('id-ID')}`
    );
}

console.log("------------------------------------------");
console.log(`Saldo AKHIR setelah ${totalBulan} bulan: Rp ${Math.round(saldoSaatIni).toLocaleString('id-ID')}`);
console.log("==========================================");