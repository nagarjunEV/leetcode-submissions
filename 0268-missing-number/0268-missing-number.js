/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let nSum = Math.floor(nums.length * (nums.length+1) / 2);
    let sum = nums.reduce((a, b) => a+b, 0);
    return nSum - sum;
};