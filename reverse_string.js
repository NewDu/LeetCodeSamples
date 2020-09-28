/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    var i = 0;
    var j = s.length - 1;
    while(i < j) {
        const temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
};

// var chars = ['h','e','l','l','o'];
var chars = ['a'];
reverseString(chars);
console.log(chars);