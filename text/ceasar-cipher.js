// Ceasar Cipher:
// --------------
// A Caesar cipher is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.
// Source: Wikipedia
// Normally you should not pass the shift parameter, it should be hard coded due to security reasons. This is just for practice purposes.

function encrypt (str, num) {
    var word = str.toUpperCase();
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var cipher = alphabet.substr(num) + alphabet.substr(0, num);
    var result = "";

    for (var i = 0; i < word.length; i++) {
        if (word[i] != " ") {
            var loc = alphabet.indexOf(word[i]);
            result += cipher[loc];
        }
        else {
            result += " ";
        }
    };

    return result;
}

function decrypt (str, num) {
    var word = str.toUpperCase();
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var cipher = alphabet.substr(num) + alphabet.substr(0, num);
    var result = "";

    for (var i = 0; i < word.length; i++) {
        if (word[i] != " ") {
            var loc = cipher.indexOf(word[i]);
            result += alphabet[loc];
        }
        else {
            result += " ";
        }
    };

    return result;
}