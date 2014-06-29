// Check if Palindrome:  
// --------------------
// Checks if the string entered by the user is a palindrome. 
// That is that it reads the same forwards as backwards like “racecar”

function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
}