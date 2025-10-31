var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

let result = {};
for (let i = 0; i < motoGP.length; i++) {
    let country = motoGP[i].winner.country;
    let winnerName = motoGP[i].winner.firstName + ' ' + motoGP[i].winner.lastName;
    let circuitLocation = motoGP[i].circuit + ' ' + motoGP[i].location;
    
    if (!result[country]) {
        result[country] = [];
    }
    
    // Tambahkan data pemenang dan circuit ke array negara tersebut
    result[country].push({
        name: winnerName,
        winLocation: circuitLocation
    });
}

console.log(result);