/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //将遍历过的数字存储下来，防止多次遍历
    var map = new Map();
    var item;
    var complete;
    var result;
    for (let index = 0; index < nums.length; index++) {
        item = nums[index];     
        complete = target - item;
        if(map.has(complete) && map.get(complete) != index){
            result = [map.get(complete), index];
            break;
        }

        //value和index以key:value方式存储起来
        map.set(item, index);
    }
    return result;

};

var num = [3,8,2,6];
var sum = 9;
var result1 = twoSum(num, sum);
console.log(result1);
