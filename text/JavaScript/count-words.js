// Count Words in a String:
// ------------------------
// Counts the number of individual words in a string. 
// For added complexity read these strings in from a text file and generate a summary. (Not implemented)

function countWords (str) {
    var word = str.toLowerCase().split(" ");
    var wordsArray = new Array();

    for (var i = 0 ; i < word.length; i++) {
        updateArray(wordsArray, word[i]);
    };

    return wordsArray;
}

function updateArray (arr, str) {
    var o = new Object();
    o.w = str;
    o.c = 1;
    
    if (arr.length != 0) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].w == o.w) {
                arr[i].c += 1;
            }
            else
                arr.push(o);
        };
    }
    else
        arr.push(o);
}