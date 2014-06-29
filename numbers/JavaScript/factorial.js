// Factorial Finder:
// -----------------
// The Factorial of a positive integer, n, is defined as the product of the sequence n, n-1, n-2, ...1 and the factorial of zero, 0, is defined as being 1. 
// Solve this using both loops and recursion.

function factorial (num) {
    var n = parseInt(num);
    var result = 1;

    if (n != 0 || n != 1) {
        for (var i = 1; i <= n; i++) {
            result *= i;
        };   
    }

    return result;
}