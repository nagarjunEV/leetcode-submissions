/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [], j = 0;
    for(let i=0;i<nums.length;i++){
        ans[i] = nums[i]
        ans[i+nums.length] = nums[i]
    }
    return ans
};