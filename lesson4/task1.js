// Пример 1 - Поиска самого длинного слова
// Напиши фукцнию findLongestWord(string) 
// которая принимает произвольную строку 
// состоящую только из слов разделённых пробелом 
// (параметр string) и возвращает 
// самое длинное слово в этой строке.

const findLongestWord = (string) => {
    const words = string.split(' ');
    let longestWord = words[0];

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord('aa bbb cccc ddddd'));
console.log(findLongestWord('aa bbb cccccc ddddd'));
console.log(findLongestWord('aaaaaaa bbb cccccc ddddd'));
console.log(findLongestWord('aa bbb ccc ddd'));