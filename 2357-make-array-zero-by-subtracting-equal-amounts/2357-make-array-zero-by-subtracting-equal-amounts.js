/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    nums = nums.filter(x => x!=0)
    let s = new Set(nums);
    return s.size;
};