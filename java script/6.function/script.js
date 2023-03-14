function lulusKedokteran(nilaiIPA,nilaiIPS,nilaiMatematika,nilaiBahasa){
    const lulus = nilaiIPA > 70 && nilaiIPS > 70 && nilaiMatematika > 70 && nilaiBahasa > 70
    return lulus
}

const nilaiIPAjhon = 90, nilaiIPSjhon = 50, nilaiMatematikajhon = 80, nilaiBahasajhon = 80
const nilaiIPAjane = 90, nilaiIPSjane = 90, nilaiMatematikajane = 90, nilaiBahasajane = 90

const kelulusanKedokteranjhon = lulusKedokteran(
    nilaiIPAjhon,nilaiIPSjhon,nilaiMatematikajhon,nilaiBahasajhon
)

const kelulusanKedokteranjane = lulusKedokteran(
    nilaiIPAjane,nilaiIPSjane,nilaiMatematikajane,nilaiBahasajane
)

console.log('jhon lulus?',kelulusanKedokteranjhon)
console.log('jane lulus?',kelulusanKedokteranjane)