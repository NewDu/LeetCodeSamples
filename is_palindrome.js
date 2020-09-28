/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var arr = [];
    s = s.toLowerCase();
    for(let i = 0; i < s.length; i++) {
        if(isCharacterOrNum(s[i])) {
            arr.push(s[i]);
        }
    }

    //翻转数组
    var i = 0;
    var j = arr.length - 1;
    var result = true;
    while(i < j) {
        if (arr[i] != arr[j]) {
            result = false;
            break;
        }
        i++;
        j--;
    }
    return result;
};

function isCharacterOrNum(str) {
    var charCode = str.charCodeAt(0);
    if ((charCode>=65 && charCode <= 90) || (charCode>=97 && charCode <= 122) || (charCode>=48 && charCode <= 57)) {
        return true;
    }
    return false;
}

// var str = "A man, a plan, a canal: Panama";
var str = "race a car";
console.log(isPalindrome(str));
