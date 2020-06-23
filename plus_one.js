/**
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
 */


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const factor = 10;
    var num = 1;
    var element;
    for (let index = digits.length - 1; index >= 0; index--) {
        element = digits[index] += num;
        if (element < factor) {
            num = 0;
            digits[index] = element;
            break;
        } else {
            element -= factor;
            digits[index] = element;
        }
    }
    if (num > 0) {
        digits.unshift(num);
    }
    return digits;
};

var digits = [0];
console.log(plusOne(digits));