// Pig Latin:
// ----------
// Pig Latin is a game of alterations played on the English language game. 
// To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed. 
// (Ex.: "banana" would yield anana-bay) 
// Read Wikipedia for more information on rules.

function pigLatin (str) {
    var word = str.toLowerCase();
    var pig = "ay";
    var first = word[0];
    var result = null;

    if (/[aeiou]/.test(first)) {
        result = word + "w" + pig;
        return result;
    }
    else
    {
        for (var i = 1; i < word.length; i++) {
            if (/[aeiouy]/.test(word[i])) {
                var temp = word.substr(0, i);
                return word.substr(i) + temp + pig;
            };
        };
    }  
}