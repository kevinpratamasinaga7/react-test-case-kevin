function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWordInSentence = longestWord(sentence);
console.log(longestWordInSentence + ": " + longestWordInSentence.length + " character");
