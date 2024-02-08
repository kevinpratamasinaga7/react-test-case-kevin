function countWordsInInput(input, query) {
    const wordCount = {};
    const result = [];

    // Menghitung kemunculan kata dalam array INPUT
    for (let word of input) {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    // Memeriksa setiap kata dalam array QUERY
    for (let word of query) {
        if (wordCount[word]) {
            result.push(wordCount[word]);
        } else {
            result.push(0);
        }
    }

    return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const output = countWordsInInput(INPUT, QUERY);
console.log(output);
