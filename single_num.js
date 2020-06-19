/** 
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
*/

/**
 * 笨比法
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    var numsTotal = 0;
    nums.forEach(element => {
        numsTotal += element;
    });

    var setTotal = 0;
    var sigleNums = Array.from(new Set(nums));
    for (let number of sigleNums) {
        console.log(number);
        setTotal += number*2;
    }

    return setTotal - numsTotal;

};

/**
 * 基础大法好
 */
var singleNumberAdvance = function(nums) {

    var result = 0;
    for (const number of nums) {
        result = result ^ number;
    }
    return result;

};

var nums = [4, 2,2,1,1];
var target = singleNumberAdvance(nums);
console.log(target);




