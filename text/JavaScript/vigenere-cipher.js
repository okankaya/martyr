// Vigenère Cipher:
// ----------------
// The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. 
// It is a simple form of polyalphabetic substitution.

function encrypt (str, cipherKey) {
    var word = str.toUpperCase();
    var key = cipherKey.toUpperCase(); 
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var cipher = new Array();
    cipher.push(alphabet);
    var result = "";

    for (var i = 1; i < 26; i++) {
        var temp = alphabet.substr(i) + alphabet.substr(0, i);
        cipher.push(temp);
    };

    for (var i = 0; i < word.length; i++) {
        if (word[i] != " ") {
            var locAlphabet = alphabet.indexOf(word[i]);
            var locKey = alphabet.indexOf(key[i]);
            var temp = cipher[locAlphabet][locKey];
            result += temp;            
        }
        else {
            result += " ";
        }
    };

    return result;
}

function decrypt (str, cipherKey) {
    var word = str.toUpperCase();
    var key = cipherKey.toUpperCase(); 
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var cipher = new Array();
    cipher.push(alphabet);
    var result = "";

    for (var i = 1; i < 26; i++) {
        var temp = alphabet.substr(i) + alphabet.substr(0, i);
        cipher.push(temp);
    };

    for (var i = 0; i < word.length; i++) {
        if (word[i] != " ") {
            var locKey = alphabet.indexOf(key[i]);
            var locCipher = cipher[locKey].indexOf(word[i]);
            var temp = alphabet[locCipher];
            result += temp; 
        }
        else {
            result += " ";
        }
    };

    return result;
}