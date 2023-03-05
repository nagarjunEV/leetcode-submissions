/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let len = nums.length;
    for(let i=0;i<len;i++){
        nums[i+len] = nums[i]
    }
    return nums
};