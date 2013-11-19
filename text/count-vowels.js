// Count Vowels:
// -------------
// Enter a string and the program counts the number of vowels in the text. 
// For added complexity have it report a sum of each vowel found.

function countVowels (str) {
    var word = str.toLowerCase();
    var counter = 0;
    var vowels = {a:0, e:0, i:0, o:0, u:0};
    var result = "";

    for (var i = 0; i < word.length; i++) {
        if (/[aeiou]/.test(word[i])) {
            counter += 1;
        }

        for (var v in vowels) {
            if (word[i] == v) {
                vowels[v] += 1;
            };
        };
    };

    for (var v in vowels) {
        if (vowels[v] > 0) {
            result += v + ": " + vowels[v] + "\n";
        };
    };

    return result;
}