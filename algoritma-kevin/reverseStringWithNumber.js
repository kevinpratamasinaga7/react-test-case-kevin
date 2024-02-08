function reverseStringWithNumber(str) {
    // Memisahkan bagian huruf dan angka
    const letters = str.match(/[a-zA-Z]+/)[0];
    const number = str.match(/\d+/)[0];

    // Memisahkan huruf menjadi array, membalikkan array, dan menggabungkannya kembali menjadi string
    const reversedLetters = letters.split('').reverse().join('');

    // Mengembalikan string dengan urutan huruf yang dibalik dan angka yang tetap di belakang
    return reversedLetters + number;
}

const inputString = "NEGIE1";
const reversedString = reverseStringWithNumber(inputString);
console.log("Hasil =", reversedString);
