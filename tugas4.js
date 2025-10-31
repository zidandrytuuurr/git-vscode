let studentsScore = [
    {
        name: 'Andi',
        score: 90
    },
    {
        name: 'Rudi',
        score: 80
    },
    {
        name: 'Dira',
        score: 100
    }
];

// Mencari siswa dengan nilai terbesar
let maxScore = studentsScore[0]; 

for (let i = 1; i < studentsScore.length; i++) {
    if (studentsScore[i].score > maxScore.score) {
        maxScore = studentsScore[i];
    }
}

// Menampilkan hasil
console.log(`Nama: ${maxScore.name}`);
console.log(`Nilai: ${maxScore.score}`);